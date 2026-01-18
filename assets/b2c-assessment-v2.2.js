/**
 * DigiSchool Africa - Auto-évaluation V2.2 Phase 2B
 * Machine à conversion: 10 questions → diagnostic → recommandations → email
 * Date: 2026-01-18
 * Production-grade
 */

// ========== QUESTIONS (10 questions pour diagnostic) ==========
const QUESTIONS = [
  {
    id: 1,
    text: "Quel est votre objectif professionnel principal actuellement ?",
    options: [
      { text: "Piloter des projets complexes avec efficacité", score: { pmp: 10, excel: 3, data: 2 } },
      { text: "Analyser des données pour prendre de meilleures décisions", score: { data: 10, excel: 7, powerbi: 6 } },
      { text: "Manager et motiver des équipes", score: { leadership: 10, rh: 5 } },
      { text: "Développer des stratégies marketing et commerciales", score: { marketing: 10, digital: 5 } },
      { text: "Maîtriser des outils bureautiques avancés", score: { excel: 10, powerpoint: 6 } }
    ]
  },
  {
    id: 2,
    text: "Quel est votre niveau actuel avec les outils numériques professionnels ?",
    options: [
      { text: "Débutant : j'apprends les bases", score: { excel: 8, powerpoint: 7 } },
      { text: "Intermédiaire : j'utilise régulièrement mais besoin d'approfondir", score: { excel: 6, data: 5, powerbi: 4 } },
      { text: "Avancé : je maîtrise bien et cherche à optimiser", score: { data: 10, powerbi: 8, pmp: 6 } },
      { text: "Expert : je forme d'autres personnes", score: { leadership: 10, rh: 8 } }
    ]
  },
  {
    id: 3,
    text: "Quelle compétence souhaitez-vous développer en priorité ?",
    options: [
      { text: "Gestion de projet (planification, budget, équipe)", score: { pmp: 10, leadership: 4 } },
      { text: "Analyse de données et reporting", score: { data: 10, powerbi: 8, excel: 7 } },
      { text: "Leadership et management d'équipe", score: { leadership: 10, rh: 6 } },
      { text: "Marketing digital et vente", score: { marketing: 10, digital: 8 } },
      { text: "Ressources humaines et recrutement", score: { rh: 10, leadership: 5 } }
    ]
  },
  {
    id: 4,
    text: "Quel type de secteur d'activité vous intéresse le plus ?",
    options: [
      { text: "IT, Tech, Digital", score: { digital: 10, data: 8, powerbi: 6 } },
      { text: "Finance, Banque, Assurance", score: { excel: 10, data: 8, pmp: 5 } },
      { text: "Conseil, Audit, Gestion de projet", score: { pmp: 10, excel: 6, leadership: 5 } },
      { text: "Commerce, Marketing, Vente", score: { marketing: 10, digital: 7 } },
      { text: "RH, Formation, Coaching", score: { rh: 10, leadership: 8 } }
    ]
  },
  {
    id: 5,
    text: "Avez-vous déjà utilisé des outils d'IA dans votre travail ?",
    options: [
      { text: "Oui, régulièrement (ChatGPT, Copilot, etc.)", score: { data: 8, digital: 7, pmp: 5 } },
      { text: "Oui, quelques fois par curiosité", score: { excel: 6, powerbi: 5, marketing: 5 } },
      { text: "Non, mais je suis curieux(se) d'apprendre", score: { excel: 7, data: 6 } },
      { text: "Non, et je ne vois pas l'intérêt pour moi", score: { excel: 8, powerpoint: 7 } }
    ]
  },
  {
    id: 6,
    text: "Combien d'années d'expérience professionnelle avez-vous ?",
    options: [
      { text: "0-2 ans (débutant)", score: { excel: 8, powerpoint: 7, digital: 6 } },
      { text: "3-5 ans (junior confirmé)", score: { data: 7, excel: 6, marketing: 6 } },
      { text: "6-10 ans (expérimenté)", score: { pmp: 10, leadership: 8, data: 6 } },
      { text: "10+ ans (senior)", score: { leadership: 10, pmp: 9, rh: 7 } }
    ]
  },
  {
    id: 7,
    text: "Quel est votre plus grand défi professionnel actuellement ?",
    options: [
      { text: "Gérer des projets complexes et respecter les délais", score: { pmp: 10, leadership: 5 } },
      { text: "Analyser et présenter des données de façon claire", score: { data: 10, powerbi: 8, excel: 7 } },
      { text: "Motiver et développer mon équipe", score: { leadership: 10, rh: 7 } },
      { text: "Générer plus de leads et vendre efficacement", score: { marketing: 10, digital: 8 } },
      { text: "Automatiser des tâches répétitives", score: { excel: 10, powerbi: 6, digital: 5 } }
    ]
  },
  {
    id: 8,
    text: "Comment préférez-vous apprendre ?",
    options: [
      { text: "En pratiquant directement sur des cas réels", score: { pmp: 8, data: 8, excel: 7 } },
      { text: "En suivant des cours structurés étape par étape", score: { excel: 9, powerpoint: 8, data: 7 } },
      { text: "En résolvant des problèmes complexes", score: { data: 10, pmp: 9, powerbi: 8 } },
      { text: "En échangeant avec d'autres professionnels", score: { leadership: 10, rh: 8, marketing: 7 } }
    ]
  },
  {
    id: 9,
    text: "Quel est votre budget maximal pour une formation certifiante ?",
    options: [
      { text: "150 000 - 200 000 FCFA", score: { excel: 10, powerpoint: 9 } },
      { text: "200 000 - 250 000 FCFA", score: { data: 9, excel: 8, digital: 7 } },
      { text: "250 000 - 300 000 FCFA", score: { pmp: 10, leadership: 9, data: 8 } },
      { text: "Plus de 300 000 FCFA (pack premium)", score: { pmp: 10, leadership: 10, data: 9 } }
    ]
  },
  {
    id: 10,
    text: "Dans quel délai souhaitez-vous commencer une formation ?",
    options: [
      { text: "Immédiatement (dans les 7 jours)", score: { excel: 10, powerpoint: 9, digital: 8 } },
      { text: "Dans les 2-4 semaines", score: { data: 9, pmp: 8, marketing: 7 } },
      { text: "Dans 1-3 mois", score: { pmp: 8, leadership: 7, rh: 6 } },
      { text: "Je ne suis pas encore certain(e)", score: { excel: 7, data: 6 } }
    ]
  }
];

// ========== COURS CATALOG (avec prix) ==========
const COURSES_CATALOG = {
  'pmp': {
    id: 'gestion-projet-pmp-ia',
    title: 'Gestion de Projet Professionnel (PMP) + IA',
    description: 'Pilotez des projets complexes avec les méthodes PMI/PMBOK et outils IA',
    price: '285 000 FCFA',
    duration: '10 jours',
    icon: '📊'
  },
  'leadership': {
    id: 'leadership-management',
    title: 'Leadership & Management',
    description: 'Développez votre leadership et managez des équipes performantes',
    price: '245 000 FCFA',
    duration: '5 jours',
    icon: '👔'
  },
  'data': {
    id: 'data-analytics-ia',
    title: 'Data Analytics & IA',
    description: 'Analysez des données et créez des insights avec IA',
    price: '245 000 FCFA',
    duration: '6 jours',
    icon: '📈'
  },
  'excel': {
    id: 'excel-avance',
    title: 'Excel Avancé & Analyse de Données',
    description: 'Maîtrisez Excel (formules, TCD, Power Query, Power Pivot)',
    price: '245 000 FCFA',
    duration: '4 jours',
    icon: '📊'
  },
  'powerbi': {
    id: 'powerbi-dataviz',
    title: 'Power BI & Data Visualisation',
    description: 'Créez des tableaux de bord dynamiques et percutants',
    price: '245 000 FCFA',
    duration: '5 jours',
    icon: '📊'
  },
  'marketing': {
    id: 'marketing-vente-ia',
    title: 'Marketing Digital & Vente Boostés par IA',
    description: 'Générez des leads et vendez efficacement avec l\'IA',
    price: '245 000 FCFA',
    duration: '5 jours',
    icon: '📱'
  },
  'digital': {
    id: 'digital-vibecoding',
    title: 'Transformation Digitale & VibeCoding',
    description: 'Créez des sites web et automatisez avec IA',
    price: '180 000 FCFA',
    duration: '3 jours',
    icon: '💻'
  },
  'rh': {
    id: 'rh-performance-ia',
    title: 'RH & Performance avec IA',
    description: 'Optimisez le recrutement, la gestion des talents et l\'engagement',
    price: '245 000 FCFA',
    duration: '5 jours',
    icon: '👥'
  },
  'powerpoint': {
    id: 'powerpoint-storytelling',
    title: 'PowerPoint & Storytelling Visuel',
    description: 'Créez des présentations percutantes qui marquent',
    price: '180 000 FCFA',
    duration: '3 jours',
    icon: '🎨'
  }
};

// ========== DIAGNOSTIC TEMPLATES ==========
const DIAGNOSTIC_TEMPLATES = {
  'pmp': {
    profile: "Vous êtes un **gestionnaire de projets en devenir** ou confirmé. Vous aimez structurer, planifier et piloter des initiatives complexes. Vous cherchez à adopter des méthodologies reconnues (PMI/PMBOK) et à intégrer l'IA dans vos processus.",
    strengths: [
      "Vision stratégique et capacité à planifier",
      "Rigueur et sens de l'organisation",
      "Aptitude à coordonner des équipes multidisciplinaires"
    ],
    areas: [
      "Maîtriser les référentiels PMI/PMBOK et outils avancés",
      "Intégrer l'IA pour automatiser le suivi et le reporting"
    ]
  },
  'leadership': {
    profile: "Vous êtes un **leader naturel** qui aspire à inspirer et motiver des équipes. Vous comprenez que le management moderne nécessite empathie, communication et capacité d'adaptation. Vous souhaitez développer des compétences en leadership transformationnel.",
    strengths: [
      "Capacité à mobiliser et inspirer les autres",
      "Excellente communication interpersonnelle",
      "Sens de l'écoute et de l'empathie"
    ],
    areas: [
      "Structurer une démarche de management moderne",
      "Développer des stratégies de gestion de conflits et d'engagement"
    ]
  },
  'data': {
    profile: "Vous êtes un **analyste de données** passionné par la transformation des chiffres en insights actionnables. Vous aimez décortiquer les données, identifier des tendances et créer de la valeur pour votre organisation grâce à l'IA et aux outils modernes.",
    strengths: [
      "Esprit analytique et rigueur méthodologique",
      "Curiosité pour les technologies émergentes (IA, ML)",
      "Capacité à communiquer des insights complexes"
    ],
    areas: [
      "Maîtriser Python, SQL et outils BI avancés",
      "Intégrer l'IA pour automatiser l'analyse et prédire des tendances"
    ]
  },
  'excel': {
    profile: "Vous êtes un **expert bureautique** qui comprend le pouvoir d'Excel comme outil stratégique. Vous souhaitez maîtriser les fonctions avancées, les tableaux croisés dynamiques, Power Query et Power Pivot pour automatiser vos analyses et gagner en productivité.",
    strengths: [
      "Solide maîtrise des bases d'Excel",
      "Sens du détail et précision",
      "Désir d'automatiser et d'optimiser les processus"
    ],
    areas: [
      "Approfondir les formules complexes et macros VBA",
      "Utiliser Power Query et Power Pivot pour des analyses avancées"
    ]
  },
  'marketing': {
    profile: "Vous êtes un **marketeur digital** orienté résultats. Vous comprenez que le marketing moderne repose sur l'IA, la data et l'automatisation. Vous souhaitez générer des leads qualifiés, optimiser vos campagnes et vendre efficacement.",
    strengths: [
      "Créativité et sens de la communication",
      "Compréhension des leviers digitaux (SEO, SEA, réseaux sociaux)",
      "Orientation client et ROI"
    ],
    areas: [
      "Maîtriser les outils IA pour automatiser la prospection",
      "Développer des stratégies de growth hacking et de conversion"
    ]
  },
  'default': {
    profile: "Vous êtes un **professionnel polyvalent** qui cherche à développer des compétences transversales. Vous comprenez l'importance de la formation continue et vous souhaitez rester compétitif sur le marché du travail africain et international.",
    strengths: [
      "Ouverture d'esprit et capacité d'adaptation",
      "Désir d'apprendre et de progresser",
      "Conscience des enjeux digitaux et de l'IA"
    ],
    areas: [
      "Identifier vos forces et axes de développement prioritaires",
      "Acquérir des compétences techniques et managériales ciblées"
    ]
  }
};

// ========== VARIABLES GLOBALES ==========
let currentQuestion = 0;
let scores = {};
let userAnswers = [];

// ========== INITIALISATION ==========
function initQuiz() {
  renderQuestion(currentQuestion);
  updateProgress();
}

// ========== RENDER QUESTION ==========
function renderQuestion(index) {
  const container = document.getElementById('quiz-container');
  const question = QUESTIONS[index];
  
  container.innerHTML = `
    <div class="question-card">
      <span class="question-number">Question ${index + 1} / 10</span>
      <h2 class="question-text">${question.text}</h2>
      <div class="answers">
        ${question.options.map((option, optIndex) => `
          <label class="answer-option" data-option="${optIndex}">
            <input type="radio" name="q${index}" value="${optIndex}" />
            <span class="answer-label">${option.text}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;
  
  // Event listeners
  const options = container.querySelectorAll('.answer-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
      document.getElementById('next-btn').disabled = false;
    });
  });
}

// ========== UPDATE PROGRESS ==========
function updateProgress() {
  const progress = ((currentQuestion) / QUESTIONS.length) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (currentQuestion === 0) {
    prevBtn.style.visibility = 'hidden';
  } else {
    prevBtn.style.visibility = 'visible';
  }
  
  if (currentQuestion === QUESTIONS.length - 1) {
    nextBtn.textContent = 'Voir mes résultats 🎉';
  } else {
    nextBtn.textContent = 'Suivant →';
  }
}

// ========== NAVIGATION ==========
function nextQuestion() {
  const selected = document.querySelector('input[name="q' + currentQuestion + '"]:checked');
  
  if (!selected) {
    alert('⚠️ Veuillez sélectionner une réponse avant de continuer.');
    return;
  }
  
  const optionIndex = parseInt(selected.value);
  const question = QUESTIONS[currentQuestion];
  const selectedOption = question.options[optionIndex];
  
  // Enregistrer réponse
  userAnswers[currentQuestion] = selectedOption;
  
  // Calculer scores
  Object.keys(selectedOption.score).forEach(courseKey => {
    if (!scores[courseKey]) scores[courseKey] = 0;
    scores[courseKey] += selectedOption.score[courseKey];
  });
  
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion(currentQuestion);
    updateProgress();
    document.getElementById('next-btn').disabled = true;
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
    updateProgress();
    document.getElementById('next-btn').disabled = false;
  }
}

// ========== SHOW RESULTS ==========
function showResults() {
  // Cacher quiz
  document.getElementById('quiz-container').style.display = 'none';
  document.querySelector('.nav-buttons').style.display = 'none';
  document.querySelector('.progress-bar').style.display = 'none';
  
  // Calculer top cours
  const sortedCourses = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  const primaryCourse = sortedCourses[0] || 'excel';
  const secondaryCourses = sortedCourses.slice(1, 4);
  
  // Diagnostic
  const diagnostic = DIAGNOSTIC_TEMPLATES[primaryCourse] || DIAGNOSTIC_TEMPLATES.default;
  
  // Afficher résultats
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.classList.add('show');
  
  // Injection du diagnostic et recommandations
  document.getElementById('high-priority-courses').innerHTML = `
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid #22c55e; border-radius: 16px; padding: 24px; margin-bottom: 20px;">
      <h3 style="font-size: 1.4rem; font-weight: 700; color: #0B1B3A; margin-bottom: 12px;">🎯 Votre Profil</h3>
      <p style="font-size: 1rem; line-height: 1.7; color: #37474F;">${diagnostic.profile}</p>
      
      <h4 style="font-size: 1.2rem; font-weight: 700; color: #22c55e; margin-top: 20px; margin-bottom: 10px;">✅ Vos Forces</h4>
      <ul style="list-style: none; padding-left: 0;">
        ${diagnostic.strengths.map(s => `<li style="padding: 8px 0; color: #37474F;">✓ ${s}</li>`).join('')}
      </ul>
      
      <h4 style="font-size: 1.2rem; font-weight: 700; color: #3b82f6; margin-top: 20px; margin-bottom: 10px;">📈 Axes de Progrès</h4>
      <ul style="list-style: none; padding-left: 0;">
        ${diagnostic.areas.map(a => `<li style="padding: 8px 0; color: #37474F;">→ ${a}</li>`).join('')}
      </ul>
    </div>
    
    <div class="course-item" style="background: linear-gradient(135deg, rgba(30, 136, 229, 0.05), rgba(124, 77, 255, 0.05)); border: 2px solid #1E88E5;">
      <div class="icon">${COURSES_CATALOG[primaryCourse].icon}</div>
      <div class="info">
        <span class="title">${COURSES_CATALOG[primaryCourse].title}</span>
        <p style="font-size: 0.9rem; color: #546E7A; margin: 4px 0;">${COURSES_CATALOG[primaryCourse].description}</p>
        <span class="price">${COURSES_CATALOG[primaryCourse].price} • ${COURSES_CATALOG[primaryCourse].duration}</span>
      </div>
    </div>
  `;
  
  document.getElementById('secondary-courses').innerHTML = secondaryCourses.map(courseKey => {
    const course = COURSES_CATALOG[courseKey];
    if (!course) return '';
    return `
      <div class="course-item">
        <div class="icon">${course.icon}</div>
        <div class="info">
          <span class="title">${course.title}</span>
          <p style="font-size: 0.9rem; color: #546E7A; margin: 4px 0;">${course.description}</p>
          <span class="price">${course.price} • ${course.duration}</span>
        </div>
      </div>
    `;
  }).join('');
  
  // Email capture
  showEmailCapture(primaryCourse, diagnostic);
}

// ========== EMAIL CAPTURE ==========
function showEmailCapture(primaryCourse, diagnostic) {
  const resultsHeader = document.querySelector('.results-header');
  const emailCapture = document.createElement('div');
  emailCapture.style.cssText = 'background: linear-gradient(135deg, #1E88E5, #7C4DFF); border-radius: 16px; padding: 32px; margin-top: 32px; text-align: center;';
  emailCapture.innerHTML = `
    <h3 style="color:#0B1B3A; font-size: 1.6rem; font-weight: 700; margin-bottom: 12px;">📧 Recevez votre rapport complet par email</h3>
    <p style="color:#0B1B3A; opacity: 0.95; margin-bottom: 24px;">Diagnostic détaillé + Programme de formation + Offre spéciale</p>
    <form id="email-form" style="display: flex; gap: 12px; max-width: 500px; margin: 0 auto; flex-wrap: wrap; justify-content: center;">
      <input type="email" id="user-email" placeholder="Votre email professionnel" required
        style="flex: 1; min-width: 250px; padding: 14px 20px; border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; font-size: 1rem; background: rgba(255,255,255,0.95);" />
      <button type="submit" class="btn btn-primary" style="background:#0B1B3A; color: #22c55e; border: none; padding: 14px 32px; font-weight: 700; cursor: pointer;">
        Recevoir mon rapport 🚀
      </button>
    </form>
    <p style="color:#0B1B3A; opacity: 0.8; font-size: 0.85rem; margin-top: 12px;">
      ✓ Gratuit • ✓ Aucun spam • ✓ Confidentiel
    </p>
  `;
  
  resultsHeader.insertAdjacentElement('afterend', emailCapture);
  
  document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('user-email').value;
    sendEmailReport(email, primaryCourse, diagnostic);
  });
}

// ========== SEND EMAIL REPORT ==========
function sendEmailReport(email, primaryCourse, diagnostic) {
  const course = COURSES_CATALOG[primaryCourse];
  const subject = `🎯 Votre Diagnostic DigiSchool Africa - Formation ${course.title}`;
  const body = `
Bonjour,

Merci d'avoir complété l'auto-évaluation DigiSchool Africa ! 🎉

📊 VOTRE PROFIL
${diagnostic.profile}

✅ VOS FORCES
${diagnostic.strengths.map(s => `• ${s}`).join('\n')}

📈 AXES DE PROGRÈS
${diagnostic.areas.map(a => `• ${a}`).join('\n')}

🎓 FORMATION RECOMMANDÉE PRIORITAIRE
${course.title}
${course.description}
Durée: ${course.duration}
Tarif: ${course.price}

👉 Pour vous inscrire: https://digischool.africa/b2c.html
📞 Contactez-nous: +225 05 05 11 11 02
📧 Email: contact@digischool.africa

À très bientôt !
L'équipe DigiSchool Africa
  `.trim();
  
  // Mailto fallback
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Confirmation
  alert(`✅ Votre rapport sera envoyé à ${email} dans quelques instants.\n\nVérifiez également votre dossier spam.`);
  
  // Track lead
  if (window.trackLead) {
    window.trackLead({
      email: email,
      source: 'assessment',
      course: course.id,
      timestamp: new Date().toISOString()
    });
  }
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
  
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('prev-btn').addEventListener('click', prevQuestion);
});
