/**
 * DigiSchool Africa - B2C Learning System
 * Handles: Access Control, Progression Gating, Quiz Engine, Reader Preferences, TTS
 * Zero external dependencies - Pure JavaScript
 */

(function() {
  'use strict';

  // Storage keys
  const STORAGE_KEYS = {
    ENTITLEMENTS: 'digischool_b2c_entitlements',
    PROGRESS: 'digischool_b2c_progress',
    READER_PREFS: 'digischool_b2c_reader_prefs',
    QUIZ_ATTEMPTS: 'digischool_b2c_quiz_attempts'
  };

  // ===== ENTITLEMENTS & ACCESS CONTROL =====
  
  class EntitlementManager {
    constructor() {
      this.entitlements = this.load();
    }

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.ENTITLEMENTS);
        if (!stored) {
          return this.createEmpty();
        }
        const data = JSON.parse(stored);
        // Validate structure
        if (!data.version || !data.coursePack || !data.modules) {
          return this.createEmpty();
        }
        return data;
      } catch (e) {
        console.error('Entitlement load error:', e);
        return this.createEmpty();
      }
    }

    createEmpty() {
      return {
        version: '1.0.0',
        createdAt: new Date().toISOString(),
        coursePack: {},    // { 'leadership-management': true, ... }
        modules: {}        // { 'leadership-management': [1, 2, 3], ... }
      };
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEYS.ENTITLEMENTS, JSON.stringify(this.entitlements));
        return true;
      } catch (e) {
        console.error('Entitlement save error:', e);
        return false;
      }
    }

    // Grant full course pack access
    grantCoursePack(courseSlug) {
      this.entitlements.coursePack[courseSlug] = true;
      this.save();
    }

    // Grant specific module access
    grantModule(courseSlug, moduleNumber) {
      if (!this.entitlements.modules[courseSlug]) {
        this.entitlements.modules[courseSlug] = [];
      }
      if (!this.entitlements.modules[courseSlug].includes(moduleNumber)) {
        this.entitlements.modules[courseSlug].push(moduleNumber);
        this.entitlements.modules[courseSlug].sort((a, b) => a - b);
      }
      this.save();
    }

    // Check if user has access to a course
    hasCoursePack(courseSlug) {
      return this.entitlements.coursePack[courseSlug] === true;
    }

    // Check if user has access to specific module
    hasModuleAccess(courseSlug, moduleNumber) {
      // Full course pack grants access to all modules
      if (this.hasCoursePack(courseSlug)) {
        return true;
      }
      // Check individual module purchase
      const modules = this.entitlements.modules[courseSlug] || [];
      return modules.includes(moduleNumber);
    }

    // Get purchased modules for a course
    getPurchasedModules(courseSlug) {
      if (this.hasCoursePack(courseSlug)) {
        return [1, 2, 3, 4, 5, 6, 7, 8]; // All 8 modules
      }
      return this.entitlements.modules[courseSlug] || [];
    }

    // Generate access code
    generateAccessCode() {
      const payload = {
        v: this.entitlements.version,
        cp: this.entitlements.coursePack,
        m: this.entitlements.modules,
        ts: Date.now()
      };
      const json = JSON.stringify(payload);
      const b64 = this.base64urlEncode(json);
      const checksum = this.simpleChecksum(b64);
      return `${b64}.${checksum}`;
    }

    // Restore from access code
    restoreFromAccessCode(code) {
      try {
        const parts = code.split('.');
        if (parts.length !== 2) {
          throw new Error('Invalid code format');
        }
        const [b64, checksum] = parts;
        
        // Verify checksum
        if (this.simpleChecksum(b64) !== checksum) {
          throw new Error('Invalid checksum');
        }

        const json = this.base64urlDecode(b64);
        const payload = JSON.parse(json);

        // Validate payload
        if (!payload.v || !payload.cp || !payload.m) {
          throw new Error('Invalid payload structure');
        }

        // Restore entitlements
        this.entitlements = {
          version: payload.v,
          createdAt: new Date(payload.ts).toISOString(),
          coursePack: payload.cp,
          modules: payload.m
        };

        this.save();
        return { success: true, entitlements: this.entitlements };
      } catch (e) {
        console.error('Access code restore error:', e);
        return { success: false, error: e.message };
      }
    }

    // Check if user has access to a course or module
    hasAccess(courseSlug, moduleIndex = null) {
      if (!this.entitlements || !this.entitlements.coursePack) {
        return false;
      }

      // Check course pack access
      const hasCourseAccess = this.entitlements.coursePack[courseSlug] === true;
      
      if (moduleIndex === null) {
        // Just checking course access
        return hasCourseAccess;
      }

      // Check specific module access
      if (hasCourseAccess) {
        // Has full course access
        return true;
      }

      // Check if specific module is purchased
      if (this.entitlements.modules && this.entitlements.modules[courseSlug]) {
        return this.entitlements.modules[courseSlug].includes(moduleIndex);
      }

      return false;
    }

    // Alias for backwards compatibility
    checkEntitlement(courseSlug, moduleIndex = null) {
      return this.hasAccess(courseSlug, moduleIndex);
    }

    // Base64 URL-safe encoding
    base64urlEncode(str) {
      const b64 = btoa(unescape(encodeURIComponent(str)));
      return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }

    base64urlDecode(b64url) {
      let b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) {
        b64 += '=';
      }
      return decodeURIComponent(escape(atob(b64)));
    }

    // Simple checksum for validation
    simpleChecksum(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return Math.abs(hash).toString(36).substring(0, 6);
    }
  }

  // ===== PROGRESSION GATING =====

  class ProgressionManager {
    constructor() {
      this.progress = this.load();
    }

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        return stored ? JSON.parse(stored) : {};
      } catch (e) {
        console.error('Progress load error:', e);
        return {};
      }
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(this.progress));
        return true;
      } catch (e) {
        console.error('Progress save error:', e);
        return false;
      }
    }

    getCourseProgress(courseSlug) {
      if (!this.progress[courseSlug]) {
        this.progress[courseSlug] = {
          passedModules: [],
          scores: {},
          lastAttemptAt: {},
          completedAt: null
        };
      }
      return this.progress[courseSlug];
    }

    isModulePassed(courseSlug, moduleNumber) {
      const courseProgress = this.getCourseProgress(courseSlug);
      return courseProgress.passedModules.includes(moduleNumber);
    }

    markModulePassed(courseSlug, moduleNumber, score) {
      const courseProgress = this.getCourseProgress(courseSlug);
      if (!courseProgress.passedModules.includes(moduleNumber)) {
        courseProgress.passedModules.push(moduleNumber);
        courseProgress.passedModules.sort((a, b) => a - b);
      }
      // Store best score
      const currentScore = courseProgress.scores[moduleNumber] || 0;
      courseProgress.scores[moduleNumber] = Math.max(currentScore, score);
      
      this.save();
    }

    getModuleScore(courseSlug, moduleNumber) {
      const courseProgress = this.getCourseProgress(courseSlug);
      return courseProgress.scores[moduleNumber] || 0;
    }

    // Check if next module is unlocked
    isModuleUnlocked(courseSlug, moduleNumber) {
      // Module 1 is always unlocked
      if (moduleNumber === 1) {
        return true;
      }
      // Check if previous module is passed
      return this.isModulePassed(courseSlug, moduleNumber - 1);
    }

    // Get unlock status for all modules
    getModulesStatus(courseSlug) {
      const status = {};
      for (let i = 1; i <= 8; i++) {
        status[i] = {
          unlocked: this.isModuleUnlocked(courseSlug, i),
          passed: this.isModulePassed(courseSlug, i),
          score: this.getModuleScore(courseSlug, i)
        };
      }
      return status;
    }
  }

  // ===== QUIZ ENGINE =====

  class QuizManager {
    constructor() {
      this.attempts = this.load();
      this.PASSING_SCORE = 70;
      this.MAX_ATTEMPTS_PER_DAY = 2;
    }

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
        return stored ? JSON.parse(stored) : {};
      } catch (e) {
        console.error('Quiz attempts load error:', e);
        return {};
      }
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(this.attempts));
        return true;
      } catch (e) {
        console.error('Quiz attempts save error:', e);
        return false;
      }
    }

    getAttemptKey(courseSlug, moduleNumber) {
      return `${courseSlug}_m${moduleNumber}`;
    }

    getAttempts(courseSlug, moduleNumber) {
      const key = this.getAttemptKey(courseSlug, moduleNumber);
      if (!this.attempts[key]) {
        this.attempts[key] = {
          attempts: [],
          lastAttemptDate: null
        };
      }
      return this.attempts[key];
    }

    // Check if user can attempt quiz today
    canAttemptQuiz(courseSlug, moduleNumber) {
      const data = this.getAttempts(courseSlug, moduleNumber);
      const today = new Date().toDateString();
      
      // Filter attempts from today
      const todayAttempts = data.attempts.filter(a => {
        const attemptDate = new Date(a.timestamp).toDateString();
        return attemptDate === today;
      });

      return {
        canAttempt: todayAttempts.length < this.MAX_ATTEMPTS_PER_DAY,
        attemptsUsed: todayAttempts.length,
        attemptsRemaining: Math.max(0, this.MAX_ATTEMPTS_PER_DAY - todayAttempts.length),
        nextAttemptAt: todayAttempts.length >= this.MAX_ATTEMPTS_PER_DAY 
          ? this.getNextDayTimestamp() 
          : null
      };
    }

    getNextDayTimestamp() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      return tomorrow.toISOString();
    }

    // Record quiz attempt
    recordAttempt(courseSlug, moduleNumber, score, totalPoints) {
      const data = this.getAttempts(courseSlug, moduleNumber);
      const percentage = Math.round((score / totalPoints) * 100);
      
      data.attempts.push({
        timestamp: new Date().toISOString(),
        score: score,
        totalPoints: totalPoints,
        percentage: percentage,
        passed: percentage >= this.PASSING_SCORE
      });

      data.lastAttemptDate = new Date().toISOString();
      
      this.save();

      return {
        score,
        totalPoints,
        percentage,
        passed: percentage >= this.PASSING_SCORE,
        attemptsUsed: data.attempts.filter(a => {
          return new Date(a.timestamp).toDateString() === new Date().toDateString();
        }).length
      };
    }

    // Get best score for a module
    getBestScore(courseSlug, moduleNumber) {
      const data = this.getAttempts(courseSlug, moduleNumber);
      if (data.attempts.length === 0) {
        return null;
      }
      const scores = data.attempts.map(a => a.percentage);
      return Math.max(...scores);
    }

    // Check if module quiz is passed
    isQuizPassed(courseSlug, moduleNumber) {
      const data = this.getAttempts(courseSlug, moduleNumber);
      return data.attempts.some(a => a.passed);
    }
  }

  // ===== READER PREFERENCES =====

  class ReaderPreferences {
    constructor() {
      this.prefs = this.load();
      this.applyPreferences();
    }

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.READER_PREFS);
        return stored ? JSON.parse(stored) : this.getDefaults();
      } catch (e) {
        console.error('Reader prefs load error:', e);
        return this.getDefaults();
      }
    }

    getDefaults() {
      return {
        fontSize: 20,          // 18, 20, 22, 24
        lineHeight: 1.8,
        maxWidth: '72ch',
        dyslexiaMode: false,
        highContrast: false
      };
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEYS.READER_PREFS, JSON.stringify(this.prefs));
        return true;
      } catch (e) {
        console.error('Reader prefs save error:', e);
        return false;
      }
    }

    setFontSize(size) {
      const validSizes = [18, 20, 22, 24];
      if (validSizes.includes(size)) {
        this.prefs.fontSize = size;
        this.save();
        this.applyPreferences();
      }
    }

    toggleDyslexiaMode() {
      this.prefs.dyslexiaMode = !this.prefs.dyslexiaMode;
      this.save();
      this.applyPreferences();
    }

    toggleHighContrast() {
      this.prefs.highContrast = !this.prefs.highContrast;
      this.save();
      this.applyPreferences();
    }

    applyPreferences() {
      const contentArea = document.getElementById('module-content') || document.body;
      
      // Font size
      contentArea.style.fontSize = `${this.prefs.fontSize}px`;
      contentArea.style.lineHeight = this.prefs.lineHeight;
      contentArea.style.maxWidth = this.prefs.maxWidth;

      // Dyslexia mode
      if (this.prefs.dyslexiaMode) {
        contentArea.style.letterSpacing = '0.12em';
        contentArea.style.wordSpacing = '0.16em';
      } else {
        contentArea.style.letterSpacing = '';
        contentArea.style.wordSpacing = '';
      }

      // High contrast
      if (this.prefs.highContrast) {
        contentArea.style.backgroundColor = '#000000';
        contentArea.style.color = '#ffffff';
      } else {
        contentArea.style.backgroundColor = '';
        contentArea.style.color = '';
      }
    }

    getPreferences() {
      return { ...this.prefs };
    }
  }

  // ===== TEXT TO SPEECH =====

  class TTSManager {
    constructor() {
      this.synth = window.speechSynthesis;
      this.utterance = null;
      this.isPlaying = false;
      this.isPaused = false;
      this.speed = 1.0;
      this.selectedVoice = null;
    }

    isSupported() {
      return 'speechSynthesis' in window;
    }

    getVoices() {
      if (!this.isSupported()) return [];
      return this.synth.getVoices();
    }

    setVoice(voiceURI) {
      const voices = this.getVoices();
      this.selectedVoice = voices.find(v => v.voiceURI === voiceURI);
    }

    setSpeed(speed) {
      const validSpeeds = [0.8, 1.0, 1.2];
      if (validSpeeds.includes(speed)) {
        this.speed = speed;
        if (this.utterance) {
          this.utterance.rate = speed;
        }
      }
    }

    extractTextContent() {
      const contentArea = document.getElementById('module-content');
      if (!contentArea) return '';

      // Clone content and remove non-readable elements
      const clone = contentArea.cloneNode(true);
      
      // Remove navigation, quizzes, labs sections
      const removeSelectors = [
        '.navigation',
        '.quiz-container',
        '.labs-container',
        'nav',
        'button',
        '.tts-controls'
      ];
      
      removeSelectors.forEach(selector => {
        const elements = clone.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });

      return clone.textContent.trim();
    }

    play() {
      if (!this.isSupported()) {
        console.warn('TTS not supported');
        return false;
      }

      if (this.isPaused) {
        this.synth.resume();
        this.isPaused = false;
        this.isPlaying = true;
        return true;
      }

      const text = this.extractTextContent();
      if (!text) {
        console.warn('No text content to read');
        return false;
      }

      this.utterance = new SpeechSynthesisUtterance(text);
      this.utterance.rate = this.speed;
      
      if (this.selectedVoice) {
        this.utterance.voice = this.selectedVoice;
      }

      this.utterance.onend = () => {
        this.isPlaying = false;
        this.isPaused = false;
        this.updateTTSUI('stopped');
      };

      this.utterance.onerror = (e) => {
        console.error('TTS error:', e);
        this.isPlaying = false;
        this.isPaused = false;
        this.updateTTSUI('error');
      };

      this.synth.speak(this.utterance);
      this.isPlaying = true;
      this.updateTTSUI('playing');
      return true;
    }

    pause() {
      if (this.isPlaying && !this.isPaused) {
        this.synth.pause();
        this.isPaused = true;
        this.isPlaying = false;
        this.updateTTSUI('paused');
      }
    }

    stop() {
      this.synth.cancel();
      this.isPlaying = false;
      this.isPaused = false;
      this.updateTTSUI('stopped');
    }

    updateTTSUI(state) {
      // Update UI buttons based on state
      const playBtn = document.getElementById('tts-play');
      const pauseBtn = document.getElementById('tts-pause');
      const stopBtn = document.getElementById('tts-stop');

      if (playBtn && pauseBtn && stopBtn) {
        switch (state) {
          case 'playing':
            playBtn.disabled = true;
            pauseBtn.disabled = false;
            stopBtn.disabled = false;
            break;
          case 'paused':
            playBtn.disabled = false;
            pauseBtn.disabled = true;
            stopBtn.disabled = false;
            break;
          case 'stopped':
          case 'error':
            playBtn.disabled = false;
            pauseBtn.disabled = true;
            stopBtn.disabled = true;
            break;
        }
      }
    }
  }

  // ===== MAIN API =====

  window.DigiSchoolB2C = {
    entitlements: new EntitlementManager(),
    progression: new ProgressionManager(),
    quiz: new QuizManager(),
    reader: new ReaderPreferences(),
    tts: new TTSManager(),

    // Analytics helper (fail-safe)
    trackEvent: function(eventName, data) {
      if (window.DigiSchoolEvents && typeof window.DigiSchoolEvents.track === 'function') {
        window.DigiSchoolEvents.track(eventName, data);
      } else {
        // Analytics event tracked silently
      }
    },

    // Initialize
    init: function() {
      // DigiSchool B2C Learning System initialized
      
      // Load voices when available
      if ('speechSynthesis' in window) {
        if (speechSynthesis.getVoices().length > 0) {
          // Voices already loaded
        } else {
          speechSynthesis.addEventListener('voiceschanged', function() {
            // TTS voices loaded
          });
        }
      }
    }
  };

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.DigiSchoolB2C.init();
    });
  } else {
    window.DigiSchoolB2C.init();
  }

})();
