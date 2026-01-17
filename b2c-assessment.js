/**
 * B2C Assessment Engine - DigiSchool Africa
 * Auto-evaluation with personalized course recommendations
 */

(function() {
  'use strict';

  const questions = [
    {
      id: 1,
      text: "Quel est votre objectif principal en ce moment ?",
      answers: [
        { text: "Développer mes compétences en leadership et management", weight: { leadership: 3, rh: 2 } },
        { text: "Améliorer ma gestion de projets et mon organisation", weight: { pmp: 3, strategy: 2 } },
        { text: "Comprendre les finances et les indicateurs business", weight: { finance: 3, data: 2 } },
        { text: "Maîtriser la vente B2B et la négociation", weight: { vente: 3, client: 1 } }
      ]
    },
    {
      id: 2,
      text: "Quelle est votre position actuelle ?",
      answers: [
        { text: "Manager d'équipe ou aspirant manager", weight: { leadership: 3, rh: 2, strategy: 1 } },
        { text: "Chef de projet ou coordinateur", weight: { pmp: 3, strategy: 2, m365: 1 } },
        { text: "Responsable commercial ou vendeur", weight: { vente: 3, client: 2 } },
        { text: "Analyste, contrôleur ou décideur", weight: { finance: 2, data: 3, strategy: 1 } }
      ]
    },
    {
      id: 3,
      text: "Quel type de compétence souhaitez-vous développer en priorité ?",
      answers: [
        { text: "Compétences managériales et RH", weight: { leadership: 2, rh: 3 } },
        { text: "Compétences techniques (outils, data, reporting)", weight: { data: 3, m365: 2 } },
        { text: "Compétences commerciales et relationnelles", weight: { vente: 2, client: 3 } },
        { text: "Compétences stratégiques et financières", weight: { strategy: 2, finance: 3 } }
      ]
    },
    {
      id: 4,
      text: "Quel est le défi principal que vous rencontrez ?",
      answers: [
        { text: "Difficulté à motiver et engager mes équipes", weight: { leadership: 3, rh: 2 } },
        { text: "Projets qui dérapent (délais, budget, qualité)", weight: { pmp: 3, strategy: 1 } },
        { text: "Manque de compréhension des chiffres et KPIs", weight: { finance: 2, data: 3 } },
        { text: "Difficultés à conclure des ventes ou négocier", weight: { vente: 3, client: 1 } }
      ]
    },
    {
      id: 5,
      text: "Combien de temps pouvez-vous consacrer par semaine à votre formation ?",
      answers: [
        { text: "2-3 heures (rythme souple)", weight: {} },
        { text: "4-6 heures (rythme modéré)", weight: {} },
        { text: "7-10 heures (rythme intensif)", weight: {} },
        { text: "Flexible selon mes besoins", weight: {} }
      ]
    },
    {
      id: 6,
      text: "Avez-vous déjà suivi une formation professionnelle en ligne ?",
      answers: [
        { text: "Oui, plusieurs fois", weight: { m365: 1 } },
        { text: "Oui, une ou deux fois", weight: {} },
        { text: "Non, c'est ma première fois", weight: {} },
        { text: "Non, mais j'ai suivi des formations en présentiel", weight: {} }
      ]
    },
    {
      id: 7,
      text: "Quel est votre niveau d'expérience professionnelle ?",
      answers: [
        { text: "Débutant (0-2 ans)", weight: { m365: 1, client: 1 } },
        { text: "Intermédiaire (3-5 ans)", weight: { leadership: 1, pmp: 1 } },
        { text: "Confirmé (6-10 ans)", weight: { strategy: 2, finance: 1 } },
        { text: "Expert (10+ ans)", weight: { strategy: 2, data: 1 } }
      ]
    },
    {
      id: 8,
      text: "Préférez-vous une approche d'apprentissage...?",
      answers: [
        { text: "Très structurée avec méthodologies éprouvées", weight: { pmp: 2, finance: 1 } },
        { text: "Pratique avec cas concrets et exercices", weight: { vente: 2, m365: 2 } },
        { text: "Stratégique avec vision d'ensemble", weight: { strategy: 3, leadership: 1 } },
        { text: "Analytique avec chiffres et données", weight: { data: 3, finance: 2 } }
      ]
    },
    {
      id: 9,
      text: "Quel résultat concret visez-vous à court terme (3-6 mois) ?",
      answers: [
        { text: "Être promu ou changer de poste", weight: { leadership: 2, strategy: 2 } },
        { text: "Améliorer mes performances commerciales", weight: { vente: 3, client: 2 } },
        { text: "Piloter mes projets avec plus de rigueur", weight: { pmp: 3, data: 1 } },
        { text: "Mieux comprendre les finances de mon entreprise", weight: { finance: 3 } }
      ]
    },
    {
      id: 10,
      text: "Quel domaine vous intéresse le plus parmi ceux-ci ?",
      answers: [
        { text: "Transformation digitale et outils Microsoft 365", weight: { m365: 3 } },
        { text: "Excellence opérationnelle et qualité de service", weight: { client: 3, strategy: 1 } },
        { text: "Gestion des talents et performance RH", weight: { rh: 3, leadership: 1 } },
        { text: "Data, reporting et aide à la décision", weight: { data: 3, finance: 1 } }
      ]
    }
  ];

  const courseMapping = {
    leadership: 'leadership-management',
    pmp: 'gestion-projet-pmp',
    strategy: 'strategie-execution',
    finance: 'finance-non-financiers',
    vente: 'vente-b2b-negociation',
    client: 'service-client-experience',
    rh: 'rh-performance',
    data: 'data-reporting-decideurs',
    m365: 'productivite-m365'
  };

  let currentQuestion = 0;
  let answers = [];
  let scores = {
    leadership: 0,
    pmp: 0,
    strategy: 0,
    finance: 0,
    vente: 0,
    client: 0,
    rh: 0,
    data: 0,
    m365: 0
  };

  function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const question = questions[currentQuestion];
    
    container.innerHTML = `
      <div class="question-card">
        <span class="question-number">Question ${currentQuestion + 1} / ${questions.length}</span>
        <div class="question-text">${question.text}</div>
        <div class="answers">
          ${question.answers.map((answer, idx) => `
            <div class="answer-option" data-index="${idx}">
              <input type="radio" name="q${currentQuestion}" id="a${currentQuestion}_${idx}" value="${idx}" />
              <label for="a${currentQuestion}_${idx}">${answer.text}</label>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Restore previous answer if exists
    if (answers[currentQuestion] !== undefined) {
      const selectedOption = container.querySelector(`.answer-option[data-index="${answers[currentQuestion]}"]`);
      if (selectedOption) {
        selectedOption.classList.add('selected');
        selectedOption.querySelector('input').checked = true;
        document.getElementById('next-btn').disabled = false;
      }
    }

    // Add click handlers
    container.querySelectorAll('.answer-option').forEach(option => {
      option.addEventListener('click', function() {
        container.querySelectorAll('.answer-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input').checked = true;
        answers[currentQuestion] = parseInt(this.dataset.index);
        document.getElementById('next-btn').disabled = false;
      });
    });

    updateProgress();
    updateButtons();
  }

  function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
  }

  function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.style.visibility = currentQuestion > 0 ? 'visible' : 'hidden';
    
    if (currentQuestion === questions.length - 1) {
      nextBtn.textContent = 'Voir mes recommandations ✨';
    } else {
      nextBtn.textContent = 'Suivant →';
    }
  }

  function calculateScores() {
    scores = {
      leadership: 0,
      pmp: 0,
      strategy: 0,
      finance: 0,
      vente: 0,
      client: 0,
      rh: 0,
      data: 0,
      m365: 0
    };

    answers.forEach((answerIdx, questionIdx) => {
      const question = questions[questionIdx];
      const answer = question.answers[answerIdx];
      if (answer.weight) {
        Object.keys(answer.weight).forEach(key => {
          scores[key] = (scores[key] || 0) + answer.weight[key];
        });
      }
    });
  }

  function showResults() {
    calculateScores();

    // Sort courses by score
    const sortedCourses = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .filter(entry => entry[1] > 0);

    // High priority (top 3)
    const highPriority = sortedCourses.slice(0, 3);
    // Secondary (next 3)
    const secondary = sortedCourses.slice(3, 6);

    // Render results
    const highPriorityContainer = document.getElementById('high-priority-courses');
    const secondaryContainer = document.getElementById('secondary-courses');

    highPriorityContainer.innerHTML = highPriority.map(([key, score]) => {
      const courseSlug = courseMapping[key];
      const course = window.getCourseBySlugorId && window.getCourseBySlugorId(courseSlug);
      if (!course) return '';

      return `
        <div class="course-item">
          <div class="icon">🎯</div>
          <div class="info">
            <span class="title">${course.title}</span>
            <span class="price">${formatPrice(course.pack_price_xof)} FCFA (pack) | ${formatPrice(course.module_price_xof)} FCFA/module</span>
          </div>
          <a href="./b2c-learn.html?course=${courseSlug}" class="btn btn-primary" style="white-space: nowrap;">Découvrir →</a>
        </div>
      `;
    }).join('');

    if (secondary.length > 0) {
      secondaryContainer.innerHTML = secondary.map(([key, score]) => {
        const courseSlug = courseMapping[key];
        const course = window.getCourseBySlugorId && window.getCourseBySlugorId(courseSlug);
        if (!course) return '';

        return `
          <div class="course-item">
            <div class="icon">💡</div>
            <div class="info">
              <span class="title">${course.title}</span>
              <span class="price">${formatPrice(course.pack_price_xof)} FCFA (pack) | ${formatPrice(course.module_price_xof)} FCFA/module</span>
            </div>
            <a href="./b2c-learn.html?course=${courseSlug}" class="btn btn-secondary" style="white-space: nowrap;">Voir →</a>
          </div>
        `;
      }).join('');
    } else {
      secondaryContainer.closest('.recommendation-card').style.display = 'none';
    }

    // Hide quiz, show results
    document.getElementById('quiz-container').style.display = 'none';
    document.querySelector('.nav-buttons').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'none';
    document.getElementById('results-container').classList.add('show');

    // Track event
    if (window.DigiSchoolEvents && typeof window.DigiSchoolEvents.trackEvent === 'function') {
      window.DigiSchoolEvents.trackEvent('assessment_completed', {
        top_courses: highPriority.map(([key]) => courseMapping[key]),
        total_questions: questions.length,
        timestamp: Date.now()
      });
    }
  }

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // Event listeners
  document.getElementById('next-btn').addEventListener('click', function() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      showResults();
    }
  });

  document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  });

  // Initialize
  renderQuestion();

})();
