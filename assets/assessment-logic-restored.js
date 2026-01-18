/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — AUTO-ÉVALUATION LOGIQUE RESTAURÉE        ║
 * ║  Version: V2.2.x-D RESTORATION                                ║
 * ║  RÈGLE ABSOLUE: Questions → Diagnostic TRAÇABLE               ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolAssessment = {
  // État de l'évaluation
  state: {
    currentQuestion: 0,
    answers: {},
    profile: {
      experienceLevel: null,      // débutant | intermédiaire | avancé
      functionalInterest: [],     // Array des domaines choisis
      usageContext: null,          // opérationnel | managérial | stratégique
      learningIntent: null,        // découverte | montée_compétences | certification
      currentRole: null,           // Rôle actuel
      timeAvailable: null          // Temps disponible
    }
  },

  // Questions RESTRUCTURÉES pour traçabilité
  questions: [
    {
      id: 'Q1',
      category: 'experience_level',
      text: "Quel est votre niveau d'expérience professionnelle actuel ?",
      type: 'single',
      options: [
        { value: 'débutant', label: '0-2 ans : Je débute ma carrière', weight: 'beginner' },
        { value: 'intermédiaire', label: '3-5 ans : J\'ai une première expérience', weight: 'intermediate' },
        { value: 'confirmé', label: '6-10 ans : Je suis confirmé(e)', weight: 'advanced' },
        { value: 'expert', label: '+10 ans : Je suis expert(e)', weight: 'expert' }
      ]
    },
    {
      id: 'Q2',
      category: 'functional_interest',
      text: "Quels domaines professionnels vous intéressent le PLUS ? (Sélectionnez 1 à 3 choix)",
      type: 'multiple',
      min: 1,
      max: 3,
      options: [
        { value: 'gestion_projet', label: 'Gestion de Projet / PMP', formation: 'PMP' },
        { value: 'data', label: 'Analyse de Données / Data Analytics', formation: 'Data Analytics' },
        { value: 'excel', label: 'Excel Avancé / Automatisation', formation: 'Excel Avancé' },
        { value: 'powerbi', label: 'Power BI / Visualisation', formation: 'Power BI' },
        { value: 'leadership', label: 'Leadership & Management', formation: 'Leadership' },
        { value: 'marketing', label: 'Marketing Digital', formation: 'Marketing Digital' },
        { value: 'rh', label: 'Ressources Humaines', formation: 'RH Moderne' },
        { value: 'digital', label: 'Transformation Digitale', formation: 'Transformation Digitale' }
      ]
    },
    {
      id: 'Q3',
      category: 'current_role',
      text: "Quel est votre contexte professionnel actuel ?",
      type: 'single',
      options: [
        { value: 'étudiant', label: 'Étudiant(e) ou en recherche de premier emploi', weight: 'beginner' },
        { value: 'opérationnel', label: 'Collaborateur opérationnel', weight: 'intermediate' },
        { value: 'manager', label: 'Manager / Chef d\'équipe', weight: 'advanced' },
        { value: 'direction', label: 'Direction / Cadre supérieur', weight: 'expert' }
      ]
    },
    {
      id: 'Q4',
      category: 'learning_intent',
      text: "Quel est votre objectif principal de formation ?",
      type: 'single',
      options: [
        { value: 'découverte', label: 'Découvrir un nouveau domaine', weight: 'discovery' },
        { value: 'approfondissement', label: 'Approfondir mes compétences actuelles', weight: 'upskilling' },
        { value: 'certification', label: 'Obtenir une certification reconnue', weight: 'certification' },
        { value: 'reconversion', label: 'Me reconvertir professionnellement', weight: 'conversion' }
      ]
    },
    {
      id: 'Q5',
      category: 'usage_context',
      text: "Dans quel contexte allez-vous utiliser ces compétences ?",
      type: 'single',
      options: [
        { value: 'application_immédiate', label: 'Application immédiate dans mon poste actuel', context: 'immediate' },
        { value: 'évolution_interne', label: 'Évolution de poste dans mon entreprise', context: 'internal' },
        { value: 'recherche_emploi', label: 'Recherche d\'un nouvel emploi', context: 'external' },
        { value: 'projet_personnel', label: 'Projet personnel / entrepreneuriat', context: 'personal' }
      ]
    },
    {
      id: 'Q6',
      category: 'time_available',
      text: "Combien de temps pouvez-vous consacrer à une formation par semaine ?",
      type: 'single',
      options: [
        { value: 'flexible', label: 'Moins de 5 heures (format flexible)', intensity: 'light' },
        { value: 'modéré', label: '5-10 heures (rythme modéré)', intensity: 'moderate' },
        { value: 'intensif', label: '10-20 heures (rythme intensif)', intensity: 'intensive' },
        { value: 'immersif', label: 'Plus de 20 heures (immersion totale)', intensity: 'immersive' }
      ]
    },
    {
      id: 'Q7',
      category: 'prior_training',
      text: "Avez-vous déjà suivi des formations professionnelles certifiantes ?",
      type: 'single',
      options: [
        { value: 'jamais', label: 'Non, c\'est ma première formation certifiante', experience: 'none' },
        { value: 'quelques', label: 'Oui, 1 à 2 formations', experience: 'some' },
        { value: 'plusieurs', label: 'Oui, 3 à 5 formations', experience: 'several' },
        { value: 'nombreuses', label: 'Oui, plus de 5 formations', experience: 'many' }
      ]
    },
    {
      id: 'Q8',
      category: 'learning_style',
      text: "Comment préférez-vous apprendre ?",
      type: 'single',
      options: [
        { value: 'théorie', label: 'Théorie d\'abord, puis pratique', style: 'theory' },
        { value: 'pratique', label: 'Pratique immédiate avec cas concrets', style: 'practice' },
        { value: 'mixte', label: 'Alternance théorie et pratique', style: 'mixed' },
        { value: 'projet', label: 'Apprentissage par projet complet', style: 'project' }
      ]
    }
  ],

  // Formations disponibles avec scoring
  formations: {
    'PMP': {
      name: 'PMP - Gestion de Projet Professionnel',
      duration: '10 jours',
      level: ['intermédiaire', 'avancé', 'expert'],
      keywords: ['gestion_projet', 'manager', 'direction', 'certification'],
      description: 'Certification internationalement reconnue en gestion de projet'
    },
    'Leadership': {
      name: 'Leadership & Management',
      duration: '8 jours',
      level: ['intermédiaire', 'avancé', 'expert'],
      keywords: ['leadership', 'manager', 'direction', 'approfondissement'],
      description: 'Développez vos compétences managériales et de leadership'
    },
    'Data Analytics': {
      name: 'Data Analytics & Visualisation',
      duration: '10 jours',
      level: ['débutant', 'intermédiaire', 'avancé'],
      keywords: ['data', 'opérationnel', 'manager', 'découverte', 'approfondissement'],
      description: 'Maîtrisez l\'analyse de données et la visualisation'
    },
    'Excel Avancé': {
      name: 'Excel Avancé & Automatisation',
      duration: '6 jours',
      level: ['débutant', 'intermédiaire'],
      keywords: ['excel', 'opérationnel', 'application_immédiate'],
      description: 'Devenez expert Excel avec automatisation VBA'
    },
    'Power BI': {
      name: 'Power BI Expert & DAX',
      duration: '7 jours',
      level: ['intermédiaire', 'avancé'],
      keywords: ['powerbi', 'data', 'opérationnel', 'manager'],
      description: 'Créez des dashboards professionnels avec Power BI'
    },
    'Marketing Digital': {
      name: 'Marketing Digital & Growth Hacking',
      duration: '9 jours',
      level: ['débutant', 'intermédiaire', 'avancé'],
      keywords: ['marketing', 'opérationnel', 'manager', 'projet_personnel'],
      description: 'Maîtrisez le marketing digital et les stratégies de croissance'
    },
    'Transformation Digitale': {
      name: 'Transformation Digitale & Innovation',
      duration: '6 jours',
      level: ['avancé', 'expert'],
      keywords: ['digital', 'direction', 'manager', 'certification'],
      description: 'Pilotez la transformation digitale de votre organisation'
    },
    'RH Moderne': {
      name: 'Gestion RH Moderne & People Analytics',
      duration: '7 jours',
      level: ['intermédiaire', 'avancé'],
      keywords: ['rh', 'manager', 'direction', 'approfondissement'],
      description: 'Modernisez vos pratiques RH avec le digital'
    },
    'PowerPoint Expert': {
      name: 'PowerPoint Expert & Storytelling Visuel',
      duration: '4 jours',
      level: ['débutant', 'intermédiaire'],
      keywords: ['opérationnel', 'manager', 'application_immédiate'],
      description: 'Créez des présentations impactantes et professionnelles'
    }
  },

  // Initialisation
  init() {
    this.renderQuestion();
    this.updateProgress();
    this.bindEvents();
  },

  // Rendu de la question
  renderQuestion() {
    const question = this.questions[this.state.currentQuestion];
    const container = document.getElementById('question-container');
    
    let html = `
      <div class="question-card animate-fade-in">
        <span class="question-number">Question ${this.state.currentQuestion + 1}/${this.questions.length}</span>
        <h2 class="question-text">${question.text}</h2>
        <div class="answers" id="answers-container">
    `;

    if (question.type === 'single') {
      question.options.forEach((option, index) => {
        const checked = this.state.answers[question.id] === option.value ? 'checked' : '';
        html += `
          <label class="answer-option ${checked ? 'selected' : ''}" data-question="${question.id}" data-value="${option.value}">
            <input type="radio" name="${question.id}" value="${option.value}" ${checked}>
            <span class="answer-label">${option.label}</span>
          </label>
        `;
      });
    } else if (question.type === 'multiple') {
      const currentAnswers = this.state.answers[question.id] || [];
      question.options.forEach((option, index) => {
        const checked = currentAnswers.includes(option.value) ? 'checked' : '';
        html += `
          <label class="answer-option ${checked ? 'selected' : ''}" data-question="${question.id}" data-value="${option.value}">
            <input type="checkbox" name="${question.id}" value="${option.value}" ${checked}>
            <span class="answer-label">${option.label}</span>
          </label>
        `;
      });
      html += `<p class="helper-text">Sélectionnez ${question.min} à ${question.max} réponse(s)</p>`;
    }

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.bindAnswerEvents();
  },

  // Bind events sur les réponses
  bindAnswerEvents() {
    const options = document.querySelectorAll('.answer-option');
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        const questionId = option.dataset.question;
        const value = option.dataset.value;
        const question = this.questions.find(q => q.id === questionId);
        
        if (question.type === 'single') {
          // Désélectionner toutes les autres options
          document.querySelectorAll(`[data-question="${questionId}"]`).forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('input').checked = false;
          });
          
          // Sélectionner cette option
          option.classList.add('selected');
          option.querySelector('input').checked = true;
          this.state.answers[questionId] = value;
        } else if (question.type === 'multiple') {
          const currentAnswers = this.state.answers[questionId] || [];
          const input = option.querySelector('input');
          
          if (input.checked) {
            // Décocher
            input.checked = false;
            option.classList.remove('selected');
            this.state.answers[questionId] = currentAnswers.filter(v => v !== value);
          } else {
            // Cocher (si max pas atteint)
            if (currentAnswers.length < question.max) {
              input.checked = true;
              option.classList.add('selected');
              this.state.answers[questionId] = [...currentAnswers, value];
            } else {
              alert(`Vous ne pouvez sélectionner que ${question.max} réponse(s) maximum.`);
            }
          }
        }
        
        this.enableNavigation();
      });
    });
  },

  // Bind navigation events
  bindEvents() {
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnSubmit = document.getElementById('btn-submit');

    if (btnNext) {
      btnNext.addEventListener('click', () => this.nextQuestion());
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => this.prevQuestion());
    }

    if (btnSubmit) {
      btnSubmit.addEventListener('click', () => this.submitAssessment());
    }
  },

  // Enable/disable navigation based on answers
  enableNavigation() {
    const question = this.questions[this.state.currentQuestion];
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');
    
    let isAnswered = false;
    
    if (question.type === 'single') {
      isAnswered = !!this.state.answers[question.id];
    } else if (question.type === 'multiple') {
      const answers = this.state.answers[question.id] || [];
      isAnswered = answers.length >= question.min && answers.length <= question.max;
    }
    
    if (btnNext) btnNext.disabled = !isAnswered;
    if (btnSubmit) btnSubmit.disabled = !isAnswered;
  },

  // Navigation
  nextQuestion() {
    if (this.state.currentQuestion < this.questions.length - 1) {
      this.state.currentQuestion++;
      this.renderQuestion();
      this.updateProgress();
      this.updateNavButtons();
    }
  },

  prevQuestion() {
    if (this.state.currentQuestion > 0) {
      this.state.currentQuestion--;
      this.renderQuestion();
      this.updateProgress();
      this.updateNavButtons();
    }
  },

  updateProgress() {
    const progress = ((this.state.currentQuestion + 1) / this.questions.length) * 100;
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  },

  updateNavButtons() {
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');
    
    if (btnPrev) {
      btnPrev.style.display = this.state.currentQuestion === 0 ? 'none' : 'block';
    }
    
    const isLastQuestion = this.state.currentQuestion === this.questions.length - 1;
    if (btnNext) {
      btnNext.style.display = isLastQuestion ? 'none' : 'block';
    }
    if (btnSubmit) {
      btnSubmit.style.display = isLastQuestion ? 'block' : 'none';
    }
    
    this.enableNavigation();
  },

  // Soumission et analyse
  submitAssessment() {
    this.analyzeProfile();
    this.generateRecommendations();
    this.displayResults();
  },

  // Analyser le profil à partir des réponses
  analyzeProfile() {
    const { answers } = this.state;
    
    // Q1: Niveau d'expérience
    const q1 = this.questions[0].options.find(opt => opt.value === answers['Q1']);
    this.state.profile.experienceLevel = q1 ? q1.weight : 'beginner';
    
    // Q2: Intérêts fonctionnels (multiple)
    this.state.profile.functionalInterest = answers['Q2'] || [];
    
    // Q3: Rôle actuel
    this.state.profile.currentRole = answers['Q3'];
    
    // Q4: Intention d'apprentissage
    this.state.profile.learningIntent = answers['Q4'];
    
    // Q5: Contexte d'usage
    this.state.profile.usageContext = answers['Q5'];
    
    // Q6: Temps disponible
    this.state.profile.timeAvailable = answers['Q6'];
  },

  // Générer recommandations avec scoring
  generateRecommendations() {
    const { profile } = this.state;
    const scores = {};
    
    // Calculer score pour chaque formation
    Object.keys(this.formations).forEach(formationKey => {
      const formation = this.formations[formationKey];
      let score = 0;
      
      // +3 points si niveau correspond
      if (formation.level.includes(profile.experienceLevel)) {
        score += 3;
      }
      
      // +5 points par keyword matching
      formation.keywords.forEach(keyword => {
        if (profile.functionalInterest.includes(keyword)) score += 5;
        if (keyword === profile.currentRole) score += 4;
        if (keyword === profile.learningIntent) score += 4;
        if (keyword === profile.usageContext) score += 3;
      });
      
      scores[formationKey] = score;
    });
    
    // Trier par score
    this.state.recommendedFormations = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .filter(([key, score]) => score > 0)
      .map(([key, score]) => ({
        key,
        ...this.formations[key],
        score
      }));
  },

  // Afficher les résultats
  displayResults() {
    const container = document.getElementById('question-container');
    const { profile, recommendedFormations } = this.state;
    
    // Générer diagnostic textuel BASÉ SUR LES RÉPONSES
    let diagnostic = this.generateDiagnostic();
    
    let html = `
      <div class="results-container animate-fade-in">
        <div class="results-header text-center mb-12">
          <h1 class="text-gradient">Votre Profil DigiSchool Africa</h1>
          <p class="text-lead">Voici vos recommandations personnalisées basées sur vos réponses</p>
        </div>
        
        <div class="ds-card mb-8">
          <h2 class="mb-4">📊 Votre Diagnostic</h2>
          <div class="diagnostic-text">
            ${diagnostic}
          </div>
        </div>
        
        <div class="ds-card mb-8">
          <h2 class="mb-6">🎯 Formations Recommandées (par ordre de pertinence)</h2>
          <div class="formations-grid ds-grid ds-grid-2">
    `;
    
    recommendedFormations.slice(0, 6).forEach((formation, index) => {
      const priority = index === 0 ? '🥇 PRIORITÉ' : (index === 1 ? '🥈 COMPLÉMENTAIRE' : '🥉 AUSSI INTÉRESSANT');
      html += `
        <div class="ds-card-formation">
          <span class="formation-priority">${priority}</span>
          <h3>${formation.name}</h3>
          <p class="formation-duration">⏱️ ${formation.duration}</p>
          <p class="formation-description">${formation.description}</p>
          <a href="/b2c.html?formation=${encodeURIComponent(formation.key)}" class="ds-btn ds-btn-primary mt-4">
            Découvrir cette formation →
          </a>
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="/b2c.html" class="ds-btn ds-btn-primary ds-btn-lg">
            Explorer toutes les formations
          </a>
          <button onclick="location.reload()" class="ds-btn ds-btn-secondary ds-btn-lg">
            Refaire l'évaluation
          </button>
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  },

  // Générer diagnostic textuel LOGIQUE
  generateDiagnostic() {
    const { profile, answers } = this.state;
    let text = '<ul class="diagnostic-list">';
    
    // Niveau d'expérience
    const experienceLabels = {
      'beginner': 'Vous débutez votre parcours professionnel',
      'intermediate': 'Vous avez une première expérience significative',
      'advanced': 'Vous êtes un professionnel confirmé',
      'expert': 'Vous êtes un expert dans votre domaine'
    };
    text += `<li><strong>Expérience:</strong> ${experienceLabels[profile.experienceLevel] || 'Non déterminé'}</li>`;
    
    // Intérêts
    if (profile.functionalInterest.length > 0) {
      const interestLabels = {
        'gestion_projet': 'Gestion de Projet',
        'data': 'Data Analytics',
        'excel': 'Excel',
        'powerbi': 'Power BI',
        'leadership': 'Leadership',
        'marketing': 'Marketing Digital',
        'rh': 'RH',
        'digital': 'Transformation Digitale'
      };
      const interests = profile.functionalInterest.map(i => interestLabels[i] || i).join(', ');
      text += `<li><strong>Domaines d'intérêt:</strong> ${interests}</li>`;
    }
    
    // Contexte
    const contextLabels = {
      'étudiant': 'Vous êtes en début de carrière',
      'opérationnel': 'Vous travaillez en tant que collaborateur opérationnel',
      'manager': 'Vous occupez un poste de management',
      'direction': 'Vous êtes en position de direction'
    };
    if (profile.currentRole) {
      text += `<li><strong>Contexte actuel:</strong> ${contextLabels[profile.currentRole] || profile.currentRole}</li>`;
    }
    
    // Objectif
    const intentLabels = {
      'découverte': 'Vous souhaitez découvrir de nouveaux domaines',
      'approfondissement': 'Vous voulez approfondir vos compétences actuelles',
      'certification': 'Vous visez une certification professionnelle',
      'reconversion': 'Vous envisagez une reconversion professionnelle'
    };
    if (profile.learningIntent) {
      text += `<li><strong>Objectif:</strong> ${intentLabels[profile.learningIntent] || profile.learningIntent}</li>`;
    }
    
    text += '</ul>';
    
    return text;
  }
};

// Auto-initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Marquer la page comme assessment pour le chatbot
  document.body.setAttribute('data-page', 'assessment');
  
  // Initialiser l'évaluation
  if (document.getElementById('question-container')) {
    DigiSchoolAssessment.init();
  }
});
