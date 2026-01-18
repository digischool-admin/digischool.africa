/**
 * DigiSchool Africa - Admin Superpowers Engine
 * Version: 1.1.0 PREMIUM
 * 
 * ADMIN CAPABILITIES:
 * 1. Fast-Track Testing (bypass progression)
 * 2. User Management (grant/revoke access)
 * 3. Pricing Control (modify prices instantly)
 * 4. Content Governance (enable/disable courses)
 * 5. User Impersonation (support/testing)
 */

(function() {
  'use strict';

  // Admin Superpowers Class
  class AdminSuperpowers {
    constructor() {
      this.config = window.AdminConfig;
      this.initialized = false;
    }

    init() {
      if (this.initialized) return;
      
      // Verify admin authentication
      if (!this.config.isAdmin()) {
        console.warn('Admin Superpowers require authentication');
        return false;
      }

      this.initialized = true;
      console.log('✅ Admin Superpowers initialized');
      return true;
    }

    // ═══════════════════════════════════════════════════════════
    // FAST-TRACK TESTING SYSTEM
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Enable fast-track mode for testing
     * Bypasses all progression rules
     */
    enableFastTrack() {
      if (!this.init()) return false;
      
      localStorage.setItem('admin_fasttrack_enabled', 'true');
      this.config.logAction('fast_track.enabled', {});
      
      console.log('🚀 Fast-Track Mode ENABLED');
      console.log('→ All modules unlocked');
      console.log('→ Quiz requirements bypassed');
      console.log('→ Instant completion available');
      
      return true;
    }

    disableFastTrack() {
      localStorage.removeItem('admin_fasttrack_enabled');
      this.config.logAction('fast_track.disabled', {});
      console.log('⏸️ Fast-Track Mode DISABLED');
      return true;
    }

    isFastTrackEnabled() {
      return localStorage.getItem('admin_fasttrack_enabled') === 'true';
    }

    /**
     * Unlock all modules in a course instantly
     */
    unlockAllModules(courseId) {
      if (!this.init()) return false;
      
      const progress = JSON.parse(localStorage.getItem('learner_progress') || '{}');
      
      if (!progress[courseId]) {
        progress[courseId] = { modules: {} };
      }

      // Unlock all modules (assuming 8 modules per course)
      for (let i = 1; i <= 8; i++) {
        const moduleKey = `module-${i}`;
        progress[courseId].modules[moduleKey] = {
          unlocked: true,
          completed: false,
          score: null,
          attempts: 0,
          lastAccess: Date.now(),
        };
      }

      localStorage.setItem('learner_progress', JSON.stringify(progress));
      this.config.logAction('admin.unlock_all_modules', { courseId });
      
      console.log(`✅ All modules unlocked for course: ${courseId}`);
      return true;
    }

    /**
     * Mark a module as completed instantly (for testing)
     */
    completeModule(courseId, moduleNumber, score = 100) {
      if (!this.init()) return false;
      
      const progress = JSON.parse(localStorage.getItem('learner_progress') || '{}');
      
      if (!progress[courseId]) {
        progress[courseId] = { modules: {} };
      }

      const moduleKey = `module-${moduleNumber}`;
      progress[courseId].modules[moduleKey] = {
        unlocked: true,
        completed: true,
        score: score,
        attempts: 1,
        completedAt: Date.now(),
        lastAccess: Date.now(),
      };

      // Auto-unlock next module
      const nextModuleKey = `module-${moduleNumber + 1}`;
      if (!progress[courseId].modules[nextModuleKey]) {
        progress[courseId].modules[nextModuleKey] = {
          unlocked: true,
          completed: false,
          score: null,
          attempts: 0,
        };
      }

      localStorage.setItem('learner_progress', JSON.stringify(progress));
      this.config.logAction('admin.complete_module', { courseId, moduleNumber, score });
      
      console.log(`✅ Module ${moduleNumber} completed for ${courseId} (score: ${score}%)`);
      return true;
    }

    /**
     * Complete entire course instantly
     */
    completeCourse(courseId) {
      if (!this.init()) return false;
      
      // Complete all 8 modules
      for (let i = 1; i <= 8; i++) {
        this.completeModule(courseId, i, 100);
      }

      // Trigger certificate generation
      this.generateCertificate(courseId);
      
      console.log(`✅ Course ${courseId} completed 100%`);
      return true;
    }

    /**
     * Generate certificate manually (for testing or support)
     */
    generateCertificate(courseId) {
      if (!this.init()) return false;
      
      const certificates = JSON.parse(localStorage.getItem('learner_certificates') || '[]');
      
      const cert = {
        id: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        courseId: courseId,
        courseName: this.getCourseName(courseId),
        issuedDate: new Date().toISOString(),
        learnerName: this.getLearnerName(),
        learnerEmail: this.getLearnerEmail(),
        completionRate: 100,
        signature: this.config.certificates.signatoryName,
        signatoryTitle: this.config.certificates.signatoryTitle,
        qrCode: `https://digischool.africa/verify-certificate?id=CERT-${Date.now()}`,
      };

      certificates.push(cert);
      localStorage.setItem('learner_certificates', JSON.stringify(certificates));
      this.config.logAction('admin.generate_certificate', { courseId, certId: cert.id });
      
      console.log('🎓 Certificate generated:', cert.id);
      return cert;
    }

    // ═══════════════════════════════════════════════════════════
    // USER MANAGEMENT SYSTEM
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Get all users
     */
    getAllUsers() {
      if (!this.init()) return [];
      
      const users = JSON.parse(localStorage.getItem('platform_users') || '[]');
      this.config.logAction('admin.get_all_users', { count: users.length });
      return users;
    }

    /**
     * Grant course access to a user
     */
    grantCourseAccess(userEmail, courseId) {
      if (!this.init()) return false;
      
      const users = this.getAllUsers();
      const user = users.find(u => u.email === userEmail);
      
      if (!user) {
        console.error('User not found:', userEmail);
        return false;
      }

      if (!user.courses) user.courses = [];
      if (!user.courses.includes(courseId)) {
        user.courses.push(courseId);
      }

      localStorage.setItem('platform_users', JSON.stringify(users));
      this.config.logAction('admin.grant_course_access', { userEmail, courseId });
      
      console.log(`✅ Course access granted: ${userEmail} → ${courseId}`);
      return true;
    }

    /**
     * Revoke course access from a user
     */
    revokeCourseAccess(userEmail, courseId) {
      if (!this.init()) return false;
      
      const users = this.getAllUsers();
      const user = users.find(u => u.email === userEmail);
      
      if (!user) {
        console.error('User not found:', userEmail);
        return false;
      }

      if (user.courses) {
        user.courses = user.courses.filter(c => c !== courseId);
      }

      localStorage.setItem('platform_users', JSON.stringify(users));
      this.config.logAction('admin.revoke_course_access', { userEmail, courseId });
      
      console.log(`❌ Course access revoked: ${userEmail} → ${courseId}`);
      return true;
    }

    /**
     * Reset user progression (for support/testing)
     */
    resetUserProgress(userEmail, courseId = null) {
      if (!this.init()) return false;
      
      // For demonstration, we'll reset localStorage
      // In production, this would update server-side records
      
      if (courseId) {
        const progress = JSON.parse(localStorage.getItem('learner_progress') || '{}');
        delete progress[courseId];
        localStorage.setItem('learner_progress', JSON.stringify(progress));
        console.log(`🔄 Progress reset for ${userEmail} in ${courseId}`);
      } else {
        localStorage.removeItem('learner_progress');
        console.log(`🔄 All progress reset for ${userEmail}`);
      }

      this.config.logAction('admin.reset_progress', { userEmail, courseId });
      return true;
    }

    /**
     * Impersonate user (read-only mode for support)
     */
    impersonateUser(userEmail) {
      if (!this.init()) return false;
      
      const users = this.getAllUsers();
      const user = users.find(u => u.email === userEmail);
      
      if (!user) {
        console.error('User not found:', userEmail);
        return false;
      }

      // Store impersonation state
      sessionStorage.setItem('admin_impersonation', JSON.stringify({
        originalAdmin: true,
        impersonatedUser: userEmail,
        impersonatedName: user.name,
        startTime: Date.now(),
      }));

      this.config.logAction('admin.impersonate_user', { userEmail });
      
      console.log(`👤 Impersonating user: ${user.name} (${userEmail})`);
      console.log('→ Read-only mode enabled');
      console.log('→ Call exitImpersonation() to return to admin');
      
      return true;
    }

    exitImpersonation() {
      sessionStorage.removeItem('admin_impersonation');
      this.config.logAction('admin.exit_impersonation', {});
      console.log('✅ Exited impersonation mode');
      return true;
    }

    isImpersonating() {
      return sessionStorage.getItem('admin_impersonation') !== null;
    }

    // ═══════════════════════════════════════════════════════════
    // PRICING CONTROL SYSTEM
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Update pack price (applies instantly)
     */
    updatePackPrice(category, newPrice) {
      if (!this.init()) return false;
      
      if (!['short', 'medium', 'long'].includes(category)) {
        console.error('Invalid category:', category);
        return false;
      }

      const oldPrice = this.config.pricing.packPrices[category];
      this.config.pricing.packPrices[category] = newPrice;
      
      // Persist to localStorage
      localStorage.setItem('admin_pricing_override', JSON.stringify(this.config.pricing.packPrices));
      this.config.logAction('admin.update_pack_price', { category, oldPrice, newPrice });
      
      console.log(`💰 Pack price updated: ${category} ${oldPrice} → ${newPrice} FCFA`);
      return true;
    }

    /**
     * Create or update a promotion
     */
    setPromotion(code, discountPercent, validUntil, applicableCourses = []) {
      if (!this.init()) return false;
      
      this.config.pricing.promotions = {
        active: true,
        code: code,
        discountPercent: discountPercent,
        validUntil: validUntil,
        applicableCourses: applicableCourses,
      };

      localStorage.setItem('admin_promotion', JSON.stringify(this.config.pricing.promotions));
      this.config.logAction('admin.set_promotion', { code, discountPercent });
      
      console.log(`🎉 Promotion created: ${code} (${discountPercent}% off)`);
      return true;
    }

    disablePromotion() {
      if (!this.init()) return false;
      
      this.config.pricing.promotions.active = false;
      localStorage.removeItem('admin_promotion');
      this.config.logAction('admin.disable_promotion', {});
      
      console.log('❌ Promotion disabled');
      return true;
    }

    // ═══════════════════════════════════════════════════════════
    // CONTENT GOVERNANCE SYSTEM
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Enable/disable a course
     */
    setCourseStatus(courseId, enabled) {
      if (!this.init()) return false;
      
      const course = this.config.courses.courses.find(c => c.id === courseId);
      if (!course) {
        console.error('Course not found:', courseId);
        return false;
      }

      course.enabled = enabled;
      localStorage.setItem('admin_course_status', JSON.stringify(this.config.courses.courses));
      this.config.logAction('admin.set_course_status', { courseId, enabled });
      
      console.log(`${enabled ? '✅' : '❌'} Course ${courseId}: ${enabled ? 'ENABLED' : 'DISABLED'}`);
      return true;
    }

    /**
     * Toggle feature flag
     */
    toggleFeature(featureName, enabled) {
      if (!this.init()) return false;
      
      if (!this.config.platform.featureFlags.hasOwnProperty(featureName)) {
        console.error('Unknown feature:', featureName);
        return false;
      }

      this.config.platform.featureFlags[featureName] = enabled;
      localStorage.setItem('admin_feature_flags', JSON.stringify(this.config.platform.featureFlags));
      this.config.logAction('admin.toggle_feature', { featureName, enabled });
      
      console.log(`🎛️ Feature ${featureName}: ${enabled ? 'ON' : 'OFF'}`);
      return true;
    }

    /**
     * Enable/disable maintenance mode
     */
    setMaintenanceMode(enabled) {
      if (!this.init()) return false;
      
      this.config.platform.maintenanceMode = enabled;
      localStorage.setItem('admin_maintenance_mode', enabled ? 'true' : 'false');
      this.config.logAction('admin.maintenance_mode', { enabled });
      
      console.log(`🔧 Maintenance Mode: ${enabled ? 'ON' : 'OFF'}`);
      return true;
    }

    // ═══════════════════════════════════════════════════════════
    // HELPER UTILITIES
    // ═══════════════════════════════════════════════════════════
    
    getCourseName(courseId) {
      if (window.DigiSchoolCourses) {
        const course = window.DigiSchoolCourses.find(c => c.id === courseId);
        return course ? course.title : courseId;
      }
      return courseId;
    }

    getLearnerName() {
      const learner = JSON.parse(localStorage.getItem('learner_profile') || '{}');
      return learner.name || 'Apprenant';
    }

    getLearnerEmail() {
      const learner = JSON.parse(localStorage.getItem('learner_profile') || '{}');
      return learner.email || 'unknown@digischool.africa';
    }

    /**
     * Get admin dashboard summary
     */
    getDashboardSummary() {
      if (!this.init()) return null;
      
      return {
        platform: {
          version: this.config.platform.version,
          maintenanceMode: this.config.platform.maintenanceMode,
          fastTrackEnabled: this.isFastTrackEnabled(),
        },
        users: {
          total: this.getAllUsers().length,
          impersonating: this.isImpersonating(),
        },
        courses: {
          total: this.config.courses.courses.length,
          enabled: this.config.courses.courses.filter(c => c.enabled).length,
          disabled: this.config.courses.courses.filter(c => !c.enabled).length,
        },
        pricing: {
          packPrices: this.config.pricing.packPrices,
          promotionActive: this.config.pricing.promotions.active,
        },
        features: this.config.platform.featureFlags,
      };
    }

    /**
     * Export admin audit log
     */
    exportAuditLog() {
      if (!this.init()) return null;
      
      const logs = JSON.parse(localStorage.getItem('admin_audit_log') || '[]');
      const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `digischool-audit-log-${new Date().toISOString()}.json`;
      a.click();
      
      console.log(`📥 Audit log exported (${logs.length} entries)`);
      return logs;
    }
  }

  // Initialize and expose globally
  window.AdminSuperpowers = new AdminSuperpowers();

  // Auto-init if admin is logged in
  if (window.AdminConfig && window.AdminConfig.isAdmin()) {
    window.AdminSuperpowers.init();
    
    // Expose helpful console commands
    console.log('%c🔐 DigiSchool Admin Superpowers Loaded', 'color: #00ff00; font-weight: bold; font-size: 14px;');
    console.log('%cAvailable commands:', 'color: #00aaff; font-weight: bold;');
    console.log('  AdminSuperpowers.enableFastTrack()');
    console.log('  AdminSuperpowers.unlockAllModules(courseId)');
    console.log('  AdminSuperpowers.completeModule(courseId, moduleNum)');
    console.log('  AdminSuperpowers.completeCourse(courseId)');
    console.log('  AdminSuperpowers.generateCertificate(courseId)');
    console.log('  AdminSuperpowers.grantCourseAccess(email, courseId)');
    console.log('  AdminSuperpowers.impersonateUser(email)');
    console.log('  AdminSuperpowers.updatePackPrice(category, newPrice)');
    console.log('  AdminSuperpowers.setPromotion(code, percent, validUntil)');
    console.log('  AdminSuperpowers.toggleFeature(featureName, enabled)');
    console.log('  AdminSuperpowers.getDashboardSummary()');
    console.log('  AdminSuperpowers.exportAuditLog()');
  }

})();
