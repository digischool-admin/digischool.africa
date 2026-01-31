/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — GLOBAL COMPONENTS V2.2.x-F               ║
 * ║  Header & Footer Universels — Production Ready                ║
 * ║  Contact Multi-Opérateurs | Logos Partenaires                 ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

// ============================================================
// HOTFIX: Auto-redirect to latest build if ?v= missing
// ============================================================
(function ensureLatestBuild() {
  if (!window.DS_BUILD_ID) return;
  
  const currentUrl = new URL(window.location.href);
  const hasVersion = currentUrl.searchParams.has('v');
  
  // Skip external links, special protocols
  if (window.location.protocol.startsWith('file') || 
      window.location.hostname === '') return;
  
  // Redirect if no version parameter
  if (!hasVersion) {
    currentUrl.searchParams.set('v', window.DS_BUILD_ID);
    window.location.replace(currentUrl.toString());
  }
})();

const DigiSchoolGlobalComponents = {
  // Header HTML
  getHeaderHTML() {
    return `
      <header class="ds-global-header" id="ds-main-header">
        <div class="ds-header-container">
          <a href="/" class="ds-header-logo" aria-label="DigiSchool Africa - Accueil">
            <svg class="ds-logo-img" width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="48" rx="8" fill="url(#logo-gradient)"/>
              <text x="100" y="32" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="white" text-anchor="middle">DigiSchool Africa</text>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="200" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#1E88E5"/>
                  <stop offset="100%" stop-color="#26A69A"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
          
          <nav class="ds-header-nav" id="ds-main-nav" aria-label="Navigation principale">
            <a href="/" class="ds-nav-link">Accueil</a>
            <a href="/b2c.html" class="ds-nav-link">Formations B2C</a>
            <a href="/companies.html" class="ds-nav-link">Entreprises</a>
            <a href="/b2c-assessment.html" class="ds-nav-link">Auto-évaluation</a>
            <a href="/about-premium.html" class="ds-nav-link">À propos</a>
          </nav>
          
          <div class="ds-header-actions">
            <a href="/b2c.html" class="ds-header-cta">Explorer les formations</a>
            <button class="ds-menu-toggle" id="ds-menu-toggle" aria-label="Menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    `;
  },

  // Footer HTML (CORRIGÉ: logos partenaires + téléphone)
  getFooterHTML() {
    return `
      <footer class="ds-global-footer" id="ds-main-footer">
        <div class="ds-footer-container">
          <div class="ds-footer-grid">
            <!-- Section 1: À propos -->
            <div class="ds-footer-section">
              <h3>DigiSchool Africa</h3>
              <p style="color: rgba(255,255,255,0.8); line-height: 1.7;">
                Plateforme panafricaine de formation professionnelle certifiante. 
                Excellence académique, innovation pédagogique, accompagnement premium.
              </p>
            </div>
            
            <!-- Section 2: Formations -->
            <div class="ds-footer-section">
              <h3>Formations</h3>
              <div class="ds-footer-links">
                <a href="/b2c.html" class="ds-footer-link">Catalogue B2C</a>
                <a href="/companies.html" class="ds-footer-link">Solutions B2B</a>
                <a href="/b2c-assessment.html" class="ds-footer-link">Auto-évaluation</a>
                <a href="/b2b-custom-request.html" class="ds-footer-link ds-footer-highlight">Formation sur-mesure</a>
                <a href="/b2c-idea-box.html" class="ds-footer-link ds-footer-highlight">Proposer une formation</a>
              </div>
            </div>
            
            <!-- Section 3: Entreprise -->
            <div class="ds-footer-section">
              <h3>Entreprise</h3>
              <div class="ds-footer-links">
                <a href="/about-premium.html" class="ds-footer-link">À propos</a>
                <a href="/contact.html" class="ds-footer-link">Contact</a>
                <a href="/mentions-legales-v2.2.html" class="ds-footer-link">Mentions Légales</a>
                <a href="/cgu-v2.2.html" class="ds-footer-link">CGU</a>
                <a href="/cgv-v2.2.html" class="ds-footer-link">CGV</a>
                <a href="/politique-confidentialite-v2.2.html" class="ds-footer-link">Confidentialité</a>
              </div>
            </div>
            
            <!-- Section 4: Contact -->
            <div class="ds-footer-section">
              <h3>Contact</h3>
              <div class="ds-footer-links">
                <a href="mailto:contact@digischool.africa" class="ds-footer-link">
                  📧 contact@digischool.africa
                </a>
                <button onclick="openPaymentModal()" class="ds-btn ds-btn-secondary" style="display:inline-block;margin-top:8px;border:none;cursor:pointer;background:linear-gradient(135deg,#1E88E5,#26A69A);color:white;padding:12px 24px;border-radius:8px;font-weight:600;transition:transform 0.2s;">
                  📞 Allo DigiSchool !
                </button>
                <div style="margin-top: var(--space-4);">
                  <p style="color: rgba(255,255,255,0.8); font-size: var(--text-sm);">
                    Abidjan, Côte d'Ivoire<br>
                    Afrique de l'Ouest
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Footer Bottom -->
          <div class="ds-footer-bottom">
            <p>
              © ${new Date().getFullYear()} DigiSchool Africa SARL. Tous droits réservés.<br>
              Directeur: <strong>Jean Pierre SAJORI</strong>
            </p>
            <p style="margin-top: var(--space-2); font-size: var(--text-xs); color: rgba(255,255,255,0.7);">
              Plateforme développée pour l'excellence africaine
            </p>
            ${window.DS_BUILD_ID ? `<p style="margin-top: 8px; font-size: 11px; color: rgba(255,255,255,0.6); opacity: 0.6;">Build v=${window.DS_BUILD_ID}</p>` : ''}
          </div>
        </div>
      </footer>
    `;
  },

  // Inject components into page
  inject() {
    // Remove any existing headers/footers
    document.querySelectorAll('header, .digischool-global-header, .ds-global-header').forEach(el => {
      if (el.id !== 'ds-main-header') el.remove();
    });
    
    document.querySelectorAll('footer, .ds-global-footer').forEach(el => {
      if (el.id !== 'ds-main-footer') el.remove();
    });
    
    // Inject header at top of body
    if (!document.getElementById('ds-main-header')) {
      document.body.insertAdjacentHTML('afterbegin', this.getHeaderHTML());
    }
    
    // Inject footer at bottom of body
    if (!document.getElementById('ds-main-footer')) {
      document.body.insertAdjacentHTML('beforeend', this.getFooterHTML());
    }
    
    // Initialize header behaviors
    this.initHeaderBehaviors();
  },

  // Initialize header sticky behavior
  initHeaderBehaviors() {
    const header = document.getElementById('ds-main-header');
    if (!header) return;
    
    // Sticky scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('ds-menu-toggle');
    const nav = document.getElementById('ds-main-nav');
    
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        
        // Animate hamburger
        menuToggle.classList.toggle('active');
      });
    }
    
    // Active nav link highlighting (V2.2.x-K.2 ENHANCED)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.ds-nav-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      let isActive = false;
      
      // Exact match
      if (href === currentPath) {
        isActive = true;
      }
      // Homepage special case
      else if (currentPath === '/' && href === '/') {
        isActive = true;
      }
      // Match /index.html to /
      else if ((currentPath === '/index.html' || currentPath === '/index') && href === '/') {
        isActive = true;
      }
      // Match section (e.g., /b2c.html matches /b2c-*)
      else if (currentPath.startsWith(href.replace('.html', '')) && href !== '/') {
        isActive = true;
      }
      
      if (isActive) {
        link.classList.add('active', 'nav-active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active', 'nav-active');
        link.removeAttribute('aria-current');
      }
    });
  }
};

// Auto-inject on page load
document.addEventListener('DOMContentLoaded', () => {
  DigiSchoolGlobalComponents.inject();
});

// Also inject immediately if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  DigiSchoolGlobalComponents.inject();
}

// Load payment modal script
(function() {
  const script = document.createElement('script');
  script.src = '/assets/payment-contact-modal.js';
  script.defer = true;
  document.head.appendChild(script);
})();

// Load partners section script
(function() {
  const script = document.createElement('script');
  script.src = '/assets/partners-section-global.js';
  script.defer = true;
  document.head.appendChild(script);
})();

// ============================================================
// VERSION PROPAGATION: Persist ?v=XXX across all navigation
// ============================================================
(function() {
  function propagateVersion() {
    const version = window.DS_BUILD_ID || new URLSearchParams(window.location.search).get('v');
    
    if (!version) return;
    
    // Propagate to all internal links
    function updateLinks() {
      document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        
        // Skip external, mailto, tel, whatsapp
        if (!href || 
            href.startsWith('mailto:') || 
            href.startsWith('tel:') || 
            href.includes('whatsapp') ||
            href.includes('wa.me') ||
            href.startsWith('#') ||
            (href.startsWith('http') && !href.includes('digischool.africa'))) {
          return;
        }
        
        // Internal link: add/update v parameter
        try {
          let url;
          if (href.startsWith('http')) {
            url = new URL(href);
          } else {
            url = new URL(href, window.location.origin);
          }
          
          if (!url.searchParams.has('v')) {
            url.searchParams.set('v', version);
            link.setAttribute('href', url.pathname + url.search + url.hash);
          }
        } catch(e) {
          // Ignore invalid URLs
        }
      });
    }
    
    // Intercept link clicks
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href]');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || 
          href.startsWith('mailto:') || 
          href.startsWith('tel:') || 
          href.includes('whatsapp') ||
          href.includes('wa.me') ||
          href.startsWith('#') ||
          (href.startsWith('http') && !href.includes('digischool.africa'))) {
        return;
      }
      
      // Add version to internal links on click
      try {
        let url;
        if (href.startsWith('http')) {
          url = new URL(href);
        } else {
          url = new URL(href, window.location.origin);
        }
        
        if (!url.searchParams.has('v')) {
          url.searchParams.set('v', version);
          e.preventDefault();
          window.location.href = url.toString();
        }
      } catch(e) {
        // Continue with default behavior
      }
    }, true);
    
    // Run on load and on DOM changes (for dynamically loaded content)
    updateLinks();
    
    // Watch for new links (catalog, modals, etc)
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Intercept window.location.href redirects in existing scripts
    const originalLocationSetter = Object.getOwnPropertyDescriptor(window, 'location').set;
    Object.defineProperty(window, 'location', {
      set: function(value) {
        if (typeof value === 'string' && !value.includes('v=') && !value.startsWith('mailto') && !value.startsWith('tel')) {
          const separator = value.includes('?') ? '&' : '?';
          value = `${value}${separator}v=${version}`;
        }
        return originalLocationSetter.call(window, value);
      },
      get: function() {
        return window.location;
      }
    });
  }
  
  // Run after DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', propagateVersion);
  } else {
    propagateVersion();
  }
  
  // Also run after a short delay for dynamic content
  setTimeout(propagateVersion, 500);
})();

