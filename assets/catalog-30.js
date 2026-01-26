/**
 * DigiSchool Africa - Catalogue 30 Parcours V1.1
 * 10 Piliers × 3 Niveaux (Fondation, Maîtrise, Leadership)
 * Source unique de vérité pour B2C et B2B
 * DIFFÉRENCIATION COMPLÈTE - Zéro duplication textuelle
 */

const DIGISCHOOL_CATALOG = {
  version: "1.1",
  
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
  
  // Pricing base (FCFA)
  pricing: {
    fondation: { pack: 214376, modules_count: 4 },
    maitrise: { pack: 267970, modules_count: 5 },
    leadership: { pack: 321564, modules_count: 6 }
  },
  
  calculateModulePrice(pack_fcfa, modules_count) {
    return Math.round((pack_fcfa * 1.3) / modules_count);
  },
  
  // Detailed courses with unique content per pillar + level
  courses: [
    // ========== PILIER 1: LEADERSHIP & MANAGEMENT ==========
    {
      id: "p01-fondation", pillarId: "p01", pillarName: "Leadership & Management", pillarIcon: "👔",
      level: "Fondation", title: "Leadership & Management — Fondation",
      short: "Posture managériale, communication d'équipe, feedback constructif et premiers pas en leadership avec IA embarquée",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Posture Managériale & Communication", bullets: [
          "Développer sa présence et son assertivité en contexte professionnel",
          "Techniques de communication interpersonnelle et écoute active",
          "IA pour analyser le style de communication et ajuster le discours"
        ]},
        { id: "m2", title: "Animer une Réunion d'Équipe", bullets: [
          "Structurer un ordre du jour et faciliter les échanges",
          "Gérer les personnalités difficiles et conflits naissants",
          "Outils collaboratifs (Teams, Miro) et IA pour résumer les décisions"
        ]},
        { id: "m3", title: "Donner du Feedback Constructif", bullets: [
          "Modèle DESC et feedback 360° pour améliorer la performance",
          "Reconnaître les succès et corriger les écarts sans démotiver",
          "Suivi des plans d'action individuels avec tableaux de bord"
        ]},
        { id: "m4", title: "Projet: Plan d'Action Managérial 30 Jours", bullets: [
          "Diagnostic de votre équipe et identification des leviers d'action",
          "Construire votre feuille de route managériale sur 30 jours",
          "Présentation au groupe et validation par un coach expert"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p01-maitrise", pillarId: "p01", pillarName: "Leadership & Management", pillarIcon: "👔",
      level: "Maîtrise", title: "Leadership & Management — Maîtrise",
      short: "Management d'équipes hybrides, gestion des conflits complexes, culture d'engagement et pilotage RH avec IA prédictive",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Leadership Transformationnel", bullets: [
          "Définir et communiquer une vision inspirante alignée sur la stratégie",
          "Mobiliser les équipes autour d'objectifs communs et créer du sens",
          "IA pour cartographier l'engagement et identifier les influenceurs clés"
        ]},
        { id: "m2", title: "Management d'Équipes Hybrides (Présentiel/Distanciel)", bullets: [
          "Piloter la performance en mode distribué avec rituels efficaces",
          "Maintenir la cohésion et la collaboration à distance",
          "Outils de collaboration avancés (Slack, Asana) et IA pour le suivi"
        ]},
        { id: "m3", title: "Gestion des Conflits & Médiation", bullets: [
          "Détecter les signaux faibles et intervenir avant l'escalade",
          "Techniques de médiation et négociation gagnant-gagnant",
          "IA pour analyser les dynamiques d'équipe et prédire les tensions"
        ]},
        { id: "m4", title: "Culture d'Entreprise & Engagement Collaborateur", bullets: [
          "Bâtir une culture performante, inclusive et résiliente",
          "Mesurer l'engagement avec eNPS et enquêtes pulse",
          "Plans d'action RH basés sur la data et amélioration continue"
        ]},
        { id: "m5", title: "Capstone: Stratégie Managériale 90 Jours", bullets: [
          "Diagnostic organisationnel et identification des gaps culturels",
          "Plan de transformation managériale avec KPIs d'engagement",
          "Pitch exécutif devant un jury d'experts RH"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p01-leadership", pillarId: "p01", pillarName: "Leadership & Management", pillarIcon: "👔",
      level: "Leadership", title: "Leadership & Management — Leadership",
      short: "Direction d'équipes multi-sites, transformation culturelle, pilotage exécutif et change management stratégique",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision Stratégique & Alignement Organisationnel", bullets: [
          "Élaborer une vision long terme et cascade stratégique",
          "Aligner les directions fonctionnelles sur les priorités groupe",
          "IA pour simuler des scénarios stratégiques et anticiper les impacts"
        ]},
        { id: "m2", title: "Gouvernance Managériale & Operating Model", bullets: [
          "Définir les instances de décision (COMEX, CODIR, comités métier)",
          "Clarifier les rôles RACI et éviter les zones grises",
          "Framework de gouvernance pour piloter une organisation matricielle"
        ]},
        { id: "m3", title: "Pilotage de la Performance Multi-Équipes", bullets: [
          "Construire des KPIs consolidés et tableaux de bord exécutifs",
          "Management transverse et résolution des interdépendances",
          "Coaching des managers N-1 et développement du leadership collectif"
        ]},
        { id: "m4", title: "Gestion des Talents & Succession Planning", bullets: [
          "Identifier les high potentials et construire des plans de carrière",
          "Préparer la relève pour les postes clés (succession planning)",
          "IA pour cartographier les compétences critiques et gaps"
        ]},
        { id: "m5", title: "Transformation Culturelle & Change at Scale", bullets: [
          "Conduire le changement organisationnel à grande échelle",
          "Gérer les résistances, mobiliser les ambassadeurs et mesurer l'adoption",
          "Stratégies de communication interne et employee engagement"
        ]},
        { id: "m6", title: "Board Pack: Présentation Exécutive", bullets: [
          "Préparer une présentation stratégique pour le Conseil (Board)",
          "Business cases, recommandations et gestion des questions difficiles",
          "Simulation de COMEX avec jury d'experts et feedback 360°"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 2: GESTION DE PROJET & PMO ==========
    {
      id: "p02-fondation", pillarId: "p02", pillarName: "Gestion de Projet & PMO", pillarIcon: "📊",
      level: "Fondation", title: "Gestion de Projet & PMO — Fondation",
      short: "Fondamentaux PMP, cadrage, planning, suivi de projet et premiers livrables avec IA pour automatiser les tâches",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Introduction à la Gestion de Projet PMP", bullets: [
          "Cycle de vie d'un projet: initiation, planification, exécution, clôture",
          "Vocabulaire métier (WBS, jalons, livrables, risques)",
          "IA pour générer des templates de projet et structurer le travail"
        ]},
        { id: "m2", title: "Cadrage & Charte de Projet", bullets: [
          "Définir les objectifs SMART et le périmètre du projet",
          "Identifier les parties prenantes et construire la matrice RACI",
          "Outils: MS Project, Trello, IA pour automatiser la documentation"
        ]},
        { id: "m3", title: "Planning & Suivi de Projet", bullets: [
          "Créer un diagramme de Gantt et estimer les durées",
          "Suivre l'avancement avec les indicateurs SPI et CPI",
          "Tableaux de bord projet automatisés avec Power BI et IA"
        ]},
        { id: "m4", title: "Projet Fil Rouge: Livrable Client", bullets: [
          "Piloter un mini-projet de A à Z avec un cas réel",
          "Produire la charte, le planning et le rapport de clôture",
          "Soutenance devant un jury et validation des compétences"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p02-maitrise", pillarId: "p02", pillarName: "Gestion de Projet & PMO", pillarIcon: "📊",
      level: "Maîtrise", title: "Gestion de Projet & PMO — Maîtrise",
      short: "Méthodologie PMP avancée, gestion des risques, multi-projets, agilité hybride et préparation certification PMP",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Management de Projet Complexe (PMP)", bullets: [
          "Gérer des projets multi-sites avec budgets élevés",
          "Intégration des processus PMBOK 7 et méthodes agiles (Scrum/Kanban)",
          "IA pour prédire les dérives et proposer des actions correctives"
        ]},
        { id: "m2", title: "Gestion des Risques & Qualité Projet", bullets: [
          "Identification, analyse et mitigation des risques majeurs",
          "Plans de contingence et réserves management",
          "Audits qualité et amélioration continue du projet"
        ]},
        { id: "m3", title: "Pilotage Multi-Projets & Portefeuille", bullets: [
          "Prioriser les projets selon la stratégie d'entreprise",
          "Arbitrer les ressources et gérer les interdépendances",
          "Tableaux de bord consolidés et reporting exécutif"
        ]},
        { id: "m4", title: "Gestion des Parties Prenantes & Communication", bullets: [
          "Cartographier les stakeholders et gérer leurs attentes",
          "Communication de crise et gestion des changements",
          "IA pour automatiser le reporting et alerter sur les signaux faibles"
        ]},
        { id: "m5", title: "Capstone: Certification PMP Prep", bullets: [
          "Révision intensive des 10 domaines PMBOK 7",
          "Simulation d'examen PMP avec 200 questions",
          "Coaching personnalisé et stratégies pour réussir l'examen"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p02-leadership", pillarId: "p02", pillarName: "Gestion de Projet & PMO", pillarIcon: "📊",
      level: "Leadership", title: "Gestion de Projet & PMO — Leadership",
      short: "Direction de PMO, gouvernance de portefeuille, transformation Agile/SAFe et pilotage stratégique de programmes",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie & Gouvernance de Portefeuille", bullets: [
          "Aligner le portefeuille de projets sur la stratégie d'entreprise",
          "Définir les critères de sélection et priorisation des projets",
          "IA pour optimiser l'allocation des ressources et maximiser le ROI"
        ]},
        { id: "m2", title: "Structuration & Pilotage d'un PMO", bullets: [
          "Créer un Project Management Office (PMO) de classe mondiale",
          "Standardiser les méthodes, templates et processus projet",
          "Mettre en place des centres d'excellence et coaching des PMs"
        ]},
        { id: "m3", title: "Transformation Agile & Scaling (SAFe, LeSS)", bullets: [
          "Conduire la transformation Agile à l'échelle (SAFe, LeSS, Scrum@Scale)",
          "Aligner les équipes produit et IT sur les OKRs stratégiques",
          "IA pour suivre les sprints, vélocité et prédire les livraisons"
        ]},
        { id: "m4", title: "Gestion des Programmes & Mega-Projets", bullets: [
          "Piloter des programmes transverses avec multiples projets interdépendants",
          "Gérer les risques systémiques et la complexité organisationnelle",
          "Reporting exécutif et communication au COMEX"
        ]},
        { id: "m5", title: "Risk, Compliance & Audit de Projets", bullets: [
          "Cartographie des risques stratégiques et plans de mitigation",
          "Audits internes et préparation aux audits externes (ISO, PRINCE2)",
          "Conformité réglementaire et gouvernance des données projet"
        ]},
        { id: "m6", title: "Board Simulation: Présentation de Portefeuille", bullets: [
          "Préparer un rapport de portefeuille pour le Conseil",
          "Défendre les investissements et arbitrages stratégiques",
          "Simulation de comité de direction avec jury d'experts PMO"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 3: DATA, BI & PERFORMANCE ==========
    {
      id: "p03-fondation", pillarId: "p03", pillarName: "Data, BI & Performance", pillarIcon: "📈",
      level: "Fondation", title: "Data, BI & Performance — Fondation",
      short: "Excel avancé, Power BI basics, visualisation de données et premiers dashboards interactifs avec IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Excel Avancé & Power Query", bullets: [
          "Formules complexes (INDEX/EQUIV, RECHERCHEV, tableaux croisés dynamiques)",
          "Nettoyer et transformer les données avec Power Query",
          "IA pour automatiser les traitements répétitifs et détecter les anomalies"
        ]},
        { id: "m2", title: "Introduction à Power BI", bullets: [
          "Connecter des sources de données (Excel, SQL, API)",
          "Créer des visualisations percutantes (graphiques, cartes, KPIs)",
          "Publier et partager des rapports interactifs"
        ]},
        { id: "m3", title: "Construire un Dashboard Opérationnel", bullets: [
          "Définir les KPIs métier et structurer un tableau de bord",
          "Design thinking pour la data viz: clarté, hiérarchie, storytelling",
          "Automatiser les mises à jour avec Power Automate et IA"
        ]},
        { id: "m4", title: "Projet: Dashboard de Performance Métier", bullets: [
          "Analyser un jeu de données réel et identifier les insights clés",
          "Produire un dashboard complet avec recommandations actionnables",
          "Présentation devant un jury data et validation des compétences"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p03-maitrise", pillarId: "p03", pillarName: "Data, BI & Performance", pillarIcon: "📈",
      level: "Maîtrise", title: "Data, BI & Performance — Maîtrise",
      short: "Analytics avancée, modélisation prédictive, Python/SQL, architecture BI et pilotage data-driven",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Analyse de Données Avancée (SQL & Python)", bullets: [
          "Requêtes SQL complexes (jointures, CTE, window functions)",
          "Analyse exploratoire avec Python (Pandas, NumPy, Matplotlib)",
          "IA pour automatiser l'exploration et générer des hypothèses"
        ]},
        { id: "m2", title: "Modélisation Prédictive & Machine Learning", bullets: [
          "Régression, classification et clustering pour prédire les comportements",
          "Segmentation clients, churn prediction et recommandations",
          "Outils no-code (Azure ML, Dataiku) et IA embarquée"
        ]},
        { id: "m3", title: "Architecture BI & Data Warehouse", bullets: [
          "Concevoir une architecture de données moderne (lakehouse, data mesh)",
          "ETL/ELT avec SSIS, Talend ou Airflow",
          "Gouvernance des données et qualité (data lineage, catalogues)"
        ]},
        { id: "m4", title: "Tableaux de Bord Exécutifs & Storytelling Data", bullets: [
          "Construire des dashboards pour le COMEX avec visualisations executive-ready",
          "Raconter une histoire avec les données: structure, insights, recommandations",
          "Automatisation des rapports mensuels avec IA et alertes intelligentes"
        ]},
        { id: "m5", title: "Capstone: Projet Data End-to-End", bullets: [
          "Analyser un problème business complexe avec approche data-driven",
          "Construire une solution complète (collecte, analyse, modèle, dashboard)",
          "Soutenance devant un jury data et validation des compétences avancées"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p03-leadership", pillarId: "p03", pillarName: "Data, BI & Performance", pillarIcon: "📈",
      level: "Leadership", title: "Data, BI & Performance — Leadership",
      short: "Direction data, stratégie data-driven, CDO responsibilities, AI governance et data monetization",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie Data & Roadmap CDO", bullets: [
          "Définir la vision data de l'entreprise et les priorités stratégiques",
          "Construire une roadmap data sur 3 ans avec quick wins et transformations",
          "IA pour évaluer la maturité data et benchmarker avec le marché"
        ]},
        { id: "m2", title: "Gouvernance Data & AI Ethics", bullets: [
          "Mettre en place une gouvernance data (comités, rôles, processus)",
          "Éthique de l'IA: biais, transparence, RGPD et conformité",
          "Frameworks de gouvernance (DAMA-DMBOK, COBIT for Data)"
        ]},
        { id: "m3", title: "Data Monetization & Business Value", bullets: [
          "Identifier les opportunités de monétisation des données",
          "Créer des produits data et générer de nouveaux revenus",
          "Mesurer le ROI des initiatives data et communiquer la valeur au Board"
        ]},
        { id: "m4", title: "Transformation Culturelle Data-Driven", bullets: [
          "Installer une culture data-driven dans toute l'organisation",
          "Former les équipes à la data literacy et aux outils BI",
          "Change management pour adopter les décisions basées sur les données"
        ]},
        { id: "m5", title: "Architecture Data & Cloud Strategy", bullets: [
          "Concevoir une architecture data moderne (multi-cloud, hybrid)",
          "Choisir les technologies (Snowflake, Databricks, Azure, AWS)",
          "Migration vers le cloud et optimisation des coûts"
        ]},
        { id: "m6", title: "Board Presentation: Data Strategy", bullets: [
          "Préparer une présentation stratégique data pour le Conseil",
          "Défendre les investissements data et démontrer le ROI",
          "Simulation de COMEX avec jury d'experts CDO et Q&A"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 4: FINANCE, CONTRÔLE DE GESTION & INVESTISSEMENT ==========
    {
      id: "p04-fondation", pillarId: "p04", pillarName: "Finance, Contrôle de Gestion & Investissement", pillarIcon: "💰",
      level: "Fondation", title: "Finance, Contrôle de Gestion & Investissement — Fondation",
      short: "Comptabilité générale, lecture des états financiers, budgétisation et analyse de rentabilité avec Excel et IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Fondamentaux de Comptabilité & Finance", bullets: [
          "Comprendre le bilan, compte de résultat et flux de trésorerie",
          "Principes comptables et cycles d'écritures",
          "IA pour automatiser la lecture des états financiers et détecter les anomalies"
        ]},
        { id: "m2", title: "Analyse Financière & Ratios Clés", bullets: [
          "Calculer et interpréter les ratios de liquidité, rentabilité, solvabilité",
          "Analyser la santé financière d'une entreprise",
          "Outils Excel avancés et IA pour générer des rapports automatisés"
        ]},
        { id: "m3", title: "Budgétisation & Prévisions Financières", bullets: [
          "Construire un budget annuel par centre de coût",
          "Suivi des écarts budget/réalisé et analyse des variances",
          "Tableaux de bord financiers avec Power BI et IA prédictive"
        ]},
        { id: "m4", title: "Projet: Analyse Financière d'Entreprise", bullets: [
          "Analyser les états financiers d'une entreprise réelle",
          "Produire un rapport d'analyse avec recommandations",
          "Présentation devant un jury finance et validation des acquis"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p04-maitrise", pillarId: "p04", pillarName: "Finance, Contrôle de Gestion & Investissement", pillarIcon: "💰",
      level: "Maîtrise", title: "Finance, Contrôle de Gestion & Investissement — Maîtrise",
      short: "Contrôle de gestion avancé, business planning, valorisation d'entreprise et décisions d'investissement avec modèles financiers",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Contrôle de Gestion Stratégique", bullets: [
          "Piloter la performance avec le Balanced Scorecard et KPIs financiers",
          "Analyse des écarts et plans d'action correctifs",
          "IA pour automatiser le reporting de gestion et prédire les dérives"
        ]},
        { id: "m2", title: "Business Planning & Modélisation Financière", bullets: [
          "Construire un business plan complet (hypothèses, P&L, cash flow, bilan)",
          "Modéliser des scénarios (optimiste, réaliste, pessimiste)",
          "Excel avancé avec macros VBA et IA pour simuler des projections"
        ]},
        { id: "m3", title: "Valorisation d'Entreprise & M&A", bullets: [
          "Méthodes de valorisation (DCF, multiples, actif net réévalué)",
          "Évaluer des cibles d'acquisition et négocier des deals",
          "Due diligence financière et intégration post-fusion"
        ]},
        { id: "m4", title: "Décisions d'Investissement & ROI", bullets: [
          "Analyser la rentabilité des projets (VAN, TRI, payback)",
          "Arbitrer entre plusieurs investissements selon les critères financiers",
          "Tableaux de bord d'investissement et suivi des performances"
        ]},
        { id: "m5", title: "Capstone: Business Case Complet", bullets: [
          "Élaborer un business case pour un projet d'investissement réel",
          "Modéliser les impacts financiers sur 5 ans et défendre le projet",
          "Présentation devant un comité d'investissement simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p04-leadership", pillarId: "p04", pillarName: "Finance, Contrôle de Gestion & Investissement", pillarIcon: "💰",
      level: "Leadership", title: "Finance, Contrôle de Gestion & Investissement — Leadership",
      short: "Direction financière, stratégie d'investissement, levées de fonds, relations investisseurs et pilotage financier groupe",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie Financière & Allocation de Capital", bullets: [
          "Définir la stratégie financière long terme de l'entreprise",
          "Optimiser l'allocation de capital entre investissements et dividendes",
          "IA pour simuler des scénarios macro-économiques et sectoriels"
        ]},
        { id: "m2", title: "Gouvernance Financière & Contrôle Interne", bullets: [
          "Mettre en place un système de contrôle interne robuste (COSO, SOX)",
          "Audits financiers et conformité réglementaire",
          "Framework de gouvernance pour piloter les risques financiers"
        ]},
        { id: "m3", title: "Levées de Fonds & Relations Investisseurs", bullets: [
          "Préparer une levée de fonds (equity, dette, obligations)",
          "Pitcher devant des investisseurs (VCs, Private Equity, banques)",
          "Gérer les relations investisseurs et la communication financière"
        ]},
        { id: "m4", title: "Pilotage Financier Groupe & Consolidation", bullets: [
          "Consolider les comptes de multiples filiales (normes IFRS, US GAAP)",
          "Piloter la trésorerie groupe et optimiser le BFR",
          "Reporting consolidé et tableaux de bord pour le Board"
        ]},
        { id: "m5", title: "Gestion de Crise & Restructuration Financière", bullets: [
          "Diagnostiquer une situation de crise financière",
          "Plans de redressement: restructuration de dette, cessions d'actifs",
          "Communication de crise et négociation avec les créanciers"
        ]},
        { id: "m6", title: "Board Presentation: Financial Strategy", bullets: [
          "Préparer une présentation financière pour le Conseil d'administration",
          "Défendre la stratégie d'investissement et les arbitrages budgétaires",
          "Simulation de comité financier avec jury d'experts CFO"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 5: GOUVERNANCE, RISQUES & CONFORMITÉ ==========
    {
      id: "p05-fondation", pillarId: "p05", pillarName: "Gouvernance, Risques & Conformité", pillarIcon: "🛡️",
      level: "Fondation", title: "Gouvernance, Risques & Conformité — Fondation",
      short: "Introduction au GRC, identification des risques, conformité réglementaire de base et premiers audits internes",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Introduction à la Gouvernance d'Entreprise", bullets: [
          "Rôles du Conseil d'administration, COMEX et comités spécialisés",
          "Principes de gouvernance (OCDE, codes de gouvernance locaux)",
          "IA pour cartographier les instances de gouvernance et documenter les rôles"
        ]},
        { id: "m2", title: "Fondamentaux de la Gestion des Risques", bullets: [
          "Identifier et évaluer les risques opérationnels, financiers, stratégiques",
          "Matrice de risques (probabilité × impact) et cartographie",
          "Outils de suivi des risques avec tableaux de bord et alertes IA"
        ]},
        { id: "m3", title: "Conformité Réglementaire & Procédures", bullets: [
          "Comprendre les obligations légales (RGPD, anti-blanchiment, fiscalité)",
          "Rédiger des procédures et politiques de conformité",
          "Audits de conformité et reporting aux autorités"
        ]},
        { id: "m4", title: "Projet: Audit Interne Opérationnel", bullets: [
          "Réaliser un audit interne d'un processus métier",
          "Identifier les écarts et proposer des actions correctives",
          "Présentation des conclusions et validation par un auditeur senior"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p05-maitrise", pillarId: "p05", pillarName: "Gouvernance, Risques & Conformité", pillarIcon: "🛡️",
      level: "Maîtrise", title: "Gouvernance, Risques & Conformité — Maîtrise",
      short: "Management des risques avancé (ERM), audits internes ISO, conformité RGPD/SOX et pilotage GRC avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Enterprise Risk Management (ERM)", bullets: [
          "Mettre en place un framework ERM (COSO ERM, ISO 31000)",
          "Cartographie des risques stratégiques et opérationnels",
          "IA pour surveiller les risques en temps réel et prédire les crises"
        ]},
        { id: "m2", title: "Audits Internes & Certification ISO", bullets: [
          "Conduire des audits internes selon les normes ISO (9001, 27001, 14001)",
          "Plans d'action correctifs et suivi des non-conformités",
          "Préparer l'entreprise aux audits externes de certification"
        ]},
        { id: "m3", title: "Conformité RGPD & Protection des Données", bullets: [
          "Mettre en conformité l'entreprise avec le RGPD",
          "Registre des traitements, DPO et analyse d'impact (PIA)",
          "Gestion des violations de données et notifications aux autorités"
        ]},
        { id: "m4", title: "Contrôle Interne & SOX Compliance", bullets: [
          "Concevoir un système de contrôle interne (COSO, SOX)",
          "Tests de contrôles et documentation des procédures",
          "Préparer les audits financiers externes et comités d'audit"
        ]},
        { id: "m5", title: "Capstone: Programme GRC Complet", bullets: [
          "Élaborer un programme GRC intégré pour une organisation",
          "Cartographie des risques, plans de conformité et audits planifiés",
          "Présentation devant un comité de gouvernance simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p05-leadership", pillarId: "p05", pillarName: "Gouvernance, Risques & Conformité", pillarIcon: "🛡️",
      level: "Leadership", title: "Gouvernance, Risques & Conformité — Leadership",
      short: "Direction GRC, stratégie de gouvernance groupe, pilotage des risques systémiques et relations avec les régulateurs",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie de Gouvernance & Board Governance", bullets: [
          "Définir le framework de gouvernance d'entreprise (codes locaux, OCDE)",
          "Structurer le Conseil d'administration et les comités (audit, risques, rémunérations)",
          "IA pour évaluer la maturité de la gouvernance et benchmarker"
        ]},
        { id: "m2", title: "Pilotage des Risques Stratégiques & Systémiques", bullets: [
          "Identifier les risques systémiques (cyber, géopolitiques, climatiques)",
          "Construire des plans de continuité d'activité (PCA) et gestion de crise",
          "Simulations de crise et tests de résilience organisationnelle"
        ]},
        { id: "m3", title: "Conformité Groupe & Réglementations Internationales", bullets: [
          "Piloter la conformité multi-pays (FCPA, UK Bribery Act, anti-corruption)",
          "Programme de compliance global et formation des équipes",
          "Gestion des enquêtes réglementaires et relations avec les autorités"
        ]},
        { id: "m4", title: "Audit Interne & Assurance Qualité", bullets: [
          "Structurer une fonction d'audit interne moderne et indépendante",
          "Audits basés sur les risques et assurance qualité des processus",
          "Reporting au comité d'audit et au Conseil"
        ]},
        { id: "m5", title: "Transformation Culturelle: Éthique & Compliance", bullets: [
          "Installer une culture d'éthique et de conformité dans l'organisation",
          "Code de conduite, formation et canaux de signalement (whistleblowing)",
          "Mesurer l'efficacité du programme de compliance"
        ]},
        { id: "m6", title: "Board Presentation: GRC Strategy", bullets: [
          "Préparer une présentation GRC pour le Conseil d'administration",
          "Défendre les investissements en gouvernance et gestion des risques",
          "Simulation de comité d'audit avec jury d'experts GRC"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 6: TRANSFORMATION DIGITALE & CONDUITE DU CHANGEMENT ==========
    {
      id: "p06-fondation", pillarId: "p06", pillarName: "Transformation Digitale & Conduite du Changement", pillarIcon: "🚀",
      level: "Fondation", title: "Transformation Digitale & Conduite du Changement — Fondation",
      short: "Outils digitaux du quotidien, méthodes agiles basics, conduite du changement et premiers projets de digitalisation",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Culture Digitale & Outils Collaboratifs", bullets: [
          "Maîtriser les outils de collaboration (Teams, Slack, Notion, Trello)",
          "Productivité digitale et gestion du temps avec IA",
          "Adopter les bonnes pratiques du travail hybride"
        ]},
        { id: "m2", title: "Introduction aux Méthodes Agiles", bullets: [
          "Comprendre Scrum, Kanban et les principes du Manifeste Agile",
          "Participer à des sprints et des cérémonies agiles",
          "Outils de gestion agile (Jira, Asana) et IA pour le suivi"
        ]},
        { id: "m3", title: "Conduite du Changement Basics", bullets: [
          "Modèles de changement (Kotter, ADKAR, Lewin)",
          "Accompagner les collaborateurs dans l'adoption de nouveaux outils",
          "Communication du changement et gestion des résistances"
        ]},
        { id: "m4", title: "Projet: Digitalisation d'un Processus", bullets: [
          "Identifier un processus manuel à digitaliser",
          "Proposer une solution digitale et un plan de déploiement",
          "Présentation du projet et validation par un expert transformation"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p06-maitrise", pillarId: "p06", pillarName: "Transformation Digitale & Conduite du Changement", pillarIcon: "🚀",
      level: "Maîtrise", title: "Transformation Digitale & Conduite du Changement — Maîtrise",
      short: "Pilotage de projets de transformation, change management avancé, adoption IA et mesure de l'impact du changement",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Diagnostic de Maturité Digitale", bullets: [
          "Évaluer la maturité digitale de l'organisation (assessment frameworks)",
          "Identifier les gaps et opportunités de transformation",
          "IA pour benchmarker avec les meilleures pratiques du marché"
        ]},
        { id: "m2", title: "Stratégie de Transformation Digitale", bullets: [
          "Élaborer une roadmap de transformation digitale sur 3 ans",
          "Prioriser les initiatives (quick wins, projets structurants)",
          "Construire le business case et obtenir le sponsorship exécutif"
        ]},
        { id: "m3", title: "Change Management Avancé (PROSCI)", bullets: [
          "Méthodologie PROSCI pour conduire le changement à grande échelle",
          "Gérer les résistances, mobiliser les ambassadeurs et mesurer l'adoption",
          "Plans de communication, formation et coaching des équipes"
        ]},
        { id: "m4", title: "Adoption de l'IA & Automatisation", bullets: [
          "Identifier les cas d'usage IA à fort impact business",
          "Piloter des projets d'automatisation (RPA, chatbots, IA générative)",
          "Former les équipes à l'utilisation de l'IA dans leur quotidien"
        ]},
        { id: "m5", title: "Capstone: Roadmap de Transformation", bullets: [
          "Élaborer une roadmap de transformation digitale complète",
          "Plans de conduite du changement, budgets et KPIs de succès",
          "Présentation devant un comité de direction simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p06-leadership", pillarId: "p06", pillarName: "Transformation Digitale & Conduite du Changement", pillarIcon: "🚀",
      level: "Leadership", title: "Transformation Digitale & Conduite du Changement — Leadership",
      short: "Direction de la transformation, stratégie digitale groupe, culture de l'innovation et pilotage du changement à l'échelle",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Vision & Stratégie de Transformation Groupe", bullets: [
          "Définir la vision digitale de l'entreprise et l'ambition transformation",
          "Aligner la stratégie digitale sur la stratégie d'entreprise",
          "IA pour simuler des scénarios de transformation et optimiser la roadmap"
        ]},
        { id: "m2", title: "Gouvernance de la Transformation", bullets: [
          "Structurer le pilotage de la transformation (comités, rôles, KPIs)",
          "Créer un bureau de transformation (Transformation Office)",
          "Aligner les initiatives digitales avec les objectifs stratégiques"
        ]},
        { id: "m3", title: "Change Management at Scale", bullets: [
          "Conduire le changement à l'échelle d'une organisation multi-sites",
          "Gérer la transformation culturelle et l'engagement des équipes",
          "Mesurer l'adoption et ajuster les plans de conduite du changement"
        ]},
        { id: "m4", title: "Innovation & Culture Digitale", bullets: [
          "Installer une culture de l'innovation et de l'expérimentation",
          "Mettre en place des labs d'innovation et des hackathons",
          "Favoriser l'intrapreneuriat et valoriser les initiatives bottom-up"
        ]},
        { id: "m5", title: "Pilotage de l'Écosystème Digital", bullets: [
          "Gérer les partenaires technologiques et les intégrateurs",
          "Pilotage des investissements digitaux et optimisation du TCO",
          "Reporting exécutif et communication au Board sur la transformation"
        ]},
        { id: "m6", title: "Board Presentation: Digital Transformation", bullets: [
          "Préparer une présentation transformation pour le Conseil",
          "Défendre les investissements digitaux et démontrer le ROI",
          "Simulation de COMEX avec jury d'experts transformation"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 7: CYBERSÉCURITÉ & RÉSILIENCE ==========
    {
      id: "p07-fondation", pillarId: "p07", pillarName: "Cybersécurité & Résilience", pillarIcon: "🔐",
      level: "Fondation", title: "Cybersécurité & Résilience — Fondation",
      short: "Fondamentaux de la cybersécurité, hygiène numérique, détection des menaces et sensibilisation aux risques cyber",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Introduction à la Cybersécurité", bullets: [
          "Menaces cyber courantes (phishing, ransomware, malware)",
          "Principes de sécurité: confidentialité, intégrité, disponibilité (CIA)",
          "IA pour détecter les comportements suspects et alerter en temps réel"
        ]},
        { id: "m2", title: "Hygiène Numérique & Bonnes Pratiques", bullets: [
          "Gestion des mots de passe et authentification multi-facteurs (MFA)",
          "Sécuriser les postes de travail et les appareils mobiles",
          "Sensibilisation aux risques et formation des collaborateurs"
        ]},
        { id: "m3", title: "Détection & Réponse aux Incidents", bullets: [
          "Identifier les incidents de sécurité et signaler rapidement",
          "Premiers gestes en cas de cyberattaque (isoler, documenter, alerter)",
          "Outils de monitoring et SIEM basics pour suivre les logs"
        ]},
        { id: "m4", title: "Projet: Audit de Sécurité Opérationnel", bullets: [
          "Réaliser un audit de sécurité d'un système ou processus",
          "Identifier les vulnérabilités et proposer des mesures correctives",
          "Présentation des conclusions et validation par un expert cyber"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p07-maitrise", pillarId: "p07", pillarName: "Cybersécurité & Résilience", pillarIcon: "🔐",
      level: "Maîtrise", title: "Cybersécurité & Résilience — Maîtrise",
      short: "Management de la sécurité (ISO 27001), SOC, gestion des incidents, tests d'intrusion et pilotage cyber avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Management de la Sécurité ISO 27001", bullets: [
          "Mettre en place un SMSI (Système de Management de la Sécurité de l'Information)",
          "Analyse de risques (ISO 27005) et traitement des risques",
          "Préparer la certification ISO 27001 et audits externes"
        ]},
        { id: "m2", title: "Security Operations Center (SOC)", bullets: [
          "Structurer un SOC et définir les rôles (analystes, threat hunters)",
          "Outils SIEM (Splunk, QRadar) et IA pour détecter les menaces",
          "Processus de triage, escalade et réponse aux incidents"
        ]},
        { id: "m3", title: "Gestion des Incidents & Forensics", bullets: [
          "Répondre aux incidents de sécurité avec méthode (NIST, SANS)",
          "Investigation forensique pour comprendre l'origine et l'impact",
          "Plans de remédiation et leçons apprises post-incident"
        ]},
        { id: "m4", title: "Tests d'Intrusion & Vulnerability Management", bullets: [
          "Conduire des pentests et audits de sécurité techniques",
          "Identifier les vulnérabilités (OWASP Top 10, CVE)",
          "Prioriser les correctifs et suivre les remédiation plans"
        ]},
        { id: "m5", title: "Capstone: Programme de Sécurité Complet", bullets: [
          "Élaborer un programme de cybersécurité pour une organisation",
          "Cartographie des risques, plans de sécurité et indicateurs SOC",
          "Présentation devant un comité de sécurité simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p07-leadership", pillarId: "p07", pillarName: "Cybersécurité & Résilience", pillarIcon: "🔐",
      level: "Leadership", title: "Cybersécurité & Résilience — Leadership",
      short: "Direction cyber, stratégie de résilience, gestion de crise cyber, conformité réglementaire et pilotage du RSSI",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie de Cybersécurité & Résilience", bullets: [
          "Définir la stratégie cyber de l'entreprise et les priorités",
          "Aligner la cybersécurité sur les objectifs business et la gestion des risques",
          "IA pour évaluer la maturité cyber et benchmarker avec le marché"
        ]},
        { id: "m2", title: "Gouvernance Cyber & Comité de Sécurité", bullets: [
          "Structurer la gouvernance cyber (CISO, comité de sécurité, RACI)",
          "Reporting au Board sur les risques cyber et les investissements",
          "Framework de gouvernance (NIST, ISO, CIS Controls)"
        ]},
        { id: "m3", title: "Gestion de Crise Cyber & Business Continuity", bullets: [
          "Préparer et gérer une crise cyber (ransomware, data breach)",
          "Plans de continuité d'activité (PCA) et disaster recovery (DRP)",
          "Simulations de crise et tests de résilience organisationnelle"
        ]},
        { id: "m4", title: "Conformité Réglementaire Cyber (NIS2, DORA)", bullets: [
          "Piloter la conformité cyber (RGPD, NIS2, DORA, SOC 2)",
          "Notification des violations et relations avec les régulateurs",
          "Audits de conformité et certifications sectorielles"
        ]},
        { id: "m5", title: "Pilotage des Investissements Cyber", bullets: [
          "Construire le budget cyber et prioriser les investissements",
          "ROI des investissements en sécurité et réduction du risque résiduel",
          "Gérer les partenaires cyber (MSSP, pentesteurs, assureurs)"
        ]},
        { id: "m6", title: "Board Presentation: Cyber Strategy", bullets: [
          "Préparer une présentation cyber pour le Conseil d'administration",
          "Défendre les investissements en cybersécurité et résilience",
          "Simulation de comité de sécurité avec jury d'experts CISO"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 8: IT SERVICE MANAGEMENT (ITIL4) & ARCHITECTURE SI ==========
    {
      id: "p08-fondation", pillarId: "p08", pillarName: "IT Service Management (ITIL4) & Architecture SI", pillarIcon: "⚙️",
      level: "Fondation", title: "IT Service Management (ITIL4) & Architecture SI — Fondation",
      short: "ITIL 4 basics, gestion des incidents, catalogue de services et support utilisateurs avec automatisation IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Introduction à ITIL 4 & Service Management", bullets: [
          "Principes ITIL 4 et chaîne de valeur des services (SVS)",
          "Rôles IT (support, incidents, problèmes, changements)",
          "IA pour automatiser le support de niveau 1 avec chatbots"
        ]},
        { id: "m2", title: "Gestion des Incidents & Service Desk", bullets: [
          "Traiter les incidents IT et restaurer le service rapidement",
          "Outils ITSM (ServiceNow, Jira Service Management) et ticketing",
          "Automatisation des réponses et routage intelligent avec IA"
        ]},
        { id: "m3", title: "Catalogue de Services & SLA", bullets: [
          "Définir le catalogue de services IT et les niveaux de service (SLA)",
          "Mesurer la qualité de service et améliorer la satisfaction utilisateurs",
          "Tableaux de bord de performance IT avec indicateurs clés"
        ]},
        { id: "m4", title: "Projet: Amélioration d'un Processus ITSM", bullets: [
          "Analyser un processus ITSM et identifier les points d'amélioration",
          "Proposer des optimisations et automatisations avec IA",
          "Présentation du projet et validation par un expert ITIL"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p08-maitrise", pillarId: "p08", pillarName: "IT Service Management (ITIL4) & Architecture SI", pillarIcon: "⚙️",
      level: "Maîtrise", title: "IT Service Management (ITIL4) & Architecture SI — Maîtrise",
      short: "ITIL 4 avancé, gestion des problèmes et changements, architecture SI et urbanisation des systèmes",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "ITIL 4 Avancé: Gestion des Problèmes & Changements", bullets: [
          "Analyse des causes racines (RCA) et résolution des problèmes récurrents",
          "Gérer les changements IT sans perturber les services (change management)",
          "IA pour prédire les incidents et automatiser les changements de routine"
        ]},
        { id: "m2", title: "Architecture des Systèmes d'Information", bullets: [
          "Concevoir une architecture SI robuste et évolutive",
          "Urbanisation du SI et cartographie des applications",
          "Frameworks d'architecture (TOGAF, Zachman) et modélisation"
        ]},
        { id: "m3", title: "Gestion des Services IT & CMDB", bullets: [
          "Construire une CMDB (Configuration Management Database) à jour",
          "Cartographier les dépendances entre services et infrastructures",
          "Automatiser la découverte des actifs IT avec IA et outils de scanning"
        ]},
        { id: "m4", title: "Amélioration Continue & ITIL 4 Practices", bullets: [
          "Mettre en œuvre les 34 pratiques ITIL 4 (incidents, problèmes, SLM, etc.)",
          "Amélioration continue des services (CSI) et mesure de la valeur",
          "Tableaux de bord IT avec KPIs de performance et satisfaction"
        ]},
        { id: "m5", title: "Capstone: Transformation ITSM", bullets: [
          "Élaborer un plan de transformation ITSM pour une organisation",
          "Roadmap d'implémentation ITIL 4, outils et formation des équipes",
          "Présentation devant un comité IT simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p08-leadership", pillarId: "p08", pillarName: "IT Service Management (ITIL4) & Architecture SI", pillarIcon: "⚙️",
      level: "Leadership", title: "IT Service Management (ITIL4) & Architecture SI — Leadership",
      short: "Direction des systèmes d'information, stratégie IT, gouvernance SI et pilotage de la DSI multi-sites",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie des Systèmes d'Information", bullets: [
          "Définir la stratégie IT alignée sur la stratégie d'entreprise",
          "Construire une roadmap SI sur 3 à 5 ans avec priorités business",
          "IA pour évaluer la maturité SI et benchmarker avec le marché"
        ]},
        { id: "m2", title: "Gouvernance IT & Framework COBIT", bullets: [
          "Mettre en place une gouvernance IT moderne (COBIT, ITIL 4, Val IT)",
          "Définir les KPIs IT et les aligner sur les objectifs business",
          "Comités de gouvernance IT et reporting au Board"
        ]},
        { id: "m3", title: "Architecture d'Entreprise & Urbanisation SI", bullets: [
          "Concevoir l'architecture d'entreprise (business, data, application, tech)",
          "Urbaniser le SI pour réduire la complexité et améliorer l'agilité",
          "Frameworks TOGAF et gestion de la dette technique"
        ]},
        { id: "m4", title: "Pilotage de la DSI Multi-Sites", bullets: [
          "Organiser et piloter une DSI multi-pays ou multi-sites",
          "Gérer les équipes IT distribuées et les centres de services (SSC)",
          "Tableaux de bord consolidés et reporting exécutif"
        ]},
        { id: "m5", title: "Transformation IT & Cloud Strategy", bullets: [
          "Conduire la transformation IT vers le cloud (IaaS, PaaS, SaaS)",
          "Gérer la migration des applications et optimiser les coûts cloud",
          "FinOps et pilotage des dépenses cloud avec IA"
        ]},
        { id: "m6", title: "Board Presentation: IT Strategy", bullets: [
          "Préparer une présentation IT pour le Conseil d'administration",
          "Défendre les investissements IT et démontrer la valeur business",
          "Simulation de comité IT avec jury d'experts CIO/DSI"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 9: SUPPLY CHAIN, ACHATS & TRAÇABILITÉ ==========
    {
      id: "p09-fondation", pillarId: "p09", pillarName: "Supply Chain, Achats & Traçabilité", pillarIcon: "🔗",
      level: "Fondation", title: "Supply Chain, Achats & Traçabilité — Fondation",
      short: "Fondamentaux supply chain, gestion des stocks, achats responsables et traçabilité avec IA prédictive",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Introduction à la Supply Chain", bullets: [
          "Comprendre la chaîne d'approvisionnement (sourcing, production, distribution)",
          "Rôles Supply Chain (planificateur, acheteur, logisticien)",
          "IA pour optimiser les prévisions de demande et réduire les ruptures"
        ]},
        { id: "m2", title: "Gestion des Stocks & Inventaires", bullets: [
          "Techniques de gestion des stocks (FIFO, LIFO, Kanban)",
          "Optimiser les niveaux de stock et réduire les coûts de détention",
          "Outils ERP (SAP, Oracle) et IA pour automatiser les réapprovisionnements"
        ]},
        { id: "m3", title: "Achats & Sourcing Responsable", bullets: [
          "Processus achats: sourcing, négociation, contrats, suivi fournisseurs",
          "Évaluer les fournisseurs et gérer les risques supply chain",
          "Achats responsables et conformité (RSE, éthique, durabilité)"
        ]},
        { id: "m4", title: "Projet: Optimisation d'un Flux Supply Chain", bullets: [
          "Analyser un flux supply chain et identifier les goulots d'étranglement",
          "Proposer des optimisations pour réduire coûts et délais",
          "Présentation du projet et validation par un expert supply chain"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p09-maitrise", pillarId: "p09", pillarName: "Supply Chain, Achats & Traçabilité", pillarIcon: "🔗",
      level: "Maîtrise", title: "Supply Chain, Achats & Traçabilité — Maîtrise",
      short: "Planification S&OP, achats stratégiques, traçabilité blockchain et pilotage supply chain multi-sites avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Sales & Operations Planning (S&OP)", bullets: [
          "Mettre en place un processus S&OP pour aligner ventes et opérations",
          "Prévisions de demande avancées avec méthodes statistiques et IA",
          "Pilotage du plan industriel et commercial (PIC)"
        ]},
        { id: "m2", title: "Achats Stratégiques & Category Management", bullets: [
          "Élaborer une stratégie achats par catégorie (category management)",
          "Négociation avancée et gestion des contrats complexes",
          "Digitalisation des achats (e-procurement) et IA pour le sourcing"
        ]},
        { id: "m3", title: "Traçabilité & Supply Chain Visibility", bullets: [
          "Mettre en place la traçabilité des produits (blockchain, IoT, RFID)",
          "Visibilité end-to-end de la supply chain et alertes en temps réel",
          "Conformité réglementaire (traçabilité alimentaire, pharma, etc.)"
        ]},
        { id: "m4", title: "Gestion des Risques Supply Chain", bullets: [
          "Identifier et mitiger les risques supply chain (fournisseurs, géopolitiques)",
          "Plans de continuité supply chain et dual sourcing",
          "IA pour prédire les disruptions et proposer des alternatives"
        ]},
        { id: "m5", title: "Capstone: Transformation Supply Chain", bullets: [
          "Élaborer un plan de transformation supply chain pour une organisation",
          "Roadmap d'optimisation, digitalisation et KPIs de performance",
          "Présentation devant un comité supply chain simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "PREINSCRIPTION", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p09-leadership", pillarId: "p09", pillarName: "Supply Chain, Achats & Traçabilité", pillarIcon: "🔗",
      level: "Leadership", title: "Supply Chain, Achats & Traçabilité — Leadership",
      short: "Direction supply chain, stratégie achats groupe, résilience supply chain et pilotage multi-pays",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie Supply Chain & Réseau de Distribution", bullets: [
          "Définir la stratégie supply chain globale (make vs buy, localisation)",
          "Concevoir le réseau de distribution optimal (usines, entrepôts, hubs)",
          "IA pour optimiser les flux et réduire les coûts logistiques"
        ]},
        { id: "m2", title: "Gouvernance Supply Chain Groupe", bullets: [
          "Structurer la gouvernance supply chain (comités, rôles, KPIs)",
          "Aligner les supply chains locales sur la stratégie groupe",
          "Reporting exécutif et tableaux de bord consolidés"
        ]},
        { id: "m3", title: "Résilience Supply Chain & Risk Management", bullets: [
          "Construire une supply chain résiliente face aux crises (COVID, guerres)",
          "Stratégies de diversification des fournisseurs et nearshoring",
          "Simulations de crise et plans de continuité supply chain"
        ]},
        { id: "m4", title: "Transformation Digitale Supply Chain 4.0", bullets: [
          "Digitaliser la supply chain (IoT, blockchain, IA, jumeaux numériques)",
          "Automatisation des entrepôts et robots collaboratifs",
          "Pilotage de la supply chain en temps réel avec IA prédictive"
        ]},
        { id: "m5", title: "Achats Stratégiques Groupe & Sourcing Global", bullets: [
          "Définir la stratégie achats groupe et optimiser le spend",
          "Sourcing global et gestion des fournisseurs internationaux",
          "Conformité achats (anti-corruption, RSE, due diligence)"
        ]},
        { id: "m6", title: "Board Presentation: Supply Chain Strategy", bullets: [
          "Préparer une présentation supply chain pour le Conseil",
          "Défendre les investissements supply chain et démontrer le ROI",
          "Simulation de comité supply chain avec jury d'experts CSO"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
      status: "V2", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    
    // ========== PILIER 10: MARKETING, COMMERCIAL & GROWTH + CULTURE ENTREPRENEURIALE ==========
    {
      id: "p10-fondation", pillarId: "p10", pillarName: "Marketing, Commercial & Growth + Culture Entrepreneuriale", pillarIcon: "💡",
      level: "Fondation", title: "Marketing, Commercial & Growth + Culture Entrepreneuriale — Fondation",
      short: "Fondamentaux marketing digital, techniques de vente, acquisition clients et mindset entrepreneur avec IA",
      audience: "Junior/Analyste", durationDays: 5,
      modules: [
        { id: "m1", title: "Marketing Digital & Réseaux Sociaux", bullets: [
          "Stratégie social media (LinkedIn, Facebook, Instagram, TikTok)",
          "Content marketing et storytelling pour engager l'audience",
          "IA pour automatiser la création de contenus et l'analyse des performances"
        ]},
        { id: "m2", title: "Techniques de Vente & Prospection", bullets: [
          "Prospection commerciale: cold calling, emailing, LinkedIn outreach",
          "Techniques de closing et gestion des objections",
          "CRM (Salesforce, HubSpot) et IA pour scorer les leads"
        ]},
        { id: "m3", title: "Acquisition Clients & Funnel de Conversion", bullets: [
          "Construire un funnel de conversion (TOFU, MOFU, BOFU)",
          "Optimiser les landing pages et campagnes publicitaires (Google Ads, Meta)",
          "A/B testing et amélioration continue du taux de conversion"
        ]},
        { id: "m4", title: "Projet: Lancer une Campagne Marketing", bullets: [
          "Concevoir et lancer une campagne marketing digitale de A à Z",
          "Mesurer les résultats (ROI, CAC, LTV) et ajuster la stratégie",
          "Présentation du projet et validation par un expert marketing"
        ]}
      ],
      pricing: { pack_fcfa: 214376, modules_count: 4, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p10-maitrise", pillarId: "p10", pillarName: "Marketing, Commercial & Growth + Culture Entrepreneuriale", pillarIcon: "💡",
      level: "Maîtrise", title: "Marketing, Commercial & Growth + Culture Entrepreneuriale — Maîtrise",
      short: "Growth hacking, stratégie commerciale, automation marketing et développement d'un business model avec IA",
      audience: "Manager/Expert", durationDays: 8,
      modules: [
        { id: "m1", title: "Growth Hacking & Acquisition Scalable", bullets: [
          "Techniques de croissance rapide (viral loops, referral programs)",
          "Framework AARRR (Acquisition, Activation, Rétention, Referral, Revenue)",
          "IA pour prédire le LTV client et optimiser le CAC"
        ]},
        { id: "m2", title: "Marketing Automation & Lead Nurturing", bullets: [
          "Mettre en place des workflows d'automatisation marketing (HubSpot, Marketo)",
          "Email marketing avancé et segmentation comportementale",
          "Chatbots IA pour qualifier les leads et accélérer les ventes"
        ]},
        { id: "m3", title: "Stratégie Commerciale & Account Management", bullets: [
          "Élaborer une stratégie de développement commercial (B2B, B2C, B2B2C)",
          "Piloter une équipe commerciale et définir les quotas",
          "Account-based marketing (ABM) et gestion des grands comptes"
        ]},
        { id: "m4", title: "Business Model & Monétisation", bullets: [
          "Concevoir un business model innovant (freemium, abonnement, marketplace)",
          "Stratégies de pricing et optimisation de la monétisation",
          "Mesurer la rentabilité par segment et produit"
        ]},
        { id: "m5", title: "Capstone: Plan de Croissance 12 Mois", bullets: [
          "Élaborer un plan de croissance marketing et commercial sur 12 mois",
          "Budgets, canaux d'acquisition, KPIs et projections de revenus",
          "Présentation devant un comité growth simulé"
        ]}
      ],
      pricing: { pack_fcfa: 267970, modules_count: 5, module_fcfa: 69672 },
      status: "OUVERT", tags: ["IA embarquée", "APC", "Day-1 Operational"]
    },
    {
      id: "p10-leadership", pillarId: "p10", pillarName: "Marketing, Commercial & Growth + Culture Entrepreneuriale", pillarIcon: "💡",
      level: "Leadership", title: "Marketing, Commercial & Growth + Culture Entrepreneuriale — Leadership",
      short: "Direction marketing et commerciale, stratégie de marque, expansion internationale et entrepreneuriat stratégique",
      audience: "DG/Directeur", durationDays: 10,
      modules: [
        { id: "m1", title: "Stratégie Marketing & Positionnement de Marque", bullets: [
          "Définir la stratégie marketing long terme et le positionnement de marque",
          "Construire une marque forte et différenciée (brand equity)",
          "IA pour analyser la perception de marque et ajuster le positionnement"
        ]},
        { id: "m2", title: "Direction Commerciale & Pilotage des Ventes", bullets: [
          "Organiser et piloter une direction commerciale multi-canaux",
          "Définir la stratégie de go-to-market et les priorités de développement",
          "Tableaux de bord commerciaux et prévisions de revenus"
        ]},
        { id: "m3", title: "Expansion Internationale & Market Entry", bullets: [
          "Élaborer une stratégie d'expansion internationale (nouveaux marchés)",
          "Études de marché, adaptation produit et stratégies d'entrée",
          "Pilotage des opérations multi-pays et gestion des équipes locales"
        ]},
        { id: "m4", title: "Culture Entrepreneuriale & Intrapreneuriat", bullets: [
          "Installer une culture entrepreneuriale dans l'organisation",
          "Encourager l'intrapreneuriat et l'innovation bottom-up",
          "Frameworks d'innovation (Lean Startup, Design Thinking, Agile)"
        ]},
        { id: "m5", title: "Levée de Fonds & Pitch Investisseurs", bullets: [
          "Préparer une levée de fonds (seed, Series A, B, C)",
          "Construire un pitch deck et storytelling pour investisseurs",
          "Négociation des termes (term sheet, valorisation, dilution)"
        ]},
        { id: "m6", title: "Board Presentation: Marketing & Growth Strategy", bullets: [
          "Préparer une présentation marketing et croissance pour le Conseil",
          "Défendre les investissements marketing et démontrer le ROI",
          "Simulation de comité growth avec jury d'experts CMO/CGO"
        ]}
      ],
      pricing: { pack_fcfa: 321564, modules_count: 6, module_fcfa: 69672 },
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
