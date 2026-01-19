#!/bin/bash
# DigiSchool Africa V2.2.x-J - CSS Fix Script
# Replaces zoom-layout CSS with canonical ds-restored-premium.css

cd /home/user/webapp

echo "🔧 V2.2.x-J CSS FIX - Removing Rails Layout"
echo "=========================================="

# Target pages
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
    
    # Replace digischool-v2.3-safe.css with ds-restored-premium.css
    if grep -q "digischool-v2.3-safe.css" "$page"; then
      sed -i 's|/assets/digischool-v2.3-safe.css|/assets/ds-restored-premium.css|g' "$page"
      echo "   ✅ Replaced v2.3-safe with ds-restored-premium"
    fi
    
    # Remove digischool-zoom-layout.css reference
    if grep -q "digischool-zoom-layout.css" "$page"; then
      sed -i '/digischool-zoom-layout.css/d' "$page"
      echo "   ✅ Removed zoom-layout CSS (rails system)"
    fi
    
    # Remove inject-zoom-layout.js if present
    if grep -q "inject-zoom-layout.js" "$page"; then
      sed -i '/inject-zoom-layout.js/d' "$page"
      echo "   ✅ Removed zoom-layout JS"
    fi
    
    # Remove inject-layout-v2.2.js if present (legacy)
    if grep -q "inject-layout-v2.2.js" "$page"; then
      sed -i '/inject-layout-v2.2.js/d' "$page"
      echo "   ✅ Removed legacy layout injector"
    fi
    
    echo "   ✅ $page fixed"
  else
    echo "   ⚠️  $page not found"
  fi
done

echo ""
echo "=========================================="
echo "✅ CSS Fix Complete for ${#PAGES[@]} pages"
echo ""
echo "Verification:"
for page in "${PAGES[@]}"; do
  if [ -f "$page" ]; then
    if grep -q "ds-restored-premium.css" "$page" && ! grep -q "zoom-layout" "$page"; then
      echo "✅ $page - Canonical CSS only"
    else
      echo "❌ $page - Still has conflicts"
    fi
  fi
done
