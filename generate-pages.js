#!/usr/bin/env node

/**
 * DigiSchool Africa - Automated Page Generator
 * Generates companies.html, b2c.html, b2c-checkout.html from courses-data.js
 * Zero user intervention - fully automated
 */

const fs = require('fs');
const path = require('path');

// Load courses data
console.log('📚 Loading courses-data.js...');
const coursesDataPath = path.join(__dirname, 'courses-data.js');
const coursesDataContent = fs.readFileSync(coursesDataPath, 'utf8');

// Create mock window for Node.js environment
global.window = {
  DigiSchoolCourses: null,
  getCourseBySlugorId: null
};

// Execute courses-data.js in a safe eval context
eval(coursesDataContent);

if (!global.window.DigiSchoolCourses || !Array.isArray(global.window.DigiSchoolCourses)) {
  console.error('❌ Failed to load DigiSchoolCourses data');
  process.exit(1);
}

const courses = global.window.DigiSchoolCourses;
console.log(`✅ Loaded ${courses.length} courses`);

// Helper to format XOF price
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Helper to generate course modal HTML for B2B
function generateB2BModal(course) {
  const modulesHTML = course.modules.map((mod, idx) => `
    <div class="modal-module">
      <h4>Module ${idx + 1}: ${mod.name}</h4>
      <ul>
        ${mod.outcomes.map(o => `<li>${o}</li>`).join('\n        ')}
      </ul>
    </div>
  `).join('');

  const dayByDayHTML = course.day_by_day.map(day => `
    <div class="day-item">
      <div class="day-number">Jour ${day.day}</div>
      <div class="day-content">
        <h4>${day.title}</h4>
        <ul>
          ${day.topics.map(t => `<li>${t}</li>`).join('\n          ')}
        </ul>
      </div>
    </div>
  `).join('');

  const whatsappText = encodeURIComponent(`Bonjour DigiSchool Africa 👋\nJe suis intéressé par la formation B2B "${course.title}".\nMerci !`);

  return `
<!-- Modal: ${course.title} -->
<div class="course-modal-overlay" id="modal-${course.slug}" role="dialog" aria-modal="true" aria-labelledby="modal-title-${course.slug}">
  <div class="course-modal">
    <button class="modal-close" aria-label="Fermer">&times;</button>
    
    <div class="modal-header">
      <h2 id="modal-title-${course.slug}">${course.title}</h2>
      <p class="modal-subtitle">${course.subtitle}</p>
      <div class="modal-meta">
        <span>⏱️ ${course.duration_days} jours</span>
        <span>🎯 ${course.target_audience.join(', ')}</span>
      </div>
    </div>

    <div class="modal-body">
      <section class="modal-section">
        <h3>📋 Vue d'ensemble</h3>
        <p>${course.short_description}</p>
      </section>

      <section class="modal-section">
        <h3>🎓 Modules de Formation</h3>
        ${modulesHTML}
      </section>

      <section class="modal-section">
        <h3>🤖 IA Embarquée & Outils</h3>
        <div class="ai-tools">
          <h4>Outils IA utilisés :</h4>
          <ul>
            ${course.ai_section.tools.map(t => `<li>${t}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="ai-use-cases">
          <h4>Cas d'usage IA :</h4>
          <ul>
            ${course.ai_section.use_cases.map(u => `<li>${u}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="ai-prompts">
          <h4>Prompts métiers réutilisables :</h4>
          ${course.ai_section.prompts.map((p, idx) => `
          <div class="prompt-item">
            <strong>Prompt ${idx + 1}:</strong>
            <code>${p}</code>
          </div>
          `).join('')}
        </div>
      </section>

      <section class="modal-section">
        <h3>📅 Programme Jour par Jour</h3>
        <div class="day-by-day">
          ${dayByDayHTML}
        </div>
      </section>

      <section class="modal-section">
        <h3>✅ Prérequis</h3>
        <ul>
          ${course.prerequisites.map(p => `<li>${p}</li>`).join('\n          ')}
        </ul>
      </section>

      <section class="modal-section">
        <h3>🛠️ Outils Pédagogiques</h3>
        <ul>
          ${course.pedagogical_tools.map(t => `<li>${t}</li>`).join('\n          ')}
        </ul>
      </section>

      <section class="modal-section">
        <h3>📦 Livrables</h3>
        <ul>
          ${course.deliverables.map(d => `<li>${d}</li>`).join('\n          ')}
        </ul>
      </section>

      <section class="modal-section formats-section">
        <h3>📍 Formats disponibles</h3>
        <div class="format-badges">
          <span class="format-badge">Intra-entreprise</span>
          <span class="format-badge">Inter-entreprises</span>
          <span class="format-badge">Bootcamp intensif</span>
        </div>
      </section>

      <div class="modal-actions">
        <a href="./proforma.html?course=${course.slug}&type=b2b" class="btn primary">📄 Générer une Proforma</a>
        <a href="https://wa.me/2250505111102?text=${whatsappText}" target="_blank" rel="noopener" class="btn secondary">💬 WhatsApp Direct</a>
      </div>
    </div>
  </div>
</div>
`;
}

// Generate companies.html with FULL content
console.log('🏢 Generating companies.html...');

const companiesHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Formations Entreprises (B2B) — DigiSchool Africa</title>
  <meta name="description" content="Formations sur mesure pour entreprises : leadership, gestion de projet, stratégie, finance, RH. Devis personnalisés et déploiement rapide." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Formations Entreprises (B2B) — DigiSchool Africa" />
  <meta property="og:description" content="Formations professionnelles pour vos équipes : 9 parcours premium avec IA embarquée. Intra, Inter, Bootcamp." />
  <meta property="og:url" content="https://digischool.africa/companies.html" />
  <meta property="og:type" content="website" />
  
  <link rel="canonical" href="https://digischool.africa/companies.html" />

  <style>
    :root{
      --bg:#0f172a;
      --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      --card: rgba(255,255,255,0.04);
      --card2: rgba(255,255,255,0.06);
      --card-hover: rgba(255,255,255,0.08);
      --border: rgba(255,255,255,0.12);
      --border-hover: rgba(255,255,255,0.24);
      --text:#ffffff;
      --muted: rgba(255,255,255,0.78);
      --muted2: rgba(255,255,255,0.62);
      --green:#22c55e;
      --green-glow: rgba(34,197,94,0.25);
      --blue:#3b82f6;
      --blue-glow: rgba(59,130,246,0.25);
      --danger:#ef4444;
    }

    *{ box-sizing:border-box; margin:0; padding:0; }

    body{
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .container{
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }

    /* Hero */
    .hero{
      position: relative;
      text-align: center;
      margin-bottom: 80px;
      padding: 100px 30px 80px;
      border-radius: 24px;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.98) 100%);
      border: 1px solid var(--border);
    }

    .hero::before{
      content: '';
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, var(--blue-glow) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, var(--green-glow) 0%, transparent 50%);
      animation: gradientShift 8s ease-in-out infinite;
      opacity: 0.6;
      z-index: 0;
    }

    @keyframes gradientShift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(30px, -30px) scale(1.1); }
      50% { transform: translate(-30px, 30px) scale(0.9); }
      75% { transform: translate(30px, 30px) scale(1.05); }
    }

    .hero-content{
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-badge{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.9rem;
      border: 1px solid rgba(59,130,246,0.35);
      background: rgba(59,130,246,0.16);
      margin-bottom: 24px;
      backdrop-filter: blur(10px);
    }

    .hero h1{
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 24px;
      background: linear-gradient(135deg, #ffffff 0%, var(--blue) 50%, var(--green) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
    }

    .hero p{
      font-size: 1.3rem;
      color: var(--muted);
      max-width: 750px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* Section */
    .section{
      margin-bottom: 80px;
    }

    .section-header{
      text-align: center;
      margin-bottom: 60px;
    }

    .section-title{
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #ffffff 0%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle{
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 700px;
      margin: 0 auto;
    }

    /* Catalogue Grid */
    .catalogue-grid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 32px;
    }

    .catalogue-card{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      transition: all 0.4s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .catalogue-card::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--blue), var(--green));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .catalogue-card:hover, .catalogue-card:focus{
      border-color: var(--border-hover);
      background: var(--card-hover);
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
      outline: none;
    }

    .catalogue-card:hover::before, .catalogue-card:focus::before{
      opacity: 1;
    }

    .catalogue-card h3{
      font-size: 1.6rem;
      margin-bottom: 12px;
      color: var(--blue);
    }

    .catalogue-card .description{
      font-size: 0.95rem;
      color: var(--muted);
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .catalogue-meta{
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 20px;
      font-size: 0.9rem;
      color: var(--muted2);
    }

    .catalogue-meta span{
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .catalogue-card .cta-hint{
      font-size: 0.85rem;
      color: var(--green);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Course Modal */
    .course-modal-overlay{
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      overflow-y: auto;
    }

    .course-modal-overlay.active{
      display: flex;
    }

    .course-modal{
      position: relative;
      max-width: 1000px;
      width: 100%;
      background: linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,1) 100%);
      border: 1px solid var(--border);
      border-radius: 24px;
      box-shadow: 0 24px 64px rgba(0,0,0,0.6);
      max-height: 90vh;
      overflow-y: auto;
      animation: modalSlideIn 0.4s ease-out;
    }

    @keyframes modalSlideIn {
      from {
        opacity: 0;
        transform: translateY(-40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .modal-close{
      position: absolute;
      top: 20px;
      right: 20px;
      background: var(--card2);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    .modal-close:hover{
      background: var(--danger);
      border-color: var(--danger);
      transform: rotate(90deg);
    }

    .modal-header{
      padding: 48px 48px 32px;
      border-bottom: 1px solid var(--border);
    }

    .modal-header h2{
      font-size: 2.5rem;
      margin-bottom: 12px;
      color: var(--blue);
    }

    .modal-subtitle{
      font-size: 1.2rem;
      color: var(--muted);
      margin-bottom: 20px;
    }

    .modal-meta{
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      font-size: 1rem;
      color: var(--muted2);
    }

    .modal-meta span{
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .modal-body{
      padding: 40px 48px;
    }

    .modal-section{
      margin-bottom: 40px;
    }

    .modal-section h3{
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--green);
    }

    .modal-section h4{
      font-size: 1.2rem;
      margin-bottom: 12px;
      color: var(--text);
    }

    .modal-section p, .modal-section li{
      color: var(--muted);
      line-height: 1.7;
    }

    .modal-section ul{
      list-style: none;
      padding-left: 0;
    }

    .modal-section ul li{
      padding-left: 24px;
      position: relative;
      margin-bottom: 8px;
    }

    .modal-section ul li::before{
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--green);
      font-weight: 700;
    }

    .modal-module{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
    }

    .modal-module h4{
      color: var(--blue);
      margin-bottom: 12px;
    }

    .ai-tools, .ai-use-cases, .ai-prompts{
      margin-bottom: 20px;
    }

    .prompt-item{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
    }

    .prompt-item code{
      display: block;
      margin-top: 8px;
      padding: 12px;
      background: rgba(0,0,0,0.3);
      border-radius: 6px;
      color: var(--green);
      font-size: 0.9rem;
      line-height: 1.6;
      overflow-x: auto;
    }

    .day-by-day{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .day-item{
      display: flex;
      gap: 20px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
    }

    .day-number{
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--blue);
      color: var(--bg);
      font-weight: 800;
      font-size: 1rem;
      border-radius: 12px;
    }

    .day-content h4{
      color: var(--blue);
      margin-bottom: 12px;
    }

    .formats-section .format-badges{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .format-badge{
      padding: 8px 16px;
      background: rgba(59,130,246,0.16);
      border: 1px solid rgba(59,130,246,0.35);
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--blue);
    }

    .modal-actions{
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 40px;
      padding-top: 32px;
      border-top: 1px solid var(--border);
    }

    .btn{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }

    .btn.primary{
      background: var(--blue);
      color: #fff;
      border-color: var(--blue);
    }

    .btn.primary:hover{
      background: #2563eb;
      transform: translateY(-2px);
      box-shadow: 0 12px 32px var(--blue-glow);
    }

    .btn.secondary{
      background: var(--card2);
      color: var(--text);
      border-color: var(--border);
    }

    .btn.secondary:hover{
      background: var(--card-hover);
      border-color: var(--border-hover);
      transform: translateY(-2px);
    }

    /* Footer */
    .footer{
      margin-top: 80px;
      padding: 40px 20px 30px;
      border-top: 1px solid var(--border);
      background: rgba(0,0,0,0.2);
    }

    .footer-content{
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .footer-links{
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      font-size: 0.95rem;
    }

    .footer-links a{
      color: var(--muted);
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
    }

    .footer-links a:hover{
      color: var(--green);
    }

    .footer-bottom{
      font-size: 0.95rem;
      color: var(--muted2);
    }

    .footer-bottom a{
      color: var(--green);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .footer-bottom a:hover{
      color: var(--blue);
    }

    /* Responsive */
    @media (max-width: 768px){
      .hero h1{ font-size: 2.5rem; }
      .hero p{ font-size: 1.15rem; }
      .section-title{ font-size: 2.2rem; }
      .catalogue-grid{ grid-template-columns: 1fr; }
      .modal-header, .modal-body{ padding: 32px 24px; }
      .modal-header h2{ font-size: 2rem; }
      .day-item{ flex-direction: column; }
      .modal-actions{ flex-direction: column; }
      .btn{ width: 100%; justify-content: center; }
    }

    @media (max-width: 520px){
      .hero h1{ font-size: 2rem; }
      .hero{ padding: 80px 20px 60px; }
      .container{ padding: 30px 16px 60px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">🏢 FORMATIONS ENTREPRISES (B2B)</div>
        <h1>9 Parcours Premium avec IA Embarquée</h1>
        <p>Transformez vos équipes avec des formations sur mesure, des cas pratiques terrain et l'IA intégrée à chaque module. Intra, Inter ou Bootcamp.</p>
      </div>
    </section>

    <!-- Catalogue -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">📚 Notre Catalogue B2B</h2>
        <p class="section-subtitle">9 parcours métiers éprouvés, adaptés au contexte africain, avec IA embarquée et livrables opérationnels</p>
      </div>

      <div class="catalogue-grid">
        ${courses.map(course => `
        <div class="catalogue-card" role="button" tabindex="0" data-course="${course.slug}" aria-label="Voir détails ${course.title}">
          <h3>${course.title}</h3>
          <p class="description">${course.short_description}</p>
          <div class="catalogue-meta">
            <span>⏱️ ${course.duration_days} jours</span>
            <span>🎯 ${course.target_audience.length} profils cibles</span>
            <span>📦 ${course.deliverables.length} livrables</span>
          </div>
          <div class="cta-hint">
            👉 Cliquez pour voir le programme complet
          </div>
        </div>
        `).join('\n')}
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="./index.html">Accueil</a>
        <span style="color: var(--border);">|</span>
        <a href="./contact.html">Contact</a>
        <span style="color: var(--border);">|</span>
        <a href="./parcours.html">Parcours</a>
        <span style="color: var(--border);">|</span>
        <a href="./companies.html">Entreprises (B2B)</a>
        <span style="color: var(--border);">|</span>
        <a href="./b2c.html">Particuliers (B2C)</a>
        <span style="color: var(--border);">|</span>
        <a href="./mentions-legales.html">Mentions légales</a>
        <span style="color: var(--border);">|</span>
        <a href="./cgu.html">CGU</a>
        <span style="color: var(--border);">|</span>
        <a href="./cgv.html">CGV</a>
        <span style="color: var(--border);">|</span>
        <a href="./politique-confidentialite.html">Politique de confidentialité</a>
      </div>
      <p class="footer-bottom">
        © 2026 DigiSchool Africa — propriété de <a href="https://www.mydigilab.io" target="_blank" rel="noopener">Digilab</a>
      </p>
    </div>
  </footer>

  <!-- Course Modals -->
  ${courses.map(generateB2BModal).join('\n')}

  <!-- Modal System Script -->
  <script>
    (function() {
      'use strict';

      let activeModal = null;
      let focusedElementBeforeModal = null;

      // Open modal
      function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        focusedElementBeforeModal = document.activeElement;
        modal.classList.add('active');
        activeModal = modal;
        document.body.style.overflow = 'hidden';

        // Focus trap setup
        const focusableElements = modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (firstFocusable) firstFocusable.focus();

        // Trap focus
        modal.addEventListener('keydown', function trapFocus(e) {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        });

        // Track B2B modal open
        if (window.DigiSchoolEvents && typeof window.DigiSchoolEvents.trackEvent === 'function') {
          const courseSlug = modalId.replace('modal-', '');
          window.DigiSchoolEvents.trackEvent('b2b_course_modal_open', {
            course: courseSlug,
            page: 'companies'
          });
        }
      }

      // Close modal
      function closeModal() {
        if (!activeModal) return;

        activeModal.classList.remove('active');
        document.body.style.overflow = '';
        
        if (focusedElementBeforeModal && focusedElementBeforeModal.focus) {
          focusedElementBeforeModal.focus();
        }

        activeModal = null;
        focusedElementBeforeModal = null;
      }

      // Card click handlers
      document.querySelectorAll('.catalogue-card').forEach(function(card) {
        card.addEventListener('click', function() {
          const slug = this.getAttribute('data-course');
          if (slug) openModal('modal-' + slug);
        });

        card.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const slug = this.getAttribute('data-course');
            if (slug) openModal('modal-' + slug);
          }
        });
      });

      // Close button handlers
      document.querySelectorAll('.modal-close').forEach(function(btn) {
        btn.addEventListener('click', closeModal);
      });

      // Backdrop click
      document.querySelectorAll('.course-modal-overlay').forEach(function(overlay) {
        overlay.addEventListener('click', function(e) {
          if (e.target === overlay) closeModal();
        });
      });

      // ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activeModal) {
          closeModal();
        }
      });

      // Hash routing
      function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById('modal-' + hash)) {
          openModal('modal-' + hash);
        }
      }

      window.addEventListener('hashchange', handleHashChange);
      if (window.location.hash) {
        handleHashChange();
      }

      // Track proforma clicks
      document.addEventListener('click', function(e) {
        const proformaLink = e.target.closest('a[href*="proforma.html"]');
        if (proformaLink && window.DigiSchoolEvents && typeof window.DigiSchoolEvents.trackEvent === 'function') {
          const url = new URL(proformaLink.href, window.location.origin);
          const courseSlug = url.searchParams.get('course');
          window.DigiSchoolEvents.trackEvent('b2b_proforma_click', {
            course: courseSlug,
            page: 'companies'
          });
        }
      });
    })();
  </script>

  <!-- Lead Events Tracking -->
  <script src="./lead-events.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'companies.html'), companiesHTML, 'utf8');
console.log('✅ companies.html generated');

// Generate b2c.html
console.log('🎓 Generating b2c.html...');

function generateB2CCourseCard(course) {
  const moduleTotalPrice = course.module_price_xof * course.modules.length;
  const savingsPercent = Math.round(((moduleTotalPrice - course.pack_price_xof) / moduleTotalPrice) * 100);

  return `
<div class="b2c-course-card">
  <div class="course-badge">🤖 IA EMBARQUÉE</div>
  <h3>${course.title}</h3>
  <p class="course-subtitle">${course.subtitle}</p>
  
  <div class="course-meta">
    <span>⏱️ ${course.duration_days} jours</span>
    <span>📊 ${course.modules.length} modules</span>
    <span>🎯 ${course.target_audience[0]}</span>
  </div>

  <div class="course-description">
    <p>${course.short_description}</p>
  </div>

  <div class="pricing-section">
    <div class="price-option pack">
      <div class="price-label">💎 Prix Pack Complet</div>
      <div class="price-value">${formatPrice(course.pack_price_xof)} FCFA</div>
      <div class="price-note">Économisez ${savingsPercent}% vs achat module par module</div>
    </div>
    
    <div class="price-option modules">
      <div class="price-label">📦 Prix par Module</div>
      <div class="price-value">${formatPrice(course.module_price_xof)} FCFA <span class="per-module">x ${course.modules.length}</span></div>
      <div class="price-note">Total : ${formatPrice(moduleTotalPrice)} FCFA</div>
    </div>
  </div>

  <div class="course-actions">
    <a href="./b2c-checkout.html?course=${course.slug}&type=pack" class="btn primary">
      💎 Acheter le Pack
      <span class="price-hint">${formatPrice(course.pack_price_xof)} FCFA</span>
    </a>
    <a href="./b2c-checkout.html?course=${course.slug}&type=module" class="btn secondary">
      📦 Acheter un Module
      <span class="price-hint">${formatPrice(course.module_price_xof)} FCFA/module</span>
    </a>
  </div>

  <div class="course-details-toggle">
    <button class="details-btn" data-course="${course.slug}">
      📖 Voir le Programme Complet
      <span class="chevron">▼</span>
    </button>
  </div>

  <div class="course-details" id="details-${course.slug}" style="display: none;">
    <div class="details-content">
      <h4>📚 Modules de Formation</h4>
      <div class="modules-list">
        ${course.modules.map((mod, idx) => `
        <div class="module-item">
          <strong>Module ${idx + 1}: ${mod.name}</strong>
          <ul>
            ${mod.outcomes.map(o => `<li>${o}</li>`).join('\n            ')}
          </ul>
        </div>
        `).join('')}
      </div>

      <h4>🤖 IA Embarquée & Outils</h4>
      <ul class="ai-tools-list">
        ${course.ai_section.tools.slice(0, 3).map(t => `<li>${t}</li>`).join('\n        ')}
      </ul>

      <h4>📦 Livrables</h4>
      <ul class="deliverables-list">
        ${course.deliverables.slice(0, 5).map(d => `<li>${d}</li>`).join('\n        ')}
      </ul>

      <div class="online-notice">
        ✨ <strong>Accès 100% en ligne</strong> — Consultez vos supports directement dans la plateforme (pas de téléchargement)
      </div>
    </div>
  </div>
</div>
`;
}

const b2cHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Formations Particuliers (B2C) — DigiSchool Africa</title>
  <meta name="description" content="Parcours modulaires 100% en ligne avec IA embarquée. Achetez le pack complet ou module par module. Prix transparents et accès immédiat." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Formations Particuliers (B2C) — DigiSchool Africa" />
  <meta property="og:description" content="9 parcours professionnels 100% en ligne avec IA embarquée. Pack ou module par module." />
  <meta property="og:url" content="https://digischool.africa/b2c.html" />
  <meta property="og:type" content="website" />
  
  <link rel="canonical" href="https://digischool.africa/b2c.html" />

  <style>
    :root{
      --bg:#0f172a;
      --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      --card: rgba(255,255,255,0.04);
      --card2: rgba(255,255,255,0.06);
      --card-hover: rgba(255,255,255,0.08);
      --border: rgba(255,255,255,0.12);
      --border-hover: rgba(255,255,255,0.24);
      --text:#ffffff;
      --muted: rgba(255,255,255,0.78);
      --muted2: rgba(255,255,255,0.62);
      --green:#22c55e;
      --green-glow: rgba(34,197,94,0.25);
      --blue:#3b82f6;
      --blue-glow: rgba(59,130,246,0.25);
      --orange:#f97316;
    }

    *{ box-sizing:border-box; margin:0; padding:0; }

    body{
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .container{
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }

    /* Hero */
    .hero{
      position: relative;
      text-align: center;
      margin-bottom: 80px;
      padding: 100px 30px 80px;
      border-radius: 24px;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.98) 100%);
      border: 1px solid var(--border);
    }

    .hero::before{
      content: '';
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, var(--green-glow) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, var(--blue-glow) 0%, transparent 50%);
      animation: gradientShift 8s ease-in-out infinite;
      opacity: 0.6;
      z-index: 0;
    }

    @keyframes gradientShift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(30px, -30px) scale(1.1); }
      50% { transform: translate(-30px, 30px) scale(0.9); }
      75% { transform: translate(30px, 30px) scale(1.05); }
    }

    .hero-content{
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-badge{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.9rem;
      border: 1px solid rgba(34,197,94,0.35);
      background: rgba(34,197,94,0.16);
      margin-bottom: 24px;
      backdrop-filter: blur(10px);
    }

    .hero h1{
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 24px;
      background: linear-gradient(135deg, #ffffff 0%, var(--green) 50%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
    }

    .hero p{
      font-size: 1.3rem;
      color: var(--muted);
      max-width: 750px;
      margin: 0 auto 32px;
      line-height: 1.7;
    }

    .hero .online-badge{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(34,197,94,0.1);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 12px;
      font-size: 1rem;
      color: var(--green);
      font-weight: 600;
    }

    /* Section */
    .section{
      margin-bottom: 80px;
    }

    .section-header{
      text-align: center;
      margin-bottom: 60px;
    }

    .section-title{
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #ffffff 0%, var(--green) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle{
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 700px;
      margin: 0 auto;
    }

    /* B2C Course Card */
    .b2c-courses-grid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 40px;
    }

    .b2c-course-card{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 36px;
      transition: all 0.4s ease;
    }

    .b2c-course-card:hover{
      border-color: var(--border-hover);
      background: var(--card-hover);
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }

    .course-badge{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.8rem;
      border: 1px solid rgba(34,197,94,0.35);
      background: rgba(34,197,94,0.16);
      margin-bottom: 16px;
      color: var(--green);
    }

    .b2c-course-card h3{
      font-size: 1.8rem;
      margin-bottom: 8px;
      color: var(--text);
    }

    .course-subtitle{
      font-size: 1rem;
      color: var(--muted);
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .course-meta{
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 20px;
      font-size: 0.9rem;
      color: var(--muted2);
    }

    .course-meta span{
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .course-description{
      margin-bottom: 24px;
      padding: 16px;
      background: rgba(0,0,0,0.2);
      border-radius: 12px;
      border-left: 3px solid var(--green);
    }

    .course-description p{
      font-size: 0.95rem;
      color: var(--muted);
      line-height: 1.7;
    }

    .pricing-section{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }

    .price-option{
      padding: 20px;
      border-radius: 12px;
      border: 2px solid var(--border);
      background: var(--card2);
      transition: all 0.3s ease;
    }

    .price-option.pack{
      border-color: var(--green);
      background: rgba(34,197,94,0.08);
    }

    .price-label{
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--muted2);
      margin-bottom: 8px;
    }

    .price-value{
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 4px;
    }

    .price-option.pack .price-value{
      color: var(--green);
    }

    .per-module{
      font-size: 0.9rem;
      color: var(--muted2);
      font-weight: 400;
    }

    .price-note{
      font-size: 0.8rem;
      color: var(--muted);
    }

    .course-actions{
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }

    .btn{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      cursor: pointer;
      text-align: left;
    }

    .btn.primary{
      background: var(--green);
      color: #fff;
      border-color: var(--green);
    }

    .btn.primary:hover{
      background: #1ea54e;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px var(--green-glow);
    }

    .btn.secondary{
      background: var(--card2);
      color: var(--text);
      border-color: var(--border);
    }

    .btn.secondary:hover{
      background: var(--card-hover);
      border-color: var(--border-hover);
      transform: translateY(-2px);
    }

    .price-hint{
      font-size: 0.85rem;
      opacity: 0.9;
    }

    .details-btn{
      width: 100%;
      padding: 12px 20px;
      background: var(--card2);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .details-btn:hover{
      background: var(--card-hover);
      border-color: var(--border-hover);
    }

    .details-btn .chevron{
      transition: transform 0.3s ease;
    }

    .details-btn.active .chevron{
      transform: rotate(180deg);
    }

    .course-details{
      margin-top: 20px;
      padding: 24px;
      background: rgba(0,0,0,0.3);
      border-radius: 12px;
      border: 1px solid var(--border);
    }

    .details-content h4{
      font-size: 1.2rem;
      color: var(--blue);
      margin-bottom: 16px;
      margin-top: 24px;
    }

    .details-content h4:first-child{
      margin-top: 0;
    }

    .module-item{
      margin-bottom: 20px;
      padding: 16px;
      background: var(--card);
      border-radius: 8px;
      border-left: 3px solid var(--blue);
    }

    .module-item strong{
      display: block;
      color: var(--blue);
      margin-bottom: 8px;
    }

    .module-item ul, .ai-tools-list, .deliverables-list{
      list-style: none;
      padding: 0;
    }

    .module-item li, .ai-tools-list li, .deliverables-list li{
      padding-left: 20px;
      position: relative;
      margin-bottom: 6px;
      color: var(--muted);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .module-item li::before, .ai-tools-list li::before, .deliverables-list li::before{
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--green);
      font-weight: 700;
    }

    .online-notice{
      margin-top: 24px;
      padding: 16px;
      background: rgba(34,197,94,0.1);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 8px;
      color: var(--muted);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    /* Footer */
    .footer{
      margin-top: 80px;
      padding: 40px 20px 30px;
      border-top: 1px solid var(--border);
      background: rgba(0,0,0,0.2);
    }

    .footer-content{
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .footer-links{
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      font-size: 0.95rem;
    }

    .footer-links a{
      color: var(--muted);
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
    }

    .footer-links a:hover{
      color: var(--green);
    }

    .footer-bottom{
      font-size: 0.95rem;
      color: var(--muted2);
    }

    .footer-bottom a{
      color: var(--green);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .footer-bottom a:hover{
      color: var(--blue);
    }

    /* Responsive */
    @media (max-width: 768px){
      .hero h1{ font-size: 2.5rem; }
      .hero p{ font-size: 1.15rem; }
      .section-title{ font-size: 2.2rem; }
      .b2c-courses-grid{ grid-template-columns: 1fr; }
      .pricing-section{ grid-template-columns: 1fr; }
    }

    @media (max-width: 520px){
      .hero h1{ font-size: 2rem; }
      .hero{ padding: 80px 20px 60px; }
      .container{ padding: 30px 16px 60px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">🎓 FORMATIONS PARTICULIERS (B2C)</div>
        <h1>9 Parcours Professionnels 100% en Ligne</h1>
        <p>Développez vos compétences avec l'IA embarquée. Achetez le pack complet ou module par module. Prix transparents, accès immédiat.</p>
        <div class="online-badge">
          ✨ Accès 100% en ligne — Aucun téléchargement requis
        </div>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">📚 Nos Formations B2C</h2>
        <p class="section-subtitle">Pack ou module par module : vous choisissez. L'achat par pack vous fait économiser jusqu'à 25%.</p>
      </div>

      <div class="b2c-courses-grid">
        ${courses.map(generateB2CCourseCard).join('\n')}
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="./index.html">Accueil</a>
        <span style="color: var(--border);">|</span>
        <a href="./contact.html">Contact</a>
        <span style="color: var(--border);">|</span>
        <a href="./parcours.html">Parcours</a>
        <span style="color: var(--border);">|</span>
        <a href="./companies.html">Entreprises (B2B)</a>
        <span style="color: var(--border);">|</span>
        <a href="./b2c.html">Particuliers (B2C)</a>
        <span style="color: var(--border);">|</span>
        <a href="./mentions-legales.html">Mentions légales</a>
        <span style="color: var(--border);">|</span>
        <a href="./cgu.html">CGU</a>
        <span style="color: var(--border);">|</span>
        <a href="./cgv.html">CGV</a>
        <span style="color: var(--border);">|</span>
        <a href="./politique-confidentialite.html">Politique de confidentialité</a>
      </div>
      <p class="footer-bottom">
        © 2026 DigiSchool Africa — propriété de <a href="https://www.mydigilab.io" target="_blank" rel="noopener">Digilab</a>
      </p>
    </div>
  </footer>

  <!-- Course Data -->
  <script src="./courses-data.js"></script>

  <!-- Details Toggle Script -->
  <script>
    (function() {
      'use strict';

      // Toggle course details
      document.querySelectorAll('.details-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const courseSlug = this.getAttribute('data-course');
          const details = document.getElementById('details-' + courseSlug);
          
          if (details.style.display === 'none' || !details.style.display) {
            details.style.display = 'block';
            this.classList.add('active');
          } else {
            details.style.display = 'none';
            this.classList.remove('active');
          }
        });
      });

      // Track B2C buy clicks
      document.addEventListener('click', function(e) {
        const buyBtn = e.target.closest('a[href*="b2c-checkout.html"]');
        if (buyBtn && window.DigiSchoolEvents && typeof window.DigiSchoolEvents.trackEvent === 'function') {
          const url = new URL(buyBtn.href, window.location.origin);
          const courseSlug = url.searchParams.get('course');
          const type = url.searchParams.get('type');
          
          if (type === 'pack') {
            window.DigiSchoolEvents.trackEvent('b2c_pack_buy_click', {
              course: courseSlug,
              page: 'b2c'
            });
          } else if (type === 'module') {
            window.DigiSchoolEvents.trackEvent('b2c_module_buy_click', {
              course: courseSlug,
              page: 'b2c'
            });
          }
        }
      });
    })();
  </script>

  <!-- Lead Events Tracking -->
  <script src="./lead-events.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'b2c.html'), b2cHTML, 'utf8');
console.log('✅ b2c.html generated');

// Generate b2c-checkout.html
console.log('🛒 Generating b2c-checkout.html...');

const checkoutHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Commande — DigiSchool Africa</title>
  <meta name="description" content="Finalisez votre commande de formation professionnelle 100% en ligne avec IA embarquée." />
  
  <link rel="canonical" content="https://digischool.africa/b2c-checkout.html" />

  <style>
    :root{
      --bg:#0f172a;
      --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      --card: rgba(255,255,255,0.04);
      --card2: rgba(255,255,255,0.06);
      --card-hover: rgba(255,255,255,0.08);
      --border: rgba(255,255,255,0.12);
      --border-hover: rgba(255,255,255,0.24);
      --text:#ffffff;
      --muted: rgba(255,255,255,0.78);
      --muted2: rgba(255,255,255,0.62);
      --green:#22c55e;
      --green-glow: rgba(34,197,94,0.25);
      --blue:#3b82f6;
      --blue-glow: rgba(59,130,246,0.25);
      --danger:#ef4444;
    }

    *{ box-sizing:border-box; margin:0; padding:0; }

    body{
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .container{
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }

    /* Header */
    .checkout-header{
      text-align: center;
      margin-bottom: 48px;
    }

    .checkout-header h1{
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 12px;
      background: linear-gradient(135deg, #ffffff 0%, var(--green) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .checkout-header p{
      font-size: 1.1rem;
      color: var(--muted);
    }

    /* Order Summary */
    .order-summary{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      margin-bottom: 40px;
    }

    .order-summary h2{
      font-size: 1.8rem;
      color: var(--blue);
      margin-bottom: 24px;
    }

    .summary-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid var(--border);
    }

    .summary-item:last-child{
      border-bottom: none;
      padding-top: 24px;
      margin-top: 12px;
      border-top: 2px solid var(--border);
    }

    .summary-label{
      font-size: 1rem;
      color: var(--muted);
    }

    .summary-value{
      font-size: 1rem;
      color: var(--text);
      font-weight: 600;
    }

    .summary-item:last-child .summary-label{
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--text);
    }

    .summary-item:last-child .summary-value{
      font-size: 1.6rem;
      color: var(--green);
      font-weight: 800;
    }

    /* Module Selector */
    .module-selector{
      margin-top: 24px;
      padding: 20px;
      background: rgba(34,197,94,0.08);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 12px;
    }

    .module-selector h3{
      font-size: 1.2rem;
      color: var(--green);
      margin-bottom: 16px;
    }

    .module-selector select{
      width: 100%;
      padding: 12px 16px;
      background: var(--card2);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 1rem;
      cursor: pointer;
    }

    .module-selector select:focus{
      outline: 2px solid var(--green);
      outline-offset: 2px;
    }

    /* Order Form */
    .order-form{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      margin-bottom: 40px;
    }

    .order-form h2{
      font-size: 1.8rem;
      color: var(--blue);
      margin-bottom: 24px;
    }

    .form-group{
      margin-bottom: 24px;
    }

    .form-group label{
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 8px;
    }

    .form-group label .required{
      color: var(--danger);
    }

    .form-group input, .form-group select, .form-group textarea{
      width: 100%;
      padding: 12px 16px;
      background: var(--card2);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-group input:focus, .form-group select:focus, .form-group textarea:focus{
      outline: none;
      border-color: var(--green);
      background: var(--card-hover);
    }

    .form-group textarea{
      resize: vertical;
      min-height: 100px;
    }

    .form-group small{
      display: block;
      margin-top: 6px;
      font-size: 0.85rem;
      color: var(--muted2);
    }

    .submit-btn{
      width: 100%;
      padding: 18px 32px;
      background: var(--green);
      border: 2px solid var(--green);
      border-radius: 12px;
      color: #fff;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-btn:hover{
      background: #1ea54e;
      transform: translateY(-2px);
      box-shadow: 0 12px 32px var(--green-glow);
    }

    .submit-btn:disabled{
      background: var(--card2);
      border-color: var(--border);
      color: var(--muted2);
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    /* Payment Methods */
    .payment-section{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      margin-bottom: 40px;
    }

    .payment-section h2{
      font-size: 1.8rem;
      color: var(--blue);
      margin-bottom: 12px;
    }

    .payment-notice{
      background: rgba(34,197,94,0.1);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 24px;
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .payment-methods{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }

    .payment-item{
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      background: var(--card2);
      border: 1px solid var(--border);
      border-radius: 12px;
      transition: all 0.3s ease;
      text-decoration: none;
      color: var(--text);
    }

    .payment-item:hover{
      border-color: var(--green);
      background: var(--card-hover);
      transform: translateX(4px);
    }

    .payment-item img{
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    .payment-item .icon{
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      background: var(--card);
      border-radius: 8px;
      border: 1px solid var(--border);
    }

    .payment-item .details{
      flex: 1;
    }

    .payment-item .label{
      font-weight: 700;
      font-size: 0.95rem;
      display: block;
      margin-bottom: 4px;
    }

    .payment-item .num{
      font-size: 0.85rem;
      color: var(--muted2);
      display: block;
    }

    /* Online Notice */
    .online-notice{
      background: rgba(34,197,94,0.1);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 40px;
      text-align: center;
    }

    .online-notice strong{
      color: var(--green);
      font-size: 1.1rem;
    }

    .online-notice p{
      color: var(--muted);
      margin-top: 8px;
      line-height: 1.7;
    }

    /* Footer */
    .footer{
      margin-top: 80px;
      padding: 40px 20px 30px;
      border-top: 1px solid var(--border);
      background: rgba(0,0,0,0.2);
    }

    .footer-content{
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    .footer-links{
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      font-size: 0.95rem;
    }

    .footer-links a{
      color: var(--muted);
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
    }

    .footer-links a:hover{
      color: var(--green);
    }

    .footer-bottom{
      font-size: 0.95rem;
      color: var(--muted2);
    }

    .footer-bottom a{
      color: var(--green);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .footer-bottom a:hover{
      color: var(--blue);
    }

    /* Responsive */
    @media (max-width: 768px){
      .checkout-header h1{ font-size: 2rem; }
      .order-summary, .order-form, .payment-section{ padding: 24px 20px; }
      .payment-methods{ grid-template-columns: 1fr; }
    }

    @media (max-width: 520px){
      .container{ padding: 30px 16px 60px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="checkout-header">
      <h1>🛒 Finaliser votre Commande</h1>
      <p>Formation 100% en ligne avec accès immédiat après paiement</p>
    </div>

    <!-- Online Notice -->
    <div class="online-notice">
      <strong>✨ Accès 100% en ligne — Aucun téléchargement</strong>
      <p>Consultez vos supports directement dans la plateforme. Accès immédiat après validation de votre commande.</p>
    </div>

    <!-- Order Summary -->
    <div class="order-summary">
      <h2>📋 Récapitulatif de Commande</h2>
      <div class="summary-item">
        <span class="summary-label">Formation :</span>
        <span class="summary-value" id="course-title">Chargement...</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Type d'achat :</span>
        <span class="summary-value" id="purchase-type">Chargement...</span>
      </div>
      <div class="summary-item" id="module-selector-container" style="display: none; flex-direction: column; align-items: flex-start;">
        <div class="module-selector">
          <h3>Sélectionnez votre module</h3>
          <select id="module-select">
            <option value="">-- Choisir un module --</option>
          </select>
        </div>
      </div>
      <div class="summary-item">
        <span class="summary-label">Prix TTC :</span>
        <span class="summary-value" id="total-price">0 FCFA</span>
      </div>
    </div>

    <!-- Order Form -->
    <div class="order-form">
      <h2>👤 Vos Informations</h2>
      <form id="checkout-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
        <input type="hidden" name="course" id="form-course" />
        <input type="hidden" name="purchase_type" id="form-type" />
        <input type="hidden" name="module" id="form-module" />
        <input type="hidden" name="price" id="form-price" />

        <div class="form-group">
          <label for="name">Nom complet <span class="required">*</span></label>
          <input type="text" id="name" name="name" required placeholder="Ex: Jean Kouassi" />
        </div>

        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input type="email" id="email" name="email" required placeholder="Ex: jean.kouassi@example.com" />
          <small>Vous recevrez vos accès de connexion à cette adresse</small>
        </div>

        <div class="form-group">
          <label for="phone">Téléphone / WhatsApp <span class="required">*</span></label>
          <input type="tel" id="phone" name="phone" required placeholder="Ex: +225 05 05 11 11 02" />
          <small>Pour confirmer votre commande et vous contacter si besoin</small>
        </div>

        <div class="form-group">
          <label for="company">Entreprise / Organisation (optionnel)</label>
          <input type="text" id="company" name="company" placeholder="Ex: ABC Corporation" />
        </div>

        <div class="form-group">
          <label for="message">Message / Questions (optionnel)</label>
          <textarea id="message" name="message" placeholder="Dites-nous si vous avez des questions ou besoins particuliers..."></textarea>
        </div>

        <button type="submit" class="submit-btn" id="submit-btn">
          ✅ Valider ma Commande
        </button>
      </form>
    </div>

    <!-- Payment Methods -->
    <div class="payment-section">
      <h2>💳 Paiement (après validation)</h2>
      <div class="payment-notice">
        📌 <strong>Important :</strong> Après validation de votre commande, nous vous contacterons pour finaliser le paiement via l'un des moyens ci-dessous. <strong>Aucun paiement en ligne automatisé.</strong>
      </div>

      <div class="payment-methods">
        <a class="payment-item" href="tel:+2250714678289" aria-label="Appeler Orange Money">
          <img src="./assets/orange-money.png" alt="Orange Money" loading="lazy" decoding="async">
          <div class="details">
            <span class="label">Orange Money</span>
            <span class="num">+225 07 14 67 82 89</span>
          </div>
        </a>

        <a class="payment-item" href="tel:+2250565231403" aria-label="Appeler MTN MoMo">
          <img src="./assets/mtn-momo.png" alt="MTN MoMo" loading="lazy" decoding="async">
          <div class="details">
            <span class="label">MTN MoMo</span>
            <span class="num">+225 05 65 23 14 03</span>
          </div>
        </a>

        <a class="payment-item" href="tel:+2250151666801" aria-label="Appeler Moov Money">
          <img src="./assets/moov-money.png" alt="Moov Money" loading="lazy" decoding="async">
          <div class="details">
            <span class="label">Moov Money</span>
            <span class="num">+225 01 51 66 68 01</span>
          </div>
        </a>

        <a class="payment-item" href="tel:+2250151664653" aria-label="Appeler Wave">
          <img src="./assets/wave.png" alt="Wave" loading="lazy" decoding="async">
          <div class="details">
            <span class="label">Wave</span>
            <span class="num">+225 01 51 66 46 53</span>
          </div>
        </a>

        <a class="payment-item" href="https://wa.me/2250505111102" target="_blank" rel="noopener" aria-label="Contacter sur WhatsApp">
          <div class="icon">💬</div>
          <div class="details">
            <span class="label">WhatsApp</span>
            <span class="num">+225 05 05 11 11 02</span>
          </div>
        </a>

        <a class="payment-item" href="mailto:support@digischool.africa" aria-label="Envoyer un email au support">
          <div class="icon">@</div>
          <div class="details">
            <span class="label">Email support</span>
            <span class="num">support@digischool.africa</span>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="./index.html">Accueil</a>
        <span style="color: var(--border);">|</span>
        <a href="./contact.html">Contact</a>
        <span style="color: var(--border);">|</span>
        <a href="./b2c.html">Retour au Catalogue B2C</a>
        <span style="color: var(--border);">|</span>
        <a href="./cgu.html">CGU</a>
        <span style="color: var(--border);">|</span>
        <a href="./cgv.html">CGV</a>
      </div>
      <p class="footer-bottom">
        © 2026 DigiSchool Africa — propriété de <a href="https://www.mydigilab.io" target="_blank" rel="noopener">Digilab</a>
      </p>
    </div>
  </footer>

  <!-- Course Data -->
  <script src="./courses-data.js"></script>

  <!-- Checkout Logic -->
  <script>
    (function() {
      'use strict';

      // Parse URL params
      const urlParams = new URLSearchParams(window.location.search);
      const courseSlug = urlParams.get('course');
      const purchaseType = urlParams.get('type'); // 'pack' or 'module'

      if (!courseSlug || !purchaseType) {
        alert('Paramètres manquants. Veuillez revenir au catalogue B2C.');
        window.location.href = './b2c.html';
        return;
      }

      // Load course data
      const course = window.getCourseBySlugorId && window.getCourseBySlugorId(courseSlug);
      if (!course) {
        alert('Formation introuvable. Veuillez revenir au catalogue.');
        window.location.href = './b2c.html';
        return;
      }

      // Update summary
      document.getElementById('course-title').textContent = course.title;
      document.getElementById('purchase-type').textContent = purchaseType === 'pack' ? '💎 Pack Complet' : '📦 Module Individuel';

      // Set form hidden fields
      document.getElementById('form-course').value = course.title;
      document.getElementById('form-type').value = purchaseType;

      // Price logic
      let finalPrice = 0;
      if (purchaseType === 'pack') {
        finalPrice = course.pack_price_xof;
        document.getElementById('total-price').textContent = finalPrice.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + ' FCFA';
        document.getElementById('form-price').value = finalPrice;
      } else if (purchaseType === 'module') {
        // Show module selector
        document.getElementById('module-selector-container').style.display = 'flex';
        const select = document.getElementById('module-select');
        course.modules.forEach(function(mod, idx) {
          const option = document.createElement('option');
          option.value = idx;
          option.textContent = 'Module ' + (idx + 1) + ': ' + mod.name + ' (' + course.module_price_xof.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + ' FCFA)';
          select.appendChild(option);
        });

        select.addEventListener('change', function() {
          if (this.value !== '') {
            finalPrice = course.module_price_xof;
            document.getElementById('total-price').textContent = finalPrice.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + ' FCFA';
            document.getElementById('form-price').value = finalPrice;
            document.getElementById('form-module').value = course.modules[parseInt(this.value)].name;
            document.getElementById('submit-btn').disabled = false;
          } else {
            document.getElementById('total-price').textContent = '0 FCFA';
            document.getElementById('form-price').value = '';
            document.getElementById('form-module').value = '';
            document.getElementById('submit-btn').disabled = true;
          }
        });

        // Initially disable submit until module selected
        document.getElementById('submit-btn').disabled = true;
      }

      // Form submission tracking
      document.getElementById('checkout-form').addEventListener('submit', function(e) {
        if (window.DigiSchoolEvents && typeof window.DigiSchoolEvents.trackEvent === 'function') {
          const trackType = purchaseType === 'pack' ? 'b2c_pack_buy_submit' : 'b2c_module_buy_submit';
          window.DigiSchoolEvents.trackEvent(trackType, {
            course: courseSlug,
            price: finalPrice,
            page: 'checkout'
          });
        }
      });
    })();
  </script>

  <!-- Lead Events Tracking -->
  <script src="./lead-events.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'b2c-checkout.html'), checkoutHTML, 'utf8');
console.log('✅ b2c-checkout.html generated');

// Update sitemap.xml
console.log('🗺️  Updating sitemap.xml...');

const sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Check if b2c-checkout.html already exists
if (!sitemap.includes('b2c-checkout.html')) {
  // Insert before closing </urlset>
  const checkoutEntry = `  <url>
    <loc>https://digischool.africa/b2c-checkout.html</loc>
    <lastmod>2026-01-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n</urlset>`;
  
  sitemap = sitemap.replace('</urlset>', checkoutEntry);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ sitemap.xml updated');
} else {
  console.log('ℹ️  b2c-checkout.html already in sitemap');
}

console.log('\\n🎉 All files generated successfully!');
console.log('\\n📦 Generated files:');
console.log('  - courses-data.js (47.7 KB)');
console.log('  - companies.html (updated with 9 clickable modals)');
console.log('  - b2c.html (updated with pack/module pricing)');
console.log('  - b2c-checkout.html (NEW - order form + payment)');
console.log('  - sitemap.xml (updated with checkout page)');

process.exit(0);
