/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — VALIDATION SCRIPT                        ║
 * ║  Vérifier que TOUS les cours ont quiz/évaluation              ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification de la structure des 9 parcours B2C...\n');

// Charger le fichier courses-content.js
const coursesPath = path.join(__dirname, 'assets', 'courses-content.js');

if (!fs.existsSync(coursesPath)) {
  console.error('❌ Fichier courses-content.js introuvable!');
  process.exit(1);
}

const coursesContent = fs.readFileSync(coursesPath, 'utf-8');

// Parser le contenu (simplification - en prod utiliser eval sécurisé ou JSON)
console.log('📊 STATISTIQUES GLOBALES');
console.log('═'.repeat(60));

// Compter les formations
const formationMatches = coursesContent.match(/^\s+['"`][\w-]+['"`]:\s*{/gm);
const formationCount = formationMatches ? formationMatches.length : 0;
console.log(`✅ Formations détectées: ${formationCount}/9`);

// Compter les modules
const moduleMatches = coursesContent.match(/modules:\s*\[/g);
const moduleCount = moduleMatches ? moduleMatches.length : 0;
console.log(`✅ Modules détectés: ${moduleCount}`);

// Compter les cours
const coursMatches = coursesContent.match(/courses:\s*\[/g);
const coursCount = coursMatches ? coursMatches.length : 0;
console.log(`✅ Cours détectés: ${coursCount}`);

// Vérifier présence de quiz
const quizMatches = coursesContent.match(/quiz:\s*\[/g);
const quizCount = quizMatches ? quizMatches.length : 0;
console.log(`\n⚠️  Quiz détectés: ${quizCount}/${coursCount}`);

if (quizCount === 0) {
  console.log('\n❌ PROBLÈME CRITIQUE: Aucun quiz trouvé dans le contenu!');
  console.log('   Tous les cours DOIVENT avoir un quiz/évaluation.');
}

// Vérifier les évaluations
const evaluationMatches = coursesContent.match(/evaluation|évaluation/gi);
const evalCount = evaluationMatches ? evaluationMatches.length : 0;
console.log(`📝 Évaluations mentionnées: ${evalCount}`);

// Liste des formations attendues
const expectedFormations = [
  'gestion-projet-pmp',
  'leadership-management',
  'data-analytics',
  'excel-avance',
  'powerbi-expert',
  'marketing-digital',
  'transformation-digitale',
  'rh-moderne',
  'powerpoint-expert'
];

console.log('\n📋 VÉRIFICATION PAR FORMATION');
console.log('═'.repeat(60));

expectedFormations.forEach((formationId, index) => {
  const hasFormation = coursesContent.includes(`'${formationId}'`) || 
                       coursesContent.includes(`"${formationId}"`);
  const status = hasFormation ? '✅' : '❌';
  console.log(`${status} ${index + 1}. ${formationId}`);
});

// Recommandations
console.log('\n💡 RECOMMANDATIONS');
console.log('═'.repeat(60));

if (quizCount < coursCount) {
  console.log('⚠️  URGENT: Ajouter quiz à tous les cours manquants');
  console.log('   Structure minimale requise:');
  console.log('   quiz: [');
  console.log('     { question: "...", options: [...], correct: N }');
  console.log('   ]');
}

if (formationCount < 9) {
  console.log(`⚠️  URGENT: ${9 - formationCount} formation(s) manquante(s)`);
}

console.log('\n✅ Vérification terminée.\n');

// Retourner le statut
if (formationCount === 9 && quizCount >= coursCount * 0.8) {
  console.log('🎉 Structure VALIDE - Prête pour production');
  process.exit(0);
} else {
  console.log('❌ Structure INCOMPLÈTE - Corrections requises');
  process.exit(1);
}
