// Script d'extension des 8 parcours B2C manquants dans courses-content.js

const fs = require('fs');
const path = require('path');

const newFormations = `
    // LEADERSHIP & MANAGEMENT
    'leadership-management': {
      id: 'leadership-management',
      title: 'Leadership & Management d\'Équipe',
      duration: '8 jours',
      totalModules: 4,
      level: 'Professionnel',
      certification: 'Certificat DigiSchool Leadership',
      
      description: 'Devenez un leader inspirant et efficace. Maîtrisez communication, gestion de conflit, motivation et stratégie d\'équipe.',
      
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
                theory: '<h3>Styles de Leadership (Goleman)</h3><ul><li><strong>Directif</strong>: Commandement clair en situation de crise</li><li><strong>Visionnaire</strong>: Inspire et mobilise vers une vision commune</li><li><strong>Participatif</strong>: Implique l\\'équipe dans les décisions</li><li><strong>Coach</strong>: Développe les talents individuels</li><li><strong>Pacificateur</strong>: Crée harmonie et relations</li></ul>',
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
              competences: ['Maîtriser la communication non-violente', 'S\\'affirmer sans agressivité', 'Dire non avec diplomatie'],
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
                theory: '<h3>Syntaxe SQL Essentielle</h3><pre>SELECT colonne1, colonne2, COUNT(*) as total\\nFROM table1\\nINNER JOIN table2 ON table1.id = table2.fk_id\\nWHERE condition = \\'valeur\\'\\nGROUP BY colonne1, colonne2\\nHAVING COUNT(*) > 10\\nORDER BY total DESC\\nLIMIT 100;</pre><h4>Types de Jointures</h4><ul><li><strong>INNER JOIN</strong>: Seulement lignes correspondantes</li><li><strong>LEFT JOIN</strong>: Toutes lignes table gauche + correspondances droite</li><li><strong>RIGHT JOIN</strong>: Toutes lignes table droite + correspondances gauche</li><li><strong>FULL OUTER JOIN</strong>: Toutes lignes des deux tables</li></ul>',
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
                theory: '<h3>Pandas Essentials</h3><pre>import pandas as pd\\nimport numpy as np\\n\\n# Charger données\\ndf = pd.read_csv(\\'data.csv\\')\\n\\n# Explorer\\ndf.head()\\ndf.info()\\ndf.describe()\\n\\n# Nettoyer\\ndf.dropna()  # Supprimer valeurs manquantes\\ndf.fillna(0)  # Remplacer par 0\\ndf[\\'colonne\\'].astype(\\'int\\')  # Changer type\\n\\n# Grouper et agréger\\ndf.groupby(\\'categorie\\')[\\'ventes\\'].sum()\\ndf.pivot_table(values=\\'ventes\\', index=\\'mois\\', columns=\\'produit\\', aggfunc=\\'sum\\')</pre>',
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
              competences: ['Calculer moyenne, médiane, écart-type', 'Tests d\\'hypothèse (t-test, chi2)', 'Corrélation et régression linéaire'],
              content: {
                theory: '<h3>Mesures de Tendance Centrale</h3><ul><li><strong>Moyenne</strong>: Somme valeurs / nombre valeurs</li><li><strong>Médiane</strong>: Valeur centrale (50e percentile)</li><li><strong>Mode</strong>: Valeur la plus fréquente</li></ul><h3>Tests d\\'Hypothèse</h3><table border="1"><tr><th>Test</th><th>Usage</th></tr><tr><td>t-test</td><td>Comparer moyennes de 2 groupes</td></tr><tr><td>ANOVA</td><td>Comparer moyennes 3+ groupes</td></tr><tr><td>Chi2</td><td>Indépendance variables catégorielles</td></tr></table>',
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
                theory: '<h3>Bonnes Pratiques Visualisation</h3><ul><li><strong>Choix graphique</strong>: Barres (comparaison), Lignes (évolution temps), Scatter (corrélation)</li><li><strong>Couleurs</strong>: Max 5-7 couleurs, accessible daltoniens</li><li><strong>Titres clairs</strong>: Insight principal en évidence</li><li><strong>Éviter 3D/camemberts</strong>: Difficiles à lire</li></ul><h3>DAX Basique</h3><pre>Total Ventes = SUM(Table[Ventes])\\nVentes Année Précédente = CALCULATE([Total Ventes], SAMEPERIODLASTYEAR(Date[Date]))\\n% Croissance = DIVIDE([Total Ventes] - [Ventes Année Précédente], [Ventes Année Précédente], 0)</pre>',
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
                theory: '<h3>Structure Présentation Data</h3><ol><li><strong>Contexte</strong>: Quel problème business?</li><li><strong>Question</strong>: Quelle question analyser?</li><li><strong>Méthodologie</strong>: Comment données collectées/analysées?</li><li><strong>Insights</strong>: Top 3 découvertes clés</li><li><strong>Recommandations</strong>: Actions concrètes à prendre</li><li><strong>Next Steps</strong>: Plan d\\'action</li></ol>',
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
                theory: '<h3>INDEX-MATCH (Alternative VLOOKUP)</h3><pre>=INDEX(plage_retour, MATCH(valeur_cherchée, plage_recherche, 0))</pre><p><strong>Avantages INDEX-MATCH</strong>:</p><ul><li>Recherche dans n\\'importe quelle direction</li><li>Plus rapide sur grands datasets</li><li>Pas d\\'erreur si colonnes ajoutées/supprimées</li></ul><h3>XLOOKUP (Excel 365)</h3><pre>=XLOOKUP(valeur, plage_recherche, plage_retour, [si_non_trouvé], [mode_correspondance])</pre>',
                deliverables: ['Workbook 50 formules types', 'Cheat sheet formules Excel']
              }
            },
            {
              id: 'cours-1-2',
              title: 'Formules Matricielles (Array Formulas)',
              competences: ['FILTER, SORT, UNIQUE (Excel 365)', 'SUMPRODUCT pour calculs conditionnels', 'Formules dynamiques'],
              content: {
                theory: '<h3>Dynamic Arrays (Excel 365)</h3><pre>=FILTER(plage, critère_plage=critère)\\n=SORT(plage, colonne_index, ordre)\\n=UNIQUE(plage)</pre><h3>SUMPRODUCT</h3><pre>=SUMPRODUCT((A2:A100="Produit A")*(B2:B100>1000)*C2:C100)</pre><p>Équivalent à SUMIFS mais plus flexible.</p>',
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
                theory: '<h3>Transformations Power Query</h3><ul><li><strong>Supprimer colonnes/lignes</strong>: Nettoyer données inutiles</li><li><strong>Fractionner colonnes</strong>: Par délimiteur, position</li><li><strong>Pivoter/Dépivoter</strong>: Restructurer données</li><li><strong>Fusionner requêtes</strong>: Équivalent JOIN SQL</li></ul><h3>M Language Basique</h3><pre>let\\n  Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],\\n  FilteredRows = Table.SelectRows(Source, each [Ventes] > 1000),\\n  AddedColumn = Table.AddColumn(FilteredRows, "Marge", each [Ventes] - [Coûts])\\nin\\n  AddedColumn</pre>',
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
                theory: '<h3>Structure Macro VBA</h3><pre>Sub MonRapportAuto()\\n  Dim ws As Worksheet\\n  Set ws = ThisWorkbook.Sheets("Data")\\n  \\n  \\' Supprimer lignes vides\\n  ws.Range("A:Z").SpecialCells(xlCellTypeBlanks).EntireRow.Delete\\n  \\n  \\' Créer TCD\\n  Dim pc As PivotCache\\n  Set pc = ThisWorkbook.PivotCaches.Create(xlDatabase, ws.Range("A1").CurrentRegion)\\n  pc.CreatePivotTable TableDestination:=Sheets("Rapport").Range("A3"), TableName:="TCD1"\\nEnd Sub</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer code VBA pour automatiser tâches répétitives'}],
                deliverables: ['10 macros types prêtes à l\\'emploi']
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
                theory: '<h3>Mesure DAX</h3><pre>Total Ventes = SUM(Ventes[Montant])</pre><p><strong>Caractéristiques</strong>: Calculé dynamiquement selon contexte filtres.</p><h3>Colonne Calculée</h3><pre>Marge = Ventes[Montant] - Ventes[Coût]</pre><p><strong>Caractéristiques</strong>: Calculé ligne par ligne, stocké dans modèle (consomme RAM).</p><h3>Variables VAR</h3><pre>Profit Margin % = \\nVAR TotalRevenue = SUM(Ventes[Montant])\\nVAR TotalCost = SUM(Ventes[Coût])\\nRETURN\\n  DIVIDE(TotalRevenue - TotalCost, TotalRevenue, 0)</pre>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer mesures DAX complexes avec contexte business'}]
              }
            },
            {
              id: 'cours-2-2',
              title: 'Time Intelligence DAX',
              competences: ['Calculs Year-to-Date (YTD)', 'Comparaisons période précédente', 'Moving averages'],
              content: {
                theory: '<h3>Time Intelligence Functions</h3><pre>Ventes YTD = TOTALYTD([Total Ventes], Dates[Date])\\n\\nVentes Mois Précédent = CALCULATE([Total Ventes], PREVIOUSMONTH(Dates[Date]))\\n\\nVentes Année Précédente = CALCULATE([Total Ventes], SAMEPERIODLASTYEAR(Dates[Date]))\\n\\nCroissance YoY % = \\nDIVIDE([Total Ventes] - [Ventes Année Précédente], [Ventes Année Précédente], 0)</pre>',
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
      
      description: 'Maîtrisez SEO, SEA, Social Media, Email Marketing et Growth Hacking. Boostez acquisition et conversion avec l\\'IA.',
      
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
                theory: '<h3>Structure Campagne Google Ads</h3><pre>Compte\\n└── Campagne (objectif: leads, ventes, trafic)\\n    ├── Groupe d\\'annonces 1 (thème spécifique)\\n    │   ├── Mots-clés (10-20 max)\\n    │   └── Annonces (3 minimum)\\n    └── Groupe d\\'annonces 2</pre><h3>Quality Score (1-10)</h3><p>Détermine CPC et position annonce. Facteurs:</p><ul><li><strong>CTR attendu</strong>: Taux de clic historique</li><li><strong>Pertinence annonce</strong>: Mots-clés dans annonce</li><li><strong>Landing page experience</strong>: Vitesse, pertinence, mobile-friendly</li></ul>',
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
                theory: '<h3>Workflows Email Types</h3><ul><li><strong>Welcome Series</strong>: 3-5 emails nouveaux inscrits (présentation, valeur, offre)</li><li><strong>Lead Nurturing</strong>: Éduquer prospects jusqu\\'à achat</li><li><strong>Abandon Panier</strong>: Rappel produits laissés (récupérer 10-30% ventes perdues)</li><li><strong>Réactivation</strong>: Ré-engager inactifs (30+ jours)</li></ul><h3>Optimisation Objet Email</h3><ul><li><strong>Longueur</strong>: 40-50 caractères (mobile)</li><li><strong>Personnalisation</strong>: Prénom, entreprise (↑22% taux ouverture)</li><li><strong>Curiosité/Urgence</strong>: "Dernières heures", "Ne ratez pas"</li><li><strong>A/B Testing</strong>: Tester 2 objets, garder meilleur</li></ul>',
                aiTools: [{name: 'ChatGPT', usage: 'Générer séquence 5 emails nurturing pour [persona]'}],
                deliverables: ['5 workflows email prêts à l\\'emploi', 'Guide segmentation base']
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
    }
  `;

// Lire le fichier existant
const filePath = path.join(__dirname, 'assets', 'courses-content.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Trouver le commentaire "À étendre pour les 8 autres formations..."
const insertMarker = '// À étendre pour les 8 autres formations...';
const insertPos = content.indexOf(insertMarker);

if (insertPos === -1) {
  console.error('❌ Marker not found');
  process.exit(1);
}

// Insérer les nouvelles formations
content = content.substring(0, insertPos) + ',\n' + newFormations.trim() + '\n    \n    ' + content.substring(insertPos);

// Écrire le fichier
fs.writeFileSync(filePath, content, 'utf-8');

console.log('✅ 5 formations B2C ajoutées (Leadership, Data Analytics, Excel, Power BI, Marketing Digital)');
console.log('📊 Taille fichier:', Math.round(fs.statSync(filePath).size / 1024), 'KB');

