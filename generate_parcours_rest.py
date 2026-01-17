#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '/home/user/webapp')
from generate_parcours_123 import generate_parcours_page

# 9 parcours restants
parcours_data = [
    {
        "slug": "marketing-vente-ia",
        "title": "Marketing & Vente B2B — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Personnalisation à grande échelle, lead scoring et mesure du ROI en temps réel avec l'IA.",
        "duree": "10 semaines",
        "cible": "Marketing B2B, Sales Manager",
        "publics": [
            {"title": "Chargés marketing B2B", "desc": "Tu crées des campagnes sans personnalisation. Tu veux automatiser la segmentation et mesurer le ROI précisément. Ce parcours digitalise ton marketing B2B."},
            {"title": "Sales managers", "desc": "Ton équipe perd du temps sur des leads non qualifiés. Tu veux prioriser les opportunités avec un scoring IA. Ce parcours optimise ton pipeline commercial."},
            {"title": "Growth marketers", "desc": "Tu veux scaler l'acquisition sans perdre en qualité. Tu cherches à automatiser le nurturing. Ce parcours te donne les outils de growth augmenté."},
            {"title": "Consultants marketing", "desc": "Tu accompagnes des clients B2B. Tu veux proposer des stratégies data-driven et mesurer l'impact. Ce parcours te forme au marketing IA."}
        ],
        "objectifs": [
            "Segmenter et personnaliser les campagnes marketing à grande échelle",
            "Automatiser le lead scoring et prioriser les opportunités commerciales",
            "Créer du contenu marketing avec l'IA (emailing, landing pages, posts)",
            "Mesurer le ROI marketing en temps réel et optimiser les budgets",
            "Construire des parcours clients automatisés (nurturing, onboarding)",
            "Analyser les performances et identifier les leviers de croissance",
            "Intégrer CRM et outils marketing (HubSpot, Salesforce, Mailchimp)",
            "Appliquer les bonnes pratiques RGPD dans le marketing digital"
        ],
        "modules": [
            {"title": "Fondamentaux du marketing B2B", "desc": "Funnel B2B, buyer personas, content marketing, lead generation, ABM (Account-Based Marketing)."},
            {"title": "Limites du marketing traditionnel", "desc": "Campagnes génériques, pas de personnalisation, scoring manuel, ROI flou, nurturing inefficace."},
            {"title": "Outils modernes de marketing automation", "desc": "HubSpot, Salesforce Marketing Cloud, Marketo, Mailchimp, LinkedIn Ads, Google Ads."},
            {"title": "IA embarquée dans le marketing", "desc": "Personnalisation automatisée, lead scoring prédictif, génération de contenu, optimisation budgétaire."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour créer des campagnes, rédiger des emails, analyser les performances, générer des rapports."},
            {"title": "Conduite du changement marketing", "desc": "Former les équipes, intégrer les outils, mesurer l'adoption, ajuster les processus."},
            {"title": "Certifications marketing digital", "desc": "Préparer HubSpot Inbound Marketing, Google Ads, Facebook Blueprint, LinkedIn Marketing."},
            {"title": "Livrables & KPI marketing", "desc": "Campagnes automatisées, dashboards ROI, modèles de scoring. KPI : conversion +50%, CAC -30%, ROI +60%."}
        ],
        "livrables": [
            "Stratégie marketing B2B documentée",
            "Campagnes automatisées (email, LinkedIn, Google Ads)",
            "Modèle de lead scoring prédictif",
            "Parcours clients automatisés (nurturing)",
            "Dashboard ROI marketing temps réel",
            "Contenu marketing généré par IA (emails, posts, landing pages)",
            "Bibliothèque de prompts IA pour le marketing"
        ],
        "debouches": [
            "Chargé Marketing Digital B2B",
            "Growth Marketing Manager",
            "Sales Operations Manager",
            "Marketing Automation Specialist",
            "Consultant Marketing & Growth"
        ]
    },
    {
        "slug": "digital-vibecoding",
        "title": "Digital, IA & Vibecoding",
        "badge": "DEV + IA",
        "hero_desc": "Développement Front/Back, automatisation et création d'applications métier avec des copilotes IA.",
        "duree": "16 semaines",
        "cible": "Développeur, Tech Lead",
        "publics": [
            {"title": "Développeurs débutants", "desc": "Tu codes en autodidacte sans méthode structurée. Tu veux maîtriser le Full-Stack avec l'accompagnement IA. Ce parcours t'enseigne les fondamentaux et l'IA."},
            {"title": "Développeurs confirmés", "desc": "Tu codes seul sans copilote IA. Tu veux accélérer ton développement et automatiser les tâches répétitives. Ce parcours optimise ta productivité."},
            {"title": "Tech leads et CTOs", "desc": "Tu pilotes des projets tech. Tu veux industrialiser le développement avec l'IA et former ton équipe. Ce parcours modernise ta stack tech."},
            {"title": "Entrepreneurs tech", "desc": "Tu veux créer ton MVP rapidement. Tu cherches à coder efficacement avec l'IA pour valider ton produit. Ce parcours accélère ton time-to-market."}
        ],
        "objectifs": [
            "Développer des applications web Full-Stack (Front + Back + BDD)",
            "Utiliser des copilotes IA pour accélérer le développement (GitHub Copilot, Cursor)",
            "Automatiser les tâches répétitives (tests, déploiement, documentation)",
            "Créer des APIs REST et intégrer des services tiers",
            "Construire des interfaces utilisateur modernes et responsive",
            "Déployer des applications en production (CI/CD, cloud)",
            "Appliquer les bonnes pratiques de sécurité et de performance",
            "Travailler en équipe avec Git et méthodologies agiles"
        ],
        "modules": [
            {"title": "Fondamentaux du développement web", "desc": "HTML, CSS, JavaScript, architecture client-serveur, bases de données, APIs, Git."},
            {"title": "Limites du développement manuel", "desc": "Code répétitif, bugs fréquents, documentation absente, tests manuels, déploiements lents."},
            {"title": "Stack moderne Full-Stack", "desc": "React ou Vue.js (Front), Node.js ou Python (Back), PostgreSQL ou MongoDB (BDD), Docker, CI/CD."},
            {"title": "IA embarquée dans le développement", "desc": "GitHub Copilot, Cursor, génération de code, tests automatisés, documentation IA, debugging assisté."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour générer des composants, créer des APIs, automatiser les tests, déployer en production."},
            {"title": "Conduite du changement tech", "desc": "Former les équipes, adopter les copilotes IA, mesurer les gains de productivité."},
            {"title": "Certifications développement", "desc": "Préparer AWS Certified Developer, Google Cloud Developer, Microsoft Azure Developer."},
            {"title": "Livrables & KPI dev", "desc": "Applications Full-Stack, APIs documentées, tests automatisés. KPI : productivité +70%, bugs -50%, time-to-market -40%."}
        ],
        "livrables": [
            "Application web Full-Stack déployée en production",
            "API REST documentée et testée",
            "Interface utilisateur moderne et responsive",
            "Pipeline CI/CD automatisé",
            "Documentation technique complète",
            "Tests automatisés (unitaires, intégration, end-to-end)",
            "Bibliothèque de prompts IA pour le développement"
        ],
        "debouches": [
            "Développeur Full-Stack",
            "Développeur Front-End / Back-End",
            "Tech Lead",
            "DevOps Engineer",
            "Consultant Technique"
        ]
    },
    {
        "slug": "supply-chain-ia",
        "title": "Supply Chain & Logistique — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Optimise les stocks, prévois la demande et automatise la planification avec l'IA.",
        "duree": "10 semaines",
        "cible": "Supply Chain Manager, Logisticien",
        "publics": [
            {"title": "Responsables supply chain", "desc": "Tu gères les stocks et la logistique manuellement. Tu veux optimiser les niveaux de stock et réduire les coûts. Ce parcours automatise ta supply chain."},
            {"title": "Logisticiens", "desc": "Tu planifies les tournées et les livraisons sans optimisation. Tu veux réduire les délais et les coûts de transport. Ce parcours optimise ta logistique."},
            {"title": "Acheteurs et approvisionneurs", "desc": "Tu passes des commandes sans prévisions fiables. Tu veux anticiper la demande et éviter les ruptures. Ce parcours te donne des outils prédictifs."},
            {"title": "Directeurs opérationnels", "desc": "Tu pilotes les opérations. Tu veux une visibilité temps réel sur la supply chain et identifier les goulots. Ce parcours digitalise ton pilotage."}
        ],
        "objectifs": [
            "Optimiser les niveaux de stock et réduire les coûts de stockage",
            "Prévoir la demande avec des modèles prédictifs IA",
            "Automatiser la planification des approvisionnements",
            "Optimiser les tournées et réduire les coûts de transport",
            "Détecter les goulots d'étranglement et les risques supply chain",
            "Construire des dashboards supply chain temps réel",
            "Intégrer les systèmes ERP, WMS, TMS avec l'IA",
            "Piloter la performance supply chain (KPI, SLA)"
        ],
        "modules": [
            {"title": "Fondamentaux de la supply chain", "desc": "Gestion des stocks, planification, achats, transport, entreposage, KPI supply chain."},
            {"title": "Limites de la supply chain traditionnelle", "desc": "Stocks excessifs, ruptures fréquentes, prévisions imprécises, planification manuelle, manque de visibilité."},
            {"title": "Outils modernes de supply chain", "desc": "ERP (SAP, Odoo), WMS, TMS, outils de prévision, plateformes d'optimisation."},
            {"title": "IA embarquée dans la supply chain", "desc": "Prévision de la demande, optimisation des stocks, planification automatisée, détection d'anomalies."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour prévoir la demande, optimiser les stocks, planifier les approvisionnements, analyser les performances."},
            {"title": "Conduite du changement supply chain", "desc": "Former les équipes, intégrer les outils, mesurer les gains, ajuster les processus."},
            {"title": "Certifications supply chain", "desc": "Préparer APICS CSCP, CLTD, Six Sigma Green Belt."},
            {"title": "Livrables & KPI supply chain", "desc": "Modèles prédictifs, dashboards, processus automatisés. KPI : coûts de stock -30%, ruptures -50%, délais livraison -25%."}
        ],
        "livrables": [
            "Modèle prédictif de la demande",
            "Plan d'approvisionnement automatisé",
            "Dashboard supply chain temps réel",
            "Matrice d'optimisation des stocks",
            "Plan d'optimisation des tournées logistiques",
            "Analyse des risques supply chain",
            "Bibliothèque de prompts IA pour la supply chain"
        ],
        "debouches": [
            "Supply Chain Manager",
            "Responsable Logistique",
            "Acheteur Stratégique",
            "Planificateur Supply Chain",
            "Consultant Supply Chain & Operations"
        ]
    },
    {
        "slug": "management-processus-ia",
        "title": "Management — Cartographie & Ingénierie des Processus — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Cartographie, optimise et automatise les processus métier avec l'IA.",
        "duree": "8 semaines",
        "cible": "Manager opérationnel, Consultant",
        "publics": [
            {"title": "Managers opérationnels", "desc": "Tu gères des processus métier inefficaces. Tu veux cartographier, optimiser et automatiser. Ce parcours structure tes opérations."},
            {"title": "Consultants en organisation", "desc": "Tu accompagnes des clients sur l'optimisation des processus. Tu veux proposer des solutions data-driven. Ce parcours te forme au BPM augmenté."},
            {"title": "Responsables qualité", "desc": "Tu pilotes la qualité et la conformité. Tu veux documenter et améliorer les processus. Ce parcours digitalise ta démarche qualité."},
            {"title": "Chefs de projet transformation", "desc": "Tu pilotes des projets de transformation. Tu veux identifier les gisements de gains et mesurer l'impact. Ce parcours te donne les outils."}
        ],
        "objectifs": [
            "Cartographier les processus métier (BPMN, flowcharts)",
            "Identifier les inefficacités et les goulots d'étranglement",
            "Optimiser les processus et automatiser les tâches répétitives",
            "Mesurer la performance des processus (KPI, SLA)",
            "Utiliser l'IA pour détecter les anomalies et proposer des améliorations",
            "Documenter les processus et assurer la conformité",
            "Former les équipes et accompagner le changement",
            "Piloter l'amélioration continue (Lean, Six Sigma)"
        ],
        "modules": [
            {"title": "Fondamentaux du management des processus", "desc": "BPM, cartographie BPMN, Lean, Six Sigma, amélioration continue, KPI processus."},
            {"title": "Limites du management traditionnel", "desc": "Processus non documentés, inefficacités cachées, amélioration par intuition, pas de mesure."},
            {"title": "Outils modernes de BPM", "desc": "Bizagi, Lucidchart, Miro, outils d'automatisation (Zapier, Make, Power Automate)."},
            {"title": "IA embarquée dans le BPM", "desc": "Analyse des processus, détection des goulots, recommandations d'optimisation, automatisation intelligente."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour cartographier des processus, identifier des gains, automatiser des workflows, mesurer l'impact."},
            {"title": "Conduite du changement processus", "desc": "Former les équipes, gérer les résistances, mesurer l'adoption des nouveaux processus."},
            {"title": "Certifications BPM et Lean", "desc": "Préparer Lean Six Sigma Green Belt, BPM Professional, Process Mining Specialist."},
            {"title": "Livrables & KPI processus", "desc": "Cartographies, processus optimisés, automatisations. KPI : temps cycle -40%, erreurs -60%, coûts -30%."}
        ],
        "livrables": [
            "Cartographie complète des processus métier (BPMN)",
            "Matrice d'analyse des inefficacités",
            "Plans d'optimisation et d'automatisation",
            "Dashboard de performance des processus",
            "Documentation processus et procédures",
            "Workflows automatisés (Zapier, Make, RPA)",
            "Bibliothèque de prompts IA pour le BPM"
        ],
        "debouches": [
            "Manager Opérationnel",
            "Consultant en Organisation",
            "Responsable Qualité et Processus",
            "Chef de Projet Transformation",
            "Process Excellence Manager"
        ]
    },
    {
        "slug": "achats-sourcing-ia",
        "title": "Achats Stratégiques & Sourcing — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Analyse des fournisseurs, négociation et optimisation des coûts avec l'IA.",
        "duree": "8 semaines",
        "cible": "Acheteur, Responsable Achats",
        "publics": [
            {"title": "Acheteurs opérationnels", "desc": "Tu passes des commandes sans analyse stratégique. Tu veux optimiser les coûts et sécuriser les approvisionnements. Ce parcours professionnalise tes achats."},
            {"title": "Responsables achats", "desc": "Tu gères un portefeuille fournisseurs. Tu veux automatiser l'évaluation et négocier mieux. Ce parcours digitalise tes achats."},
            {"title": "Directeurs supply chain", "desc": "Tu pilotes les achats et la supply chain. Tu veux une visibilité sur les risques fournisseurs et optimiser les coûts. Ce parcours te donne les outils."},
            {"title": "Consultants achats", "desc": "Tu accompagnes des clients sur l'optimisation des achats. Tu veux proposer des analyses data-driven. Ce parcours te forme aux achats augmentés."}
        ],
        "objectifs": [
            "Analyser les dépenses et identifier les gisements d'économies",
            "Évaluer et sélectionner les fournisseurs avec des critères objectifs",
            "Négocier les conditions commerciales et optimiser les contrats",
            "Automatiser le sourcing et la gestion des appels d'offres",
            "Détecter les risques fournisseurs et sécuriser les approvisionnements",
            "Construire des dashboards achats et suivre la performance",
            "Intégrer les achats avec l'ERP et les systèmes métier",
            "Appliquer les bonnes pratiques RSE dans les achats"
        ],
        "modules": [
            {"title": "Fondamentaux des achats stratégiques", "desc": "Analyse des dépenses, sourcing, négociation, gestion fournisseurs, contrats, KPI achats."},
            {"title": "Limites des achats traditionnels", "desc": "Analyse manuelle des dépenses, sourcing limité, négociation sans data, risques non détectés."},
            {"title": "Outils modernes d'achats", "desc": "Plateformes e-procurement, outils d'analyse des dépenses, systèmes de gestion fournisseurs (SRM)."},
            {"title": "IA embarquée dans les achats", "desc": "Analyse automatisée des dépenses, sourcing intelligent, évaluation fournisseurs, détection des risques."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour analyser les dépenses, sourcer des fournisseurs, préparer des négociations, évaluer les risques."},
            {"title": "Conduite du changement achats", "desc": "Former les équipes, intégrer les outils, mesurer les gains, ajuster les processus."},
            {"title": "Certifications achats", "desc": "Préparer CIPS, CPSM (Certified Professional in Supply Management)."},
            {"title": "Livrables & KPI achats", "desc": "Analyses des dépenses, processus optimisés, dashboards. KPI : économies +20%, délais sourcing -40%, risques détectés +60%."}
        ],
        "livrables": [
            "Analyse des dépenses par catégorie et fournisseur",
            "Matrice d'évaluation et de sélection des fournisseurs",
            "Plans de négociation et contrats optimisés",
            "Dashboard achats temps réel",
            "Analyse des risques fournisseurs",
            "Processus de sourcing automatisé",
            "Bibliothèque de prompts IA pour les achats"
        ],
        "debouches": [
            "Acheteur Stratégique",
            "Responsable Achats",
            "Directeur Achats et Supply Chain",
            "Consultant Achats et Sourcing",
            "Category Manager"
        ]
    },
    {
        "slug": "securite-gouvernance-ia",
        "title": "Sécurité, Data & Gouvernance — IA & Conformité",
        "badge": "SÉCURITÉ + IA",
        "hero_desc": "Gouvernance des données, conformité RGPD/GDPR et sécurité augmentée par l'IA.",
        "duree": "10 semaines",
        "cible": "DPO, RSSI, Compliance Officer",
        "publics": [
            {"title": "DPO et compliance officers", "desc": "Tu gères la conformité RGPD manuellement. Tu veux automatiser les audits et détecter les violations. Ce parcours digitalise ta conformité."},
            {"title": "RSSI et responsables sécurité", "desc": "Tu pilotes la sécurité IT. Tu veux détecter les menaces en temps réel et automatiser les réponses. Ce parcours augmente ta sécurité avec l'IA."},
            {"title": "Directeurs IT", "desc": "Tu pilotes l'IT et la sécurité. Tu veux une visibilité sur les risques et assurer la conformité. Ce parcours te donne les outils de gouvernance."},
            {"title": "Consultants cybersécurité", "desc": "Tu accompagnes des clients sur la sécurité et la conformité. Tu veux proposer des solutions data-driven. Ce parcours te forme à la sécurité augmentée."}
        ],
        "objectifs": [
            "Mettre en place une gouvernance des données conforme (RGPD, GDPR, lois locales)",
            "Automatiser les audits de conformité et détecter les violations",
            "Détecter les menaces de sécurité en temps réel avec l'IA",
            "Construire des dashboards de gouvernance et de sécurité",
            "Former les équipes aux bonnes pratiques de sécurité",
            "Gérer les incidents de sécurité et les violations de données",
            "Intégrer les outils de sécurité (SIEM, SOAR, EDR)",
            "Documenter les politiques de sécurité et de conformité"
        ],
        "modules": [
            {"title": "Fondamentaux de la sécurité et de la gouvernance", "desc": "RGPD, GDPR, ISO 27001, cybersécurité, gestion des risques, audits de conformité."},
            {"title": "Limites de la conformité manuelle", "desc": "Audits lents, violations non détectées, documentation obsolète, manque de visibilité."},
            {"title": "Outils modernes de gouvernance et sécurité", "desc": "SIEM (Splunk, QRadar), SOAR, GRC platforms, outils RGPD (OneTrust, TrustArc)."},
            {"title": "IA embarquée dans la sécurité", "desc": "Détection d'anomalies, réponse automatisée aux incidents, audits automatisés, classification des données."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour auditer la conformité, détecter les violations, classifier les données, analyser les logs."},
            {"title": "Conduite du changement sécurité", "desc": "Former les équipes, sensibiliser aux risques, mesurer l'adoption des bonnes pratiques."},
            {"title": "Certifications sécurité et conformité", "desc": "Préparer CIPP/E, CISSP, CISM, ISO 27001 Lead Implementer."},
            {"title": "Livrables & KPI sécurité", "desc": "Politiques documentées, dashboards, processus automatisés. KPI : violations -70%, temps de réponse -60%, conformité 100%."}
        ],
        "livrables": [
            "Politique de gouvernance des données documentée",
            "Processus d'audit de conformité automatisé",
            "Dashboard de sécurité et conformité temps réel",
            "Procédures de gestion des incidents",
            "Registre des traitements de données (RGPD)",
            "Matrice de classification des données",
            "Bibliothèque de prompts IA pour la sécurité"
        ],
        "debouches": [
            "Data Protection Officer (DPO)",
            "Responsable Sécurité des Systèmes d'Information (RSSI)",
            "Compliance Officer",
            "Consultant Cybersécurité et Conformité",
            "Risk Manager IT"
        ]
    },
    {
        "slug": "dirigeants-decision-ia",
        "title": "Data, IA & Décision Stratégique pour Dirigeants",
        "badge": "DIRIGEANTS",
        "hero_desc": "Utilise la data et l'IA pour piloter la stratégie, identifier les opportunités et anticiper les risques.",
        "duree": "6 semaines",
        "cible": "CEO, Directeur Général, C-Level",
        "publics": [
            {"title": "CEOs et Directeurs Généraux", "desc": "Tu prends des décisions stratégiques sans data fiable. Tu veux piloter avec des KPI temps réel et des prévisions IA. Ce parcours te rend data-driven."},
            {"title": "Directeurs financiers", "desc": "Tu pilotes la performance financière. Tu veux anticiper les tendances et identifier les leviers de croissance. Ce parcours te donne les outils prédictifs."},
            {"title": "Directeurs commerciaux", "desc": "Tu pilotes les ventes. Tu veux une visibilité sur le pipeline et optimiser les ressources commerciales. Ce parcours digitalise ton pilotage."},
            {"title": "Entrepreneurs et fondateurs", "desc": "Tu pilotes ta startup. Tu veux prendre des décisions rapides basées sur la data. Ce parcours te donne les outils de pilotage stratégique."}
        ],
        "objectifs": [
            "Construire des dashboards stratégiques temps réel",
            "Utiliser l'IA pour identifier les opportunités de croissance",
            "Anticiper les risques et construire des scénarios stratégiques",
            "Piloter la performance avec des KPI pertinents",
            "Prendre des décisions data-driven et mesurer l'impact",
            "Communiquer la stratégie avec des visuels percutants",
            "Intégrer la data dans la culture d'entreprise",
            "Former les équipes au pilotage data-driven"
        ],
        "modules": [
            {"title": "Fondamentaux du pilotage stratégique", "desc": "KPI stratégiques, balanced scorecard, analyse SWOT, scénarios stratégiques, OKR."},
            {"title": "Limites du pilotage traditionnel", "desc": "Décisions par intuition, données fragmentées, reporting tardif, manque de visibilité temps réel."},
            {"title": "Outils modernes de pilotage", "desc": "Power BI, Tableau, dashboards stratégiques, outils de prévision, plateformes BI."},
            {"title": "IA embarquée dans la décision", "desc": "Prévisions stratégiques, détection d'opportunités, analyse de scénarios, recommandations automatisées."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour analyser la performance, construire des scénarios, identifier des opportunités, générer des rapports exécutifs."},
            {"title": "Conduite du changement data-driven", "desc": "Instaurer une culture data, former les équipes, mesurer l'adoption des outils."},
            {"title": "Certifications stratégiques", "desc": "MBA Executive, Strategic Management certifications, Data Leadership programs."},
            {"title": "Livrables & KPI dirigeants", "desc": "Dashboards stratégiques, scénarios, rapports. KPI : vitesse de décision +50%, impact stratégies mesurable, ROI data +70%."}
        ],
        "livrables": [
            "Dashboard stratégique temps réel pour le comité de direction",
            "Analyse des opportunités de croissance avec l'IA",
            "Scénarios stratégiques et plans d'action",
            "Rapport exécutif automatisé (mensuel/trimestriel)",
            "Matrice de KPI stratégiques par département",
            "Plans de transformation data-driven",
            "Bibliothèque de prompts IA pour dirigeants"
        ],
        "debouches": [
            "CEO / Directeur Général",
            "Chief Financial Officer (CFO)",
            "Chief Commercial Officer (CCO)",
            "Chief Strategy Officer (CSO)",
            "Entrepreneur / Fondateur"
        ]
    },
    {
        "slug": "cyber-resilience-ia",
        "title": "Cyber-Résilience & Gestion de Crise — IA",
        "badge": "CYBER + IA",
        "hero_desc": "Détection des menaces, réponse aux incidents et plans de continuité augmentés par l'IA.",
        "duree": "8 semaines",
        "cible": "RSSI, Risk Manager, SOC Analyst",
        "publics": [
            {"title": "RSSI", "desc": "Tu pilotes la cybersécurité. Tu veux détecter les menaces en temps réel et automatiser les réponses. Ce parcours augmente ta résilience cyber."},
            {"title": "SOC analysts", "desc": "Tu surveilles les alertes de sécurité manuellement. Tu veux automatiser la détection et la réponse. Ce parcours optimise ton SOC avec l'IA."},
            {"title": "Risk managers", "desc": "Tu gères les risques cyber. Tu veux anticiper les menaces et mesurer l'impact. Ce parcours te donne les outils prédictifs."},
            {"title": "Directeurs IT", "desc": "Tu pilotes l'IT et la sécurité. Tu veux assurer la continuité en cas de crise. Ce parcours structure ta résilience cyber."}
        ],
        "objectifs": [
            "Détecter les menaces cyber en temps réel avec l'IA",
            "Automatiser la réponse aux incidents de sécurité",
            "Construire des plans de continuité et de reprise d'activité",
            "Gérer les crises cyber et communiquer efficacement",
            "Mesurer la cyber-résilience et identifier les vulnérabilités",
            "Former les équipes aux bonnes pratiques de sécurité",
            "Intégrer les outils de détection (SIEM, EDR, XDR)",
            "Documenter les procédures de réponse aux incidents"
        ],
        "modules": [
            {"title": "Fondamentaux de la cyber-résilience", "desc": "Cybersécurité, gestion des incidents, plans de continuité (PCA/PRA), gestion de crise."},
            {"title": "Limites de la sécurité réactive", "desc": "Détection tardive, réponse manuelle, plans obsolètes, communication de crise inefficace."},
            {"title": "Outils modernes de cyber-résilience", "desc": "SIEM, SOAR, EDR, XDR, plateformes de gestion de crise, outils de simulation d'attaques."},
            {"title": "IA embarquée dans la cyber-résilience", "desc": "Détection d'anomalies, réponse automatisée, prédiction des attaques, analyse comportementale."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour analyser les logs, détecter les menaces, automatiser les réponses, construire des plans de crise."},
            {"title": "Conduite du changement cyber", "desc": "Former les équipes, sensibiliser aux risques, mesurer la résilience, ajuster les processus."},
            {"title": "Certifications cybersécurité", "desc": "Préparer CISSP, CEH, CISM, GIAC certifications."},
            {"title": "Livrables & KPI cyber", "desc": "Processus automatisés, plans de continuité, dashboards. KPI : temps de détection -80%, temps de réponse -70%, incidents évités +60%."}
        ],
        "livrables": [
            "Processus de détection et réponse automatisé (SOAR)",
            "Plan de continuité d'activité (PCA/PRA) documenté",
            "Procédures de gestion de crise cyber",
            "Dashboard de cyber-résilience temps réel",
            "Matrice des risques cyber et plans de mitigation",
            "Simulations d'attaques et rapports post-incident",
            "Bibliothèque de prompts IA pour la cybersécurité"
        ],
        "debouches": [
            "Responsable Sécurité des Systèmes d'Information (RSSI)",
            "SOC Analyst / SOC Manager",
            "Risk Manager IT",
            "Consultant Cybersécurité",
            "Incident Response Manager"
        ]
    },
    {
        "slug": "expansion-multi-pays-ia",
        "title": "Stratégie d'Expansion & Multi-Pays — IA",
        "badge": "EXPANSION",
        "hero_desc": "Analyse de marchés, due diligence et stratégies d'implantation régionale augmentées par l'IA.",
        "duree": "10 semaines",
        "cible": "Directeur Expansion, Business Dev",
        "publics": [
            {"title": "Directeurs expansion", "desc": "Tu pilotes l'expansion régionale. Tu veux analyser les marchés rapidement et identifier les opportunités. Ce parcours accélère ton expansion avec l'IA."},
            {"title": "Business developers", "desc": "Tu prospectes de nouveaux marchés. Tu veux des analyses data-driven et des recommandations stratégiques. Ce parcours digitalise ton business development."},
            {"title": "CEOs et entrepreneurs", "desc": "Tu veux étendre ton activité à d'autres pays africains. Tu cherches une méthode structurée pour évaluer les marchés. Ce parcours te guide dans ton expansion."},
            {"title": "Consultants stratégie", "desc": "Tu accompagnes des clients sur l'expansion. Tu veux proposer des analyses de marchés augmentées par l'IA. Ce parcours te forme à l'expansion data-driven."}
        ],
        "objectifs": [
            "Analyser les marchés africains et identifier les opportunités",
            "Construire des stratégies d'entrée sur de nouveaux marchés",
            "Réaliser des due diligence commerciales et réglementaires",
            "Évaluer les risques pays et les barrières à l'entrée",
            "Construire des business plans d'expansion chiffrés",
            "Utiliser l'IA pour accélérer les analyses de marchés",
            "Piloter le déploiement multi-pays avec des KPI clairs",
            "Former les équipes locales et assurer le transfert de compétences"
        ],
        "modules": [
            {"title": "Fondamentaux de l'expansion internationale", "desc": "Stratégies d'entrée, analyse de marchés, due diligence, risques pays, modèles d'implantation."},
            {"title": "Limites de l'expansion traditionnelle", "desc": "Analyses manuelles lentes, informations fragmentées, due diligence incomplète, risques non anticipés."},
            {"title": "Outils modernes d'expansion", "desc": "Plateformes d'analyse de marchés, outils de veille stratégique, CRM multi-pays, outils de prévision."},
            {"title": "IA embarquée dans l'expansion", "desc": "Analyse automatisée des marchés, détection d'opportunités, évaluation des risques, prévisions de demande."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour analyser des marchés, construire des business plans, évaluer des risques, identifier des partenaires."},
            {"title": "Conduite du changement expansion", "desc": "Former les équipes locales, gérer les différences culturelles, assurer la cohérence multi-pays."},
            {"title": "Certifications business development", "desc": "MBA International Business, certifications en stratégie d'expansion."},
            {"title": "Livrables & KPI expansion", "desc": "Analyses de marchés, business plans, processus de déploiement. KPI : time-to-market -40%, coûts d'entrée -30%, réussite implantations +50%."}
        ],
        "livrables": [
            "Analyses de marchés par pays cible",
            "Matrices d'évaluation des opportunités",
            "Business plans d'expansion chiffrés",
            "Rapports de due diligence commerciale et réglementaire",
            "Analyses des risques pays",
            "Plans de déploiement multi-pays",
            "Bibliothèque de prompts IA pour l'expansion"
        ],
        "debouches": [
            "Directeur Expansion / Business Development",
            "Country Manager",
            "Regional Manager",
            "Consultant Stratégie et Expansion",
            "VP International Business"
        ]
    }
]

# Générer les 9 pages restantes
for parcours in parcours_data:
    filename = f"/home/user/webapp/parcours/{parcours['slug']}.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(generate_parcours_page(parcours))
    print(f"✓ Créé : {filename}")

print("\n✅ 9 pages parcours restantes créées avec succès!")
print("Total des pages parcours : 13/13 ✓")
