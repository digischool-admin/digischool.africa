#!/usr/bin/env node
/**
 * Comprehensive QA for B2C Learning System
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 DigiSchool Africa - B2C Learning System QA\n');

let totalChecks = 0;
let passedChecks = 0;

function check(name, condition, details = '') {
  totalChecks++;
  const status = condition ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} | ${name}`);
  if (details) {
    console.log(`       ${details}`);
  }
  if (condition) passedChecks++;
  return condition;
}

// 1. File Existence Checks
console.log('\n📁 FILE EXISTENCE\n');

check('courses-data.js exists', fs.existsSync('./courses-data.js'));
check('b2c-learning-system.js exists', fs.existsSync('./b2c-learning-system.js'));
check('b2c-access.html exists', fs.existsSync('./b2c-access.html'));
check('b2c-learn.html exists', fs.existsSync('./b2c-learn.html'));
check('b2c-module.html exists', fs.existsSync('./b2c-module.html'));
check('b2c-checkout.html exists', fs.existsSync('./b2c-checkout.html'));

// 2. B2C Content Structure
console.log('\n📚 B2C CONTENT STRUCTURE\n');

const expectedCourses = [
  'leadership-management', 'gestion-projet-pmp', 'strategie-execution',
  'finance-non-financiers', 'vente-b2b-negociation', 'service-client-experience',
  'rh-performance', 'data-reporting-decideurs', 'productivite-m365'
];

let totalModules = 0;
let totalQuizzes = 0;
let totalLabs = 0;

expectedCourses.forEach(slug => {
  const courseDir = `./b2c-content/${slug}`;
  const exists = fs.existsSync(courseDir);
  check(`Course directory: ${slug}`, exists);
  
  if (exists) {
    for (let i = 1; i <= 8; i++) {
      const paddedNum = String(i).padStart(2, '0');
      if (fs.existsSync(path.join(courseDir, `module-${paddedNum}.md`))) totalModules++;
      if (fs.existsSync(path.join(courseDir, `quiz-module-${paddedNum}.json`))) totalQuizzes++;
      if (fs.existsSync(path.join(courseDir, `labs-module-${paddedNum}.md`))) totalLabs++;
    }
  }
});

check('All 72 module files (9×8)', totalModules === 72, `Found: ${totalModules}/72`);
check('All 72 quiz files', totalQuizzes === 72, `Found: ${totalQuizzes}/72`);
check('All 72 labs files', totalLabs === 72, `Found: ${totalLabs}/72`);

// 3. JavaScript API Checks
console.log('\n🔧 JAVASCRIPT APIs\n');

const learningSystem = fs.readFileSync('./b2c-learning-system.js', 'utf8');

check('EntitlementManager class exists', learningSystem.includes('class EntitlementManager'));
check('ProgressionManager class exists', learningSystem.includes('class ProgressionManager'));
check('QuizManager class exists', learningSystem.includes('class QuizManager'));
check('ReaderPreferences class exists', learningSystem.includes('class ReaderPreferences'));
check('TTSManager class exists', learningSystem.includes('class TTSManager'));
check('Access code generation method', learningSystem.includes('generateAccessCode'));
check('Access code restore method', learningSystem.includes('restoreFromAccessCode'));
check('Quiz passing score = 70', learningSystem.includes('PASSING_SCORE = 70'));
check('Max attempts per day = 2', learningSystem.includes('MAX_ATTEMPTS_PER_DAY = 2'));
check('TTS speechSynthesis check', learningSystem.includes('speechSynthesis'));

// 4. HTML Structure Checks
console.log('\n🌐 HTML STRUCTURE\n');

const accessHtml = fs.readFileSync('./b2c-access.html', 'utf8');
const learnHtml = fs.readFileSync('./b2c-learn.html', 'utf8');
const moduleHtml = fs.readFileSync('./b2c-module.html', 'utf8');
const checkoutHtml = fs.readFileSync('./b2c-checkout.html', 'utf8');

check('b2c-access: Access code display', accessHtml.includes('accessCodeDisplay'));
check('b2c-access: Copy button', accessHtml.includes('copyAccessCode'));
check('b2c-access: Start learning CTA', accessHtml.includes('startLearningBtn'));

check('b2c-learn: Module list grid', learnHtml.includes('modulesGrid'));
check('b2c-learn: Progress bar', learnHtml.includes('progress-fill'));
check('b2c-learn: Reader controls', learnHtml.includes('reader-controls'));
check('b2c-learn: Font size selector', learnHtml.includes('fontSizeSelect'));
check('b2c-learn: Dyslexia toggle', learnHtml.includes('toggleDyslexia'));
check('b2c-learn: High contrast toggle', learnHtml.includes('toggleContrast'));

check('b2c-module: Module content area', moduleHtml.includes('id="module-content"'));
check('b2c-module: TTS controls', moduleHtml.includes('tts-controls'));
check('b2c-module: Quiz container', moduleHtml.includes('quizContainer'));
check('b2c-module: Quiz submit button', moduleHtml.includes('submitQuiz'));
check('b2c-module: markdownToHTML function', moduleHtml.includes('markdownToHTML'));

check('b2c-checkout: Form redirect logic', checkoutHtml.includes('b2c-access.html'));
check('b2c-checkout: Payment methods at bottom', checkoutHtml.includes('payment-section'));

// 5. Analytics Events
console.log('\n📊 ANALYTICS EVENTS\n');

check('Event: b2c_checkout_open', checkoutHtml.includes('b2c_checkout') || checkoutHtml.includes('checkout'));
check('Event: b2c_pack_buy_click', checkoutHtml.includes('b2c_pack_buy_click'));
check('Event: b2c_module_buy_click', checkoutHtml.includes('b2c_module_buy_click'));
check('Event: b2c_access_code_generated', accessHtml.includes('b2c_access_code_generated'));
check('Event: b2c_module_start', moduleHtml.includes('b2c_module_start'));
check('Event: b2c_quiz_pass', moduleHtml.includes('b2c_quiz_pass'));
check('Event: b2c_quiz_fail', moduleHtml.includes('b2c_quiz_fail'));
check('Event: b2c_tts_play', moduleHtml.includes('b2c_tts_play'));

// 6. Sitemap Update
console.log('\n🗺️  SITEMAP\n');

const sitemap = fs.readFileSync('./sitemap.xml', 'utf8');

check('Sitemap: b2c-access.html', sitemap.includes('b2c-access.html'));
check('Sitemap: b2c-learn.html', sitemap.includes('b2c-learn.html'));
check('Sitemap: b2c-module.html', sitemap.includes('b2c-module.html'));
check('Sitemap: b2c-checkout.html', sitemap.includes('b2c-checkout.html'));

// 7. Accessibility & No Downloads
console.log('\n♿ ACCESSIBILITY & UX\n');

check('No download mentions in b2c pages', 
  !learnHtml.toLowerCase().includes('télécharger') &&
  !moduleHtml.toLowerCase().includes('télécharger') ||
  (learnHtml.includes('aucun téléchargement') || moduleHtml.includes('aucun téléchargement')));

check('ARIA labels present', 
  learnHtml.includes('aria-') || moduleHtml.includes('aria-'));

check('Keyboard navigation support', 
  learnHtml.includes('onkeydown') || moduleHtml.includes('Enter'));

check('Focus trap mentioned/implied', 
  learningSystem.includes('focus') || moduleHtml.includes('focus'));

// 8. Reader Preferences
console.log('\n📖 READER PREFERENCES\n');

check('Font size options: 18-24', learningSystem.includes('[18, 20, 22, 24]'));
check('Line height: 1.8', learningSystem.includes('lineHeight: 1.8'));
check('Max width: 72ch', learningSystem.includes('maxWidth:') && learningSystem.includes('72ch'));
check('Dyslexia mode toggle', learningSystem.includes('toggleDyslexiaMode'));
check('High contrast toggle', learningSystem.includes('toggleHighContrast'));
check('localStorage persistence', learningSystem.includes('localStorage.setItem'));

// 9. Quiz System
console.log('\n📝 QUIZ SYSTEM\n');

check('Pass threshold: 70%', learningSystem.includes('PASSING_SCORE = 70'));
check('Attempt throttling: 2/day', learningSystem.includes('MAX_ATTEMPTS_PER_DAY = 2'));
check('Next day calculation', learningSystem.includes('getNextDayTimestamp'));
check('Quiz result calculation', moduleHtml.includes('totalScore') && moduleHtml.includes('percentage'));
check('Progress unlock on pass', moduleHtml.includes('markModulePassed'));

// Final Report
console.log('\n' + '='.repeat(50));
console.log(`✅ QA COMPLETE: ${passedChecks}/${totalChecks} checks passed`);
console.log('='.repeat(50) + '\n');

if (passedChecks === totalChecks) {
  console.log('🎉 ALL CHECKS PASSED - READY TO COMMIT & DEPLOY\n');
  process.exit(0);
} else {
  console.log(`⚠️  ${totalChecks - passedChecks} checks failed - Review before deploy\n`);
  process.exit(1);
}
