/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — AUTO-ÉVALUATION V2.2.x-E                 ║
 * ║  SCORING ALGORITHMIQUE STRICT — ZÉRO INCOHÉRENCE              ║
 * ║  10-15 Questions Tracées → Diagnostic → Recommandations       ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolAssessmentV2 = {
  // État de l'évaluation
  state: {
    currentQuestion: 0,
    answers: {},
    scores: {
      S1_domaine: {},      // 60% - Domaine prioritaire
      S2_experience: 0,    // 20% - Niveau d'expérience
      S3_contexte: 0,      // 10% - Rôle actuel
      S4_objectif: 0       // 10% - Intention d'apprentissage
    },
    profile: {
      experienceLevel: null,
      primaryDomain: null,
      currentRole: null,
      learningObjective: null,
      timeAvailability: null,
      certificationInterest: false
    }
  },

  // Domaines disponibles (mapping strict)
  domains: {
    'gestion-projet': { name: 'Gestion de Projet (PMP)', formation: 'PMP', weight: 60 },
    'leadership': { name: 'Leadership & Management', formation: 'Leadership', weight: 60 },
    'data-analytics': { name: 'Data & Analytics', formation: 'Data Analytics', weight: 60 },
    'excel': { name: 'Excel / Bureautique Avancé', formation: 'Excel Avancé', weight: 60 },
    'powerbi': { name: 'Power BI / Visualisation', formation: 'Power BI', weight: 60 },
    'marketing': { name: 'Marketing Digital', formation: 'Marketing Digital', weight: 60 },
    'rh': { name: 'RH & Performance', formation: 'RH Moderne', weight: 60 },
    'digital': { name: 'Transformation Digitale', formation: 'Transformation Digitale', weight: 60 }
  },

  // Questions 10-15 (strict mapping)
  questions: [
    {
      id: 'Q1',
      category: 'S2_experience',
      text: "Quelle est votre expérience professionnelle totale ?",
      type: 'single',
      required: true,
      options: [
        { 
          value: 'debutant', 
          label: '0-2 ans : Je débute ma vie professionnelle', 
          score: { S2_experience: 10 },
          level: 'débutant'
        },
        { 
          value: 'intermediaire', 
          label: '3-5 ans : J\'ai une première expérience significative', 
          score: { S2_experience: 13 },
          level: 'intermédiaire'
        },
        { 
          value: 'confirme', 
          label: '6-10 ans : Je suis confirmé(e) dans mon domaine', 
          score: { S2_experience: 17 },
          level: 'confirmé'
        },
        { 
          value: 'expert', 
          label: 'Plus de 10 ans : Je suis expert(e)', 
          score: { S2_experience: 20 },
          level: 'expert'
        }
      ]
    },
    {
      id: 'Q2',
      category: 'S1_domaine',
      text: "Quel domaine professionnel vous intéresse EN PRIORITÉ ? (Choix unique - c'est votre objectif principal)",
      type: 'single',
      required: true,
      weight: 60,
      options: [
        { value: 'gestion-projet', label: 'Gestion de Projet / Pilotage de Projets', domain: 'gestion-projet' },
        { value: 'leadership', label: 'Leadership & Management d\'Équipe', domain: 'leadership' },
        { value: 'data-analytics', label: 'Data Analytics / Analyse de Données', domain: 'data-analytics' },
        { value: 'excel', label: 'Excel Avancé / Automatisation Bureautique', domain: 'excel' },
        { value: 'powerbi', label: 'Power BI / Tableaux de Bord', domain: 'powerbi' },
        { value: 'marketing', label: 'Marketing Digital / Communication', domain: 'marketing' },
        { value: 'rh', label: 'Ressources Humaines / Gestion RH', domain: 'rh' },
        { value: 'digital', label: 'Transformation Digitale / Innovation', domain: 'digital' }
      ]
    },
    {
      id: 'Q3',
      category: 'S3_contexte',
      text: "Quel est votre rôle professionnel actuel ?",
      type: 'single',
      required: true,
      options: [
        { 
          value: 'etudiant', 
          label: 'Étudiant(e) ou en recherche de premier emploi', 
          score: { S3_contexte: 2 },
          context: 'étudiant'
        },
        { 
          value: 'operationnel', 
          label: 'Collaborateur opérationnel / Technicien', 
          score: { S3_contexte: 5 },
          context: 'opérationnel'
        },
        { 
          value: 'manager', 
          label: 'Manager / Chef d\'équipe / Coordinateur', 
          score: { S3_contexte: 8 },
          context: 'manager'
        },
        { 
          value: 'direction', 
          label: 'Direction / Cadre supérieur / Entrepreneur', 
          score: { S3_contexte: 10 },
          context: 'direction'
        }
      ]
    },
    {
      id: 'Q4',
      category: 'S4_objectif',
      text: "Quel est votre objectif principal avec cette formation ?",
      type: 'single',
      required: true,
      options: [
        { 
          value: 'decouverte', 
          label: 'Découvrir un nouveau domaine pour enrichir mes compétences', 
          score: { S4_objectif: 3 },
          objective: 'découverte'
        },
        { 
          value: 'productivite', 
          label: 'Gagner en productivité immédiate dans mon poste actuel', 
          score: { S4_objectif: 5 },
          objective: 'productivité'
        },
        { 
          value: 'certification', 
          label: 'Obtenir une certification reconnue pour évoluer', 
          score: { S4_objectif: 8 },
          objective: 'certification'
        },
        { 
          value: 'reconversion', 
          label: 'Me reconvertir ou changer de domaine professionnel', 
          score: { S4_objectif: 10 },
          objective: 'reconversion'
        }
      ]
    },
    {
      id: 'Q5',
      category: 'S4_objectif',
      text: "Dans quel délai souhaitez-vous appliquer ces nouvelles compétences ?",
      type: 'single',
      required: true,
      options: [
        { value: 'immediat', label: 'Immédiatement (dans mon poste actuel)', score: { S4_objectif: 2 }, urgency: 'immédiate' },
        { value: '3mois', label: 'Dans les 3 prochains mois', score: { S4_objectif: 1.5 }, urgency: 'court terme' },
        { value: '6mois', label: 'Dans les 6 prochains mois', score: { S4_objectif: 1 }, urgency: 'moyen terme' },
        { value: 'longterme', label: 'À plus long terme (préparation)', score: { S4_objectif: 0.5 }, urgency: 'long terme' }
      ]
    },
    {
      id: 'Q6',
      category: 'S1_domaine',
      text: "Parmi ces compétences, lesquelles souhaitez-vous développer EN COMPLÉMENT ? (0 à 3 choix)",
      type: 'multiple',
      required: false,
      min: 0,
      max: 3,
      weight: 5,
      options: [
        { value: 'gestion-projet', label: 'Pilotage de projets', domain: 'gestion-projet' },
        { value: 'leadership', label: 'Management d\'équipe', domain: 'leadership' },
        { value: 'data-analytics', label: 'Analyse de données', domain: 'data-analytics' },
        { value: 'excel', label: 'Excel avancé', domain: 'excel' },
        { value: 'powerbi', label: 'Power BI', domain: 'powerbi' },
        { value: 'marketing', label: 'Marketing digital', domain: 'marketing' },
        { value: 'rh', label: 'Gestion RH', domain: 'rh' },
        { value: 'digital', label: 'Transformation digitale', domain: 'digital' }
      ]
    },
    {
      id: 'Q7',
      category: 'S3_contexte',
      text: "Comment allez-vous utiliser ces compétences ?",
      type: 'single',
      required: true,
      options: [
        { value: 'poste-actuel', label: 'Dans mon poste actuel', score: { S3_contexte: 2 }, usage: 'actuel' },
        { value: 'evolution', label: 'Pour une évolution interne', score: { S3_contexte: 1.5 }, usage: 'évolution' },
        { value: 'nouveau-poste', label: 'Pour un nouveau poste (externe)', score: { S3_contexte: 1 }, usage: 'externe' },
        { value: 'entrepreneuriat', label: 'Pour mon projet entrepreneurial', score: { S3_contexte: 2 }, usage: 'entrepreneuriat' }
      ]
    },
    {
      id: 'Q8',
      category: 'S2_experience',
      text: "Avez-vous déjà suivi des formations professionnelles certifiantes ?",
      type: 'single',
      required: true,
      options: [
        { value: 'aucune', label: 'Non, c\'est ma première', score: { S2_experience: 0 }, training_history: 'none' },
        { value: '1-2', label: 'Oui, 1 à 2 formations', score: { S2_experience: 2 }, training_history: 'some' },
        { value: '3-5', label: 'Oui, 3 à 5 formations', score: { S2_experience: 4 }, training_history: 'several' },
        { value: '5plus', label: 'Oui, plus de 5 formations', score: { S2_experience: 5 }, training_history: 'many' }
      ]
    },
    {
      id: 'Q9',
      category: 'S4_objectif',
      text: "Combien de temps pouvez-vous consacrer à votre formation par semaine ?",
      type: 'single',
      required: true,
      options: [
        { value: 'flexible', label: 'Moins de 5 heures (très flexible)', score: { S4_objectif: 0.5 }, time: 'flexible' },
        { value: 'modere', label: '5-10 heures (rythme modéré)', score: { S4_objectif: 1 }, time: 'modéré' },
        { value: 'intensif', label: '10-20 heures (rythme soutenu)', score: { S4_objectif: 1.5 }, time: 'intensif' },
        { value: 'immersif', label: 'Plus de 20 heures (immersion)', score: { S4_objectif: 2 }, time: 'immersif' }
      ]
    },
    {
      id: 'Q10',
      category: 'S1_domaine',
      text: "Souhaitez-vous utiliser l'Intelligence Artificielle dans votre travail ?",
      type: 'single',
      required: false,
      weight: 3,
      options: [
        { value: 'oui-priorite', label: 'Oui, c\'est une priorité', boost: { 'data-analytics': 3, 'digital': 3 } },
        { value: 'oui-interesse', label: 'Oui, je suis intéressé(e)', boost: { 'data-analytics': 1.5, 'digital': 1.5 } },
        { value: 'neutre', label: 'Neutre / Je ne sais pas encore', boost: {} },
        { value: 'non', label: 'Non, ce n\'est pas ma priorité', boost: {} }
      ]
    }
  ],

  // Formations avec metadata scoring
  formations: {
    'PMP': {
      id: 'gestion-projet',
      name: 'PMP - Gestion de Projet Professionnel',
      duration: '10 jours',
      level: ['intermédiaire', 'confirmé', 'expert'],
      domains: ['gestion-projet'],
      certification: true,
      description: 'Certification internationalement reconnue. Maîtrisez PMBOK 7, Agile, outils IA.'
    },
    'Leadership': {
      id: 'leadership',
      name: 'Leadership & Management',
      duration: '8 jours',
      level: ['intermédiaire', 'confirmé', 'expert'],
      domains: ['leadership'],
      certification: true,
      description: 'Développez vos compétences managériales et de leadership.'
    },
    'Data Analytics': {
      id: 'data-analytics',
      name: 'Data Analytics & Visualisation',
      duration: '10 jours',
      level: ['débutant', 'intermédiaire', 'confirmé'],
      domains: ['data-analytics'],
      certification: true,
      description: 'Python, SQL, Pandas, visualisation avancée.'
    },
    'Excel Avancé': {
      id: 'excel',
      name: 'Excel Avancé & Automatisation',
      duration: '6 jours',
      level: ['débutant', 'intermédiaire'],
      domains: ['excel'],
      certification: true,
      description: 'Formules avancées, VBA, Power Query.'
    },
    'Power BI': {
      id: 'powerbi',
      name: 'Power BI Expert & DAX',
      duration: '7 jours',
      level: ['intermédiaire', 'confirmé'],
      domains: ['powerbi', 'data-analytics'],
      certification: true,
      description: 'Créez des dashboards professionnels avec Power BI.'
    },
    'Marketing Digital': {
      id: 'marketing',
      name: 'Marketing Digital & Growth Hacking',
      duration: '9 jours',
      level: ['débutant', 'intermédiaire', 'confirmé'],
      domains: ['marketing'],
      certification: true,
      description: 'Stratégies digitales, SEO, Social Media, Ads.'
    },
    'Transformation Digitale': {
      id: 'digital',
      name: 'Transformation Digitale & Innovation',
      duration: '6 jours',
      level: ['confirmé', 'expert'],
      domains: ['digital'],
      certification: true,
      description: 'Pilotez la transformation digitale de votre organisation.'
    },
    'RH Moderne': {
      id: 'rh',
      name: 'Gestion RH Moderne & People Analytics',
      duration: '7 jours',
      level: ['intermédiaire', 'confirmé'],
      domains: ['rh'],
      certification: true,
      description: 'Modernisez vos pratiques RH avec le digital.'
    }
  },

  // Initialisation
  init() {
    this.renderQuestion();
    this.updateProgress();
    this.bindEvents();
  },

  // Rendu question
  renderQuestion() {
    const question = this.questions[this.state.currentQuestion];
    const container = document.getElementById('question-container');
    
    let html = `
      <div class="question-card animate-fade-in">
        <span class="question-number">Question ${this.state.currentQuestion + 1}/${this.questions.length}</span>
        ${question.required ? '<span class="required-badge">Obligatoire</span>' : '<span class="optional-badge">Optionnel</span>'}
        <h2 class="question-text">${question.text}</h2>
        <div class="answers" id="answers-container">
    `;

    if (question.type === 'single') {
      question.options.forEach((option) => {
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
      question.options.forEach((option) => {
        const checked = currentAnswers.includes(option.value) ? 'checked' : '';
        html += `
          <label class="answer-option ${checked ? 'selected' : ''}" data-question="${question.id}" data-value="${option.value}">
            <input type="checkbox" name="${question.id}" value="${option.value}" ${checked}>
            <span class="answer-label">${option.label}</span>
          </label>
        `;
      });
      html += `<p class="helper-text">Vous pouvez sélectionner ${question.min === 0 ? 'jusqu\'à' : question.min + ' à'} ${question.max} réponse(s)</p>`;
    }

    html += `</div></div>`;
    container.innerHTML = html;
    this.bindAnswerEvents();
  },

  // Bind answer events
  bindAnswerEvents() {
    const options = document.querySelectorAll('.answer-option');
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        const questionId = option.dataset.question;
        const value = option.dataset.value;
        const question = this.questions.find(q => q.id === questionId);
        
        if (question.type === 'single') {
          document.querySelectorAll(`[data-question="${questionId}"]`).forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('input').checked = false;
          });
          
          option.classList.add('selected');
          option.querySelector('input').checked = true;
          this.state.answers[questionId] = value;
        } else if (question.type === 'multiple') {
          const currentAnswers = this.state.answers[questionId] || [];
          const input = option.querySelector('input');
          
          if (input.checked) {
            input.checked = false;
            option.classList.remove('selected');
            this.state.answers[questionId] = currentAnswers.filter(v => v !== value);
          } else {
            if (currentAnswers.length < question.max) {
              input.checked = true;
              option.classList.add('selected');
              this.state.answers[questionId] = [...currentAnswers, value];
            } else {
              // Show non-blocking counter message
              const helperText = document.querySelector('.helper-text');
              if (helperText) {
                helperText.textContent = `Vous avez déjà sélectionné ${currentAnswers.length} réponses (maximum ${question.max})`;
                helperText.style.color = '#FF6B6B';
                setTimeout(() => {
                  helperText.textContent = `Vous pouvez sélectionner ${question.min === 0 ? 'jusqu\'à' : question.min + ' à'} ${question.max} réponse(s)`;
                  helperText.style.color = '';
                }, 2000);
              }
            }
          }
        }
        
        this.enableNavigation();
      });
    });
  },

  // Bind navigation
  bindEvents() {
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnSubmit = document.getElementById('btn-submit');

    if (btnNext) btnNext.addEventListener('click', () => this.nextQuestion());
    if (btnPrev) btnPrev.addEventListener('click', () => this.prevQuestion());
    if (btnSubmit) btnSubmit.addEventListener('click', () => this.submitAssessment());
  },

  // Enable navigation
  enableNavigation() {
    const question = this.questions[this.state.currentQuestion];
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');
    
    let isAnswered = false;
    
    if (question.type === 'single') {
      isAnswered = !!this.state.answers[question.id] || !question.required;
    } else if (question.type === 'multiple') {
      const answers = this.state.answers[question.id] || [];
      isAnswered = (answers.length >= question.min && answers.length <= question.max) || !question.required;
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  prevQuestion() {
    if (this.state.currentQuestion > 0) {
      this.state.currentQuestion--;
      this.renderQuestion();
      this.updateProgress();
      this.updateNavButtons();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  updateProgress() {
    const progress = ((this.state.currentQuestion + 1) / this.questions.length) * 100;
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) progressBar.style.width = `${progress}%`;
  },

  updateNavButtons() {
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');
    
    if (btnPrev) btnPrev.style.display = this.state.currentQuestion === 0 ? 'none' : 'block';
    
    const isLastQuestion = this.state.currentQuestion === this.questions.length - 1;
    if (btnNext) btnNext.style.display = isLastQuestion ? 'none' : 'block';
    if (btnSubmit) btnSubmit.style.display = isLastQuestion ? 'block' : 'none';
    
    this.enableNavigation();
  },

  // Soumission et calcul scoring STRICT
  submitAssessment() {
    this.calculateScores();
    this.generateRecommendations();
    this.displayResults();
  },

  // Calcul scores ALGORITHMIQUE
  calculateScores() {
    const { answers } = this.state;
    
    // Reset scores
    this.state.scores = {
      S1_domaine: {},
      S2_experience: 0,
      S3_contexte: 0,
      S4_objectif: 0
    };
    
    // Parcourir toutes les questions et accumuler scores
    this.questions.forEach(question => {
      const answer = answers[question.id];
      if (!answer) return;
      
      if (question.type === 'single') {
        const selectedOption = question.options.find(opt => opt.value === answer);
        if (!selectedOption) return;
        
        // Appliquer scores
        if (selectedOption.score) {
          Object.keys(selectedOption.score).forEach(scoreKey => {
            this.state.scores[scoreKey] += selectedOption.score[scoreKey];
          });
        }
        
        // S1 Domaine prioritaire (Q2)
        if (question.id === 'Q2' && selectedOption.domain) {
          this.state.scores.S1_domaine[selectedOption.domain] = (this.state.scores.S1_domaine[selectedOption.domain] || 0) + 60;
          this.state.profile.primaryDomain = selectedOption.domain;
        }
        
        // Q10 IA boost
        if (question.id === 'Q10' && selectedOption.boost) {
          Object.keys(selectedOption.boost).forEach(domain => {
            this.state.scores.S1_domaine[domain] = (this.state.scores.S1_domaine[domain] || 0) + selectedOption.boost[domain];
          });
        }
        
        // Profil metadata
        if (selectedOption.level) this.state.profile.experienceLevel = selectedOption.level;
        if (selectedOption.context) this.state.profile.currentRole = selectedOption.context;
        if (selectedOption.objective) this.state.profile.learningObjective = selectedOption.objective;
        if (selectedOption.time) this.state.profile.timeAvailability = selectedOption.time;
        
      } else if (question.type === 'multiple') {
        // Q6 domaines complémentaires
        if (question.id === 'Q6' && Array.isArray(answer)) {
          answer.forEach(val => {
            const opt = question.options.find(o => o.value === val);
            if (opt && opt.domain) {
              this.state.scores.S1_domaine[opt.domain] = (this.state.scores.S1_domaine[opt.domain] || 0) + 5;
            }
          });
        }
      }
    });
    
    console.log('Scores calculés:', this.state.scores);
    console.log('Profil:', this.state.profile);
  },

  // Générer recommandations STRICTES
  generateRecommendations() {
    const { scores, profile } = this.state;
    
    // Tri domaines par score
    const sortedDomains = Object.entries(scores.S1_domaine)
      .sort((a, b) => b[1] - a[1])
      .map(([domain, score]) => ({ domain, score }));
    
    console.log('Domaines triés:', sortedDomains);
    
    // Construire recommandations
    this.state.recommendedFormations = [];
    
    sortedDomains.forEach(({ domain, score }, index) => {
      // Trouver formation matching
      const formation = Object.values(this.formations).find(f => f.id === domain);
      if (formation && score > 0) {
        this.state.recommendedFormations.push({
          ...formation,
          score,
          priority: index === 0 ? 'PRIORITÉ' : (index === 1 ? 'COMPLÉMENTAIRE' : 'AUSSI INTÉRESSANT')
        });
      }
    });
    
    console.log('Recommandations:', this.state.recommendedFormations);
  },

  // Affichage résultats avec diagnostic TRACÉ
  displayResults() {
    const container = document.getElementById('question-container');
    const { profile, scores, recommendedFormations } = this.state;
    
    let diagnostic = this.generateTracedDiagnostic();
    
    let html = `
      <div class="results-container animate-fade-in">
        <div class="results-header text-center mb-12">
          <h1 class="text-gradient">Votre Profil DigiSchool Africa</h1>
          <p class="text-lead">Diagnostic personnalisé basé sur vos 10 réponses</p>
        </div>
        
        <div class="ds-card mb-8">
          <h2 class="mb-4">📊 Votre Diagnostic (100% Tracé)</h2>
          ${diagnostic}
        </div>
        
        <div class="ds-card mb-8">
          <h2 class="mb-6">🎯 Vos Formations Recommandées</h2>
          <div class="formations-grid">
    `;
    
    recommendedFormations.slice(0, 6).forEach((formation, index) => {
      // Icon SVG based on priority (no emojis)
      const priorityIcon = index === 0 ? 
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' : 
        (index === 1 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#26A69A" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' : 
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>');
      
      html += `
        <div class="ds-card-formation">
          <span class="formation-priority">${priorityIcon} ${formation.priority}</span>
          <h3>${formation.name}</h3>
          <p class="formation-duration">${formation.duration}</p>
          <p class="formation-description">${formation.description}</p>
          <a href="/b2c.html?formation=${encodeURIComponent(formation.id)}" class="ds-btn ds-btn-primary mt-4">
            Découvrir →
          </a>
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button onclick="DigiSchoolEmailCapture.openModal(DigiSchoolAssessmentV2.state)" class="ds-btn ds-btn-primary ds-btn-lg" style="margin-right: 12px;">
            📧 Recevoir mon rapport complet par email
          </button>
          <a href="/b2c.html" class="ds-btn ds-btn-secondary ds-btn-lg" style="margin-right: 12px;">
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

  // Diagnostic TRACÉ (chaque phrase = réponse)
  generateTracedDiagnostic() {
    const { profile, scores } = this.state;
    
    let html = '<div class="diagnostic-traced">';
    
    // S2 Expérience
    const experienceLabels = {
      'débutant': 'Vous débutez votre parcours professionnel',
      'intermédiaire': 'Vous avez une première expérience significative',
      'confirmé': 'Vous êtes un professionnel confirmé',
      'expert': 'Vous êtes un expert dans votre domaine'
    };
    html += `<p><strong>Niveau d'expérience:</strong> ${experienceLabels[profile.experienceLevel] || 'Non renseigné'} </p>`;
    
    // S1 Domaine prioritaire
    const primaryDomain = this.domains[profile.primaryDomain];
    if (primaryDomain) {
      html += `<p><strong>Domaine prioritaire:</strong> ${primaryDomain.name} </p>`;
    }
    
    // S3 Contexte
    const contextLabels = {
      'étudiant': 'Vous êtes en début de carrière',
      'opérationnel': 'Vous occupez un poste opérationnel',
      'manager': 'Vous êtes en position de management',
      'direction': 'Vous êtes en position de direction'
    };
    if (profile.currentRole) {
      html += `<p><strong>Rôle actuel:</strong> ${contextLabels[profile.currentRole] || profile.currentRole} </p>`;
    }
    
    // S4 Objectif
    const objectiveLabels = {
      'découverte': 'Vous souhaitez découvrir un nouveau domaine',
      'productivité': 'Vous cherchez à gagner en productivité immédiate',
      'certification': 'Vous visez une certification reconnue',
      'reconversion': 'Vous envisagez une reconversion professionnelle'
    };
    if (profile.learningObjective) {
      html += `<p><strong>Objectif:</strong> ${objectiveLabels[profile.learningObjective] || profile.learningObjective} </p>`;
    }
    
    // Score total indicatif
    
    
    
    html += '</div>';
    
    return html;
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  document.body.setAttribute('data-page', 'assessment');
  if (document.getElementById('question-container')) {
    DigiSchoolAssessmentV2.init();
  }
});
