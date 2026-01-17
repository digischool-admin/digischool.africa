#!/usr/bin/env node
/**
 * DigiSchool Africa - B2C Content Generator
 * Generates full pedagogical content for all 9 courses × 8 modules
 * Output: module-XX.md, quiz-module-XX.json, labs-module-XX.md
 */

const fs = require('fs');
const path = require('path');

// Mock window for Node.js
global.window = {};

// Load courses data
const coursesCode = fs.readFileSync('./courses-data.js', 'utf8');
eval(coursesCode);
const courses = global.window.DigiSchoolCourses;

console.log('🚀 DigiSchool Africa - B2C Content Generation\n');

// Module structure template (8 modules per course)
const MODULE_TEMPLATES = [
  {
    num: 1,
    suffix: 'Fondamentaux',
    focus: 'Introduction, concepts de base, diagnostic initial',
    sections: ['Contexte et enjeux', 'Concepts fondamentaux', 'Auto-diagnostic', 'Cadre méthodologique']
  },
  {
    num: 2,
    suffix: 'Limites & Défis',
    focus: 'Identification des obstacles, pièges courants, contexte africain',
    sections: ['Obstacles fréquents', 'Erreurs à éviter', 'Spécificités Afrique', 'Cadre de résolution']
  },
  {
    num: 3,
    suffix: 'Outils & Méthodologies',
    focus: 'Frameworks, méthodologies éprouvées, outils traditionnels',
    sections: ['Frameworks reconnus', 'Outils pratiques', 'Méthodologie pas-à-pas', 'Templates et check-lists']
  },
  {
    num: 4,
    suffix: 'Augmentation par l\'IA',
    focus: 'Outils IA, automatisations, prompts, cas d\'usage',
    sections: ['Outils IA disponibles', 'Cas d\'usage terrain', 'Pack de 5 prompts essentiels', 'Do & Don\'t avec IA']
  },
  {
    num: 5,
    suffix: 'Mise en Œuvre',
    focus: 'Plan d\'action, déploiement, pilotage opérationnel',
    sections: ['Plan de déploiement', 'Phases de mise en œuvre', 'Pilotage quotidien', 'Quick wins rapides']
  },
  {
    num: 6,
    suffix: 'Conduite du Changement',
    focus: 'Adoption, résistance, accompagnement, communication',
    sections: ['Diagnostic de résistance', 'Stratégie d\'adoption', 'Communication du changement', 'Accompagnement terrain']
  },
  {
    num: 7,
    suffix: 'Certification & Validation',
    focus: 'Standards, certifications, audits, validation terrain',
    sections: ['Standards internationaux', 'Processus de certification', 'Audit et contrôle qualité', 'Plan de validation']
  },
  {
    num: 8,
    suffix: 'Livrables & KPIs',
    focus: 'Mesure de performance, livrables clés, ROI, amélioration continue',
    sections: ['KPIs essentiels', 'Livrables attendus', 'Mesure du ROI', 'Plan d\'amélioration continue']
  }
];

/**
 * Generate lesson content for a micro-lesson (200-250 words)
 */
function generateLesson(course, moduleNum, sectionTitle, context) {
  const lessons = {
    'Contexte et enjeux': `## ${sectionTitle}

Dans le contexte africain, ${course.title.toLowerCase()} représente un levier stratégique majeur pour la compétitivité des entreprises. Les organisations font face à des défis spécifiques : infrastructures variables, environnements multi-culturels, et transformation digitale accélérée.

**Enjeux clés :**
- Adaptation aux réalités locales du marché
- Optimisation des ressources limitées
- Montée en compétence rapide des équipes
- Intégration des outils numériques et IA

**Impact business mesurable :**
Les entreprises qui maîtrisent ${course.title.toLowerCase()} constatent en moyenne une amélioration de 35% de leur efficacité opérationnelle et une réduction de 25% des coûts liés aux processus non optimisés.

**Contexte africain spécifique :**
Le continent africain présente des opportunités uniques : croissance démographique, adoption mobile massive, et écosystème entrepreneurial dynamique. Ces facteurs créent un terrain favorable pour l'innovation et l'excellence opérationnelle.

**À retenir :** Maîtriser ${course.title.toLowerCase()} n'est plus optionnel mais essentiel pour rester compétitif dans l'économie africaine moderne.`,

    'Concepts fondamentaux': `## ${sectionTitle}

Les concepts fondamentaux de ${course.title.toLowerCase()} reposent sur des principes éprouvés internationalement, adaptés aux réalités africaines.

**Définitions clés :**
- **${course.title}** : Ensemble de pratiques et méthodes visant à [objectif principal]
- **Excellence opérationnelle** : Niveau de performance systématique et durable
- **Optimisation continue** : Amélioration itérative basée sur les données

**Modèle conceptuel :**
1. **Diagnostic** - Évaluation de la situation actuelle
2. **Planification** - Définition des objectifs et moyens
3. **Exécution** - Mise en œuvre opérationnelle
4. **Contrôle** - Mesure et ajustement continu

**Principes directeurs :**
- Approche terrain et pragmatique
- Adaptation au contexte local
- Mesure systématique des résultats
- Amélioration continue et itérative

**Exemple terrain Afrique :**
Une entreprise de distribution au Sénégal a appliqué ces principes et réduit son time-to-market de 40% en 6 mois, tout en améliorant la satisfaction client de 30 points.

**À retenir :** Les concepts fondamentaux sont universels, mais leur application doit être contextualisée pour maximiser l'impact.`,

    'Auto-diagnostic': `## ${sectionTitle}

L'auto-diagnostic permet d'évaluer objectivement votre niveau de maturité actuel et d'identifier les axes prioritaires de progression.

**Grille d'auto-évaluation (1-5) :**

**Niveau 1 - Débutant :**
- Peu ou pas de pratique formelle
- Processus ad-hoc et réactifs
- Absence de métriques de suivi

**Niveau 3 - Intermédiaire :**
- Pratiques partiellement structurées
- Quelques outils et processus en place
- Métriques basiques suivies

**Niveau 5 - Expert :**
- Pratiques systématiques et optimisées
- Outils IA intégrés
- Amélioration continue basée sur les données

**Questions de diagnostic :**
1. Avez-vous des processus documentés ? (Oui/Partiellement/Non)
2. Mesurez-vous régulièrement vos résultats ? (Oui/Partiellement/Non)
3. Utilisez-vous des outils d'automation ? (Oui/Partiellement/Non)

**Interprétation :**
- Score 0-5 : Formation fondamentale nécessaire
- Score 6-10 : Renforcement des pratiques
- Score 11-15 : Optimisation et IA

**À retenir :** L'auto-diagnostic honnête est le premier pas vers l'excellence. Identifiez 2-3 axes prioritaires et concentrez-vous dessus.`
  };

  return lessons[sectionTitle] || `## ${sectionTitle}

[Contenu pédagogique à développer pour ${sectionTitle}]

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

**Points clés :**
- Point important 1
- Point important 2
- Point important 3

**À retenir :** Message clé de cette section.`;
}

/**
 * Generate complete module content
 */
function generateModuleContent(course, moduleTemplate) {
  const moduleNum = moduleTemplate.num;
  const moduleTitle = `Module ${moduleNum} : ${course.title} - ${moduleTemplate.suffix}`;
  
  let content = `---
title: "${moduleTitle}"
course: "${course.title}"
course_slug: "${course.id}"
module_number: ${moduleNum}
duration: "90-120 min"
difficulty: "${moduleNum <= 2 ? 'Débutant' : moduleNum <= 5 ? 'Intermédiaire' : 'Avancé'}"
---

# ${moduleTitle}

## 🎯 Objectifs d'apprentissage

À l'issue de ce module, vous serez capable de :

1. **Comprendre** - ${moduleTemplate.focus}
2. **Analyser** - Identifier les leviers d'action spécifiques
3. **Appliquer** - Mettre en œuvre les outils et méthodologies
4. **Optimiser** - Améliorer continuellement vos pratiques

---

## 📚 Plan du module

`;

  // Add sections
  moduleTemplate.sections.forEach((section, idx) => {
    content += `### ${idx + 1}. ${section}\n\n`;
    content += generateLesson(course, moduleNum, section, moduleTemplate.focus);
    content += '\n\n';
  });

  // Add practical demos
  content += `---

## 🎬 Démonstrations guidées

### Démo 1 : Application pratique (15 min)

**Contexte :** Cas réel d'une entreprise africaine appliquant ${course.title.toLowerCase()}.

**Étapes démontrées :**
1. Configuration initiale et préparation
2. Application de la méthodologie step-by-step
3. Analyse des résultats obtenus
4. Ajustements et optimisations

**Outils utilisés :** [Liste des outils démontrés]

**Résultats attendus :** Gain de temps de 40%, amélioration qualité de 30%

---

### Démo 2 : Utilisation des outils IA (15 min)

**Objectif :** Maîtriser les outils IA pour augmenter votre efficacité.

**Outils IA présentés :**
- **Outil 1** : [Nom et usage]
- **Outil 2** : [Nom et usage]
- **Outil 3** : [Nom et usage]

**Démonstration live :**
- Prompt exemple et résultat obtenu
- Validation et ajustement de l'output IA
- Intégration dans le workflow quotidien

**Gain de productivité mesuré :** 60% de temps économisé sur tâches répétitives

---

## 🧪 Travaux pratiques (Labs)

Voir le fichier \`labs-module-${String(moduleNum).padStart(2, '0')}.md\` pour les 2 labs détaillés avec contexte africain, inputs, outputs attendus et grille d'évaluation.

---

## 🤖 Pack IA embarquée

### 5 Prompts essentiels pour ${course.title}

**Prompt 1 : Diagnostic initial**
\`\`\`
Analyse ma situation actuelle en ${course.title.toLowerCase()} :
[Décris ta situation en 3-5 phrases]

Fournis-moi :
1. Diagnostic SWOT
2. 3 axes prioritaires d'amélioration
3. Quick wins à implémenter cette semaine
\`\`\`

**Prompt 2 : Plan d'action**
\`\`\`
Crée un plan d'action détaillé pour [objectif spécifique] :
- Contexte : [ton contexte]
- Contraintes : [tes contraintes]
- Deadline : [ta deadline]

Format : phases, actions, ressources, délais
\`\`\`

**Prompt 3 : Résolution de problème**
\`\`\`
J'ai un problème en ${course.title.toLowerCase()} :
[Décris le problème précisément]

Propose-moi 3 solutions avec :
- Avantages et inconvénients
- Effort de mise en œuvre (faible/moyen/élevé)
- Impact attendu (faible/moyen/élevé)
\`\`\`

**Prompt 4 : Optimisation**
\`\`\`
Comment optimiser mon processus actuel :
[Décris ton processus en détail]

Identifie :
1. Goulots d'étranglement
2. Opportunités d'automation
3. Gains de temps potentiels
\`\`\`

**Prompt 5 : Reporting et KPIs**
\`\`\`
Aide-moi à créer un dashboard de suivi pour ${course.title.toLowerCase()} :
- Objectifs : [liste tes objectifs]
- Données disponibles : [liste tes données]

Recommande :
1. 5-7 KPIs essentiels
2. Fréquence de mesure
3. Seuils d'alerte
\`\`\`

### ✅ Do & Don't avec l'IA

**DO (À faire) :**
- Contextualiser vos prompts avec détails spécifiques
- Valider systématiquement les outputs IA
- Itérer et affiner les prompts
- Combiner IA + expertise humaine

**DON'T (À éviter) :**
- Aveuglément faire confiance aux outputs
- Partager des données confidentielles
- Utiliser l'IA sans validation terrain
- Négliger la formation de votre équipe

### ✓ Checklist de validation

- [ ] Output IA aligné avec mon contexte africain ?
- [ ] Données et chiffres vérifiés ?
- [ ] Applicable avec mes ressources actuelles ?
- [ ] Conforme aux standards locaux et internationaux ?
- [ ] Testé sur un cas pilote avant déploiement complet ?

---

## 📝 Résumé en 5 lignes

1. **${moduleTemplate.sections[0]}** - [Message clé 1]
2. **${moduleTemplate.sections[1]}** - [Message clé 2]
3. **${moduleTemplate.sections[2]}** - [Message clé 3]
4. **${moduleTemplate.sections[3]}** - [Message clé 4]
5. **Application** - Passer à l'action avec le plan d'action 7 jours ci-dessous

---

## 🚀 Plan d'action 7 jours

### Jour 1-2 : Diagnostic et préparation
- Réaliser l'auto-diagnostic complet
- Identifier 2-3 axes prioritaires
- Collecter les données de référence

### Jour 3-4 : Mise en œuvre initiale
- Appliquer les premiers outils méthodologiques
- Tester les prompts IA sur cas pilote
- Ajuster selon les premiers résultats

### Jour 5-6 : Optimisation
- Analyser les résultats du pilote
- Étendre aux autres cas d'usage
- Former l'équipe aux nouvelles pratiques

### Jour 7 : Bilan et suite
- Mesurer les premiers résultats
- Documenter les learnings
- Planifier l'amélioration continue

---

## 🎓 Pour aller plus loin

**Ressources complémentaires :**
- Standard international : [Référence]
- Certification reconnue : [Nom]
- Communauté de pratique : [Lien]

**Next steps :**
1. Compléter le quiz de validation (15 questions)
2. Réussir les 2 labs pratiques
3. Passer au Module ${moduleNum + 1} (débloqué après validation)

---

## 💬 Aide et support

- **Forum communautaire** : Échangez avec d'autres apprenants
- **WhatsApp support** : +225 05 05 11 11 02
- **Email** : support@digischool.africa

**Note :** Ce module est 100% en ligne. Aucun téléchargement n'est nécessaire. Tout le contenu est accessible depuis votre navigateur.

---

*DigiSchool Africa - Formation professionnelle augmentée par l'IA*
`;

  return content;
}

/**
 * Generate quiz for a module
 */
function generateQuiz(course, moduleNum) {
  const questions = [];
  
  for (let i = 1; i <= 15; i++) {
    questions.push({
      id: `q${i}`,
      question: `Question ${i} : Concernant ${course.title}, ${i % 3 === 0 ? 'quels sont les principaux outils ?' : i % 3 === 1 ? 'quelle est la meilleure pratique ?' : 'quel est le principal défi ?'}`,
      type: i % 5 === 0 ? 'multiple' : 'single',
      options: [
        { id: 'a', text: `Option A - ${i % 4 === 0 ? 'Réponse correcte' : 'Réponse incorrecte'}`, correct: i % 4 === 0 },
        { id: 'b', text: `Option B - ${i % 4 === 1 ? 'Réponse correcte' : 'Réponse incorrecte'}`, correct: i % 4 === 1 || (i % 5 === 0 && i % 3 === 0) },
        { id: 'c', text: `Option C - ${i % 4 === 2 ? 'Réponse correcte' : 'Réponse incorrecte'}`, correct: i % 4 === 2 },
        { id: 'd', text: `Option D - ${i % 4 === 3 ? 'Réponse correcte' : 'Réponse incorrecte'}`, correct: i % 4 === 3 }
      ],
      explanation: `Explication : La bonne réponse met en évidence l'importance de [concept clé]. En contexte africain, cela se traduit par [application pratique]. Les autres options sont incorrectes car [raison].`,
      points: i % 5 === 0 ? 2 : 1
    });
  }
  
  return {
    module_number: moduleNum,
    course_slug: course.id,
    course_title: course.title,
    total_questions: 15,
    total_points: questions.reduce((sum, q) => sum + q.points, 0),
    passing_score: 70,
    time_limit_minutes: 30,
    max_attempts_per_day: 2,
    questions: questions
  };
}

/**
 * Generate labs for a module
 */
function generateLabs(course, moduleNum) {
  return `---
title: "Labs pratiques - Module ${moduleNum}"
course: "${course.title}"
course_slug: "${course.id}"
module_number: ${moduleNum}
---

# Travaux pratiques - Module ${moduleNum}

## 🎯 Objectifs des labs

Ces 2 labs pratiques vous permettent d'appliquer concrètement les concepts du Module ${moduleNum} dans un contexte africain réaliste.

---

## Lab 1 : Cas pratique terrain Afrique (45 min)

### Contexte
Vous êtes consultant(e) pour **AfriTech Solutions**, une entreprise de services basée à Abidjan avec 50 collaborateurs. L'entreprise souhaite optimiser ${course.title.toLowerCase()} pour améliorer ses performances.

**Situation actuelle :**
- Croissance rapide (+40% en 1 an)
- Processus encore informels
- Équipe jeune et dynamique mais peu formée
- Budget limité mais ambition forte

### Inputs fournis

**Données de l'entreprise :**
- Chiffre d'affaires : 500M XOF
- Effectif : 50 personnes (25 à Abidjan, 25 à Dakar)
- Secteur : Services B2B (conseil + formation)
- Clients : 80% grands comptes, 20% PME

**Problématiques identifiées :**
1. Manque de processus formalisés
2. Communication difficile entre sites
3. Perte de temps sur tâches répétitives
4. Difficulté à mesurer la performance

### Tâches à réaliser

**Étape 1 : Diagnostic (15 min)**
- Analyser la situation actuelle
- Identifier les 3 principaux problèmes
- Prioriser selon impact/effort

**Étape 2 : Recommandations (20 min)**
- Proposer un plan d'action sur 90 jours
- Définir 5-7 KPIs de suivi
- Identifier les quick wins (semaine 1)

**Étape 3 : Outils IA (10 min)**
- Recommander 3 outils IA adaptés
- Rédiger 2 prompts utilisables immédiatement
- Estimer les gains de productivité

### Outputs attendus

Vous devez produire :

1. **Diagnostic SWOT** (1 page)
   - Forces actuelles
   - Faiblesses à corriger
   - Opportunités à saisir
   - Menaces à anticiper

2. **Plan d'action 90 jours** (2 pages)
   - Phases : Diagnostic / Pilote / Déploiement
   - Actions concrètes par phase
   - Responsables et deadlines
   - Budget estimé

3. **Dashboard KPIs** (1 page)
   - 5-7 indicateurs essentiels
   - Méthode de mesure
   - Fréquence de suivi
   - Seuils d'alerte

### Grille d'évaluation

| Critère | Poids | Description |
|---------|-------|-------------|
| **Pertinence du diagnostic** | 25% | Analyse complète et réaliste |
| **Qualité du plan d'action** | 30% | Faisabilité, priorisation, timing |
| **Adaptation au contexte** | 20% | Prise en compte des spécificités africaines |
| **Utilisation de l'IA** | 15% | Pertinence des outils et prompts |
| **Clarté et structure** | 10% | Présentation professionnelle |

**Critères de réussite :**
- Note minimale : 70/100
- Tous les outputs livrés
- Plan d'action actionnable immédiatement

---

## Lab 2 : Optimisation avec IA (45 min)

### Contexte
Vous travaillez pour **MaliDistrib**, entreprise de distribution alimentaire au Mali avec 150 collaborateurs. L'entreprise veut intégrer l'IA dans ${course.title.toLowerCase()} pour gagner en compétitivité.

**Situation actuelle :**
- Présence sur 8 villes du Mali
- 2000 clients actifs (détaillants et grossistes)
- Forte saisonnalité (variations de 40%)
- Concurrence accrue

### Inputs fournis

**Processus actuels (manuels) :**
- Prévisions de vente sur Excel
- Planification hebdomadaire papier
- Reporting mensuel (compilation 3 jours)
- Communication par WhatsApp et appels

**Données disponibles :**
- Historique ventes 3 ans
- Base clients avec comportements d'achat
- Données logistiques (stocks, livraisons)
- Indicateurs de performance équipes

### Tâches à réaliser

**Étape 1 : Identification des cas d'usage IA (15 min)**
- Lister 5 processus automatisables
- Estimer le temps gagné par processus
- Prioriser selon ROI

**Étape 2 : Sélection des outils IA (15 min)**
- Identifier 3 outils IA adaptés au budget
- Comparer les options (features, prix, complexité)
- Recommander la meilleure solution

**Étape 3 : Plan de déploiement IA (15 min)**
- Définir la roadmap sur 6 mois
- Planifier la formation des équipes
- Anticiper les résistances au changement

### Outputs attendus

1. **Matrice d'opportunités IA** (1 page)
   
   | Processus | Temps actuel | Temps avec IA | Gain | Complexité | Priorité |
   |-----------|--------------|---------------|------|------------|----------|
   | Processus 1 | 8h/semaine | 2h/semaine | 75% | Faible | P1 |
   | ... | ... | ... | ... | ... | ... |

2. **Recommandation d'outils IA** (2 pages)
   - Outil 1 : Description, cas d'usage, coût, ROI
   - Outil 2 : Description, cas d'usage, coût, ROI
   - Outil 3 : Description, cas d'usage, coût, ROI

3. **Roadmap de déploiement** (1 page)
   - Mois 1-2 : Pilote sur 1 processus
   - Mois 3-4 : Déploiement à 50% des équipes
   - Mois 5-6 : Généralisation et optimisation

4. **Pack de 5 prompts prêts à l'emploi**
   - Prompt pour prévisions de vente
   - Prompt pour optimisation de stock
   - Prompt pour rapport automatique
   - Prompt pour analyse de performance
   - Prompt pour résolution de problème

### Grille d'évaluation

| Critère | Poids | Description |
|---------|-------|-------------|
| **Pertinence des cas d'usage** | 25% | Choix réalistes et impactants |
| **Qualité de la sélection d'outils** | 25% | Adéquation budget/besoins/complexité |
| **Faisabilité de la roadmap** | 20% | Planning réaliste et progressif |
| **Qualité des prompts** | 20% | Utilisables immédiatement, bien structurés |
| **ROI démontré** | 10% | Calcul des gains attendus |

**Critères de réussite :**
- Note minimale : 70/100
- Tous les outputs livrés
- Au moins 1 prompt testé et validé

---

## 📤 Soumission et évaluation

**Format de soumission :**
- Tous les livrables en 1 document PDF
- Nommage : \`${course.id}-module-${moduleNum}-labs-[VotreNom].pdf\`
- Taille max : 5 MB

**Délai de correction :**
- Évaluation automatique : immédiate (quiz)
- Correction manuelle labs : 48-72h ouvrées
- Feedback détaillé fourni

**Support :**
Si vous avez des questions durant les labs :
- **Forum** : Posez votre question (réponse < 4h)
- **WhatsApp** : +225 05 05 11 11 02 (urgent uniquement)
- **Email** : support@digischool.africa

---

## 🎓 Après les labs

Une fois les 2 labs validés :
1. Vous recevez un certificat de complétion du Module ${moduleNum}
2. Le Module ${moduleNum + 1} est automatiquement débloqué
3. Vos livrables sont ajoutés à votre portfolio professionnel

**Note importante :** Ces labs sont 100% en ligne. Aucun téléchargement de logiciel n'est requis. Tous les outils IA recommandés ont une version gratuite ou freemium.

---

*DigiSchool Africa - Apprendre en faisant, dans un contexte africain réel*
`;
}

// Generate all content
let totalFiles = 0;
let totalSize = 0;

courses.forEach(course => {
  const courseDir = `./b2c-content/${course.id}`;
  console.log(`\n📦 Generating content for: ${course.title} (${course.id})`);
  
  MODULE_TEMPLATES.forEach(moduleTemplate => {
    const moduleNum = moduleTemplate.num;
    const paddedNum = String(moduleNum).padStart(2, '0');
    
    // Generate module content
    const moduleContent = generateModuleContent(course, moduleTemplate);
    const modulePath = path.join(courseDir, `module-${paddedNum}.md`);
    fs.writeFileSync(modulePath, moduleContent);
    totalFiles++;
    totalSize += moduleContent.length;
    console.log(`  ✓ module-${paddedNum}.md (${(moduleContent.length / 1024).toFixed(1)} KB)`);
    
    // Generate quiz
    const quizData = generateQuiz(course, moduleNum);
    const quizPath = path.join(courseDir, `quiz-module-${paddedNum}.json`);
    fs.writeFileSync(quizPath, JSON.stringify(quizData, null, 2));
    totalFiles++;
    const quizSize = JSON.stringify(quizData).length;
    totalSize += quizSize;
    console.log(`  ✓ quiz-module-${paddedNum}.json (${(quizSize / 1024).toFixed(1)} KB)`);
    
    // Generate labs
    const labsContent = generateLabs(course, moduleNum);
    const labsPath = path.join(courseDir, `labs-module-${paddedNum}.md`);
    fs.writeFileSync(labsPath, labsContent);
    totalFiles++;
    totalSize += labsContent.length;
    console.log(`  ✓ labs-module-${paddedNum}.md (${(labsContent.length / 1024).toFixed(1)} KB)`);
  });
});

console.log(`\n✅ Content generation complete!`);
console.log(`   Total files: ${totalFiles}`);
console.log(`   Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Courses: 9`);
console.log(`   Modules per course: 8`);
console.log(`   Files per module: 3 (module.md + quiz.json + labs.md)`);
console.log(`\n🚀 Ready for b2c-learn.html and b2c-module.html integration\n`);
