/**
 * DigiSchool Africa - Catalogue 30 Parcours V1.2 FULLY DIFFERENTIATED
 * 10 Piliers × 3 Niveaux (Fondation, Maîtrise, Leadership)
 * ZERO duplication textuelle - 100% modules uniques
 */

const DIGISCHOOL_CATALOG = {
  version: "1.2-fully-differentiated",
  
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
{
    "id": "p01-fondation",
    "pillarId": "p01",
    "pillarName": "Leadership & Management",
    "pillarIcon": "👔",
    "level": "Fondation",
    "title": "Leadership & Management — Fondation",
    "short": "Bases du leadership opérationnel pour junior managers, avec outils IA de feedback et coaching automatisé",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Posture de leader opérationnel",
            "bullets": [
                "Identifier son style de leadership personnel avec IA de profiling",
                "Communiquer efficacement en situation de tension d'équipe",
                "Mobiliser son équipe autour d'objectifs concrets court-terme"
            ]
        },
        {
            "id": "m2",
            "title": "Outils de management quotidien",
            "bullets": [
                "Organiser des one-on-ones structurés avec grilles IA",
                "Déléguer avec clarté et suivre les engagements",
                "Donner du feedback constructif en temps réel"
            ]
        },
        {
            "id": "m3",
            "title": "Gestion des situations difficiles",
            "bullets": [
                "Désamorcer les conflits interpersonnels avec méthode",
                "Gérer un collaborateur en sous-performance",
                "Prioriser les demandes urgentes vs importantes (matrice Eisenhower IA)"
            ]
        },
        {
            "id": "m4",
            "title": "Projet fil rouge: plan de management 30 jours",
            "bullets": [
                "Construire votre première roadmap managériale opérationnelle",
                "Présenter votre plan devant un jury de managers seniors",
                "Obtenir certification Leadership Opérationnel DigiSchool"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p01-maitrise",
    "pillarId": "p01",
    "pillarName": "Leadership & Management",
    "pillarIcon": "👔",
    "level": "Maîtrise",
    "title": "Leadership & Management — Maîtrise",
    "short": "Management d'équipes hybrides multi-sites, coaching de managers intermédiaires, et conduite du changement organisationnel",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Leadership transformationnel en contexte hybride",
            "bullets": [
                "Articuler vision inspirante pour équipes distribuées géographiquement",
                "Piloter la performance à distance avec OKRs et IA de suivi",
                "Créer des rituels d'engagement (all-hands, retros, célébrations)"
            ]
        },
        {
            "id": "m2",
            "title": "Coaching et développement de managers",
            "bullets": [
                "Former vos managers de proximité aux techniques de feedback",
                "Construire un plan de succession pour vos talents clés",
                "Utiliser l'IA pour détecter les signaux de désengagement"
            ]
        },
        {
            "id": "m3",
            "title": "Gouvernance et rituels managériaux",
            "bullets": [
                "Structurer vos comités de pilotage (hebdo, mensuel, trimestriel)",
                "Créer des dashboards de performance RH (turnover, engagement, productivité)",
                "Automatiser le reporting managérial avec Power BI et IA"
            ]
        },
        {
            "id": "m4",
            "title": "Conduite du changement organisationnel",
            "bullets": [
                "Cartographier les parties prenantes et résistances au changement",
                "Déployer un plan de communication multi-canal (town halls, newsletters, Slack)",
                "Mesurer l'adoption du changement avec indicateurs comportementaux"
            ]
        },
        {
            "id": "m5",
            "title": "Capstone: transformation d'équipe sur 90 jours",
            "bullets": [
                "Élaborer un plan de transformation managériale complet",
                "Simuler un comité de direction avec cas réel d'entreprise",
                "Présenter votre business case devant jury d'experts RH"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "PREINSCRIPTION",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p01-leadership",
    "pillarId": "p01",
    "pillarName": "Leadership & Management",
    "pillarIcon": "👔",
    "level": "Leadership",
    "title": "Leadership & Management — Leadership",
    "short": "Leadership exécutif pour DG-1/DG-2: vision stratégique, gouvernance groupe, culture d'entreprise et transformation à grande échelle",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Vision stratégique et ambition long-terme",
            "bullets": [
                "Élaborer une vision d'entreprise inspirante sur 5-10 ans",
                "Traduire la vision en stratégie exécutable (Balanced Scorecard)",
                "Aligner le comité exécutif sur les priorités stratégiques avec IA de simulation"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance exécutive et operating model",
            "bullets": [
                "Designer l'architecture organisationnelle optimale (centralisé, fédéré, décentralisé)",
                "Structurer les comités de gouvernance (board, COMEX, CODIR)",
                "Définir les règles de délégation et accountability matricielles"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage de la performance multi-entités",
            "bullets": [
                "Construire le tableau de bord consolidé groupe (KPI financiers + opérationnels)",
                "Animer les revues de performance trimestrielles avec filiales/BU",
                "Utiliser l'IA prédictive pour anticiper les dérives budgétaires"
            ]
        },
        {
            "id": "m4",
            "title": "Culture d'entreprise et transformation culturelle",
            "bullets": [
                "Diagnostiquer la culture actuelle (enquête, interviews, IA de sentiment)",
                "Définir la culture cible alignée sur la stratégie (valeurs, comportements clés)",
                "Piloter la transformation culturelle avec champions internes et quick wins"
            ]
        },
        {
            "id": "m5",
            "title": "Transformation à grande échelle et M&A",
            "bullets": [
                "Conduire une transformation digitale, organisationnelle ou post-M&A",
                "Gérer les synergies et intégrations multi-pays/multi-cultures",
                "Mobiliser 500+ collaborateurs avec plan de communication groupe"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack et simulation COMEX",
            "bullets": [
                "Préparer une présentation Board-ready (vision, stratégie, résultats, risques)",
                "Simuler un COMEX avec cas réel (arbitrages budgétaires, lancement produit, crise)",
                "Validation par jury de DG et partenaires investisseurs"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "PREINSCRIPTION",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p02-fondation",
    "pillarId": "p02",
    "pillarName": "Gestion de Projet & PMO",
    "pillarIcon": "📊",
    "level": "Fondation",
    "title": "Gestion de Projet & PMO — Fondation",
    "short": "Fondamentaux PMP: cadrage, planification, exécution et clôture de projets simples avec MS Project et IA de prédiction",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Cadrage et charte projet",
            "bullets": [
                "Rédiger une charte projet (objectifs, périmètre, parties prenantes)",
                "Identifier les contraintes (budget, délais, ressources) avec IA de benchmark",
                "Valider le GO/NO-GO avec sponsor et comité de pilotage"
            ]
        },
        {
            "id": "m2",
            "title": "Planification avec MS Project et IA",
            "bullets": [
                "Créer le WBS (Work Breakdown Structure) et estimer les charges",
                "Construire le diagramme de Gantt et chemin critique",
                "Utiliser l'IA pour optimiser l'allocation des ressources"
            ]
        },
        {
            "id": "m3",
            "title": "Exécution et suivi des livrables",
            "bullets": [
                "Animer les points d'avancement hebdomadaires avec l'équipe projet",
                "Suivre les écarts de planning et budget (earned value management)",
                "Gérer les risques et issues avec registre partagé (Jira, Asana, IA)"
            ]
        },
        {
            "id": "m4",
            "title": "Clôture et capitalisation",
            "bullets": [
                "Organiser la réception des livrables avec client/sponsor",
                "Rédiger le bilan de projet et lessons learned",
                "Certifier votre premier projet avec jury de chefs de projet seniors"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p02-maitrise",
    "pillarId": "p02",
    "pillarName": "Gestion de Projet & PMO",
    "pillarIcon": "📊",
    "level": "Maîtrise",
    "title": "Gestion de Projet & PMO — Maîtrise",
    "short": "Gestion de projets complexes multi-équipes, PMO et préparation certification PMP officielle avec simulateur d'examen IA",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Gestion de programmes et portefeuilles",
            "bullets": [
                "Prioriser les projets avec matrice stratégique (impact vs effort)",
                "Arbitrer les ressources entre projets concurrents (capacity planning IA)",
                "Piloter un portefeuille de 5-10 projets avec roadmap consolidée"
            ]
        },
        {
            "id": "m2",
            "title": "PMO: méthodes et standards",
            "bullets": [
                "Mettre en place un PMO (processus, templates, gouvernance)",
                "Former les chefs de projet aux standards PMP/PRINCE2",
                "Automatiser le reporting multi-projets avec Power BI et IA"
            ]
        },
        {
            "id": "m3",
            "title": "Risk management avancé et contingence",
            "bullets": [
                "Construire la matrice de risques quantitative (probabilité × impact financier)",
                "Élaborer des plans de contingence et mitigation pour risques critiques",
                "Utiliser l'IA prédictive pour anticiper les dérives de planning"
            ]
        },
        {
            "id": "m4",
            "title": "Stakeholder management et négociation",
            "bullets": [
                "Cartographier les parties prenantes (pouvoir, intérêt, influence)",
                "Gérer les conflits d'intérêts et négocier les trade-offs (périmètre vs délais vs coûts)",
                "Communiquer efficacement avec sponsors, clients et équipes distribuées"
            ]
        },
        {
            "id": "m5",
            "title": "Préparation intensive PMP + capstone projet",
            "bullets": [
                "Réviser les 49 processus PMP avec simulateur d'examen IA (200 questions)",
                "Piloter un projet complexe multi-équipes de bout en bout (capstone)",
                "Valider votre niveau PMP-ready avec jury de PMPs certifiés"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p02-leadership",
    "pillarId": "p02",
    "pillarName": "Gestion de Projet & PMO",
    "pillarIcon": "📊",
    "level": "Leadership",
    "title": "Gestion de Projet & PMO — Leadership",
    "short": "Directeur PMO / Programme: gouvernance portefeuille, transformation PMO et pilotage stratégique multi-BU",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie de portefeuille et roadmap groupe",
            "bullets": [
                "Aligner le portefeuille de projets sur la stratégie d'entreprise (Balanced Scorecard)",
                "Construire la roadmap multi-années avec jalons stratégiques",
                "Utiliser l'IA pour simuler des scénarios de priorisation (coût opportunité)"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance PMO et operating model",
            "bullets": [
                "Designer l'organisation PMO optimale (centralisé vs décentralisé vs fédéré)",
                "Définir les rôles et responsabilités (PMO Director, Portfolio Manager, Scrum Masters)",
                "Structurer les comités de gouvernance (steering, portfolio review, COMEX projet)"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage financier et ROI portefeuille",
            "bullets": [
                "Consolider les budgets multi-projets et suivre les dépenses (earned value agrégé)",
                "Mesurer le ROI du portefeuille et arbitrer les projets non rentables",
                "Automatiser le reporting financier avec SAP/Oracle et IA"
            ]
        },
        {
            "id": "m4",
            "title": "Transformation PMO et change management",
            "bullets": [
                "Diagnostiquer la maturité PMO actuelle (niveau 1 à 5 du modèle OPM3)",
                "Piloter la transformation vers PMO stratégique (de contrôle à valeur ajoutée)",
                "Former 50+ chefs de projet et managers aux nouvelles pratiques"
            ]
        },
        {
            "id": "m5",
            "title": "Risk management stratégique et audit",
            "bullets": [
                "Cartographier les risques stratégiques du portefeuille (technologiques, réglementaires, marché)",
                "Préparer les audits PMO internes et externes (ISO 21500, PMP)",
                "Mettre en place un dispositif de contrôle interne projets"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack PMO et simulation comité investissement",
            "bullets": [
                "Préparer une présentation exécutive sur l'état du portefeuille",
                "Simuler un comité d'investissement avec arbitrages budgétaires",
                "Validation par jury de Directeurs de Programmes et investisseurs"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p03-fondation",
    "pillarId": "p03",
    "pillarName": "Data, BI & Performance",
    "pillarIcon": "📈",
    "level": "Fondation",
    "title": "Data, BI & Performance — Fondation",
    "short": "Excel avancé, Power BI et bases de l'analyse de données pour créer des dashboards opérationnels avec IA de suggestions",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Excel avancé pour l'analyse de données",
            "bullets": [
                "Maîtriser les tableaux croisés dynamiques et graphiques avancés",
                "Utiliser les fonctions RECHERCHEV, INDEX/EQUIV, SI imbriqués",
                "Automatiser les tâches répétitives avec macros VBA et IA de suggestions"
            ]
        },
        {
            "id": "m2",
            "title": "Power BI: premiers dashboards",
            "bullets": [
                "Connecter Power BI à des sources multiples (Excel, SQL, API)",
                "Créer des visualisations interactives (cartes, KPI, slicers)",
                "Publier et partager votre premier dashboard avec l'équipe"
            ]
        },
        {
            "id": "m3",
            "title": "KPI et mesure de la performance",
            "bullets": [
                "Identifier les KPI pertinents pour votre métier (ventes, RH, finance)",
                "Construire un tableau de bord de performance opérationnel",
                "Interpréter les données et formuler des recommandations actionnables"
            ]
        },
        {
            "id": "m4",
            "title": "Projet fil rouge: dashboard de suivi métier",
            "bullets": [
                "Créer un dashboard complet pour un cas d'usage réel de votre entreprise",
                "Présenter vos insights devant un jury d'experts data",
                "Obtenir certification Data Analyst Opérationnel DigiSchool"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p03-maitrise",
    "pillarId": "p03",
    "pillarName": "Data, BI & Performance",
    "pillarIcon": "📈",
    "level": "Maîtrise",
    "title": "Data, BI & Performance — Maîtrise",
    "short": "Architecture BI, data warehouse, SQL avancé et analytics prédictifs avec Python et IA pour pilotage stratégique",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Architecture BI et data warehouse",
            "bullets": [
                "Concevoir une architecture BI moderne (ETL, data lake, data mart)",
                "Modéliser les données avec schéma en étoile et flocon de neige",
                "Automatiser les pipelines ETL avec Azure Data Factory et IA"
            ]
        },
        {
            "id": "m2",
            "title": "SQL avancé et optimisation de requêtes",
            "bullets": [
                "Écrire des requêtes SQL complexes (jointures, sous-requêtes, CTEs)",
                "Optimiser les performances avec indexation et partitionnement",
                "Gérer les données volumineuses (Big Data) avec Spark et IA"
            ]
        },
        {
            "id": "m3",
            "title": "Analytics prédictifs avec Python et IA",
            "bullets": [
                "Construire des modèles de prévision (régression, séries temporelles)",
                "Segmenter les clients avec clustering et IA non supervisée",
                "Déployer des modèles en production avec API et automatisation"
            ]
        },
        {
            "id": "m4",
            "title": "Data governance et qualité des données",
            "bullets": [
                "Mettre en place un dispositif de gouvernance des données (rôles, processus, outils)",
                "Mesurer et améliorer la qualité des données (complétude, cohérence, fraîcheur)",
                "Assurer la conformité RGPD et protection des données personnelles"
            ]
        },
        {
            "id": "m5",
            "title": "Données industrielles & monitoring temps réel",
            "bullets": [
                "Collecter et centraliser les données de capteurs industriels (température, vibration, pression)",
                "Construire des dashboards temps réel pour supervision opérationnelle 24/7",
                "Implémenter des alertes automatiques basées sur seuils et anomalies détectées par IA",
                "Intégrer les flux IoT dans votre data lake existant avec protocoles MQTT et OPC-UA",
                "Analyser les patterns de production pour détecter les goulots d'étranglement"
            ],
            "quiz": {
                "questions": [
                    "Quels sont les protocoles de communication IoT les plus utilisés en industrie ?",
                    "Comment détecter une anomalie sur une série temporelle de capteurs ?",
                    "Quelle architecture pour gérer 10 000 capteurs en temps réel ?",
                    "Comment calculer l'OEE (Overall Equipment Effectiveness) via IoT ?"
                ]
            },
            "deliverable": "Architecture de collecte IoT temps réel avec dashboard Power BI connecté et alertes configurées"
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p03-leadership",
    "pillarId": "p03",
    "pillarName": "Data, BI & Performance",
    "pillarIcon": "📈",
    "level": "Leadership",
    "title": "Data, BI & Performance — Leadership",
    "short": "Chief Data Officer: stratégie data, monétisation, IA générative et gouvernance data à l'échelle groupe",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie data et feuille de route CDO",
            "bullets": [
                "Élaborer la stratégie data alignée sur la stratégie d'entreprise",
                "Prioriser les use cases data à fort impact (revenue, coût, risque)",
                "Construire la roadmap data sur 3 ans avec jalons clés et IA de simulation"
            ]
        },
        {
            "id": "m2",
            "title": "Organisation data et operating model",
            "bullets": [
                "Designer l'organisation data optimale (centralisée, fédérée, hub & spoke)",
                "Définir les rôles clés (Data Engineers, Scientists, Analysts, Product Owners)",
                "Structurer les comités de gouvernance data (Data Council, COMEX Data)"
            ]
        },
        {
            "id": "m3",
            "title": "Monétisation de la data et création de valeur",
            "bullets": [
                "Identifier les opportunités de monétisation interne (efficacité opérationnelle, personnalisation)",
                "Explorer les modèles de monétisation externe (data as a service, marketplace)",
                "Mesurer le ROI des initiatives data avec business cases structurés"
            ]
        },
        {
            "id": "m4",
            "title": "IA générative et transformation data-driven",
            "bullets": [
                "Piloter l'adoption de l'IA générative (ChatGPT, Copilot) à l'échelle",
                "Mettre en place des use cases IA à forte valeur (customer service, R&D, marketing)",
                "Gérer les risques IA (biais, hallucinations, conformité) avec gouvernance"
            ]
        },
        {
            "id": "m5",
            "title": "Gouvernance data et conformité groupe",
            "bullets": [
                "Mettre en place la gouvernance data multi-entités (politiques, standards, KPI)",
                "Assurer la conformité réglementaire (RGPD, AI Act, sectorielles)",
                "Préparer les audits data et certifications (ISO 27001, SOC 2)"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CDO et simulation COMEX",
            "bullets": [
                "Préparer une présentation Board sur l'état de la transformation data",
                "Simuler un COMEX avec arbitrages budgétaires data et IA",
                "Validation par jury de CDO et investisseurs data"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p04-fondation",
    "pillarId": "p04",
    "pillarName": "Finance, Contrôle de Gestion & Investissement",
    "pillarIcon": "💰",
    "level": "Fondation",
    "title": "Finance, Contrôle de Gestion & Investissement — Fondation",
    "short": "Parcours fondation en finance, contrôle de gestion & investissement, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Lecture et interprétation des états financiers",
            "bullets": [
                "Lire un bilan comptable (actif, passif, capitaux propres)",
                "Analyser le compte de résultat (produits, charges, résultat net)",
                "Utiliser l'IA pour automatiser l'extraction de données financières PDF"
            ]
        },
        {
            "id": "m2",
            "title": "Ratios financiers et analyse de rentabilité",
            "bullets": [
                "Calculer les ratios clés (liquidité, solvabilité, rentabilité)",
                "Interpréter la santé financière d'une entreprise",
                "Benchmarker avec le secteur via bases de données IA"
            ]
        },
        {
            "id": "m3",
            "title": "Budget prévisionnel et suivi des écarts",
            "bullets": [
                "Construire un budget annuel par centre de coûts",
                "Suivre les écarts budget vs réalisé mensuellement",
                "Automatiser les alertes de dérive budgétaire avec IA"
            ]
        },
        {
            "id": "m4",
            "title": "Cas fil rouge: analyse financière PME",
            "bullets": [
                "Analyser les états financiers d'une PME réelle",
                "Formuler des recommandations financières actionnables",
                "Présenter votre analyse devant jury de contrôleurs de gestion"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p04-maitrise",
    "pillarId": "p04",
    "pillarName": "Finance, Contrôle de Gestion & Investissement",
    "pillarIcon": "💰",
    "level": "Maitrise",
    "title": "Finance, Contrôle de Gestion & Investissement — Maitrise",
    "short": "Parcours maitrise en finance, contrôle de gestion & investissement, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Contrôle de gestion et pilotage par les coûts",
            "bullets": [
                "Mettre en place une comptabilité analytique (coûts complets, ABC)",
                "Calculer le coût de revient et les marges par produit/service",
                "Automatiser le calcul des coûts avec ERP et IA"
            ]
        },
        {
            "id": "m2",
            "title": "Business plan et modélisation financière",
            "bullets": [
                "Construire un business plan complet (prévisionnel 3-5 ans)",
                "Modéliser différents scénarios (optimiste, réaliste, pessimiste)",
                "Utiliser Excel avancé et IA pour les projections financières"
            ]
        },
        {
            "id": "m3",
            "title": "Évaluation d'entreprise et investissements",
            "bullets": [
                "Maîtriser les méthodes de valorisation (DCF, multiples, actif net)",
                "Analyser la rentabilité d'un investissement (VAN, TRI, payback)",
                "Préparer un dossier d'investissement pour comité"
            ]
        },
        {
            "id": "m4",
            "title": "Reporting financier consolidé et normes IFRS",
            "bullets": [
                "Consolider les comptes de filiales multiples",
                "Appliquer les normes IFRS pour le reporting groupe",
                "Automatiser la consolidation avec logiciels et IA"
            ]
        },
        {
            "id": "m5",
            "title": "Capstone: plan financier stratégique",
            "bullets": [
                "Élaborer un plan financier 3 ans pour une entreprise réelle",
                "Présenter votre stratégie financière devant jury de DAF",
                "Obtenir certification Contrôleur de Gestion DigiSchool"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p04-leadership",
    "pillarId": "p04",
    "pillarName": "Finance, Contrôle de Gestion & Investissement",
    "pillarIcon": "💰",
    "level": "Leadership",
    "title": "Finance, Contrôle de Gestion & Investissement — Leadership",
    "short": "Parcours leadership en finance, contrôle de gestion & investissement, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie financière groupe et allocation du capital",
            "bullets": [
                "Définir la stratégie financière alignée sur la stratégie d'entreprise",
                "Optimiser l'allocation du capital entre BU/filiales",
                "Utiliser l'IA pour simuler des scénarios d'allocation"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance financière et contrôle interne",
            "bullets": [
                "Structurer la gouvernance financière (comités, délégations, procédures)",
                "Mettre en place un dispositif de contrôle interne robuste",
                "Préparer les audits financiers externes (CAC, IFRS)"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage de la trésorerie et financement groupe",
            "bullets": [
                "Optimiser la gestion de trésorerie centralisée (cash pooling)",
                "Négocier les financements (banques, marchés, investisseurs)",
                "Gérer les risques de change et de taux avec IA"
            ]
        },
        {
            "id": "m4",
            "title": "M&A et opérations de croissance externe",
            "bullets": [
                "Piloter une acquisition (due diligence financière, valorisation, négociation)",
                "Intégrer les entités acquises (PMI, synergies, consolidation)",
                "Gérer les aspects fiscaux et juridiques des M&A"
            ]
        },
        {
            "id": "m5",
            "title": "Relations investisseurs et communication financière",
            "bullets": [
                "Préparer les présentations investisseurs (roadshows, earnings calls)",
                "Communiquer la performance financière aux marchés",
                "Gérer la relation avec analystes et agences de notation"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack DAF et simulation comité d'investissement",
            "bullets": [
                "Préparer un board pack financier complet (résultats, prévisions, risques)",
                "Simuler un comité d'investissement avec arbitrages budgétaires",
                "Validation par jury de DAF et investisseurs"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p05-fondation",
    "pillarId": "p05",
    "pillarName": "Gouvernance, Risques & Conformité",
    "pillarIcon": "🛡️",
    "level": "Fondation",
    "title": "Gouvernance, Risques & Conformité — Fondation",
    "short": "Parcours fondation en gouvernance, risques & conformité, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Introduction à la gouvernance d'entreprise",
            "bullets": [
                "Comprendre les organes de gouvernance (CA, COMEX, CODIR)",
                "Identifier les rôles et responsabilités (DG, administrateurs, management)",
                "Cartographier la gouvernance de votre organisation avec IA"
            ]
        },
        {
            "id": "m2",
            "title": "Gestion des risques opérationnels",
            "bullets": [
                "Identifier les risques opérationnels de votre activité",
                "Évaluer l'impact et la probabilité des risques",
                "Mettre en place un registre des risques avec outils IA"
            ]
        },
        {
            "id": "m3",
            "title": "Conformité réglementaire de base",
            "bullets": [
                "Connaître les principales réglementations applicables (RGPD, AML, etc.)",
                "Mettre en œuvre les contrôles de conformité essentiels",
                "Utiliser l'IA pour surveiller la conformité en continu"
            ]
        },
        {
            "id": "m4",
            "title": "Cas pratique: audit de conformité",
            "bullets": [
                "Réaliser un audit de conformité sur un périmètre donné",
                "Identifier les écarts et formuler des recommandations",
                "Présenter votre rapport d'audit devant jury de risk managers"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p05-maitrise",
    "pillarId": "p05",
    "pillarName": "Gouvernance, Risques & Conformité",
    "pillarIcon": "🛡️",
    "level": "Maitrise",
    "title": "Gouvernance, Risques & Conformité — Maitrise",
    "short": "Parcours maitrise en gouvernance, risques & conformité, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Cartographie avancée des risques",
            "bullets": [
                "Construire une cartographie des risques complète (stratégiques, opérationnels, financiers)",
                "Quantifier les risques avec matrices probabilité × impact financier",
                "Automatiser la mise à jour de la cartographie avec IA"
            ]
        },
        {
            "id": "m2",
            "title": "Dispositif de contrôle interne et SOX",
            "bullets": [
                "Concevoir un dispositif de contrôle interne selon COSO/SOX",
                "Documenter les processus et contrôles clés",
                "Tester l'efficacité des contrôles avec approche par les risques"
            ]
        },
        {
            "id": "m3",
            "title": "Gestion de crise et continuité d'activité (PCA)",
            "bullets": [
                "Élaborer un plan de continuité d'activité (PCA/BCP)",
                "Identifier les activités critiques et scénarios de crise",
                "Tester le PCA avec simulations et retours d'expérience"
            ]
        },
        {
            "id": "m4",
            "title": "Conformité multi-réglementaire et veille",
            "bullets": [
                "Gérer la conformité dans un environnement multi-réglementaire",
                "Mettre en place une veille réglementaire automatisée (IA)",
                "Préparer les reportings réglementaires (ACPR, AMF, etc.)"
            ]
        },
        {
            "id": "m5",
            "title": "Capstone: programme GRC complet",
            "bullets": [
                "Concevoir un programme GRC (Governance, Risk, Compliance) end-to-end",
                "Présenter votre dispositif GRC devant jury de CISO/CRO",
                "Obtenir certification Risk Manager DigiSchool"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p05-leadership",
    "pillarId": "p05",
    "pillarName": "Gouvernance, Risques & Conformité",
    "pillarIcon": "🛡️",
    "level": "Leadership",
    "title": "Gouvernance, Risques & Conformité — Leadership",
    "short": "Parcours leadership en gouvernance, risques & conformité, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie risques et risk appetite",
            "bullets": [
                "Définir la stratégie risques alignée sur la stratégie d'entreprise",
                "Établir le risk appetite et les limites de tolérance",
                "Utiliser l'IA pour simuler des scénarios de risques extrêmes"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance des risques et « trois lignes de maîtrise »",
            "bullets": [
                "Structurer la gouvernance des risques (comité risques, CRO, risk owners)",
                "Implémenter le modèle des trois lignes de maîtrise (IIA)",
                "Définir les rôles et responsabilités en matière de risques"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage des risques stratégiques et ESG",
            "bullets": [
                "Identifier et gérer les risques stratégiques (M&A, transformation, géopolitique)",
                "Intégrer les risques ESG (environnementaux, sociaux, gouvernance)",
                "Construire le tableau de bord risques groupe avec KRI et IA"
            ]
        },
        {
            "id": "m4",
            "title": "Conformité groupe et programmes multi-pays",
            "bullets": [
                "Piloter la conformité à l'échelle groupe (multi-pays, multi-réglementations)",
                "Gérer les risques de non-conformité (sanctions, réputation, financiers)",
                "Préparer les audits et inspections réglementaires"
            ]
        },
        {
            "id": "m5",
            "title": "Culture risques et transformation GRC",
            "bullets": [
                "Développer une culture risques forte dans l'organisation",
                "Piloter la transformation du dispositif GRC (digital, IA, automatisation)",
                "Former les dirigeants et managers aux enjeux risques"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CRO et simulation comité des risques",
            "bullets": [
                "Préparer un board pack risques complet (cartographie, indicateurs, incidents)",
                "Simuler un comité des risques avec cas de crise",
                "Validation par jury de CRO et membres de CA"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "PREINSCRIPTION",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p06-fondation",
    "pillarId": "p06",
    "pillarName": "Transformation Digitale & Conduite du Changement",
    "pillarIcon": "🚀",
    "level": "Fondation",
    "title": "Transformation Digitale & Conduite du Changement — Fondation",
    "short": "Parcours fondation en transformation digitale & conduite du changement, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Diagnostic de maturité digitale",
            "bullets": [
                "Évaluer le niveau de maturité digitale de votre organisation",
                "Identifier les quick wins et opportunités de digitalisation",
                "Utiliser des outils d'assessment digitaux avec IA"
            ]
        },
        {
            "id": "m2",
            "title": "Outils digitaux et collaboration",
            "bullets": [
                "Maîtriser les outils de collaboration (Teams, Slack, Notion, etc.)",
                "Digitaliser les processus métier avec no-code/low-code",
                "Automatiser les tâches répétitives avec RPA et IA"
            ]
        },
        {
            "id": "m3",
            "title": "Conduite du changement pour équipes",
            "bullets": [
                "Comprendre les mécanismes de résistance au changement",
                "Accompagner son équipe dans une transformation digitale",
                "Utiliser la méthode ADKAR et outils de change management"
            ]
        },
        {
            "id": "m4",
            "title": "Industrie 4.0 & IoT: digitaliser les opérations",
            "bullets": [
                "Comprendre les capteurs IoT et leur intégration dans les processus industriels",
                "Concevoir un use-case IoT adapté à votre secteur (logistique, production, retail)",
                "Évaluer le ROI d'un projet de digitalisation industrielle",
                "Identifier les risques opérationnels et techniques de l'IoT"
            ],
            "quiz": {
                "questions": [
                    "Quels sont les 3 types de capteurs IoT les plus utilisés en industrie ?",
                    "Comment calculer le ROI d'un projet IoT sur 24 mois ?",
                    "Quelles sont les principales barrières à l'adoption de l'IoT en Afrique ?"
                ]
            },
            "deliverable": "IoT Use-Case Canvas (1 page) avec architecture capteurs + business case simplifié"
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p06-maitrise",
    "pillarId": "p06",
    "pillarName": "Transformation Digitale & Conduite du Changement",
    "pillarIcon": "🚀",
    "level": "Maitrise",
    "title": "Transformation Digitale & Conduite du Changement — Maitrise",
    "short": "Parcours maitrise en transformation digitale & conduite du changement, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie de transformation digitale",
            "bullets": [
                "Élaborer une stratégie de transformation digitale alignée sur le business",
                "Prioriser les chantiers digitaux (customer experience, opérations, data)",
                "Construire la roadmap de transformation sur 2-3 ans avec IA"
            ]
        },
        {
            "id": "m2",
            "title": "Architecture digitale et legacy modernization",
            "bullets": [
                "Moderniser le SI legacy (cloud, microservices, API)",
                "Choisir les technologies et partenaires (build vs buy)",
                "Gérer la dette technique et les dépendances avec IA"
            ]
        },
        {
            "id": "m3",
            "title": "Conduite du changement à grande échelle",
            "bullets": [
                "Piloter un programme de change management multi-sites",
                "Mobiliser les sponsors et champions du changement",
                "Mesurer l'adoption avec analytics et feedback automatisés (IA)"
            ]
        },
        {
            "id": "m4",
            "title": "Agilité et nouvelles méthodes de travail",
            "bullets": [
                "Déployer l'agilité à l'échelle (SAFe, LeSS, Spotify model)",
                "Former les équipes aux pratiques agiles (Scrum, Kanban)",
                "Transformer la culture organisationnelle vers l'expérimentation"
            ]
        },
        {
            "id": "m5",
            "title": "Smart Operations: IoT, IA & ROI industriel",
            "bullets": [
                "Piloter la maintenance prédictive avec capteurs IoT et machine learning",
                "Optimiser la supply chain via tracking temps réel et analytics avancés",
                "Construire un tableau de bord intégré IoT-ERP-BI pour décisions rapides",
                "Calculer le TCO et les gains opérationnels d'une infrastructure IoT",
                "Gérer les enjeux de cybersécurité des objets connectés en production"
            ],
            "quiz": {
                "questions": [
                    "Quelle est la différence entre maintenance préventive et prédictive IoT ?",
                    "Comment mesurer le ROI d'un projet IoT industriel sur 36 mois ?",
                    "Quels sont les 3 risques cyber majeurs dans une usine connectée ?",
                    "Comment intégrer les données IoT dans un ERP existant ?"
                ]
            },
            "deliverable": "Business Case IoT Industriel avec architecture système, roadmap déploiement et modèle financier 3 ans"
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "PREINSCRIPTION",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p06-leadership",
    "pillarId": "p06",
    "pillarName": "Transformation Digitale & Conduite du Changement",
    "pillarIcon": "🚀",
    "level": "Leadership",
    "title": "Transformation Digitale & Conduite du Changement — Leadership",
    "short": "Parcours leadership en transformation digitale & conduite du changement, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Vision digitale et ambition long-terme",
            "bullets": [
                "Définir la vision digitale inspirante sur 5-10 ans",
                "Aligner la transformation digitale sur la stratégie d'entreprise",
                "Utiliser l'IA pour explorer les disruptions et opportunités futures"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance de la transformation digitale",
            "bullets": [
                "Structurer la gouvernance de la transformation (CDO, comités, sponsors)",
                "Définir le modèle opérationnel cible (organisation, compétences, processus)",
                "Arbitrer les investissements digitaux avec ROI et impact stratégique"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage de programmes de transformation complexes",
            "bullets": [
                "Orchestrer des programmes multi-BU (CRM, ERP, data platform)",
                "Gérer les interdépendances et les risques programmes",
                "Piloter avec tableau de bord consolidé (budget, planning, bénéfices, IA)"
            ]
        },
        {
            "id": "m4",
            "title": "Culture digitale et transformation des talents",
            "bullets": [
                "Développer une culture digitale et data-driven",
                "Transformer les compétences (upskilling, reskilling, recrutement)",
                "Attirer et retenir les talents digitaux dans un marché tendu"
            ]
        },
        {
            "id": "m5",
            "title": "Innovation et écosystème digital",
            "bullets": [
                "Piloter l'innovation digitale (lab, POC, partenariats startups)",
                "Développer l'écosystème digital (partenaires, APIs, marketplace)",
                "Gérer le portefeuille d'innovations avec méthode stage-gate et IA"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CDO et simulation COMEX transformation",
            "bullets": [
                "Préparer un board pack transformation digitale (avancement, bénéfices, risques)",
                "Simuler un COMEX avec arbitrages sur investissements digitaux",
                "Validation par jury de CDO et membres de COMEX"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p07-fondation",
    "pillarId": "p07",
    "pillarName": "Cybersécurité & Résilience",
    "pillarIcon": "🔐",
    "level": "Fondation",
    "title": "Cybersécurité & Résilience — Fondation",
    "short": "Parcours fondation en cybersécurité & résilience, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Fondamentaux de la cybersécurité",
            "bullets": [
                "Comprendre les principales menaces cyber (phishing, ransomware, DDoS)",
                "Connaître les principes de sécurité (confidentialité, intégrité, disponibilité)",
                "Utiliser l'IA pour détecter les comportements suspects"
            ]
        },
        {
            "id": "m2",
            "title": "Hygiène numérique et sécurité du poste de travail",
            "bullets": [
                "Appliquer les bonnes pratiques de sécurité (mots de passe, MFA, mises à jour)",
                "Sécuriser son poste de travail et ses données personnelles",
                "Détecter et signaler les tentatives de phishing avec outils IA"
            ]
        },
        {
            "id": "m3",
            "title": "Protection des données et RGPD",
            "bullets": [
                "Comprendre les obligations RGPD (consentement, droits, DPO)",
                "Protéger les données personnelles dans votre activité",
                "Automatiser la gestion des demandes RGPD avec IA"
            ]
        },
        {
            "id": "m4",
            "title": "Cas pratique: réponse à incident cyber",
            "bullets": [
                "Simuler une réponse à un incident de sécurité (phishing, fuite de données)",
                "Appliquer le processus de gestion d'incident",
                "Présenter votre rapport d'incident devant jury de RSSI"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p07-maitrise",
    "pillarId": "p07",
    "pillarName": "Cybersécurité & Résilience",
    "pillarIcon": "🔐",
    "level": "Maitrise",
    "title": "Cybersécurité & Résilience — Maitrise",
    "short": "Parcours maitrise en cybersécurité & résilience, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Architecture de sécurité et défense en profondeur",
            "bullets": [
                "Concevoir une architecture de sécurité multi-couches (réseau, applicatif, data)",
                "Implémenter les contrôles de sécurité (firewall, IDS/IPS, SIEM)",
                "Automatiser la détection des menaces avec SOC et IA"
            ]
        },
        {
            "id": "m2",
            "title": "Gestion des vulnérabilités et pentesting",
            "bullets": [
                "Réaliser des scans de vulnérabilités réguliers",
                "Prioriser les correctifs avec scoring CVSS et IA",
                "Conduire des tests d'intrusion (pentest) sur infrastructure et applicatifs"
            ]
        },
        {
            "id": "m3",
            "title": "Gestion des identités et des accès (IAM)",
            "bullets": [
                "Mettre en place une solution IAM (SSO, MFA, provisioning)",
                "Gérer les droits d'accès avec principes du moindre privilège",
                "Automatiser les revues d'accès et certifications avec IA"
            ]
        },
        {
            "id": "m4",
            "title": "Réponse aux incidents et forensics",
            "bullets": [
                "Élaborer un plan de réponse aux incidents cyber (IRP)",
                "Conduire une investigation forensics (analyse logs, artefacts)",
                "Coordonner la réponse avec CERT et autorités compétentes"
            ]
        },
        {
            "id": "m5",
            "title": "Cybersécurité industrielle & risques IoT",
            "bullets": [
                "Identifier les vecteurs d'attaque spécifiques aux environnements IoT (firmware, protocoles, edge devices)",
                "Implémenter la segmentation réseau OT/IT et les zones de confiance (Purdue model)",
                "Déployer des solutions de détection d'anomalies pour équipements industriels connectés",
                "Sécuriser les mises à jour OTA (Over-The-Air) et gérer les vulnérabilités IoT à grande échelle",
                "Construire un registre de risques IoT et plans de mitigation par criticité métier"
            ],
            "quiz": {
                "questions": [
                    "Quelles sont les différences entre sécurité IT et sécurité OT/IoT ?",
                    "Comment sécuriser un réseau de 5000 capteurs industriels dispersés ?",
                    "Quels sont les frameworks de cybersécurité industrielle (IEC 62443, NIST) ?",
                    "Comment répondre à une cyberattaque ciblant des PLCs connectés ?"
                ]
            },
            "deliverable": "Risk Register IoT avec matrice de criticité, architecture sécurisée OT/IT et plan de réponse aux incidents IoT"
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p07-leadership",
    "pillarId": "p07",
    "pillarName": "Cybersécurité & Résilience",
    "pillarIcon": "🔐",
    "level": "Leadership",
    "title": "Cybersécurité & Résilience — Leadership",
    "short": "Parcours leadership en cybersécurité & résilience, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie cyber et cyber resilience",
            "bullets": [
                "Définir la stratégie cyber alignée sur la stratégie d'entreprise",
                "Établir le niveau de cyber resilience cible",
                "Utiliser l'IA pour simuler des scénarios de cyberattaques avancées"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance de la sécurité et SMSI (ISO 27001)",
            "bullets": [
                "Structurer la gouvernance de la sécurité (CISO, comité sécurité, risk owners)",
                "Mettre en place un SMSI selon ISO 27001",
                "Préparer la certification ISO 27001 avec audits internes"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage des risques cyber et cyber insurance",
            "bullets": [
                "Cartographier les risques cyber (APT, ransomware, supply chain)",
                "Quantifier les risques avec méthode FAIR et IA",
                "Négocier les cyber assurances et gérer les sinistres"
            ]
        },
        {
            "id": "m4",
            "title": "Conformité cyber multi-réglementaire",
            "bullets": [
                "Gérer la conformité NIS2, DORA, GDPR à l'échelle groupe",
                "Préparer les audits et inspections des régulateurs (ANSSI, CNIL)",
                "Automatiser le reporting réglementaire cyber avec IA"
            ]
        },
        {
            "id": "m5",
            "title": "Gestion de crise cyber et communication",
            "bullets": [
                "Piloter une crise cyber majeure (ransomware, data breach)",
                "Coordonner la réponse avec équipes internes, CERT, autorités, assureurs",
                "Gérer la communication de crise (interne, clients, médias, régulateurs)"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CISO et simulation comité cyber",
            "bullets": [
                "Préparer un board pack cyber (posture, incidents, conformité, investissements)",
                "Simuler un comité cyber avec cas de cyberattaque",
                "Validation par jury de CISO et membres de CA"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p08-fondation",
    "pillarId": "p08",
    "pillarName": "IT Service Management (ITIL4) & Architecture SI",
    "pillarIcon": "⚙️",
    "level": "Fondation",
    "title": "IT Service Management (ITIL4) & Architecture SI — Fondation",
    "short": "Parcours fondation en it service management (itil4) & architecture si, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Introduction à ITIL 4 et gestion des services IT",
            "bullets": [
                "Comprendre les concepts clés d'ITIL 4 (valeur, services, chaîne de valeur)",
                "Identifier les pratiques ITIL essentielles (incident, change, service desk)",
                "Utiliser l'IA pour automatiser le ticketing et la classification"
            ]
        },
        {
            "id": "m2",
            "title": "Service desk et gestion des incidents",
            "bullets": [
                "Gérer un service desk efficace (accueil, triage, escalade)",
                "Résoudre les incidents IT selon les SLA",
                "Automatiser les incidents récurrents avec IA et scripts"
            ]
        },
        {
            "id": "m3",
            "title": "Gestion des changements et releases",
            "bullets": [
                "Planifier et approuver les changements IT (RFC, CAB)",
                "Gérer les releases applicatives et infrastructure",
                "Utiliser l'IA pour prédire les impacts et risques des changements"
            ]
        },
        {
            "id": "m4",
            "title": "Cas pratique: amélioration d'un service IT",
            "bullets": [
                "Analyser un service IT existant et identifier les améliorations",
                "Proposer un plan d'amélioration ITIL",
                "Présenter votre plan devant jury de IT Service Managers"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p08-maitrise",
    "pillarId": "p08",
    "pillarName": "IT Service Management (ITIL4) & Architecture SI",
    "pillarIcon": "⚙️",
    "level": "Maitrise",
    "title": "IT Service Management (ITIL4) & Architecture SI — Maitrise",
    "short": "Parcours maitrise en it service management (itil4) & architecture si, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Architecture SI et urbanisation",
            "bullets": [
                "Concevoir une architecture SI d'entreprise (cartographie, patterns)",
                "Urbaniser le SI avec principes SOA et microservices",
                "Automatiser la documentation d'architecture avec IA"
            ]
        },
        {
            "id": "m2",
            "title": "Gestion du catalogue de services et SLA",
            "bullets": [
                "Construire le catalogue de services IT complet",
                "Négocier et gérer les SLA avec les métiers",
                "Mesurer la performance des services avec dashboards et IA"
            ]
        },
        {
            "id": "m3",
            "title": "ITSM avancé et intégration d'outils",
            "bullets": [
                "Mettre en place une plateforme ITSM (ServiceNow, BMC, etc.)",
                "Intégrer les outils IT (monitoring, ticketing, CMDB, IA)",
                "Automatiser les workflows ITIL avec orchestration"
            ]
        },
        {
            "id": "m4",
            "title": "DevOps et amélioration continue",
            "bullets": [
                "Implémenter les pratiques DevOps (CI/CD, infrastructure as code)",
                "Mesurer et améliorer le MTTR et la disponibilité",
                "Piloter l'amélioration continue des services IT (CSI)"
            ]
        },
        {
            "id": "m5",
            "title": "Gouvernance IoT & intégration SI (ERP/MES/BI)",
            "bullets": [
                "Définir les standards de gouvernance pour déploiements IoT à l'échelle groupe",
                "Architecturer l'intégration bidirectionnelle IoT-ERP-MES-BI sans rupture de flux",
                "Gérer le cycle de vie des devices connectés (provisioning, MAJ firmware, décommissionnement)",
                "Assurer la traçabilité et l'audit des données IoT pour conformité réglementaire",
                "Mettre en place une CMDB enrichie incluant les actifs IoT et leurs dépendances"
            ],
            "quiz": {
                "questions": [
                    "Quelles sont les couches d'une architecture IoT industrielle (Edge, Fog, Cloud) ?",
                    "Comment synchroniser les données IoT avec un ERP SAP ou Microsoft Dynamics ?",
                    "Quels sont les enjeux de gouvernance spécifiques aux objets connectés en entreprise ?",
                    "Comment auditer la conformité d'un parc IoT selon ISO 27001 ?"
                ]
            },
            "deliverable": "Framework de gouvernance IoT avec matrice de décision, architecture d'intégration SI et registre CMDB IoT"
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "PREINSCRIPTION",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p08-leadership",
    "pillarId": "p08",
    "pillarName": "IT Service Management (ITIL4) & Architecture SI",
    "pillarIcon": "⚙️",
    "level": "Leadership",
    "title": "IT Service Management (ITIL4) & Architecture SI — Leadership",
    "short": "Parcours leadership en it service management (itil4) & architecture si, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie SI et schéma directeur",
            "bullets": [
                "Élaborer la stratégie SI alignée sur la stratégie d'entreprise",
                "Construire le schéma directeur SI sur 3-5 ans",
                "Utiliser l'IA pour simuler les scénarios d'évolution du SI"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance IT et operating model",
            "bullets": [
                "Structurer la gouvernance IT (CIO, comités, processus)",
                "Définir le modèle opérationnel IT (insourcing, outsourcing, cloud)",
                "Mettre en place le cadre de décision IT (COBIT, Val IT)"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage de la performance IT et FinOps",
            "bullets": [
                "Construire le tableau de bord IT (KPI techniques, SLA, coûts)",
                "Optimiser les coûts IT avec FinOps et IA",
                "Mesurer la contribution IT à la création de valeur business"
            ]
        },
        {
            "id": "m4",
            "title": "Architecture d'entreprise (TOGAF)",
            "bullets": [
                "Mettre en place une démarche d'architecture d'entreprise (TOGAF)",
                "Gérer le portefeuille de projets IT et la dette technique",
                "Piloter la transformation d'architecture avec ADM et IA"
            ]
        },
        {
            "id": "m5",
            "title": "Sourcing IT et gestion des partenaires",
            "bullets": [
                "Définir la stratégie de sourcing IT (make vs buy, cloud, offshore)",
                "Gérer les partenaires et prestataires IT (contrats, SLA, performance)",
                "Négocier avec les grands éditeurs et cloud providers"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CIO et simulation COMEX IT",
            "bullets": [
                "Préparer un board pack IT (projets, performance, coûts, risques)",
                "Simuler un COMEX avec arbitrages budgétaires IT",
                "Validation par jury de CIO et membres de COMEX"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p09-fondation",
    "pillarId": "p09",
    "pillarName": "Supply Chain, Achats & Traçabilité",
    "pillarIcon": "🔗",
    "level": "Fondation",
    "title": "Supply Chain, Achats & Traçabilité — Fondation",
    "short": "Parcours fondation en supply chain, achats & traçabilité, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Fondamentaux de la supply chain",
            "bullets": [
                "Comprendre la chaîne logistique end-to-end (approvisionnement, production, distribution)",
                "Identifier les flux physiques, d'information et financiers",
                "Utiliser l'IA pour visualiser et optimiser la supply chain"
            ]
        },
        {
            "id": "m2",
            "title": "Gestion des stocks et approvisionnements",
            "bullets": [
                "Calculer les niveaux de stock optimaux (point de commande, stock de sécurité)",
                "Gérer les approvisionnements avec méthode Kanban et MRP",
                "Automatiser les commandes avec IA et prévisions de demande"
            ]
        },
        {
            "id": "m3",
            "title": "Achats et gestion fournisseurs",
            "bullets": [
                "Conduire un processus achats complet (sourcing, RFQ, négociation)",
                "Évaluer et sélectionner les fournisseurs avec critères ESG",
                "Automatiser le procurement avec outils e-procurement et IA"
            ]
        },
        {
            "id": "m4",
            "title": "Cas pratique: optimisation logistique",
            "bullets": [
                "Optimiser un flux logistique (transport, entreposage, livraison)",
                "Proposer des améliorations opérationnelles mesurables",
                "Présenter votre plan devant jury de supply chain managers"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p09-maitrise",
    "pillarId": "p09",
    "pillarName": "Supply Chain, Achats & Traçabilité",
    "pillarIcon": "🔗",
    "level": "Maitrise",
    "title": "Supply Chain, Achats & Traçabilité — Maitrise",
    "short": "Parcours maitrise en supply chain, achats & traçabilité, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Planification avancée (S&OP)",
            "bullets": [
                "Mettre en place un processus S&OP (Sales & Operations Planning)",
                "Aligner prévisions commerciales et capacités opérationnelles",
                "Automatiser le S&OP avec IA et analytics prédictifs"
            ]
        },
        {
            "id": "m2",
            "title": "Gestion des risques supply chain",
            "bullets": [
                "Cartographier les risques supply chain (fournisseurs, transport, géopolitique)",
                "Mettre en place des plans de mitigation et de continuité",
                "Utiliser l'IA pour anticiper les disruptions supply chain"
            ]
        },
        {
            "id": "m3",
            "title": "Traçabilité et blockchain",
            "bullets": [
                "Implémenter la traçabilité end-to-end avec IoT et blockchain",
                "Garantir la conformité et la qualité des produits",
                "Lutter contre la contrefaçon avec solutions de traçabilité IA"
            ]
        },
        {
            "id": "m4",
            "title": "Supply chain durable et RSE",
            "bullets": [
                "Mesurer l'empreinte carbone de la supply chain",
                "Optimiser les transports et réduire les émissions CO2",
                "Piloter une supply chain responsable (sourcing éthique, économie circulaire)"
            ]
        },
        {
            "id": "m5",
            "title": "Capstone: refonte supply chain",
            "bullets": [
                "Concevoir une nouvelle organisation supply chain (réseau, processus, outils)",
                "Présenter votre business case devant jury de supply chain directors",
                "Obtenir certification Supply Chain Manager DigiSchool"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "PREINSCRIPTION",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p09-leadership",
    "pillarId": "p09",
    "pillarName": "Supply Chain, Achats & Traçabilité",
    "pillarIcon": "🔗",
    "level": "Leadership",
    "title": "Supply Chain, Achats & Traçabilité — Leadership",
    "short": "Parcours leadership en supply chain, achats & traçabilité, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie supply chain et network design",
            "bullets": [
                "Élaborer la stratégie supply chain alignée sur la stratégie commerciale",
                "Optimiser le réseau logistique (usines, entrepôts, flux) avec IA",
                "Arbitrer les trade-offs coût / service / agilité"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance supply chain et S&OE",
            "bullets": [
                "Structurer la gouvernance supply chain (CPO, comités, processus)",
                "Mettre en place le S&OE (Sales & Operations Execution)",
                "Piloter la performance supply chain avec KPI consolidés"
            ]
        },
        {
            "id": "m3",
            "title": "Transformation digitale de la supply chain",
            "bullets": [
                "Digitaliser la supply chain (TMS, WMS, control tower, IA)",
                "Implémenter la supply chain 4.0 (IoT, jumeaux numériques, blockchain)",
                "Piloter les projets de transformation supply chain"
            ]
        },
        {
            "id": "m4",
            "title": "Achats stratégiques et category management",
            "bullets": [
                "Élaborer la stratégie achats groupe (sourcing, catégories, fournisseurs)",
                "Négocier les contrats stratégiques avec fournisseurs clés",
                "Mesurer la performance achats (savings, risques, innovation)"
            ]
        },
        {
            "id": "m5",
            "title": "Supply chain finance et working capital",
            "bullets": [
                "Optimiser le BFR (besoin en fonds de roulement) supply chain",
                "Mettre en place des solutions de supply chain finance",
                "Négocier les conditions de paiement et financement fournisseurs"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CPO et simulation comité supply chain",
            "bullets": [
                "Préparer un board pack supply chain (performance, projets, risques, coûts)",
                "Simuler un comité supply chain avec arbitrages stratégiques",
                "Validation par jury de CPO et membres de COMEX"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p10-fondation",
    "pillarId": "p10",
    "pillarName": "Marketing, Commercial & Growth + Culture Entrepreneuriale",
    "pillarIcon": "💡",
    "level": "Fondation",
    "title": "Marketing, Commercial & Growth + Culture Entrepreneuriale — Fondation",
    "short": "Parcours fondation en marketing, commercial & growth + culture entrepreneuriale, avec IA embarquée et approche par compétences (APC)",
    "audience": "Junior/Analyste",
    "durationDays": 5,
    "modules": [
        {
            "id": "m1",
            "title": "Fondamentaux du marketing digital",
            "bullets": [
                "Comprendre les leviers du marketing digital (SEO, SEA, social, content)",
                "Construire un persona client avec data et IA",
                "Mesurer les performances marketing avec Google Analytics et IA"
            ]
        },
        {
            "id": "m2",
            "title": "Social media et community management",
            "bullets": [
                "Gérer les réseaux sociaux (LinkedIn, Twitter, Instagram, Facebook)",
                "Créer du contenu engageant et viraliser avec IA",
                "Animer une communauté et gérer les interactions"
            ]
        },
        {
            "id": "m3",
            "title": "Prospection commerciale et CRM",
            "bullets": [
                "Prospecter efficacement avec outils CRM (Salesforce, HubSpot)",
                "Qualifier les leads et gérer le pipeline commercial",
                "Automatiser la prospection avec IA et email marketing"
            ]
        },
        {
            "id": "m4",
            "title": "Cas pratique: campagne marketing digitale",
            "bullets": [
                "Concevoir et lancer une campagne marketing complète",
                "Mesurer les résultats et calculer le ROI",
                "Présenter votre campagne devant jury de growth marketers"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 214376,
        "modules_count": 4,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p10-maitrise",
    "pillarId": "p10",
    "pillarName": "Marketing, Commercial & Growth + Culture Entrepreneuriale",
    "pillarIcon": "💡",
    "level": "Maitrise",
    "title": "Marketing, Commercial & Growth + Culture Entrepreneuriale — Maitrise",
    "short": "Parcours maitrise en marketing, commercial & growth + culture entrepreneuriale, avec IA embarquée et approche par compétences (APC)",
    "audience": "Manager/Expert",
    "durationDays": 8,
    "modules": [
        {
            "id": "m1",
            "title": "Stratégie marketing et growth hacking",
            "bullets": [
                "Élaborer une stratégie marketing alignée sur les objectifs business",
                "Appliquer les techniques de growth hacking (viral loops, AARRR)",
                "Utiliser l'IA pour identifier les leviers de croissance"
            ]
        },
        {
            "id": "m2",
            "title": "Marketing automation et lead nurturing",
            "bullets": [
                "Mettre en place une plateforme de marketing automation",
                "Créer des parcours de nurturing personnalisés",
                "Scorer les leads et automatiser le passage aux ventes avec IA"
            ]
        },
        {
            "id": "m3",
            "title": "Data-driven marketing et analytics",
            "bullets": [
                "Construire des dashboards marketing avec Google Analytics et BI",
                "Mesurer le ROI par canal et optimiser le mix marketing",
                "Utiliser l'IA pour la segmentation et la personnalisation"
            ]
        },
        {
            "id": "m4",
            "title": "Performance commerciale et sales enablement",
            "bullets": [
                "Aligner marketing et ventes avec SLA et processus communs",
                "Équiper les commerciaux avec contenus et outils adaptés",
                "Mesurer la contribution marketing au pipeline et au chiffre d'affaires"
            ]
        },
        {
            "id": "m5",
            "title": "Capstone: stratégie go-to-market",
            "bullets": [
                "Élaborer une stratégie go-to-market complète (positionnement, canaux, pricing)",
                "Présenter votre plan devant jury de CMO et investisseurs",
                "Obtenir certification Growth Marketing Manager DigiSchool"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 267970,
        "modules_count": 5,
        "module_fcfa": 69672
    },
    "status": "OUVERT",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
},
{
    "id": "p10-leadership",
    "pillarId": "p10",
    "pillarName": "Marketing, Commercial & Growth + Culture Entrepreneuriale",
    "pillarIcon": "💡",
    "level": "Leadership",
    "title": "Marketing, Commercial & Growth + Culture Entrepreneuriale — Leadership",
    "short": "Parcours leadership en marketing, commercial & growth + culture entrepreneuriale, avec IA embarquée et approche par compétences (APC)",
    "audience": "DG/Directeur",
    "durationDays": 10,
    "modules": [
        {
            "id": "m1",
            "title": "Vision marketing et brand strategy",
            "bullets": [
                "Définir la vision de marque et le positionnement long-terme",
                "Élaborer la stratégie de marque groupe et par segment",
                "Utiliser l'IA pour mesurer le brand equity et la perception"
            ]
        },
        {
            "id": "m2",
            "title": "Gouvernance marketing et operating model",
            "bullets": [
                "Structurer l'organisation marketing (CMO, product marketing, growth)",
                "Définir le modèle opérationnel marketing (centralisé, décentralisé, hub & spoke)",
                "Mettre en place la gouvernance marketing (comités, budget, processus)"
            ]
        },
        {
            "id": "m3",
            "title": "Pilotage de la performance marketing et ROI",
            "bullets": [
                "Construire le tableau de bord marketing consolidé (awareness, leads, pipeline, CAC, LTV)",
                "Optimiser l'allocation budgétaire par canal avec IA",
                "Démontrer la contribution du marketing à la croissance et à la valeur"
            ]
        },
        {
            "id": "m4",
            "title": "Transformation marketing et MarTech",
            "bullets": [
                "Digitaliser le marketing avec stack MarTech intégré (CRM, automation, analytics, IA)",
                "Piloter la transformation vers le data-driven marketing",
                "Développer les compétences marketing (data, digital, IA)"
            ]
        },
        {
            "id": "m5",
            "title": "Culture entrepreneuriale et innovation business",
            "bullets": [
                "Développer une culture entrepreneuriale dans l'organisation",
                "Piloter l'innovation business (nouveaux produits, modèles, marchés)",
                "Gérer le portefeuille d'innovations avec méthode lean startup et IA"
            ]
        },
        {
            "id": "m6",
            "title": "Board pack CMO et simulation comité marketing",
            "bullets": [
                "Préparer un board pack marketing (brand, pipeline, ROI, projets)",
                "Simuler un comité marketing avec arbitrages budgétaires",
                "Validation par jury de CMO et membres de COMEX"
            ]
        }
    ],
    "pricing": {
        "pack_fcfa": 321564,
        "modules_count": 6,
        "module_fcfa": 69672
    },
    "status": "V2",
    "tags": [
        "IA embarquée",
        "APC",
        "Day-1 Operational"
    ]
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
