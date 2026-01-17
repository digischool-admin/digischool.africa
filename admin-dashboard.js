/**
 * DigiSchool Africa - Admin Dashboard Logic
 * Version: 1.0.0
 * Date: 2026-01-17
 * Mode: GENSPARK.AI ONE-SHOT LOCKED SHIP
 */

// Check admin authentication
function checkAdminAuth() {
  const isAdmin = sessionStorage.getItem('digischool_admin_auth');
  if (!isAdmin) {
    const password = prompt('Mot de passe administrateur:');
    // Simple password check - in production, use proper auth
    if (password === 'DigiSchool2026!') {
      sessionStorage.setItem('digischool_admin_auth', 'true');
    } else {
      alert('Accès refusé');
      window.location.href = '/';
      return false;
    }
  }
  return true;
}

// Logout
function logout() {
  sessionStorage.removeItem('digischool_admin_auth');
  window.location.href = '/';
}

// Switch tabs
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });

  // Remove active class from all tab buttons
  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  const selectedTab = document.getElementById(`tab-${tabName}`);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }

  // Add active class to button
  event.target.classList.add('active');

  // Load tab data
  loadTabData(tabName);
}

// Load tab data
function loadTabData(tabName) {
  switch (tabName) {
    case 'overview':
      loadOverviewData();
      break;
    case 'learners':
      loadLearnersData();
      break;
    case 'sales':
      loadSalesData();
      break;
    case 'courses':
      loadCoursesData();
      break;
    case 'analytics':
      loadAnalyticsData();
      break;
  }
}

// Load overview data
function loadOverviewData() {
  // Get stats
  const salesStats = window.B2CAnalytics.getSalesStats();
  const progressionStats = window.B2CAnalytics.getProgressionStats();
  const dropOffAnalysis = window.B2CAnalytics.getDropOffAnalysis();

  // Update stats grid
  const statsGrid = document.getElementById('stats-grid');
  statsGrid.innerHTML = `
    <div class="stat-card">
      <div class="stat-label">💰 Revenus totaux</div>
      <div class="stat-value">${formatMoney(salesStats.totalRevenue)}</div>
      <div class="stat-change positive">+${salesStats.totalSales} ventes</div>
    </div>

    <div class="stat-card">
      <div class="stat-label">👥 Apprenants actifs</div>
      <div class="stat-value">${getUniqueLearnersCount()}</div>
      <div class="stat-change positive">+${salesStats.totalSales} inscrits</div>
    </div>

    <div class="stat-card">
      <div class="stat-label">✅ Taux de complétion</div>
      <div class="stat-value">${progressionStats.completionRate}%</div>
      <div class="stat-change ${parseFloat(progressionStats.completionRate) >= 30 ? 'positive' : 'negative'}">
        ${progressionStats.totalModulesCompleted}/${progressionStats.totalModulesStarted} modules
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-label">📝 Taux de réussite quiz</div>
      <div class="stat-value">${progressionStats.quizPassRate}%</div>
      <div class="stat-change ${parseFloat(progressionStats.quizPassRate) >= 70 ? 'positive' : 'negative'}">
        Moyenne: ${progressionStats.averageScore}%
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-label">📦 Ventes packs</div>
      <div class="stat-value">${salesStats.packSales}</div>
      <div class="stat-change">${formatMoney(salesStats.packSales * 245000)} estimé</div>
    </div>

    <div class="stat-card">
      <div class="stat-label">📄 Ventes modules</div>
      <div class="stat-value">${salesStats.moduleSales}</div>
      <div class="stat-change">${formatMoney(salesStats.moduleSales * 32000)} estimé</div>
    </div>

    <div class="stat-card">
      <div class="stat-label">🎓 Certificats émis</div>
      <div class="stat-value">${window.CertificateEngine.getCertificates().length}</div>
      <div class="stat-change">${window.CertificateEngine.getBadges().length} badges</div>
    </div>

    <div class="stat-card">
      <div class="stat-label">⚠️ Abandons</div>
      <div class="stat-value">${dropOffAnalysis.totalDropOffs}</div>
      <div class="stat-change negative">Temps moyen: ${Math.round(dropOffAnalysis.averageTimeBeforeDropOff / 60)}min</div>
    </div>
  `;

  // Load recent activity
  loadRecentActivity();
}

// Load recent activity
function loadRecentActivity() {
  const analytics = window.B2CAnalytics.getAnalytics();
  const recentEvents = analytics.events.slice(-10).reverse();

  const container = document.getElementById('recent-activity');
  
  if (recentEvents.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <p>Aucune activité récente</p>
      </div>
    `;
    return;
  }

  const eventsHTML = recentEvents.map(event => {
    const icon = getEventIcon(event.type);
    const time = new Date(event.timestamp).toLocaleString('fr-FR');
    return `
      <div style="padding: 12px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 20px; margin-right: 8px;">${icon}</span>
          <strong>${getEventLabel(event.type)}</strong>
          ${event.course ? `— ${event.course}` : ''}
          ${event.module !== undefined ? ` (Module ${event.module + 1})` : ''}
        </div>
        <div style="color: var(--text-secondary); font-size: 12px;">${time}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = eventsHTML;
}

// Load learners data
function loadLearnersData() {
  // Get unique learners from entitlements
  const entitlements = getAllEntitlements();
  
  const container = document.getElementById('learners-table');
  
  if (entitlements.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">👥</div>
        <p>Aucun apprenant inscrit</p>
      </div>
    `;
    return;
  }

  const tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Cours achetés</th>
          <th>Progression</th>
          <th>Certificats</th>
          <th>Date inscription</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${entitlements.map(ent => {
          const progress = window.LearningSystem ? 
            Object.keys(ent.coursePack || {}).map(slug => {
              const p = window.LearningSystem.getProgress(slug);
              return p ? p.passedModules.length : 0;
            }).reduce((sum, val) => sum + val, 0) : 0;
          
          const certificates = window.CertificateEngine.getUserCertificates(ent.userEmail || '').length;
          
          return `
            <tr>
              <td>${ent.userName || 'Anonyme'}</td>
              <td>${ent.userEmail || 'Non renseigné'}</td>
              <td>${Object.keys(ent.coursePack || {}).length}</td>
              <td>
                <div style="background: var(--bg); border-radius: 8px; height: 8px; overflow: hidden;">
                  <div style="background: var(--green); height: 100%; width: ${Math.min(100, progress * 10)}%;"></div>
                </div>
              </td>
              <td><span class="badge badge-success">${certificates}</span></td>
              <td>${new Date(ent.createdAt).toLocaleDateString('fr-FR')}</td>
              <td class="actions">
                <button class="icon-btn" onclick="viewLearnerDetails('${ent.userEmail}')" title="Voir détails">👁️</button>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
}

// Load sales data
function loadSalesData() {
  const salesStats = window.B2CAnalytics.getSalesStats();
  const analytics = window.B2CAnalytics.getAnalytics();
  const purchases = analytics.events.filter(e => e.type === 'b2c_purchase');

  const container = document.getElementById('sales-table');
  
  if (purchases.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">💰</div>
        <p>Aucune vente enregistrée</p>
      </div>
    `;
    return;
  }

  const tableHTML = `
    <div style="margin-bottom: 20px;">
      <h3>📊 Résumé des ventes</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 16px;">
        <div style="background: var(--bg); padding: 16px; border-radius: 8px;">
          <div style="color: var(--text-secondary); font-size: 14px;">Total ventes</div>
          <div style="font-size: 24px; font-weight: bold; color: var(--green);">${salesStats.totalSales}</div>
        </div>
        <div style="background: var(--bg); padding: 16px; border-radius: 8px;">
          <div style="color: var(--text-secondary); font-size: 14px;">Revenu total</div>
          <div style="font-size: 24px; font-weight: bold; color: var(--green);">${formatMoney(salesStats.totalRevenue)}</div>
        </div>
        <div style="background: var(--bg); padding: 16px; border-radius: 8px;">
          <div style="color: var(--text-secondary); font-size: 14px;">Packs</div>
          <div style="font-size: 24px; font-weight: bold;">${salesStats.packSales}</div>
        </div>
        <div style="background: var(--bg); padding: 16px; border-radius: 8px;">
          <div style="color: var(--text-secondary); font-size: 14px;">Modules</div>
          <div style="font-size: 24px; font-weight: bold;">${salesStats.moduleSales}</div>
        </div>
      </div>
    </div>

    <h3>📋 Ventes par formation</h3>
    <table style="margin-top: 16px;">
      <thead>
        <tr>
          <th>Formation</th>
          <th>Total ventes</th>
          <th>Packs</th>
          <th>Modules</th>
          <th>Revenu</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(salesStats.byCourse).map(([slug, data]) => `
          <tr>
            <td>${data.courseName}</td>
            <td><span class="badge badge-success">${data.totalSales}</span></td>
            <td>${data.packSales}</td>
            <td>${data.moduleSales}</td>
            <td><strong>${formatMoney(data.revenue)}</strong></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
}

// Load courses data
function loadCoursesData() {
  const salesStats = window.B2CAnalytics.getSalesStats();
  const progressionStats = window.B2CAnalytics.getProgressionStats();

  const container = document.getElementById('courses-table');
  
  const courses = window.DigiSchoolCourses || [];
  
  const tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Formation</th>
          <th>Ventes</th>
          <th>Revenu</th>
          <th>Modules démarrés</th>
          <th>Taux complétion</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${courses.map(course => {
          const stats = salesStats.byCourse[course.id] || { totalSales: 0, revenue: 0 };
          return `
            <tr>
              <td><strong>${course.title}</strong></td>
              <td><span class="badge badge-success">${stats.totalSales}</span></td>
              <td>${formatMoney(stats.revenue)}</td>
              <td>-</td>
              <td>-</td>
              <td class="actions">
                <button class="icon-btn" onclick="viewCourseDetails('${course.id}')" title="Voir détails">👁️</button>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
}

// Load analytics data
function loadAnalyticsData() {
  const container = document.getElementById('analytics-details');
  const analytics = window.B2CAnalytics.getAnalytics();
  const dropOffAnalysis = window.B2CAnalytics.getDropOffAnalysis();

  container.innerHTML = `
    <div style="display: grid; gap: 20px;">
      <div style="background: var(--bg); padding: 20px; border-radius: 8px;">
        <h3>📊 Événements totaux</h3>
        <div style="font-size: 32px; font-weight: bold; color: var(--green); margin-top: 8px;">
          ${analytics.events.length}
        </div>
      </div>

      <div style="background: var(--bg); padding: 20px; border-radius: 8px;">
        <h3>⚠️ Analyse des abandons</h3>
        <div style="margin-top: 16px;">
          <p style="color: var(--text-secondary);">Total abandons: <strong>${dropOffAnalysis.totalDropOffs}</strong></p>
          <p style="color: var(--text-secondary);">Temps moyen avant abandon: <strong>${Math.round(dropOffAnalysis.averageTimeBeforeDropOff / 60)} minutes</strong></p>
        </div>
      </div>

      <div style="background: var(--bg); padding: 20px; border-radius: 8px;">
        <h3>📈 Événements récents</h3>
        <table style="margin-top: 16px;">
          <thead>
            <tr>
              <th>Type</th>
              <th>Horodatage</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            ${analytics.events.slice(-20).reverse().map(evt => `
              <tr>
                <td><span class="badge badge-success">${evt.type}</span></td>
                <td>${new Date(evt.timestamp).toLocaleString('fr-FR')}</td>
                <td style="font-size: 12px; color: var(--text-secondary);">
                  ${evt.course || ''} ${evt.module !== undefined ? 'M' + (evt.module + 1) : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Helper: Get all entitlements
function getAllEntitlements() {
  // In a real system, this would query a database
  // For now, we'll simulate with sample data
  const sampleEntitlements = [];
  
  // Try to get from localStorage (if any test data exists)
  try {
    const stored = localStorage.getItem('digischool_entitlement');
    if (stored) {
      sampleEntitlements.push(JSON.parse(stored));
    }
  } catch (e) {
    // Ignore
  }

  return sampleEntitlements;
}

// Helper: Get unique learners count
function getUniqueLearnersCount() {
  return getAllEntitlements().length;
}

// Helper: Format money
function formatMoney(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 0
  }).format(amount) + ' FCFA';
}

// Helper: Get event icon
function getEventIcon(eventType) {
  const icons = {
    'b2c_purchase': '💰',
    'b2c_module_start': '▶️',
    'b2c_module_complete': '✅',
    'b2c_quiz_pass': '🎯',
    'b2c_quiz_fail': '❌',
    'b2c_certificate_issued': '🎓',
    'b2c_drop_off': '⚠️',
    'b2c_tts_play': '🔊',
    'page_view': '👁️'
  };
  return icons[eventType] || '📌';
}

// Helper: Get event label
function getEventLabel(eventType) {
  const labels = {
    'b2c_purchase': 'Achat',
    'b2c_module_start': 'Module démarré',
    'b2c_module_complete': 'Module complété',
    'b2c_quiz_pass': 'Quiz réussi',
    'b2c_quiz_fail': 'Quiz échoué',
    'b2c_certificate_issued': 'Certificat émis',
    'b2c_drop_off': 'Abandon',
    'b2c_tts_play': 'TTS activé',
    'page_view': 'Page vue'
  };
  return labels[eventType] || eventType;
}

// Exports
function exportLearners() {
  const entitlements = getAllEntitlements();
  const csv = [
    ['Nom', 'Email', 'Cours achetés', 'Date inscription'].join(','),
    ...entitlements.map(ent => [
      ent.userName || 'Anonyme',
      ent.userEmail || 'Non renseigné',
      Object.keys(ent.coursePack || {}).length,
      new Date(ent.createdAt).toLocaleDateString('fr-FR')
    ].join(','))
  ].join('\n');

  downloadCSV(csv, 'apprenants');
}

function exportSales() {
  window.B2CAnalytics.exportToCSV('sales');
}

function downloadCSV(content, name) {
  const blob = new Blob([content], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `digischool-${name}-${Date.now()}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// View details
function viewLearnerDetails(email) {
  alert('Détails apprenant: ' + email + '\n\nFonctionnalité à implémenter avec modal.');
}

function viewCourseDetails(courseId) {
  alert('Détails formation: ' + courseId + '\n\nFonctionnalité à implémenter avec modal.');
}

// Refresh data
function refreshData() {
  loadTabData('overview');
  alert('Données actualisées');
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  if (checkAdminAuth()) {
    loadOverviewData();
  }
});
