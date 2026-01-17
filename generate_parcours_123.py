#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Générateur automatique des 12 pages parcours restantes
DigiSchool Africa - Mode SHIP TO PROD
"""

parcours_data = [
    {
        "slug": "finance-ia",
        "title": "Finance & Analyse Financière — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Analyse automatisée des états financiers, détection d'anomalies et prévisions de trésorerie avec l'IA.",
        "duree": "10 semaines",
        "cible": "Contrôleur de gestion, Analyste, DAF",
        "publics": [
            {"title": "Contrôleurs de gestion", "desc": "Tu passes des heures sur Excel à consolider des données financières. Tes analyses arrivent en retard et tu manques d'insights stratégiques. Ce parcours automatise ton reporting et te concentre sur l'analyse."},
            {"title": "Analysts financiers", "desc": "Tu produis des rapports financiers manuellement. Tu veux détecter les anomalies plus vite et anticiper les tendances. Ce parcours te forme à l'analyse prédictive avec l'IA."},
            {"title": "DAF et RAF", "desc": "Tu pilotes la performance financière. Tu veux automatiser le suivi budgétaire et obtenir des dashboards temps réel. Ce parcours optimise ton pilotage financier."},
            {"title": "Auditeurs et consultants", "desc": "Tu audites des comptes ou accompagnes des clients. Tu veux accélérer tes analyses et produire des recommandations data-driven. Ce parcours te donne les outils."}
        ],
        "objectifs": [
            "Automatiser la consolidation et l'analyse des états financiers",
            "Détecter les anomalies et les écarts budgétaires en temps réel",
            "Construire des prévisions de trésorerie et des scénarios financiers",
            "Créer des dashboards financiers dynamiques et automatisés",
            "Analyser la rentabilité par produit, client ou projet",
            "Produire un reporting financier exécutif structuré",
            "Optimiser les processus financiers avec l'IA",
            "Appliquer les normes comptables locales et internationales (IFRS, OHADA)"
        ],
        "modules": [
            {"title": "Fondamentaux de l'analyse financière", "desc": "Comprendre les états financiers, ratios clés, analyse de la performance et du risque financier."},
            {"title": "Limites de l'analyse financière manuelle", "desc": "Identifier les inefficacités : consolidation lente, erreurs de saisie, reporting tardif, manque de visibilité temps réel."},
            {"title": "Innovations dans la finance d'entreprise", "desc": "Outils modernes : Power BI, Tableau, Excel avancé, ERP financiers, plateformes de consolidation."},
            {"title": "IA embarquée dans la finance", "desc": "Automatisation des analyses, détection d'anomalies, prévisions de trésorerie, optimisation budgétaire avec l'IA."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour analyser des bilans, générer des rapports financiers, créer des modèles prévisionnels."},
            {"title": "Conduite du changement financier", "desc": "Former les équipes finance, gérer la transition vers l'automatisation, mesurer l'adoption."},
            {"title": "Certifications comptables et financières", "desc": "Préparer des certifications type CPA, ACCA, IFRS, ou diplômes comptables reconnus."},
            {"title": "Livrables & KPI financiers", "desc": "Modèles financiers, dashboards, rapports automatisés. KPI : gain de temps 60%, détection anomalies +80%, précision prévisions +40%."}
        ],
        "livrables": [
            "Modèle financier automatisé (P&L, bilan, trésorerie)",
            "Dashboard financier temps réel (Power BI ou équivalent)",
            "Rapport d'analyse financière exécutif automatisé",
            "Matrice de détection d'anomalies",
            "Prévisions de trésorerie à 6-12 mois",
            "Tableau de bord de rentabilité par produit/client",
            "Bibliothèque de prompts IA pour analyses financières"
        ],
        "debouches": [
            "Contrôleur de gestion",
            "Analyste financier",
            "Directeur administratif et financier (DAF)",
            "Responsable comptable et financier",
            "Consultant finance et performance"
        ]
    },
    {
        "slug": "data-analytics-ia",
        "title": "Data & Analytics — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Nettoie, analyse et visualise des données avec l'IA. Crée des dashboards et des analyses prédictives pour la prise de décision.",
        "duree": "12 semaines",
        "cible": "Data Analyst, Business Analyst",
        "publics": [
            {"title": "Analysts débutants", "desc": "Tu manipules des données sur Excel mais tu n'arrives pas à produire des insights exploitables. Ce parcours te forme à l'analyse data avec Python, SQL et l'IA."},
            {"title": "Business Analysts", "desc": "Tu produis des rapports métier sans automatisation. Tu veux créer des dashboards dynamiques et des analyses prédictives. Ce parcours te donne les outils."},
            {"title": "Contrôleurs de gestion", "desc": "Tu passes trop de temps à nettoyer et consolider des données. Tu veux automatiser ton reporting. Ce parcours optimise ton workflow data."},
            {"title": "Managers métier", "desc": "Tu prends des décisions sans data fiable. Tu veux piloter avec des KPI temps réel et des prévisions data-driven. Ce parcours te rend data-driven."}
        ],
        "objectifs": [
            "Nettoyer et préparer des données issues de sources multiples",
            "Analyser des données avec Python, SQL et Excel avancé",
            "Créer des visualisations et dashboards avec Power BI ou Tableau",
            "Construire des modèles prédictifs simples (régression, clustering)",
            "Automatiser les analyses répétitives avec l'IA",
            "Communiquer des insights data à des non-spécialistes",
            "Identifier les KPI pertinents et suivre la performance",
            "Utiliser l'IA pour générer des analyses en langage naturel"
        ],
        "modules": [
            {"title": "Fondamentaux de la data analytics", "desc": "Statistiques descriptives, types de données, KPI métier, introduction à SQL et Python."},
            {"title": "Limites de l'analyse manuelle", "desc": "Données sales, analyses lentes, erreurs humaines, manque de scalabilité."},
            {"title": "Outils modernes de data analytics", "desc": "Python (Pandas, NumPy), SQL, Power BI, Tableau, Google Data Studio, Excel avancé."},
            {"title": "IA embarquée dans la data", "desc": "Nettoyage automatisé, détection d'outliers, analyses prédictives, génération d'insights en langage naturel."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour nettoyer des datasets, générer des analyses, créer des visualisations, automatiser le reporting."},
            {"title": "Conduite du changement data", "desc": "Former les équipes, instaurer une culture data-driven, mesurer l'adoption des dashboards."},
            {"title": "Certifications data analytics", "desc": "Préparer Google Data Analytics, Microsoft Power BI, Tableau Desktop Specialist."},
            {"title": "Livrables & KPI data", "desc": "Dashboards, rapports automatisés, modèles prédictifs. KPI : gain de temps 70%, précision analyses +50%, adoption dashboards 80%."}
        ],
        "livrables": [
            "Dashboard interactif Power BI ou Tableau",
            "Scripts Python pour nettoyage et analyse automatisés",
            "Requêtes SQL optimisées pour extraction de données",
            "Rapport d'analyse prédictive (ventes, churn, inventaire)",
            "Modèle de segmentation client ou produit",
            "Documentation des KPI métier",
            "Bibliothèque de prompts IA pour analyse data"
        ],
        "debouches": [
            "Data Analyst",
            "Business Analyst",
            "Business Intelligence Analyst",
            "Data Scientist Junior",
            "Consultant Data & Analytics"
        ]
    },
    {
        "slug": "rh-performance-ia",
        "title": "RH & Performance — IA",
        "badge": "IA EMBARQUÉE",
        "hero_desc": "Recrutement augmenté, parcours formation personnalisés et prédiction du turnover avec l'IA.",
        "duree": "8 semaines",
        "cible": "Responsable RH, Recruteur, DRH",
        "publics": [
            {"title": "Recruteurs", "desc": "Tu passes des heures à trier des CV. Tu veux automatiser le screening et identifier les meilleurs talents plus vite. Ce parcours optimise ton recrutement avec l'IA."},
            {"title": "Responsables RH", "desc": "Tu gères la formation, la paie et la performance manuellement. Tu veux personnaliser les parcours de développement. Ce parcours digitalise ta fonction RH."},
            {"title": "DRH et HRBP", "desc": "Tu pilotes la stratégie RH. Tu veux anticiper le turnover, mesurer l'engagement et optimiser les talents. Ce parcours te donne des outils prédictifs."},
            {"title": "Consultants RH", "desc": "Tu accompagnes des organisations sur la transformation RH. Tu veux proposer des solutions data-driven. Ce parcours te forme aux RH augmentées."}
        ],
        "objectifs": [
            "Automatiser le screening de CV et l'identification de talents",
            "Construire des parcours de formation personnalisés avec l'IA",
            "Prédire le turnover et identifier les signaux faibles",
            "Mesurer l'engagement et la satisfaction des collaborateurs",
            "Optimiser les processus RH (recrutement, onboarding, évaluation)",
            "Créer des dashboards RH et suivre les KPI talents",
            "Appliquer les bonnes pratiques RGPD dans la gestion RH",
            "Piloter la performance individuelle et collective"
        ],
        "modules": [
            {"title": "Fondamentaux de la gestion RH", "desc": "Recrutement, GPEC, formation, évaluation, rémunération, engagement, droit du travail africain."},
            {"title": "Limites des RH traditionnelles", "desc": "Processus manuels, manque de personnalisation, turnover non anticipé, faible mesure de l'engagement."},
            {"title": "Innovations RH et SIRH modernes", "desc": "SIRH, ATS (Applicant Tracking Systems), LMS, plateformes d'engagement, outils d'évaluation 360°."},
            {"title": "IA embarquée dans les RH", "desc": "Screening CV automatisé, matching talents, prédiction turnover, personnalisation des parcours, chatbots RH."},
            {"title": "Mise en œuvre opérationnelle", "desc": "Prompts IA pour rédiger des fiches de poste, analyser des CV, créer des plans de développement personnalisés."},
            {"title": "Conduite du changement RH", "desc": "Former les managers, gérer les résistances, mesurer l'adoption des outils RH digitaux."},
            {"title": "Certifications RH internationales", "desc": "Préparer SHRM-CP, PHR, CIPD, ou certifications RH locales reconnues."},
            {"title": "Livrables & KPI RH", "desc": "Processus automatisés, dashboards RH, modèles prédictifs. KPI : time-to-hire -40%, turnover -25%, engagement +30%."}
        ],
        "livrables": [
            "Processus de recrutement automatisé (ATS + scoring IA)",
            "Parcours de formation personnalisés par profil",
            "Dashboard RH temps réel (turnover, engagement, performance)",
            "Modèle prédictif de turnover",
            "Plans de développement individuels générés par IA",
            "Questionnaires d'engagement et d'analyse automatisés",
            "Bibliothèque de prompts IA pour les RH"
        ],
        "debouches": [
            "Responsable Recrutement",
            "Responsable Formation et Développement",
            "HR Business Partner (HRBP)",
            "Directeur des Ressources Humaines (DRH)",
            "Consultant RH et Transformation"
        ]
    }
]

# Template HTML de base
def generate_parcours_page(parcours):
    html = f'''<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{parcours["title"]} | DigiSchool Africa</title>
  <meta name="description" content="Parcours {parcours["title"]}. {parcours["duree"]} pour maîtriser les compétences {parcours["cible"]} avec l'IA." />
  
  <meta property="og:title" content="{parcours["title"]} | DigiSchool Africa" />
  <meta property="og:description" content="{parcours["hero_desc"]}" />
  <meta property="og:url" content="https://digischool.africa/parcours/{parcours["slug"]}.html" />
  <link rel="canonical" href="https://digischool.africa/parcours/{parcours["slug"]}.html" />

  <style>
    :root{{
      --bg:#0f172a;
      --card: rgba(255,255,255,0.04);
      --card2: rgba(255,255,255,0.06);
      --card-hover: rgba(255,255,255,0.08);
      --border: rgba(255,255,255,0.12);
      --border-hover: rgba(255,255,255,0.24);
      --text:#ffffff;
      --muted: rgba(255,255,255,0.78);
      --muted2: rgba(255,255,255,0.62);
      --green:#22c55e;
      --green-glow: rgba(34,197,94,0.25);
      --blue:#3b82f6;
      --blue-glow: rgba(59,130,246,0.25);
    }}

    *{{ box-sizing:border-box; margin:0; padding:0; }}

    body{{
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }}

    .container{{
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }}

    .hero{{
      position: relative;
      text-align: center;
      margin-bottom: 60px;
      padding: 80px 30px;
      border-radius: 24px;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.98) 100%);
      border: 1px solid var(--border);
    }}

    .hero::before{{
      content: '';
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, var(--green-glow) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, var(--blue-glow) 0%, transparent 50%);
      animation: gradientShift 8s ease-in-out infinite;
      opacity: 0.6;
      z-index: 0;
    }}

    @keyframes gradientShift {{
      0%, 100% {{ transform: translate(0, 0) scale(1); }}
      25% {{ transform: translate(30px, -30px) scale(1.1); }}
      50% {{ transform: translate(-30px, 30px) scale(0.9); }}
      75% {{ transform: translate(30px, 30px) scale(1.05); }}
    }}

    .hero-content{{
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
    }}

    .hero-badge{{
      display: inline-block;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 20px;
      background: rgba(34,197,94,0.15);
      color: var(--green);
      border: 1px solid rgba(34,197,94,0.3);
    }}

    .hero h1{{
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #ffffff 0%, var(--green) 50%, var(--blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.2;
    }}

    .hero p{{
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 700px;
      margin: 0 auto 32px;
      line-height: 1.7;
    }}

    .hero-meta{{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin-bottom: 32px;
      font-size: 0.95rem;
      color: var(--muted);
    }}

    .hero-meta span{{
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .hero-actions{{
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }}

    .btn{{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }}

    .btn-primary{{
      background: var(--green);
      color: #000;
      box-shadow: 0 0 24px var(--green-glow);
    }}

    .btn-primary:hover{{
      transform: translateY(-2px);
      box-shadow: 0 8px 32px var(--green-glow);
    }}

    .btn-secondary{{
      background: var(--card2);
      color: var(--text);
      border: 1px solid var(--border);
    }}

    .btn-secondary:hover{{
      background: var(--card-hover);
      border-color: var(--border-hover);
      transform: translateY(-2px);
    }}

    .section{{
      margin-bottom: 60px;
    }}

    .section-title{{
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 20px;
      color: var(--text);
    }}

    .section-subtitle{{
      font-size: 1.1rem;
      color: var(--muted);
      margin-bottom: 32px;
      line-height: 1.7;
    }}

    .card{{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
      margin-bottom: 24px;
    }}

    .card h3{{
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: var(--text);
    }}

    .card p{{
      font-size: 1rem;
      color: var(--muted2);
      margin-bottom: 16px;
      line-height: 1.7;
    }}

    .card ul{{
      list-style: none;
      padding: 0;
      margin: 16px 0;
    }}

    .card ul li{{
      padding: 8px 0 8px 28px;
      position: relative;
      color: var(--muted);
      line-height: 1.6;
    }}

    .card ul li::before{{
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--green);
      font-weight: 700;
    }}

    .two-cols{{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }}

    .cta-box{{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 48px 32px;
      text-align: center;
      margin: 60px 0;
    }}

    .cta-box h2{{
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 16px;
      color: var(--text);
    }}

    .cta-box p{{
      font-size: 1.1rem;
      color: var(--muted);
      margin-bottom: 32px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }}

    .footer{{
      background: var(--card);
      border-top: 1px solid var(--border);
      padding: 40px 20px;
      margin-top: 60px;
    }}

    .footer-content{{
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }}

    .footer-links{{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-bottom: 24px;
      font-size: 0.9rem;
    }}

    .footer-links a{{
      color: var(--muted);
      text-decoration: none;
      transition: color 0.3s ease;
    }}

    .footer-links a:hover{{
      color: var(--green);
    }}

    .footer-bottom{{
      font-size: 0.85rem;
      color: var(--muted2);
    }}

    .footer-bottom a{{
      color: var(--green);
      text-decoration: none;
    }}

    @media (max-width: 768px) {{
      .hero h1{{ font-size: 2.2rem; }}
      .hero p{{ font-size: 1.05rem; }}
      .section-title{{ font-size: 1.6rem; }}
      .two-cols{{ grid-template-columns: 1fr; }}
    }}
  </style>
</head>
<body>

  <div class="container">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">{parcours["badge"]}</div>
        <h1>{parcours["title"]}</h1>
        <p>{parcours["hero_desc"]}</p>
        <div class="hero-meta">
          <span>⏱ Durée : {parcours["duree"]}</span>
          <span>📊 6-8 heures/semaine</span>
          <span>🎯 {parcours["cible"]}</span>
        </div>
        <div class="hero-actions">
          <a href="../proforma.html?from={parcours["slug"]}" class="btn btn-primary">Générer une proforma</a>
          <a href="../parcours.html" class="btn btn-secondary">Voir tous les parcours</a>
        </div>
      </div>
    </section>

    <!-- À QUI S'ADRESSE CE PARCOURS -->
    <section class="section">
      <h2 class="section-title">À qui s'adresse ce parcours</h2>
      <div class="two-cols">
'''
    
    for public in parcours["publics"]:
        html += f'''        <div class="card">
          <h3>{public["title"]}</h3>
          <p>{public["desc"]}</p>
        </div>
'''
    
    html += f'''      </div>
    </section>

    <!-- OBJECTIFS PROFESSIONNELS -->
    <section class="section">
      <h2 class="section-title">Ce que tu sauras faire à la fin</h2>
      <div class="card">
        <ul>
'''
    
    for obj in parcours["objectifs"]:
        html += f'''          <li>{obj}</li>
'''
    
    html += f'''        </ul>
      </div>
    </section>

    <!-- PROGRAMME DÉTAILLÉ -->
    <section class="section">
      <h2 class="section-title">Programme détaillé (8 modules)</h2>
      <p class="section-subtitle">
        Chaque module combine 40% d'apports structurés et 60% de pratique sur des projets fil rouge inspirés de cas africains.
      </p>
'''
    
    for i, module in enumerate(parcours["modules"], 1):
        html += f'''      <div class="card">
        <h3>Module {i} : {module["title"]}</h3>
        <p>{module["desc"]}</p>
      </div>
'''
    
    html += f'''    </section>

    <!-- LIVRABLES FINAUX -->
    <section class="section">
      <h2 class="section-title">Livrables professionnels finaux</h2>
      <div class="card">
        <ul>
'''
    
    for livrable in parcours["livrables"]:
        html += f'''          <li>{livrable}</li>
'''
    
    html += f'''        </ul>
      </div>
    </section>

    <!-- FORMATS -->
    <section class="section">
      <h2 class="section-title">Formats disponibles</h2>
      <div class="two-cols">
        <div class="card">
          <h3>Intra-entreprise</h3>
          <p>Formation sur mesure pour vos équipes dans vos locaux ou en distanciel. Adaptation des cas métier à votre contexte.</p>
        </div>
        <div class="card">
          <h3>Inter-entreprises</h3>
          <p>Cohorte de 15-20 professionnels de différentes organisations. Sessions live en ligne, forum privé et networking.</p>
        </div>
        <div class="card">
          <h3>Bootcamp intensif</h3>
          <p>Format accéléré de 5 jours en présentiel ou 10 demi-journées en distanciel. Projet intensif avec livrables finaux.</p>
        </div>
        <div class="card">
          <h3>Blended (hybride)</h3>
          <p>Combinaison de modules en ligne asynchrones et de sessions live. Flexibilité maximale tout en gardant l'accompagnement mentor.</p>
        </div>
      </div>
    </section>

    <!-- DÉBOUCHÉS -->
    <section class="section">
      <h2 class="section-title">Débouchés professionnels</h2>
      <div class="card">
        <ul>
'''
    
    for debouche in parcours["debouches"]:
        html += f'''          <li>{debouche}</li>
'''
    
    html += f'''        </ul>
      </div>
    </section>

    <!-- CTA FINAL -->
    <div class="cta-box">
      <h2>Générer une proforma pour ce parcours</h2>
      <p>
        Décris ton contexte et tes objectifs. Nous te répondons sous 48 heures avec une offre technique et financière personnalisée.
      </p>
      <div class="hero-actions">
        <a href="../proforma.html?from={parcours["slug"]}-cta" class="btn btn-primary">Générer une proforma</a>
        <a href="https://wa.me/2250505111102?text=Bonjour%20DigiSchool%20Africa%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20le%20parcours%20{parcours["slug"]}.%0AMerci%20!" target="_blank" rel="noopener" class="btn btn-secondary">WhatsApp Direct</a>
      </div>
      <p style="margin-top: 24px; font-size: 0.95rem; color: var(--muted2);">
        📧 support@digischool.africa • 📞 +225 05 05 11 11 02
      </p>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="../index.html">Accueil</a>
        <span style="color: var(--border);">|</span>
        <a href="../contact.html">Contact</a>
        <span style="color: var(--border);">|</span>
        <a href="../parcours.html">Parcours</a>
        <span style="color: var(--border);">|</span>
        <a href="../companies.html">Entreprises (B2B)</a>
        <span style="color: var(--border);">|</span>
        <a href="../mentions-legales.html">Mentions légales</a>
        <span style="color: var(--border);">|</span>
        <a href="../cgu.html">CGU</a>
        <span style="color: var(--border);">|</span>
        <a href="../cgv.html">CGV</a>
        <span style="color: var(--border);">|</span>
        <a href="../politique-confidentialite.html">Politique de confidentialité</a>
      </div>
      <p class="footer-bottom">
        © 2026 DigiSchool Africa — propriété de <a href="https://www.mydigilab.io" target="_blank" rel="noopener">DigiLab</a>
      </p>
    </div>
  </footer>

  <!-- Lead Events Tracking -->
  <script src="../lead-events.js"></script>

</body>
</html>
'''
    
    return html

# Générer les 3 premiers parcours
for parcours in parcours_data:
    filename = f"/home/user/webapp/parcours/{parcours['slug']}.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(generate_parcours_page(parcours))
    print(f"✓ Créé : {filename}")

print("\n✅ 3 pages parcours créées avec succès!")
print("Pages : finance-ia.html, data-analytics-ia.html, rh-performance-ia.html")
