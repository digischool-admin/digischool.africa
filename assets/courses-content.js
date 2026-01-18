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
    
    ,
// LEADERSHIP & MANAGEMENT
    'leadership-management': {
      id: 'leadership-management',
      title: 'Leadership & Management d'Équipe',
      duration: '8 jours',
      totalModules: 4,
      level: 'Professionnel',
      certification: 'Certificat DigiSchool Leadership',
      
      description: 'Devenez un leader inspirant et efficace. Maîtrisez communication, gestion de conflit, motivation et stratégie d'équipe.',
      
      objectives: [
        'Développer un leadership authentique et inspirant',
        'Communiquer efficacement avec influence',
        'Gérer conflits et situations difficiles',
        'Motiver et développer vos équipes',
        'Piloter la performance collective'
      ],
      
      targetAudience: ['Managers', 'Team leaders', 'Futurs dirigeants', 'Chefs de projet'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Fondamentaux du Leadership',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Les 5 Styles de Leadership',
              competences: ['Identifier votre style de leadership naturel', 'Adapter votre style au contexte', 'Développer votre intelligence émotionnelle'],
              content: {
                theory: '<h3>Styles de Leadership (Goleman)</h3><ul><li><strong>Directif</strong>: Commandement clair en situation de crise</li><li><strong>Visionnaire</strong>: Inspire et mobilise vers une vision commune</li><li><strong>Participatif</strong>: Implique l\'équipe dans les décisions</li><li><strong>Coach</strong>: Développe les talents individuels</li><li><strong>Pacificateur</strong>: Crée harmonie et relations</li></ul>',
                visuals: ['/assets/content/leadership/styles-leadership.png'],
                bibliography: {
                  free: ['Harvard Business Review: Leadership Styles (article gratuit)'],
                  paid: ['Goleman, D. (2017). Leadership: The Power of Emotional Intelligence.']
                }
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'Communication & Influence',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Communication Assertive',
              competences: ['Maîtriser la communication non-violente', 'S\'affirmer sans agressivité', 'Dire non avec diplomatie'],
              content: {
                theory: '<h3>Communication Non-Violente (CNV)</h3><p><strong>4 Étapes CNV:</strong></p><ol><li><strong>Observation</strong>: Faits objectifs sans jugement</li><li><strong>Sentiment</strong>: Exprimer émotion ressentie</li><li><strong>Besoin</strong>: Identifier besoin non satisfait</li><li><strong>Demande</strong>: Formulation concrète et réalisable</li></ol>',
                visuals: ['/assets/content/leadership/cnv-schema.png'],
                deliverables: ['Template retours constructifs', 'Scripts de communication difficile']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'Gestion de Conflit',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Résolution de Conflits',
              competences: ['Identifier types de conflits', 'Médiation efficace', 'Transformer conflit en opportunité'],
              content: {
                theory: '<h3>Modèle Thomas-Kilmann</h3><table border="1"><tr><th>Mode</th><th>Quand utiliser</th></tr><tr><td>Compétition</td><td>Décision urgente, enjeu vital</td></tr><tr><td>Collaboration</td><td>Enjeu complexe, solutions gagnant-gagnant</td></tr><tr><td>Compromis</td><td>Objectifs mutuellement exclusifs</td></tr><tr><td>Évitement</td><td>Problème trivial ou besoin de recul</td></tr><tr><td>Accommodation</td><td>Préserver relation plus importante</td></tr></table>',
                aiTools: [{name: 'ChatGPT', usage: 'Simuler conversations difficiles et préparer réponses'}]
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'Motivation & Performance',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Théories de la Motivation',
              competences: ['Appliquer théorie de Maslow et Herzberg', 'Définir objectifs motivants (OKR)', 'Reconnaissance et feedback'],
              content: {
                theory: '<h3>OKR (Objectives & Key Results)</h3><p><strong>Formule</strong>: Objectif qualitatif inspirant + 3-5 résultats clés mesurables</p><p><strong>Exemple</strong>:</p><ul><li><strong>Objectif</strong>: Devenir leader satisfaction client</li><li><strong>KR1</strong>: NPS passer de 60 à 75</li><li><strong>KR2</strong>: Temps réponse support < 2h</li><li><strong>KR3</strong>: 95% résolution 1er contact</li></ul>',
                deliverables: ['Template OKR', 'Grille feedback 360°']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['Harvard Business School', 'INSEAD', 'MIT Sloan'],
        standards: ['ISO 30408 (HRM)', 'PMI Talent Triangle'],
        citations: ['Goleman, D. (2017). Leadership: The Power of Emotional Intelligence.']
      },
      
      accessibility: {
        textToSpeech: true,
        subtitles: false,
        fontSize: 'ajustable',
        contrastMode: 'disponible'
      }
    },
    
    // DATA ANALYTICS
    'data-analytics': {
      id: 'data-analytics',
      title: 'Data Analytics & Visualisation',
      duration: '10 jours',
      totalModules: 5,
      level: 'Intermédiaire à Avancé',
      certification: 'Certificat DigiSchool Data Analytics',
      
      description: 'Transformez données en insights actionnables. Maîtrisez SQL, Python, statistiques et visualisation (Power BI, Tableau).',
      
      objectives: [
        'Maîtriser SQL pour extraction et manipulation données',
        'Analyser données avec Python (Pandas, NumPy)',
        'Appliquer statistiques descriptives et inférentielles',
        'Créer dashboards percutants (Power BI, Tableau)',
        'Raconter histoires avec les données (data storytelling)'
      ],
      
      targetAudience: ['Data analysts', 'Business analysts', 'Consultants', 'Chefs de projet data'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Fondamentaux SQL',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Requêtes SQL de Base',
              competences: ['SELECT, WHERE, ORDER BY, GROUP BY', 'Jointures (INNER, LEFT, RIGHT, FULL)', 'Fonctions agrégation (COUNT, SUM, AVG, MAX, MIN)'],
              content: {
                theory: '<h3>Syntaxe SQL Essentielle</h3><pre>SELECT colonne1, colonne2, COUNT(*) as total\nFROM table1\nINNER JOIN table2 ON table1.id = table2.fk_id\nWHERE condition = \'valeur\'\nGROUP BY colonne1, colonne2\nHAVING COUNT(*) > 10\nORDER BY total DESC\nLIMIT 100;</pre><h4>Types de Jointures</h4><ul><li><strong>INNER JOIN</strong>: Seulement lignes correspondantes</li><li><strong>LEFT JOIN</strong>: Toutes lignes table gauche + correspondances droite</li><li><strong>RIGHT JOIN</strong>: Toutes lignes table droite + correspondances gauche</li><li><strong>FULL OUTER JOIN</strong>: Toutes lignes des deux tables</li></ul>',
                deliverables: ['50 requêtes SQL types', 'Base de données exercices']
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'Python pour Data Analytics',
          duration: '3 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Pandas & NumPy',
              competences: ['Manipuler DataFrames Pandas', 'Nettoyage et transformation données', 'Analyse exploratoire (EDA)'],
              content: {
                theory: '<h3>Pandas Essentials</h3><pre>import pandas as pd\nimport numpy as np\n\n# Charger données\ndf = pd.read_csv(\'data.csv\')\n\n# Explorer\ndf.head()\ndf.info()\ndf.describe()\n\n# Nettoyer\ndf.dropna()  # Supprimer valeurs manquantes\ndf.fillna(0)  # Remplacer par 0\ndf[\'colonne\'].astype(\'int\')  # Changer type\n\n# Grouper et agréger\ndf.groupby(\'categorie\')[\'ventes\'].sum()\ndf.pivot_table(values=\'ventes\', index=\'mois\', columns=\'produit\', aggfunc=\'sum\')</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer code Pandas pour transformations complexes'}],
                deliverables: ['Notebooks Jupyter exercices', 'Datasets nettoyés']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'Statistiques Appliquées',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Statistiques Descriptives & Inférentielles',
              competences: ['Calculer moyenne, médiane, écart-type', 'Tests d\'hypothèse (t-test, chi2)', 'Corrélation et régression linéaire'],
              content: {
                theory: '<h3>Mesures de Tendance Centrale</h3><ul><li><strong>Moyenne</strong>: Somme valeurs / nombre valeurs</li><li><strong>Médiane</strong>: Valeur centrale (50e percentile)</li><li><strong>Mode</strong>: Valeur la plus fréquente</li></ul><h3>Tests d\'Hypothèse</h3><table border="1"><tr><th>Test</th><th>Usage</th></tr><tr><td>t-test</td><td>Comparer moyennes de 2 groupes</td></tr><tr><td>ANOVA</td><td>Comparer moyennes 3+ groupes</td></tr><tr><td>Chi2</td><td>Indépendance variables catégorielles</td></tr></table>',
                bibliography: {
                  free: ['Khan Academy: Statistics'],
                  paid: ['Kutner, M. et al. (2004). Applied Linear Statistical Models.']
                }
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'Visualisation Power BI',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Dashboards Power BI',
              competences: ['Connecter sources données', 'Créer visuels percutants', 'DAX pour calculs avancés'],
              content: {
                theory: '<h3>Bonnes Pratiques Visualisation</h3><ul><li><strong>Choix graphique</strong>: Barres (comparaison), Lignes (évolution temps), Scatter (corrélation)</li><li><strong>Couleurs</strong>: Max 5-7 couleurs, accessible daltoniens</li><li><strong>Titres clairs</strong>: Insight principal en évidence</li><li><strong>Éviter 3D/camemberts</strong>: Difficiles à lire</li></ul><h3>DAX Basique</h3><pre>Total Ventes = SUM(Table[Ventes])\nVentes Année Précédente = CALCULATE([Total Ventes], SAMEPERIODLASTYEAR(Date[Date]))\n% Croissance = DIVIDE([Total Ventes] - [Ventes Année Précédente], [Ventes Année Précédente], 0)</pre>',
                deliverables: ['Template dashboard Power BI', '10 visuels types']
              }
            }
          ]
        },
        {
          id: 'module-5',
          title: 'Data Storytelling',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-5-1',
              title: 'Raconter avec les Données',
              competences: ['Structurer présentation data-driven', 'Simplifier insights complexes', 'Call-to-action basé données'],
              content: {
                theory: '<h3>Structure Présentation Data</h3><ol><li><strong>Contexte</strong>: Quel problème business?</li><li><strong>Question</strong>: Quelle question analyser?</li><li><strong>Méthodologie</strong>: Comment données collectées/analysées?</li><li><strong>Insights</strong>: Top 3 découvertes clés</li><li><strong>Recommandations</strong>: Actions concrètes à prendre</li><li><strong>Next Steps</strong>: Plan d\'action</li></ol>',
                aiTools: [{name: 'ChatGPT', usage: 'Résumer insights complexes en bullet points actionnables'}]
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['MIT', 'Stanford', 'UC Berkeley'],
        standards: ['CRISP-DM', 'SEMMA'],
        citations: ['McKinney, W. (2022). Python for Data Analysis, 3rd Edition.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    },
    
    // EXCEL AVANCÉ
    'excel-avance': {
      id: 'excel-avance',
      title: 'Excel Avancé & Automatisation',
      duration: '6 jours',
      totalModules: 4,
      level: 'Intermédiaire à Avancé',
      certification: 'Certificat DigiSchool Excel Expert',
      
      description: 'Maîtrisez Excel de A à Z: formules complexes, tableaux croisés dynamiques, Power Query, VBA et automatisation IA.',
      
      objectives: [
        'Maîtriser formules avancées (INDEX, MATCH, XLOOKUP, array formulas)',
        'Créer tableaux croisés dynamiques puissants',
        'Automatiser avec Power Query et Power Pivot',
        'Programmer en VBA pour tâches répétitives',
        'Optimiser workflows avec IA (ChatGPT pour formules)'
      ],
      
      targetAudience: ['Analystes financiers', 'Contrôleurs de gestion', 'Data analysts', 'Tous professionnels Excel'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Formules Avancées',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Recherches Avancées (INDEX, MATCH, XLOOKUP)',
              competences: ['INDEX-MATCH vs VLOOKUP', 'XLOOKUP (Excel 365)', 'Recherches bidirectionnelles'],
              content: {
                theory: '<h3>INDEX-MATCH (Alternative VLOOKUP)</h3><pre>=INDEX(plage_retour, MATCH(valeur_cherchée, plage_recherche, 0))</pre><p><strong>Avantages INDEX-MATCH</strong>:</p><ul><li>Recherche dans n\'importe quelle direction</li><li>Plus rapide sur grands datasets</li><li>Pas d\'erreur si colonnes ajoutées/supprimées</li></ul><h3>XLOOKUP (Excel 365)</h3><pre>=XLOOKUP(valeur, plage_recherche, plage_retour, [si_non_trouvé], [mode_correspondance])</pre>',
                deliverables: ['Workbook 50 formules types', 'Cheat sheet formules Excel']
              }
            },
            {
              id: 'cours-1-2',
              title: 'Formules Matricielles (Array Formulas)',
              competences: ['FILTER, SORT, UNIQUE (Excel 365)', 'SUMPRODUCT pour calculs conditionnels', 'Formules dynamiques'],
              content: {
                theory: '<h3>Dynamic Arrays (Excel 365)</h3><pre>=FILTER(plage, critère_plage=critère)\n=SORT(plage, colonne_index, ordre)\n=UNIQUE(plage)</pre><h3>SUMPRODUCT</h3><pre>=SUMPRODUCT((A2:A100="Produit A")*(B2:B100>1000)*C2:C100)</pre><p>Équivalent à SUMIFS mais plus flexible.</p>',
                aiTools: [{name: 'ChatGPT', usage: 'Prompt: "Écris formule Excel pour [objectif]. Utilise INDEX-MATCH si possible."'}]
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'Tableaux Croisés Dynamiques',
          duration: '1.5 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'TCD Avancés & Slicers',
              competences: ['Créer TCD multi-niveaux', 'Champs calculés et éléments calculés', 'Slicers et Timelines pour filtrage interactif'],
              content: {
                theory: '<h3>Champs Calculés dans TCD</h3><p><strong>Exemple</strong>: Ajouter champ "Marge %" = (Ventes - Coûts) / Ventes</p><p><strong>Étapes</strong>:</p><ol><li>Sélectionner TCD → Onglet Analyse</li><li>Champs, éléments et jeux → Champ calculé</li><li>Entrer formule: =(Ventes-Coûts)/Ventes</li></ol>',
                deliverables: ['Template TCD multi-dimensions', 'Dashboard Excel interactif']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'Power Query & Power Pivot',
          duration: '1.5 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Power Query pour ETL',
              competences: ['Importer données multiples sources', 'Transformer et nettoyer (M language)', 'Combiner requêtes (append, merge)'],
              content: {
                theory: '<h3>Transformations Power Query</h3><ul><li><strong>Supprimer colonnes/lignes</strong>: Nettoyer données inutiles</li><li><strong>Fractionner colonnes</strong>: Par délimiteur, position</li><li><strong>Pivoter/Dépivoter</strong>: Restructurer données</li><li><strong>Fusionner requêtes</strong>: Équivalent JOIN SQL</li></ul><h3>M Language Basique</h3><pre>let\n  Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],\n  FilteredRows = Table.SelectRows(Source, each [Ventes] > 1000),\n  AddedColumn = Table.AddColumn(FilteredRows, "Marge", each [Ventes] - [Coûts])\nin\n  AddedColumn</pre>',
                deliverables: ['Flux ETL Power Query type']
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'VBA & Automatisation',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Macros VBA Essentielles',
              competences: ['Enregistrer et modifier macros', 'Boucles et conditions (For, If)', 'Automatiser rapports récurrents'],
              content: {
                theory: '<h3>Structure Macro VBA</h3><pre>Sub MonRapportAuto()\n  Dim ws As Worksheet\n  Set ws = ThisWorkbook.Sheets("Data")\n  \n  \' Supprimer lignes vides\n  ws.Range("A:Z").SpecialCells(xlCellTypeBlanks).EntireRow.Delete\n  \n  \' Créer TCD\n  Dim pc As PivotCache\n  Set pc = ThisWorkbook.PivotCaches.Create(xlDatabase, ws.Range("A1").CurrentRegion)\n  pc.CreatePivotTable TableDestination:=Sheets("Rapport").Range("A3"), TableName:="TCD1"\nEnd Sub</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer code VBA pour automatiser tâches répétitives'}],
                deliverables: ['10 macros types prêtes à l\'emploi']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['Microsoft', 'Harvard Business School'],
        standards: ['Microsoft Office Specialist Expert'],
        citations: ['Jelen, B. & Syrstad, T. (2021). Excel VBA Programming for Dummies.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    },
    
    // POWER BI
    'powerbi-expert': {
      id: 'powerbi-expert',
      title: 'Power BI Expert & DAX',
      duration: '7 jours',
      totalModules: 4,
      level: 'Intermédiaire à Avancé',
      certification: 'Certificat DigiSchool Power BI Expert',
      
      description: 'Créez dashboards professionnels avec Power BI. Maîtrisez DAX, modélisation données, et déploiement Power BI Service.',
      
      objectives: [
        'Connecter et modéliser données (star schema)',
        'Maîtriser DAX (mesures, colonnes calculées, time intelligence)',
        'Créer visuels percutants et interactifs',
        'Publier et partager sur Power BI Service',
        'Optimiser performance rapports'
      ],
      
      targetAudience: ['Data analysts', 'BI developers', 'Consultants BI', 'Managers data-driven'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Modélisation Données',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Star Schema & Relations',
              competences: ['Concevoir modèle en étoile (fact/dimension tables)', 'Créer relations (1-to-many, bidirectional)', 'Optimiser cardinalité'],
              content: {
                theory: '<h3>Star Schema (Modèle en Étoile)</h3><p><strong>Architecture</strong>:</p><ul><li><strong>Table Fait (Fact)</strong>: Transactions, métriques (ventes, quantités, montants)</li><li><strong>Tables Dimensions</strong>: Descriptifs (clients, produits, dates, géographie)</li></ul><h3>Règles Relations Power BI</h3><ul><li>Privilégier relations <strong>1-to-many</strong></li><li>Éviter relations <strong>many-to-many</strong> (performance)</li><li>Activer <strong>bidirectional</strong> seulement si nécessaire</li><li>Marquer table Date comme <strong>Date Table</strong></li></ul>',
                visuals: ['/assets/content/powerbi/star-schema.png'],
                deliverables: ['Template modèle star schema', 'Checklist relations Power BI']
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'DAX Fondamental',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Mesures vs Colonnes Calculées',
              competences: ['Créer mesures DAX (SUM, AVERAGE, COUNT)', 'Différencier mesures et colonnes calculées', 'Utiliser variables VAR'],
              content: {
                theory: '<h3>Mesure DAX</h3><pre>Total Ventes = SUM(Ventes[Montant])</pre><p><strong>Caractéristiques</strong>: Calculé dynamiquement selon contexte filtres.</p><h3>Colonne Calculée</h3><pre>Marge = Ventes[Montant] - Ventes[Coût]</pre><p><strong>Caractéristiques</strong>: Calculé ligne par ligne, stocké dans modèle (consomme RAM).</p><h3>Variables VAR</h3><pre>Profit Margin % = \nVAR TotalRevenue = SUM(Ventes[Montant])\nVAR TotalCost = SUM(Ventes[Coût])\nRETURN\n  DIVIDE(TotalRevenue - TotalCost, TotalRevenue, 0)</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer mesures DAX complexes avec contexte business'}]
              }
            },
            {
              id: 'cours-2-2',
              title: 'Time Intelligence DAX',
              competences: ['Calculs Year-to-Date (YTD)', 'Comparaisons période précédente', 'Moving averages'],
              content: {
                theory: '<h3>Time Intelligence Functions</h3><pre>Ventes YTD = TOTALYTD([Total Ventes], Dates[Date])\n\nVentes Mois Précédent = CALCULATE([Total Ventes], PREVIOUSMONTH(Dates[Date]))\n\nVentes Année Précédente = CALCULATE([Total Ventes], SAMEPERIODLASTYEAR(Dates[Date]))\n\nCroissance YoY % = \nDIVIDE([Total Ventes] - [Ventes Année Précédente], [Ventes Année Précédente], 0)</pre>',
                deliverables: ['Bibliothèque 30 mesures DAX types']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'Visuels & UX',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Design de Dashboards Efficaces',
              competences: ['Choisir visuels adaptés au message', 'Appliquer principes UX (hiérarchie, whitespace)', 'Créer navigation intuitive (bookmarks, drill-through)'],
              content: {
                theory: '<h3>Règles Design Dashboard</h3><ul><li><strong>Règle 5 secondes</strong>: Insight principal visible en 5s</li><li><strong>Layout F-pattern</strong>: Infos clés en haut gauche</li><li><strong>Max 7 visuels/page</strong>: Éviter surcharge cognitive</li><li><strong>Couleurs cohérentes</strong>: Palette 3-5 couleurs max</li></ul><h3>Visuels par Objectif</h3><table border="1"><tr><th>Objectif</th><th>Visual</th></tr><tr><td>Comparer valeurs</td><td>Barres horizontales</td></tr><tr><td>Évolution temps</td><td>Ligne ou Area chart</td></tr><tr><td>Distribution</td><td>Histogramme</td></tr><tr><td>Corrélation</td><td>Scatter plot</td></tr><tr><td>Composition</td><td>Stacked bar (éviter camembert)</td></tr></table>',
                deliverables: ['Template dashboard professionnel', 'Guidelines design Power BI']
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'Power BI Service & Collaboration',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Déploiement & Partage',
              competences: ['Publier rapports sur Power BI Service', 'Configurer actualisation données (gateway)', 'Partager avec sécurité (RLS)'],
              content: {
                theory: '<h3>Row-Level Security (RLS)</h3><p><strong>Scénario</strong>: Chaque manager voit seulement son équipe.</p><pre>[Region] = USERNAME()</pre><p>Puis assigner utilisateurs aux rôles dans Power BI Service.</p><h3>Scheduled Refresh</h3><ol><li>Installer <strong>Power BI Gateway</strong> (on-premises)</li><li>Configurer source données dans Service</li><li>Définir fréquence refresh (ex: tous les jours 8h)</li></ol>',
                deliverables: ['Checklist déploiement Power BI', 'Guide RLS']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['Microsoft', 'SQLBI'],
        standards: ['Microsoft Certified: Data Analyst Associate'],
        citations: ['Russo, M. & Ferrari, A. (2020). The Definitive Guide to DAX, 2nd Edition.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    },
    
    // MARKETING DIGITAL
    'marketing-digital': {
      id: 'marketing-digital',
      title: 'Marketing Digital & Growth Hacking',
      duration: '9 jours',
      totalModules: 5,
      level: 'Intermédiaire',
      certification: 'Certificat DigiSchool Marketing Digital',
      
      description: 'Maîtrisez SEO, SEA, Social Media, Email Marketing et Growth Hacking. Boostez acquisition et conversion avec l\'IA.',
      
      objectives: [
        'Optimiser SEO et référencement naturel',
        'Piloter campagnes Google Ads et Meta Ads',
        'Créer stratégie Social Media engageante',
        'Automatiser Email Marketing (Mailchimp, ActiveCampaign)',
        'Appliquer Growth Hacking pour croissance rapide'
      ],
      
      targetAudience: ['Marketeurs digitaux', 'Entrepreneurs', 'Community managers', 'Growth marketers'],
      
      modules: [
        {
          id: 'module-1',
          title: 'SEO (Référencement Naturel)',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'SEO On-Page & Technique',
              competences: ['Optimiser balises title, meta, H1-H6', 'Structure URL et maillage interne', 'Core Web Vitals et performance'],
              content: {
                theory: '<h3>Facteurs SEO On-Page</h3><ul><li><strong>Title Tag</strong>: 50-60 caractères, mot-clé principal au début</li><li><strong>Meta Description</strong>: 150-160 caractères, CTA clair</li><li><strong>H1</strong>: 1 seul par page, inclut mot-clé principal</li><li><strong>URL</strong>: Courte, descriptive, avec tirets (ex: /formation-seo)</li><li><strong>Images</strong>: Alt text descriptif, format WebP, <150KB</li></ul><h3>Core Web Vitals (Google)</h3><ul><li><strong>LCP</strong> (Largest Contentful Paint): <2.5s</li><li><strong>FID</strong> (First Input Delay): <100ms</li><li><strong>CLS</strong> (Cumulative Layout Shift): <0.1</li></ul>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer meta descriptions optimisées SEO pour 50 pages'}],
                deliverables: ['Checklist SEO On-Page', 'Audit SEO template']
              }
            },
            {
              id: 'cours-1-2',
              title: 'SEO Off-Page & Backlinks',
              competences: ['Stratégie netlinking (backlinks qualité)', 'Guest blogging et partenariats', 'Suivi autorité domaine (DA)'],
              content: {
                theory: '<h3>Types de Backlinks</h3><ul><li><strong>Dofollow</strong>: Transmet "jus SEO" (link juice)</li><li><strong>Nofollow</strong>: Pas de jus SEO mais trafic potentiel</li></ul><h3>Comment Obtenir Backlinks Qualité?</h3><ol><li><strong>Contenu exceptionnel</strong>: Guides, études, infographies linkables</li><li><strong>Guest posting</strong>: Articles invités sur sites autorité</li><li><strong>Broken link building</strong>: Proposer remplacement liens cassés</li><li><strong>HARO</strong> (Help A Reporter Out): Répondre journalistes</li></ol>',
                deliverables: ['Stratégie netlinking 6 mois', 'Liste 100 sites prospects backlinks']
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'SEA (Google Ads)',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Campagnes Google Search Ads',
              competences: ['Recherche mots-clés (Keyword Planner)', 'Créer annonces texte performantes', 'Optimiser Quality Score et CPC'],
              content: {
                theory: '<h3>Structure Campagne Google Ads</h3><pre>Compte\n└── Campagne (objectif: leads, ventes, trafic)\n    ├── Groupe d\'annonces 1 (thème spécifique)\n    │   ├── Mots-clés (10-20 max)\n    │   └── Annonces (3 minimum)\n    └── Groupe d\'annonces 2</pre><h3>Quality Score (1-10)</h3><p>Détermine CPC et position annonce. Facteurs:</p><ul><li><strong>CTR attendu</strong>: Taux de clic historique</li><li><strong>Pertinence annonce</strong>: Mots-clés dans annonce</li><li><strong>Landing page experience</strong>: Vitesse, pertinence, mobile-friendly</li></ul>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer 20 variantes annonces Google Ads avec mots-clés'}],
                deliverables: ['Template structure campagne', 'Dashboard suivi Google Ads']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'Social Media Marketing',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Stratégie Contenu & Engagement',
              competences: ['Créer calendrier éditorial', 'Maximiser engagement (reach, interactions)', 'Analyser métriques (Facebook Insights, Instagram Analytics)'],
              content: {
                theory: '<h3>Règle 80/20 Contenu Social Media</h3><ul><li><strong>80% Valeur</strong>: Éducatif, divertissant, inspirant (pas de vente)</li><li><strong>20% Promotion</strong>: Offres, produits, services</li></ul><h3>Métriques Clés</h3><table border="1"><tr><th>Métrique</th><th>Objectif</th></tr><tr><td>Reach</td><td>Notoriété (awareness)</td></tr><tr><td>Engagement Rate</td><td>(Likes + Comments + Shares) / Reach</td></tr><tr><td>CTR</td><td>Clics / Impressions</td></tr><tr><td>Conversions</td><td>Leads, ventes, inscriptions</td></tr></table>',
                deliverables: ['Calendrier éditorial 3 mois', 'Bibliothèque templates posts']
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'Email Marketing',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Automation & Segmentation',
              competences: ['Créer workflows automatisés (welcome, nurturing, réactivation)', 'Segmenter base emails', 'Optimiser taux ouverture et clic'],
              content: {
                theory: '<h3>Workflows Email Types</h3><ul><li><strong>Welcome Series</strong>: 3-5 emails nouveaux inscrits (présentation, valeur, offre)</li><li><strong>Lead Nurturing</strong>: Éduquer prospects jusqu\'à achat</li><li><strong>Abandon Panier</strong>: Rappel produits laissés (récupérer 10-30% ventes perdues)</li><li><strong>Réactivation</strong>: Ré-engager inactifs (30+ jours)</li></ul><h3>Optimisation Objet Email</h3><ul><li><strong>Longueur</strong>: 40-50 caractères (mobile)</li><li><strong>Personnalisation</strong>: Prénom, entreprise (↑22% taux ouverture)</li><li><strong>Curiosité/Urgence</strong>: "Dernières heures", "Ne ratez pas"</li><li><strong>A/B Testing</strong>: Tester 2 objets, garder meilleur</li></ul>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer séquence 5 emails nurturing pour [persona]'}],
                deliverables: ['5 workflows email prêts à l\'emploi', 'Guide segmentation base']
              }
            }
          ]
        },
        {
          id: 'module-5',
          title: 'Growth Hacking',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-5-1',
              title: 'Acquisition & Rétention Hacks',
              competences: ['Framework AARRR (Pirate Metrics)', 'Viral loops et programmes parrainage', 'Optimiser funnel conversion'],
              content: {
                theory: '<h3>Framework AARRR</h3><ol><li><strong>Acquisition</strong>: Comment utilisateurs arrivent? (SEO, Ads, Referral)</li><li><strong>Activation</strong>: Première expérience wow (onboarding)</li><li><strong>Rétention</strong>: Retour utilisateurs (emails, push, in-app)</li><li><strong>Referral</strong>: Recommandation amis (viralité)</li><li><strong>Revenue</strong>: Monétisation</li></ol><h3>Exemples Growth Hacks</h3><ul><li><strong>Dropbox</strong>: +500MB stockage par parrainage (↑3900% signups)</li><li><strong>Airbnb</strong>: Intégration Craigslist (croissance initiale)</li><li><strong>Hotmail</strong>: "PS: I love you. Get your free email at Hotmail" (signature)</li></ul>',
                deliverables: ['Canvas Growth Hacking', '20 hacks testables immédiatement']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['Google', 'Meta Blueprint', 'HubSpot Academy'],
        standards: ['Google Ads Certification', 'Facebook Blueprint Certification'],
        citations: ['Holiday, R. (2014). Growth Hacker Marketing.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    },
// TRANSFORMATION DIGITALE
    'transformation-digitale': {
      id: 'transformation-digitale',
      title: 'Transformation Digitale & Innovation',
      duration: '6 jours',
      totalModules: 4,
      level: 'Intermédiaire',
      certification: 'Certificat DigiSchool Transformation Digitale',
      
      description: 'Pilotez la transformation digitale de votre organisation. Cloud, DevOps, agilité, cybersécurité et stratégie numérique.',
      
      objectives: [
        'Élaborer stratégie de transformation digitale',
        'Comprendre Cloud (AWS, Azure, GCP) et SaaS',
        'Adopter DevOps et méthodologies Agile',
        'Sécuriser infrastructure (cybersécurité de base)',
        'Intégrer IA dans les processus métier'
      ],
      
      targetAudience: ['CDO/CTO', 'Consultants transformation', 'Chefs de projet digital', 'Managers innovation'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Stratégie Digitale',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Audit & Roadmap Digitale',
              competences: ['Évaluer maturité digitale (diagnostic)', 'Définir vision et objectifs', 'Bâtir roadmap transformation'],
              content: {
                theory: '<h3>Matrice Maturité Digitale</h3><table border="1"><tr><th>Dimension</th><th>Niveau 1</th><th>Niveau 5</th></tr><tr><td>Culture</td><td>Résistance changement</td><td>Innovation continue</td></tr><tr><td>Technologie</td><td>Systèmes legacy</td><td>Cloud-native</td></tr><tr><td>Data</td><td>Silos isolés</td><td>Data-driven culture</td></tr><tr><td>Clients</td><td>Offline majoritaire</td><td>Omnicanal seamless</td></tr></table><h3>Roadmap Transformation</h3><ol><li><strong>Quick Wins (0-6 mois)</strong>: Projets rapides à impact visible</li><li><strong>Fondations (6-18 mois)</strong>: Infrastructure, outils, formation</li><li><strong>Optimisation (18-36 mois)</strong>: Automatisation, IA, data analytics</li></ol>',
                deliverables: ['Template audit maturité digitale', 'Canevas roadmap transformation']
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'Cloud & Infrastructure',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Cloud Computing (IaaS, PaaS, SaaS)',
              competences: ['Comparer AWS, Azure, GCP', 'Migrer vers le cloud (stratégies)', 'Optimiser coûts cloud'],
              content: {
                theory: '<h3>Modèles Cloud</h3><ul><li><strong>IaaS</strong> (Infrastructure as a Service): Serveurs virtuels (EC2, Azure VMs)</li><li><strong>PaaS</strong> (Platform as a Service): Environnements de développement (Heroku, Google App Engine)</li><li><strong>SaaS</strong> (Software as a Service): Applications clés en main (Salesforce, Office 365)</li></ul><h3>Stratégies Migration Cloud</h3><ul><li><strong>Lift & Shift (Rehost)</strong>: Migrer sans modification</li><li><strong>Refactor</strong>: Optimiser pour cloud-native</li><li><strong>Rearchitect</strong>: Re-concevoir entièrement (microservices)</li></ul>',
                aiTools: [{name: 'ChatGPT', usage: 'Comparer coûts AWS vs Azure pour [architecture]'}],
                deliverables: ['Checklist migration cloud', 'Calculateur ROI cloud']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'DevOps & Agilité',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Culture DevOps & CI/CD',
              competences: ['Comprendre principes DevOps', 'Mettre en place pipeline CI/CD', 'Monitoring et feedback loops'],
              content: {
                theory: '<h3>Principes DevOps</h3><ul><li><strong>Collaboration Dev/Ops</strong>: Fin des silos</li><li><strong>Automatisation</strong>: Tests, déploiements, monitoring</li><li><strong>Mesure</strong>: Métriques DORA (deploy frequency, lead time, MTTR, change fail %)</li><li><strong>Feedback rapide</strong>: Itérations courtes</li></ul><h3>Pipeline CI/CD</h3><pre>Code Push → Tests automatisés → Build → Deploy Staging → Tests E2E → Deploy Production → Monitoring</pre>',
                deliverables: ['Template pipeline CI/CD', 'Dashboard DevOps metrics']
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'Cybersécurité Essentiels',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Sécuriser Infrastructure & Données',
              competences: ['Appliquer principes sécurité (CIA)', 'Gérer identités et accès (IAM)', 'Conformité RGPD/ISO 27001'],
              content: {
                theory: '<h3>Triade CIA</h3><ul><li><strong>Confidentiality</strong>: Chiffrement données sensibles</li><li><strong>Integrity</strong>: Données non altérées (hashing, signatures)</li><li><strong>Availability</strong>: Services accessibles (redondance, DDoS protection)</li></ul><h3>Bonnes Pratiques IAM</h3><ul><li><strong>Principe moindre privilège</strong>: Accès minimum nécessaire</li><li><strong>MFA</strong> (Multi-Factor Authentication): 2FA obligatoire</li><li><strong>Rotation credentials</strong>: Mots de passe/tokens renouvelés régulièrement</li></ul>',
                deliverables: ['Checklist sécurité infrastructure', 'Politique IAM type']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['AWS', 'Microsoft', 'Google Cloud', 'ISACA'],
        standards: ['ISO 27001', 'NIST Cybersecurity Framework', 'TOGAF'],
        citations: ['Kim, G. et al. (2016). The DevOps Handbook.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    },
    
    // RESSOURCES HUMAINES
    'gestion-rh-moderne': {
      id: 'gestion-rh-moderne',
      title: 'Gestion RH Moderne & People Analytics',
      duration: '7 jours',
      totalModules: 4,
      level: 'Intermédiaire',
      certification: 'Certificat DigiSchool RH Moderne',
      
      description: 'Modernisez la fonction RH: recrutement data-driven, SIRH, marque employeur, expérience collaborateur et people analytics.',
      
      objectives: [
        'Optimiser recrutement avec IA et ATS',
        'Maîtriser SIRH (Workday, SAP SuccessFactors)',
        'Développer marque employeur attractive',
        'Mesurer engagement et performance (people analytics)',
        'Accompagner transformation et conduite du changement'
      ],
      
      targetAudience: ['RH/DRH', 'Recruteurs', 'Responsables formation', 'Consultants RH'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Recrutement Digital',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Sourcing & ATS',
              competences: ['Utiliser LinkedIn Recruiter et booléens', 'Configurer ATS (Applicant Tracking System)', 'Automatiser tri CV avec IA'],
              content: {
                theory: '<h3>Recherche Booléenne LinkedIn</h3><pre>("Data Scientist" OR "Data Analyst") AND (Python OR R) AND Paris</pre><h3>ATS Workflow</h3><ol><li><strong>Sourcing</strong>: Diffusion offre multi-canal</li><li><strong>Tri automatique</strong>: IA filtre CV selon critères</li><li><strong>Tests/Entretiens</strong>: Planification automatisée</li><li><strong>Collaboration</strong>: Feedback équipe recrutement</li><li><strong>Reporting</strong>: KPI (time-to-hire, cost-per-hire)</li></ol>',
                aiTools: [{name: 'ChatGPT', usage: 'Rédiger descriptions de poste optimisées SEO et inclusives'}],
                deliverables: ['Templates offres emploi', 'Guide recherche booléenne avancée']
              }
            },
            {
              id: 'cours-1-2',
              title: 'Marque Employeur',
              competences: ['Définir Employee Value Proposition (EVP)', 'Créer contenu RH (vidéos, témoignages)', 'Optimiser pages carrières'],
              content: {
                theory: '<h3>EVP (Employee Value Proposition)</h3><p><strong>Formule</strong>: Ce que l\'entreprise offre (compensation, culture, développement, impact) en échange de l\'engagement collaborateur.</p><h3>Piliers Marque Employeur</h3><ul><li><strong>Salaire & Avantages</strong>: Compétitif + flexibilité</li><li><strong>Culture</strong>: Valeurs, ambiance, inclusion</li><li><strong>Développement</strong>: Formation, évolution carrière</li><li><strong>Impact</strong>: Mission, RSE</li></ul>',
                deliverables: ['Canvas EVP', 'Plan contenu marque employeur 6 mois']
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'SIRH & Digitalisation RH',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Choisir et Déployer SIRH',
              competences: ['Comparer SIRH (Workday, SAP, BambooHR)', 'Gérer paie et administration RH digitale', 'Automatiser workflows RH'],
              content: {
                theory: '<h3>Modules SIRH</h3><ul><li><strong>Core HR</strong>: Dossiers collaborateurs, organigrammes</li><li><strong>Paie</strong>: Calcul automatisé, conformité légale</li><li><strong>Temps & Activités</strong>: Gestion absences, congés</li><li><strong>Recrutement</strong>: ATS intégré</li><li><strong>Formation</strong>: LMS (Learning Management System)</li><li><strong>Performance</strong>: Entretiens annuels, objectifs</li></ul><h3>Critères Sélection SIRH</h3><ol><li>Taille entreprise (PME vs Entreprise)</li><li>Budget (licence/utilisateur/mois)</li><li>Intégrations (paie, comptabilité)</li><li>UX collaborateurs</li><li>Support client</li></ol>',
                deliverables: ['Grille comparaison SIRH', 'Cahier des charges SIRH']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'People Analytics',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-3-1',
              title: 'KPI RH & Dashboards',
              competences: ['Mesurer turnover, absentéisme, engagement', 'Prédire départs (attrition)', 'Visualiser données RH (Power BI, Tableau)'],
              content: {
                theory: '<h3>KPI RH Essentiels</h3><table border="1"><tr><th>KPI</th><th>Formule</th><th>Cible</th></tr><tr><td>Turnover</td><td>(Départs / Effectif moyen) x 100</td><td><10%</td></tr><tr><td>Absentéisme</td><td>(Jours absence / Jours travaillés) x 100</td><td><5%</td></tr><tr><td>Time-to-hire</td><td>Jours entre diffusion offre et acceptation</td><td><30 jours</td></tr><tr><td>Engagement</td><td>Score enquête (1-10)</td><td>>7.5</td></tr></table><h3>Prédiction Attrition (IA)</h3><p>Variables: ancienneté, dernière augmentation, performance, manager, télétravail → Modèle ML prédit probabilité départ.</p>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer insights people analytics à partir de données RH'}],
                deliverables: ['Dashboard People Analytics (Power BI)', 'Modèle prédiction turnover (Python/Excel)']
              }
            }
          ]
        },
        {
          id: 'module-4',
          title: 'Conduite du Changement',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-4-1',
              title: 'Accompagner Transformation',
              competences: ['Appliquer modèle ADKAR', 'Gérer résistances au changement', 'Former et communiquer efficacement'],
              content: {
                theory: '<h3>Modèle ADKAR (Prosci)</h3><ol><li><strong>Awareness</strong>: Conscience du besoin de changement</li><li><strong>Desire</strong>: Désir de participer et soutenir</li><li><strong>Knowledge</strong>: Connaissance comment changer</li><li><strong>Ability</strong>: Capacité à mettre en œuvre (compétences)</li><li><strong>Reinforcement</strong>: Renforcement pour pérenniser</li></ol><h3>Résistances au Changement</h3><ul><li><strong>Peur inconnu</strong>: Communiquer vision claire</li><li><strong>Perte contrôle</strong>: Impliquer collaborateurs</li><li><strong>Manque compétences</strong>: Formation adaptée</li></ul>',
                deliverables: ['Plan conduite changement ADKAR', 'Kit communication transformation']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['SHRM', 'CIPD', 'Harvard Business School'],
        standards: ['ISO 30408 (HRM)', 'SHRM-CP/SCP'],
        citations: ['Ulrich, D. (2013). HR from the Outside In.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    },
    
    // POWERPOINT EXPERT
    'powerpoint-expert': {
      id: 'powerpoint-expert',
      title: 'PowerPoint Expert & Storytelling Visuel',
      duration: '4 jours',
      totalModules: 3,
      level: 'Intermédiaire',
      certification: 'Certificat DigiSchool PowerPoint Expert',
      
      description: 'Créez présentations percutantes et professionnelles. Design, storytelling, animations, templates et automatisation IA.',
      
      objectives: [
        'Maîtriser design de slides (hiérarchie, couleurs, typographie)',
        'Raconter histoires captivantes (structure narrative)',
        'Créer templates réutilisables et charte graphique',
        'Automatiser avec VBA et IA (ChatGPT pour contenu)',
        'Présenter avec impact (techniques de pitch)'
      ],
      
      targetAudience: ['Consultants', 'Commerciaux', 'Managers', 'Entrepreneurs'],
      
      modules: [
        {
          id: 'module-1',
          title: 'Design de Slides Professionnel',
          duration: '2 jours',
          courses: [
            {
              id: 'cours-1-1',
              title: 'Principes Design & Hiérarchie Visuelle',
              competences: ['Appliquer règle des tiers et grilles', 'Choisir typographie et couleurs', 'Utiliser whitespace efficacement'],
              content: {
                theory: '<h3>Règles Design Slides</h3><ul><li><strong>1 idée par slide</strong>: Éviter surcharge cognitive</li><li><strong>Règle 6x6</strong>: Max 6 bullets, 6 mots par bullet</li><li><strong>Contraste élevé</strong>: Texte foncé sur fond clair (ou inverse)</li><li><strong>Typographie</strong>: Max 2 polices (titre + corps)</li><li><strong>Images haute qualité</strong>: Éviter clip art, privilégier photos pros</li></ul><h3>Palette Couleurs</h3><p>Utiliser <strong>3 couleurs max</strong>:</p><ul><li><strong>Couleur principale</strong>: Identité entreprise</li><li><strong>Couleur secondaire</strong>: Accents, CTA</li><li><strong>Neutre</strong>: Gris/noir pour texte</li></ul>',
                deliverables: ['Template slides professionnel', 'Guide design PowerPoint']
              }
            },
            {
              id: 'cours-1-2',
              title: 'Visuels & Infographies',
              competences: ['Créer schémas et diagrammes (SmartArt)', 'Concevoir infographies data', 'Intégrer icônes et pictogrammes'],
              content: {
                theory: '<h3>Types de Visuels</h3><ul><li><strong>Processus</strong>: Flèches, timeline horizontale</li><li><strong>Comparaison</strong>: Tableaux, barres comparatives</li><li><strong>Hiérarchie</strong>: Pyramides, organigrammes</li><li><strong>Relations</strong>: Venn diagrams, matrices</li></ul><h3>Infographies Data</h3><p>Transformer données en visuels clairs:</p><ol><li>Choisir graphique adapté (barres, lignes, camembert)</li><li>Simplifier axes et légendes</li><li>Mettre insight principal en évidence (couleur, annotation)</li></ol>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer idées de visuels pour [concept]'}],
                deliverables: ['Bibliothèque 50 templates visuels', 'Pack icônes premium']
              }
            }
          ]
        },
        {
          id: 'module-2',
          title: 'Storytelling & Structure',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-2-1',
              title: 'Structure Narrative Efficace',
              competences: ['Appliquer structure Situation-Complication-Résolution', 'Créer arc narratif captivant', 'Préparer slides de backup (annexes)'],
              content: {
                theory: '<h3>Structure SCR (Pyramid Principle - McKinsey)</h3><ol><li><strong>Situation</strong>: Contexte, état actuel</li><li><strong>Complication</strong>: Problème, enjeu, opportunité</li><li><strong>Résolution</strong>: Solution proposée, plan d\'action</li></ol><h3>Exemple Pitch Commercial</h3><ul><li><strong>Situation</strong>: "Votre équipe passe 20h/sem sur reporting manuel"</li><li><strong>Complication</strong>: "Coût 50k€/an + risque erreurs"</li><li><strong>Résolution</strong>: "Notre outil automatise 80% du reporting → ROI 6 mois"</li></ul>',
                deliverables: ['Template pitch deck', 'Checklist structure narrative']
              }
            }
          ]
        },
        {
          id: 'module-3',
          title: 'Automatisation & Techniques Avancées',
          duration: '1 jour',
          courses: [
            {
              id: 'cours-3-1',
              title: 'Créer Templates & Masques',
              competences: ['Concevoir masque de diapositives personnalisé', 'Créer thèmes réutilisables', 'Automatiser génération slides (VBA)'],
              content: {
                theory: '<h3>Masque de Diapositives</h3><p><strong>Avantages</strong>:</p><ul><li>Uniformité graphique automatique</li><li>Gain temps (logos, footers, mise en page prédéfinis)</li><li>Facilité maintenance (1 modif = toutes slides)</li></ul><h3>VBA Automatisation</h3><pre>Sub GenererSlidesDonnees()\n  Dim pres As Presentation\n  Set pres = ActivePresentation\n  \n  \' Lire données Excel\n  Dim xlApp As Object, xlWb As Object\n  Set xlApp = CreateObject("Excel.Application")\n  Set xlWb = xlApp.Workbooks.Open("data.xlsx")\n  \n  \' Créer slides pour chaque ligne\n  For i = 2 To xlWb.Sheets(1).UsedRange.Rows.Count\n    Set newSlide = pres.Slides.Add(pres.Slides.Count + 1, ppLayoutText)\n    newSlide.Shapes(1).TextFrame.TextRange.Text = xlWb.Sheets(1).Cells(i, 1).Value\n  Next i\nEnd Sub</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer contenu 30 slides pour [sujet] avec structure et bullets'}],
                deliverables: ['Template master slides entreprise', 'Scripts VBA automatisation']
              }
            },
            {
              id: 'cours-3-2',
              title: 'Techniques de Présentation',
              competences: ['Gérer transitions et animations (sans surcharge)', 'Mode présentateur et notes', 'Préparer et répéter pitch'],
              content: {
                theory: '<h3>Animations: Moins c\'est Mieux</h3><ul><li><strong>Animations sobres</strong>: Fade, wipe (éviter rebonds, rotations)</li><li><strong>Objectif</strong>: Guider attention, pas distraire</li><li><strong>Timing</strong>: 0.3-0.5s par animation</li></ul><h3>Préparation Présentation</h3><ol><li><strong>Répétition</strong>: 3-5 fois minimum à voix haute</li><li><strong>Timing</strong>: 1-2 min par slide (adapter selon audience)</li><li><strong>Backup plan</strong>: Prévoir questions difficiles, slides annexes</li><li><strong>Check technique</strong>: Projeter en conditions réelles</li></ol>',
                deliverables: ['Checklist pré-présentation', 'Guide gestion trac et improvisation']
              }
            }
          ]
        }
      ],
      
      references: {
        institutions: ['McKinsey', 'BCG', 'Harvard Business School'],
        standards: ['Microsoft Office Specialist PowerPoint'],
        citations: ['Reynolds, G. (2011). Presentation Zen: Simple Ideas on Presentation Design.']
      },
      
      accessibility: {textToSpeech: true, subtitles: false, fontSize: 'ajustable', contrastMode: 'disponible'}
    }
    
    // À étendre pour les 8 autres formations...
  };
  
  // Exposer globalement
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.DigiSchoolContent;
  }
})();
