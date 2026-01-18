/**
 * DigiSchool Africa - Courses Data V1.1 PREMIUM (Single Source of Truth)
 * Used by BOTH B2B (companies.html) and B2C (b2c.html)
 * Version: 1.1.0 - With custom icons and exactly 9 courses
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
      icon: '/assets/course-icons/leadership.svg',
      title: 'Leadership & Management',
      subtitle: 'Transformez votre équipe avec un leadership augmenté par l\'IA',
      duration_days: 5,
      target_audience: ['Managers', 'Chefs d\'équipe', 'Cadres', 'Directeurs'],
      short_description: 'Leadership transformationnel, management d\'équipes hybrides, gestion des conflits et culture d\'entreprise avec outils IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Leadership Transformationnel & Vision',
          level: 'Intermédiaire',
          outcomes: [
            'Définir et communiquer une vision inspirante',
            'Aligner les équipes sur les objectifs stratégiques',
            'Développer votre style de leadership authentique'
          ]
        },
        {
          name: 'Management d\'Équipes Hybrides & à Distance',
          level: 'Intermédiaire',
          outcomes: [
            'Piloter des équipes distribuées efficacement',
            'Maintenir l\'engagement et la cohésion',
            'Utiliser les outils collaboratifs IA (Slack, Teams, Notion)'
          ]
        },
        {
          name: 'Gestion des Conflits & Communication',
          level: 'Senior',
          outcomes: [
            'Détecter et résoudre les conflits rapidement',
            'Communication assertive et feedback constructif',
            'Médiation IA et outils de communication avancés'
          ]
        },
        {
          name: 'Culture d\'Entreprise & Engagement',
          level: 'Senior',
          outcomes: [
            'Cultiver une culture d\'innovation et d\'excellence',
            'Diagnostics culturels avec IA',
            'Programmes de reconnaissance et engagement'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Fondamentaux du Leadership & Diagnostic',
          topics: [
            'Styles de leadership (transformation, situationnel, servant)',
            'Vision stratégique et OKRs avec IA',
            'Auto-diagnostic leadership (MBTI, DISC, Forces)',
            'Étude de cas : leaders africains innovants'
          ]
        },
        {
          day: 2,
          theme: 'Management d\'Équipes Hybrides',
          topics: [
            'Pilotage d\'équipes distribuées',
            'Outils collaboratifs IA (Slack, Teams, Notion)',
            'Maintenir cohésion et productivité',
            'Pratique : simulation de réunion d\'équipe hybride'
          ]
        },
        {
          day: 3,
          theme: 'Communication & Gestion des Conflits',
          topics: [
            'Communication assertive et feedback constructif',
            'Techniques de médiation et résolution de conflits',
            'Outils IA pour améliorer la communication',
            'Jeux de rôle : situations de conflit'
          ]
        },
        {
          day: 4,
          theme: 'Culture d\'Entreprise & Engagement',
          topics: [
            'Cultiver une culture d\'innovation',
            'Diagnostics culturels avec IA',
            'Programmes de reconnaissance',
            'Projet final : plan d\'action leadership'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude', use: 'Coaching leadership, préparation de réunions' },
        { name: 'Grammarly / LanguageTool', use: 'Communication écrite professionnelle' },
        { name: 'Crystal / Humantic AI', use: 'Profils personnalité et adaptation communication' },
        { name: 'Notion AI / Coda', use: 'Documentation stratégique et OKRs' }
      ],
      
      prerequisites: 'Expérience managériale de 2+ ans recommandée',
      deliverables: [
        'Plan d\'action leadership personnalisé',
        'Tableau de bord OKRs avec IA',
        'Kit de communication d\'équipe',
        'Stratégie de résolution de conflits'
      ]
    },

    // 2. Excel Avancé & Analyse de Données (4 days)
    {
      id: 'excel-avance',
      slug: 'excel-avance',
      icon: '/assets/course-icons/excel.svg',
      title: 'Excel Avancé & Analyse de Données',
      subtitle: 'Maîtrisez l\'analyse de données avec Excel augmenté par l\'IA',
      duration_days: 4,
      target_audience: ['Analystes', 'Contrôleurs de gestion', 'Responsables financiers', 'Data analysts'],
      short_description: 'Formules avancées, tableaux croisés dynamiques, Power Query, Power Pivot et visualisations avec IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Formules Avancées & Fonctions Complexes',
          level: 'Intermédiaire',
          outcomes: [
            'Maîtriser INDEX, EQUIV, DECALER, SI.CONDITIONS',
            'Créer des formules matricielles',
            'Utiliser ChatGPT pour générer des formules'
          ]
        },
        {
          name: 'Tableaux Croisés Dynamiques & Power Query',
          level: 'Intermédiaire',
          outcomes: [
            'Créer des TCD complexes multi-sources',
            'Automatiser l\'import et transformation de données',
            'Combiner et nettoyer des datasets'
          ]
        },
        {
          name: 'Power Pivot & Modélisation de Données',
          level: 'Senior',
          outcomes: [
            'Créer des modèles de données relationnels',
            'Utiliser DAX pour analyses avancées',
            'Construire des KPIs métiers'
          ]
        },
        {
          name: 'Visualisations & Dashboards Professionnels',
          level: 'Senior',
          outcomes: [
            'Créer des dashboards interactifs',
            'Choisir les bons graphiques selon le message',
            'Automatiser les rapports avec macros VBA'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Formules Avancées',
          topics: [
            'INDEX, EQUIV, DECALER, INDIRECT',
            'Formules matricielles (SOMMEPROD, FILTRE)',
            'ChatGPT pour générer des formules complexes',
            'Pratique : tableau de bord de suivi de ventes'
          ]
        },
        {
          day: 2,
          theme: 'Tableaux Croisés Dynamiques & Power Query',
          topics: [
            'TCD multi-sources et segments',
            'Power Query : import et transformation',
            'Combiner des données (Merger, Append)',
            'Cas pratique : consolidation multi-feuilles'
          ]
        },
        {
          day: 3,
          theme: 'Power Pivot & DAX',
          topics: [
            'Modèle de données relationnel',
            'Mesures DAX (SUM, CALCULATE, FILTER)',
            'Time Intelligence (YTD, QoQ, MoM)',
            'Projet : modèle financier avec KPIs'
          ]
        },
        {
          day: 4,
          theme: 'Dashboards & Automatisation',
          topics: [
            'Design de dashboards professionnels',
            'Graphiques avancés (Waterfall, Gantt, Sparklines)',
            'Introduction VBA et automatisation',
            'Projet final : dashboard exécutif interactif'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude', use: 'Génération de formules Excel et macros VBA' },
        { name: 'Excel Labs (Microsoft)', use: 'Fonctions IA natives (LABS.GENERATIVEAI)' },
        { name: 'Coefficient / Hex', use: 'Dashboards collaboratifs augmentés par IA' },
        { name: 'Julius AI', use: 'Analyse de données et visualisations automatiques' }
      ],
      
      prerequisites: 'Connaissance de base d\'Excel (formules simples, graphiques)',
      deliverables: [
        'Dashboard financier interactif',
        'Modèle de données Power Pivot',
        'Bibliothèque de formules avancées',
        'Guide de bonnes pratiques Excel + IA'
          ]
    },

    // 3. Marketing Digital & Growth Hacking (5 days)
    {
      id: 'marketing-digital',
      slug: 'marketing-digital',
      icon: '/assets/course-icons/marketing.svg',
      title: 'Marketing Digital & Growth Hacking',
      subtitle: 'Pilotez votre croissance avec le marketing augmenté par l\'IA',
      duration_days: 5,
      target_audience: ['Marketeurs', 'Growth hackers', 'Entrepreneurs', 'Responsables communication'],
      short_description: 'Stratégie digitale, SEO/SEA, social media, content marketing, analytics et automatisation avec IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Stratégie Marketing Digital',
          level: 'Junior',
          outcomes: [
            'Définir une stratégie digitale alignée aux objectifs business',
            'Construire un plan marketing omnicanal',
            'Utiliser IA pour l\'étude de marché et positionnement'
          ]
        },
        {
          name: 'SEO, SEA & Content Marketing',
          level: 'Intermédiaire',
          outcomes: [
            'Optimiser le référencement naturel (SEO)',
            'Lancer des campagnes Google Ads rentables',
            'Produire du contenu engageant avec IA (ChatGPT, Jasper)'
          ]
        },
        {
          name: 'Social Media & Community Management',
          level: 'Intermédiaire',
          outcomes: [
            'Piloter les réseaux sociaux (Facebook, LinkedIn, Instagram, TikTok)',
            'Créer du contenu viral et engageant',
            'Automatiser la publication et l\'analyse'
          ]
        },
        {
          name: 'Analytics, A/B Testing & Optimisation',
          level: 'Senior',
          outcomes: [
            'Analyser les performances avec Google Analytics 4',
            'Mener des tests A/B pour optimiser les conversions',
            'Construire des dashboards marketing avec IA'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Stratégie Marketing Digital',
          topics: [
            'Audit digital et positionnement',
            'Personas et customer journey mapping',
            'Plan marketing omnicanal',
            'Étude de cas : startups africaines à forte croissance'
          ]
        },
        {
          day: 2,
          theme: 'SEO & Content Marketing',
          topics: [
            'Optimisation on-page et technique SEO',
            'Recherche de mots-clés avec IA (Semrush, Ahrefs)',
            'Production de contenu avec ChatGPT/Jasper',
            'Pratique : optimiser un site web pour le SEO'
          ]
        },
        {
          day: 3,
          theme: 'SEA & Publicité Digitale',
          topics: [
            'Google Ads : Search, Display, Shopping',
            'Facebook Ads & Instagram Ads',
            'Optimisation des campagnes avec IA',
            'Cas pratique : lancement de campagne'
          ]
        },
        {
          day: 4,
          theme: 'Social Media & Community Management',
          topics: [
            'Stratégie de contenu social media',
            'Création de visuels avec Canva/Midjourney',
            'Automatisation (Buffer, Hootsuite)',
            'Engagement et gestion de communauté'
          ]
        },
        {
          day: 5,
          theme: 'Analytics & Optimisation',
          topics: [
            'Google Analytics 4 : configuration et analyse',
            'A/B testing et CRO (Conversion Rate Optimization)',
            'Dashboards marketing avec Looker Studio',
            'Projet final : plan de croissance complet'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Jasper / Copy.ai', use: 'Production de contenu marketing' },
        { name: 'Midjourney / DALL-E / Canva AI', use: 'Création de visuels et assets' },
        { name: 'Semrush / Ahrefs', use: 'SEO, recherche de mots-clés, analyse concurrence' },
        { name: 'HubSpot / Marketo', use: 'Marketing automation et nurturing' }
      ],
      
      prerequisites: 'Connaissance de base du marketing digital recommandée',
      deliverables: [
        'Plan marketing omnicanal',
        'Calendrier éditorial + 20 contenus',
        'Dashboard analytics GA4 + Looker Studio',
        'Guide de croissance rapide'
      ]
    },

    // 4. Vente B2B & Négociation (4 days)
    {
      id: 'vente-b2b',
      slug: 'vente-b2b',
      icon: '/assets/course-icons/vente.svg',
      title: 'Vente B2B & Négociation',
      subtitle: 'Vendez plus et mieux avec des techniques augmentées par l\'IA',
      duration_days: 4,
      target_audience: ['Commerciaux', 'Business developers', 'Account managers', 'Entrepreneurs'],
      short_description: 'Prospection, qualification, pitch de vente, négociation, closing et CRM avec IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Prospection & Lead Generation',
          level: 'Junior',
          outcomes: [
            'Identifier et qualifier les prospects',
            'Utiliser LinkedIn Sales Navigator et IA',
            'Construire un pipeline de ventes robuste'
          ]
        },
        {
          name: 'Pitch de Vente & Présentation',
          level: 'Intermédiaire',
          outcomes: [
            'Structurer un pitch percutant (SPIN, BANT, Sandler)',
            'Adapter le discours selon la personnalité client',
            'Utiliser ChatGPT pour préparer les rendez-vous'
          ]
        },
        {
          name: 'Négociation & Closing',
          level: 'Senior',
          outcomes: [
            'Techniques de négociation avancées',
            'Gérer les objections avec assertivité',
            'Conclure la vente avec confiance'
          ]
        },
        {
          name: 'CRM & Suivi Client',
          level: 'Intermédiaire',
          outcomes: [
            'Maîtriser les CRM (Salesforce, HubSpot, Pipedrive)',
            'Automatiser le suivi avec IA',
            'Analyser les performances commerciales'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Prospection & Qualification',
          topics: [
            'Stratégies de prospection B2B',
            'LinkedIn Sales Navigator + IA (Lusha, Apollo)',
            'Qualification BANT et MEDDIC',
            'Pratique : construire un fichier de prospects'
          ]
        },
        {
          day: 2,
          theme: 'Pitch de Vente',
          topics: [
            'Méthodes SPIN, Sandler, Challenger Sale',
            'Adapter le pitch selon la personnalité (DISC)',
            'ChatGPT pour préparer les rendez-vous',
            'Jeux de rôle : pitchs en situation réelle'
          ]
        },
        {
          day: 3,
          theme: 'Négociation & Objections',
          topics: [
            'Techniques de négociation (Harvard, win-win)',
            'Gestion des objections courantes',
            'Psychologie de la persuasion (Cialdini)',
            'Simulations de négociation'
          ]
        },
        {
          day: 4,
          theme: 'CRM & Performance',
          topics: [
            'Maîtrise CRM (Salesforce, HubSpot)',
            'Automatisation du suivi avec IA',
            'Analyse des performances et KPIs',
            'Projet final : pipeline de ventes complet'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude', use: 'Préparation de pitchs et gestion d\'objections' },
        { name: 'LinkedIn Sales Navigator + Lusha', use: 'Prospection et enrichissement de leads' },
        { name: 'HubSpot / Salesforce Einstein', use: 'CRM augmenté par IA, scoring de leads' },
        { name: 'Gong / Chorus', use: 'Analyse des appels de vente et coaching IA' }
      ],
      
      prerequisites: 'Expérience commerciale de base recommandée',
      deliverables: [
        'Pipeline de ventes structuré dans un CRM',
        'Scripts de prospection et pitch',
        'Guide de gestion des objections',
        'Tableau de bord de performance commerciale'
      ]
    },

    // 5. RH Digital & Gestion des Talents (5 days)
    {
      id: 'rh-digital',
      slug: 'rh-digital',
      icon: '/assets/course-icons/rh.svg',
      title: 'RH Digital & Gestion des Talents',
      subtitle: 'Transformez vos RH avec l\'IA et les outils digitaux',
      duration_days: 5,
      target_audience: ['RH', 'Responsables talents', 'Recruteurs', 'Managers'],
      short_description: 'Recrutement augmenté, évaluation des talents, formation continue, engagement et analytics RH avec IA.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Recrutement Augmenté par l\'IA',
          level: 'Intermédiaire',
          outcomes: [
            'Sourcer des candidats avec LinkedIn et IA',
            'Screening automatisé et scoring de CV',
            'Mener des entretiens structurés et efficaces'
          ]
        },
        {
          name: 'Évaluation & Développement des Talents',
          level: 'Intermédiaire',
          outcomes: [
            'Évaluer les compétences et potentiels',
            'Construire des plans de développement individuels',
            'Utiliser des outils d\'assessment (9Box, 360°)'
          ]
        },
        {
          name: 'Formation & Upskilling Continu',
          level: 'Intermédiaire',
          outcomes: [
            'Identifier les besoins en formation',
            'Déployer des programmes d\'upskilling',
            'Créer du contenu de formation avec IA'
          ]
        },
        {
          name: 'Engagement & Analytics RH',
          level: 'Senior',
          outcomes: [
            'Mesurer et améliorer l\'engagement',
            'Utiliser les people analytics pour décider',
            'Construire des dashboards RH'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Recrutement Augmenté',
          topics: [
            'Sourcing de candidats (LinkedIn, jobboards)',
            'Screening automatisé de CV avec IA',
            'Rédaction de job descriptions avec ChatGPT',
            'Pratique : sourcer 20 candidats qualifiés'
          ]
        },
        {
          day: 2,
          theme: 'Entretiens & Évaluation',
          topics: [
            'Entretiens structurés (méthode STAR)',
            'Évaluation des soft skills et fit culturel',
            'Outils d\'assessment (HackerRank, Codility, Pymetrics)',
            'Jeux de rôle : simulation d\'entretiens'
          ]
        },
        {
          day: 3,
          theme: 'Développement des Talents',
          topics: [
            'Évaluation de performance (9Box, 360°)',
            'Plans de développement individuel (PDI)',
            'Programmes de mentorat et coaching',
            'Cas pratique : construire un PDI'
          ]
        },
        {
          day: 4,
          theme: 'Formation & Upskilling',
          topics: [
            'Identifier les besoins en formation',
            'Créer du contenu de formation avec IA',
            'Plateformes LMS (Workday, SAP SuccessFactors)',
            'Projet : programme de formation complet'
          ]
        },
        {
          day: 5,
          theme: 'Engagement & Analytics',
          topics: [
            'Mesure de l\'engagement (eNPS, surveys)',
            'People analytics et prédiction du turnover',
            'Dashboards RH avec Power BI',
            'Projet final : stratégie RH data-driven'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude', use: 'Rédaction de job descriptions et interview questions' },
        { name: 'HireVue / Pymetrics', use: 'Screening automatisé et évaluation des candidats' },
        { name: 'Workday / SAP SuccessFactors', use: 'SIRH et gestion des talents' },
        { name: 'Culture Amp / Lattice', use: 'Engagement, feedback et performance management' }
      ],
      
      prerequisites: 'Connaissance de base des RH recommandée',
      deliverables: [
        'Processus de recrutement augmenté par IA',
        'Grille d\'évaluation et plans de développement',
        'Programme de formation et upskilling',
        'Dashboard analytics RH'
      ]
    },

    // 6. Finance pour Non-Financiers (3 days)
    {
      id: 'finance-gestion',
      slug: 'finance-gestion',
      icon: '/assets/course-icons/finance.svg',
      title: 'Finance pour Non-Financiers',
      subtitle: 'Maîtrisez les fondamentaux financiers avec l\'aide de l\'IA',
      duration_days: 3,
      target_audience: ['Managers', 'Entrepreneurs', 'Chefs de projet', 'Responsables opérationnels'],
      short_description: 'Lecture des états financiers, budgeting, analyse de rentabilité et décisions financières avec IA.',
      pack_price_xof: PACK_PRICES.short,
      
      modules: [
        {
          name: 'Lecture des États Financiers',
          level: 'Junior',
          outcomes: [
            'Comprendre le bilan, compte de résultat et cash flow',
            'Analyser la santé financière d\'une entreprise',
            'Utiliser ChatGPT pour interpréter les chiffres'
          ]
        },
        {
          name: 'Budgeting & Prévisions',
          level: 'Intermédiaire',
          outcomes: [
            'Construire un budget opérationnel',
            'Faire des prévisions financières',
            'Suivre les écarts budget vs réel'
          ]
        },
        {
          name: 'Analyse de Rentabilité & Décisions',
          level: 'Senior',
          outcomes: [
            'Calculer la rentabilité d\'un projet (ROI, VAN, TRI)',
            'Prendre des décisions d\'investissement éclairées',
            'Utiliser IA pour les modèles financiers'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'États Financiers',
          topics: [
            'Bilan : actif, passif, capitaux propres',
            'Compte de résultat : revenus, charges, résultat net',
            'Tableau de flux de trésorerie',
            'Pratique : analyser les états financiers d\'une PME'
          ]
        },
        {
          day: 2,
          theme: 'Budgeting & Suivi',
          topics: [
            'Construction d\'un budget opérationnel',
            'Prévisions de ventes et charges',
            'Suivi mensuel et analyse des écarts',
            'Cas pratique : budget annuel avec Excel + ChatGPT'
          ]
        },
        {
          day: 3,
          theme: 'Rentabilité & Décisions',
          topics: [
            'Calcul ROI, VAN, TRI, Payback',
            'Analyse coût-bénéfice',
            'Décisions make-or-buy, investissements',
            'Projet final : évaluation d\'un projet d\'investissement'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude', use: 'Interpréter les états financiers et calculs' },
        { name: 'Excel + ChatGPT', use: 'Modèles financiers et prévisions' },
        { name: 'QuickBooks / Xero', use: 'Comptabilité et reporting automatisé' },
        { name: 'Fathom / Jirav', use: 'Analytics financiers et dashboards' }
      ],
      
      prerequisites: 'Aucun prérequis financier',
      deliverables: [
        'Grille d\'analyse d\'états financiers',
        'Budget opérationnel annuel',
        'Modèle d\'évaluation de projets (ROI, VAN)',
        'Dashboard financier avec indicateurs clés'
      ]
    },

    // 7. IA Pratique pour Tous (3 days)
    {
      id: 'ia-pratique',
      slug: 'ia-pratique',
      icon: '/assets/course-icons/ia-pratique.svg',
      title: 'IA Pratique pour Tous',
      subtitle: 'Devenez expert en prompts et outils IA pour votre métier',
      duration_days: 3,
      target_audience: ['Tous professionnels', 'Cadres', 'Managers', 'Entrepreneurs'],
      short_description: 'Maîtrise des outils IA (ChatGPT, Midjourney, etc.), prompt engineering et automatisation métier.',
      pack_price_xof: PACK_PRICES.short,
      
      modules: [
        {
          name: 'Introduction à l\'IA & ChatGPT',
          level: 'Junior',
          outcomes: [
            'Comprendre les fondamentaux de l\'IA',
            'Maîtriser ChatGPT pour votre métier',
            'Concevoir des prompts efficaces'
          ]
        },
        {
          name: 'Outils IA pour la Productivité',
          level: 'Intermédiaire',
          outcomes: [
            'Utiliser Midjourney/DALL-E pour la création visuelle',
            'Automatiser les tâches avec Make/Zapier',
            'Produire du contenu rapidement'
          ]
        },
        {
          name: 'Workflows IA Métier',
          level: 'Senior',
          outcomes: [
            'Construire des workflows IA spécifiques à votre métier',
            'Intégrer l\'IA dans vos processus existants',
            'Former votre équipe à l\'IA'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Fondamentaux IA & ChatGPT',
          topics: [
            'Comprendre l\'IA, LLMs, et limitations',
            'Maîtriser ChatGPT (prompts, conversations)',
            'Prompt engineering : techniques avancées',
            'Pratique : 50 prompts métiers'
          ]
        },
        {
          day: 2,
          theme: 'Outils IA Créatifs',
          topics: [
            'Midjourney / DALL-E : création d\'images',
            'Runway / Synthesia : vidéos IA',
            'ElevenLabs : voix et audio IA',
            'Projet : créer une campagne marketing complète avec IA'
          ]
        },
        {
          day: 3,
          theme: 'Automatisation & Workflows',
          topics: [
            'Automatisation avec Make.com / Zapier',
            'API ChatGPT et intégrations',
            'Construire un workflow IA complet',
            'Projet final : automatiser une tâche récurrente'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude / Gemini', use: 'Assistants IA généraux' },
        { name: 'Midjourney / DALL-E', use: 'Génération d\'images' },
        { name: 'Make.com / Zapier', use: 'Automatisation de workflows' },
        { name: 'Notion AI / Coda AI', use: 'Documentation et collaboration augmentées' }
      ],
      
      prerequisites: 'Aucun prérequis technique',
      deliverables: [
        'Bibliothèque de 100+ prompts métiers',
        'Workflow IA automatisé',
        'Assets marketing (images, vidéos) créés avec IA',
        'Guide d\'adoption de l\'IA en entreprise'
      ]
    },

    // 8. IA pour l\'Entreprise (5 days)
    {
      id: 'ia-entreprise',
      slug: 'ia-entreprise',
      icon: '/assets/course-icons/ia-entreprise.svg',
      title: 'IA pour l\'Entreprise',
      subtitle: 'Transformez votre organisation avec une stratégie IA',
      duration_days: 5,
      target_audience: ['C-level', 'Directeurs', 'Chefs de projet', 'Consultants'],
      short_description: 'Stratégie IA, cas d\'usage métiers, gouvernance, éthique et déploiement organisationnel.',
      pack_price_xof: PACK_PRICES.medium,
      
      modules: [
        {
          name: 'Stratégie & Vision IA',
          level: 'Senior',
          outcomes: [
            'Définir une vision et stratégie IA',
            'Identifier les cas d\'usage prioritaires',
            'Évaluer la maturité IA de l\'organisation'
          ]
        },
        {
          name: 'Implémentation & Gouvernance',
          level: 'Senior',
          outcomes: [
            'Déployer des projets IA pilotes',
            'Mettre en place une gouvernance IA',
            'Gérer les risques et l\'éthique'
          ]
        },
        {
          name: 'Transformation & Conduite du Changement',
          level: 'Senior',
          outcomes: [
            'Accompagner le changement organisationnel',
            'Former les équipes à l\'IA',
            'Mesurer le ROI des initiatives IA'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Vision & Stratégie IA',
          topics: [
            'État de l\'art de l\'IA en entreprise',
            'Cartographie des cas d\'usage métiers',
            'Matrice de priorisation (impact vs effort)',
            'Étude de cas : entreprises africaines IA leaders'
          ]
        },
        {
          day: 2,
          theme: 'Cas d\'Usage Métiers',
          topics: [
            'IA en marketing, ventes, RH, finance, ops',
            'Sélectionner les quick wins',
            'ROI et business case',
            'Atelier : identifier 3 projets IA pour votre entreprise'
          ]
        },
        {
          day: 3,
          theme: 'Implémentation & Pilotes',
          topics: [
            'Méthodologie de déploiement (POC, MVP, scale)',
            'Choisir les outils et partenaires',
            'Intégration dans les systèmes existants',
            'Cas pratique : lancer un pilote IA'
          ]
        },
        {
          day: 4,
          theme: 'Gouvernance & Éthique',
          topics: [
            'Gouvernance IA : comité, politiques, standards',
            'Éthique et biais algorithmiques',
            'Conformité RGPD et protection des données',
            'Atelier : rédiger une charte IA d\'entreprise'
          ]
        },
        {
          day: 5,
          theme: 'Transformation & ROI',
          topics: [
            'Conduite du changement et adoption',
            'Formation des équipes à l\'IA',
            'Mesure du ROI et KPIs',
            'Projet final : roadmap IA complète'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'Microsoft Copilot / Google Duet', use: 'IA intégrée aux suites bureautiques' },
        { name: 'Salesforce Einstein / HubSpot AI', use: 'IA dans les outils métiers' },
        { name: 'DataRobot / H2O.ai', use: 'Plateformes AutoML pour data scientists' },
        { name: 'OpenAI API / Azure AI', use: 'Développement d\'applications IA custom' }
      ],
      
      prerequisites: 'Expérience managériale ou stratégique',
      deliverables: [
        'Roadmap IA 12-24 mois',
        'Business cases de 3 projets IA prioritaires',
        'Charte de gouvernance et éthique IA',
        'Plan de formation et conduite du changement'
      ]
    },

    // 9. Certification IA Professionnelle (10 days)
    {
      id: 'certification-ia',
      slug: 'certification-ia',
      icon: '/assets/course-icons/certification.svg',
      title: 'Certification IA Professionnelle',
      subtitle: 'Obtenez une certification reconnue en IA appliquée',
      duration_days: 10,
      target_audience: ['Professionnels de tous secteurs', 'Managers', 'Consultants'],
      short_description: 'Programme complet combinant fondamentaux IA, outils pratiques, cas d\'usage métiers et examen de certification.',
      pack_price_xof: PACK_PRICES.long,
      
      modules: [
        {
          name: 'Fondamentaux de l\'IA',
          level: 'Junior',
          outcomes: [
            'Comprendre les concepts clés de l\'IA',
            'Connaître les différentes technologies IA',
            'Identifier les applications sectorielles'
          ]
        },
        {
          name: 'Outils IA Professionnels',
          level: 'Intermédiaire',
          outcomes: [
            'Maîtriser ChatGPT, Claude, Gemini',
            'Utiliser les outils de création (images, vidéos, audio)',
            'Automatiser avec Make/Zapier'
          ]
        },
        {
          name: 'Stratégie & Implémentation',
          level: 'Senior',
          outcomes: [
            'Définir une stratégie IA',
            'Déployer des projets IA en entreprise',
            'Mesurer le ROI et gouvernance'
          ]
        },
        {
          name: 'Examen de Certification',
          level: 'Senior',
          outcomes: [
            'Valider les compétences théoriques',
            'Présenter un projet IA complet',
            'Obtenir le certificat DigiSchool IA Pro'
          ]
        }
      ],
      
      daily_plan: [
        {
          day: 1,
          theme: 'Introduction à l\'IA',
          topics: [
            'Histoire et évolution de l\'IA',
            'Machine Learning, Deep Learning, LLMs',
            'Applications sectorielles',
            'Quiz : fondamentaux IA'
          ]
        },
        {
          day: 2,
          theme: 'ChatGPT & Prompt Engineering',
          topics: [
            'Maîtrise avancée de ChatGPT',
            'Techniques de prompt engineering',
            '100 prompts métiers',
            'Pratique intensive'
          ]
        },
        {
          day: 3,
          theme: 'Outils IA Créatifs',
          topics: [
            'Midjourney, DALL-E, Stable Diffusion',
            'Runway, Synthesia (vidéos)',
            'ElevenLabs (audio)',
            'Projet : campagne marketing complète'
          ]
        },
        {
          day: 4,
          theme: 'Automatisation & Workflows',
          topics: [
            'Make.com et Zapier',
            'API et intégrations',
            'Workflows IA métiers',
            'Projet : automatisation complète'
          ]
        },
        {
          day: 5,
          theme: 'IA en Marketing & Ventes',
          topics: [
            'Content marketing avec IA',
            'Prospection et lead generation',
            'CRM augmenté par IA',
            'Cas pratiques'
          ]
        },
        {
          day: 6,
          theme: 'IA en RH & Finance',
          topics: [
            'Recrutement augmenté',
            'People analytics',
            'Modèles financiers avec IA',
            'Cas pratiques'
          ]
        },
        {
          day: 7,
          theme: 'IA en Opérations & Supply Chain',
          topics: [
            'Optimisation logistique',
            'Prévisions de demande',
            'Maintenance prédictive',
            'Cas pratiques'
          ]
        },
        {
          day: 8,
          theme: 'Stratégie & Gouvernance IA',
          topics: [
            'Définir une vision IA',
            'Gouvernance et éthique',
            'Conformité et risques',
            'Atelier : roadmap IA'
          ]
        },
        {
          day: 9,
          theme: 'Projet de Certification',
          topics: [
            'Travail sur le projet de certification',
            'Coaching et accompagnement',
            'Préparation de la présentation',
            'Révisions'
          ]
        },
        {
          day: 10,
          theme: 'Examen & Remise de Certificat',
          topics: [
            'Examen théorique (QCM)',
            'Présentation du projet',
            'Évaluation par jury',
            'Remise officielle du Certificat DigiSchool IA Pro'
          ]
        }
      ],
      
      ai_tools: [
        { name: 'ChatGPT / Claude / Gemini', use: 'Assistants IA généraux' },
        { name: 'Midjourney / Runway / ElevenLabs', use: 'Création multimédia IA' },
        { name: 'Make.com / Zapier / n8n', use: 'Automatisation avancée' },
        { name: 'Notion AI / Obsidian', use: 'Gestion de connaissances augmentée' }
      ],
      
      prerequisites: 'Motivation et engagement fort (certification exigeante)',
      deliverables: [
        'Projet IA complet (stratégie + implémentation)',
        'Portfolio de 50+ workflows et prompts',
        'Présentation devant jury',
        'Certificat DigiSchool IA Professionnelle (reconnu)'
      ]
    }
  ];
  
  // Calculate module price for B2C (pack price * 1.25 / number of modules)
  window.DigiSchoolCourses.forEach(course => {
    course.module_price_xof = Math.ceil((course.pack_price_xof * 1.25) / course.modules.length);
  });

})();
