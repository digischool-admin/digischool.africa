#!/usr/bin/env python3
"""V2.2.x-K - Final Emoji Removal & Brand Icon Replacement"""

PAGES = [
    "parcours.html",
    "b2c.html",
    "companies.html",
    "about-premium.html",
    "contact.html"
]

# Emoji to SVG icon replacements (brand-compliant)
EMOJI_REPLACEMENTS = {
    # Educational/target icons
    '🎯 ': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    '🎓 ': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path d="M2 12L12 7l10 5-10 5-10-5z"/><path d="M7 14v6l5 3 5-3v-6"/></svg>',
    
    # Time/clock
    '⏱️ ': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26A69A" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    
    # Sparkles/premium
    '✨ ': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    
    # Books/library
    '📚 ': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    
    # Briefcase/business
    '🏢 ': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 6h6M9 10h6M9 14h6"/></svg>',
}

for page in PAGES:
    try:
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Replace emojis with SVG icons
        for emoji, svg in EMOJI_REPLACEMENTS.items():
            content = content.replace(emoji, svg)
        
        # Only write if changes were made
        if content != original_content:
            with open(page, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Count replacements
            count = sum(original_content.count(emoji) for emoji in EMOJI_REPLACEMENTS.keys())
            print(f"✓ {page} - {count} emojis replaced with brand SVG icons")
        else:
            print(f"✓ {page} - No emojis found (already clean)")
        
    except Exception as e:
        print(f"✗ {page} - Error: {e}")

print("\n✅ Final Emoji Cleanup Complete — All Icons Brand-Compliant")
