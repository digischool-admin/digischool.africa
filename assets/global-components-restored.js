/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — HEADER & FOOTER UNIVERSELS               ║
 * ║  Version: V2.2.x-D RESTORATION                                ║
 * ║  UN SEUL HEADER — UN SEUL FOOTER — PARTOUT                    ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

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

  // Footer HTML
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
                <a href="/b2b-custom-request.html" class="ds-footer-link">Formation sur-mesure</a>
                <a href="/b2c-idea-box.html" class="ds-footer-link">Proposer une formation</a>
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
                <a href="tel:+225XXXXXXXXXX" class="ds-footer-link">
                  📞 +225 XX XX XX XX XX
                </a>
                <div style="margin-top: var(--space-4);">
                  <p style="color: rgba(255,255,255,0.8); font-size: var(--text-sm);">
                    Abidjan, Côte d'Ivoire<br>
                    Afrique de l'Ouest
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Partners Section -->
          <div class="ds-footer-partners" style="margin-top: var(--space-12); padding-top: var(--space-8); border-top: 1px solid rgba(255,255,255,0.1);">
            <h4 style="text-align: center; color: white; margin-bottom: var(--space-6); font-size: var(--text-lg);">
              Nos Partenaires & Références
            </h4>
            <div class="ds-partners-logos" style="display: flex; justify-content: center; align-items: center; gap: var(--space-8); flex-wrap: wrap; opacity: 0.7;">
              <span style="color: white; font-size: var(--text-sm); font-weight: 600;">PMI</span>
              <span style="color: white; font-size: var(--text-sm); font-weight: 600;">Microsoft</span>
              <span style="color: white; font-size: var(--text-sm); font-weight: 600;">Google</span>
              <span style="color: white; font-size: var(--text-sm); font-weight: 600;">Harvard Business School</span>
              <span style="color: white; font-size: var(--text-sm); font-weight: 600;">MIT Sloan</span>
            </div>
          </div>
          
          <!-- Footer Bottom -->
          <div class="ds-footer-bottom">
            <p>
              © ${new Date().getFullYear()} DigiSchool Africa SARL. Tous droits réservés.<br>
              Directeur: <strong>Jean Pierre SAJORI</strong>
            </p>
            <p style="margin-top: var(--space-2); font-size: var(--text-xs);">
              Plateforme développée avec ❤️ pour l'excellence africaine
            </p>
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
    
    // Active nav link highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.ds-nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPath || 
          (currentPath === '/' && link.getAttribute('href') === '/')) {
        link.classList.add('active');
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
