#!/usr/bin/env python3
"""
DigiSchool Africa — FINAL HOTFIX AUDIT
Vérifie TOUS les workstreams critiques
"""
import re
from pathlib import Path

# Pages en scope
PAGES = [
    'index.html',
    'b2c-assessment.html',
    'b2c.html',
    'companies.html',
    'parcours.html',
    'about-premium.html',
    'contact.html',
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'mentions-legales-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

issues = []

for page in PAGES:
    path = Path(page)
    if not path.exists():
        issues.append(f"❌ {page}: FILE NOT FOUND")
        continue
    
    content = path.read_text(encoding='utf-8')
    
    # W1: Layout centering (.ds-container)
    if '.ds-container' not in content and 'assessment-container' not in content:
        issues.append(f"⚠️  {page}: Missing .ds-container for centering")
    
    # W2: Footer partner duplication
    partner_count = content.count('ds-partners-section')
    if partner_count > 1:
        issues.append(f"❌ {page}: DUPLICATE partner section ({partner_count}x)")
    elif partner_count == 0:
        issues.append(f"⚠️  {page}: Missing partner section in footer")
    
    # W3: Emoji scan
    emoji_pattern = re.compile(r'[\U0001F300-\U0001F9FF]|[\u2600-\u26FF]|[\u2700-\u27BF]')
    if emoji_pattern.search(content):
        emojis = emoji_pattern.findall(content)
        issues.append(f"❌ {page}: EMOJIS FOUND ({len(emojis)}x): {set(emojis)}")
    
    # W5: Companies.html — prompts exposed
    if page == 'companies.html':
        if 'Créez un prompt' in content or 'prompt réutilisable' in content:
            issues.append(f"❌ {page}: PROMPTS EXPOSED")
    
    # W6: Legal pages — accordions
    if page in ['cgu-v2.2.html', 'cgv-v2.2.html', 'mentions-legales-v2.2.html', 'politique-confidentialite-v2.2.html']:
        if '<details' not in content and 'accordion' not in content.lower():
            issues.append(f"❌ {page}: MISSING ACCORDIONS")
    
    # W7: About page — factual errors
    if page == 'about-premium.html':
        if 'SAGORY' in content:
            issues.append(f"❌ {page}: TYPO 'SAGORY' (should be SAJORI)")
        if '200 entreprises' in content or '200 organizations' in content:
            issues.append(f"❌ {page}: Overclaim '200 entreprises' needs softening")

print("\n=== AUDIT RESULTS ===\n")
if issues:
    for issue in issues:
        print(issue)
    print(f"\n❌ TOTAL ISSUES: {len(issues)}")
else:
    print("✅ NO ISSUES FOUND — ALL CHECKS PASSED")
