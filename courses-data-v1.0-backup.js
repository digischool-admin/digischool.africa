/**
 * DigiSchool Africa - Courses Data (Single Source of Truth)
 * Used by BOTH B2B (companies.html) and B2C (b2c.html)
 * Version: 1.0.0
 */

(function() {
  'use strict';

  // Pricing ranges (B2C only) - realistic XOF values
  const PACK_PRICES = {
    short: 180000,    // 2-3 days courses
    medium: 245000,   // 4-5 days courses
    long: 285000,     // 6-10 days courses
  };

  window.DigiSchoolCourses = [
    // 1. Leadership & Management (5 days)
    {
      id: 'leadership-management',
      slug: 'leadership-management',
      title: 'Leadership & Management',
      subtitle: 'Transformez votre équipe avec un leadership augmenté par l\'IA',
      duration_days: 5,
      target_audience: ['Managers', 'Chefs d\'équipe', 'Cadres', 'Directeurs'],
      short_description: 'Leadership transformationnel, management d\'équipes hybrides, gestion des conflits et culture d\'entreprise avec outils IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Leadership Transformationnel & Vision',
          outcomes: [
            'Définir et communiquer une vision inspirante',
            'Aligner les équipes sur les objectifs stratégiques',
            'Développer votre style de leadership authentique'
          ]
        },
        {
          name: 'Management d\'Équipes Hybrides & à Distance',
          outcomes: [
            'Piloter des équipes distribuées efficacement',
            'Maintenir l\'engagement et la cohésion',
            'Utiliser les outils collaboratifs IA (Slack, Teams, Notion)'
          ]
        },
        {
          name: 'Gestion des Conflits & Communication',
          outcomes: [
            'Détecter et résoudre les conflits rapidement',
            'Communication assertive et feedback constructif',
            'Médiation et négociation avec support IA'
          ]
        },
        {
          name: 'Culture d\'Entreprise & Engagement',
          outcomes: [
            'Bâtir une culture performante et inclusive',
            'Mesurer et booster l\'engagement collaborateur',
            'Change management et conduite du changement'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Fondamentaux du Leadership & Diagnostic',
          topics: [
            'Styles de leadership (autoritaire, démocratique, transformationnel)',
            'Auto-diagnostic : votre profil de leader',
            'Vision stratégique et OKRs avec IA',
            'Atelier pratique : définir votre vision'
          ]
        },
        {
          day: 2,
          title: 'Management d\'Équipes Hybrides',
          topics: [
            'Défis du management à distance',
            'Outils collaboratifs IA (Slack AI, Microsoft Copilot)',
            'Rituels d\'équipe et cadence de communication',
            'Cas pratique : gérer une équipe distribuée'
          ]
        },
        {
          day: 3,
          title: 'Communication & Gestion des Conflits',
          topics: [
            'Communication assertive et écoute active',
            'Feedback 360° et feedback continu',
            'Résolution de conflits avec médiation IA',
            'Jeux de rôle : situations conflictuelles'
          ]
        },
        {
          day: 4,
          title: 'Culture d\'Entreprise & Engagement',
          topics: [
            'Diagnostiquer la culture actuelle',
            'Leviers d\'engagement collaborateur',
            'Indicateurs RH et analytics IA (turnover, satisfaction)',
            'Atelier : plan d\'action culture & engagement'
          ]
        },
        {
          day: 5,
          title: 'Change Management & Plan d\'Action',
          topics: [
            'Conduite du changement (modèle ADKAR)',
            'Résistance au changement et leviers',
            'Plan de transformation 90 jours',
            'Présentation des projets individuels'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (génération vision, feedback, scripts)',
          'Microsoft Copilot (collaboration Teams, résumés réunions)',
          'Notion AI (documentation processus, suivi OKRs)',
          'Grammarly (communication écrite professionnelle)'
        ],
        use_cases: [
          'Générer des scripts de feedback constructif personnalisés',
          'Analyser les sentiments d\'équipe via sondages automatisés',
          'Créer des plans de développement individuel (PDI) assistés'
        ],
        prompts: [
          '📝 "Génère un feedback constructif pour un collaborateur [profil] qui [situation]. Ton : bienveillant mais ferme, structuré en 3 points : constat, impact, plan d\'action."',
          '🎯 "Crée un OKR trimestriel pour une équipe [fonction] avec 3 Key Results mesurables alignés sur l\'objectif [objectif stratégique]."',
          '🗣️ "Rédige un script de médiation pour un conflit entre [partie A] et [partie B] concernant [sujet]. Inclure : écoute active, reformulation, recherche de solutions gagnant-gagnant."'
        ]
      },

      prerequisites: [
        'Expérience managériale de 1+ an (ou potentiel managérial identifié)',
        'Accès à un ordinateur avec connexion internet stable',
        'Ouverture au feedback et volonté de progresser'
      ],

      pedagogical_tools: [
        'Cas pratiques issus d\'entreprises africaines',
        'Jeux de rôle et simulations managériales',
        'Grilles d\'auto-évaluation et 360°',
        'Templates : OKRs, feedback, PDI, plans d\'action',
        'Vidéos et articles complémentaires'
      ],

      deliverables: [
        'Vision et OKRs personnels (document stratégique)',
        'Grille de feedback 360° complétée',
        'Plan d\'action culture & engagement (90 jours)',
        'Boîte à outils managériale (templates + prompts IA)',
        'Certificat de formation DigiSchool Africa'
      ]
    },

    // 2. Gestion de projet (PMP) (10 days)
    {
      id: 'gestion-projet-pmp',
      slug: 'gestion-projet-pmp',
      title: 'Gestion de projet (PMP)',
      subtitle: 'Méthodologie PMP alignée et augmentée par l\'IA pour une gestion de projet d\'excellence',
      duration_days: 10,
      target_audience: ['Chefs de projet', 'PMO', 'Consultants', 'Product Managers'],
      short_description: 'Méthodologie PMP complète : cadrage, planification, exécution, suivi, clôture avec IA embarquée pour automatisation et prédiction.',
      pack_price_xof: PACK_PRICES.long,
      
      modules: [
        {
          name: 'Cadrage & Charte Projet',
          outcomes: [
            'Rédiger une charte projet alignée PMP',
            'Identifier les parties prenantes et leurs intérêts',
            'Définir les objectifs SMART et critères de succès'
          ]
        },
        {
          name: 'WBS & Planification Détaillée',
          outcomes: [
            'Construire un WBS exhaustif (Work Breakdown Structure)',
            'Créer un planning Gantt avec dépendances',
            'Estimer charges et ressources avec IA'
          ]
        },
        {
          name: 'Gestion des Risques',
          outcomes: [
            'Identifier et évaluer les risques (matrice)',
            'Plans de contingence et de réponse',
            'Analyse prédictive IA pour anticiper les déviations'
          ]
        },
        {
          name: 'Suivi & Reporting',
          outcomes: [
            'Tableaux de bord projet (avancement, budget, délais)',
            'Reporting exécutif automatisé avec IA',
            'Gestion de la valeur acquise (EVM)'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Introduction PMP & Cadrage Projet',
          topics: [
            'Framework PMP (5 groupes de processus, 10 domaines)',
            'Business case et justification projet',
            'Charte projet : structure et contenu',
            'Atelier : rédiger une charte projet'
          ]
        },
        {
          day: 2,
          title: 'Identification des Parties Prenantes',
          topics: [
            'Registre des parties prenantes',
            'Analyse pouvoir/intérêt',
            'Plan d\'engagement des parties prenantes',
            'Cas pratique : cartographie stakeholders'
          ]
        },
        {
          day: 3,
          title: 'WBS & Décomposition du Travail',
          topics: [
            'Principes de la WBS (décomposition hiérarchique)',
            'Dictionnaire WBS et livrables',
            'Estimation des durées (3 points, analogique)',
            'Outil : logiciel de WBS ou Excel'
          ]
        },
        {
          day: 4,
          title: 'Planification Gantt & Ressources',
          topics: [
            'Diagramme de Gantt et chemin critique',
            'Affectation des ressources et nivellement',
            'Contraintes et dépendances',
            'IA : optimisation planning avec ChatGPT/Copilot'
          ]
        },
        {
          day: 5,
          title: 'Gestion des Coûts & Budgétisation',
          topics: [
            'Estimation des coûts (bottom-up, paramétrique)',
            'Budget de référence (baseline)',
            'Maîtrise des coûts et réserves',
            'Atelier : créer un budget projet'
          ]
        },
        {
          day: 6,
          title: 'Gestion des Risques',
          topics: [
            'Identification des risques (brainstorming, Delphi)',
            'Analyse qualitative et quantitative',
            'Matrice de risques et plans de réponse',
            'IA : analyse prédictive des risques'
          ]
        },
        {
          day: 7,
          title: 'Gestion de la Qualité',
          topics: [
            'Plan qualité et métriques',
            'Audits et contrôles qualité',
            'Amélioration continue (PDCA)',
            'Cas pratique : définir des KPI qualité'
          ]
        },
        {
          day: 8,
          title: 'Communication & Reporting',
          topics: [
            'Plan de communication projet',
            'Reporting : statut, avancement, risques',
            'Automatisation reporting avec IA (Power BI, Tableau)',
            'Atelier : créer un dashboard projet'
          ]
        },
        {
          day: 9,
          title: 'Gestion de la Valeur Acquise (EVM)',
          topics: [
            'Concepts EVM : PV, EV, AC, SPI, CPI',
            'Analyse des écarts (coût, délai)',
            'Prévisions à terminaison (EAC, ETC)',
            'Cas pratique : calculer l\'EVM d\'un projet'
          ]
        },
        {
          day: 10,
          title: 'Clôture & Leçons Apprises',
          topics: [
            'Processus de clôture projet',
            'Rapport de clôture et archivage',
            'Leçons apprises et capitalisation',
            'Préparation certification PMP (conseils)'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (génération charte, WBS, plans de risque)',
          'Microsoft Project + Copilot (planification Gantt)',
          'Notion AI / Monday.com (suivi collaboratif)',
          'Power BI / Tableau (dashboards reporting)'
        ],
        use_cases: [
          'Générer une WBS complète à partir d\'un énoncé projet',
          'Automatiser le reporting hebdomadaire (statut, risques, blocages)',
          'Prédire les déviations de délai/budget avec analyse de tendances IA'
        ],
        prompts: [
          '📋 "Génère une WBS complète pour un projet [type] avec [X] livrables majeurs. Décompose jusqu\'au niveau 3 minimum avec durées estimées."',
          '⚠️ "Identifie 10 risques majeurs pour un projet [contexte] et propose une matrice de risques (probabilité/impact) + plans de réponse."',
          '📊 "Rédige un rapport de statut projet pour la semaine [date] : avancement [X%], risques actifs [liste], blocages [liste], prochaines étapes [3 actions]."'
        ]
      },

      prerequisites: [
        'Expérience projet de 6+ mois (ou formation gestion projet)',
        'Maîtrise Excel/Google Sheets (niveau intermédiaire)',
        'Motivation pour obtenir la certification PMP (35h requises)'
      ],

      pedagogical_tools: [
        'Simulations de projets réels (secteurs variés)',
        'Logiciels : MS Project, Excel, Monday.com (démos)',
        'Templates PMP officiels (charte, WBS, matrice risques)',
        'Études de cas d\'entreprises africaines',
        'Quiz et exercices pratiques quotidiens'
      ],

      deliverables: [
        'Charte projet complète (document Word/PDF)',
        'WBS détaillée et planning Gantt',
        'Matrice des risques et plans de contingence',
        'Budget prévisionnel et baseline',
        'Tableau de bord de reporting exécutif',
        'Rapport de clôture et leçons apprises',
        'Bibliothèque de 50+ prompts IA gestion projet',
        'Attestation 35h (éligible PMP)'
      ]
    },

    // 3. Stratégie & Exécution (4 days)
    {
      id: 'strategie-execution',
      slug: 'strategie-execution',
      title: 'Stratégie & Exécution',
      subtitle: 'De la vision stratégique à l\'exécution opérationnelle avec OKRs et IA',
      duration_days: 4,
      target_audience: ['Dirigeants', 'Directeurs', 'Managers stratégiques', 'Entrepreneurs'],
      short_description: 'Élaboration de stratégie, OKRs, KPIs, transformation digitale et alignement d\'équipe pour une exécution sans faille.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Élaboration de la Stratégie',
          outcomes: [
            'Analyser l\'environnement concurrentiel (SWOT, Porter)',
            'Définir une stratégie différenciante et claire',
            'Communiquer la vision stratégique à tous les niveaux'
          ]
        },
        {
          name: 'OKRs & KPIs',
          outcomes: [
            'Déployer des OKRs alignés sur la stratégie',
            'Définir des KPIs actionnables et mesurables',
            'Créer des tableaux de bord stratégiques avec IA'
          ]
        },
        {
          name: 'Transformation Digitale & Innovation',
          outcomes: [
            'Identifier les opportunités de transformation digitale',
            'Prioriser les initiatives avec matrice valeur/effort',
            'Piloter l\'innovation et expérimentation rapide'
          ]
        },
        {
          name: 'Exécution & Alignement des Équipes',
          outcomes: [
            'Cascader les OKRs jusqu\'aux équipes opérationnelles',
            'Rituels d\'exécution (revues hebdo/mensuelles)',
            'Lever les blocages et accélérer la vélocité'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Diagnostic Stratégique & Analyse Concurrentielle',
          topics: [
            'Analyse SWOT approfondie',
            '5 forces de Porter et positionnement',
            'Tendances marché et insights IA',
            'Atelier : cartographie concurrentielle'
          ]
        },
        {
          day: 2,
          title: 'Formulation de la Stratégie & OKRs',
          topics: [
            'Vision, mission, valeurs (clarification)',
            'Stratégies génériques (coût, différenciation, niche)',
            'OKRs stratégiques (3-5 Objectives max)',
            'Cas pratique : rédiger vos OKRs trimestriels'
          ]
        },
        {
          day: 3,
          title: 'Transformation Digitale & Innovation',
          topics: [
            'Audit de maturité digitale',
            'Quick wins vs projets structurants',
            'Innovation incrémentale vs disruptive',
            'Atelier : roadmap transformation digitale 12 mois'
          ]
        },
        {
          day: 4,
          title: 'Exécution, Alignement & Suivi',
          topics: [
            'Cascade des OKRs (top-down et bottom-up)',
            'Rituels d\'exécution : weekly review, monthly business review',
            'Tableaux de bord stratégiques (Power BI, Tableau)',
            'Plan d\'action 90 jours post-formation'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (analyse SWOT, génération OKRs)',
          'Notion AI / Coda (documentation stratégique)',
          'Power BI / Tableau (dashboards KPIs)',
          'Miro AI (brainstorming visuel stratégique)'
        ],
        use_cases: [
          'Générer une analyse SWOT détaillée à partir de données marché',
          'Créer des OKRs alignés automatiquement pour chaque département',
          'Simuler des scenarios stratégiques (what-if analysis) avec IA'
        ],
        prompts: [
          '🎯 "Génère 3 Objectives stratégiques et 3 Key Results chacun pour une entreprise [secteur] visant [objectif business] sur [trimestre/année]."',
          '🔍 "Analyse SWOT complète pour [entreprise/produit] dans le secteur [secteur] en Afrique : Forces (5), Faiblesses (5), Opportunités (5), Menaces (5)."',
          '🚀 "Propose une roadmap de transformation digitale 12 mois pour [type entreprise] avec 3 phases : Quick Wins (0-3 mois), Projets structurants (3-9 mois), Initiatives long terme (9-12 mois)."'
        ]
      },

      prerequisites: [
        'Expérience managériale ou entrepreneuriale de 3+ ans',
        'Compréhension des états financiers de base',
        'Volonté de challenger le status quo'
      ],

      pedagogical_tools: [
        'Frameworks stratégiques (SWOT, Porter, BCG, Ansoff)',
        'Templates OKRs et KPIs (Google Sheets)',
        'Études de cas d\'entreprises africaines en transformation',
        'Simulations de décisions stratégiques',
        'Outils de visualisation (Miro, Figma)'
      ],

      deliverables: [
        'Analyse SWOT et diagnostic stratégique',
        'OKRs trimestriels cascadés (entreprise → équipes)',
        'Roadmap transformation digitale 12 mois',
        'Tableau de bord stratégique (KPIs)',
        'Plan d\'exécution 90 jours',
        'Bibliothèque de prompts stratégiques IA'
      ]
    },

    // 4. Finance pour non-financiers (3 days)
    {
      id: 'finance-non-financiers',
      slug: 'finance-non-financiers',
      title: 'Finance pour non-financiers',
      subtitle: 'Maîtrisez les fondamentaux financiers et prenez des décisions éclairées avec l\'IA',
      duration_days: 3,
      target_audience: ['Managers', 'Entrepreneurs', 'Chefs de projet', 'Commerciaux'],
      short_description: 'Lecture d\'états financiers, budgétisation, rentabilité, ROI et prise de décision basée sur les chiffres avec analyse IA.',
      pack_price_xof: PACK_PRICES.short,
      
      modules: [
        {
          name: 'Lecture & Analyse des États Financiers',
          outcomes: [
            'Lire et interpréter un bilan comptable',
            'Analyser un compte de résultat (P&L)',
            'Comprendre le tableau de flux de trésorerie'
          ]
        },
        {
          name: 'Budgétisation & Contrôle de Gestion',
          outcomes: [
            'Construire un budget prévisionnel',
            'Suivre les écarts budget vs réalisé',
            'Piloter les coûts et optimiser les dépenses'
          ]
        },
        {
          name: 'Rentabilité, ROI & Indicateurs Clés',
          outcomes: [
            'Calculer la rentabilité d\'un projet (ROI, NPV, IRR)',
            'Indicateurs de performance financière (marge, EBITDA)',
            'Prise de décision basée sur les données avec IA'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Fondamentaux Comptables & Bilan',
          topics: [
            'Les 3 états financiers : bilan, P&L, flux de trésorerie',
            'Actif, passif, capitaux propres : décryptage',
            'Ratios de liquidité et solvabilité',
            'Cas pratique : analyser un bilan réel'
          ]
        },
        {
          day: 2,
          title: 'Compte de Résultat & Budgétisation',
          topics: [
            'Structure du P&L : revenus, coûts, résultat net',
            'Marge brute, marge opérationnelle, marge nette',
            'Budgétisation : top-down vs bottom-up',
            'Atelier Excel : créer un budget prévisionnel'
          ]
        },
        {
          day: 3,
          title: 'Rentabilité, ROI & Décisions Financières',
          topics: [
            'ROI, payback period, NPV, IRR (concepts et calculs)',
            'Analyse de rentabilité projet avec IA',
            'Tableaux de bord financiers automatisés',
            'Cas pratique : arbitrer entre 2 investissements'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (interprétation états financiers)',
          'Excel + Copilot (budgétisation automatisée)',
          'Power BI (dashboards financiers)',
          'QuickBooks / Sage (logiciels comptables avec IA)'
        ],
        use_cases: [
          'Interpréter un bilan et identifier les signaux d\'alerte',
          'Automatiser le suivi budget vs réalisé avec alertes',
          'Simuler des scenarios financiers (best case, worst case) avec IA'
        ],
        prompts: [
          '💰 "Analyse ce bilan [données] et identifie : 3 points forts, 3 points d\'alerte, 2 recommandations d\'amélioration. Focus sur liquidité et endettement."',
          '📊 "Calcule le ROI d\'un projet avec investissement initial [X FCFA], revenus annuels [Y FCFA] sur [Z] ans. Donne aussi NPV avec taux d\'actualisation [T%]."',
          '🎯 "Crée un budget prévisionnel 12 mois pour [type activité] avec revenus [X FCFA/mois], coûts fixes [Y FCFA], coûts variables [Z%]. Inclure : trésorerie mensuelle et point mort."'
        ]
      },

      prerequisites: [
        'Aucun prérequis financier (formation pour débutants)',
        'Maîtrise Excel de base (sommes, pourcentages)',
        'Curiosité pour les chiffres et la gestion'
      ],

      pedagogical_tools: [
        'Cas pratiques avec états financiers réels (anonymisés)',
        'Simulateurs Excel : budget, ROI, NPV',
        'Templates financiers prêts à l\'emploi',
        'Vidéos explicatives (concepts clés)',
        'Quiz et exercices corrigés'
      ],

      deliverables: [
        'Guide de lecture des états financiers',
        'Budget prévisionnel 12 mois (fichier Excel)',
        'Calculateur ROI et analyse de rentabilité',
        'Tableau de bord financier automatisé',
        'Bibliothèque de 30+ prompts finance IA'
      ]
    },

    // 5. Vente B2B & Négociation (5 days)
    {
      id: 'vente-b2b-negociation',
      slug: 'vente-b2b-negociation',
      title: 'Vente B2B & Négociation',
      subtitle: 'Prospection intelligente, closing assisté et négociation gagnante avec l\'IA',
      duration_days: 5,
      target_audience: ['Commerciaux B2B', 'Business Developers', 'Account Managers', 'Entrepreneurs'],
      short_description: 'Prospection B2B, génération de leads, techniques de closing, gestion d\'objections et négociation avec automation IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Prospection B2B & Génération de Leads',
          outcomes: [
            'Construire une base de prospects qualifiés (ICP)',
            'Techniques de prospection multicanal (LinkedIn, email, cold calling)',
            'Automation de la prospection avec IA (scraping, séquences)'
          ]
        },
        {
          name: 'Qualification & Découverte Client',
          outcomes: [
            'Cadre BANT/MEDDIC pour qualifier les leads',
            'Questions de découverte puissantes',
            'Scoring et priorisation automatisée des opportunités'
          ]
        },
        {
          name: 'Techniques de Closing',
          outcomes: [
            'Présentation de valeur percutante (value proposition)',
            'Gestion des objections (méthode CRAC)',
            'Techniques de closing : assumptif, alternative, urgence'
          ]
        },
        {
          name: 'Négociation Commerciale',
          outcomes: [
            'Préparation négociation : BATNA, ZOPA, ancrage',
            'Tactiques de négociation gagnant-gagnant',
            'Finalisation et signature assistée par IA'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Fondamentaux Vente B2B & Prospection',
          topics: [
            'Cycle de vente B2B vs B2C',
            'Définir votre ICP (Ideal Customer Profile)',
            'Sourcing de leads : LinkedIn Sales Navigator, bases de données',
            'Atelier : construire une liste de 100 prospects'
          ]
        },
        {
          day: 2,
          title: 'Prospection Multicanal & Automation',
          topics: [
            'Cold emailing : structure et séquences (3-5 touches)',
            'LinkedIn outreach : messages personnalisés',
            'Cold calling : scripts et bonnes pratiques',
            'Outils IA : lemlist, Waalaxy, Apollo (démos)'
          ]
        },
        {
          day: 3,
          title: 'Qualification & Découverte Client',
          topics: [
            'Cadre BANT (Budget, Authority, Need, Timing)',
            'Cadre MEDDIC (pour ventes complexes)',
            'Questions de découverte : méthode SPIN Selling',
            'Cas pratique : qualifier 5 prospects'
          ]
        },
        {
          day: 4,
          title: 'Présentation de Valeur & Gestion d\'Objections',
          topics: [
            'Pitcher votre solution : structure Before/After/Bridge',
            'Démonstration produit/service efficace',
            'Objections courantes et méthode CRAC (Clarifier, Reformuler, Argumenter, Conclure)',
            'Jeux de rôle : traiter 10 objections'
          ]
        },
        {
          day: 5,
          title: 'Négociation & Closing',
          topics: [
            'Préparation négociation : BATNA, ZOPA, ancrage',
            'Techniques de closing (assumptif, alternative, urgence)',
            'Négociation gagnant-gagnant et concessions',
            'Simulation négociation complète'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (génération scripts, emails, objections)',
          'LinkedIn Sales Navigator + AI (prospection)',
          'lemlist / Waalaxy (automation emailing)',
          'HubSpot / Salesforce (CRM avec IA prédictive)'
        ],
        use_cases: [
          'Générer des cold emails personnalisés à grande échelle',
          'Analyser les réponses prospects et suggérer les meilleures répliques',
          'Scorer automatiquement les leads (probabilité de closing) avec ML'
        ],
        prompts: [
          '📧 "Rédige un cold email de prospection pour [persona] dans [secteur]. Objectif : obtenir un RDV. Ton : professionnel mais chaleureux. Structure : accroche personnalisée, problème identifié, solution en 1 phrase, CTA clair."',
          '🎯 "Génère 10 questions de découverte SPIN (Situation, Problem, Implication, Need-payoff) pour vendre [produit/service] à [type de client]."',
          '💬 "Crée une réponse à l\'objection « C\'est trop cher » avec méthode CRAC : Clarifier (question), Reformuler (empathie), Argumenter (ROI/valeur), Conclure (next step)."'
        ]
      },

      prerequisites: [
        'Expérience commerciale de 6+ mois (ou forte motivation)',
        'Aisance relationnelle et goût du challenge',
        'Accès LinkedIn (profil professionnel recommandé)'
      ],

      pedagogical_tools: [
        'Scripts de prospection prêts à l\'emploi',
        'Templates cold email et LinkedIn',
        'Simulateurs de négociation (jeux de rôle)',
        'CRM simplifié (démo)',
        'Bibliothèque de 100+ objections/réponses'
      ],

      deliverables: [
        'Liste de 100 prospects qualifiés (fichier Excel)',
        'Séquences de prospection multicanal (email + LinkedIn)',
        'Pitch deck et scripts de découverte',
        'Guide de gestion d\'objections (50+ objections)',
        'Plan de négociation type (template)',
        'Bibliothèque de prompts vente IA'
      ]
    },

    // 6. Service Client & Expérience (3 days)
    {
      id: 'service-client-experience',
      slug: 'service-client-experience',
      title: 'Service Client & Expérience',
      subtitle: 'Excellence du service client et CX augmentée par l\'IA pour fidéliser et enchanter',
      duration_days: 3,
      target_audience: ['Service client', 'Customer Success', 'Support', 'Managers CX'],
      short_description: 'Techniques de service client d\'excellence, gestion des réclamations, CX design et satisfaction client avec automation IA.',
      pack_price_xof: PACK_PRICES.short,
      
      modules: [
        {
          name: 'Fondamentaux du Service Client',
          outcomes: [
            'Standards d\'excellence du service client',
            'Communication empathique et professionnelle',
            'Résolution rapide et efficace des demandes'
          ]
        },
        {
          name: 'Gestion des Réclamations & Situations Difficiles',
          outcomes: [
            'Traiter les réclamations avec méthode',
            'Désamorcer les clients mécontents',
            'Transformer une réclamation en opportunité'
          ]
        },
        {
          name: 'Expérience Client (CX) & Fidélisation',
          outcomes: [
            'Cartographier le parcours client (customer journey)',
            'Mesurer la satisfaction (NPS, CSAT, CES)',
            'Automatiser le support avec chatbots IA'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Excellence du Service Client',
          topics: [
            'Les 5 piliers du service client d\'excellence',
            'Communication empathique : écoute active, reformulation',
            'Gestion des attentes client',
            'Atelier : scripts de réponse standards'
          ]
        },
        {
          day: 2,
          title: 'Gestion des Réclamations',
          topics: [
            'Méthode QQOQCP pour traiter les réclamations',
            'Désamorcer un client énervé (technique du disque rayé)',
            'Compensation et gestes commerciaux',
            'Jeux de rôle : 5 situations difficiles'
          ]
        },
        {
          day: 3,
          title: 'Expérience Client & Automation',
          topics: [
            'Customer journey mapping (cartographie)',
            'Indicateurs CX : NPS, CSAT, CES, taux de résolution',
            'Chatbots et support automatisé avec IA',
            'Atelier : créer un chatbot simple (no-code)'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (réponses automatisées, FAQ)',
          'Zendesk / Freshdesk (support ticketing avec IA)',
          'Intercom / Drift (chatbots conversationnels)',
          'Typeform / SurveyMonkey (sondages NPS automatisés)'
        ],
        use_cases: [
          'Générer des réponses personnalisées aux questions clients courantes',
          'Détecter le sentiment client (positif/négatif) et prioriser les tickets',
          'Automatiser 60% des requêtes simples avec chatbot IA'
        ],
        prompts: [
          '💬 "Rédige une réponse empathique à un client mécontent qui [situation]. Ton : professionnel, empathique, orienté solution. Structure : excuses, compréhension, solution proposée, compensation si pertinent."',
          '📋 "Crée une FAQ de 10 questions/réponses pour [produit/service]. Format : Question client (langage naturel), Réponse (claire, concise, actionnable)."',
          '🤖 "Génère un script de chatbot pour qualifier une demande support : 1) Saluer, 2) Identifier le problème (3 questions max), 3) Proposer une solution ou escalader vers humain."'
        ]
      },

      prerequisites: [
        'Aucun prérequis technique (formation pour tous niveaux)',
        'Aisance relationnelle et patience',
        'Motivation pour satisfaire et fidéliser les clients'
      ],

      pedagogical_tools: [
        'Scripts de réponse et templates email',
        'Jeux de rôle et simulations clients difficiles',
        'Études de cas d\'entreprises service-centric',
        'Outils de sondage (démo)',
        'Tutoriels chatbot no-code'
      ],

      deliverables: [
        'Bibliothèque de scripts de réponse (50+ situations)',
        'Guide de gestion des réclamations (méthode step-by-step)',
        'Customer journey map (template)',
        'Plan de mesure satisfaction (NPS, CSAT)',
        'Prototype chatbot simple',
        'Bibliothèque de prompts service client IA'
      ]
    },

    // 7. RH & Performance (4 days)
    {
      id: 'rh-performance',
      slug: 'rh-performance',
      title: 'RH & Performance',
      subtitle: 'Gestion RH moderne et performance collaborative avec analytics IA',
      duration_days: 4,
      target_audience: ['RH', 'Managers', 'HRBP', 'Responsables formation'],
      short_description: 'Recrutement, onboarding, évaluation performance, développement talents et analytics RH avec IA prédictive.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Recrutement & Onboarding',
          outcomes: [
            'Structurer un processus de recrutement efficace',
            'Screening CV et entretiens avec IA',
            'Onboarding immersif et engageant'
          ]
        },
        {
          name: 'Évaluation de la Performance',
          outcomes: [
            'Définir des objectifs SMART et OKRs individuels',
            'Entretiens d\'évaluation annuels et continus',
            'Feedback 360° et plans de développement'
          ]
        },
        {
          name: 'Développement des Talents & Engagement',
          outcomes: [
            'Identifier les hauts potentiels',
            'Plans de succession et mobilité interne',
            'Mesurer et améliorer l\'engagement collaborateur'
          ]
        },
        {
          name: 'Analytics RH & Prédiction',
          outcomes: [
            'KPIs RH : turnover, absentéisme, time-to-hire',
            'Dashboards RH automatisés avec Power BI',
            'Prédire le turnover et les départs avec IA'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Recrutement & Sélection',
          topics: [
            'Définir un profil de poste et persona candidat',
            'Sourcing de candidats (jobboards, LinkedIn, cooptation)',
            'Screening CV avec ATS et IA',
            'Entretiens structurés (questions comportementales)',
            'Atelier : rédiger une offre d\'emploi attractive'
          ]
        },
        {
          day: 2,
          title: 'Onboarding & Intégration',
          topics: [
            'Parcours d\'intégration (pré-boarding, jour 1, 30-60-90 jours)',
            'Buddy system et mentoring',
            'Formation initiale et accès outils',
            'Mesurer le succès de l\'onboarding',
            'Cas pratique : créer un plan d\'onboarding'
          ]
        },
        {
          day: 3,
          title: 'Évaluation Performance & Feedback',
          topics: [
            'Objectifs SMART et OKRs individuels',
            'Entretiens annuels et entretiens continus (1-on-1)',
            'Feedback 360° : collecte et restitution',
            'Plans de développement individuel (PDI)',
            'Atelier : conduire un entretien d\'évaluation'
          ]
        },
        {
          day: 4,
          title: 'Développement Talents & Analytics RH',
          topics: [
            'Identification des hauts potentiels (9-box grid)',
            'Plans de succession et talent pipeline',
            'Engagement collaborateur : leviers et mesure (eNPS)',
            'Analytics RH : turnover, absentéisme, diversité',
            'Prédiction du turnover avec IA (démo)',
            'Atelier : créer un dashboard RH Power BI'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (rédaction offres, questions entretien)',
          'ATS avec IA (Workable, Greenhouse) - screening CV',
          'Culture Amp / Officevibe (sondages engagement)',
          'Power BI / Tableau (dashboards RH)'
        ],
        use_cases: [
          'Générer des descriptions de poste optimisées SEO',
          'Screener 100 CV en 5 minutes et shortlister top 10',
          'Prédire le risque de turnover par collaborateur (ML)'
        ],
        prompts: [
          '📝 "Rédige une offre d\'emploi pour [poste] dans [secteur]. Inclure : mission principale, responsabilités (5), compétences requises (5), profil idéal, avantages. Ton : attractif, inclusif."',
          '❓ "Génère 10 questions d\'entretien comportemental pour évaluer [compétence] chez un candidat [poste]. Format STAR (Situation, Task, Action, Result)."',
          '📊 "Analyse les données RH suivantes [turnover X%, absentéisme Y%, eNPS Z] et identifie : 3 signaux d\'alerte, 2 points positifs, 3 recommandations d\'action prioritaires."'
        ]
      },

      prerequisites: [
        'Expérience RH ou management de 1+ an',
        'Aisance avec Excel/Google Sheets',
        'Sensibilité aux enjeux humains et organisationnels'
      ],

      pedagogical_tools: [
        'Templates RH (offres emploi, grilles entretien, PDI)',
        'Simulateurs d\'entretiens d\'évaluation',
        'Études de cas RH (turnover, engagement, conflits)',
        'Dashboards RH Power BI (démo)',
        'Grilles d\'analyse (9-box, SWOT talents)'
      ],

      deliverables: [
        'Kit recrutement (offres, questions, grilles évaluation)',
        'Plan d\'onboarding 90 jours (template)',
        'Grille d\'entretien annuel et PDI',
        'Dashboard RH automatisé (KPIs)',
        'Plan de développement talents (template)',
        'Bibliothèque de prompts RH IA'
      ]
    },

    // 8. Data & Reporting pour décideurs (3 days)
    {
      id: 'data-reporting-decideurs',
      slug: 'data-reporting-decideurs',
      title: 'Data & Reporting pour décideurs',
      subtitle: 'Exploitez vos données et créez des dashboards décisionnels avec Power BI et IA',
      duration_days: 3,
      target_audience: ['Managers', 'Dirigeants', 'Analystes', 'Contrôleurs de gestion'],
      short_description: 'Collecte de données, nettoyage, visualisation Power BI/Tableau et storytelling data pour prendre des décisions éclairées.',
      pack_price_xof: PACK_PRICES.short,
      
      modules: [
        {
          name: 'Fondamentaux de la Data & Excel Avancé',
          outcomes: [
            'Structurer et nettoyer des données (Excel/Google Sheets)',
            'Formules avancées (RECHERCHEV, SI, TCD)',
            'Automatisation avec macros simples et IA'
          ]
        },
        {
          name: 'Visualisation & Dashboards',
          outcomes: [
            'Principes de datavisualisation efficace',
            'Créer des dashboards Power BI ou Tableau',
            'Choisir les bons graphiques (KPIs, tendances, comparaisons)'
          ]
        },
        {
          name: 'Storytelling Data & Décision',
          outcomes: [
            'Raconter une histoire avec les données',
            'Présenter des insights actionnables',
            'Culture data-driven dans l\'organisation'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Excel Avancé & Nettoyage de Données',
          topics: [
            'Structuration de données : format tabulaire, naming',
            'Formules avancées : RECHERCHEV, INDEX/EQUIV, SI.MULTIPLE',
            'Tableaux croisés dynamiques (TCD) et graphiques croisés',
            'Nettoyage de données : doublons, valeurs manquantes, outliers',
            'Atelier : nettoyer un jeu de données réel'
          ]
        },
        {
          day: 2,
          title: 'Visualisation & Dashboards Power BI',
          topics: [
            'Principes de datavisualisation (Tufte, Few)',
            'Choisir le bon graphique : barre, ligne, camembert, scatter',
            'Introduction Power BI : import, transformation, visuals',
            'Créer un dashboard interactif (KPIs, filtres, slicers)',
            'Atelier : créer votre premier dashboard Power BI'
          ]
        },
        {
          day: 3,
          title: 'Storytelling Data & Décision',
          topics: [
            'Storytelling avec données : structure pyramidale',
            'Présenter des insights : SCQA (Situation, Complication, Question, Answer)',
            'Culture data-driven : KPIs, rituels, accountability',
            'IA pour l\'analyse prédictive (démo)',
            'Cas pratique : présenter 3 insights actionnables'
          ]
        }
      ],

      ai_section: {
        tools: [
          'ChatGPT / Claude (interprétation données, génération insights)',
          'Excel + Copilot (formules automatiques, nettoyage)',
          'Power BI / Tableau (dashboards avec AI insights)',
          'Python + libraries (Pandas, Matplotlib) - optionnel'
        ],
        use_cases: [
          'Nettoyer automatiquement un CSV de 10 000 lignes',
          'Générer un dashboard Power BI à partir d\'un simple brief',
          'Identifier automatiquement les tendances et anomalies dans les données'
        ],
        prompts: [
          '📊 "Analyse ce jeu de données [résumé/extraits] et identifie : 3 tendances clés, 2 anomalies, 3 insights actionnables pour [objectif business]."',
          '📈 "Génère une formule Excel pour calculer [métrique] à partir des colonnes [A, B, C]. Inclure gestion des valeurs manquantes et arrondis."',
          '🎯 "Crée un plan de dashboard Power BI pour suivre [objectif] avec : 5 KPIs principaux, 3 visualisations (types suggérés), filtres recommandés."'
        ]
      },

      prerequisites: [
        'Maîtrise Excel de base (formules simples)',
        'Curiosité pour les données et les chiffres',
        'Aucun prérequis technique avancé'
      ],

      pedagogical_tools: [
        'Fichiers Excel d\'exercices (jeux de données réels)',
        'Power BI Desktop (installation guidée)',
        'Templates de dashboards prêts à l\'emploi',
        'Études de cas d\'entreprises data-driven',
        'Cheatsheets formules Excel et Power BI'
      ],

      deliverables: [
        'Fichier Excel maîtrisé (formules avancées, TCD)',
        'Dashboard Power BI interactif (projet personnel)',
        'Guide de datavisualisation (best practices)',
        'Templates de reporting (Excel + Power BI)',
        'Bibliothèque de prompts data IA'
      ]
    },

    // 9. Productivité & Outils (Microsoft 365) (2 days)
    {
      id: 'productivite-m365',
      slug: 'productivite-m365',
      title: 'Productivité & Outils (Microsoft 365)',
      subtitle: 'Maîtrisez Microsoft 365 et boostez votre productivité avec Copilot et l\'IA',
      duration_days: 2,
      target_audience: ['Tous collaborateurs', 'Assistants', 'Managers', 'Équipes projets'],
      short_description: 'Word, Excel, PowerPoint, Teams, Outlook, OneDrive + Copilot IA pour une productivité optimale au quotidien.',
      pack_price_xof: PACK_PRICES.short,
      
      modules: [
        {
          name: 'Word, Excel, PowerPoint avec Copilot',
          outcomes: [
            'Rédiger des documents professionnels rapidement (Word + Copilot)',
            'Analyses Excel automatisées (formules, TCD, graphiques)',
            'Créer des présentations impactantes (PowerPoint + Designer)'
          ]
        },
        {
          name: 'Collaboration : Teams, Outlook, OneDrive',
          outcomes: [
            'Organiser réunions et projets avec Teams',
            'Gérer emails efficacement (Outlook + règles automatiques)',
            'Partager et co-éditer documents (OneDrive, SharePoint)'
          ]
        },
        {
          name: 'Productivité & Automation',
          outcomes: [
            'Automatiser tâches répétitives (Power Automate)',
            'Gérer son temps et ses priorités',
            'Sécurité et bonnes pratiques Microsoft 365'
          ]
        }
      ],

      day_by_day: [
        {
          day: 1,
          title: 'Word, Excel, PowerPoint + Copilot',
          topics: [
            'Word : styles, templates, révisions, Copilot (rédaction)',
            'Excel : formules essentielles, TCD, mise en forme conditionnelle, Copilot (analyses)',
            'PowerPoint : templates, transitions, Designer (IA), présentation efficace',
            'Atelier : créer un rapport complet (Word + Excel + PPT)'
          ]
        },
        {
          day: 2,
          title: 'Teams, Outlook, Automation',
          topics: [
            'Teams : canaux, réunions, chat, partage fichiers, Copilot (résumés)',
            'Outlook : gestion emails, calendrier, règles automatiques, Copilot (rédaction)',
            'OneDrive/SharePoint : stockage, partage, co-édition temps réel',
            'Power Automate : automatiser workflows simples (démo)',
            'Atelier : optimiser votre setup productivité quotidien'
          ]
        }
      ],

      ai_section: {
        tools: [
          'Microsoft Copilot (intégré Word, Excel, PPT, Teams, Outlook)',
          'Power Automate (automation workflows)',
          'OneDrive / SharePoint (collaboration cloud)',
          'Microsoft Loop (workspace collaboratif nouvelle génération)'
        ],
        use_cases: [
          'Rédiger un rapport de 10 pages en 15 minutes avec Copilot',
          'Analyser 1000 lignes Excel et créer un dashboard automatiquement',
          'Résumer 2h de réunion Teams en 5 bullet points actionnables'
        ],
        prompts: [
          '📄 "Rédige un rapport de [sujet] en 5 pages : introduction, 3 sections principales avec [contenu], conclusion, recommandations. Ton : professionnel, structuré."',
          '📊 "Analyse ce tableau Excel [description] et crée : 1) un graphique pertinent, 2) un tableau croisé dynamique, 3) 3 insights clés."',
          '📧 "Rédige un email professionnel pour [objet] à [destinataire]. Ton : [formel/cordial]. Structure : salutation, contexte (1 phrase), demande claire, conclusion, signature."'
        ]
      },

      prerequisites: [
        'Aucun prérequis (formation pour débutants et intermédiaires)',
        'Accès Microsoft 365 (licence fournie ou existante)',
        'Ordinateur Windows ou Mac'
      ],

      pedagogical_tools: [
        'Démonstrations en direct (screen sharing)',
        'Exercices pratiques guidés (hands-on)',
        'Templates professionnels (Word, Excel, PPT)',
        'Cheatsheets raccourcis clavier',
        'Vidéos tutoriels complémentaires'
      ],

      deliverables: [
        'Classeur de templates professionnels (Word, Excel, PPT)',
        'Guide des raccourcis et astuces (PDF)',
        'Workflows Power Automate prêts à l\'emploi',
        'Setup productivité optimisé (checklist)',
        'Bibliothèque de prompts Copilot IA'
      ]
    }
  ];

  // Compute module pricing dynamically (25% markup for buying individually)
  window.DigiSchoolCourses.forEach(function(course) {
    const numModules = course.modules.length;
    course.module_price_xof = Math.ceil((course.pack_price_xof / numModules) * 1.25);
  });

  // Helper to get course by slug
  window.getCourseBySlugorId = function(identifier) {
    return window.DigiSchoolCourses.find(function(c) {
      return c.id === identifier || c.slug === identifier;
    });
  };

})();
