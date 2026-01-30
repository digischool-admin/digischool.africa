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
    },
    {
      id: 'Q11',
      category: 'S3_contexte',
      text: "Dans quel secteur d'activité évoluez-vous ou souhaitez-vous évoluer ?",
      type: 'single',
      required: true,
      options: [
        { value: 'tech', label: 'Technologie & Télécoms', score: { S3_contexte: 1 }, sector: 'tech' },
        { value: 'finance', label: 'Banque, Finance & Assurance', score: { S3_contexte: 1 }, sector: 'finance' },
        { value: 'industrie', label: 'Industrie & Manufacturing', score: { S3_contexte: 1 }, sector: 'industrie' },
        { value: 'services', label: 'Services & Conseil', score: { S3_contexte: 1 }, sector: 'services' },
        { value: 'public', label: 'Secteur Public & ONG', score: { S3_contexte: 1 }, sector: 'public' },
        { value: 'commerce', label: 'Commerce & Distribution', score: { S3_contexte: 1 }, sector: 'commerce' },
        { value: 'sante', label: 'Santé & Pharmaceutique', score: { S3_contexte: 1 }, sector: 'santé' },
        { value: 'autre', label: 'Autre secteur', score: { S3_contexte: 1 }, sector: 'autre' }
      ]
    },
    {
      id: 'Q12',
      category: 'S3_contexte',
      text: "Quelle est la taille de votre organisation ?",
      type: 'single',
      required: true,
      options: [
        { value: 'tpe', label: 'TPE (1-10 personnes)', score: { S3_contexte: 0.5 }, size: 'tpe' },
        { value: 'pme', label: 'PME (11-250 personnes)', score: { S3_contexte: 1 }, size: 'pme' },
        { value: 'eti', label: 'ETI (251-5000 personnes)', score: { S3_contexte: 1.5 }, size: 'eti' },
        { value: 'grande', label: 'Grande entreprise (5000+ personnes)', score: { S3_contexte: 2 }, size: 'grande' },
        { value: 'independant', label: 'Indépendant / Freelance', score: { S3_contexte: 0.5 }, size: 'indépendant' }
      ]
    },
    {
      id: 'Q13',
      category: 'S4_objectif',
      text: "Quel est votre horizon professionnel à 12-24 mois ?",
      type: 'single',
      required: true,
      options: [
        { value: 'stabilite', label: 'Consolider mon poste actuel', score: { S4_objectif: 0.5 }, horizon: 'stabilité' },
        { value: 'promotion', label: 'Obtenir une promotion interne', score: { S4_objectif: 1 }, horizon: 'promotion' },
        { value: 'mobilite', label: 'Changer d\'entreprise (même niveau)', score: { S4_objectif: 1 }, horizon: 'mobilité' },
        { value: 'management', label: 'Accéder à un poste managérial', score: { S4_objectif: 1.5 }, horizon: 'management' },
        { value: 'direction', label: 'Rejoindre un comité de direction', score: { S4_objectif: 2 }, horizon: 'direction' },
        { value: 'entrepreneuriat', label: 'Lancer mon entreprise / projet', score: { S4_objectif: 2 }, horizon: 'entrepreneuriat' }
      ]
    },
    {
      id: 'Q14',
      category: 'S2_experience',
      text: "Avez-vous déjà managé ou piloté des équipes ?",
      type: 'single',
      required: true,
      options: [
        { value: 'jamais', label: 'Non, jamais', score: { S2_experience: 0 }, management: 'none' },
        { value: 'ponctuel', label: 'Oui, de manière ponctuelle', score: { S2_experience: 1 }, management: 'ponctuel' },
        { value: 'regulier', label: 'Oui, régulièrement (1-5 personnes)', score: { S2_experience: 2 }, management: 'petit' },
        { value: 'equipe', label: 'Oui, je manage une équipe (6-20 personnes)', score: { S2_experience: 3 }, management: 'moyen' },
        { value: 'multi-equipes', label: 'Oui, je manage plusieurs équipes (20+ personnes)', score: { S2_experience: 4 }, management: 'large' }
      ]
    },
    {
      id: 'Q15',
      category: 'S4_objectif',
      text: "Quelle est votre ambition professionnelle à 3-5 ans ?",
      type: 'single',
      required: true,
      options: [
        { value: 'expert-metier', label: 'Devenir expert reconnu dans mon métier', score: { S4_objectif: 1 }, ambition: 'expertise' },
        { value: 'manager-senior', label: 'Devenir manager senior / directeur', score: { S4_objectif: 1.5 }, ambition: 'management' },
        { value: 'direction-generale', label: 'Accéder à la direction générale', score: { S4_objectif: 2 }, ambition: 'direction' },
        { value: 'entrepreneur', label: 'Créer et développer mon entreprise', score: { S4_objectif: 2 }, ambition: 'entrepreneuriat' },
        { value: 'consultant', label: 'Devenir consultant indépendant', score: { S4_objectif: 1 }, ambition: 'conseil' },
        { value: 'portfolio', label: 'Diversifier mes activités (portfolio carrière)', score: { S4_objectif: 1 }, ambition: 'portfolio' }
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
      html += `<p class="helper-text" id="counter-${question.id}">Sélectionnez jusqu'à ${question.max} réponse(s) • <strong>0/${question.max} sélectionné(s)</strong></p>`;
    }

    html += `</div></div>`;
    container.innerHTML = html;
    
    // Initialize counter for multiple choice
    if (question.type === 'multiple') {
      const currentAnswers = this.state.answers[question.id] || [];
      this.updateMultipleCounter(question.id, currentAnswers.length, question.max);
    }
    
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
            // Deselect
            input.checked = false;
            option.classList.remove('selected');
            this.state.answers[questionId] = currentAnswers.filter(v => v !== value);
            
            // Update counter
            const newCount = currentAnswers.length - 1;
            this.updateMultipleCounter(questionId, newCount, question.max);
            
            // Re-enable all options when deselecting
            document.querySelectorAll(`[data-question="${questionId}"]`).forEach(opt => {
              opt.classList.remove('disabled');
              opt.style.opacity = '1';
              opt.style.cursor = 'pointer';
            });
          } else {
            if (currentAnswers.length < question.max) {
              input.checked = true;
              option.classList.add('selected');
              this.state.answers[questionId] = [...currentAnswers, value];
              
              // Update counter
              const newCount = currentAnswers.length + 1;
              this.updateMultipleCounter(questionId, newCount, question.max);
              
              // Disable other options if max reached
              if (newCount >= question.max) {
                document.querySelectorAll(`[data-question="${questionId}"]`).forEach(opt => {
                  if (!opt.classList.contains('selected')) {
                    opt.classList.add('disabled');
                    opt.style.opacity = '0.5';
                    opt.style.cursor = 'not-allowed';
                  }
                });
              }
            } else {
              // Show toast notification (non-blocking)
              this.showToast(`Maximum ${question.max} choix`);
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

  // Affichage résultats REFACTORÉ (NUCLEAR EXECUTION)
  displayResults() {
    const container = document.getElementById('question-container');
    const { recommendedFormations } = this.state;
    
    // Generate expert report and store in localStorage
    this.generateAndStoreExpertReport();
    
    let html = `
      <div class="results-container animate-fade-in">
        <div class="results-header text-center mb-12">
          <h1 class="text-gradient">Vos recommandations de formation</h1>
          <p class="text-lead">Formations sélectionnées selon votre profil</p>
        </div>
        
        <div class="ds-card mb-8">
          <h2 class="mb-6">Formations recommandées</h2>
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
          <a href="/b2c.html" class="btn btn-primary btn-lg" style="margin-right: 16px; display: inline-block;">
            Passer commande
          </a>
          
          <div class="email-capture-block" style="display: block; margin-top: 24px; max-width: 600px; margin-left: auto; margin-right: auto;">
            <h3 style="margin-bottom: 16px; color: #1E88E5;">Recevoir mon rapport détaillé par email</h3>
            <div style="display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap;">
              <input type="email" id="email-capture" placeholder="Votre email professionnel" style="padding: 14px 18px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 16px; width: 320px;" />
              <button onclick="DigiSchoolAssessmentV2.sendExpertReport()" class="btn btn-primary btn-lg">
                Envoyer le rapport
              </button>
            </div>
            <p style="margin-top: 12px; font-size: 14px; color: #666; font-style: italic;">Profiling expert • Plan 30/60/90 jours • Matrice de compétences</p>
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  },

  // Update multiple choice counter
  updateMultipleCounter(questionId, currentCount, maxCount) {
    const counter = document.getElementById(`counter-${questionId}`);
    if (counter) {
      counter.innerHTML = `Sélectionnez jusqu'à ${maxCount} réponse(s) • <strong style="color: ${currentCount >= maxCount ? '#26A69A' : '#1E88E5'}">${currentCount}/${maxCount} sélectionné(s)</strong>`;
    }
  },
  
  // Toast notification (non-blocking)
  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'ds-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #FF6B6B;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-size: 16px;
      font-weight: 600;
      z-index: 9999;
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  },
  
  // Generate Expert Report (HTML string)
  generateExpertReport() {
    const { profile, scores, recommendedFormations } = this.state;
    const date = new Date().toLocaleDateString('fr-FR');
    
    let html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Rapport Expert DigiSchool Africa - ${date}</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
    h1 { color: #1E88E5; border-bottom: 3px solid #26A69A; padding-bottom: 10px; }
    h2 { color: #26A69A; margin-top: 30px; }
    .section { background: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #1E88E5; }
    .profile-tag { display: inline-block; background: #e3f2fd; color: #1E88E5; padding: 4px 12px; border-radius: 4px; margin: 4px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    th { background: #1E88E5; color: white; }
    .formation-card { border: 2px solid #1E88E5; padding: 15px; margin: 10px 0; border-radius: 8px; }
  </style>
</head>
<body>
  <h1>Rapport Expert d'Évaluation DigiSchool Africa</h1>
  <p><strong>Date:</strong> ${date}</p>
  
  <div class="section">
    <h2>1. Synthèse du Profil</h2>
    <p><strong>Niveau d'expérience:</strong> <span class="profile-tag">${profile.experienceLevel || 'Non renseigné'}</span></p>
    <p><strong>Rôle actuel:</strong> <span class="profile-tag">${profile.currentRole || 'Non renseigné'}</span></p>
    <p><strong>Domaine prioritaire:</strong> <span class="profile-tag">${this.domains[profile.primaryDomain]?.name || 'Non renseigné'}</span></p>
    <p><strong>Objectif d'apprentissage:</strong> <span class="profile-tag">${profile.learningObjective || 'Non renseigné'}</span></p>
    <p><strong>Disponibilité:</strong> <span class="profile-tag">${profile.timeAvailability || 'Non renseigné'}</span></p>
    
    <h3>Forces identifiées:</h3>
    <ul>
      <li>Clarté de l'objectif professionnel (Score S4: ${scores.S4_objectif.toFixed(1)})</li>
      <li>Niveau d'expérience adapté aux formations recommandées (Score S2: ${scores.S2_experience.toFixed(1)})</li>
      <li>Contexte professionnel favorable (Score S3: ${scores.S3_contexte.toFixed(1)})</li>
    </ul>
    
    <h3>Risques potentiels:</h3>
    <ul>
      <li>Disponibilité limitée: ${profile.timeAvailability === 'flexible' ? 'Vérifier la compatibilité avec le rythme de formation' : 'Rythme adapté'}</li>
      <li>Expérience: ${profile.experienceLevel === 'débutant' ? 'Prévoir un accompagnement renforcé' : 'Niveau suffisant'}</li>
    </ul>
  </div>
  
  <div class="section">
    <h2>2. Matrice de Compétences</h2>
    <table>
      <tr><th>Domaine</th><th>Score</th><th>Niveau recommandé</th></tr>`;
    
    Object.entries(scores.S1_domaine).sort((a,b) => b[1] - a[1]).forEach(([domain, score]) => {
      const domainName = this.domains[domain]?.name || domain;
      html += `<tr><td>${domainName}</td><td>${score}</td><td>${score >= 60 ? 'Prioritaire' : score >= 10 ? 'Complémentaire' : 'Optionnel'}</td></tr>`;
    });
    
    html += `</table>
  </div>
  
  <div class="section">
    <h2>3. Recommandations de Parcours</h2>`;
    
    recommendedFormations.slice(0, 5).forEach((formation, index) => {
      html += `
      <div class="formation-card">
        <h3>${index + 1}. ${formation.name}</h3>
        <p><strong>Durée:</strong> ${formation.duration} | <strong>Score d'adéquation:</strong> ${formation.score}</p>
        <p><strong>Priorité:</strong> ${formation.priority}</p>
        <p>${formation.description}</p>
        <p><strong>Niveau conseillé:</strong> ${formation.level.join(', ')}</p>
      </div>`;
    });
    
    html += `
  </div>
  
  <div class="section">
    <h2>4. Plan d'Action 30/60/90 Jours</h2>
    <table>
      <tr><th>Période</th><th>Objectifs</th><th>Actions</th></tr>
      <tr>
        <td><strong>30 jours</strong></td>
        <td>• Inscription et démarrage<br>• Compréhension des fondamentaux</td>
        <td>• S'inscrire à la formation prioritaire<br>• Compléter les 2 premiers modules<br>• Identifier un projet pilote d'application</td>
      </tr>
      <tr>
        <td><strong>60 jours</strong></td>
        <td>• Montée en compétence<br>• Application pratique</td>
        <td>• Compléter 50% de la formation<br>• Appliquer les acquis sur le projet pilote<br>• Partager avec l'équipe/manager</td>
      </tr>
      <tr>
        <td><strong>90 jours</strong></td>
        <td>• Finalisation et certification<br>• Impact mesurable</td>
        <td>• Compléter 100% et obtenir le certificat<br>• Mesurer l'impact du projet pilote<br>• Planifier la formation suivante</td>
      </tr>
    </table>
  </div>
  
  <div class="section">
    <h2>5. Questions d'Entretien Recommandées</h2>
    <ul>
      <li>Quels sont vos objectifs professionnels à 6-12 mois ?</li>
      <li>Avez-vous des contraintes de disponibilité spécifiques ?</li>
      <li>Souhaitez-vous une certification externe reconnue ?</li>
      <li>Quel est votre niveau actuel dans le domaine ${this.domains[profile.primaryDomain]?.name || ''} ?</li>
      <li>Disposez-vous d'un soutien de votre employeur pour cette formation ?</li>
    </ul>
  </div>
  
  <div class="section">
    <h2>6. KPI d'Évaluation Post-Formation</h2>
    <table>
      <tr><th>KPI</th><th>Méthode de mesure</th></tr>
      <tr><td>Taux de complétion</td><td>Suivi des modules complétés</td></tr>
      <tr><td>Score d'évaluation finale</td><td>Tests de validation des acquis</td></tr>
      <tr><td>Application pratique</td><td>Projet fil rouge / cas pratique</td></tr>
      <tr><td>Satisfaction apprenant</td><td>NPS post-formation</td></tr>
      <tr><td>Impact professionnel</td><td>Suivi à 3-6 mois (promotion, projet, responsabilités)</td></tr>
    </table>
  </div>
  
  <div class="section">
    <h2>7. Recommandations Ingénierie de Formation</h2>
    <ul>
      <li><strong>Modalités:</strong> ${profile.timeAvailability === 'immersif' ? 'Formation intensive sur courte période' : 'Formation étalée avec modules progressifs'}</li>
      <li><strong>Accompagnement:</strong> ${profile.experienceLevel === 'débutant' ? 'Tutorat renforcé + sessions de Q&R' : 'Suivi standard avec coach'}</li>
      <li><strong>Outils:</strong> Plateforme LMS + IA embarquée pour personnalisation</li>
      <li><strong>Certification:</strong> ${profile.learningObjective === 'certification' ? 'Prioriser une formation avec certification reconnue' : 'Focus compétences opérationnelles'}</li>
    </ul>
  </div>
  
  <hr>
  <p style="text-align: center; color: #666; margin-top: 40px;">
    <strong>DigiSchool Africa</strong> | contact@digischool.africa | https://digischool.africa
  </p>
</body>
</html>`;
    
    return html;
  },
  
  // Store expert report in localStorage
  generateAndStoreExpertReport() {
    const expertReport = this.generateExpertReport();
    localStorage.setItem('digischool_expert_report', expertReport);
    console.log('Expert report generated and stored in localStorage');
  },
  
  // Send expert report via mailto
  sendExpertReport() {
    const email = document.getElementById('email-capture')?.value;
    if (!email || !email.includes('@')) {
      this.showToast('Veuillez saisir un email valide');
      return;
    }
    
    const reportHTML = localStorage.getItem('digischool_expert_report');
    if (!reportHTML) {
      this.showToast('Rapport non disponible');
      return;
    }
    
    // Create download link for HTML report
    const blob = new Blob([reportHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DigiSchool_Rapport_Expert_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Open mailto with report summary
    const subject = 'DigiSchool Africa - Votre Rapport Expert';
    const body = `Bonjour,\n\nMerci de votre intérêt pour DigiSchool Africa.\n\nVotre rapport expert détaillé est maintenant téléchargé sur votre ordinateur.\n\nPour toute question : contact@digischool.africa\n\nCordialement,\nL'équipe DigiSchool Africa`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    this.showToast('Rapport téléchargé et email ouvert');
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  document.body.setAttribute('data-page', 'assessment');
  if (document.getElementById('question-container')) {
    DigiSchoolAssessmentV2.init();
  }
});
