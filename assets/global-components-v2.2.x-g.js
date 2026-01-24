/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — GLOBAL COMPONENTS V2.2.x-G               ║
 * ║  PERFECT EXPERIENCE — Header & Footer Universels              ║
 * ║  Homogénéité Totale + Sticky Header + Partner Logos           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolGlobalComponents = {
  // Configuration
  config: {
    phone: '+225 05 05 11 11 02',
    email: 'contact@digischool.africa',
    address: 'Abidjan, Côte d\'Ivoire',
    year: new Date().getFullYear()
  },

  // Init (auto-inject header/footer if not present)
  init() {
    this.injectStyles();
    this.injectHeader();
    this.injectFooter();
    this.bindHeaderScroll();
    this.bindMobileMenu();
    this.highlightActivePage();
  },

  // Inject styles globaux
  injectStyles() {
    if (document.getElementById('ds-global-components-styles')) return;
    
    const styles = `
      <style id="ds-global-components-styles">
        /* ===== CSS VARIABLES (DS BRAND) ===== */
        :root {
          --ds-primary: #1E88E5;
          --ds-secondary: #26A69A;
          --ds-accent: #7E57C2;
          --ds-dark: #263238;
          --ds-gray: #546E7A;
          --ds-light-gray: #ECEFF1;
          --ds-white: #FFFFFF;
          --ds-gradient: linear-gradient(135deg, #1E88E5 0%, #26A69A 100%);
          --ds-gradient-hover: linear-gradient(135deg, #1976D2 0%, #00897B 100%);
          --space-2: 0.5rem;
          --space-4: 1rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --text-sm: 0.875rem;
          --text-base: 1rem;
          --text-lg: 1.125rem;
          --text-xl: 1.25rem;
          --text-2xl: 1.5rem;
          --transition: all 0.3s ease;
        }

        /* ===== GLOBAL HEADER (STICKY + SCROLL DETECTION) ===== */
        .ds-global-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: var(--transition);
        }

        .ds-global-header.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 1);
        }

        /* Compensate fixed header */
        body {
          padding-top: 80px;
        }

        .ds-header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 18px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* Logo */
        .ds-header-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: var(--transition);
        }

        .ds-header-logo:hover {
          transform: scale(1.05);
        }

        .ds-logo-img {
          height: 48px;
          width: auto;
        }

        /* Navigation */
        .ds-header-nav {
          display: flex;
          align-items: center;
          gap: 36px;
          flex: 1;
          justify-content: center;
        }

        .ds-nav-link {
          color: var(--ds-dark);
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          position: relative;
          padding: 8px 4px;
          transition: var(--transition);
        }

        .ds-nav-link:hover {
          color: var(--ds-primary);
        }

        .ds-nav-link.active {
          color: var(--ds-primary);
        }

        .ds-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--ds-gradient);
          transition: width 0.3s ease;
        }

        .ds-nav-link:hover::after,
        .ds-nav-link.active::after {
          width: 100%;
        }

        /* Header Actions */
        .ds-header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ds-header-cta {
          padding: 12px 24px;
          background: var(--ds-gradient);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.25);
          white-space: nowrap;
        }

        .ds-header-cta:hover {
          background: var(--ds-gradient-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(30, 136, 229, 0.35);
        }

        /* Mobile Menu Toggle */
        .ds-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          transition: var(--transition);
        }

        .ds-menu-toggle span {
          width: 24px;
          height: 3px;
          background: var(--ds-dark);
          border-radius: 2px;
          transition: var(--transition);
        }

        .ds-menu-toggle:hover span {
          background: var(--ds-primary);
        }

        .ds-menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }

        .ds-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .ds-menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }

        /* ===== GLOBAL FOOTER ===== */
        .ds-global-footer {
          background: linear-gradient(135deg, var(--ds-dark) 0%, #1A237E 100%);
          color: white;
          padding: var(--space-16) var(--space-4);
          margin-top: var(--space-16);
        }

        .ds-footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .ds-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-12);
        }

        .ds-footer-section h3 {
          color: white;
          font-size: var(--text-xl);
          margin-bottom: var(--space-4);
          font-weight: 700;
        }

        .ds-footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .ds-footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: var(--text-base);
          transition: var(--transition);
        }

        .ds-footer-link:hover {
          color: var(--ds-secondary);
          transform: translateX(4px);
        }

        /* Partner Logos */
        .ds-footer-partners {
          margin-top: var(--space-16);
          padding-top: var(--space-12);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .ds-footer-partners h4 {
          color: white;
          margin-bottom: var(--space-8);
          font-size: var(--text-lg);
          font-weight: 600;
        }

        .ds-partners-logos-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-6);
          flex-wrap: wrap;
          opacity: 0.9;
        }

        .partner-logo {
          background: white;
          padding: 12px 20px;
          border-radius: 8px;
          transition: var(--transition);
          cursor: default;
        }

        .partner-logo:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          opacity: 1;
        }

        .partner-logo span {
          font-weight: 700;
          font-size: 16px;
          display: block;
          text-align: center;
          line-height: 1.2;
        }

        /* Footer Bottom */
        .ds-footer-bottom {
          margin-top: var(--space-12);
          padding-top: var(--space-8);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .ds-footer-bottom p {
          color: rgba(255, 255, 255, 0.7);
          font-size: var(--text-sm);
          line-height: 1.8;
        }

        .ds-footer-bottom a {
          color: var(--ds-secondary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }

        .ds-footer-bottom a:hover {
          color: white;
        }

        /* ===== RESPONSIVE (MOBILE) ===== */
        @media (max-width: 1024px) {
          .ds-header-nav {
            gap: 24px;
          }

          .ds-nav-link {
            font-size: 15px;
          }
        }

        @media (max-width: 768px) {
          body {
            padding-top: 70px;
          }

          .ds-header-container {
            padding: 14px 20px;
          }

          .ds-header-nav {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            gap: 16px;
            transform: translateY(-120%);
            transition: transform 0.3s ease;
          }

          .ds-header-nav.active {
            transform: translateY(0);
          }

          .ds-menu-toggle {
            display: flex;
          }

          .ds-header-cta {
            display: none;
          }

          .ds-footer-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .partner-logo {
            padding: 10px 16px;
          }

          .partner-logo span {
            font-size: 14px;
          }
        }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
  },

  // Header HTML
  getHeaderHTML() {
    return `
      <header class="ds-global-header" id="ds-main-header">
        <div class="ds-header-container">
          <a href="/" class="ds-header-logo" aria-label="DigiSchool Africa - Accueil">
            <svg class="ds-logo-img" width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="48" rx="8" fill="url(#logo-gradient)"/>
              <text x="100" y="30" font-family="'Arial', sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle">DigiSchool Africa</text>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="200" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#1E88E5"/>
                  <stop offset="100%" stop-color="#26A69A"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
          
          <nav class="ds-header-nav" id="ds-main-nav" aria-label="Navigation principale">
            <a href="/" class="ds-nav-link" data-page="home">Accueil</a>
            <a href="/b2c.html" class="ds-nav-link" data-page="b2c">Formations B2C</a>
            <a href="/companies.html" class="ds-nav-link" data-page="companies">Entreprises</a>
            <a href="/b2c-assessment.html" class="ds-nav-link" data-page="assessment">Auto-évaluation</a>
            <a href="/about-premium.html" class="ds-nav-link" data-page="about">À propos</a>
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
                <a href="mailto:${this.config.email}" class="ds-footer-link">
                  📧 ${this.config.email}
                </a>
                <a href="tel:${this.config.phone.replace(/\s/g, '')}" class="ds-footer-link">
                  📞 ${this.config.phone}
                </a>
                <div style="margin-top: var(--space-4);">
                  <p style="color: rgba(255,255,255,0.8); font-size: var(--text-sm);">
                    ${this.config.address}<br>
                    Afrique de l'Ouest
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Partners Section -->
          <div class="ds-footer-partners">
            <h4>Nos Partenaires & Références Académiques</h4>
            <div class="ds-partners-logos-grid">
              <div class="partner-logo">
                <span style="color: #002855;">PMI</span>
              </div>
              <div class="partner-logo">
                <span style="color: #00A4EF;">Microsoft</span>
              </div>
              <div class="partner-logo">
                <span style="color: #4285F4;">Google</span>
              </div>
              <div class="partner-logo">
                <span style="color: #A41034; font-size: 14px;">Harvard<br>Business</span>
              </div>
              <div class="partner-logo">
                <span style="color: #8B0000; font-size: 14px;">MIT<br>Sloan</span>
              </div>
              <div class="partner-logo">
                <span style="color: #003893;">INSEAD</span>
              </div>
            </div>
          </div>
          
          <!-- Footer Bottom -->
          <div class="ds-footer-bottom">
            <p>
              © ${this.config.year} DigiSchool Africa SARL. Tous droits réservés.<br>
              Directeur: Jean Pierre SAJORI | Propulsé par <a href="https://www.mydigilab.io" target="_blank" rel="noopener">Digilab</a>
            </p>
          </div>
        </div>
      </footer>
    `;
  },

  // Inject header if not present
  injectHeader() {
    if (document.getElementById('ds-main-header')) return;
    
    // Remove legacy headers
    const legacyHeaders = document.querySelectorAll('header:not(#ds-main-header)');
    legacyHeaders.forEach(header => {
      if (!header.id || header.id !== 'ds-main-header') {
        header.style.display = 'none';
      }
    });
    
    document.body.insertAdjacentHTML('afterbegin', this.getHeaderHTML());
  },

  // Inject footer if not present
  injectFooter() {
    if (document.getElementById('ds-main-footer')) return;
    
    // Remove legacy footers
    const legacyFooters = document.querySelectorAll('footer:not(#ds-main-footer)');
    legacyFooters.forEach(footer => {
      if (!footer.id || footer.id !== 'ds-main-footer') {
        footer.style.display = 'none';
      }
    });
    
    document.body.insertAdjacentHTML('beforeend', this.getFooterHTML());
  },

  // Bind scroll detection for header
  bindHeaderScroll() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const header = document.getElementById('ds-main-header');
      if (!header) return;
      
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  },

  // Bind mobile menu toggle
  bindMobileMenu() {
    const toggle = document.getElementById('ds-menu-toggle');
    const nav = document.getElementById('ds-main-nav');
    
    if (!toggle || !nav) return;
    
    toggle.addEventListener('click', () => {
      const isActive = toggle.classList.toggle('active');
      nav.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isActive);
    });
    
    // Close menu on link click
    nav.querySelectorAll('.ds-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  },

  // Highlight active page
  highlightActivePage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.ds-nav-link');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (href === '/' && currentPath === '/index.html')) {
        link.classList.add('active');
      }
    });
  }
};

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DigiSchoolGlobalComponents.init();
  });
} else {
  DigiSchoolGlobalComponents.init();
}

// Export global
window.DigiSchoolGlobalComponents = DigiSchoolGlobalComponents;
