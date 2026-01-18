/**
 * DigiSchool Africa — Admin Mode V2.2
 * Superpouvoirs: Accès illimité, bypass paiement, debug mode
 * Activation: localStorage.setItem('ds_admin_token', 'DS_ADMIN_2026_SECURE')
 * Date: 2026-01-18
 */

(function() {
  'use strict';
  
  const ADMIN_TOKEN = 'DS_ADMIN_2026_SECURE';
  const STORAGE_KEY = 'ds_admin_token';
  
  // ===== VÉRIFICATION ADMIN =====
  function isAdmin() {
    return localStorage.getItem(STORAGE_KEY) === ADMIN_TOKEN;
  }
  
  // ===== ACTIVATION ADMIN =====
  function activateAdmin(token) {
    if (token === ADMIN_TOKEN) {
      localStorage.setItem(STORAGE_KEY, token);
      localStorage.setItem('ds_admin_active', 'true');
      console.log('✅ Mode ADMIN activé — Superpouvoirs débloqués');
      return true;
    }
    console.warn('⚠️ Token admin invalide');
    return false;
  }
  
  // ===== DÉSACTIVATION ADMIN =====
  function deactivateAdmin() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('ds_admin_active');
    console.log('🔒 Mode ADMIN désactivé');
  }
  
  // ===== BYPASS PAIEMENT =====
  function unlockAllCourses() {
    if (!isAdmin()) {
      console.error('❌ Accès refusé: Admin requis');
      return false;
    }
    
    // Débloquer toutes les formations
    const allCourses = [
      'gestion-projet-pmp',
      'leadership-management',
      'data-analytics-ia',
      'excel-avance',
      'powerbi-dataviz',
      'marketing-vente-ia',
      'digital-vibecoding',
      'rh-performance-ia',
      'powerpoint-storytelling'
    ];
    
    allCourses.forEach(courseId => {
      localStorage.setItem(`course_unlocked_${courseId}`, 'true');
      localStorage.setItem(`course_access_${courseId}`, JSON.stringify({
        unlocked: true,
        date: new Date().toISOString(),
        method: 'admin_bypass',
        expiresAt: null // Pas d'expiration
      }));
    });
    
    console.log(`✅ ${allCourses.length} formations débloquées (mode ADMIN)`);
    return true;
  }
  
  // ===== DEBUG MODE =====
  function enableDebugMode() {
    if (!isAdmin()) return false;
    localStorage.setItem('ds_debug_mode', 'true');
    console.log('🐛 Debug mode activé');
    return true;
  }
  
  function disableDebugMode() {
    localStorage.removeItem('ds_debug_mode');
    console.log('🐛 Debug mode désactivé');
  }
  
  function isDebugMode() {
    return localStorage.getItem('ds_debug_mode') === 'true';
  }
  
  // ===== AFFICHAGE BADGE ADMIN =====
  function showAdminBadge() {
    if (!isAdmin()) return;
    
    const badge = document.createElement('div');
    badge.id = 'ds-admin-badge';
    badge.innerHTML = `
      <div style="
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 99999;
        background: linear-gradient(135deg, #FF5722, #F44336);
        color:#0B1B3A;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(244, 67, 54, 0.4);
        cursor: pointer;
        font-family: 'Segoe UI', Arial, sans-serif;
      ">
        🔓 MODE ADMIN ACTIF
      </div>
    `;
    
    badge.addEventListener('click', () => {
      showAdminPanel();
    });
    
    document.body.appendChild(badge);
  }
  
  // ===== PANNEAU ADMIN =====
  function showAdminPanel() {
    const existing = document.getElementById('ds-admin-panel');
    if (existing) {
      existing.remove();
      return;
    }
    
    const panel = document.createElement('div');
    panel.id = 'ds-admin-panel';
    panel.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999999;
        background: #FFFFFF;
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        max-width: 500px;
        width: 90%;
      ">
        <h2 style="font-size: 1.8rem; font-weight: 700; color: #F44336; margin-bottom: 20px;">
          🔐 Panneau Admin
        </h2>
        
        <div style="margin-bottom: 16px;">
          <button id="admin-unlock-all" style="
            width: 100%;
            padding: 14px;
            background: #4CAF50;
            color:#0B1B3A;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 10px;
          ">
            ✅ Débloquer toutes les formations
          </button>
          
          <button id="admin-toggle-debug" style="
            width: 100%;
            padding: 14px;
            background: #FF9800;
            color:#0B1B3A;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 10px;
          ">
            🐛 Toggle Debug Mode
          </button>
          
          <button id="admin-clear-storage" style="
            width: 100%;
            padding: 14px;
            background: #9E9E9E;
            color:#0B1B3A;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 10px;
          ">
            🗑️ Clear localStorage
          </button>
          
          <button id="admin-deactivate" style="
            width: 100%;
            padding: 14px;
            background: #F44336;
            color:#0B1B3A;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 10px;
          ">
            🔒 Désactiver mode Admin
          </button>
          
          <button id="admin-close" style="
            width: 100%;
            padding: 14px;
            background: #607D8B;
            color:#0B1B3A;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
          ">
            ✖ Fermer
          </button>
        </div>
        
        <div id="admin-status" style="
          margin-top: 20px;
          padding: 12px;
          background: #E3F2FD;
          border-radius: 8px;
          font-size: 14px;
          color: #0B1B3A;
        ">
          <strong>Status:</strong> Admin actif | Debug: ${isDebugMode() ? 'ON' : 'OFF'}
        </div>
      </div>
      
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999998;
      " id="admin-overlay"></div>
    `;
    
    document.body.appendChild(panel);
    
    // Event listeners
    document.getElementById('admin-unlock-all').addEventListener('click', () => {
      unlockAllCourses();
      updateStatus('✅ Toutes les formations débloquées');
    });
    
    document.getElementById('admin-toggle-debug').addEventListener('click', () => {
      if (isDebugMode()) {
        disableDebugMode();
        updateStatus('🐛 Debug mode désactivé');
      } else {
        enableDebugMode();
        updateStatus('🐛 Debug mode activé');
      }
    });
    
    document.getElementById('admin-clear-storage').addEventListener('click', () => {
      if (confirm('⚠️ Voulez-vous vraiment effacer le localStorage ?')) {
        const adminToken = localStorage.getItem(STORAGE_KEY);
        localStorage.clear();
        localStorage.setItem(STORAGE_KEY, adminToken); // Garder le token admin
        updateStatus('🗑️ localStorage cleared (token admin conservé)');
      }
    });
    
    document.getElementById('admin-deactivate').addEventListener('click', () => {
      if (confirm('⚠️ Désactiver le mode Admin ?')) {
        deactivateAdmin();
        panel.remove();
        location.reload();
      }
    });
    
    document.getElementById('admin-close').addEventListener('click', () => {
      panel.remove();
    });
    
    document.getElementById('admin-overlay').addEventListener('click', () => {
      panel.remove();
    });
    
    function updateStatus(message) {
      document.getElementById('admin-status').innerHTML = `
        <strong>Status:</strong> ${message} | Debug: ${isDebugMode() ? 'ON' : 'OFF'}
      `;
    }
  }
  
  // ===== LOG DEBUG =====
  function debugLog(...args) {
    if (isDebugMode()) {
      console.log('[DS DEBUG]', ...args);
    }
  }
  
  // ===== INITIALISATION =====
  function init() {
    if (isAdmin()) {
      showAdminBadge();
      unlockAllCourses(); // Auto-unlock
      console.log('%c🔓 MODE ADMIN ACTIF', 'color: #F44336; font-size: 20px; font-weight: bold;');
      console.log('Commandes disponibles:');
      console.log('  - window.DigiSchoolAdmin.unlock() : Débloquer toutes les formations');
      console.log('  - window.DigiSchoolAdmin.debug(true/false) : Toggle debug mode');
      console.log('  - window.DigiSchoolAdmin.panel() : Ouvrir le panneau admin');
      console.log('  - window.DigiSchoolAdmin.deactivate() : Désactiver le mode admin');
    }
  }
  
  // ===== EXPOSITION GLOBALE =====
  window.DigiSchoolAdmin = {
    activate: activateAdmin,
    deactivate: deactivateAdmin,
    isAdmin: isAdmin,
    unlock: unlockAllCourses,
    debug: (enable) => enable ? enableDebugMode() : disableDebugMode(),
    panel: showAdminPanel,
    log: debugLog
  };
  
  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Commande globale pour activation
  window.activateAdminMode = () => {
    const token = prompt('🔐 Entrez le token admin:');
    if (activateAdmin(token)) {
      alert('✅ Mode Admin activé ! Rechargez la page.');
      location.reload();
    } else {
      alert('❌ Token invalide');
    }
  };
  
})();
