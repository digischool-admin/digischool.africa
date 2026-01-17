/**
 * DigiSchool Africa - B2C Analytics System
 * Version: 1.0.0
 * Date: 2026-01-17
 * Mode: GENSPARK.AI ONE-SHOT LOCKED SHIP
 * 
 * Features:
 * - Purchase tracking (pack, module)
 * - Learning progression tracking
 * - Drop-off detection
 * - Quiz performance tracking
 * - Certificate issuance tracking
 * - User behavior analytics
 * - Export to CSV/JSON
 */

class B2CAnalytics {
  constructor() {
    this.storageKey = 'digischool_analytics';
    this.sessionKey = 'digischool_session';
    this.init();
  }

  init() {
    // Initialize storage
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify({
        events: [],
        sessions: [],
        users: {}
      }));
    }

    // Start session
    this.startSession();
  }

  /**
   * Start analytics session
   */
  startSession() {
    const sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    const session = {
      id: sessionId,
      startedAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      landingPage: window.location.pathname
    };

    sessionStorage.setItem(this.sessionKey, JSON.stringify(session));
    
    this.addEvent('session_start', {
      sessionId,
      page: window.location.pathname
    });
  }

  /**
   * Get current session
   */
  getSession() {
    try {
      return JSON.parse(sessionStorage.getItem(this.sessionKey) || '{}');
    } catch (e) {
      return {};
    }
  }

  /**
   * Add analytics event
   */
  addEvent(eventType, data = {}) {
    try {
      const analytics = this.getAnalytics();
      const session = this.getSession();
      
      const event = {
        id: 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        type: eventType,
        timestamp: new Date().toISOString(),
        sessionId: session.id,
        page: window.location.pathname,
        ...data
      };

      analytics.events.push(event);
      
      // Keep only last 1000 events in localStorage
      if (analytics.events.length > 1000) {
        analytics.events = analytics.events.slice(-1000);
      }

      localStorage.setItem(this.storageKey, JSON.stringify(analytics));

      // Also send to global tracking if available
      if (window.DigiSchoolEvents && window.DigiSchoolEvents.trackEvent) {
        window.DigiSchoolEvents.trackEvent(eventType, data);
      }
    } catch (e) {
      console.error('Analytics error:', e);
    }
  }

  /**
   * Get all analytics data
   */
  getAnalytics() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '{"events":[],"sessions":[],"users":{}}');
    } catch (e) {
      return { events: [], sessions: [], users: {} };
    }
  }

  /**
   * Track purchase
   */
  trackPurchase(type, courseSlug, courseName, price, module = null) {
    this.addEvent('b2c_purchase', {
      purchaseType: type, // 'pack' or 'module'
      course: courseSlug,
      courseName,
      price,
      module,
      currency: 'XOF'
    });
  }

  /**
   * Track module start
   */
  trackModuleStart(courseSlug, moduleIndex, moduleName) {
    this.addEvent('b2c_module_start', {
      course: courseSlug,
      module: moduleIndex,
      moduleName
    });
  }

  /**
   * Track module completion
   */
  trackModuleComplete(courseSlug, moduleIndex, moduleName, score) {
    this.addEvent('b2c_module_complete', {
      course: courseSlug,
      module: moduleIndex,
      moduleName,
      score
    });
  }

  /**
   * Track quiz attempt
   */
  trackQuizAttempt(courseSlug, moduleIndex, score, passed, attemptNumber) {
    this.addEvent(passed ? 'b2c_quiz_pass' : 'b2c_quiz_fail', {
      course: courseSlug,
      module: moduleIndex,
      score,
      attemptNumber
    });
  }

  /**
   * Track drop-off
   */
  trackDropOff(courseSlug, moduleIndex, timeSpent) {
    this.addEvent('b2c_drop_off', {
      course: courseSlug,
      module: moduleIndex,
      timeSpent
    });
  }

  /**
   * Track TTS usage
   */
  trackTTSUsage(action, courseSlug, moduleIndex) {
    this.addEvent('b2c_tts_' + action, {
      course: courseSlug,
      module: moduleIndex
    });
  }

  /**
   * Track reader preferences change
   */
  trackReaderPrefs(preferences) {
    this.addEvent('b2c_reader_prefs', preferences);
  }

  /**
   * Get sales statistics
   */
  getSalesStats() {
    const analytics = this.getAnalytics();
    const purchases = analytics.events.filter(e => e.type === 'b2c_purchase');

    const stats = {
      totalSales: purchases.length,
      totalRevenue: purchases.reduce((sum, p) => sum + (p.price || 0), 0),
      packSales: purchases.filter(p => p.purchaseType === 'pack').length,
      moduleSales: purchases.filter(p => p.purchaseType === 'module').length,
      byCourse: {}
    };

    // Group by course
    purchases.forEach(p => {
      if (!stats.byCourse[p.course]) {
        stats.byCourse[p.course] = {
          courseName: p.courseName,
          totalSales: 0,
          revenue: 0,
          packSales: 0,
          moduleSales: 0
        };
      }
      
      stats.byCourse[p.course].totalSales++;
      stats.byCourse[p.course].revenue += p.price || 0;
      
      if (p.purchaseType === 'pack') {
        stats.byCourse[p.course].packSales++;
      } else {
        stats.byCourse[p.course].moduleSales++;
      }
    });

    return stats;
  }

  /**
   * Get progression statistics
   */
  getProgressionStats() {
    const analytics = this.getAnalytics();
    
    const moduleStarts = analytics.events.filter(e => e.type === 'b2c_module_start');
    const moduleCompletes = analytics.events.filter(e => e.type === 'b2c_module_complete');
    const quizPasses = analytics.events.filter(e => e.type === 'b2c_quiz_pass');
    const quizFails = analytics.events.filter(e => e.type === 'b2c_quiz_fail');
    
    return {
      totalModulesStarted: moduleStarts.length,
      totalModulesCompleted: moduleCompletes.length,
      completionRate: moduleStarts.length > 0 ? 
        (moduleCompletes.length / moduleStarts.length * 100).toFixed(1) : 0,
      totalQuizAttempts: quizPasses.length + quizFails.length,
      quizPassRate: (quizPasses.length + quizFails.length) > 0 ?
        (quizPasses.length / (quizPasses.length + quizFails.length) * 100).toFixed(1) : 0,
      averageScore: this.calculateAverageScore(quizPasses)
    };
  }

  /**
   * Calculate average quiz score
   */
  calculateAverageScore(quizEvents) {
    if (quizEvents.length === 0) return 0;
    
    const totalScore = quizEvents.reduce((sum, q) => sum + (q.score || 0), 0);
    return (totalScore / quizEvents.length).toFixed(1);
  }

  /**
   * Get drop-off analysis
   */
  getDropOffAnalysis() {
    const analytics = this.getAnalytics();
    const dropOffs = analytics.events.filter(e => e.type === 'b2c_drop_off');
    
    const byCourse = {};
    const byModule = {};
    
    dropOffs.forEach(d => {
      // By course
      if (!byCourse[d.course]) {
        byCourse[d.course] = 0;
      }
      byCourse[d.course]++;
      
      // By module
      const key = `${d.course}_M${d.module + 1}`;
      if (!byModule[key]) {
        byModule[key] = 0;
      }
      byModule[key]++;
    });
    
    return {
      totalDropOffs: dropOffs.length,
      byCourse,
      byModule,
      averageTimeBeforeDropOff: this.calculateAverageTime(dropOffs.map(d => d.timeSpent))
    };
  }

  /**
   * Calculate average time
   */
  calculateAverageTime(times) {
    if (times.length === 0) return 0;
    const total = times.reduce((sum, t) => sum + (t || 0), 0);
    return Math.round(total / times.length);
  }

  /**
   * Export analytics to CSV
   */
  exportToCSV(dataType = 'events') {
    const analytics = this.getAnalytics();
    let data = [];
    let headers = [];

    if (dataType === 'events') {
      data = analytics.events;
      headers = ['ID', 'Type', 'Timestamp', 'Session', 'Page', 'Data'];
    } else if (dataType === 'sales') {
      const purchases = analytics.events.filter(e => e.type === 'b2c_purchase');
      data = purchases;
      headers = ['ID', 'Timestamp', 'Type', 'Course', 'Price', 'Module'];
    }

    let csv = headers.join(',') + '\n';
    
    data.forEach(row => {
      if (dataType === 'events') {
        csv += `${row.id},${row.type},${row.timestamp},${row.sessionId},${row.page},"${JSON.stringify(row).replace(/"/g, '""')}"\n`;
      } else if (dataType === 'sales') {
        csv += `${row.id},${row.timestamp},${row.purchaseType},${row.course},${row.price},${row.module || ''}\n`;
      }
    });

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `digischool-analytics-${dataType}-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Export analytics to JSON
   */
  exportToJSON() {
    const analytics = this.getAnalytics();
    const data = {
      exportedAt: new Date().toISOString(),
      sales: this.getSalesStats(),
      progression: this.getProgressionStats(),
      dropOff: this.getDropOffAnalysis(),
      events: analytics.events
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `digischool-analytics-${Date.now()}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Clear analytics data
   */
  clearData() {
    if (confirm('Êtes-vous sûr de vouloir effacer toutes les données analytics?')) {
      localStorage.removeItem(this.storageKey);
      this.init();
      alert('Données analytics effacées');
    }
  }
}

// Global instance
window.B2CAnalytics = new B2CAnalytics();

// Auto-track page views
window.addEventListener('load', () => {
  window.B2CAnalytics.addEvent('page_view', {
    path: window.location.pathname,
    title: document.title
  });
});
