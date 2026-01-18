/**
 * DigiSchool Africa — Layout Wrapper Injection
 * V2.2.x FINAL FIX
 * Injecte automatiquement le wrapper Zoom-like sur toutes les pages
 * Date: 2026-01-18
 */

(function() {
  'use strict';
  
  // Guard contre double exécution
  if (window.__DS_LAYOUT_WRAPPER_INJECTED__) return;
  window.__DS_LAYOUT_WRAPPER_INJECTED__ = true;
  
  // Déterminer le contexte (B2C vs B2B)
  function getPageContext() {
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('companies') || 
        path.includes('b2b') || 
        path.includes('brochure') || 
        path.includes('proforma')) {
      return 'b2b';
    }
    
    return 'b2c'; // Par défaut
  }
  
  // Injection du wrapper
  function injectLayoutWrapper() {
    const body = document.body;
    const context = getPageContext();
    
    // Ajouter classe body
    body.classList.add('has-sticky-header', `ds-context-${context}`);
    
    // Créer le wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'ds-page';
    wrapper.id = 'ds-page-wrapper';
    
    // Rail gauche
    const railLeft = document.createElement('div');
    railLeft.className = `ds-rail ds-rail-left ds-rail-${context}`;
    
    // Rail droit
    const railRight = document.createElement('div');
    railRight.className = `ds-rail ds-rail-right ds-rail-${context}`;
    
    // Conteneur main
    const mainContainer = document.createElement('main');
    mainContainer.className = 'ds-main';
    mainContainer.id = 'ds-main-content';
    
    // Déplacer tout le contenu actuel du body dans ds-main
    while (body.firstChild) {
      mainContainer.appendChild(body.firstChild);
    }
    
    // Assembler
    wrapper.appendChild(railLeft);
    wrapper.appendChild(mainContainer);
    wrapper.appendChild(railRight);
    
    // Injecter dans body
    body.appendChild(wrapper);
    
    console.log(`✅ DS Layout Wrapper injecté (context: ${context})`);
  }
  
  // Ajout du CSS si pas déjà présent
  function injectCSS() {
    const linkId = 'ds-zoom-layout-css';
    
    if (document.getElementById(linkId)) return;
    
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = '/assets/digischool-zoom-layout.css';
    document.head.appendChild(link);
    
    console.log('✅ DS Zoom Layout CSS injecté');
  }
  
  // Fix Header sticky
  function fixStickyHeader() {
    const header = document.querySelector('.digischool-global-header');
    if (header) {
      header.style.position = 'fixed';
      header.style.top = '0';
      header.style.left = '0';
      header.style.right = '0';
      header.style.zIndex = '10000';
      
      console.log('✅ Header sticky fixé');
    }
  }
  
  // Initialisation
  function init() {
    // Attendre que DOM soit prêt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        injectCSS();
        injectLayoutWrapper();
        fixStickyHeader();
      });
    } else {
      injectCSS();
      injectLayoutWrapper();
      fixStickyHeader();
    }
  }
  
  init();
  
})();
