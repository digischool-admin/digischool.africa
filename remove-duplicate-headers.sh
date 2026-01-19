#!/bin/bash
# DigiSchool Africa V2.2.x-J - Remove Duplicate Headers
# Removes all hardcoded headers since global-components injects them

cd /home/user/webapp

echo "🔧 V2.2.x-J REMOVE DUPLICATE HEADERS"
echo "====================================="

PAGES=(
  "parcours.html"
  "b2c.html"
  "companies.html"
  "about-premium.html"
  "cgu-v2.2.html"
  "cgv-v2.2.html"
  "mentions-legales-v2.2.html"
  "politique-confidentialite-v2.2.html"
)

for page in "${PAGES[@]}"; do
  if [ -f "$page" ]; then
    echo ""
    echo "📄 Processing: $page"
    
    # Count headers before
    BEFORE=$(grep -c "<header" "$page" || echo "0")
    echo "   Headers before: $BEFORE"
    
    # Create temp file
    python3 << 'PYTHON_SCRIPT' "$page"
import sys
import re

filename = sys.argv[1]

with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all hardcoded header blocks (including their inline styles and scripts)
# Pattern: <header ... > ... </header> and following <style> and <script> blocks

# Remove header + style + script blocks (there are typically 3 repetitions)
pattern = r'<header class="digischool-global-header"[^>]*>.*?</header>\s*<style>.*?</style>\s*<script>.*?</script>'
content = re.sub(pattern, '', content, flags=re.DOTALL)

# Write back
with open(filename, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"   ✅ Removed hardcoded headers from {filename}")
PYTHON_SCRIPT
    
    # Count headers after
    AFTER=$(grep -c "<header" "$page" || echo "0")
    echo "   Headers after: $AFTER"
    
    if [ "$AFTER" -eq 0 ]; then
      echo "   ✅ All hardcoded headers removed (global-components will inject)"
    else
      echo "   ⚠️  Still has $AFTER header(s)"
    fi
  fi
done

echo ""
echo "====================================="
echo "✅ Header Deduplication Complete"
