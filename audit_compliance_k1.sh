#!/bin/bash

# V2.2.x-K.1 COMPLIANCE AUDIT SCRIPT
# ZERO TOLERANCE — Production Verification

PAGES=(
  "index.html"
  "b2c-assessment.html"
  "b2c.html"
  "companies.html"
  "parcours.html"
  "about-premium.html"
  "contact.html"
  "cgu-v2.2.html"
  "cgv-v2.2.html"
  "mentions-legales-v2.2.html"
  "politique-confidentialite-v2.2.html"
  "b2c-learn.html"
  "b2c-module.html"
)

echo "============================================"
echo "V2.2.x-K.1 COMPLIANCE AUDIT"
echo "============================================"
echo ""

# B1 — RAILS/GRADIENT DETECTION
echo "B1 — RAILS & GRADIENT DETECTION"
echo "-------------------------------------------"
for PAGE in "${PAGES[@]}"; do
  if [ -f "$PAGE" ]; then
    # Check for rails CSS
    RAILS_CSS=$(grep -c "zoom-layout.css\|rails.*css\|side-rail" "$PAGE" 2>/dev/null || echo "0")
    
    # Check for gradient backgrounds
    GRADIENT_BG=$(grep -c "gradient.*rail\|flashy.*side\|layout-zoom" "$PAGE" 2>/dev/null || echo "0")
    
    if [ "$RAILS_CSS" -gt 0 ] || [ "$GRADIENT_BG" -gt 0 ]; then
      echo "❌ FAIL: $PAGE (rails_css=$RAILS_CSS, gradient=$GRADIENT_BG)"
    else
      echo "✅ PASS: $PAGE (no rails detected)"
    fi
  fi
done
echo ""

# B2 — HEADER/FOOTER COUNT
echo "B2 — HEADER/FOOTER DUPLICATION CHECK"
echo "-------------------------------------------"
for PAGE in "${PAGES[@]}"; do
  if [ -f "$PAGE" ]; then
    HEADER_COUNT=$(grep -c "<header" "$PAGE" 2>/dev/null || echo "0")
    FOOTER_COUNT=$(grep -c "<footer" "$PAGE" 2>/dev/null || echo "0")
    
    if [ "$HEADER_COUNT" -eq 0 ] && [ "$FOOTER_COUNT" -eq 0 ]; then
      echo "✅ PASS: $PAGE (header=$HEADER_COUNT, footer=$FOOTER_COUNT - injected via JS)"
    elif [ "$HEADER_COUNT" -le 1 ] && [ "$FOOTER_COUNT" -le 1 ]; then
      echo "⚠️  WARN: $PAGE (header=$HEADER_COUNT, footer=$FOOTER_COUNT)"
    else
      echo "❌ FAIL: $PAGE (header=$HEADER_COUNT, footer=$FOOTER_COUNT - DUPLICATES)"
    fi
  fi
done
echo ""

# B4 — EMOJI DETECTION
echo "B4 — EMOJI DETECTION"
echo "-------------------------------------------"
for PAGE in "${PAGES[@]}"; do
  if [ -f "$PAGE" ]; then
    # Common emojis to detect
    EMOJI_COUNT=$(grep -oP '[🎯🚀📞📧✅❌🎓📚✨⏱️🏢💰📱📦🚫👤👔🌍🔒🎯🛡️👁️]' "$PAGE" 2>/dev/null | wc -l)
    
    if [ "$EMOJI_COUNT" -gt 0 ]; then
      echo "❌ FAIL: $PAGE (emojis_found=$EMOJI_COUNT)"
    else
      echo "✅ PASS: $PAGE (no emojis detected)"
    fi
  fi
done
echo ""

# PARTNER LOGOS CHECK
echo "PARTNER LOGOS CHECK"
echo "-------------------------------------------"
for PAGE in "${PAGES[@]}"; do
  if [ -f "$PAGE" ]; then
    PARTNER_LOGOS=$(grep -c "ds-partners-section\|partner-logos" "$PAGE" 2>/dev/null || echo "0")
    
    if [ "$PARTNER_LOGOS" -gt 0 ]; then
      echo "✅ PASS: $PAGE (partner logos present)"
    else
      echo "❌ FAIL: $PAGE (partner logos missing)"
    fi
  fi
done
echo ""

echo "============================================"
echo "AUDIT COMPLETE"
echo "============================================"
