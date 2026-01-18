/**
 * DigiSchool Africa - Global Sticky Header
 * Version: 1.1.0 PREMIUM
 * Persistent navigation across all pages
 */

(function() {
  'use strict';

  // Sticky Header Component
  class StickyHeader {
    constructor() {
      this.header = null;
      this.scrollThreshold = 100;
      this.lastScrollY = 0;
      this.isSticky = false;
    }

    init() {
      this.createHeader();
      this.attachScrollListener();
      this.highlightCurrentPage();
      console.log('✅ Sticky Header initialized');
    }

    createHeader() {
      // Remove existing header if any
      const existing = document.getElementById('ds-sticky-header');
      if (existing) existing.remove();

      // Create header HTML
      const header = document.createElement('header');
      header.id = 'ds-sticky-header';
      header.className = 'ds-header';
      header.innerHTML = `
        <div class="ds-header-container">
          <!-- Logo -->
          <a href="/" class="ds-header-logo">
            <img src="/assets/logo-digischool-premium.svg" alt="DigiSchool Africa" height="40">
          </a>

          <!-- Navigation -->
          <nav class="ds-header-nav">
            <a href="/" class="ds-nav-link" data-page="home">Accueil</a>
            <a href="/b2c.html" class="ds-nav-link" data-page="b2c">Formations B2C</a>
            <a href="/companies.html" class="ds-nav-link" data-page="b2b">Entreprises</a>
            <a href="/b2c-assessment.html" class="ds-nav-link" data-page="assessment">Auto-évaluation</a>
            <a href="/about.html" class="ds-nav-link" data-page="about">À propos</a>
          </nav>

          <!-- CTA Buttons -->
          <div class="ds-header-actions">
            <a href="/user-dashboard.html" class="ds-btn ds-btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Dashboard
            </a>
            <a href="/admin.html" class="ds-btn ds-btn-admin" id="admin-btn" style="display: none;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Admin
            </a>
          </div>

          <!-- Mobile Menu Toggle -->
          <button class="ds-mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="ds-mobile-menu" id="mobile-menu">
          <nav class="ds-mobile-nav">
            <a href="/" class="ds-mobile-link">Accueil</a>
            <a href="/b2c.html" class="ds-mobile-link">Formations B2C</a>
            <a href="/companies.html" class="ds-mobile-link">Entreprises</a>
            <a href="/b2c-assessment.html" class="ds-mobile-link">Auto-évaluation</a>
            <a href="/about.html" class="ds-mobile-link">À propos</a>
            <a href="/user-dashboard.html" class="ds-mobile-link">Dashboard</a>
            <a href="/admin.html" class="ds-mobile-link ds-admin-link" style="display: none;">Admin</a>
          </nav>
        </div>
      `;

      // Insert at top of body
      document.body.insertBefore(header, document.body.firstChild);
      this.header = header;

      // Add spacer to prevent content jump
      const spacer = document.createElement('div');
      spacer.className = 'ds-header-spacer';
      document.body.insertBefore(spacer, header.nextSibling);

      // Setup mobile menu toggle
      this.setupMobileMenu();

      // Show admin button if logged in
      this.checkAdminStatus();

      // Add styles
      this.injectStyles();
    }

    injectStyles() {
      if (document.getElementById('ds-sticky-header-styles')) return;

      const styles = document.createElement('style');
      styles.id = 'ds-sticky-header-styles';
      styles.textContent = `
        /* DigiSchool Sticky Header Styles */
        .ds-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .ds-header.hidden {
          transform: translateY(-100%);
        }

        .ds-header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .ds-header-logo img {
          display: block;
          height: 40px;
          width: auto;
        }

        .ds-header-nav {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-left: auto;
        }

        .ds-nav-link {
          color: #2d3436;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .ds-nav-link:hover {
          color: #00b894;
          background: rgba(0, 184, 148, 0.08);
        }

        .ds-nav-link.active {
          color: #00b894;
          background: rgba(0, 184, 148, 0.12);
          font-weight: 600;
        }

        .ds-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ds-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .ds-btn-secondary {
          color: #2d3436;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .ds-btn-secondary:hover {
          background: rgba(0, 0, 0, 0.06);
          border-color: rgba(0, 0, 0, 0.12);
          transform: translateY(-1px);
        }

        .ds-btn-admin {
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
        }

        .ds-btn-admin:hover {
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          transform: translateY(-1px);
        }

        .ds-header-spacer {
          height: 64px;
        }

        /* Mobile Menu */
        .ds-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }

        .ds-mobile-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: #2d3436;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .ds-mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .ds-mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .ds-mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .ds-mobile-menu {
          display: none;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .ds-mobile-menu.open {
          display: block;
        }

        .ds-mobile-nav {
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ds-mobile-link {
          display: block;
          padding: 12px 16px;
          color: #2d3436;
          text-decoration: none;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .ds-mobile-link:hover {
          background: rgba(0, 184, 148, 0.08);
          color: #00b894;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .ds-header-nav {
            display: none;
          }

          .ds-header-actions {
            margin-left: auto;
          }

          .ds-mobile-toggle {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .ds-header-container {
            padding: 12px 16px;
            gap: 16px;
          }

          .ds-btn {
            padding: 8px 12px;
            font-size: 13px;
          }

          .ds-btn svg {
            display: none;
          }
        }
      `;

      document.head.appendChild(styles);
    }

    attachScrollListener() {
      let ticking = false;

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      });
    }

    handleScroll() {
      const scrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (scrollY > this.scrollThreshold) {
        if (scrollY > this.lastScrollY && !this.header.classList.contains('hidden')) {
          // Scrolling down - hide header
          this.header.classList.add('hidden');
        } else if (scrollY < this.lastScrollY && this.header.classList.contains('hidden')) {
          // Scrolling up - show header
          this.header.classList.remove('hidden');
        }
      }

      this.lastScrollY = scrollY;
    }

    highlightCurrentPage() {
      const path = window.location.pathname;
      const links = this.header.querySelectorAll('.ds-nav-link');

      links.forEach(link => {
        const page = link.dataset.page;
        link.classList.remove('active');

        if (
          (page === 'home' && (path === '/' || path === '/index.html')) ||
          (page === 'b2c' && path.includes('/b2c')) ||
          (page === 'b2b' && path.includes('/companies')) ||
          (page === 'assessment' && path.includes('/b2c-assessment')) ||
          (page === 'about' && path.includes('/about'))
        ) {
          link.classList.add('active');
        }
      });
    }

    setupMobileMenu() {
      const toggle = document.getElementById('mobile-menu-toggle');
      const menu = document.getElementById('mobile-menu');

      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('open');
      });

      // Close menu when clicking a link
      const links = menu.querySelectorAll('.ds-mobile-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          menu.classList.remove('open');
        });
      });
    }

    checkAdminStatus() {
      if (window.AdminConfig && window.AdminConfig.isAdmin()) {
        const adminBtn = document.getElementById('admin-btn');
        const adminLinks = document.querySelectorAll('.ds-admin-link');
        
        if (adminBtn) adminBtn.style.display = 'inline-flex';
        adminLinks.forEach(link => link.style.display = 'block');
      }
    }
  }

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new StickyHeader().init();
    });
  } else {
    new StickyHeader().init();
  }

  // Expose globally
  window.DigiSchoolHeader = StickyHeader;

})();
