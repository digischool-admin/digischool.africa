/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — ANALYTICS TRACKER V2.2.x-G               ║
 * ║  Funnel Réel — Events Tracking + Dashboard Exportable        ║
 * ║  assessment_start → lead_submit → purchase_complete           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolAnalytics = {
  // Configuration
  config: {
    storageKey: 'ds_analytics_events',
    sessionKey: 'ds_session_id',
    maxEvents: 1000, // Max events stored
    flushInterval: 30000 // Flush to server every 30s
  },

  // État
  state: {
    sessionId: null,
    events: [],
    startTime: Date.now()
  },

  // Event types
  eventTypes: {
    // Assessment funnel
    ASSESSMENT_START: 'assessment_start',
    ASSESSMENT_QUESTION_ANSWERED: 'assessment_question_answered',
    ASSESSMENT_COMPLETE: 'assessment_complete',
    
    // Email capture funnel
    MODAL_OPEN: 'modal_open',
    MODAL_CLOSE: 'modal_close',
    LEAD_SUBMIT: 'lead_submit',
    EMAIL_SEND_SUCCESS: 'email_send_success',
    EMAIL_SEND_FAIL: 'email_send_fail',
    
    // Email engagement (if tracking implemented)
    EMAIL_OPEN: 'email_open',
    EMAIL_CLICK: 'email_click',
    CTA_CLICK_FROM_EMAIL: 'cta_click_from_email',
    
    // Purchase funnel
    FORMATION_VIEW: 'formation_view',
    FORMATION_INTEREST: 'formation_interest',
    PURCHASE_START: 'purchase_start',
    PURCHASE_COMPLETE: 'purchase_complete',
    
    // Navigation
    PAGE_VIEW: 'page_view',
    PAGE_EXIT: 'page_exit',
    
    // Engagement
    CHATBOT_OPEN: 'chatbot_open',
    CHATBOT_MESSAGE_SENT: 'chatbot_message_sent',
    CTA_CLICK: 'cta_click'
  },

  // Init
  init() {
    this.initSession();
    this.loadEvents();
    this.trackPageView();
    this.bindGlobalEvents();
    this.startAutoFlush();
    
    console.log('[Analytics] Initialized. Session:', this.state.sessionId);
  },

  // Init session
  initSession() {
    let sessionId = sessionStorage.getItem(this.config.sessionKey);
    
    if (!sessionId) {
      sessionId = this.generateSessionId();
      sessionStorage.setItem(this.config.sessionKey, sessionId);
    }
    
    this.state.sessionId = sessionId;
  },

  // Generate session ID
  generateSessionId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  },

  // Load events from storage
  loadEvents() {
    try {
      const stored = JSON.parse(localStorage.getItem(this.config.storageKey) || '[]');
      this.state.events = stored.slice(-this.config.maxEvents);
    } catch (e) {
      console.warn('[Analytics] Failed to load events:', e);
      this.state.events = [];
    }
  },

  // Save events to storage
  saveEvents() {
    try {
      const trimmed = this.state.events.slice(-this.config.maxEvents);
      localStorage.setItem(this.config.storageKey, JSON.stringify(trimmed));
    } catch (e) {
      console.warn('[Analytics] Failed to save events:', e);
    }
  },

  // Track event
  track(eventType, properties = {}) {
    const event = {
      eventType,
      timestamp: new Date().toISOString(),
      sessionId: this.state.sessionId,
      page: window.location.pathname,
      referrer: document.referrer || null,
      userAgent: navigator.userAgent,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      ...properties
    };
    
    this.state.events.push(event);
    this.saveEvents();
    
    console.log('[Analytics] Event tracked:', eventType, properties);
    
    // Send to external analytics if configured
    this.sendToExternalAnalytics(event);
    
    return event;
  },

  // Track page view
  trackPageView() {
    this.track(this.eventTypes.PAGE_VIEW, {
      title: document.title,
      url: window.location.href
    });
  },

  // Bind global events
  bindGlobalEvents() {
    // Track CTA clicks
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button');
      if (!target) return;
      
      const isCTA = target.classList.contains('ds-btn') || 
                     target.classList.contains('ds-header-cta') ||
                     target.classList.contains('ds-btn-primary');
      
      if (isCTA) {
        this.track(this.eventTypes.CTA_CLICK, {
          text: target.textContent.trim(),
          href: target.href || null,
          class: target.className
        });
      }
    });
    
    // Track page exit (beforeunload)
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - this.state.startTime;
      this.track(this.eventTypes.PAGE_EXIT, {
        timeOnPage: Math.round(timeOnPage / 1000) // seconds
      });
    });
    
    // Track assessment events (if assessment page)
    if (window.DigiSchoolAssessmentV2) {
      this.bindAssessmentEvents();
    }
    
    // Track email capture events
    if (window.DigiSchoolEmailCapture) {
      this.bindEmailCaptureEvents();
    }
    
    // Track chatbot events
    if (window.DigiSchoolChatbotPerfect) {
      this.bindChatbotEvents();
    }
  },

  // Bind assessment events
  bindAssessmentEvents() {
    // Track start
    const originalInit = window.DigiSchoolAssessmentV2.init;
    if (originalInit) {
      window.DigiSchoolAssessmentV2.init = (...args) => {
        this.track(this.eventTypes.ASSESSMENT_START);
        return originalInit.apply(window.DigiSchoolAssessmentV2, args);
      };
    }
    
    // Track complete
    const originalSubmit = window.DigiSchoolAssessmentV2.submitAssessment;
    if (originalSubmit) {
      window.DigiSchoolAssessmentV2.submitAssessment = (...args) => {
        this.track(this.eventTypes.ASSESSMENT_COMPLETE, {
          questionsAnswered: Object.keys(window.DigiSchoolAssessmentV2.state.answers).length
        });
        return originalSubmit.apply(window.DigiSchoolAssessmentV2, args);
      };
    }
  },

  // Bind email capture events
  bindEmailCaptureEvents() {
    const originalOpen = window.DigiSchoolEmailCapture.openModal;
    if (originalOpen) {
      window.DigiSchoolEmailCapture.openModal = (...args) => {
        this.track(this.eventTypes.MODAL_OPEN);
        return originalOpen.apply(window.DigiSchoolEmailCapture, args);
      };
    }
    
    const originalClose = window.DigiSchoolEmailCapture.closeModal;
    if (originalClose) {
      window.DigiSchoolEmailCapture.closeModal = (...args) => {
        this.track(this.eventTypes.MODAL_CLOSE);
        return originalClose.apply(window.DigiSchoolEmailCapture, args);
      };
    }
    
    const originalSubmit = window.DigiSchoolEmailCapture.handleSubmit;
    if (originalSubmit) {
      window.DigiSchoolEmailCapture.handleSubmit = async (...args) => {
        try {
          const result = await originalSubmit.apply(window.DigiSchoolEmailCapture, args);
          this.track(this.eventTypes.LEAD_SUBMIT);
          this.track(this.eventTypes.EMAIL_SEND_SUCCESS);
          return result;
        } catch (error) {
          this.track(this.eventTypes.EMAIL_SEND_FAIL, {
            error: error.message
          });
          throw error;
        }
      };
    }
  },

  // Bind chatbot events
  bindChatbotEvents() {
    const originalOpen = window.DigiSchoolChatbotPerfect?.open;
    if (originalOpen) {
      window.DigiSchoolChatbotPerfect.open = (...args) => {
        this.track(this.eventTypes.CHATBOT_OPEN);
        return originalOpen.apply(window.DigiSchoolChatbotPerfect, args);
      };
    }
    
    const originalSend = window.DigiSchoolChatbotPerfect?.sendMessage;
    if (originalSend) {
      window.DigiSchoolChatbotPerfect.sendMessage = (...args) => {
        this.track(this.eventTypes.CHATBOT_MESSAGE_SENT);
        return originalSend.apply(window.DigiSchoolChatbotPerfect, args);
      };
    }
  },

  // Send to external analytics (Google Analytics, Plausible, etc.)
  sendToExternalAnalytics(event) {
    // Google Analytics 4
    if (typeof gtag === 'function') {
      gtag('event', event.eventType, {
        page: event.page,
        sessionId: event.sessionId
      });
    }
    
    // Plausible
    if (typeof plausible === 'function') {
      plausible(event.eventType, {
        props: {
          page: event.page,
          sessionId: event.sessionId
        }
      });
    }
    
    // Custom endpoint (if configured)
    if (window.DS_ANALYTICS_ENDPOINT) {
      fetch(window.DS_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      }).catch(e => console.warn('[Analytics] Failed to send event:', e));
    }
  },

  // Auto flush to server
  startAutoFlush() {
    setInterval(() => {
      if (this.state.events.length > 0) {
        this.flush();
      }
    }, this.config.flushInterval);
  },

  // Flush events to server
  async flush() {
    if (this.state.events.length === 0) return;
    
    const eventsToSend = [...this.state.events];
    
    console.log(`[Analytics] Flushing ${eventsToSend.length} events to server`);
    
    // TODO: Implement actual server endpoint
    // For now, just log
    try {
      // Simulate server send
      // await fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(eventsToSend)
      // });
      
      // Clear sent events
      // this.state.events = [];
      // this.saveEvents();
      
    } catch (error) {
      console.error('[Analytics] Flush failed:', error);
    }
  },

  // Get funnel stats
  getFunnelStats() {
    const events = this.state.events;
    
    const stats = {
      assessment: {
        started: events.filter(e => e.eventType === this.eventTypes.ASSESSMENT_START).length,
        completed: events.filter(e => e.eventType === this.eventTypes.ASSESSMENT_COMPLETE).length
      },
      email: {
        modalOpened: events.filter(e => e.eventType === this.eventTypes.MODAL_OPEN).length,
        leadSubmitted: events.filter(e => e.eventType === this.eventTypes.LEAD_SUBMIT).length,
        emailSent: events.filter(e => e.eventType === this.eventTypes.EMAIL_SEND_SUCCESS).length,
        emailFailed: events.filter(e => e.eventType === this.eventTypes.EMAIL_SEND_FAIL).length
      },
      purchase: {
        formationViewed: events.filter(e => e.eventType === this.eventTypes.FORMATION_VIEW).length,
        purchaseStarted: events.filter(e => e.eventType === this.eventTypes.PURCHASE_START).length,
        purchaseCompleted: events.filter(e => e.eventType === this.eventTypes.PURCHASE_COMPLETE).length
      },
      engagement: {
        chatbotOpened: events.filter(e => e.eventType === this.eventTypes.CHATBOT_OPEN).length,
        ctaClicks: events.filter(e => e.eventType === this.eventTypes.CTA_CLICK).length
      }
    };
    
    // Calculate conversion rates
    stats.conversionRates = {
      assessmentCompletion: stats.assessment.started > 0 
        ? (stats.assessment.completed / stats.assessment.started * 100).toFixed(1) + '%'
        : 'N/A',
      emailCapture: stats.email.modalOpened > 0
        ? (stats.email.leadSubmitted / stats.email.modalOpened * 100).toFixed(1) + '%'
        : 'N/A',
      purchase: stats.purchase.formationViewed > 0
        ? (stats.purchase.purchaseCompleted / stats.purchase.formationViewed * 100).toFixed(1) + '%'
        : 'N/A'
    };
    
    return stats;
  },

  // Export events as CSV
  exportAsCSV() {
    const headers = ['Timestamp', 'Event Type', 'Session ID', 'Page', 'Properties'];
    const rows = this.state.events.map(event => [
      event.timestamp,
      event.eventType,
      event.sessionId,
      event.page,
      JSON.stringify(event)
    ]);
    
    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `digischool_analytics_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('[Analytics] Exported', this.state.events.length, 'events as CSV');
  },

  // Clear all events (admin only)
  clearEvents() {
    if (confirm('Êtes-vous sûr de vouloir effacer tous les événements analytics ?')) {
      this.state.events = [];
      this.saveEvents();
      console.log('[Analytics] All events cleared');
    }
  }
};

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DigiSchoolAnalytics.init();
  });
} else {
  DigiSchoolAnalytics.init();
}

// Export global
window.DigiSchoolAnalytics = DigiSchoolAnalytics;

// Console helper for debugging
window.dsAnalytics = {
  stats: () => DigiSchoolAnalytics.getFunnelStats(),
  export: () => DigiSchoolAnalytics.exportAsCSV(),
  clear: () => DigiSchoolAnalytics.clearEvents(),
  events: () => DigiSchoolAnalytics.state.events
};

console.log('%c[DigiSchool Analytics] Ready! Type dsAnalytics.stats() in console for funnel stats.', 'color: #1E88E5; font-weight: bold;');
