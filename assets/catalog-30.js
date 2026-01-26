/**
 * DigiSchool Africa - Catalogue 30 Parcours V1.2
 * 10 Piliers × 3 Niveaux (Fondation, Maîtrise, Leadership)
 * DIFFÉRENCIATION COMPLÈTE - Zéro duplication textuelle entre parcours
 * Chaque module est spécifique au pilier + niveau + métier
 */

const DIGISCHOOL_CATALOG = {
  version: "1.2",
  
  pillars: [
    { id: "p01", name: "Leadership & Management", icon: "👔" },
    { id: "p02", name: "Gestion de Projet & PMO", icon: "📊" },
    { id: "p03", name: "Data, BI & Performance", icon: "📈" },
    { id: "p04", name: "Finance, Contrôle de Gestion & Investissement", icon: "💰" },
    { id: "p05", name: "Gouvernance, Risques & Conformité", icon: "🛡️" },
    { id: "p06", name: "Transformation Digitale & Conduite du Changement", icon: "🚀" },
    { id: "p07", name: "Cybersécurité & Résilience", icon: "🔐" },
    { id: "p08", name: "IT Service Management (ITIL4) & Architecture SI", icon: "⚙️" },
    { id: "p09", name: "Supply Chain, Achats & Traçabilité", icon: "🔗" },
    { id: "p10", name: "Marketing, Commercial & Growth + Culture Entrepreneuriale", icon: "💡" }
  ],
  
  pricing: {
    fondation: { pack: 214376, modules_count: 4 },
    maitrise: { pack: 267970, modules_count: 5 },
    leadership: { pack: 321564, modules_count: 6 }
  },
  
  calculateModulePrice(pack_fcfa, modules_count) {
    return Math.round((pack_fcfa * 1.3) / modules_count);
  },
  
  courses: [
    // ========== P01: LEADERSHIP & MANAGEMENT ==========
    {
      id: "p01-fondation", pillarId: "p01", pillarName: "Leadership & Management", pillarIcon: "👔",
      level: "Fondation", title: "Leadership & Management — Fondation",
      short: "Posture managériale, animation d'équipe, feedback et premiers pas en leadership pour jeunes managers",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Posture & Communication Managériale", bullets: [
          "Développer son assertivité et sa présence en contexte professionnel",
          "Écoute active, reformulation et gestion des émotions en équipe",
          "IA pour analyser votre style de communication et proposer des ajustements"
        ]},
        { id: "m2", title: "Animer une Réunion d'Équipe Efficace", bullets: [
          "Structurer un ordre du jour et faciliter les échanges productifs",
          "Gérer les personnalités difficiles et désamorcer les tensions",
          "Outils collaboratifs (Teams, Miro) + IA pour résumer les décisions"
        ]},
        { id: "m3", title: "Donner du Feedback Constructif", bullets: [
          "Modèle DESC et feedback 360° pour améliorer la performance individuelle",
          "Reconnaître les succès et corriger les écarts sans démotiver",
          "Suivi des plans d'action avec tableaux de bord individuels"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Plan Managérial 30 Jours", bullets: [
          "Diagnostic de votre équipe et identification des leviers d'action rapides",
          "Construire votre feuille de route managériale sur les 30 premiers jours",
          "Présentation au groupe et feedback personnalisé par un coach expert"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p01-maitrise", pillarId: "p01", pillarName: "Leadership & Management", pillarIcon: "👔",
      level: "Maîtrise", title: "Leadership & Management — Maîtrise",
      short: "Leadership transformationnel, management hybride, gestion des conflits complexes et culture d'engagement",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Leadership Transformationnel & Vision", bullets: [
          "Définir et communiquer une vision inspirante alignée sur la stratégie entreprise",
          "Mobiliser les équipes autour d'objectifs communs et créer du sens au quotidien",
          "IA pour cartographier l'engagement collectif et identifier les influenceurs clés"
        ]},
        { id: "m2", title: "Management d'Équipes Hybrides (Présentiel/Distanciel)", bullets: [
          "Piloter la performance en mode distribué avec rituels adaptés",
          "Maintenir cohésion, collaboration et innovation à distance",
          "Outils avancés (Slack, Asana, Notion) + IA pour le suivi temps réel"
        ]},
        { id: "m3", title: "Gestion Avancée des Conflits & Médiation", bullets: [
          "Détecter les signaux faibles et intervenir avant l'escalade critique",
          "Techniques de médiation professionnelle et négociation gagnant-gagnant",
          "IA pour analyser les dynamiques d'équipe et anticiper les tensions"
        ]},
        { id: "m4", title: "Bâtir une Culture d'Engagement Durable", bullets: [
          "Créer une culture performante, inclusive et résiliente face au changement",
          "Mesurer l'engagement avec eNPS, enquêtes pulse et analytics RH",
          "Plans d'action RH data-driven et amélioration continue de l'expérience collaborateur"
        ]},
        { id: "m5", title: "Capstone: Stratégie Managériale 90 Jours", bullets: [
          "Diagnostic organisationnel complet et identification des gaps culturels prioritaires",
          "Plan de transformation managériale avec KPIs d'engagement et de rétention",
          "Pitch exécutif devant jury d'experts RH et validation terrain"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p01-leadership", pillarId: "p01", pillarName: "Leadership & Management", pillarIcon: "👔",
      level: "Leadership", title: "Leadership & Management — Leadership",
      short: "Vision stratégique, gouvernance organisationnelle, pilotage de la performance multi-équipes et transformation culturelle à grande échelle",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Stratégique & Direction Générale", bullets: [
          "Élaborer une vision long terme et traduire en roadmap exécutable sur 3-5 ans",
          "Arbitrages stratégiques complexes et allocation optimale des ressources rares",
          "IA pour la veille stratégique, la simulation de scénarios et le war gaming"
        ]},
        { id: "m2", title: "Gouvernance Organisationnelle & Operating Model", bullets: [
          "Design organisationnel adapté à la stratégie et au contexte marché",
          "Framework de gouvernance: comités décisionnels, RACI et circuits de validation",
          "Alignement stratégie-exécution et accountability à tous les niveaux"
        ]},
        { id: "m3", title: "Pilotage Performance Multi-Équipes", bullets: [
          "KPIs consolidés, tableaux de bord exécutifs et reporting au board",
          "Management transverse, gestion des interdépendances et synergies inter-BU",
          "Culture de performance collective et coaching systématique des managers N-1"
        ]},
        { id: "m4", title: "Risques Stratégiques, Conformité & Audit", bullets: [
          "Cartographie des risques stratégiques (marché, opérationnel, réputationnel)",
          "Programme de conformité groupe et contrôle interne multi-sites",
          "Préparation aux audits externes, certifications ISO et due diligence investisseurs"
        ]},
        { id: "m5", title: "Transformation Culturelle & Change at Scale", bullets: [
          "Conduire le changement stratégique dans des organisations complexes multi-pays",
          "Scaling des opérations, internationalisation et transformation digitale accélérée",
          "Gestion des résistances, engagement des parties prenantes et storytelling exécutif"
        ]},
        { id: "m6", title: "Board Pack & Simulation Comité Direction", bullets: [
          "Préparer des présentations exécutives (Board, actionnaires, conseil d'administration)",
          "Business cases stratégiques, recommandations d'investissement et pitch DG",
          "Simulation de comités de direction: Q&A sous pression, gestion de crise et décisions rapides"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P02: GESTION DE PROJET & PMO ==========
    {
      id: "p02-fondation", pillarId: "p02", pillarName: "Gestion de Projet & PMO", pillarIcon: "📊",
      level: "Fondation", title: "Gestion de Projet & PMO — Fondation",
      short: "Bases de la gestion de projet, planification, suivi et reporting avec outils standards et IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux de la Gestion de Projet", bullets: [
          "Cycle de vie projet: cadrage, planification, exécution, clôture",
          "Vocabulaire métier (WBS, jalons, livrables, ressources, risques)",
          "IA pour générer automatiquement une structure projet initiale"
        ]},
        { id: "m2", title: "Planification avec MS Project & IA", bullets: [
          "Créer un planning réaliste: tâches, durées, dépendances, chemin critique",
          "Estimer les ressources et budgets avec méthodes bottom-up et analogiques",
          "IA pour optimiser l'allocation des ressources et détecter les goulots"
        ]},
        { id: "m3", title: "Suivi & Reporting de Projet", bullets: [
          "Mesurer l'avancement avec KPIs (délai, coût, périmètre, qualité)",
          "Créer des tableaux de bord et rapports d'avancement hebdomadaires",
          "Automatiser le reporting avec IA et alertes préventives sur les dérives"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Pilotage d'un Projet Réel", bullets: [
          "Gérer un mini-projet du cadrage à la clôture avec livrables réels",
          "Présenter les résultats, leçons apprises et recommandations d'amélioration",
          "Validation par un chef de projet senior et certification des acquis"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p02-maitrise", pillarId: "p02", pillarName: "Gestion de Projet & PMO", pillarIcon: "📊",
      level: "Maîtrise", title: "Gestion de Projet & PMO — Maîtrise",
      short: "Méthodologie PMP avancée, gestion de portefeuille, PMO et préparation certification PMP avec IA prédictive",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Cadrage Avancé & Business Case", bullets: [
          "Élaborer une charte projet solide et identifier toutes les parties prenantes",
          "Construire le business case: ROI, VAN, TRI et analyse coûts-bénéfices",
          "IA pour l'analyse de risques préliminaire et la simulation de scénarios"
        ]},
        { id: "m2", title: "Planification Multi-Projets & PMO", bullets: [
          "Gérer un portefeuille de projets avec priorisation et arbitrages stratégiques",
          "Mettre en place un PMO (Project Management Office) efficient",
          "Outils avancés (MS Project Server, Jira, Monday) + IA pour la planification capacitaire"
        ]},
        { id: "m3", title: "Pilotage Performance & Earned Value Management", bullets: [
          "Maîtriser l'EVM (Earned Value Management) pour anticiper les dérives budget/délai",
          "Tableaux de bord exécutifs multi-projets et reporting au comité de pilotage",
          "IA prédictive pour forecaster la date de fin et le budget final"
        ]},
        { id: "m4", title: "Gestion des Risques & Qualité Projet", bullets: [
          "Cartographie exhaustive des risques, matrice probabilité-impact et plans de mitigation",
          "Standards qualité (ISO 21500, PMBOK) et audits qualité internes",
          "IA pour identifier les risques cachés et proposer des actions correctives"
        ]},
        { id: "m5", title: "Capstone + Préparation Certification PMP", bullets: [
          "Projet complexe end-to-end avec cahier des charges client réel",
          "Préparation intensive à l'examen PMP (180 questions, 230 minutes)",
          "Simulation d'examen, correction détaillée et validation par formateur certifié PMP"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p02-leadership", pillarId: "p02", pillarName: "Gestion de Projet & PMO", pillarIcon: "📊",
      level: "Leadership", title: "Gestion de Projet & PMO — Leadership",
      short: "Gouvernance de portefeuille stratégique, PMO d'entreprise, transformation Agile à l'échelle et pilotage programmes complexes multi-pays",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Gouvernance de Portefeuille Stratégique", bullets: [
          "Aligner le portefeuille de projets sur la stratégie d'entreprise et les OKRs",
          "Processus de sélection, priorisation et arrêt de projets avec scoring multi-critères",
          "IA pour optimiser l'allocation budgétaire et maximiser la création de valeur"
        ]},
        { id: "m2", title: "PMO d'Entreprise & Centre d'Excellence", bullets: [
          "Structurer un PMO d'entreprise: rôles, processus, outils et méthodologies standards",
          "Développer un centre d'excellence projet avec formation continue des chefs de projet",
          "Système de gestion de la connaissance projet et capitalisation des retours d'expérience"
        ]},
        { id: "m3", title: "Pilotage de Programmes Multi-Projets", bullets: [
          "Gérer des programmes complexes avec interdépendances fortes entre projets",
          "Coordination transverse, gestion des synergies et résolution des conflits de ressources",
          "Tableaux de bord programme consolidés et reporting exécutif au board"
        ]},
        { id: "m4", title: "Transformation Agile at Scale (SAFe, LeSS)", bullets: [
          "Déployer une transformation Agile à l'échelle de l'organisation (SAFe, LeSS, Spotify)",
          "Accompagner le changement culturel: mindset agile, équipes autonomes et amélioration continue",
          "IA pour mesurer la vélocité, la qualité et prédire les sprints futurs"
        ]},
        { id: "m5", title: "Risques Stratégiques & Conformité Projet", bullets: [
          "Cartographie des risques stratégiques au niveau portefeuille et programmes",
          "Conformité réglementaire (RGPD, ISO 27001, SOX) dans les projets critiques",
          "Préparation aux audits externes et due diligence investisseurs sur les projets clés"
        ]},
        { id: "m6", title: "Board Pack Programme & Simulation Comex", bullets: [
          "Préparer des présentations exécutives sur l'avancement du portefeuille de projets",
          "Business cases de programmes stratégiques et recommandations d'investissement",
          "Simulation de comité exécutif: défendre un programme sous pression et gérer les arbitrages"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P03: DATA, BI & PERFORMANCE ==========
    {
      id: "p03-fondation", pillarId: "p03", pillarName: "Data, BI & Performance", pillarIcon: "📈",
      level: "Fondation", title: "Data, BI & Performance — Fondation",
      short: "Excel avancé, Power BI, visualisation de données et storytelling data pour débutants",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Excel Avancé pour l'Analyse de Données", bullets: [
          "Tableaux croisés dynamiques, formules avancées (INDEX/EQUIV, SI.CONDITIONS)",
          "Nettoyer et structurer les données avec Power Query",
          "IA pour détecter les anomalies et suggérer des analyses pertinentes"
        ]},
        { id: "m2", title: "Introduction à Power BI & Visualisation", bullets: [
          "Créer des dashboards interactifs avec Power BI Desktop",
          "Connecter multiples sources de données (Excel, SQL, API)",
          "Principes de data visualisation: choix des graphiques et storytelling visuel"
        ]},
        { id: "m3", title: "KPIs Métier & Tableaux de Bord Opérationnels", bullets: [
          "Identifier les KPIs pertinents par fonction (Ventes, RH, Finance, Ops)",
          "Construire des tableaux de bord opérationnels pour le suivi quotidien",
          "Automatiser les rapports hebdomadaires avec Power BI Service et IA"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Dashboard Métier Complet", bullets: [
          "Créer un dashboard interactif sur un cas réel d'entreprise (ventes, RH ou finance)",
          "Présenter les insights clés et recommandations data-driven à un comité métier",
          "Validation par un expert BI et certification des compétences opérationnelles"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p03-maitrise", pillarId: "p03", pillarName: "Data, BI & Performance", pillarIcon: "📈",
      level: "Maîtrise", title: "Data, BI & Performance — Maîtrise",
      short: "Business Intelligence avancée, analyses prédictives, SQL et architecture data warehouse avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "SQL Avancé & Data Modeling", bullets: [
          "Requêtes SQL complexes (JOIN, sous-requêtes, window functions)",
          "Modélisation en étoile et flocon pour data warehouses",
          "IA pour optimiser les requêtes et suggérer des index pertinents"
        ]},
        { id: "m2", title: "Power BI Avancé & DAX", bullets: [
          "Maîtriser le langage DAX pour les calculs avancés et mesures dynamiques",
          "Créer des rapports paginés et dashboards exécutifs multi-pages",
          "Intégration de Python/R dans Power BI pour analyses statistiques avancées"
        ]},
        { id: "m3", title: "Analyses Prédictives & Machine Learning", bullets: [
          "Introduction au machine learning: régression, classification, clustering",
          "Modèles prédictifs avec Python (scikit-learn) ou Azure ML",
          "IA pour automatiser la sélection de modèles et le feature engineering"
        ]},
        { id: "m4", title: "Architecture BI & Data Governance", bullets: [
          "Concevoir une architecture BI évolutive (ETL, data lake, data warehouse)",
          "Data governance: qualité des données, sécurité et conformité (RGPD)",
          "Mettre en place un catalogue de données et des pipelines automatisés"
        ]},
        { id: "m5", title: "Capstone: Solution BI End-to-End", bullets: [
          "Projet complet: extraction, transformation, modélisation, visualisation et prédiction",
          "Présenter une solution BI complète avec recommandations stratégiques au board",
          "Validation par un Data Architect et certification des compétences avancées"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p03-leadership", pillarId: "p03", pillarName: "Data, BI & Performance", pillarIcon: "📈",
      level: "Leadership", title: "Data, BI & Performance — Leadership",
      short: "Stratégie data-driven, gouvernance data d'entreprise, CDO et transformation data à l'échelle groupe",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie Data-Driven & Vision CDO", bullets: [
          "Élaborer une stratégie data alignée sur les objectifs business groupe",
          "Rôle du Chief Data Officer: organisation, équipe, roadmap et quick wins",
          "IA pour identifier les opportunités data à forte valeur ajoutée"
        ]},
        { id: "m2", title: "Gouvernance Data d'Entreprise", bullets: [
          "Framework de gouvernance: ownership, stewardship, qualité et conformité",
          "Politiques de sécurité des données et gestion des accès (RBAC, ABAC)",
          "Conformité réglementaire multi-pays (RGPD, CCPA, lois locales)"
        ]},
        { id: "m3", title: "Architecture Data Groupe (Data Mesh, Data Fabric)", bullets: [
          "Concevoir une architecture data moderne: data lake, lakehouse, data fabric",
          "Approche Data Mesh: data products, domaines métier et fédération",
          "Cloud data platforms (Azure Synapse, AWS Redshift, Google BigQuery) et IA"
        ]},
        { id: "m4", title: "Transformation Data & Change Management", bullets: [
          "Conduire la transformation culturelle vers une organisation data-driven",
          "Développer les compétences data à tous les niveaux (data literacy)",
          "Accompagner le changement: résistances, adoption et mesure de l'impact"
        ]},
        { id: "m5", title: "Monétisation des Données & Data Products", bullets: [
          "Créer des data products vendables en interne et externe",
          "Business models data: vente de données, insights-as-a-service, APIs payantes",
          "IA pour identifier les segments clients et optimiser le pricing"
        ]},
        { id: "m6", title: "Board Pack Data & Simulation Comex", bullets: [
          "Préparer des présentations exécutives sur la valeur créée par la data",
          "Business cases data: investissements, ROI et recommandations stratégiques",
          "Simulation comité exécutif: défendre une roadmap data sous pression du board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P04: FINANCE, CONTRÔLE DE GESTION & INVESTISSEMENT ==========
    {
      id: "p04-fondation", pillarId: "p04", pillarName: "Finance, Contrôle de Gestion & Investissement", pillarIcon: "💰",
      level: "Fondation", title: "Finance, Contrôle de Gestion & Investissement — Fondation",
      short: "Comptabilité de base, lecture d'états financiers, budgétisation et analyse financière pour non-financiers",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Comptabilité Générale & États Financiers", bullets: [
          "Principes comptables de base: débit, crédit, journal, grand livre",
          "Lire et interpréter un bilan, compte de résultat et flux de trésorerie",
          "IA pour extraire automatiquement les chiffres clés et détecter les anomalies"
        ]},
        { id: "m2", title: "Analyse Financière & Ratios Clés", bullets: [
          "Calculer et interpréter les ratios de liquidité, solvabilité et rentabilité",
          "Analyser la santé financière d'une entreprise et identifier les signaux d'alerte",
          "Benchmarker avec les concurrents et le secteur à l'aide de l'IA"
        ]},
        { id: "m3", title: "Budgétisation & Prévisions", bullets: [
          "Construire un budget prévisionnel par centre de coût et par activité",
          "Suivre les écarts budget vs réel et proposer des actions correctives",
          "Automatiser les forecasts avec des modèles prédictifs et IA"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Analyse Financière d'Entreprise", bullets: [
          "Analyser les états financiers d'une entreprise réelle sur 3 ans",
          "Présenter un diagnostic financier complet avec recommandations actionnables",
          "Validation par un expert-comptable ou contrôleur de gestion senior"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p04-maitrise", pillarId: "p04", pillarName: "Finance, Contrôle de Gestion & Investissement", pillarIcon: "💰",
      level: "Maîtrise", title: "Finance, Contrôle de Gestion & Investissement — Maîtrise",
      short: "Contrôle de gestion avancé, analyse coûts-bénéfices, valorisation d'entreprise et décisions d'investissement avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Contrôle de Gestion Stratégique", bullets: [
          "Mettre en place un système de contrôle de gestion complet (reporting, KPIs, tableaux de bord)",
          "Analyse des écarts, des coûts par activité (méthode ABC) et du seuil de rentabilité",
          "IA pour détecter les dérives budgétaires et proposer des scénarios d'optimisation"
        ]},
        { id: "m2", title: "Valorisation d'Entreprise & DCF", bullets: [
          "Méthodes de valorisation: DCF (Discounted Cash Flow), multiples de marché, actif net réévalué",
          "Construire un modèle financier complet sur Excel avec projections 5 ans",
          "IA pour automatiser les projections et simuler différents scénarios de croissance"
        ]},
        { id: "m3", title: "Décisions d'Investissement & Business Cases", bullets: [
          "Évaluer la rentabilité d'un projet: VAN, TRI, délai de récupération",
          "Construire des business cases solides pour convaincre les décideurs",
          "Analyse de sensibilité et simulations Monte Carlo avec IA"
        ]},
        { id: "m4", title: "Gestion de Trésorerie & Cash Management", bullets: [
          "Piloter la trésorerie: budget de trésorerie, BFR et optimisation du cash",
          "Financement court terme (crédit de trésorerie, affacturage) et placement excédents",
          "IA prédictive pour anticiper les besoins de trésorerie et éviter les ruptures"
        ]},
        { id: "m5", title: "Capstone: Projet d'Investissement Complexe", bullets: [
          "Évaluer un projet d'investissement industriel ou d'acquisition avec due diligence",
          "Présenter un business case complet avec recommandation Go/No-Go au comité d'investissement",
          "Validation par un directeur financier et certification des compétences avancées"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p04-leadership", pillarId: "p04", pillarName: "Finance, Contrôle de Gestion & Investissement", pillarIcon: "💰",
      level: "Leadership", title: "Finance, Contrôle de Gestion & Investissement — Leadership",
      short: "Direction financière, stratégie financière groupe, M&A et pilotage financier multi-entités avec IA prédictive",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie Financière & Vision CFO", bullets: [
          "Élaborer la stratégie financière alignée sur la stratégie d'entreprise et les objectifs de croissance",
          "Optimisation de la structure financière: fonds propres, dette, levée de fonds",
          "IA pour modéliser différents scénarios de financement et d'allocation du capital"
        ]},
        { id: "m2", title: "Pilotage Financier Groupe Multi-Entités", bullets: [
          "Consolidation des comptes groupe: normes IFRS, élimination inter-compagnies",
          "Contrôle de gestion groupe: reporting consolidé, KPIs par BU et par région",
          "Tableaux de bord exécutifs financiers et reporting au board/actionnaires"
        ]},
        { id: "m3", title: "Fusions & Acquisitions (M&A)", bullets: [
          "Processus M&A complet: origination, due diligence, valorisation, négociation, intégration",
          "Structurer une acquisition: montages juridiques, financements et synergies",
          "IA pour identifier des cibles d'acquisition et évaluer les synergies potentielles"
        ]},
        { id: "m4", title: "Gestion des Risques Financiers", bullets: [
          "Cartographie des risques financiers: marché (change, taux), crédit, liquidité",
          "Stratégies de couverture: instruments dérivés (forwards, options, swaps)",
          "IA pour anticiper les crises de liquidité et optimiser les couvertures"
        ]},
        { id: "m5", title: "Relations Investisseurs & Levée de Fonds", bullets: [
          "Préparer des roadshows investisseurs: pitch deck, modèle financier, Q&A",
          "Négocier avec des investisseurs (VC, PE, fonds souverains): term sheet, valorisation, dilution",
          "IA pour identifier les investisseurs pertinents et préparer les due diligence"
        ]},
        { id: "m6", title: "Board Pack Financier & Simulation Comex", bullets: [
          "Préparer des présentations financières pour le board: résultats, forecasts, recommandations",
          "Business cases stratégiques: investissements majeurs, acquisitions, restructurations",
          "Simulation comité exécutif: défendre une stratégie financière sous pression des actionnaires"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P05: GOUVERNANCE, RISQUES & CONFORMITÉ ==========
    {
      id: "p05-fondation", pillarId: "p05", pillarName: "Gouvernance, Risques & Conformité", pillarIcon: "🛡️",
      level: "Fondation", title: "Gouvernance, Risques & Conformité — Fondation",
      short: "Introduction à la gouvernance d'entreprise, identification des risques et conformité réglementaire de base",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux de la Gouvernance d'Entreprise", bullets: [
          "Principes de gouvernance: conseil d'administration, comités spécialisés, rôles des dirigeants",
          "Code de gouvernance et bonnes pratiques (OCDE, King IV, codes locaux)",
          "IA pour cartographier les instances de gouvernance et leur efficacité"
        ]},
        { id: "m2", title: "Introduction à la Gestion des Risques", bullets: [
          "Types de risques: opérationnels, financiers, stratégiques, réputationnels",
          "Méthodes d'identification et d'évaluation des risques (matrice probabilité-impact)",
          "IA pour détecter automatiquement les risques émergents dans les projets"
        ]},
        { id: "m3", title: "Conformité Réglementaire de Base", bullets: [
          "Principales réglementations: droit du travail, fiscalité, protection des données (RGPD)",
          "Processus de mise en conformité et documentation des procédures",
          "Outils de veille réglementaire et IA pour suivre les évolutions législatives"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Cartographie Risques d'un Projet", bullets: [
          "Identifier et évaluer les risques d'un projet réel d'entreprise",
          "Proposer des plans de mitigation et de contingence pour les risques majeurs",
          "Présenter la cartographie des risques à un comité de pilotage et validation par expert"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p05-maitrise", pillarId: "p05", pillarName: "Gouvernance, Risques & Conformité", pillarIcon: "🛡️",
      level: "Maîtrise", title: "Gouvernance, Risques & Conformité — Maîtrise",
      short: "Risk management avancé, conformité multi-pays, audit interne et normes ISO avec IA prédictive",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Risk Management Avancé (ERM)", bullets: [
          "Mettre en place un système de gestion des risques d'entreprise (ERM - COSO, ISO 31000)",
          "Cartographie complète des risques: identification, évaluation, priorisation, mitigation",
          "IA pour analyser les corrélations entre risques et simuler des crises"
        ]},
        { id: "m2", title: "Conformité Multi-Pays & Réglementations Internationales", bullets: [
          "Conformité réglementaire complexe: RGPD, CCPA, SOX, lois anticorruption (FCPA, UK Bribery Act)",
          "Gestion des obligations de reporting et de transparence (ESG, RSE)",
          "Veille réglementaire automatisée avec IA et alertes sur les changements législatifs"
        ]},
        { id: "m3", title: "Audit Interne & Contrôle Interne", bullets: [
          "Mettre en place un programme d'audit interne efficace et indépendant",
          "Méthodologie d'audit: planification, exécution, reporting et suivi des recommandations",
          "IA pour automatiser les tests de contrôle et détecter les fraudes"
        ]},
        { id: "m4", title: "Certifications ISO (9001, 27001, 14001)", bullets: [
          "Préparer une certification ISO: analyse des écarts, mise en conformité, documentation",
          "Processus de certification: audit blanc, audit de certification, maintien de la certification",
          "IA pour automatiser la documentation et la préparation des audits"
        ]},
        { id: "m5", title: "Capstone: Programme de Conformité Complet", bullets: [
          "Concevoir un programme de conformité pour une entreprise multi-pays",
          "Inclure: politique de conformité, formation, contrôles, audits, reporting",
          "Présenter le programme au comité d'audit et validation par un auditeur senior"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p05-leadership", pillarId: "p05", pillarName: "Gouvernance, Risques & Conformité", pillarIcon: "🛡️",
      level: "Leadership", title: "Gouvernance, Risques & Conformité — Leadership",
      short: "Gouvernance d'entreprise stratégique, Chief Risk Officer, compliance officer groupe et résilience organisationnelle",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Gouvernance Stratégique & Rôle du Board", bullets: [
          "Structurer une gouvernance d'entreprise robuste: composition du conseil, comités spécialisés",
          "Rôle du board: supervision stratégique, approbation des investissements, gestion des risques",
          "IA pour évaluer l'efficacité du board et proposer des améliorations"
        ]},
        { id: "m2", title: "Vision Chief Risk Officer (CRO)", bullets: [
          "Rôle du CRO: piloter la fonction risque, définir l'appétit au risque, reporting au board",
          "Mettre en place une culture de gestion des risques à tous les niveaux de l'organisation",
          "IA pour cartographier les risques stratégiques groupe et simuler des scénarios de crise"
        ]},
        { id: "m3", title: "Compliance Officer Groupe & Programmes Anti-Corruption", bullets: [
          "Structurer une fonction compliance groupe: organisation, ressources, processus",
          "Programmes de lutte contre la corruption: due diligence, formation, hotline, investigations",
          "IA pour détecter les transactions suspectes et les conflits d'intérêts"
        ]},
        { id: "m4", title: "Résilience Organisationnelle & Gestion de Crise", bullets: [
          "Élaborer un plan de continuité d'activité (BCP) et un plan de reprise après sinistre (DRP)",
          "Gestion de crise: cellule de crise, communication de crise, simulations d'urgence",
          "IA pour anticiper les crises potentielles et automatiser les plans de réponse"
        ]},
        { id: "m5", title: "ESG, RSE & Reporting Extra-Financier", bullets: [
          "Mettre en place une stratégie ESG (Environnement, Social, Gouvernance) ambitieuse",
          "Reporting extra-financier: CSRD, GRI, SASB, intégration dans le rapport annuel",
          "IA pour mesurer l'impact ESG et benchmarker avec les leaders du secteur"
        ]},
        { id: "m6", title: "Board Pack Risques & Simulation Comité Audit", bullets: [
          "Préparer des présentations pour le comité d'audit: cartographie des risques, conformité, audits",
          "Recommandations stratégiques sur les risques majeurs et les investissements en résilience",
          "Simulation comité d'audit: défendre une stratégie risques sous pression du board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P06: TRANSFORMATION DIGITALE & CONDUITE DU CHANGEMENT ==========
    {
      id: "p06-fondation", pillarId: "p06", pillarName: "Transformation Digitale & Conduite du Changement", pillarIcon: "🚀",
      level: "Fondation", title: "Transformation Digitale & Conduite du Changement — Fondation",
      short: "Introduction à la transformation digitale, outils collaboratifs, accompagnement du changement et adoption des innovations",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Comprendre la Transformation Digitale", bullets: [
          "Définition, enjeux et impacts de la transformation digitale sur les métiers",
          "Technologies disruptives: cloud, IA, IoT, blockchain, RPA",
          "IA pour identifier les opportunités de digitalisation dans votre organisation"
        ]},
        { id: "m2", title: "Outils Collaboratifs & Productivité Digitale", bullets: [
          "Maîtriser les outils de collaboration: Teams, Slack, Notion, Miro",
          "Automatiser les tâches répétitives avec RPA (Robotic Process Automation)",
          "IA embarquée dans Microsoft 365 (Copilot) pour booster la productivité"
        ]},
        { id: "m3", title: "Accompagner le Changement en Équipe", bullets: [
          "Psychologie du changement: résistances, adoption et engagement",
          "Techniques de communication du changement et storytelling",
          "IA pour mesurer le sentiment des collaborateurs et adapter la communication"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Plan d'Adoption d'un Outil Digital", bullets: [
          "Concevoir un plan d'adoption pour un nouvel outil digital dans votre équipe",
          "Inclure: formation, communication, support et mesure de l'adoption",
          "Présenter le plan à un responsable de transformation et validation expert"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p06-maitrise", pillarId: "p06", pillarName: "Transformation Digitale & Conduite du Changement", pillarIcon: "🚀",
      level: "Maîtrise", title: "Transformation Digitale & Conduite du Changement — Maîtrise",
      short: "Stratégie de transformation digitale, gestion du changement (PROSCI), innovation et culture digitale avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Diagnostic de Maturité Digitale", bullets: [
          "Évaluer la maturité digitale de l'organisation avec frameworks reconnus",
          "Identifier les gaps critiques et les opportunités de transformation rapide",
          "IA pour benchmarker avec les leaders du secteur et prioriser les initiatives"
        ]},
        { id: "m2", title: "Élaborer une Stratégie de Transformation Digitale", bullets: [
          "Définir la vision digitale et la roadmap de transformation sur 3 ans",
          "Prioriser les initiatives: quick wins, projets structurants, innovations disruptives",
          "IA pour simuler l'impact des initiatives et optimiser l'allocation des ressources"
        ]},
        { id: "m3", title: "Conduite du Changement avec PROSCI", bullets: [
          "Méthodologie PROSCI: ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement)",
          "Identifier les parties prenantes, sponsors et résistants au changement",
          "Plans de communication, formation et accompagnement personnalisés avec IA"
        ]},
        { id: "m4", title: "Innovation & Culture Digitale", bullets: [
          "Créer une culture d'innovation: lab d'innovation, hackathons, intrapreneuriat",
          "Développer les compétences digitales à tous les niveaux (digital literacy)",
          "Mesurer la culture digitale avec des enquêtes et IA pour identifier les freins"
        ]},
        { id: "m5", title: "Capstone: Roadmap de Transformation Digitale", bullets: [
          "Concevoir une roadmap complète de transformation digitale pour une entreprise réelle",
          "Inclure: diagnostic, vision, initiatives, plan de conduite du changement, KPIs",
          "Présenter au comité de direction et validation par un directeur de transformation"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p06-leadership", pillarId: "p06", pillarName: "Transformation Digitale & Conduite du Changement", pillarIcon: "🚀",
      level: "Leadership", title: "Transformation Digitale & Conduite du Changement — Leadership",
      short: "Chief Digital Officer, transformation à l'échelle groupe, disruption de business models et pilotage de l'innovation stratégique",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Chief Digital Officer (CDO)", bullets: [
          "Rôle du CDO: piloter la transformation digitale, aligner avec la stratégie groupe",
          "Structurer une direction du digital: équipes, budget, gouvernance",
          "IA pour identifier les opportunités digitales à forte valeur stratégique"
        ]},
        { id: "m2", title: "Transformation de Business Models", bullets: [
          "Analyser les disruptions sectorielles et anticiper les menaces compétitives",
          "Concevoir de nouveaux business models digitaux: plateformes, abonnements, marketplace",
          "IA pour simuler la viabilité de nouveaux modèles et accélérer le go-to-market"
        ]},
        { id: "m3", title: "Pilotage de l'Innovation Stratégique", bullets: [
          "Mettre en place un programme d'innovation: labs, corporate venturing, partenariats startups",
          "Gérer le portefeuille d'innovations: exploration (explore) vs exploitation (exploit)",
          "IA pour identifier les tendances émergentes et détecter les innovations de rupture"
        ]},
        { id: "m4", title: "Change Management at Scale", bullets: [
          "Conduire le changement dans des organisations complexes multi-pays et multi-BU",
          "Gérer les résistances culturelles et mobiliser les leaders du changement",
          "IA pour mesurer l'adoption du changement et adapter les stratégies en temps réel"
        ]},
        { id: "m5", title: "Ecosystème Digital & Partenariats Stratégiques", bullets: [
          "Construire un écosystème digital: partenaires technologiques, startups, universités",
          "Stratégies d'open innovation et co-création avec clients et fournisseurs",
          "IA pour identifier les partenaires stratégiques et évaluer les synergies"
        ]},
        { id: "m6", title: "Board Pack Transformation & Simulation Comex", bullets: [
          "Préparer des présentations exécutives sur l'avancement de la transformation digitale",
          "Business cases de projets de transformation et recommandations d'investissement",
          "Simulation comité exécutif: défendre une stratégie de transformation sous pression du board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P07: CYBERSÉCURITÉ & RÉSILIENCE ==========
    {
      id: "p07-fondation", pillarId: "p07", pillarName: "Cybersécurité & Résilience", pillarIcon: "🔐",
      level: "Fondation", title: "Cybersécurité & Résilience — Fondation",
      short: "Sensibilisation à la cybersécurité, hygiène numérique, protection des données et réflexes sécurité au quotidien",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux de la Cybersécurité", bullets: [
          "Comprendre les menaces cyber: phishing, ransomware, malware, ingénierie sociale",
          "Principes de sécurité: confidentialité, intégrité, disponibilité (CIA triad)",
          "IA pour détecter les emails de phishing et les menaces en temps réel"
        ]},
        { id: "m2", title: "Hygiène Numérique & Bonnes Pratiques", bullets: [
          "Gérer ses mots de passe de manière sécurisée (gestionnaires, MFA)",
          "Sécuriser son poste de travail et ses appareils mobiles",
          "Naviguer en toute sécurité: VPN, HTTPS, alertes navigateur"
        ]},
        { id: "m3", title: "Protection des Données & RGPD", bullets: [
          "Principes du RGPD: consentement, minimisation, droits des personnes",
          "Identifier et protéger les données sensibles (personnelles, financières, santé)",
          "IA pour classifier automatiquement les données et détecter les fuites"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Plan de Sécurité Personnel", bullets: [
          "Évaluer votre posture de sécurité personnelle et professionnelle",
          "Créer un plan d'action pour améliorer votre hygiène numérique",
          "Présenter vos bonnes pratiques au groupe et validation par un expert cyber"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p07-maitrise", pillarId: "p07", pillarName: "Cybersécurité & Résilience", pillarIcon: "🔐",
      level: "Maîtrise", title: "Cybersécurité & Résilience — Maîtrise",
      short: "Gestion des incidents cyber, SOC (Security Operations Center), tests d'intrusion et conformité ISO 27001 avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Architecture de Sécurité & Defense in Depth", bullets: [
          "Concevoir une architecture de sécurité robuste: pare-feu, IDS/IPS, segmentation réseau",
          "Défense en profondeur: sécurité périmétrique, endpoints, applicative, data",
          "IA pour détecter les anomalies réseau et les comportements suspects"
        ]},
        { id: "m2", title: "Security Operations Center (SOC)", bullets: [
          "Mettre en place un SOC: organisation, processus, outils (SIEM, SOAR)",
          "Surveillance continue, détection des incidents et réponse rapide",
          "IA pour automatiser la corrélation d'événements et prioriser les alertes"
        ]},
        { id: "m3", title: "Gestion des Incidents & Réponse aux Crises Cyber", bullets: [
          "Processus de gestion d'incidents: détection, containment, éradication, recovery",
          "Constituer une équipe de réponse aux incidents (CSIRT) et coordonner les actions",
          "IA pour automatiser la réponse aux incidents et accélérer la remediation"
        ]},
        { id: "m4", title: "Tests d'Intrusion & Ethical Hacking", bullets: [
          "Méthodologie de pentest: reconnaissance, scanning, exploitation, post-exploitation",
          "Outils de pentest: Kali Linux, Metasploit, Burp Suite, Nmap",
          "IA pour identifier les vulnérabilités critiques et proposer des correctifs"
        ]},
        { id: "m5", title: "Capstone: Certification ISO 27001 (ISMS)", bullets: [
          "Mettre en place un système de management de la sécurité de l'information (ISMS)",
          "Préparer la certification ISO 27001: analyse de risques, documentation, audit blanc",
          "Présenter le projet au comité de sécurité et validation par un auditeur ISO 27001"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p07-leadership", pillarId: "p07", pillarName: "Cybersécurité & Résilience", pillarIcon: "🔐",
      level: "Leadership", title: "Cybersécurité & Résilience — Leadership",
      short: "Chief Information Security Officer (CISO), gouvernance cyber groupe, résilience organisationnelle et stratégie zero-trust",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Chief Information Security Officer (CISO)", bullets: [
          "Rôle du CISO: piloter la stratégie cyber, définir l'appétit au risque cyber, reporting au board",
          "Structurer une direction sécurité groupe: équipes, budget, gouvernance",
          "IA pour cartographier les cyberrisques stratégiques et prioriser les investissements"
        ]},
        { id: "m2", title: "Gouvernance Cyber Groupe & Conformité", bullets: [
          "Framework de gouvernance cyber: politiques, standards, procédures groupe",
          "Conformité réglementaire multi-pays: RGPD, NIS2, DORA, lois sectorielles",
          "IA pour automatiser la veille réglementaire et le reporting de conformité"
        ]},
        { id: "m3", title: "Stratégie Zero Trust & Architecture SASE", bullets: [
          "Concevoir une architecture zero trust: vérification continue, moindre privilège, micro-segmentation",
          "SASE (Secure Access Service Edge): convergence réseau et sécurité dans le cloud",
          "IA pour détecter les comportements anormaux et adapter les contrôles d'accès dynamiquement"
        ]},
        { id: "m4", title: "Cyber Threat Intelligence & Anticipation", bullets: [
          "Mettre en place une capacité de Cyber Threat Intelligence (CTI) stratégique",
          "Surveiller les menaces émergentes, les APT (Advanced Persistent Threats) et les acteurs malveillants",
          "IA pour analyser les dark web, forums underground et prédire les attaques ciblées"
        ]},
        { id: "m5", title: "Résilience Cyber & Business Continuity", bullets: [
          "Élaborer un plan de continuité cyber: backup, disaster recovery, crisis management",
          "Simulations de cyberattaques (red team, purple team) et exercices de crise",
          "IA pour automatiser les plans de reprise et accélérer le retour à la normale"
        ]},
        { id: "m6", title: "Board Pack Cyber & Simulation Comité Risques", bullets: [
          "Préparer des présentations pour le board sur la posture cyber et les incidents majeurs",
          "Recommandations stratégiques sur les investissements cyber et la cyber-assurance",
          "Simulation comité de risques: défendre un budget cyber sous pression du CFO/board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P08: IT SERVICE MANAGEMENT (ITIL4) & ARCHITECTURE SI ==========
    {
      id: "p08-fondation", pillarId: "p08", pillarName: "IT Service Management (ITIL4) & Architecture SI", pillarIcon: "⚙️",
      level: "Fondation", title: "IT Service Management (ITIL4) & Architecture SI — Fondation",
      short: "Introduction à ITIL4, gestion des incidents et demandes, service desk et support utilisateurs avec IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux ITIL4 & Service Management", bullets: [
          "Principes ITIL4: valeur, co-création, feedback, amélioration continue",
          "Service Value System (SVS) et Service Value Chain",
          "IA pour automatiser la classification des tickets et proposer des solutions"
        ]},
        { id: "m2", title: "Gestion des Incidents & Service Desk", bullets: [
          "Processus de gestion des incidents: détection, logging, categorization, resolution",
          "Techniques de diagnostic et d'escalade des incidents critiques",
          "IA (chatbot) pour répondre automatiquement aux demandes de niveau 1"
        ]},
        { id: "m3", title: "Gestion des Demandes de Service", bullets: [
          "Processus de service request management: catalogue de services, workflows d'approbation",
          "Mesurer la satisfaction utilisateur (CSAT, NPS) et améliorer la qualité de service",
          "Automatiser les demandes récurrentes avec IA et RPA"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Amélioration d'un Processus ITSM", bullets: [
          "Analyser un processus ITSM existant (incidents ou demandes) et identifier les dysfonctionnements",
          "Proposer un plan d'amélioration avec KPIs et quick wins",
          "Présenter au responsable IT et validation par un expert ITIL certifié"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p08-maitrise", pillarId: "p08", pillarName: "IT Service Management (ITIL4) & Architecture SI", pillarIcon: "⚙️",
      level: "Maîtrise", title: "IT Service Management (ITIL4) & Architecture SI — Maîtrise",
      short: "ITIL4 avancé, gestion des changements et releases, architecture SI et préparation certification ITIL avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "ITIL4 Practices Avancées", bullets: [
          "Gestion des problèmes: analyse des causes racines (RCA), prévention des incidents récurrents",
          "Gestion des changements: évaluation des risques, CAB (Change Advisory Board), rollback plans",
          "IA pour prédire l'impact des changements et recommander des fenêtres de maintenance"
        ]},
        { id: "m2", title: "Gestion des Releases & Déploiements", bullets: [
          "Processus de release management: planification, build, test, déploiement",
          "Automatisation des déploiements avec CI/CD (Jenkins, GitLab CI, Azure DevOps)",
          "IA pour optimiser les calendriers de release et minimiser les risques"
        ]},
        { id: "m3", title: "Architecture des Systèmes d'Information", bullets: [
          "Frameworks d'architecture: TOGAF, Zachman, méthodologies d'entreprise architecture",
          "Concevoir une architecture SI cible alignée sur la stratégie business",
          "IA pour cartographier l'architecture existante et identifier les zones d'optimisation"
        ]},
        { id: "m4", title: "Gouvernance IT & COBIT", bullets: [
          "Framework COBIT pour la gouvernance et le management de l'IT",
          "Aligner l'IT sur les objectifs business, gérer les risques IT et optimiser les ressources",
          "IA pour mesurer la maturité IT et proposer des plans d'amélioration"
        ]},
        { id: "m5", title: "Capstone + Préparation Certification ITIL 4 Managing Professional", bullets: [
          "Projet complet: concevoir une architecture de services IT et un plan d'amélioration continue",
          "Préparation intensive à la certification ITIL 4 MP (modules Create, Deliver, Support, Drive Stakeholder Value)",
          "Simulation d'examen et validation par un formateur certifié ITIL Expert"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p08-leadership", pillarId: "p08", pillarName: "IT Service Management (ITIL4) & Architecture SI", pillarIcon: "⚙️",
      level: "Leadership", title: "IT Service Management (ITIL4) & Architecture SI — Leadership",
      short: "Chief Information Officer (CIO), stratégie IT groupe, architecture d'entreprise et transformation IT à l'échelle",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Chief Information Officer (CIO)", bullets: [
          "Rôle du CIO: piloter la stratégie IT, aligner IT et business, innovation technologique",
          "Structurer une direction des systèmes d'information groupe: organisation, budget, gouvernance",
          "IA pour identifier les opportunités d'innovation IT à forte valeur business"
        ]},
        { id: "m2", title: "Stratégie IT & Transformation Digitale", bullets: [
          "Élaborer une stratégie IT alignée sur la stratégie d'entreprise et les objectifs de croissance",
          "Modernisation du SI legacy: migration cloud, API-first, microservices",
          "IA pour prioriser les projets IT et optimiser le portefeuille d'investissements"
        ]},
        { id: "m3", title: "Architecture d'Entreprise & TOGAF", bullets: [
          "Concevoir une architecture d'entreprise cible avec TOGAF ADM (Architecture Development Method)",
          "Cartographier l'architecture actuelle (AS-IS) et définir la cible (TO-BE) avec roadmap de transition",
          "IA pour automatiser la documentation d'architecture et la gestion des dépendances"
        ]},
        { id: "m4", title: "Gouvernance IT Groupe & Pilotage Performance", bullets: [
          "Framework de gouvernance IT: comités, processus de décision, politiques groupe",
          "Piloter la performance IT: KPIs de disponibilité, performance, coûts, satisfaction utilisateur",
          "Tableaux de bord IT exécutifs et reporting au board/comité de direction"
        ]},
        { id: "m5", title: "Sourcing IT & Gestion de Partenaires", bullets: [
          "Stratégies de sourcing: insourcing, outsourcing, nearshoring, cloud providers",
          "Gérer les relations avec les partenaires IT: contrats, SLA, performance, innovation",
          "IA pour sélectionner les meilleurs partenaires et optimiser les coûts IT"
        ]},
        { id: "m6", title: "Board Pack IT & Simulation Comex", bullets: [
          "Préparer des présentations exécutives sur la stratégie IT, les projets majeurs et les risques IT",
          "Business cases IT: investissements infrastructure, cloud, cybersécurité, IA",
          "Simulation comité exécutif: défendre un budget IT sous pression du CFO et du board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P09: SUPPLY CHAIN, ACHATS & TRAÇABILITÉ ==========
    {
      id: "p09-fondation", pillarId: "p09", pillarName: "Supply Chain, Achats & Traçabilité", pillarIcon: "🔗",
      level: "Fondation", title: "Supply Chain, Achats & Traçabilité — Fondation",
      short: "Fondamentaux de la supply chain, gestion des stocks, achats opérationnels et logistique de base avec IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux de la Supply Chain", bullets: [
          "Comprendre la chaîne logistique: approvisionnement, production, distribution, retail",
          "Flux physiques, flux d'information et flux financiers dans la supply chain",
          "IA pour cartographier automatiquement la supply chain et identifier les goulots"
        ]},
        { id: "m2", title: "Gestion des Stocks & Prévisions", bullets: [
          "Méthodes de gestion des stocks: FIFO, LIFO, stock de sécurité, point de commande",
          "Prévisions de la demande avec méthodes quantitatives et IA",
          "Optimiser les niveaux de stock pour réduire les coûts et éviter les ruptures"
        ]},
        { id: "m3", title: "Achats Opérationnels & Relation Fournisseurs", bullets: [
          "Processus achat: expression de besoin, appel d'offres, négociation, contractualisation",
          "Évaluer et sélectionner les fournisseurs: critères qualité, coût, délai",
          "IA pour automatiser les commandes récurrentes et négocier les meilleurs prix"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Optimisation d'un Flux Logistique", bullets: [
          "Analyser un flux logistique existant et identifier les inefficacités (coûts, délais, qualité)",
          "Proposer un plan d'optimisation avec KPIs et quick wins",
          "Présenter au responsable supply chain et validation par un expert logistique"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p09-maitrise", pillarId: "p09", pillarName: "Supply Chain, Achats & Traçabilité", pillarIcon: "🔗",
      level: "Maîtrise", title: "Supply Chain, Achats & Traçabilité — Maîtrise",
      short: "Supply chain avancée, S&OP (Sales & Operations Planning), achats stratégiques et traçabilité blockchain avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Supply Chain Planning & S&OP", bullets: [
          "Mettre en place un processus S&OP (Sales & Operations Planning) robuste",
          "Aligner les prévisions de vente, les capacités de production et les stocks",
          "IA pour optimiser le S&OP et anticiper les déséquilibres offre-demande"
        ]},
        { id: "m2", title: "Achats Stratégiques & Category Management", bullets: [
          "Élaborer une stratégie achats par catégorie: sourcing, négociation, contrats-cadres",
          "Analyse du TCO (Total Cost of Ownership) et création de valeur achats",
          "IA pour identifier les opportunités d'économies et les fournisseurs alternatifs"
        ]},
        { id: "m3", title: "Traçabilité & Blockchain", bullets: [
          "Mettre en place un système de traçabilité end-to-end dans la supply chain",
          "Utiliser la blockchain pour garantir l'authenticité et la transparence des flux",
          "IA pour analyser les données de traçabilité et détecter les anomalies (contrefaçon, fraude)"
        ]},
        { id: "m4", title: "Logistique & Transport Optimization", bullets: [
          "Optimiser les réseaux de distribution: emplacements, capacités, flux de transport",
          "Gestion des transporteurs: sélection, négociation, suivi performance",
          "IA pour optimiser les tournées de livraison et réduire les coûts de transport"
        ]},
        { id: "m5", title: "Capstone: Transformation Supply Chain", bullets: [
          "Concevoir un projet de transformation supply chain: digitalisation, optimisation, traçabilité",
          "Inclure: diagnostic, roadmap, business case, plan de conduite du changement",
          "Présenter au comité de direction et validation par un directeur supply chain"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p09-leadership", pillarId: "p09", pillarName: "Supply Chain, Achats & Traçabilité", pillarIcon: "🔗",
      level: "Leadership", title: "Supply Chain, Achats & Traçabilité — Leadership",
      short: "Chief Supply Chain Officer, stratégie supply chain groupe, résilience et supply chain 4.0 avec IA prédictive",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Chief Supply Chain Officer (CSCO)", bullets: [
          "Rôle du CSCO: piloter la stratégie supply chain, alignement avec la stratégie commerciale et industrielle",
          "Structurer une direction supply chain groupe: organisation, processus, gouvernance",
          "IA pour optimiser la supply chain globale et maximiser la création de valeur"
        ]},
        { id: "m2", title: "Stratégie Supply Chain Groupe & Réseau Global", bullets: [
          "Concevoir un réseau supply chain global: usines, entrepôts, hubs de distribution multi-pays",
          "Arbitrages make-or-buy, nearshoring vs offshoring, localisation des activités",
          "IA pour simuler des scénarios de réseau et optimiser les coûts et les délais"
        ]},
        { id: "m3", title: "Résilience Supply Chain & Gestion des Crises", bullets: [
          "Identifier les risques supply chain: ruptures d'approvisionnement, catastrophes naturelles, géopolitique",
          "Plans de continuité supply chain: fournisseurs alternatifs, stocks stratégiques, flexibilité capacitaire",
          "IA pour anticiper les disruptions et activer automatiquement les plans de contingence"
        ]},
        { id: "m4", title: "Supply Chain 4.0 & Digital Twin", bullets: [
          "Technologies supply chain 4.0: IoT, capteurs, robotique, IA, blockchain",
          "Créer un digital twin de la supply chain pour simuler et optimiser en temps réel",
          "IA pour prédire la demande, optimiser les stocks et automatiser les décisions"
        ]},
        { id: "m5", title: "Achats Groupe & Synergies Multi-BU", bullets: [
          "Structurer une fonction achats groupe: centralisée, décentralisée, hybride",
          "Identifier et réaliser les synergies achats inter-BU: pooling, contrats-cadres groupe",
          "IA pour détecter les opportunités de mutualisation et négocier les meilleurs prix"
        ]},
        { id: "m6", title: "Board Pack Supply Chain & Simulation Comex", bullets: [
          "Préparer des présentations exécutives sur la performance supply chain et les risques majeurs",
          "Business cases supply chain: investissements réseau, digitalisation, traçabilité",
          "Simulation comité exécutif: défendre une stratégie supply chain sous pression du CFO/board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },

    // ========== P10: MARKETING, COMMERCIAL & GROWTH + CULTURE ENTREPRENEURIALE ==========
    {
      id: "p10-fondation", pillarId: "p10", pillarName: "Marketing, Commercial & Growth + Culture Entrepreneuriale", pillarIcon: "💡",
      level: "Fondation", title: "Marketing, Commercial & Growth + Culture Entrepreneuriale — Fondation",
      short: "Marketing digital de base, réseaux sociaux, prospection commerciale et pitch entrepreneurial avec IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux du Marketing Digital", bullets: [
          "Comprendre le parcours client digital: awareness, consideration, conversion, loyalty",
          "Canaux marketing: SEO, SEA, social media, email, content marketing",
          "IA pour automatiser les campagnes et personnaliser les messages"
        ]},
        { id: "m2", title: "Réseaux Sociaux & Community Management", bullets: [
          "Stratégie social media: objectifs, cibles, contenus, calendrier éditorial",
          "Animer une communauté: engagement, modération, gestion des crises",
          "IA pour créer du contenu (textes, visuels) et programmer les publications"
        ]},
        { id: "m3", title: "Prospection Commerciale & Techniques de Vente", bullets: [
          "Méthodes de prospection: cold calling, emailing, LinkedIn, salons professionnels",
          "Structurer un argumentaire de vente et traiter les objections",
          "IA pour qualifier les leads et prioriser les prospects à fort potentiel"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Campagne Marketing & Pitch", bullets: [
          "Créer une campagne marketing digitale complète pour un produit/service",
          "Pitcher votre campagne devant un jury: objectifs, cibles, contenus, budget, ROI",
          "Validation par un expert marketing/growth et feedback personnalisé"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p10-maitrise", pillarId: "p10", pillarName: "Marketing, Commercial & Growth + Culture Entrepreneuriale", pillarIcon: "💡",
      level: "Maîtrise", title: "Marketing, Commercial & Growth + Culture Entrepreneuriale — Maîtrise",
      short: "Growth hacking, marketing automation, performance commerciale et entrepreneuriat avec levée de fonds et IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Growth Hacking & Acquisition Rapide", bullets: [
          "Méthodologie growth hacking: pirate metrics (AARRR - Acquisition, Activation, Rétention, Revenus, Référence)",
          "Techniques de croissance rapide: viral loops, referral programs, product-led growth",
          "IA pour tester rapidement des hypothèses et optimiser les canaux d'acquisition"
        ]},
        { id: "m2", title: "Marketing Automation & CRM Avancé", bullets: [
          "Mettre en place une plateforme de marketing automation (HubSpot, Marketo, Salesforce)",
          "Lead nurturing: séquences d'emails automatisées, scoring, segmentation dynamique",
          "IA pour personnaliser les parcours clients et maximiser les conversions"
        ]},
        { id: "m3", title: "Performance Commerciale & Sales Enablement", bullets: [
          "Structurer un processus commercial efficace: qualification, discovery, proposition, closing",
          "Outils de sales enablement: CRM, sales playbooks, battle cards, ROI calculators",
          "IA pour prédire les deals à risque et recommander les actions de closing"
        ]},
        { id: "m4", title: "Entrepreneuriat & Business Model Canvas", bullets: [
          "Méthodologie Lean Startup: build-measure-learn, MVP, pivot",
          "Business Model Canvas: proposition de valeur, segments clients, canaux, revenus",
          "IA pour valider rapidement les hypothèses business et identifier les opportunités"
        ]},
        { id: "m5", title: "Capstone: Lancement de Produit & Levée de Fonds", bullets: [
          "Créer un plan de lancement complet pour un nouveau produit/service",
          "Préparer un pitch deck investisseurs et simuler une levée de fonds (seed, série A)",
          "Présenter devant un jury d'investisseurs et validation par un entrepreneur/VC"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p10-leadership", pillarId: "p10", pillarName: "Marketing, Commercial & Growth + Culture Entrepreneuriale", pillarIcon: "💡",
      level: "Leadership", title: "Marketing, Commercial & Growth + Culture Entrepreneuriale — Leadership",
      short: "Chief Marketing Officer, stratégie go-to-market groupe, scaling international et direction générale startup avec IA",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Chief Marketing Officer (CMO)", bullets: [
          "Rôle du CMO: piloter la stratégie marketing, branding, acquisition et rétention clients",
          "Structurer une direction marketing groupe: équipes, budget, gouvernance, OKRs",
          "IA pour identifier les opportunités de croissance et optimiser le marketing mix"
        ]},
        { id: "m2", title: "Stratégie Go-to-Market & Expansion Internationale", bullets: [
          "Élaborer une stratégie go-to-market pour de nouveaux marchés géographiques ou segments",
          "Analyse de marché: taille, concurrence, barrières à l'entrée, partenaires locaux",
          "IA pour prédire le potentiel de marché et adapter l'offre aux spécificités locales"
        ]},
        { id: "m3", title: "Scaling Commercial & Sales Operations", bullets: [
          "Industrialiser le processus commercial: playbooks, formation, outils, KPIs",
          "Construire une équipe commerciale scalable: recrutement, onboarding, performance management",
          "IA pour forecaster les ventes, optimiser les territoires et la rémunération variable"
        ]},
        { id: "m4", title: "Brand Strategy & Reputation Management", bullets: [
          "Élaborer une stratégie de marque forte: positionnement, identité, storytelling",
          "Gérer la réputation de marque: monitoring, crises, ambassadeurs, influence",
          "IA pour analyser le sentiment de marque en temps réel et adapter la communication"
        ]},
        { id: "m5", title: "Direction Générale Startup & Levée Série B+", bullets: [
          "Piloter une startup en hypercroissance: product-market fit, unit economics, scaling",
          "Préparer des levées de fonds avancées (série B, C, D): valorisation, dilution, term sheets",
          "IA pour modéliser la croissance future et convaincre les investisseurs institutionnels"
        ]},
        { id: "m6", title: "Board Pack Marketing & Simulation Comex", bullets: [
          "Préparer des présentations exécutives sur la performance marketing et commerciale",
          "Business cases marketing: investissements acquisition, expansion géographique, M&A",
          "Simulation comité exécutif: défendre un budget marketing sous pression du CFO/board"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69907 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    }
  ]
};

// Export
if (typeof window !== 'undefined') {
  window.DIGISCHOOL_CATALOG = DIGISCHOOL_CATALOG;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DIGISCHOOL_CATALOG;
}
