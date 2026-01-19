/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — UX COMPONENTS LIBRARY V2.2.x-G           ║
 * ║  NO MORE PAVÉS — Reusable Interactive Components             ║
 * ║  Cards + Accordions + Tabs + Progressive Disclosure           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolUXComponents = {
  // Init library
  init() {
    this.injectStyles();
    this.bindAllAccordions();
    this.bindAllTabs();
    this.observeScrollAnimations();
  },

  // Inject component styles
  injectStyles() {
    if (document.getElementById('ds-ux-components-styles')) return;
    
    const styles = `
      <style id="ds-ux-components-styles">
        /* ===== DS CARDS (PREMIUM) ===== */
        .ds-card-premium {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .ds-card-premium::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1E88E5, #26A69A);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .ds-card-premium:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          border-color: rgba(30, 136, 229, 0.3);
        }

        .ds-card-premium:hover::before {
          transform: scaleX(1);
        }

        .ds-card-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(30, 136, 229, 0.1), rgba(38, 166, 154, 0.1));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 20px;
        }

        .ds-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #263238;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .ds-card-description {
          font-size: 16px;
          color: #546E7A;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .ds-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #1E88E5, #26A69A);
          color: white;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .ds-card-cta:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
        }

        /* ===== DS ACCORDION ===== */
        .ds-accordion {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .ds-accordion-header {
          padding: 24px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: white;
          transition: all 0.2s ease;
          user-select: none;
        }

        .ds-accordion-header:hover {
          background: rgba(30, 136, 229, 0.02);
        }

        .ds-accordion.active .ds-accordion-header {
          background: rgba(30, 136, 229, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .ds-accordion-title {
          font-size: 20px;
          font-weight: 700;
          color: #263238;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ds-accordion-icon {
          font-size: 24px;
          transition: transform 0.3s ease;
        }

        .ds-accordion.active .ds-accordion-icon {
          transform: rotate(180deg);
        }

        .ds-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ds-accordion.active .ds-accordion-content {
          max-height: 2000px; /* Large enough for most content */
        }

        .ds-accordion-body {
          padding: 24px 28px;
          color: #546E7A;
          line-height: 1.8;
        }

        /* ===== DS TABS ===== */
        .ds-tabs {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 0;
          overflow: hidden;
        }

        .ds-tabs-nav {
          display: flex;
          gap: 0;
          background: #F5F5F5;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          overflow-x: auto;
        }

        .ds-tab-button {
          padding: 16px 28px;
          background: transparent;
          border: none;
          color: #546E7A;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          white-space: nowrap;
        }

        .ds-tab-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1E88E5, #26A69A);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .ds-tab-button:hover {
          background: rgba(30, 136, 229, 0.05);
          color: #1E88E5;
        }

        .ds-tab-button.active {
          background: white;
          color: #1E88E5;
        }

        .ds-tab-button.active::after {
          transform: scaleX(1);
        }

        .ds-tabs-content {
          padding: 32px;
        }

        .ds-tab-panel {
          display: none;
          animation: fadeIn 0.3s ease;
        }

        .ds-tab-panel.active {
          display: block;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== DS GRID LAYOUTS ===== */
        .ds-grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .ds-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .ds-grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        /* ===== DS SECTION HEADERS ===== */
        .ds-section {
          padding: 80px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .ds-section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .ds-section-title {
          font-size: 48px;
          font-weight: 700;
          color: #263238;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .ds-section-subtitle {
          font-size: 20px;
          color: #546E7A;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        /* ===== DS HERO SECTIONS ===== */
        .ds-hero {
          background: linear-gradient(135deg, rgba(30, 136, 229, 0.05) 0%, rgba(38, 166, 154, 0.05) 100%);
          padding: 120px 32px 80px;
          text-align: center;
        }

        .ds-hero-title {
          font-size: 56px;
          font-weight: 700;
          color: #263238;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .ds-hero-subtitle {
          font-size: 24px;
          color: #546E7A;
          line-height: 1.6;
          max-width: 900px;
          margin: 0 auto 40px;
        }

        .ds-hero-cta-group {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ===== DS BADGES ===== */
        .ds-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(30, 136, 229, 0.1);
          color: #1E88E5;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .ds-badge-success {
          background: rgba(38, 166, 154, 0.1);
          color: #26A69A;
        }

        .ds-badge-warning {
          background: rgba(255, 152, 0, 0.1);
          color: #FF9800;
        }

        /* ===== DS FEATURE LIST ===== */
        .ds-feature-list {
          list-style: none;
          padding: 0;
        }

        .ds-feature-item {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .ds-feature-item:last-child {
          border-bottom: none;
        }

        .ds-feature-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(30, 136, 229, 0.1), rgba(38, 166, 154, 0.1));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .ds-feature-content h4 {
          font-size: 18px;
          font-weight: 600;
          color: #263238;
          margin-bottom: 6px;
        }

        .ds-feature-content p {
          font-size: 15px;
          color: #546E7A;
          line-height: 1.6;
          margin: 0;
        }

        /* ===== SCROLL ANIMATIONS ===== */
        .ds-scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ds-scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .ds-section {
            padding: 48px 20px;
          }

          .ds-section-title {
            font-size: 32px;
          }

          .ds-section-subtitle {
            font-size: 16px;
          }

          .ds-hero {
            padding: 80px 20px 48px;
          }

          .ds-hero-title {
            font-size: 36px;
          }

          .ds-hero-subtitle {
            font-size: 18px;
          }

          .ds-card-premium {
            padding: 24px;
          }

          .ds-accordion-header,
          .ds-accordion-body {
            padding: 20px;
          }

          .ds-tabs-content {
            padding: 24px;
          }

          .ds-grid-2,
          .ds-grid-3,
          .ds-grid-4 {
            grid-template-columns: 1fr;
          }
        }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
  },

  // Create card component
  createCard({ icon, title, description, ctaText, ctaHref }) {
    return `
      <div class="ds-card-premium ds-scroll-reveal">
        ${icon ? `<div class="ds-card-icon">${icon}</div>` : ''}
        <h3 class="ds-card-title">${title}</h3>
        <p class="ds-card-description">${description}</p>
        ${ctaText && ctaHref ? `
          <a href="${ctaHref}" class="ds-card-cta">
            ${ctaText} →
          </a>
        ` : ''}
      </div>
    `;
  },

  // Create accordion component
  createAccordion({ id, icon, title, content }) {
    return `
      <div class="ds-accordion" data-accordion="${id}">
        <div class="ds-accordion-header">
          <div class="ds-accordion-title">
            ${icon ? `<span>${icon}</span>` : ''}
            ${title}
          </div>
          <span class="ds-accordion-icon">▼</span>
        </div>
        <div class="ds-accordion-content">
          <div class="ds-accordion-body">
            ${content}
          </div>
        </div>
      </div>
    `;
  },

  // Create tabs component
  createTabs({ id, tabs }) {
    const navHTML = tabs.map((tab, index) => `
      <button class="ds-tab-button ${index === 0 ? 'active' : ''}" data-tab="${id}-${index}">
        ${tab.label}
      </button>
    `).join('');

    const panelsHTML = tabs.map((tab, index) => `
      <div class="ds-tab-panel ${index === 0 ? 'active' : ''}" data-panel="${id}-${index}">
        ${tab.content}
      </div>
    `).join('');

    return `
      <div class="ds-tabs" data-tabs="${id}">
        <div class="ds-tabs-nav">
          ${navHTML}
        </div>
        <div class="ds-tabs-content">
          ${panelsHTML}
        </div>
      </div>
    `;
  },

  // Bind all accordions
  bindAllAccordions() {
    document.querySelectorAll('.ds-accordion').forEach(accordion => {
      const header = accordion.querySelector('.ds-accordion-header');
      if (!header) return;
      
      header.addEventListener('click', () => {
        const wasActive = accordion.classList.contains('active');
        
        // Close all other accordions in the same section (optional)
        // accordion.parentElement.querySelectorAll('.ds-accordion').forEach(acc => {
        //   acc.classList.remove('active');
        // });
        
        // Toggle current
        accordion.classList.toggle('active');
      });
    });
  },

  // Bind all tabs
  bindAllTabs() {
    document.querySelectorAll('.ds-tabs').forEach(tabsContainer => {
      const buttons = tabsContainer.querySelectorAll('.ds-tab-button');
      const panels = tabsContainer.querySelectorAll('.ds-tab-panel');
      
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          // Remove active from all
          buttons.forEach(btn => btn.classList.remove('active'));
          panels.forEach(panel => panel.classList.remove('active'));
          
          // Add active to clicked
          button.classList.add('active');
          panels[index]?.classList.add('active');
        });
      });
    });
  },

  // Observe scroll animations
  observeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.ds-scroll-reveal').forEach(el => {
      observer.observe(el);
    });
  }
};

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DigiSchoolUXComponents.init();
  });
} else {
  DigiSchoolUXComponents.init();
}

// Export global
window.DigiSchoolUXComponents = DigiSchoolUXComponents;
