/**
 * DigiSchool Africa — Courses Content (APC Structure)
 * Structure: Formation → Modules → Cours (Compétences)
 * Niveau: Premium absolu (grandes universités & centres professionnels)
 */

(function() {
  'use strict';

  window.DigiSchoolContent = {
    
    // PMP — Gestion de Projet (Aligné PMI)
    'gestion-projet-pmp': {
      id: 'gestion-projet-pmp',
      title: 'Gestion de Projet (PMP-aligné)',
      duration: '10 jours',
      totalModules: 4,
      level: 'Professionnel',
      certification: 'Certificat DigiSchool + Préparation PMP',
      
      description: `Formation complète en gestion de projet, alignée sur les standards PMI (Project Management Institute). 
      Maîtrisez les 5 groupes de processus, les 10 domaines de connaissance, et les outils IA pour optimiser vos projets.`,
      
      objectives: [
        'Maîtriser le cadre PMBOK 7 et les méthodologies Agile',
        'Piloter des projets de A à Z avec rigueur et efficacité',
        'Utiliser l\'IA pour automatiser planning, risques et reporting',
        'Préparer l\'examen PMP avec confiance',
        'Gérer équipes, parties prenantes et communication projet'
      ],
      
      targetAudience: [
        'Chefs de projet (juniors à seniors)',
        'PMO et coordinateurs projets',
        'Consultants et managers',
        'Professionnels aspirant au PMP'
      ],
      
      modules: [
        {
          id: 'module-1',
          title: 'Module 1: Fondamentaux & Cadrage',
          duration: '2.5 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Introduction à la Gestion de Projet',
              competences: [
                'Comprendre les concepts clés: projet, programme, portfolio',
                'Identifier les rôles et responsabilités (chef de projet, sponsor, équipe)',
                'Différencier méthodologies prédictives vs adaptatives (Waterfall, Agile, Hybrid)'
              ],
              content: {
                theory: `
                  <h3>1. Définitions Fondamentales</h3>
                  <p><strong>Projet</strong>: Effort temporaire visant à créer un produit, service ou résultat unique.</p>
                  <p><strong>Programme</strong>: Groupe de projets connexes gérés de manière coordonnée.</p>
                  <p><strong>Portfolio</strong>: Collection de programmes/projets alignés sur objectifs stratégiques.</p>
                  
                  <h3>2. Référentiels & Normes</h3>
                  <ul>
                    <li><strong>PMBOK 7</strong> (PMI): Guide des bonnes pratiques en gestion de projet</li>
                    <li><strong>PRINCE2</strong>: Méthodologie structurée britannique</li>
                    <li><strong>ISO 21500</strong>: Norme internationale de management de projet</li>
                    <li><strong>Agile Manifesto</strong>: Valeurs et principes des méthodes agiles</li>
                  </ul>
                  
                  <h3>3. Méthodologies Comparées</h3>
                  <table border="1" style="width:100%; border-collapse: collapse;">
                    <tr>
                      <th>Critère</th>
                      <th>Waterfall (Prédictif)</th>
                      <th>Agile (Adaptatif)</th>
                      <th>Hybrid</th>
                    </tr>
                    <tr>
                      <td>Planification</td>
                      <td>Détaillée en amont</td>
                      <td>Itérative (sprints)</td>
                      <td>Mix selon phases</td>
                    </tr>
                    <tr>
                      <td>Changements</td>
                      <td>Difficiles/coûteux</td>
                      <td>Acceptés/encouragés</td>
                      <td>Contrôlés</td>
                    </tr>
                    <tr>
                      <td>Livraison</td>
                      <td>En fin de projet</td>
                      <td>Incrémentale</td>
                      <td>Jalons + incréments</td>
                    </tr>
                  </table>
                `,
                visuals: [
                  '/assets/content/pmp/cycle-vie-projet.png',
                  '/assets/content/pmp/methodologies-comparaison.png'
                ],
                examples: `
                  <h4>Cas Concret: Projet Construction Immeuble (Waterfall)</h4>
                  <p>✅ Exigences stables, réglementation stricte → Waterfall adapté</p>
                  
                  <h4>Cas Concret: Développement Application Mobile (Agile)</h4>
                  <p>✅ Besoins évolutifs, feedbacks utilisateurs fréquents → Agile adapté</p>
                `,
                aiTools: [
                  {
                    name: 'ChatGPT/Claude',
                    usage: 'Générer charte projet, identifier risques initiaux, rédiger brief'
                  },
                  {
                    name: 'Notion AI',
                    usage: 'Structurer documentation projet, créer templates'
                  }
                ],
                bibliography: {
                  free: [
                    'PMI Standards+: PMBOK Guide (version trial)',
                    'Agile Manifesto: https://agilemanifesto.org/',
                    'ISO 21500 overview (ISO.org)'
                  ],
                  paid: [
                    'A Guide to the Project Management Body of Knowledge (PMBOK Guide) – 7th Edition, PMI',
                    'The Standard for Project Management, PMI',
                    'Agile Practice Guide, PMI'
                  ]
                },
                quiz: [
                  {
                    question: 'Un projet se distingue des opérations courantes par:',
                    options: [
                      'Son caractère temporaire et unique',
                      'Son budget élevé',
                      'Sa complexité technique',
                      'Le nombre de ressources'
                    ],
                    correct: 0
                  }
                ]
              }
            },
            {
              id: 'cours-1-2',
              title: 'Charte de Projet & Business Case',
              competences: [
                'Rédiger une charte projet claire et approuvée',
                'Construire un business case convaincant (ROI, bénéfices)',
                'Identifier et analyser les parties prenantes'
              ],
              content: {
                theory: `
                  <h3>1. La Charte de Projet (Project Charter)</h3>
                  <p><strong>Définition</strong>: Document autorisant formellement le projet et donnant pouvoir au chef de projet.</p>
                  
                  <h4>Contenu Obligatoire:</h4>
                  <ul>
                    <li>Objectifs SMART du projet</li>
                    <li>Justification business (pourquoi ce projet?)</li>
                    <li>Portée de haut niveau (scope)</li>
                    <li>Parties prenantes clés</li>
                    <li>Budget prévisionnel & jalons</li>
                    <li>Risques majeurs identifiés</li>
                    <li>Autorité du chef de projet</li>
                  </ul>
                  
                  <h3>2. Business Case</h3>
                  <p>Justification économique et stratégique du projet.</p>
                  
                  <h4>Structure Recommandée:</h4>
                  <ol>
                    <li><strong>Contexte & Problématique</strong>: Quelle opportunité/problème?</li>
                    <li><strong>Options Analysées</strong>: Scénarios comparés (faire/ne rien faire/alternatives)</li>
                    <li><strong>Solution Retenue</strong>: Description + justification</li>
                    <li><strong>Analyse Financière</strong>: ROI, VAN, TRI, Payback</li>
                    <li><strong>Bénéfices Attendus</strong>: Quantitatifs + qualitatifs</li>
                    <li><strong>Risques & Mitigation</strong></li>
                    <li><strong>Recommandation</strong>: Go/No-Go décision</li>
                  </ol>
                  
                  <h3>3. Analyse des Parties Prenantes</h3>
                  <p><strong>Matrice Pouvoir-Intérêt</strong>:</p>
                  <table border="1" style="width:100%; text-align:center;">
                    <tr>
                      <th></th>
                      <th>Intérêt Faible</th>
                      <th>Intérêt Élevé</th>
                    </tr>
                    <tr>
                      <th>Pouvoir Élevé</th>
                      <td>Tenir Informé</td>
                      <td>Gérer Étroitement</td>
                    </tr>
                    <tr>
                      <th>Pouvoir Faible</th>
                      <td>Surveiller</td>
                      <td>Tenir Satisfait</td>
                    </tr>
                  </table>
                `,
                visuals: [
                  '/assets/content/pmp/charte-projet-template.png',
                  '/assets/content/pmp/matrice-parties-prenantes.png'
                ],
                aiTools: [
                  {
                    name: 'ChatGPT',
                    usage: 'Prompt: "Rédige une charte projet pour [description]. Inclus objectifs SMART, parties prenantes, risques majeurs."'
                  },
                  {
                    name: 'Notion AI',
                    usage: 'Template charte projet avec sections automatisées'
                  }
                ],
                deliverables: [
                  'Template Charte Projet (Word/Notion)',
                  'Template Business Case avec formules financières (Excel)',
                  'Matrice Parties Prenantes (Excel/PowerBI)'
                ]
              }
            }
          ]
        },
        
        {
          id: 'module-2',
          title: 'Module 2: Planification & Ordonnancement',
          duration: '3 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'WBS & Décomposition du Travail',
              competences: [
                'Créer une WBS (Work Breakdown Structure) complète',
                'Décomposer le travail en livrables et activités',
                'Estimer durées et ressources par activité'
              ],
              content: {
                theory: `
                  <h3>1. WBS (Work Breakdown Structure)</h3>
                  <p><strong>Définition</strong>: Décomposition hiérarchique du travail à réaliser, orientée livrables.</p>
                  
                  <h4>Règles d'Or:</h4>
                  <ul>
                    <li><strong>Règle des 100%</strong>: La WBS doit inclure 100% du travail (rien de plus, rien de moins)</li>
                    <li><strong>Orientation livrables</strong>: Chaque niveau décrit un livrable tangible</li>
                    <li><strong>Niveau de détail</strong>: Descendre jusqu'aux work packages (paquets de travail gérables)</li>
                    <li><strong>Code WBS</strong>: Numérotation hiérarchique (ex: 1.2.3)</li>
                  </ul>
                  
                  <h4>Exemple WBS — Projet Site Web:</h4>
                  <pre>
1.0 Projet Site Web E-Commerce
  1.1 Phase Conception
    1.1.1 Cahier des charges
    1.1.2 Maquettes UI/UX
    1.1.3 Architecture technique
  1.2 Phase Développement
    1.2.1 Frontend (HTML/CSS/JS)
    1.2.2 Backend (API/Base de données)
    1.2.3 Intégration paiement
  1.3 Phase Tests
    1.3.1 Tests unitaires
    1.3.2 Tests d'intégration
    1.3.3 Tests utilisateurs
  1.4 Mise en Production
    1.4.1 Déploiement serveurs
    1.4.2 Formation équipe
    1.4.3 Support post-lancement
                  </pre>
                  
                  <h3>2. Dictionnaire WBS</h3>
                  <p>Document détaillant chaque élément WBS:</p>
                  <ul>
                    <li>Code & Nom du work package</li>
                    <li>Description</li>
                    <li>Livrables associés</li>
                    <li>Ressources nécessaires</li>
                    <li>Estimation durée & coût</li>
                    <li>Critères d'acceptation</li>
                  </ul>
                `,
                aiTools: [
                  {
                    name: 'ChatGPT',
                    usage: 'Prompt: "Génère une WBS détaillée pour un projet [description]. Inclus 4 niveaux minimum."'
                  },
                  {
                    name: 'MindMeister/Miro',
                    usage: 'Visualiser WBS en mind map interactif'
                  }
                ],
                deliverables: [
                  'Template WBS (Excel/MindMap)',
                  'Dictionnaire WBS (Word/Notion)',
                  'Checklist validation WBS'
                ]
              }
            }
          ]
        },
        
        {
          id: 'module-3',
          title: 'Module 3: Exécution & Pilotage',
          duration: '2.5 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Gestion des Risques',
              competences: [
                'Identifier et classifier les risques projet',
                'Évaluer probabilité et impact (matrice risques)',
                'Élaborer plans de réponse et contingence'
              ],
              content: {
                theory: `
                  <h3>1. Processus de Gestion des Risques (PMBOK)</h3>
                  <ol>
                    <li><strong>Planifier la gestion des risques</strong>: Définir approche, rôles, budget</li>
                    <li><strong>Identifier les risques</strong>: Brainstorming, Delphi, SWOT, registre risques</li>
                    <li><strong>Analyser qualitativement</strong>: Matrice Probabilité-Impact</li>
                    <li><strong>Analyser quantitativement</strong>: Simulation Monte Carlo, arbre décision</li>
                    <li><strong>Planifier réponses</strong>: Éviter, Transférer, Atténuer, Accepter</li>
                    <li><strong>Mettre en œuvre réponses</strong>: Exécuter plans</li>
                    <li><strong>Surveiller les risques</strong>: Revues périodiques, audits</li>
                  </ol>
                  
                  <h3>2. Matrice Probabilité-Impact</h3>
                  <table border="1" style="width:100%; text-align:center;">
                    <tr>
                      <th>Impact →<br>Probabilité ↓</th>
                      <th>Très Faible</th>
                      <th>Faible</th>
                      <th>Moyen</th>
                      <th>Élevé</th>
                      <th>Très Élevé</th>
                    </tr>
                    <tr>
                      <th>Très Élevée</th>
                      <td style="background:#ff9">Moyen</td>
                      <td style="background:#f90">Élevé</td>
                      <td style="background:#f33; color:#fff">Critique</td>
                      <td style="background:#f33; color:#fff">Critique</td>
                      <td style="background:#f33; color:#fff">Critique</td>
                    </tr>
                    <tr>
                      <th>Élevée</th>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#ff9">Moyen</td>
                      <td style="background:#f90">Élevé</td>
                      <td style="background:#f33; color:#fff">Critique</td>
                      <td style="background:#f33; color:#fff">Critique</td>
                    </tr>
                    <tr>
                      <th>Moyenne</th>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#ff9">Moyen</td>
                      <td style="background:#f90">Élevé</td>
                      <td style="background:#f90">Élevé</td>
                    </tr>
                    <tr>
                      <th>Faible</th>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#ff9">Moyen</td>
                      <td style="background:#f90">Élevé</td>
                    </tr>
                    <tr>
                      <th>Très Faible</th>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#9f9">Faible</td>
                      <td style="background:#ff9">Moyen</td>
                    </tr>
                  </table>
                  
                  <h3>3. Stratégies de Réponse aux Risques</h3>
                  <ul>
                    <li><strong>Éviter</strong>: Éliminer menace (changer plan, scope)</li>
                    <li><strong>Transférer</strong>: Reporter sur tiers (assurance, sous-traitance)</li>
                    <li><strong>Atténuer</strong>: Réduire probabilité ou impact (actions préventives)</li>
                    <li><strong>Accepter</strong>: Ne rien faire (risque acceptable) + plan contingence si se réalise</li>
                  </ul>
                `,
                aiTools: [
                  {
                    name: 'ChatGPT',
                    usage: 'Prompt: "Identifie 10 risques majeurs pour un projet [description]. Classe par probabilité-impact et propose réponses."'
                  }
                ],
                deliverables: [
                  'Registre des Risques (Excel avec matrice)',
                  'Plans de Réponse aux Risques',
                  'Dashboard Risques (PowerBI/Excel)'
                ]
              }
            }
          ]
        },
        
        {
          id: 'module-4',
          title: 'Module 4: Clôture & Capitalisation',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Clôture de Projet & Leçons Apprises',
              competences: [
                'Conduire réunion de clôture (lessons learned)',
                'Archiver documentation projet',
                'Évaluer performance projet (KPI, ROI réalisé)'
              ],
              content: {
                theory: `
                  <h3>1. Processus de Clôture Projet (PMBOK)</h3>
                  <ul>
                    <li><strong>Vérification livrables</strong>: Validation formelle par client/sponsor</li>
                    <li><strong>Transfert produits/services</strong>: Remise au client ou opérations</li>
                    <li><strong>Libération ressources</strong>: Équipe, budgets, équipements</li>
                    <li><strong>Documentation finale</strong>: Archivage complet (charte → rapports finaux)</li>
                    <li><strong>Évaluation performance</strong>: KPI vs objectifs initiaux</li>
                    <li><strong>Capitalisation</strong>: Leçons apprises, best practices</li>
                    <li><strong>Clôture contractuelle</strong>: Solde fournisseurs, signatures</li>
                    <li><strong>Célébration succès</strong>: Reconnaissance équipe</li>
                  </ul>
                  
                  <h3>2. Session Leçons Apprises (Lessons Learned)</h3>
                  <h4>Questions Clés:</h4>
                  <ul>
                    <li>Qu'est-ce qui a bien fonctionné? (best practices)</li>
                    <li>Qu'est-ce qui n'a pas marché? (problèmes, écarts)</li>
                    <li>Qu'aurions-nous dû faire différemment?</li>
                    <li>Quelles compétences manquaient?</li>
                    <li>Quels risques se sont matérialisés? Comment gérés?</li>
                    <li>Recommandations pour projets futurs?</li>
                  </ul>
                  
                  <h3>3. KPI Projet (Exemples)</h3>
                  <table border="1" style="width:100%;">
                    <tr>
                      <th>KPI</th>
                      <th>Formule</th>
                      <th>Cible</th>
                    </tr>
                    <tr>
                      <td>Respect Délais</td>
                      <td>(Date fin réelle - Date fin prévue) / Date fin prévue</td>
                      <td>0% (à l'heure)</td>
                    </tr>
                    <tr>
                      <td>Respect Budget</td>
                      <td>(Coût réel - Coût prévu) / Coût prévu</td>
                      <td>±5%</td>
                    </tr>
                    <tr>
                      <td>Qualité Livrables</td>
                      <td>% défauts / total livrables</td>
                      <td><5%</td>
                    </tr>
                    <tr>
                      <td>Satisfaction Client</td>
                      <td>Note enquête (1-10)</td>
                      <td>≥8/10</td>
                    </tr>
                  </table>
                `,
                deliverables: [
                  'Rapport Clôture Projet',
                  'Document Leçons Apprises',
                  'Base de Connaissances Projet (archive complète)'
                ]
              }
            }
          ]
        }
      ],
      
      // Références académiques & sources
      references: {
        institutions: ['PMI', 'Harvard Business School', 'MIT Sloan', 'HEC Paris'],
        standards: ['PMBOK 7', 'ISO 21500', 'PRINCE2', 'Agile Practice Guide'],
        citations: [
          'PMI (2021). A Guide to the Project Management Body of Knowledge (PMBOK Guide) – 7th Edition.',
          'Kerzner, H. (2017). Project Management: A Systems Approach to Planning, Scheduling, and Controlling.',
          'Wysocki, R. K. (2019). Effective Project Management: Traditional, Agile, Extreme, Hybrid.'
        ]
      },
      
      // Options accessibilité
      accessibility: {
        textToSpeech: true,
        subtitles: false,
        fontSize: 'ajustable',
        contrastMode: 'disponible'
      }
    }
    
    // À étendre pour les 8 autres formations...
  };
  
  // Exposer globalement
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.DigiSchoolContent;
  }
})();
