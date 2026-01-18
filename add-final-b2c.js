const fs = require('fs');
const path = require('path');

const final3Formations = `
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
                theory: '<h3>Recherche Booléenne LinkedIn</h3><pre>(\"Data Scientist\" OR \"Data Analyst\") AND (Python OR R) AND Paris</pre><h3>ATS Workflow</h3><ol><li><strong>Sourcing</strong>: Diffusion offre multi-canal</li><li><strong>Tri automatique</strong>: IA filtre CV selon critères</li><li><strong>Tests/Entretiens</strong>: Planification automatisée</li><li><strong>Collaboration</strong>: Feedback équipe recrutement</li><li><strong>Reporting</strong>: KPI (time-to-hire, cost-per-hire)</li></ol>',
                aiTools: [{name: 'ChatGPT', usage: 'Rédiger descriptions de poste optimisées SEO et inclusives'}],
                deliverables: ['Templates offres emploi', 'Guide recherche booléenne avancée']
              }
            },
            {
              id: 'cours-1-2',
              title: 'Marque Employeur',
              competences: ['Définir Employee Value Proposition (EVP)', 'Créer contenu RH (vidéos, témoignages)', 'Optimiser pages carrières'],
              content: {
                theory: '<h3>EVP (Employee Value Proposition)</h3><p><strong>Formule</strong>: Ce que l\\'entreprise offre (compensation, culture, développement, impact) en échange de l\\'engagement collaborateur.</p><h3>Piliers Marque Employeur</h3><ul><li><strong>Salaire & Avantages</strong>: Compétitif + flexibilité</li><li><strong>Culture</strong>: Valeurs, ambiance, inclusion</li><li><strong>Développement</strong>: Formation, évolution carrière</li><li><strong>Impact</strong>: Mission, RSE</li></ul>',
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
                theory: '<h3>Structure SCR (Pyramid Principle - McKinsey)</h3><ol><li><strong>Situation</strong>: Contexte, état actuel</li><li><strong>Complication</strong>: Problème, enjeu, opportunité</li><li><strong>Résolution</strong>: Solution proposée, plan d\\'action</li></ol><h3>Exemple Pitch Commercial</h3><ul><li><strong>Situation</strong>: \"Votre équipe passe 20h/sem sur reporting manuel\"</li><li><strong>Complication</strong>: \"Coût 50k€/an + risque erreurs\"</li><li><strong>Résolution</strong>: \"Notre outil automatise 80% du reporting → ROI 6 mois\"</li></ul>',
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
                theory: '<h3>Masque de Diapositives</h3><p><strong>Avantages</strong>:</p><ul><li>Uniformité graphique automatique</li><li>Gain temps (logos, footers, mise en page prédéfinis)</li><li>Facilité maintenance (1 modif = toutes slides)</li></ul><h3>VBA Automatisation</h3><pre>Sub GenererSlidesDonnees()\\n  Dim pres As Presentation\\n  Set pres = ActivePresentation\\n  \\n  \\' Lire données Excel\\n  Dim xlApp As Object, xlWb As Object\\n  Set xlApp = CreateObject(\"Excel.Application\")\\n  Set xlWb = xlApp.Workbooks.Open(\"data.xlsx\")\\n  \\n  \\' Créer slides pour chaque ligne\\n  For i = 2 To xlWb.Sheets(1).UsedRange.Rows.Count\\n    Set newSlide = pres.Slides.Add(pres.Slides.Count + 1, ppLayoutText)\\n    newSlide.Shapes(1).TextFrame.TextRange.Text = xlWb.Sheets(1).Cells(i, 1).Value\\n  Next i\\nEnd Sub</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer contenu 30 slides pour [sujet] avec structure et bullets'}],
                deliverables: ['Template master slides entreprise', 'Scripts VBA automatisation']
              }
            },
            {
              id: 'cours-3-2',
              title: 'Techniques de Présentation',
              competences: ['Gérer transitions et animations (sans surcharge)', 'Mode présentateur et notes', 'Préparer et répéter pitch'],
              content: {
                theory: '<h3>Animations: Moins c\\'est Mieux</h3><ul><li><strong>Animations sobres</strong>: Fade, wipe (éviter rebonds, rotations)</li><li><strong>Objectif</strong>: Guider attention, pas distraire</li><li><strong>Timing</strong>: 0.3-0.5s par animation</li></ul><h3>Préparation Présentation</h3><ol><li><strong>Répétition</strong>: 3-5 fois minimum à voix haute</li><li><strong>Timing</strong>: 1-2 min par slide (adapter selon audience)</li><li><strong>Backup plan</strong>: Prévoir questions difficiles, slides annexes</li><li><strong>Check technique</strong>: Projeter en conditions réelles</li></ol>',
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
`;

const filePath = path.join(__dirname, 'assets', 'courses-content.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Trouver où insérer (après Marketing Digital)
const insertAfter = "'marketing-digital'";
const regex = new RegExp(`(${insertAfter}:\\s*\\{[^}]*\\}[\\s\\S]*?accessibility:\\s*\\{[^}]*\\}[\\s\\S]*?\\})`, 'g');

content = content.replace(regex, (match) => {
  return match + ',\n' + final3Formations.trim();
});

fs.writeFileSync(filePath, content, 'utf-8');

console.log('✅ 3 formations B2C finales ajoutées (Transformation Digitale, RH, PowerPoint)');
console.log('📊 Taille fichier totale:', Math.round(fs.statSync(filePath).size / 1024), 'KB');
console.log('🎉 TOTAL: 9 parcours B2C complets (PMP + 8 autres)');

