/**
 * ========================================
 * DIGISCHOOL AFRICA - UX REFACTOR APPLICATION SCRIPT
 * ========================================
 * This script automatically converts "pavés" into premium UX components
 * Runs on page load to transform static content blocks
 * 
 * @version V2.2.x-H ONE-SHOT PRODUCTION
 * @date 2026-01-19
 */

(function() {
  'use strict';
  
  /**
   * Wait for DigiSchoolPremiumUX to be loaded
   */
  function waitForUX(callback) {
    if (window.DigiSchoolPremiumUX) {
      callback();
    } else {
      setTimeout(() => waitForUX(callback), 100);
    }
  }
  
  /**
   * ==========================================
   * REFACTOR: B2C CATALOG PAGE
   * ==========================================
   */
  function refactorB2CPage() {
    const UX = window.DigiSchoolPremiumUX;
    
    // 1) Add "Why Choose Us" cards section after hero
    const hero = document.querySelector('.hero');
    if (hero && !document.querySelector('.ds-why-choose')) {
      const whySection = document.createElement('section');
      whySection.className = 'ds-why-choose section';
      whySection.style.background = '#F5F7FA';
      whySection.style.padding = '80px 0';
      
      whySection.innerHTML = `
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 64px;">
            <h2 class="section-title">Pourquoi DigiSchool Africa ?</h2>
            <p class="section-subtitle">L'excellence de la formation professionnelle en Afrique</p>
          </div>
          <div id="why-cards-grid" class="ds-cards-grid ds-grid-3"></div>
        </div>
      `;
      
      hero.parentNode.insertBefore(whySection, hero.nextSibling);
      
      // Create cards
      const grid = document.getElementById('why-cards-grid');
      
      const features = [
        {
          icon: '🎓',
          title: 'Certifications Reconnues',
          description: 'Formations certifiantes reconnues par PMI, Microsoft, Google et les plus grandes institutions académiques internationales.',
          badge: 'OFFICIEL'
        },
        {
          icon: '🤖',
          title: 'IA Intégrée',
          description: 'Chaque parcours intègre des assistants IA, des outils d\'automatisation et des cas pratiques basés sur l\'intelligence artificielle.',
          badge: 'INNOVATION'
        },
        {
          icon: '⚡',
          title: 'Apprentissage Actif',
          description: 'Méthode Learn-by-Doing avec 70% de pratique : études de cas réels, simulations, projets terrain et livrables opérationnels.',
        },
        {
          icon: '🌍',
          title: 'Contexte Africain',
          description: 'Tous les cas pratiques, exemples et projets sont adaptés aux réalités et enjeux des entreprises africaines.',
        },
        {
          icon: '💼',
          title: 'Formats Flexibles',
          description: 'Pack complet ou module par module. Apprenez à votre rythme, accès immédiat 24/7, support pédagogique inclus.',
        },
        {
          icon: '📊',
          title: 'ROI Mesurable',
          description: 'Livrables concrets utilisables immédiatement : templates, outils, méthodologies, dashboards et frameworks opérationnels.',
        }
      ];
      
      features.forEach(feature => {
        const card = UX.createFeatureCard(feature);
        grid.appendChild(card);
      });
    }
    
    // 2) Convert course details into accordions
    document.querySelectorAll('.course-details-toggle').forEach(toggle => {
      const courseId = toggle.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      if (!courseId) return;
      
      const detailsDiv = document.getElementById(courseId);
      if (!detailsDiv || detailsDiv.hasAttribute('data-refactored')) return;
      
      detailsDiv.setAttribute('data-refactored', 'true');
      
      // Create accordion for modules
      const modulesList = detailsDiv.querySelector('.modules-list');
      if (modulesList) {
        const modules = Array.from(modulesList.querySelectorAll('.module-item'));
        
        modules.forEach((module, index) => {
          const title = module.querySelector('h5')?.textContent || `Module ${index + 1}`;
          const description = module.querySelector('p')?.textContent || '';
          const duration = module.querySelector('.module-duration')?.textContent || '';
          
          const accordion = UX.createAccordion({
            title: `${title} ${duration ? '(' + duration + ')' : ''}`,
            content: `<p>${description}</p>`,
            icon: '📚',
            defaultOpen: index === 0
          });
          
          modulesList.appendChild(accordion);
          module.style.display = 'none';
        });
      }
    });
    
    // 3) Add final CTA banner
    const catalogSection = document.querySelector('.section');
    if (catalogSection && !document.querySelector('.ds-final-cta')) {
      const ctaBanner = UX.createCTABanner({
        title: 'Prêt à transformer votre carrière ?',
        description: 'Commencez par notre diagnostic gratuit en 2 minutes et recevez vos recommandations personnalisées',
        primaryCTA: {
          text: '🎯 Faire mon diagnostic (2 min)',
          href: '/b2c-assessment.html'
        },
        secondaryCTA: {
          text: '💬 Parler à un conseiller',
          href: '/contact.html'
        },
        background: 'gradient'
      });
      
      ctaBanner.classList.add('ds-final-cta');
      catalogSection.parentNode.appendChild(ctaBanner);
    }
    
    console.log('✅ B2C Page refactored with Premium UX');
  }
  
  /**
   * ==========================================
   * REFACTOR: COMPANIES/B2B PAGE
   * ==========================================
   */
  function refactorCompaniesPage() {
    const UX = window.DigiSchoolPremiumUX;
    
    // 1) Add "Why B2B" section after hero
    const hero = document.querySelector('.hero');
    if (hero && !document.querySelector('.ds-b2b-value')) {
      const valueSection = document.createElement('section');
      valueSection.className = 'ds-b2b-value section';
      valueSection.style.background = '#F5F7FA';
      valueSection.style.padding = '80px 0';
      
      valueSection.innerHTML = `
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 64px;">
            <h2 class="section-title">Votre Partenaire Formation Entreprise</h2>
            <p class="section-subtitle">Des solutions sur-mesure pour transformer vos équipes</p>
          </div>
          <div id="b2b-value-grid" class="ds-cards-grid ds-grid-3"></div>
        </div>
      `;
      
      hero.parentNode.insertBefore(valueSection, hero.nextSibling);
      
      // Create cards
      const grid = document.getElementById('b2b-value-grid');
      
      const values = [
        {
          icon: '🎯',
          title: 'Formation Sur-Mesure',
          description: 'Chaque programme est adapté à vos enjeux métier, votre secteur d\'activité et vos objectifs de transformation.',
          badge: 'PERSONNALISÉ'
        },
        {
          icon: '⚡',
          title: 'Déploiement Rapide',
          description: 'Réponse sous 72h, cadrage en 1 semaine, démarrage possible en 2 semaines. Formats Intra, Inter ou Bootcamp intensif.',
        },
        {
          icon: '📊',
          title: 'Livrables Concrets',
          description: 'Chaque formation produit des livrables opérationnels : plans d\'action, outils, méthodologies, templates utilisables immédiatement.',
        },
        {
          icon: '🤖',
          title: 'IA & Automatisation',
          description: 'Intégration systématique des outils IA pour automatiser, optimiser et accélérer les processus métier de vos équipes.',
        },
        {
          icon: '👥',
          title: 'Experts de Renommée',
          description: 'Formateurs certifiés (PMI, Microsoft, Google), avec expérience terrain en Afrique et approche pédagogique Learn-by-Doing.',
        },
        {
          icon: '💰',
          title: 'ROI Mesurable',
          description: 'KPIs de performance définis, suivi post-formation, et indicateurs de montée en compétences mesurables sur 3-6 mois.',
        }
      ];
      
      values.forEach(value => {
        const card = UX.createFeatureCard(value);
        grid.appendChild(card);
      });
    }
    
    // 2) Add Training Formats section with tabs
    const catalogSection = document.querySelector('.section');
    if (catalogSection && !document.querySelector('.ds-formats')) {
      const formatsSection = document.createElement('section');
      formatsSection.className = 'ds-formats section';
      formatsSection.style.padding = '80px 0';
      
      formatsSection.innerHTML = `
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 48px;">
            <h2 class="section-title">Formats de Formation Disponibles</h2>
            <p class="section-subtitle">Choisissez le format adapté à vos besoins</p>
          </div>
          <div id="formats-tabs"></div>
        </div>
      `;
      
      catalogSection.parentNode.insertBefore(formatsSection, catalogSection.nextSibling);
      
      const tabs = UX.createTabs({
        tabs: [
          {
            id: 'intra',
            label: '🏢 Intra-Entreprise',
            content: `
              <div class="ds-cards-grid ds-grid-2">
                <div>
                  <h3 style="font-size: 24px; margin-bottom: 16px;">Formation Intra-Entreprise</h3>
                  <p style="font-size: 16px; line-height: 1.7; color: #546E7A; margin-bottom: 24px;">
                    Formation dédiée exclusivement à vos équipes, dans vos locaux ou en ligne. Contenu 100% personnalisé à vos enjeux.
                  </p>
                  <ul style="font-size: 15px; line-height: 2; color: #546E7A;">
                    <li>✅ Programme sur-mesure adapté à vos besoins</li>
                    <li>✅ Dans vos locaux ou à distance</li>
                    <li>✅ Groupe de 8 à 20 participants</li>
                    <li>✅ Calendrier flexible selon vos contraintes</li>
                    <li>✅ Cas pratiques basés sur vos projets réels</li>
                    <li>✅ Support post-formation inclus (3 mois)</li>
                  </ul>
                </div>
                <div style="background: linear-gradient(135deg, #1E88E5, #26A69A); padding: 40px; border-radius: 16px; color: white;">
                  <h4 style="font-size: 20px; margin-bottom: 24px;">Tarification Intra</h4>
                  <div style="font-size: 48px; font-weight: 800; margin-bottom: 8px;">Sur devis</div>
                  <p style="opacity: 0.9; margin-bottom: 32px;">Variable selon durée, participants et personnalisation</p>
                  <a href="/b2b-custom-request.html" style="display: inline-block; background: white; color: #1E88E5; padding: 16px 32px; border-radius: 12px; font-weight: 700; text-decoration: none;">
                    Demander un devis
                  </a>
                </div>
              </div>
            `
          },
          {
            id: 'inter',
            label: '🌐 Inter-Entreprises',
            content: `
              <div class="ds-cards-grid ds-grid-2">
                <div>
                  <h3 style="font-size: 24px; margin-bottom: 16px;">Formation Inter-Entreprises</h3>
                  <p style="font-size: 16px; line-height: 1.7; color: #546E7A; margin-bottom: 24px;">
                    Sessions programmées regroupant des participants de différentes entreprises. Networking et partage d'expériences.
                  </p>
                  <ul style="font-size: 15px; line-height: 2; color: #546E7A;">
                    <li>✅ Calendrier fixe avec sessions régulières</li>
                    <li>✅ Networking inter-entreprises</li>
                    <li>✅ Tarif par participant (dégressif)</li>
                    <li>✅ Groupe de 12 à 20 participants</li>
                    <li>✅ Programme standardisé éprouvé</li>
                    <li>✅ Certification officielle incluse</li>
                  </ul>
                </div>
                <div style="background: linear-gradient(135deg, #7E57C2, #5E35B1); padding: 40px; border-radius: 16px; color: white;">
                  <h4 style="font-size: 20px; margin-bottom: 24px;">Tarification Inter</h4>
                  <div style="font-size: 48px; font-weight: 800; margin-bottom: 8px;">350 000 FCFA</div>
                  <p style="opacity: 0.9; margin-bottom: 32px;">Par participant (formation 5 jours)</p>
                  <a href="/contact.html" style="display: inline-block; background: white; color: #7E57C2; padding: 16px 32px; border-radius: 12px; font-weight: 700; text-decoration: none;">
                    Voir le calendrier
                  </a>
                </div>
              </div>
            `
          },
          {
            id: 'bootcamp',
            label: '⚡ Bootcamp Intensif',
            content: `
              <div class="ds-cards-grid ds-grid-2">
                <div>
                  <h3 style="font-size: 24px; margin-bottom: 16px;">Bootcamp Intensif</h3>
                  <p style="font-size: 16px; line-height: 1.7; color: #546E7A; margin-bottom: 24px;">
                    Formation accélérée ultra-intensive sur 3 à 5 jours. Immersion totale avec livrables à produire.
                  </p>
                  <ul style="font-size: 15px; line-height: 2; color: #546E7A;">
                    <li>✅ Format immersif et intensif</li>
                    <li>✅ Durée compressée (3-5 jours)</li>
                    <li>✅ Focus total sur la pratique (80%)</li>
                    <li>✅ Production de livrables opérationnels</li>
                    <li>✅ Coaching individuel inclus</li>
                    <li>✅ Résultats rapides et mesurables</li>
                  </ul>
                </div>
                <div style="background: linear-gradient(135deg, #FF5722, #F4511E); padding: 40px; border-radius: 16px; color: white;">
                  <h4 style="font-size: 20px; margin-bottom: 24px;">Tarification Bootcamp</h4>
                  <div style="font-size: 48px; font-weight: 800; margin-bottom: 8px;">280 000 FCFA</div>
                  <p style="opacity: 0.9; margin-bottom: 32px;">Par participant (bootcamp 3 jours)</p>
                  <a href="/contact.html" style="display: inline-block; background: white; color: #FF5722; padding: 16px 32px; border-radius: 12px; font-weight: 700; text-decoration: none;">
                    Réserver un bootcamp
                  </a>
                </div>
              </div>
            `
          }
        ],
        defaultTab: 0
      });
      
      document.getElementById('formats-tabs').appendChild(tabs);
    }
    
    // 3) Add methodology accordion
    if (catalogSection && !document.querySelector('.ds-methodology')) {
      const methodSection = document.createElement('section');
      methodSection.className = 'ds-methodology section';
      methodSection.style.background = '#F5F7FA';
      methodSection.style.padding = '80px 0';
      
      methodSection.innerHTML = `
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 48px;">
            <h2 class="section-title">Notre Méthodologie d'Intervention</h2>
            <p class="section-subtitle">Un processus éprouvé pour garantir vos résultats</p>
          </div>
          <div id="methodology-steps"></div>
        </div>
      `;
      
      const nextSibling = formatsSection || catalogSection.nextSibling;
      catalogSection.parentNode.insertBefore(methodSection, nextSibling);
      
      const steps = UX.createStepIndicator({
        steps: [
          {
            title: '1. Cadrage',
            description: 'Analyse de vos besoins, enjeux et objectifs (72h)'
          },
          {
            title: '2. Personnalisation',
            description: 'Adaptation du programme à votre contexte (1 semaine)'
          },
          {
            title: '3. Déploiement',
            description: 'Formation active avec cas pratiques terrain'
          },
          {
            title: '4. Suivi',
            description: 'Accompagnement post-formation (3 mois)'
          },
          {
            title: '5. ROI',
            description: 'Mesure des résultats et impacts'
          }
        ],
        currentStep: 0
      });
      
      document.getElementById('methodology-steps').appendChild(steps);
    }
    
    // 4) Add final B2B CTA
    if (!document.querySelector('.ds-b2b-cta')) {
      const ctaBanner = UX.createCTABanner({
        title: 'Transformez vos équipes dès maintenant',
        description: 'Demandez une proposition personnalisée sous 72h avec cadrage détaillé et tarification transparente',
        primaryCTA: {
          text: '📋 Demander une proposition (72h)',
          href: '/b2b-custom-request.html'
        },
        secondaryCTA: {
          text: '📞 +225 05 05 11 11 02',
          href: 'tel:+2250505111102'
        },
        background: 'gradient'
      });
      
      ctaBanner.classList.add('ds-b2b-cta');
      document.body.appendChild(ctaBanner);
    }
    
    console.log('✅ B2B/Companies Page refactored with Premium UX');
  }
  
  /**
   * ==========================================
   * REFACTOR: ABOUT PAGE
   * ==========================================
   */
  function refactorAboutPage() {
    const UX = window.DigiSchoolPremiumUX;
    
    // Find main content container
    const container = document.querySelector('.container') || document.querySelector('main');
    if (!container) return;
    
    // 1) Add mission/vision cards
    if (!document.querySelector('.ds-mission')) {
      const missionSection = document.createElement('section');
      missionSection.className = 'ds-mission section';
      missionSection.style.padding = '80px 0';
      
      missionSection.innerHTML = `
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 64px;">
            <h2 class="section-title">Notre Mission</h2>
            <p class="section-subtitle">Démocratiser l'excellence de la formation professionnelle en Afrique</p>
          </div>
          <div id="mission-cards" class="ds-cards-grid ds-grid-2"></div>
        </div>
      `;
      
      const hero = container.querySelector('.hero') || container.firstElementChild;
      if (hero && hero.nextSibling) {
        container.insertBefore(missionSection, hero.nextSibling);
      } else {
        container.appendChild(missionSection);
      }
      
      const grid = document.getElementById('mission-cards');
      
      const missions = [
        {
          icon: '🎯',
          title: 'Notre Vision',
          description: 'Devenir le leader panafricain de la formation professionnelle premium, en combinant excellence académique internationale et adaptation aux réalités du terrain africain.',
        },
        {
          icon: '💡',
          title: 'Notre Mission',
          description: 'Transformer les carrières et les entreprises africaines en donnant accès aux meilleures formations certifiantes, avec l\'IA embarquée et une pédagogie Learn-by-Doing éprouvée.',
        }
      ];
      
      missions.forEach(mission => {
        const card = UX.createFeatureCard(mission);
        grid.appendChild(card);
      });
    }
    
    // 2) Add founder section with signature typography
    if (!document.querySelector('.ds-founder')) {
      const founderSection = document.createElement('section');
      founderSection.className = 'ds-founder section';
      founderSection.style.background = '#F5F7FA';
      founderSection.style.padding = '80px 0';
      
      founderSection.innerHTML = `
        <div class="container" style="max-width: 900px; text-align: center;">
          <h2 class="section-title" style="margin-bottom: 32px;">Leadership</h2>
          <div style="background: white; border-radius: 20px; padding: 48px; box-shadow: 0 8px 32px rgba(0,0,0,0.08);">
            <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #1E88E5, #26A69A); margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; font-size: 48px; color: white; box-shadow: 0 8px 24px rgba(30, 136, 229, 0.3);">
              👤
            </div>
            <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 36px; font-weight: 700; color: #263238; margin-bottom: 8px; letter-spacing: -0.5px;">
              Jean Pierre SAJORI
            </div>
            <div style="font-size: 18px; color: #1E88E5; font-weight: 600; margin-bottom: 24px;">
              Fondateur & Directeur
            </div>
            <p style="font-size: 16px; line-height: 1.8; color: #546E7A;">
              Expert en transformation digitale et formation professionnelle avec plus de 15 ans d'expérience en Afrique. 
              Diplômé de grandes écoles internationales, Jean Pierre SAJORI a accompagné plus de 200 entreprises africaines 
              dans leur montée en compétences et leur transformation digitale.
            </p>
          </div>
        </div>
      `;
      
      const missionSection = document.querySelector('.ds-mission');
      if (missionSection && missionSection.nextSibling) {
        container.insertBefore(founderSection, missionSection.nextSibling);
      } else {
        container.appendChild(founderSection);
      }
    }
    
    // 3) Add values cards
    if (!document.querySelector('.ds-values')) {
      const valuesSection = document.createElement('section');
      valuesSection.className = 'ds-values section';
      valuesSection.style.padding = '80px 0';
      
      valuesSection.innerHTML = `
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 64px;">
            <h2 class="section-title">Nos Valeurs</h2>
            <p class="section-subtitle">Les principes qui guident notre action</p>
          </div>
          <div id="values-cards" class="ds-cards-grid ds-grid-4"></div>
        </div>
      `;
      
      const founderSection = document.querySelector('.ds-founder');
      if (founderSection && founderSection.nextSibling) {
        container.insertBefore(valuesSection, founderSection.nextSibling);
      } else {
        container.appendChild(valuesSection);
      }
      
      const grid = document.getElementById('values-cards');
      
      const values = [
        { icon: '🏆', title: 'Excellence', description: 'Standards internationaux et qualité premium' },
        { icon: '🌍', title: 'Impact', description: 'Transformation concrète et mesurable' },
        { icon: '🤝', title: 'Partenariat', description: 'Collaboration et co-création' },
        { icon: '💡', title: 'Innovation', description: 'IA et pédagogies actives' }
      ];
      
      values.forEach(value => {
        const card = UX.createFeatureCard(value);
        grid.appendChild(card);
      });
    }
    
    console.log('✅ About Page refactored with Premium UX');
  }
  
  /**
   * ==========================================
   * REFACTOR: CONTACT PAGE
   * ==========================================
   */
  function refactorContactPage() {
    const UX = window.DigiSchoolPremiumUX;
    
    const container = document.querySelector('.container') || document.querySelector('main');
    if (!container) return;
    
    // Add contact methods cards
    if (!document.querySelector('.ds-contact-methods')) {
      const methodsSection = document.createElement('section');
      methodsSection.className = 'ds-contact-methods section';
      methodsSection.style.padding = '40px 0';
      
      methodsSection.innerHTML = `
        <div class="container">
          <div id="contact-methods-grid" class="ds-cards-grid ds-grid-3"></div>
        </div>
      `;
      
      const form = container.querySelector('form');
      if (form && form.parentElement) {
        form.parentElement.insertBefore(methodsSection, form);
      } else {
        container.insertBefore(methodsSection, container.firstElementChild);
      }
      
      const grid = document.getElementById('contact-methods-grid');
      
      const methods = [
        {
          icon: '📞',
          title: 'Téléphone',
          description: 'Parlez directement à un conseiller',
          cta: { text: '+225 05 05 11 11 02', href: 'tel:+2250505111102', style: 'primary' }
        },
        {
          icon: '✉️',
          title: 'Email',
          description: 'Réponse sous 24h ouvrées',
          cta: { text: 'contact@digischool.africa', href: 'mailto:contact@digischool.africa', style: 'primary' }
        },
        {
          icon: '📋',
          title: 'Demande B2B',
          description: 'Proposition personnalisée sous 72h',
          cta: { text: 'Formulaire entreprise', href: '/b2b-custom-request.html', style: 'primary' }
        }
      ];
      
      methods.forEach(method => {
        const card = UX.createFeatureCard(method);
        grid.appendChild(card);
      });
    }
    
    console.log('✅ Contact Page refactored with Premium UX');
  }
  
  /**
   * ==========================================
   * AUTO-DETECT AND REFACTOR
   * ==========================================
   */
  function autoRefactor() {
    const path = window.location.pathname;
    
    if (path.includes('b2c.html')) {
      refactorB2CPage();
    } else if (path.includes('companies.html') || path.includes('b2b')) {
      refactorCompaniesPage();
    } else if (path.includes('about')) {
      refactorAboutPage();
    } else if (path.includes('contact.html')) {
      refactorContactPage();
    }
  }
  
  /**
   * ==========================================
   * INITIALIZATION
   * ==========================================
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      waitForUX(autoRefactor);
    });
  } else {
    waitForUX(autoRefactor);
  }
  
})();
