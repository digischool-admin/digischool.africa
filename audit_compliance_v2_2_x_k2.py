#!/usr/bin/env python3
"""V2.2.x-K.2 - Comprehensive Compliance Audit"""

import re
from pathlib import Path

TARGET_PAGES = [
    "b2c.html",
    "companies.html",
    "parcours.html",
    "about-premium.html",
    "contact.html",
    "cgu-v2.2.html",
    "cgv-v2.2.html",
    "mentions-legales-v2.2.html",
    "politique-confidentialite-v2.2.html"
]

REFERENCE_PAGES = ["index.html", "b2c-assessment.html"]

VIOLATIONS = {
    "rails": [
        r"zoom-layout",
        r"rail",
        r"side-gradient",
        r"centered-shell",
        r"flashy.*side",
        r"left-rail",
        r"right-rail"
    ],
    "emojis": [
        r"[\U0001F300-\U0001F9FF]",  # Unicode emojis
        r"[\u2600-\u26FF]",           # Misc symbols
        r"[\u2700-\u27BF]"            # Dingbats
    ],
    "hardcoded_header": [
        r'<header[^>]*class="[^"]*digischool-global-header[^"]*"[^>]*>.*?</header>',
    ],
    "wrong_colors": [
        r"#[Ff]{2}0{4}",  # Red
        r"#[Ff]{2}[Bb]{2}00",  # Yellow
        r"rgb\(255,\s*0,\s*0\)",  # Red RGB
    ]
}

def audit_page(page_path):
    """Audit a single page for compliance violations"""
    violations_found = []
    
    try:
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for rails/zoom layout
        for pattern in VIOLATIONS["rails"]:
            if re.search(pattern, content, re.IGNORECASE):
                violations_found.append(f"RAIL LAYOUT: Found '{pattern}'")
        
        # Check for emojis
        for pattern in VIOLATIONS["emojis"]:
            matches = re.findall(pattern, content)
            if matches:
                violations_found.append(f"EMOJI: Found {len(matches)} emoji(s)")
        
        # Check for hardcoded headers
        header_count = len(re.findall(r'<header', content, re.IGNORECASE))
        if header_count > 0:
            violations_found.append(f"HARDCODED HEADER: Found {header_count} <header> tag(s)")
        
        # Check for wrong colors
        for pattern in VIOLATIONS["wrong_colors"]:
            if re.search(pattern, content, re.IGNORECASE):
                violations_found.append(f"WRONG COLOR: Found forbidden color '{pattern}'")
        
        # Check background
        if 'background-image' in content and 'body' in content:
            # Check for flashy backgrounds outside containers
            flashy_patterns = [
                r'body.*background.*gradient.*100%',
                r'body.*background.*linear-gradient.*(?!rgba)'
            ]
            for pattern in flashy_patterns:
                if re.search(pattern, content, re.IGNORECASE | re.DOTALL):
                    violations_found.append(f"FLASHY BACKGROUND: Body has strong background")
        
        return violations_found
        
    except Exception as e:
        return [f"ERROR: {e}"]

def main():
    print("=" * 70)
    print("V2.2.x-K.2 COMPLIANCE AUDIT — ZERO TOLERANCE")
    print("=" * 70)
    print()
    
    # Audit reference pages (should be clean)
    print("📍 REFERENCE PAGES (Should be 100% clean)")
    print("-" * 70)
    for page in REFERENCE_PAGES:
        violations = audit_page(page)
        status = "✅ CLEAN" if not violations else f"⚠️  {len(violations)} violations"
        print(f"{page:40} {status}")
        if violations:
            for v in violations:
                print(f"   → {v}")
    print()
    
    # Audit target pages
    print("🎯 TARGET PAGES (Must match references)")
    print("-" * 70)
    
    total_violations = 0
    pages_with_violations = []
    
    for page in TARGET_PAGES:
        violations = audit_page(page)
        total_violations += len(violations)
        
        if violations:
            pages_with_violations.append((page, violations))
            status = f"❌ {len(violations)} VIOLATIONS"
        else:
            status = "✅ CLEAN"
        
        print(f"{page:40} {status}")
        if violations:
            for v in violations[:3]:  # Show first 3
                print(f"   → {v}")
            if len(violations) > 3:
                print(f"   → ... and {len(violations) - 3} more")
    
    print()
    print("=" * 70)
    print(f"📊 SUMMARY")
    print("=" * 70)
    print(f"Total pages audited: {len(TARGET_PAGES)}")
    print(f"Pages with violations: {len(pages_with_violations)}")
    print(f"Total violations: {total_violations}")
    print()
    
    if total_violations == 0:
        print("✅ COMPLIANCE ACHIEVED — ALL PAGES CLEAN")
    else:
        print(f"❌ COMPLIANCE FAILED — {total_violations} VIOLATIONS TO FIX")
        print()
        print("Pages requiring fixes:")
        for page, violations in pages_with_violations:
            print(f"  • {page} ({len(violations)} violations)")
    
    return total_violations

if __name__ == "__main__":
    violations = main()
    exit(0 if violations == 0 else 1)
