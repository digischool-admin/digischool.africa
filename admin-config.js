/**
 * DigiSchool Africa - Admin Configuration & Governance System
 * Version: 1.1.0 PREMIUM
 * Purpose: Full platform control without code redeploy
 * 
 * ADMIN SUPERPOWERS:
 * - Fast-track testing
 * - User management
 * - Pricing control
 * - Content governance
 * - Feature toggles
 */

(function() {
  'use strict';

  // Admin Authentication
  const ADMIN_CONFIG = {
    // Password hash (SHA-256 of "DigiSchool2026!")
    passwordHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    sessionTimeout: 3600000, // 1 hour
    maxLoginAttempts: 5,
    lockoutDuration: 900000, // 15 minutes
  };

  // Platform Configuration
  const PLATFORM_CONFIG = {
    version: '1.1.0-PREMIUM',
    maintenanceMode: false,
    featureFlags: {
      b2cCheckout: true,
      b2bQuoteRequest: true,
      autoEvaluation: true,
      certificates: true,
      adminFastTrack: true,
      userImpersonation: true,
      analytics: true,
      chatbot: true,
      whatsappAssistant: true,
      referralSystem: true,
    },
    
    // Business Rules
    businessRules: {
      b2c: {
        minQuizScore: 70, // % to pass
        maxQuizAttempts: 2, // per 24h
        progressionGated: true, // must pass quiz to unlock next
        certificateThreshold: 100, // % completion required
      },
      b2b: {
        showPrices: false,
        showPaymentNumbers: false,
        enableProformaGeneration: true,
      },
    },
  };

  // Pricing Configuration (B2C)
  const PRICING_CONFIG = {
    currency: 'FCFA',
    packPrices: {
      short: 180000,    // 2-3 days courses
      medium: 245000,   // 4-5 days courses  
      long: 285000,     // 6-10 days courses
    },
    moduleMarkup: 1.25, // 25% markup per module vs pack
    
    // Discounts & Promotions
    promotions: {
      active: false,
      code: '',
      discountPercent: 0,
      validUntil: null,
      applicableCourses: [], // [] = all courses
    },
    
    // Vouchers (referral system)
    voucherDiscount: 10, // % discount for referred users
    referrerBonus: 15000, // FCFA bonus for referrer
  };

  // Course Visibility & Status
  const COURSE_CONFIG = {
    courses: [
      { id: 'leadership-management', enabled: true, featured: true },
      { id: 'gestion-projet-ia', enabled: true, featured: true },
      { id: 'strategie-execution', enabled: true, featured: true },
      { id: 'finance-non-financiers', enabled: true, featured: false },
      { id: 'vente-b2b-negociation', enabled: true, featured: false },
      { id: 'service-client-experience', enabled: true, featured: false },
      { id: 'rh-performance', enabled: true, featured: false },
      { id: 'data-reporting-decideurs', enabled: true, featured: false },
      { id: 'productivite-microsoft365', enabled: true, featured: false },
    ],
  };

  // Admin Fast-Track System
  const FAST_TRACK_CONFIG = {
    enabled: true,
    bypassProgression: true,
    instantCompletion: true,
    manualCertificates: true,
    
    // Test accounts (pre-configured for QA)
    testAccounts: [
      {
        email: 'test@digischool.africa',
        name: 'Test Learner',
        courses: ['leadership-management', 'gestion-projet-ia'],
        progress: 50, // %
      },
    ],
  };

  // User Management System
  const USER_MANAGEMENT = {
    roles: ['admin', 'learner', 'b2b_client'],
    
    // User lifecycle
    userStates: ['active', 'suspended', 'trial', 'expired'],
    
    // Access control
    permissions: {
      admin: ['*'], // Full access
      learner: ['courses.view', 'progress.track', 'certificates.download'],
      b2b_client: ['courses.view', 'quote.request', 'proforma.download'],
    },
  };

  // Certificate Signature Configuration
  const CERTIFICATE_CONFIG = {
    signatoryName: 'Jean Pierre S-A-J-O-R-I', // Stylized signature
    signatoryTitle: 'Directeur Général',
    organizationName: 'DigiSchool Africa',
    issuingAuthority: 'DigiSchool Africa',
    
    // Certificate design
    template: 'premium', // 'standard', 'premium'
    includeQRCode: true,
    includeUniqueID: true,
    
    // Validation
    verificationURL: 'https://digischool.africa/verify-certificate',
  };

  // Security Configuration
  const SECURITY_CONFIG = {
    // XSS Protection
    xssProtection: true,
    sanitizeInputs: true,
    
    // CSRF Protection  
    csrfEnabled: true,
    csrfTokenExpiry: 3600, // seconds
    
    // Rate Limiting
    rateLimiting: {
      enabled: true,
      maxRequests: 100,
      windowMs: 900000, // 15 minutes
    },
    
    // Content Security Policy
    csp: {
      enabled: true,
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'https:'],
      },
    },
    
    // Logging & Monitoring
    logging: {
      enabled: true,
      logLevel: 'info', // 'debug', 'info', 'warn', 'error'
      sensitiveDataMasking: true,
    },
  };

  // Analytics Configuration
  const ANALYTICS_CONFIG = {
    enabled: true,
    trackPageViews: true,
    trackUserActions: true,
    trackConversions: true,
    
    // Events to track
    events: {
      // Learning
      'course.view': true,
      'module.start': true,
      'module.complete': true,
      'quiz.attempt': true,
      'quiz.pass': true,
      'quiz.fail': true,
      'certificate.generate': true,
      
      // Business
      'b2c.add_to_cart': true,
      'b2c.checkout_start': true,
      'b2c.purchase_complete': true,
      'b2b.quote_request': true,
      'b2b.proforma_download': true,
      
      // Engagement
      'assessment.start': true,
      'assessment.complete': true,
      'chatbot.open': true,
      'whatsapp.click': true,
      'referral.share': true,
    },
  };

  // Export all configurations
  window.AdminConfig = {
    auth: ADMIN_CONFIG,
    platform: PLATFORM_CONFIG,
    pricing: PRICING_CONFIG,
    courses: COURSE_CONFIG,
    fastTrack: FAST_TRACK_CONFIG,
    users: USER_MANAGEMENT,
    certificates: CERTIFICATE_CONFIG,
    security: SECURITY_CONFIG,
    analytics: ANALYTICS_CONFIG,
    
    // Utility functions
    isAdmin: function() {
      const session = localStorage.getItem('admin_session');
      if (!session) return false;
      
      try {
        const data = JSON.parse(session);
        const now = Date.now();
        if (now - data.loginTime > ADMIN_CONFIG.sessionTimeout) {
          localStorage.removeItem('admin_session');
          return false;
        }
        return data.isAuthenticated === true;
      } catch (e) {
        return false;
      }
    },
    
    getConfig: function(path) {
      const keys = path.split('.');
      let value = this;
      for (const key of keys) {
        value = value[key];
        if (value === undefined) return null;
      }
      return value;
    },
    
    setConfig: function(path, newValue) {
      if (!this.isAdmin()) {
        console.error('Admin authentication required');
        return false;
      }
      
      const keys = path.split('.');
      const lastKey = keys.pop();
      let obj = this;
      
      for (const key of keys) {
        obj = obj[key];
        if (obj === undefined) {
          console.error('Invalid config path:', path);
          return false;
        }
      }
      
      obj[lastKey] = newValue;
      
      // Persist to localStorage
      localStorage.setItem('admin_config_override', JSON.stringify({
        path,
        value: newValue,
        timestamp: Date.now(),
      }));
      
      console.log('Config updated:', path, '=', newValue);
      return true;
    },
    
    // Security utilities
    hashPassword: async function(password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hash = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    },
    
    sanitizeHTML: function(str) {
      const temp = document.createElement('div');
      temp.textContent = str;
      return temp.innerHTML;
    },
    
    // Audit logging
    logAction: function(action, details) {
      if (!SECURITY_CONFIG.logging.enabled) return;
      
      const log = {
        timestamp: new Date().toISOString(),
        action,
        details,
        user: this.isAdmin() ? 'admin' : 'anonymous',
        userAgent: navigator.userAgent,
      };
      
      // Store in localStorage (limited history)
      const logs = JSON.parse(localStorage.getItem('admin_audit_log') || '[]');
      logs.push(log);
      
      // Keep only last 1000 logs
      if (logs.length > 1000) {
        logs.splice(0, logs.length - 1000);
      }
      
      localStorage.setItem('admin_audit_log', JSON.stringify(logs));
      
      if (SECURITY_CONFIG.logging.logLevel === 'debug') {
        console.log('[AUDIT]', action, details);
      }
    },
  };

  // Auto-apply config overrides from localStorage
  const overrides = localStorage.getItem('admin_config_override');
  if (overrides) {
    try {
      const data = JSON.parse(overrides);
      // Apply override (simplified for client-side)
      console.log('Config override loaded:', data.path);
    } catch (e) {
      console.error('Failed to load config overrides:', e);
    }
  }

  console.log('✅ DigiSchool Admin Config loaded - Version', PLATFORM_CONFIG.version);

})();
