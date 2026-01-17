/**
 * DigiSchool Africa - Lead Events Tracker
 * Track simple user interactions locally (localStorage)
 * No external analytics, no personal data
 * Version: 1.0.0
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'ds_events';
  const MAX_EVENTS = 1000; // Limite pour éviter localStorage overflow

  /**
   * Get all stored events
   */
  function getEvents() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Save events to localStorage
   */
  function saveEvents(events) {
    try {
      // Garder seulement les MAX_EVENTS plus récents
      const trimmed = events.slice(-MAX_EVENTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch (e) {
      // Si localStorage plein, supprimer les plus anciens
      if (events.length > 100) {
        const reduced = events.slice(-100);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reduced));
      }
    }
  }

  /**
   * Track an event
   */
  function trackEvent(eventName, metadata = {}) {
    const events = getEvents();
    const event = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      ...metadata
    };
    events.push(event);
    saveEvents(events);
  }

  /**
   * Export events as JSON file
   */
  function exportEvents() {
    const events = getEvents();
    const blob = new Blob([JSON.stringify(events, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `digischool-events-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Clear all events
   */
  function clearEvents() {
    if (confirm('Supprimer tous les événements trackés ?')) {
      localStorage.removeItem(STORAGE_KEY);
      alert('Événements supprimés.');
    }
  }

  // Track page view
  trackEvent('page_view', {
    referrer: document.referrer || 'direct',
    userAgent: navigator.userAgent.substring(0, 100) // Tronquer pour privacy
  });

  // Track WhatsApp clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href*="wa.me"]');
    if (target) {
      trackEvent('click_whatsapp', {
        text: target.textContent.trim().substring(0, 50)
      });
    }
  });

  // Track B2B catalogue clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href*="companies.html"]');
    if (target) {
      trackEvent('click_b2b_catalogue', {
        text: target.textContent.trim().substring(0, 50)
      });
    }
  });

  // Track brochure clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href*="brochure-b2b.html"]');
    if (target) {
      trackEvent('click_brochure', {
        text: target.textContent.trim().substring(0, 50)
      });
    }
  });

  // Track proforma clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href*="proforma.html"]');
    if (target) {
      trackEvent('click_proforma', {
        text: target.textContent.trim().substring(0, 50)
      });
    }
  });

  // Track form submissions (contact)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      trackEvent('form_submit_contact');
    });
  }

  // Track form submissions (B2B)
  const b2bForm = document.querySelector('form[action*="formspree"]');
  if (b2bForm && window.location.pathname.includes('companies')) {
    b2bForm.addEventListener('submit', function() {
      trackEvent('form_submit_b2b');
    });
  }

  // Track proforma generation
  const generateBtn = document.getElementById('generateBtn');
  if (generateBtn) {
    generateBtn.addEventListener('click', function() {
      trackEvent('proforma_generate');
    });
  }

  // Track proforma submission
  const proformaForm = document.getElementById('briefForm');
  if (proformaForm && window.location.pathname.includes('proforma')) {
    proformaForm.addEventListener('submit', function() {
      trackEvent('proforma_submit');
    });
  }

  // Track parcours page views
  if (window.location.pathname.includes('/parcours.html')) {
    trackEvent('page_view_parcours', {
      source: 'parcours'
    });
  }

  // Track parcours detail page views
  if (window.location.pathname.includes('/parcours/')) {
    const pathParts = window.location.pathname.split('/');
    const parcoursSlug = pathParts[pathParts.length - 1].replace('.html', '');
    trackEvent('page_view_parcours_detail', {
      parcours_slug: parcoursSlug,
      source: 'parcours'
    });
  }

  // Track clicks from catalogue to detail pages
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href*="/parcours/"]');
    if (target && window.location.pathname.includes('/parcours.html')) {
      const href = target.getAttribute('href');
      const parcoursSlug = href.split('/').pop().replace('.html', '');
      trackEvent('click_view_parcours', {
        parcours_slug: parcoursSlug,
        source: 'parcours'
      });
    }
  });

  // Track proforma clicks from parcours pages
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href*="proforma.html"]');
    if (target && (window.location.pathname.includes('/parcours') || window.location.pathname.includes('/parcours/'))) {
      const from = target.href.split('from=')[1] || 'unknown';
      trackEvent('click_proforma_from_parcours', {
        from: from,
        source: 'parcours'
      });
    }
  });

  // Admin panel (visible only with ?admin=1)
  if (window.location.search.includes('admin=1')) {
    // Create admin panel
    const panel = document.createElement('div');
    panel.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 10000; background: rgba(15,23,42,0.95); border: 1px solid rgba(34,197,94,0.5); border-radius: 12px; padding: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); backdrop-filter: blur(10px);';
    
    const events = getEvents();
    panel.innerHTML = `
      <div style="color: #22c55e; font-weight: 700; font-size: 0.9rem; margin-bottom: 12px;">
        📊 Admin Panel
      </div>
      <div style="color: rgba(255,255,255,0.78); font-size: 0.85rem; margin-bottom: 12px;">
        ${events.length} événement(s) tracké(s)
      </div>
      <button id="ds-export-events" style="appearance: none; width: 100%; padding: 10px 16px; border-radius: 8px; border: 1px solid rgba(34,197,94,0.5); background: rgba(34,197,94,0.15); color: #fff; font-weight: 700; font-size: 0.85rem; cursor: pointer; margin-bottom: 8px; transition: all 0.3s ease;">
        📥 Exporter JSON
      </button>
      <button id="ds-clear-events" style="appearance: none; width: 100%; padding: 10px 16px; border-radius: 8px; border: 1px solid rgba(239,68,68,0.5); background: rgba(239,68,68,0.15); color: #fff; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.3s ease;">
        🗑️ Supprimer
      </button>
    `;
    
    document.body.appendChild(panel);

    // Export button
    document.getElementById('ds-export-events').addEventListener('click', function() {
      exportEvents();
    });

    // Clear button
    document.getElementById('ds-clear-events').addEventListener('click', function() {
      clearEvents();
      // Recharger la page pour mettre à jour le compteur
      window.location.reload();
    });

    // Hover effects
    const buttons = panel.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      });
    });
  }

  // Expose for debugging (only in admin mode)
  if (window.location.search.includes('admin=1')) {
    window.DigiSchoolEvents = {
      getEvents: getEvents,
      trackEvent: trackEvent,
      exportEvents: exportEvents,
      clearEvents: clearEvents
    };
  }
})();
