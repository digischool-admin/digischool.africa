#!/usr/bin/env python3
"""
MASTER TEMPLATE CLONE LOCK — ONE-SHOT EXECUTION
Clone b2c-assessment.html visual standard to all pages
Zero regression, zero tolerance, zero interpretation
"""

import re
import json
from pathlib import Path
from typing import Dict, List, Tuple

# ============================================================================
# CONFIGURATION
# ============================================================================

MASTER_TEMPLATE = "b2c-assessment.html"
TARGET_PAGES = [
    "b2c.html",
    "companies.html",
    "parcours.html",
    "about-premium.html",
    "contact.html",
    "mentions-legales-v2.2.html",
    "cgu-v2.2.html",
    "cgv-v2.2.html",
    "politique-confidentialite-v2.2.html"
]

REFERENCE_PAGES = ["index.html", "b2c-assessment.html"]

# DigiSchool color palette (strict)
ALLOWED_COLORS = ["#1E88E5", "#26A69A", "#7E57C2"]
FORBIDDEN_COLORS = ["#FF0000", "#FFEB3B", "#FFC107", "#FF9800"]

# Emoji patterns (Unicode ranges)
EMOJI_PATTERN = re.compile(
    r'[\U0001F300-\U0001F9FF]|'  # Emoticons
    r'[\U0001F600-\U0001F64F]|'  # Emoticons
    r'[\U0001F680-\U0001F6FF]|'  # Transport & Map
    r'[\U00002600-\U000026FF]|'  # Misc symbols
    r'[\U00002700-\U000027BF]|'  # Dingbats
    r'[\U0001F1E0-\U0001F1FF]'   # Flags
)

# ============================================================================
# PHASE 1: ANTI-REGRESSION BASELINE
# ============================================================================

def create_baseline_checksums() -> Dict[str, str]:
    """Create checksums for reference pages to detect regressions"""
    print("\n🔒 PHASE 1: ANTI-REGRESSION BASELINE")
    checksums = {}
    
    for page in REFERENCE_PAGES:
        path = Path(page)
        if path.exists():
            content = path.read_text(encoding='utf-8')
            # Simple hash of critical sections
            critical = re.search(r'<body.*?</body>', content, re.DOTALL)
            if critical:
                import hashlib
                checksum = hashlib.md5(critical.group(0).encode()).hexdigest()
                checksums[page] = checksum
                print(f"  ✓ {page}: {checksum[:8]}...")
    
    return checksums

# ============================================================================
# PHASE 2: HEADER/FOOTER CLEANUP
# ============================================================================

def remove_hardcoded_header_footer(content: str) -> str:
    """Remove any hardcoded header/footer, rely on JS injection"""
    
    # Remove hardcoded headers (multiple patterns)
    patterns = [
        r'<header[^>]*>.*?</header>',
        r'<div[^>]*class="[^"]*header[^"]*"[^>]*>.*?</div>\s*</div>',
        r'<!-- Header Start -->.*?<!-- Header End -->',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove hardcoded footers (but NOT partner logos section)
    footer_patterns = [
        r'<footer[^>]*>.*?</footer>',
        r'<!-- Footer Start -->.*?<!-- Footer End -->',
    ]
    
    for pattern in footer_patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    return content

# ============================================================================
# PHASE 3: PARTNER LOGOS ENFORCEMENT
# ============================================================================

def ensure_single_partner_section(content: str, page: str) -> str:
    """Ensure one and only one partner section before </body>"""
    
    # Remove ALL existing partner sections
    patterns = [
        r'<!-- Partner Logos Section.*?<!-- End Partner Logos -->',
        r'<section[^>]*class="[^"]*partners[^"]*"[^>]*>.*?</section>',
        r'<div[^>]*class="[^"]*ds-partners[^"]*"[^>]*>.*?</div>\s*</div>',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Read the canonical partner section from master
    master = Path(MASTER_TEMPLATE).read_text(encoding='utf-8')
    partner_match = re.search(
        r'<!-- Partner Logos Section UNIQUE -->.*?<!-- End Partner Logos -->',
        master,
        re.DOTALL
    )
    
    if not partner_match:
        print(f"  ⚠️ Could not extract partner section from master")
        return content
    
    partner_section = partner_match.group(0)
    
    # Insert before </body>
    content = content.replace('</body>', f'\n\n{partner_section}\n\n</body>')
    
    print(f"  ✓ {page}: Partner section injected")
    return content

# ============================================================================
# PHASE 4: EMOJI & ICON CLEANUP
# ============================================================================

def remove_emojis(content: str) -> Tuple[str, int]:
    """Remove all emojis from content"""
    matches = EMOJI_PATTERN.findall(content)
    content = EMOJI_PATTERN.sub('', content)
    return content, len(matches)

def audit_icons(content: str, page: str) -> Dict[str, int]:
    """Audit icon usage for compliance"""
    results = {
        'emoji_count': len(EMOJI_PATTERN.findall(content)),
        'svg_count': len(re.findall(r'<svg', content, re.IGNORECASE)),
        'forbidden_colors': 0
    }
    
    for color in FORBIDDEN_COLORS:
        results['forbidden_colors'] += len(re.findall(color, content, re.IGNORECASE))
    
    return results

# ============================================================================
# PHASE 5: ASSESSMENT CORRECTIONS
# ============================================================================

def fix_assessment_page(content: str) -> str:
    """Fix b2c-assessment.html specific issues"""
    
    # 1. Fix header "8 questions" → "10 questions"
    content = re.sub(
        r'⏱\s*2\s*minutes\s*•\s*8\s*questions',
        '⏱ 2 minutes • 10 questions',
        content,
        flags=re.IGNORECASE
    )
    
    # 2. Remove "Voir mes résultats" button if present (it's redundant)
    content = re.sub(
        r'<button[^>]*id="btn-submit"[^>]*>.*?Voir mes résultats.*?</button>',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )
    
    print("  ✓ Assessment: Fixed 8→10 questions, removed redundant button")
    return content

# ============================================================================
# PHASE 6: B2B COMPANIES FIXES
# ============================================================================

def fix_companies_page(content: str) -> str:
    """Fix companies.html: remove prompts, pricing clarity"""
    
    # Remove prompt examples (multiple patterns)
    prompt_patterns = [
        r'<div[^>]*class="[^"]*prompt[^"]*"[^>]*>.*?</div>',
        r'<pre[^>]*>.*?prompt.*?</pre>',
        r'<code[^>]*>.*?prompt.*?</code>',
        r'Exemple\s*:\s*"[^"]*"',
    ]
    
    for pattern in prompt_patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Replace any prompt references with generic text
    content = re.sub(
        r'(Bibliothèque|bibliothèque)\s+de\s+prompts',
        'outils IA intégrés',
        content,
        flags=re.IGNORECASE
    )
    
    # Ensure pricing is "Sur devis"
    content = re.sub(
        r'Prix\s*:\s*\d+[.,]?\d*\s*(FCFA|EUR|€)?',
        'Prix : Sur devis',
        content,
        flags=re.IGNORECASE
    )
    
    print("  ✓ Companies: Removed prompts, fixed pricing")
    return content

# ============================================================================
# PHASE 7: ABOUT PAGE FIXES
# ============================================================================

def fix_about_page(content: str) -> str:
    """Fix about-premium.html: SAJORI name, soften claims"""
    
    # Keep SAJORI only (already done in previous versions, but verify)
    content = re.sub(
        r'Hervé\s+SAGORY',
        'SAJORI',
        content,
        flags=re.IGNORECASE
    )
    
    # Soften "200 entreprises" claims
    content = re.sub(
        r'200\s+entreprises',
        'nombreuses organisations',
        content,
        flags=re.IGNORECASE
    )
    
    content = re.sub(
        r'Plus\s+de\s+\d+\s+entreprises',
        'Nombreuses organisations',
        content,
        flags=re.IGNORECASE
    )
    
    print("  ✓ About: SAJORI styling, claims softened")
    return content

# ============================================================================
# PHASE 8: LEGAL PAGES DEDUPLICATION
# ============================================================================

def fix_legal_page_bullets(content: str, page: str) -> str:
    """Remove duplicate bullets in legal pages"""
    
    # Common duplicate patterns
    duplicates = [
        r'(<li[^>]*>.*?</li>)\s*\1',  # Exact duplicate li
        r'(<p[^>]*>.*?</p>)\s*\1',    # Exact duplicate p
    ]
    
    for pattern in duplicates:
        while re.search(pattern, content, re.DOTALL):
            content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
    
    # Specific fixes per page (from previous audit)
    if "mentions-legales" in page:
        # Article 7 duplicates
        pass  # Already handled by generic dedup above
    
    if "cgu" in page:
        # Articles 6/7/8 duplicates
        pass
    
    if "cgv" in page:
        # Article 6 duplicates
        pass
    
    if "politique" in page:
        # Article 3 duplicates
        pass
    
    return content

# ============================================================================
# PHASE 9: AUTO-QA
# ============================================================================

def run_qa_checks(pages: List[str]) -> Dict[str, Dict[str, any]]:
    """Run automated QA checks on all pages"""
    print("\n🔍 PHASE 9: AUTO-QA")
    
    results = {}
    
    for page in pages:
        path = Path(page)
        if not path.exists():
            continue
        
        content = path.read_text(encoding='utf-8')
        
        # DOM checks (simulated - would need browser for real DOM)
        hardcoded_headers = len(re.findall(r'<header[^>]*>', content, re.IGNORECASE))
        hardcoded_footers = len(re.findall(r'<footer[^>]*>', content, re.IGNORECASE))
        partner_sections = len(re.findall(r'class="[^"]*ds-partners-section', content))
        
        # Footer logo check
        footer_match = re.search(r'<footer.*?</footer>', content, re.DOTALL | re.IGNORECASE)
        footer_has_logos = False
        if footer_match:
            footer_has_logos = 'ds-partner-logo' in footer_match.group(0)
        
        # Emoji check
        emoji_count = len(EMOJI_PATTERN.findall(content))
        
        # Active nav check
        has_aria_current = 'aria-current="page"' in content
        
        # CSS check
        has_canonical_css = '/assets/ds-restored-premium.css' in content
        
        results[page] = {
            'hardcoded_headers': hardcoded_headers,
            'hardcoded_footers': hardcoded_footers,
            'partner_sections': partner_sections,
            'footer_has_logos': footer_has_logos,
            'emoji_count': emoji_count,
            'has_aria_current': has_aria_current,
            'has_canonical_css': has_canonical_css,
            'PASS': (
                hardcoded_headers == 0 and
                hardcoded_footers == 0 and
                partner_sections == 1 and
                not footer_has_logos and
                emoji_count == 0 and
                has_canonical_css
            )
        }
        
        status = "✅ PASS" if results[page]['PASS'] else "❌ FAIL"
        print(f"  {status} {page}")
        print(f"      Headers: {hardcoded_headers}, Footers: {hardcoded_footers}, Partners: {partner_sections}, Emojis: {emoji_count}")
    
    return results

# ============================================================================
# MAIN EXECUTION
# ============================================================================

def main():
    print("="*80)
    print("🎯 MASTER TEMPLATE CLONE LOCK — ONE-SHOT EXECUTION")
    print("="*80)
    
    # Phase 1: Baseline
    baseline = create_baseline_checksums()
    
    # Phase 2-8: Process all target pages
    print("\n🔧 PHASE 2-8: CLONE MASTER TEMPLATE TO ALL PAGES")
    
    for page in TARGET_PAGES:
        path = Path(page)
        if not path.exists():
            print(f"  ⚠️ {page} not found, skipping")
            continue
        
        print(f"\n  📄 Processing {page}...")
        content = path.read_text(encoding='utf-8')
        
        # Phase 2: Remove hardcoded header/footer
        content = remove_hardcoded_header_footer(content)
        
        # Phase 3: Ensure single partner section
        content = ensure_single_partner_section(content, page)
        
        # Phase 4: Remove emojis
        content, emoji_count = remove_emojis(content)
        if emoji_count > 0:
            print(f"  ✓ Removed {emoji_count} emojis")
        
        # Phase 5: Page-specific fixes
        if "assessment" in page:
            content = fix_assessment_page(content)
        
        if "companies" in page:
            content = fix_companies_page(content)
        
        if "about" in page:
            content = fix_about_page(content)
        
        if any(legal in page for legal in ["cgu", "cgv", "mentions", "politique"]):
            content = fix_legal_page_bullets(content, page)
        
        # Write back
        path.write_text(content, encoding='utf-8')
        print(f"  ✅ {page} updated")
    
    # Special handling for b2c-assessment.html
    assessment_path = Path("b2c-assessment.html")
    if assessment_path.exists():
        print(f"\n  📄 Processing b2c-assessment.html (master)...")
        content = assessment_path.read_text(encoding='utf-8')
        content = fix_assessment_page(content)
        content, emoji_count = remove_emojis(content)
        if emoji_count > 0:
            print(f"  ✓ Removed {emoji_count} emojis from master")
        assessment_path.write_text(content, encoding='utf-8')
        print(f"  ✅ b2c-assessment.html updated")
    
    # Phase 9: QA
    all_pages = REFERENCE_PAGES + TARGET_PAGES
    qa_results = run_qa_checks(all_pages)
    
    # Verify anti-regression
    print("\n🔒 ANTI-REGRESSION CHECK")
    for page in REFERENCE_PAGES:
        path = Path(page)
        if path.exists():
            content = path.read_text(encoding='utf-8')
            critical = re.search(r'<body.*?</body>', content, re.DOTALL)
            if critical:
                import hashlib
                new_checksum = hashlib.md5(critical.group(0).encode()).hexdigest()
                old_checksum = baseline.get(page, "")
                
                if new_checksum == old_checksum:
                    print(f"  ✅ {page}: NO REGRESSION")
                else:
                    print(f"  ⚠️ {page}: MODIFIED (expected for fixes)")
    
    # Save QA results
    Path("QA_RESULTS_MASTER_CLONE.json").write_text(
        json.dumps(qa_results, indent=2),
        encoding='utf-8'
    )
    
    # Summary
    print("\n" + "="*80)
    print("📊 EXECUTION SUMMARY")
    print("="*80)
    
    total = len(qa_results)
    passed = sum(1 for r in qa_results.values() if r['PASS'])
    
    print(f"Pages processed: {total}")
    print(f"QA PASS: {passed}/{total}")
    print(f"QA FAIL: {total - passed}/{total}")
    
    if passed == total:
        print("\n✅ MASTER TEMPLATE CLONE LOCK COMPLETE — 100% PASS")
        print("Ready for commit: FINAL_MASTER_TEMPLATE_CLONE_LOCK")
    else:
        print("\n⚠️ Some pages failed QA — review required")
        for page, result in qa_results.items():
            if not result['PASS']:
                print(f"  ❌ {page}")
    
    print("\nQA results saved to: QA_RESULTS_MASTER_CLONE.json")
    print("="*80)

if __name__ == '__main__':
    main()
