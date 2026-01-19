/**
 * ========================================
 * DIGISCHOOL AFRICA - PREMIUM UX COMPONENTS V2.2.x-H
 * ========================================
 * Objective: Eliminate ALL "pavés" (text blocks) site-wide
 * Approach: Card-based, accordion-based, progressive disclosure
 * Pages affected: B2C, B2B, About, Contact, Legal
 * 
 * Core principle: If a B2B decision-maker sees 20s of text wall, the page FAILS.
 * 
 * @version V2.2.x-H ONE-SHOT PRODUCTION — UX HARDENING
 * @date 2026-01-19
 */

const DigiSchoolPremiumUX = {
  version: 'V2.2.x-H',
  
  /**
   * ==========================================
   * COMPONENT 1: PREMIUM FEATURE CARD
   * ==========================================
   * Usage: Key features, benefits, offerings
   */
  createFeatureCard(options = {}) {
    const {
      icon = '✨',
      title = 'Titre',
      description = 'Description',
      cta = null, // { text: 'CTA', href: '#', style: 'primary' }
      badge = null, // 'POPULAIRE' | 'NOUVEAU'
      animated = true
    } = options;
    
    const card = document.createElement('div');
    card.className = 'ds-feature-card' + (animated ? ' ds-fade-in' : '');
    
    if (badge) {
      const badgeEl = document.createElement('div');
      badgeEl.className = 'ds-card-badge';
      badgeEl.textContent = badge;
      card.appendChild(badgeEl);
    }
    
    card.innerHTML += `
      <div class="ds-feature-icon">${icon}</div>
      <h3 class="ds-feature-title">${title}</h3>
      <p class="ds-feature-description">${description}</p>
      ${cta ? `<a href="${cta.href}" class="ds-feature-cta ds-cta-${cta.style || 'primary'}">${cta.text}</a>` : ''}
    `;
    
    return card;
  },
  
  /**
   * ==========================================
   * COMPONENT 2: INTERACTIVE ACCORDION
   * ==========================================
   * Usage: FAQ, program details, prerequisites
   */
  createAccordion(options = {}) {
    const {
      title = 'Section',
      content = '',
      icon = '▶',
      defaultOpen = false,
      id = 'accordion-' + Date.now()
    } = options;
    
    const accordion = document.createElement('div');
    accordion.className = 'ds-accordion' + (defaultOpen ? ' ds-accordion-open' : '');
    accordion.setAttribute('data-accordion-id', id);
    
    accordion.innerHTML = `
      <button class="ds-accordion-trigger" aria-expanded="${defaultOpen}" aria-controls="${id}-content">
        <span class="ds-accordion-icon">${icon}</span>
        <span class="ds-accordion-title">${title}</span>
        <span class="ds-accordion-chevron">›</span>
      </button>
      <div class="ds-accordion-content" id="${id}-content" ${!defaultOpen ? 'style="display: none;"' : ''}>
        <div class="ds-accordion-body">
          ${content}
        </div>
      </div>
    `;
    
    // Bind toggle
    const trigger = accordion.querySelector('.ds-accordion-trigger');
    trigger.addEventListener('click', () => {
      this.toggleAccordion(accordion);
    });
    
    return accordion;
  },
  
  toggleAccordion(accordion) {
    const isOpen = accordion.classList.contains('ds-accordion-open');
    const content = accordion.querySelector('.ds-accordion-content');
    const trigger = accordion.querySelector('.ds-accordion-trigger');
    
    if (isOpen) {
      // Close
      accordion.classList.remove('ds-accordion-open');
      content.style.display = 'none';
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      // Open
      accordion.classList.add('ds-accordion-open');
      content.style.display = 'block';
      trigger.setAttribute('aria-expanded', 'true');
    }
  },
  
  /**
   * ==========================================
   * COMPONENT 3: TABBED INTERFACE
   * ==========================================
   * Usage: Program details, formats, pricing tiers
   */
  createTabs(options = {}) {
    const {
      tabs = [], // [{ id: 'tab1', label: 'Tab 1', content: 'Content' }]
      defaultTab = 0,
      id = 'tabs-' + Date.now()
    } = options;
    
    const container = document.createElement('div');
    container.className = 'ds-tabs-container';
    container.setAttribute('data-tabs-id', id);
    
    // Create tab navigation
    const tabNav = document.createElement('div');
    tabNav.className = 'ds-tabs-nav';
    tabNav.setAttribute('role', 'tablist');
    
    tabs.forEach((tab, index) => {
      const button = document.createElement('button');
      button.className = 'ds-tab-button' + (index === defaultTab ? ' ds-tab-active' : '');
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', index === defaultTab ? 'true' : 'false');
      button.setAttribute('aria-controls', `${id}-panel-${tab.id}`);
      button.textContent = tab.label;
      
      button.addEventListener('click', () => {
        this.switchTab(container, index);
      });
      
      tabNav.appendChild(button);
    });
    
    container.appendChild(tabNav);
    
    // Create tab panels
    const panels = document.createElement('div');
    panels.className = 'ds-tabs-panels';
    
    tabs.forEach((tab, index) => {
      const panel = document.createElement('div');
      panel.className = 'ds-tab-panel' + (index === defaultTab ? ' ds-tab-panel-active' : '');
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('id', `${id}-panel-${tab.id}`);
      panel.innerHTML = tab.content;
      
      if (index !== defaultTab) {
        panel.style.display = 'none';
      }
      
      panels.appendChild(panel);
    });
    
    container.appendChild(panels);
    
    return container;
  },
  
  switchTab(container, index) {
    const buttons = container.querySelectorAll('.ds-tab-button');
    const panels = container.querySelectorAll('.ds-tab-panel');
    
    buttons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('ds-tab-active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('ds-tab-active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
    
    panels.forEach((panel, i) => {
      if (i === index) {
        panel.classList.add('ds-tab-panel-active');
        panel.style.display = 'block';
      } else {
        panel.classList.remove('ds-tab-panel-active');
        panel.style.display = 'none';
      }
    });
  },
  
  /**
   * ==========================================
   * COMPONENT 4: TIMELINE (for About page)
   * ==========================================
   */
  createTimeline(items = []) {
    const timeline = document.createElement('div');
    timeline.className = 'ds-timeline';
    
    items.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'ds-timeline-item ds-fade-in';
      timelineItem.style.animationDelay = `${index * 0.1}s`;
      
      timelineItem.innerHTML = `
        <div class="ds-timeline-marker">${item.icon || '●'}</div>
        <div class="ds-timeline-content">
          <div class="ds-timeline-date">${item.date}</div>
          <h4 class="ds-timeline-title">${item.title}</h4>
          <p class="ds-timeline-description">${item.description}</p>
        </div>
      `;
      
      timeline.appendChild(timelineItem);
    });
    
    return timeline;
  },
  
  /**
   * ==========================================
   * COMPONENT 5: STAT CARD
   * ==========================================
   */
  createStatCard(options = {}) {
    const {
      value = '0',
      label = 'Métrique',
      icon = '📊',
      trend = null // { value: '+15%', direction: 'up' }
    } = options;
    
    const card = document.createElement('div');
    card.className = 'ds-stat-card ds-fade-in';
    
    card.innerHTML = `
      <div class="ds-stat-icon">${icon}</div>
      <div class="ds-stat-value">${value}</div>
      <div class="ds-stat-label">${label}</div>
      ${trend ? `<div class="ds-stat-trend ds-trend-${trend.direction}">${trend.value}</div>` : ''}
    `;
    
    return card;
  },
  
  /**
   * ==========================================
   * COMPONENT 6: CTA BANNER
   * ==========================================
   */
  createCTABanner(options = {}) {
    const {
      title = 'Prêt à commencer ?',
      description = 'Transformez votre carrière dès aujourd\'hui',
      primaryCTA = { text: 'Commencer', href: '/b2c-assessment.html' },
      secondaryCTA = null,
      background = 'gradient' // 'gradient' | 'solid' | 'pattern'
    } = options;
    
    const banner = document.createElement('div');
    banner.className = `ds-cta-banner ds-cta-bg-${background}`;
    
    banner.innerHTML = `
      <div class="ds-cta-content">
        <h2 class="ds-cta-title">${title}</h2>
        <p class="ds-cta-description">${description}</p>
        <div class="ds-cta-actions">
          <a href="${primaryCTA.href}" class="ds-btn ds-btn-primary">${primaryCTA.text}</a>
          ${secondaryCTA ? `<a href="${secondaryCTA.href}" class="ds-btn ds-btn-secondary">${secondaryCTA.text}</a>` : ''}
        </div>
      </div>
    `;
    
    return banner;
  },
  
  /**
   * ==========================================
   * COMPONENT 7: STEP INDICATOR
   * ==========================================
   */
  createStepIndicator(options = {}) {
    const {
      steps = [], // [{ title: 'Step 1', description: 'Description' }]
      currentStep = 0
    } = options;
    
    const container = document.createElement('div');
    container.className = 'ds-steps-container';
    
    steps.forEach((step, index) => {
      const stepEl = document.createElement('div');
      stepEl.className = 'ds-step' + 
        (index === currentStep ? ' ds-step-current' : '') +
        (index < currentStep ? ' ds-step-completed' : '');
      
      stepEl.innerHTML = `
        <div class="ds-step-number">${index + 1}</div>
        <div class="ds-step-content">
          <div class="ds-step-title">${step.title}</div>
          ${step.description ? `<div class="ds-step-description">${step.description}</div>` : ''}
        </div>
      `;
      
      container.appendChild(stepEl);
      
      // Add connector line (except for last step)
      if (index < steps.length - 1) {
        const connector = document.createElement('div');
        connector.className = 'ds-step-connector' + (index < currentStep ? ' ds-step-connector-completed' : '');
        container.appendChild(connector);
      }
    });
    
    return container;
  },
  
  /**
   * ==========================================
   * UTILITY: Convert text block to cards
   * ==========================================
   */
  convertTextBlockToCards(container, options = {}) {
    const {
      selector = 'p',
      cardsPerRow = 3,
      cardStyle = 'feature' // 'feature' | 'simple'
    } = options;
    
    const textElements = container.querySelectorAll(selector);
    const grid = document.createElement('div');
    grid.className = 'ds-cards-grid ds-grid-' + cardsPerRow;
    
    textElements.forEach(el => {
      const card = this.createFeatureCard({
        title: el.querySelector('strong')?.textContent || 'Information',
        description: el.textContent.replace(el.querySelector('strong')?.textContent || '', '').trim(),
        animated: true
      });
      
      grid.appendChild(card);
      el.remove();
    });
    
    container.appendChild(grid);
  },
  
  /**
   * ==========================================
   * INJECT PREMIUM STYLES
   * ==========================================
   */
  injectStyles() {
    if (document.getElementById('ds-premium-ux-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'ds-premium-ux-styles';
    style.textContent = `
      /* ===================================== */
      /* DIGISCHOOL PREMIUM UX STYLES V2.2.x-H */
      /* ===================================== */
      
      /* ANIMATIONS */
      @keyframes ds-fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .ds-fade-in {
        animation: ds-fade-in 0.6s ease-out forwards;
      }
      
      /* FEATURE CARDS */
      .ds-feature-card {
        background: #fff;
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .ds-feature-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
      }
      
      .ds-card-badge {
        position: absolute;
        top: 16px;
        right: 16px;
        background: linear-gradient(135deg, #1E88E5, #26A69A);
        color: #fff;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.5px;
      }
      
      .ds-feature-icon {
        font-size: 48px;
        margin-bottom: 20px;
        line-height: 1;
      }
      
      .ds-feature-title {
        font-size: 22px;
        font-weight: 700;
        color: #263238;
        margin: 0 0 12px 0;
      }
      
      .ds-feature-description {
        font-size: 15px;
        line-height: 1.6;
        color: #546E7A;
        margin: 0 0 20px 0;
      }
      
      .ds-feature-cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      
      .ds-cta-primary {
        background: linear-gradient(135deg, #1E88E5, #1976D2);
        color: #fff;
      }
      
      .ds-cta-primary:hover {
        background: linear-gradient(135deg, #1976D2, #1565C0);
        transform: translateY(-2px);
      }
      
      /* ACCORDION */
      .ds-accordion {
        background: #fff;
        border-radius: 12px;
        margin-bottom: 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .ds-accordion:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      }
      
      .ds-accordion-trigger {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 24px;
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: left;
        transition: background 0.2s ease;
      }
      
      .ds-accordion-trigger:hover {
        background: #F5F7FA;
      }
      
      .ds-accordion-icon {
        font-size: 24px;
        flex-shrink: 0;
      }
      
      .ds-accordion-title {
        flex: 1;
        font-size: 18px;
        font-weight: 700;
        color: #263238;
      }
      
      .ds-accordion-chevron {
        font-size: 24px;
        color: #90A4AE;
        transition: transform 0.3s ease;
      }
      
      .ds-accordion-open .ds-accordion-chevron {
        transform: rotate(90deg);
      }
      
      .ds-accordion-content {
        transition: all 0.3s ease;
      }
      
      .ds-accordion-body {
        padding: 0 24px 24px 64px;
        color: #546E7A;
        line-height: 1.7;
      }
      
      /* TABS */
      .ds-tabs-container {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }
      
      .ds-tabs-nav {
        display: flex;
        gap: 0;
        background: #F5F7FA;
        border-bottom: 2px solid #E0E7ED;
      }
      
      .ds-tab-button {
        flex: 1;
        padding: 16px 24px;
        background: transparent;
        border: none;
        font-size: 16px;
        font-weight: 600;
        color: #607D8B;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
      }
      
      .ds-tab-button:hover {
        background: #fff;
        color: #1E88E5;
      }
      
      .ds-tab-button.ds-tab-active {
        background: #fff;
        color: #1E88E5;
      }
      
      .ds-tab-button.ds-tab-active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, #1E88E5, #26A69A);
      }
      
      .ds-tabs-panels {
        padding: 32px;
      }
      
      .ds-tab-panel {
        animation: ds-fade-in 0.3s ease-out;
      }
      
      /* TIMELINE */
      .ds-timeline {
        position: relative;
        padding-left: 60px;
      }
      
      .ds-timeline::before {
        content: '';
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, #1E88E5, #26A69A);
      }
      
      .ds-timeline-item {
        position: relative;
        margin-bottom: 48px;
      }
      
      .ds-timeline-marker {
        position: absolute;
        left: -48px;
        top: 0;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #1E88E5, #26A69A);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
      }
      
      .ds-timeline-date {
        font-size: 14px;
        font-weight: 700;
        color: #1E88E5;
        margin-bottom: 8px;
      }
      
      .ds-timeline-title {
        font-size: 20px;
        font-weight: 700;
        color: #263238;
        margin: 0 0 12px 0;
      }
      
      .ds-timeline-description {
        font-size: 15px;
        line-height: 1.6;
        color: #546E7A;
        margin: 0;
      }
      
      /* STAT CARDS */
      .ds-stat-card {
        background: linear-gradient(135deg, #1E88E5, #26A69A);
        color: #fff;
        border-radius: 16px;
        padding: 32px;
        text-align: center;
        box-shadow: 0 8px 24px rgba(30, 136, 229, 0.2);
        transition: all 0.3s ease;
      }
      
      .ds-stat-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(30, 136, 229, 0.3);
      }
      
      .ds-stat-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }
      
      .ds-stat-value {
        font-size: 48px;
        font-weight: 800;
        line-height: 1;
        margin-bottom: 8px;
      }
      
      .ds-stat-label {
        font-size: 16px;
        opacity: 0.9;
      }
      
      .ds-stat-trend {
        margin-top: 12px;
        font-size: 14px;
        font-weight: 700;
      }
      
      /* CTA BANNER */
      .ds-cta-banner {
        border-radius: 20px;
        padding: 64px 48px;
        text-align: center;
        margin: 64px 0;
      }
      
      .ds-cta-bg-gradient {
        background: linear-gradient(135deg, #1E88E5, #26A69A, #7E57C2);
      }
      
      .ds-cta-bg-solid {
        background: #1E88E5;
      }
      
      .ds-cta-title {
        font-size: 42px;
        font-weight: 800;
        color: #fff;
        margin: 0 0 16px 0;
      }
      
      .ds-cta-description {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.95);
        margin: 0 0 32px 0;
      }
      
      .ds-cta-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .ds-btn {
        padding: 16px 32px;
        border-radius: 12px;
        font-size: 17px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-block;
      }
      
      .ds-btn-primary {
        background: #fff;
        color: #1E88E5;
      }
      
      .ds-btn-primary:hover {
        background: #F5F7FA;
        transform: translateY(-2px);
      }
      
      .ds-btn-secondary {
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        border: 2px solid #fff;
      }
      
      .ds-btn-secondary:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
      }
      
      /* STEP INDICATOR */
      .ds-steps-container {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 32px 0;
      }
      
      .ds-step {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        opacity: 0.5;
        transition: all 0.3s ease;
      }
      
      .ds-step-current,
      .ds-step-completed {
        opacity: 1;
      }
      
      .ds-step-number {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #E0E7ED;
        color: #607D8B;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 12px;
        transition: all 0.3s ease;
      }
      
      .ds-step-current .ds-step-number {
        background: linear-gradient(135deg, #1E88E5, #26A69A);
        color: #fff;
        box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
      }
      
      .ds-step-completed .ds-step-number {
        background: #26A69A;
        color: #fff;
      }
      
      .ds-step-title {
        font-size: 16px;
        font-weight: 700;
        color: #263238;
        margin-bottom: 4px;
      }
      
      .ds-step-description {
        font-size: 14px;
        color: #607D8B;
      }
      
      .ds-step-connector {
        flex: 0 0 40px;
        height: 2px;
        background: #E0E7ED;
        align-self: center;
        margin-top: -36px;
      }
      
      .ds-step-connector-completed {
        background: #26A69A;
      }
      
      /* CARDS GRID */
      .ds-cards-grid {
        display: grid;
        gap: 32px;
        margin: 48px 0;
      }
      
      .ds-grid-2 {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
      
      .ds-grid-3 {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }
      
      .ds-grid-4 {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }
      
      /* RESPONSIVE */
      @media (max-width: 768px) {
        .ds-feature-card {
          padding: 24px;
        }
        
        .ds-cta-banner {
          padding: 48px 24px;
        }
        
        .ds-cta-title {
          font-size: 32px;
        }
        
        .ds-tabs-nav {
          flex-direction: column;
        }
        
        .ds-steps-container {
          flex-direction: column;
        }
        
        .ds-step-connector {
          display: none;
        }
        
        .ds-timeline {
          padding-left: 40px;
        }
        
        .ds-accordion-body {
          padding-left: 24px;
        }
      }
    `;
    
    document.head.appendChild(style);
  },
  
  /**
   * ==========================================
   * AUTO-INITIALIZE
   * ==========================================
   */
  init() {
    this.injectStyles();
    console.log('✅ DigiSchool Premium UX Components V2.2.x-H loaded');
  }
};

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => DigiSchoolPremiumUX.init());
} else {
  DigiSchoolPremiumUX.init();
}

// Export for global access
window.DigiSchoolPremiumUX = DigiSchoolPremiumUX;
