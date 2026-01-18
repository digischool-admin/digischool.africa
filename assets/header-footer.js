/**
 * Shared Header & Footer - DigiSchool Africa
 * Social links, navigation, and chatbot integration
 */

(function() {
  'use strict';

  const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/digischoolafrica',
    linkedin: 'https://linkedin.com/company/digischoolafrica',
    tiktok: 'https://tiktok.com/@digischoolafrica',
    youtube: 'https://youtube.com/@digischoolafrica',
    telegram: 'https://t.me/digischoolafrica'
  };

  const CONTACT_LINKS = {
    whatsapp: 'https://wa.me/2250505111102',
    email: 'support@digischool.africa',
    phone: '+225 05 05 11 11 02'
  };

  function renderHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    header.innerHTML = `
      <div class="header-container">
        <div class="header-left">
          <a href="./index.html" class="logo-link">
            <img src="./assets/logos/logo-digischool.svg" alt="DigiSchool Africa" class="logo" />
          </a>
        </div>

        <nav class="header-nav">
          <a href="./index.html" class="nav-link">Accueil</a>
          <a href="./b2c.html" class="nav-link">Formations B2C</a>
          <a href="./companies.html" class="nav-link">Entreprises (B2B)</a>
          <a href="./b2c-assessment.html" class="nav-link">Auto-évaluation</a>
          <a href="./about.html" class="nav-link">À propos</a>
        </nav>

        <div class="header-right">
          <div class="social-icons">
            <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener" aria-label="Facebook" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.tiktok}" target="_blank" rel="noopener" aria-label="TikTok" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.telegram}" target="_blank" rel="noopener" aria-label="Telegram" class="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>

          <button class="chat-btn" id="open-chatbot-btn" aria-label="Ouvrir le chat">
            💬 Chat
          </button>

          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="mobile-nav" id="mobile-nav">
        <a href="./index.html" class="mobile-nav-link">Accueil</a>
        <a href="./b2c.html" class="mobile-nav-link">Formations B2C</a>
        <a href="./companies.html" class="mobile-nav-link">Entreprises (B2B)</a>
        <a href="./b2c-assessment.html" class="mobile-nav-link">Auto-évaluation</a>
        <a href="./about.html" class="mobile-nav-link">À propos</a>
        <a href="./user-dashboard.html" class="mobile-nav-link">Mon Dashboard</a>
        <a href="./admin.html" class="mobile-nav-link">Admin</a>
      </div>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
      });
    }

    // Open chatbot
    const chatBtn = document.getElementById('open-chatbot-btn');
    if (chatBtn) {
      chatBtn.addEventListener('click', function() {
        if (window.DigiSchoolChatbot && typeof window.DigiSchoolChatbot.open === 'function') {
          window.DigiSchoolChatbot.open();
        }
      });
    }
  }

  function renderFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-col">
            <h3>DigiSchool Africa</h3>
            <p>Plateforme panafricaine de formation professionnelle avec IA embarquée</p>
            <div class="footer-social">
              <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="${SOCIAL_LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h3>Formations</h3>
            <a href="./b2c.html">Catalogue B2C</a>
            <a href="./companies.html">Solutions B2B</a>
            <a href="./b2c-assessment.html">Auto-évaluation</a>
            <a href="./user-dashboard.html">Mon Dashboard</a>
          </div>

          <div class="footer-col">
            <h3>Entreprise</h3>
            <a href="./about.html">À propos</a>
            <a href="https://www.mydigilab.io" target="_blank" rel="noopener">Digilab (Parent)</a>
            <a href="./whatsapp-assistant.html">Assistant WhatsApp</a>
            <a href="./admin.html">Admin</a>
          </div>

          <div class="footer-col">
            <h3>Contact</h3>
            <a href="${CONTACT_LINKS.whatsapp}" target="_blank" rel="noopener">
              💬 WhatsApp: ${CONTACT_LINKS.phone}
            </a>
            <a href="mailto:${CONTACT_LINKS.email}">
              ✉️ ${CONTACT_LINKS.email}
            </a>
            <a href="mailto:contact@digischool.africa">
              📧 contact@digischool.africa
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 DigiSchool Africa — Propriété de <a href="https://www.mydigilab.io" target="_blank" rel="noopener">Digilab</a></p>
          <div class="footer-links">
            <a href="./cgu.html">CGU</a>
            <span>|</span>
            <a href="./cgv.html">CGV</a>
            <span>|</span>
            <a href="./privacy.html">Confidentialité</a>
          </div>
        </div>
      </div>
    `;
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      renderHeader();
      renderFooter();
    });
  } else {
    renderHeader();
    renderFooter();
  }

})();
