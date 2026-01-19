#!/usr/bin/env python3
"""
DigiSchool Africa — FINAL AUDIT BEFORE COMMIT
"""
import re
from pathlib import Path

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

print("\n=== FINAL AUDIT — V2.2.x-K.3 ===\n")

issues = []
passed = []

for page in PAGES:
    path = Path(page)
    if not path.exists():
        issues.append(f"❌ {page}: FILE NOT FOUND")
        continue
    
    content = path.read_text(encoding='utf-8')
    page_issues = []
    
    # W2: Footer partner duplication
    partner_count = content.count('ds-partners-section')
    if partner_count > 1:
        page_issues.append(f"Footer duplicate ({partner_count}x)")
    elif partner_count == 0:
        page_issues.append(f"Footer missing")
    
    # W3: Emoji scan
    emoji_pattern = re.compile(r'[\U0001F300-\U0001F9FF]|[\u2600-\u26FF]|[\u2700-\u27BF]')
    if emoji_pattern.search(content):
        emojis = emoji_pattern.findall(content)
        page_issues.append(f"Emojis ({len(emojis)}x)")
    
    # W5: Companies — prompts exposed
    if page == 'companies.html':
        if 'ai-prompts' in content or 'Prompts métiers réutilisables' in content:
            page_issues.append("Prompts exposed")
    
    # W6: Legal pages — accordions
    if page in ['cgu-v2.2.html', 'cgv-v2.2.html', 'mentions-legales-v2.2.html', 'politique-confidentialite-v2.2.html']:
        accordion_count = content.count('<details')
        if accordion_count == 0:
            page_issues.append("Missing accordions")
        else:
            passed.append(f"✅ {page}: {accordion_count} accordions")
    
    # W7: About page
    if page == 'about-premium.html':
        if 'SAGORY' in content:
            page_issues.append("Typo SAGORY")
        if '500 entreprises' in content or '200 entreprises' in content:
            page_issues.append("Overclaim")
    
    if page_issues:
        issues.append(f"❌ {page}: {', '.join(page_issues)}")
    else:
        passed.append(f"✅ {page}: ALL CHECKS PASSED")

print("--- PASSED ---\n")
for p in passed:
    print(p)

if issues:
    print("\n--- ISSUES ---\n")
    for i in issues:
        print(i)
    print(f"\n❌ TOTAL ISSUES: {len(issues)}")
else:
    print("\n🎉 NO ISSUES — ALL 11 PAGES CLEAN")

# Summary
print(f"\n=== SUMMARY ===")
print(f"Pages checked: {len(PAGES)}")
print(f"Passed: {len(passed)}")
print(f"Issues: {len(issues)}")
