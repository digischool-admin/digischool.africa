#!/bin/bash
# DigiSchool Africa V2.2.x-J Phase 2 - Visual Polish
# Brand-compliant icons + Partner logos + Premium UX

cd /home/user/webapp

echo "🎨 V2.2.x-J PHASE 2 — VISUAL POLISH"
echo "===================================="

# A) Replace emojis with brand-safe alternatives
echo ""
echo "📌 A) ICONOGRAPHY — Replacing emojis with brand icons..."

# B2C page
if [ -f "b2c.html" ]; then
  echo "   Processing b2c.html..."
  # Replace common emojis with text/SVG placeholders
  sed -i 's/🎓/<span class="ds-icon ds-icon-graduation" style="color: #1E88E5;">▪<\/span>/g' b2c.html
  sed -i 's/📚/<span class="ds-icon ds-icon-book" style="color: #26A69A;">▪<\/span>/g' b2c.html
  sed -i 's/✨/<span class="ds-icon ds-icon-star" style="color: #7E57C2;">▸<\/span>/g' b2c.html
  sed -i 's/🤖/<span class="ds-icon ds-icon-ai" style="color: #1E88E5;">◆<\/span>/g' b2c.html
  sed -i 's/⏱️/<span class="ds-icon ds-icon-time" style="color: #546E7A;">◷<\/span>/g' b2c.html
  sed -i 's/📊/<span class="ds-icon ds-icon-chart" style="color: #26A69A;">▪<\/span>/g' b2c.html
  sed -i 's/🎯/<span class="ds-icon ds-icon-target" style="color: #1E88E5;">●<\/span>/g' b2c.html
  sed -i 's/💎/<span class="ds-icon ds-icon-premium" style="color: #7E57C2;">◆<\/span>/g' b2c.html
  sed -i 's/📦/<span class="ds-icon ds-icon-package" style="color: #546E7A;">▪<\/span>/g' b2c.html
  echo "   ✅ b2c.html emojis replaced with brand icons"
fi

# Companies page
if [ -f "companies.html" ]; then
  echo "   Processing companies.html..."
  sed -i 's/🏢/<span class="ds-icon ds-icon-building" style="color: #1E88E5;">▪<\/span>/g' companies.html
  sed -i 's/📚/<span class="ds-icon ds-icon-book" style="color: #26A69A;">▪<\/span>/g' companies.html
  sed -i 's/🤖/<span class="ds-icon ds-icon-ai" style="color: #1E88E5;">◆<\/span>/g' companies.html
  sed -i 's/⏱️/<span class="ds-icon ds-icon-time" style="color: #546E7A;">◷<\/span>/g' companies.html
  sed -i 's/📊/<span class="ds-icon ds-icon-chart" style="color: #26A69A;">▪<\/span>/g' companies.html
  sed -i 's/🎯/<span class="ds-icon ds-icon-target" style="color: #1E88E5;">●<\/span>/g' companies.html
  sed -i 's/💼/<span class="ds-icon ds-icon-briefcase" style="color: #1E88E5;">▪<\/span>/g' companies.html
  echo "   ✅ companies.html emojis replaced with brand icons"
fi

# Parcours page
if [ -f "parcours.html" ]; then
  echo "   Processing parcours.html..."
  sed -i 's/🎓/<span class="ds-icon ds-icon-graduation" style="color: #1E88E5;">▪<\/span>/g' parcours.html
  sed -i 's/📚/<span class="ds-icon ds-icon-book" style="color: #26A69A;">▪<\/span>/g' parcours.html
  sed -i 's/🤖/<span class="ds-icon ds-icon-ai" style="color: #1E88E5;">◆<\/span>/g' parcours.html
  sed -i 's/✨/<span class="ds-icon ds-icon-star" style="color: #7E57C2;">▸<\/span>/g' parcours.html
  echo "   ✅ parcours.html emojis replaced with brand icons"
fi

echo ""
echo "===================================="
echo "✅ Phase 2 Visual Polish Complete"
echo ""
echo "Summary:"
echo "  - Emojis replaced with brand-colored icons"
echo "  - Colors: Blue (#1E88E5), Green (#26A69A), Purple (#7E57C2)"
echo "  - Next: Verify in browser"
