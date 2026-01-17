/**
 * DigiSchool Africa - User Dashboard
 * Displays user progress, purchased courses, and certificates
 */

(function() {
  'use strict';

  // Check if user is logged in (has entitlements)
  function checkAuth() {
    const entitlements = window.DigiSchoolB2C.entitlements.entitlements;
    const hasCourses = Object.keys(entitlements.coursePack).length > 0 || 
                       Object.keys(entitlements.modules).length > 0;
    
    if (!hasCourses) {
      // No purchases, show empty state
      document.getElementById('emptyCoursesState').style.display = 'block';
      document.getElementById('emptyCertificatesState').style.display = 'block';
    }
    
    return hasCourses;
  }

  // Load user info (from localStorage or default)
  function loadUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('digischool_user_info') || '{}');
    document.getElementById('userName').textContent = userInfo.name || 'Apprenant';
    document.getElementById('userEmail').textContent = userInfo.email || 'email@example.com';
  }

  // Calculate stats
  function calculateStats() {
    const entitlements = window.DigiSchoolB2C.entitlements.entitlements;
    
    // Total courses
    const totalCourses = Object.keys(entitlements.coursePack).filter(slug => entitlements.coursePack[slug]).length +
                         Object.keys(entitlements.modules).filter(slug => entitlements.modules[slug] && entitlements.modules[slug].length > 0).length;
    
    // Total completed modules
    let completedModules = 0;
    let totalModules = 0;
    
    Object.keys(entitlements.coursePack).forEach(slug => {
      if (entitlements.coursePack[slug]) {
        const progress = window.DigiSchoolB2C.progression.getCourseProgress(slug);
        completedModules += progress.passedModules.length;
        totalModules += 8; // All 8 modules
      }
    });
    
    Object.keys(entitlements.modules).forEach(slug => {
      if (entitlements.modules[slug] && entitlements.modules[slug].length > 0) {
        const progress = window.DigiSchoolB2C.progression.getCourseProgress(slug);
        const ownedModules = entitlements.modules[slug];
        completedModules += progress.passedModules.filter(m => ownedModules.includes(m)).length;
        totalModules += ownedModules.length;
      }
    });
    
    // Average progress
    const avgProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
    
    // Certificates (one per completed course)
    let certificates = 0;
    Object.keys(entitlements.coursePack).forEach(slug => {
      if (entitlements.coursePack[slug]) {
        const progress = window.DigiSchoolB2C.progression.getCourseProgress(slug);
        if (progress.passedModules.length === 8) {
          certificates++;
        }
      }
    });
    
    // Update UI
    document.getElementById('statCourses').textContent = totalCourses;
    document.getElementById('statModules').textContent = `${completedModules}/${totalModules}`;
    document.getElementById('statCertificates').textContent = certificates;
    document.getElementById('statProgress').textContent = avgProgress + '%';
    
    return { totalCourses, completedModules, totalModules, avgProgress, certificates };
  }

  // Render purchased courses
  function renderCourses() {
    const entitlements = window.DigiSchoolB2C.entitlements.entitlements;
    const coursesGrid = document.getElementById('coursesGrid');
    const emptyState = document.getElementById('emptyCoursesState');
    
    const purchasedCourses = [];
    
    // Full pack purchases
    Object.keys(entitlements.coursePack).forEach(slug => {
      if (entitlements.coursePack[slug]) {
        const course = window.DigiSchoolCourses.find(c => c.id === slug);
        if (course) {
          purchasedCourses.push({
            course,
            type: 'pack',
            modules: [1, 2, 3, 4, 5, 6, 7, 8]
          });
        }
      }
    });
    
    // Individual module purchases
    Object.keys(entitlements.modules).forEach(slug => {
      if (entitlements.modules[slug] && entitlements.modules[slug].length > 0 && !entitlements.coursePack[slug]) {
        const course = window.DigiSchoolCourses.find(c => c.id === slug);
        if (course) {
          purchasedCourses.push({
            course,
            type: 'modules',
            modules: entitlements.modules[slug]
          });
        }
      }
    });
    
    if (purchasedCourses.length === 0) {
      coursesGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }
    
    emptyState.style.display = 'none';
    
    coursesGrid.innerHTML = purchasedCourses.map(item => {
      const course = item.course;
      const progress = window.DigiSchoolB2C.progression.getCourseProgress(course.id);
      const completedModules = progress.passedModules.filter(m => item.modules.includes(m)).length;
      const totalModules = item.modules.length;
      const progressPercent = Math.round((completedModules / totalModules) * 100);
      
      const modulesHTML = item.modules.map(modNum => {
        const isPassed = progress.passedModules.includes(modNum);
        const isUnlocked = window.DigiSchoolB2C.progression.isModuleUnlocked(course.id, modNum);
        
        let statusClass = 'locked';
        let statusText = '🔒 Verrouillé';
        
        if (isPassed) {
          statusClass = 'completed';
          statusText = '✓ Complété';
        } else if (isUnlocked) {
          statusClass = 'in-progress';
          statusText = '▶ Disponible';
        }
        
        return `
          <div class="module-item">
            <span>Module ${modNum}</span>
            <span class="module-status ${statusClass}">${statusText}</span>
          </div>
        `;
      }).join('');
      
      const canGetCertificate = completedModules === totalModules && totalModules === 8;
      
      return `
        <div class="course-card">
          <div class="course-header">
            <h3 class="course-title">${course.title}</h3>
            <div class="course-meta">
              <span>📚 ${item.type === 'pack' ? 'Pack complet' : `${totalModules} module${totalModules > 1 ? 's' : ''}`}</span>
              <span>⏱️ ${course.duration_days} jours</span>
            </div>
          </div>
          
          <div class="progress-section">
            <div class="progress-label">
              <span>Progression</span>
              <span><strong>${completedModules}/${totalModules}</strong> modules complétés</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
          </div>
          
          <div class="modules-list">
            ${modulesHTML}
          </div>
          
          <div class="course-actions">
            <a href="./b2c-learn.html?course=${course.id}" class="btn btn-primary btn-small">
              📖 Continuer
            </a>
            ${canGetCertificate ? `
              <button class="btn btn-small" onclick="downloadCertificate('${course.id}')">
                🏆 Certificat
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // Render certificates
  function renderCertificates() {
    const entitlements = window.DigiSchoolB2C.entitlements.entitlements;
    const certificatesGrid = document.getElementById('certificatesGrid');
    const emptyState = document.getElementById('emptyCertificatesState');
    
    const certificates = [];
    
    // Check for completed courses (all 8 modules)
    Object.keys(entitlements.coursePack).forEach(slug => {
      if (entitlements.coursePack[slug]) {
        const progress = window.DigiSchoolB2C.progression.getCourseProgress(slug);
        if (progress.passedModules.length === 8) {
          const course = window.DigiSchoolCourses.find(c => c.id === slug);
          if (course) {
            certificates.push({
              type: 'course',
              course: course,
              date: progress.completedAt || new Date().toISOString()
            });
          }
        }
      }
    });
    
    // Add module badges for completed modules
    const allProgress = window.DigiSchoolB2C.progression.progress;
    Object.keys(allProgress).forEach(slug => {
      const progress = allProgress[slug];
      const course = window.DigiSchoolCourses.find(c => c.id === slug);
      if (course) {
        progress.passedModules.forEach(modNum => {
          certificates.push({
            type: 'module',
            course: course,
            moduleNumber: modNum,
            date: progress.lastAttemptAt[modNum] || new Date().toISOString()
          });
        });
      }
    });
    
    if (certificates.length === 0) {
      certificatesGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }
    
    emptyState.style.display = 'none';
    
    certificatesGrid.innerHTML = certificates.map(cert => {
      const date = new Date(cert.date).toLocaleDateString('fr-FR');
      
      if (cert.type === 'course') {
        return `
          <div class="certificate-card">
            <div class="certificate-icon">🏆</div>
            <h3 class="certificate-title">${cert.course.title}</h3>
            <p class="certificate-date">Obtenu le ${date}</p>
            <button class="btn btn-download" onclick="downloadCertificate('${cert.course.id}')">
              📥 Télécharger le certificat
            </button>
          </div>
        `;
      } else {
        return `
          <div class="certificate-card">
            <div class="certificate-icon">🎖️</div>
            <h3 class="certificate-title">Module ${cert.moduleNumber}</h3>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">${cert.course.title}</p>
            <p class="certificate-date">Validé le ${date}</p>
            <button class="btn btn-download" onclick="downloadBadge('${cert.course.id}', ${cert.moduleNumber})">
              📥 Télécharger le badge
            </button>
          </div>
        `;
      }
    }).join('');
  }

  // Download certificate (placeholder - will be implemented in certificates-engine.js)
  window.downloadCertificate = function(courseId) {
    alert('Génération du certificat en cours... Cette fonctionnalité sera activée avec le moteur de certification.');
    // Will be implemented in certificates-engine.js
  };

  // Download badge (placeholder)
  window.downloadBadge = function(courseId, moduleNumber) {
    alert(`Génération du badge Module ${moduleNumber} en cours... Cette fonctionnalité sera activée avec le moteur de certification.`);
    // Will be implemented in certificates-engine.js
  };

  // Logout
  window.logout = function() {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
      // Don't clear entitlements, just redirect
      window.location.href = './b2c.html';
    }
  };

  // Initialize dashboard
  function init() {
    loadUserInfo();
    checkAuth();
    calculateStats();
    renderCourses();
    renderCertificates();
    
    // Track dashboard view
    if (window.DigiSchoolB2C && window.DigiSchoolB2C.trackEvent) {
      window.DigiSchoolB2C.trackEvent('dashboard_view', {
        page: 'user-dashboard',
        timestamp: Date.now()
      });
    }
  }

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
