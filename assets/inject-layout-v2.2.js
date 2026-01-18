/**
 * DigiSchool Africa — Layout Injector V2.2
 * ONE-SHOT LOCKED: Anti-duplication robuste
 * 
 * Fonctionnalités:
 * - Injection unique header/footer
 * - Détection et suppression des duplications
 * - Garde-fou global
 * - Padding body automatique
 */

(function() {
  'use strict';

  // GARDE-FOU: empêcher double exécution
  if (window.__DS_LAYOUT_INJECTED__) {
    console.log('[DigiSchool] Layout déjà injecté, skip.');
    return;
  }

  const HEADER_PATH = '/assets/global-header-v2.2.html';
  const FOOTER_PATH = '/assets/global-footer-v2.2.html';

  /**
   * Nettoie les anciens headers/footers pour éviter duplication
   */
  function cleanupOldLayouts() {
    // Supprimer tous les anciens headers
    const oldHeaders = document.querySelectorAll(
      'header[id*="header"], ' +
      'header[class*="header-premium"], ' +
      'header[data-global], ' +
      '.global-header, ' +
      '#main-header, ' +
      '#digischool-header-premium'
    );

    oldHeaders.forEach((header, index) => {
      // Garder uniquement le ds-global-header si il existe déjà
      if (header.id !== 'ds-global-header') {
        console.log(`[DigiSchool] Suppression ancien header #${index + 1}`);
        header.remove();
      }
    });

    // Supprimer tous les anciens footers (sauf ds-global-footer)
    const oldFooters = document.querySelectorAll(
      'footer[id*="footer"], ' +
      'footer[class*="footer-premium"], ' +
      'footer[data-global], ' +
      '.global-footer'
    );

    oldFooters.forEach((footer, index) => {
      if (footer.id !== 'ds-global-footer') {
        console.log(`[DigiSchool] Suppression ancien footer #${index + 1}`);
        footer.remove();
      }
    });
  }

  /**
   * Charge et inject le header
   */
  async function injectHeader() {
    // Vérifier si déjà présent
    if (document.getElementById('ds-global-header')) {
      console.log('[DigiSchool] Header V2.2 déjà présent');
      return;
    }

    try {
      const response = await fetch(HEADER_PATH);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const html = await response.text();
      
      // Injecter après <body>
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      const headerElement = tempDiv.querySelector('#ds-global-header');
      if (headerElement) {
        document.body.insertBefore(headerElement, document.body.firstChild);
        console.log('[DigiSchool] ✅ Header V2.2 injecté');
        
        // Ajouter padding-top au body
        document.body.classList.add('ds-layout-injected');
      }
    } catch (error) {
      console.error('[DigiSchool] ❌ Erreur injection header:', error);
    }
  }

  /**
   * Charge et inject le footer
   */
  async function injectFooter() {
    // Vérifier si déjà présent
    if (document.getElementById('ds-global-footer')) {
      console.log('[DigiSchool] Footer V2.2 déjà présent');
      return;
    }

    try {
      const response = await fetch(FOOTER_PATH);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const html = await response.text();
      
      // Injecter avant </body>
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      const footerElement = tempDiv.querySelector('#ds-global-footer');
      if (footerElement) {
        document.body.appendChild(footerElement);
        console.log('[DigiSchool] ✅ Footer V2.2 injecté');
      }
    } catch (error) {
      console.error('[DigiSchool] ❌ Erreur injection footer:', error);
    }
  }

  /**
   * Initialisation
   */
  async function init() {
    console.log('[DigiSchool] 🚀 Layout Injector V2.2 — Démarrage...');

    // 1. Nettoyer les anciennes versions
    cleanupOldLayouts();

    // 2. Injecter header et footer
    await Promise.all([
      injectHeader(),
      injectFooter()
    ]);

    // 3. Marquer comme injecté
    window.__DS_LAYOUT_INJECTED__ = true;

    console.log('[DigiSchool] ✅ Layout V2.2 injecté avec succès');
  }

  // Lancer après chargement DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposer fonction de cleanup si besoin
  window.DigiSchoolLayout = {
    version: '2.2',
    cleanup: cleanupOldLayouts,
    reinject: init
  };
})();
