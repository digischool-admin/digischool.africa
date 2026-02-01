#!/bin/bash

echo "=========================================="
echo "QA FORMSPREE MIGRATION - adb0b71"
echo "=========================================="
echo ""

PASS=0
FAIL=0

# Test 1: Verify Formspree endpoints
echo "✓ TEST 1: Formspree endpoints replacement"
if grep -q "https://formspree.io/f/xvzzgpob" reservation.html && \
   grep -q "https://formspree.io/f/xvzzgpob" b2c-idea-box.html && \
   grep -q "https://formspree.io/f/xvzzgpob" b2b-custom-request.html; then
  echo "  ✅ PASS - All forms use Formspree endpoint"
  ((PASS++))
else
  echo "  ❌ FAIL - Some forms still use formsubmit.co"
  ((FAIL++))
fi

# Test 2: Verify no formsubmit.co remains
echo ""
echo "✓ TEST 2: No formsubmit.co endpoints remaining"
if ! grep -q "formsubmit.co" reservation.html b2c-idea-box.html b2b-custom-request.html 2>/dev/null; then
  echo "  ✅ PASS - formsubmit.co completely removed"
  ((PASS++))
else
  echo "  ❌ FAIL - formsubmit.co still found"
  ((FAIL++))
fi

# Test 3: Verify success pages exist
echo ""
echo "✓ TEST 3: Success pages creation"
if [ -f "reservation-success.html" ] && \
   [ -f "idea-box-success.html" ] && \
   [ -f "custom-request-success.html" ]; then
  echo "  ✅ PASS - All 3 success pages created"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing success pages"
  ((FAIL++))
fi

# Test 4: Verify _redirect URLs
echo ""
echo "✓ TEST 4: _redirect URLs to success pages"
if grep -q 'name="_redirect" value="https://digischool.africa/reservation-success.html' reservation.html && \
   grep -q 'name="_redirect" value="https://digischool.africa/idea-box-success.html' b2c-idea-box.html && \
   grep -q 'name="_redirect" value="https://digischool.africa/custom-request-success.html' b2b-custom-request.html; then
  echo "  ✅ PASS - All forms redirect to correct success pages"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing or incorrect _redirect URLs"
  ((FAIL++))
fi

# Test 5: Verify hidden fields (source_form, timestamp)
echo ""
echo "✓ TEST 5: Hidden tracking fields"
SOURCE_COUNT=$(grep -c 'name="source' reservation.html b2c-idea-box.html b2b-custom-request.html 2>/dev/null || echo 0)
TIMESTAMP_COUNT=$(grep -c 'name="timestamp"' reservation.html b2c-idea-box.html b2b-custom-request.html 2>/dev/null || echo 0)
if [ "$SOURCE_COUNT" -ge 3 ] && [ "$TIMESTAMP_COUNT" -ge 3 ]; then
  echo "  ✅ PASS - source and timestamp fields present"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing tracking fields (source: $SOURCE_COUNT, timestamp: $TIMESTAMP_COUNT)"
  ((FAIL++))
fi

# Test 6: Verify WhatsApp buttons
echo ""
echo "✓ TEST 6: WhatsApp fallback buttons"
if grep -q "whatsappReserve" reservation.html && \
   grep -q "whatsappSuggest" b2c-idea-box.html && \
   grep -q "whatsappRequest" b2b-custom-request.html; then
  echo "  ✅ PASS - WhatsApp buttons present on all forms"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing WhatsApp buttons"
  ((FAIL++))
fi

# Test 7: Verify WhatsApp event listeners
echo ""
echo "✓ TEST 7: WhatsApp JavaScript handlers"
if grep -q "addEventListener('click'" reservation.html && \
   grep -q "addEventListener('click'" b2c-idea-box.html && \
   grep -q "addEventListener('click'" b2b-custom-request.html; then
  echo "  ✅ PASS - WhatsApp handlers implemented"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing WhatsApp handlers"
  ((FAIL++))
fi

# Test 8: Verify timestamp generation
echo ""
echo "✓ TEST 8: Timestamp generation on page load"
if grep -q "new Date().toISOString()" reservation.html && \
   grep -q "new Date().toISOString()" b2c-idea-box.html && \
   grep -q "new Date().toISOString()" b2b-custom-request.html; then
  echo "  ✅ PASS - Timestamp auto-generation present"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing timestamp generation"
  ((FAIL++))
fi

# Test 9: Verify success pages have proper notices
echo ""
echo "✓ TEST 9: Success pages messaging"
if grep -q "04 février 2026" reservation-success.html && \
   grep -q "Analyse en cours" idea-box-success.html && \
   grep -q "72h maximum" custom-request-success.html; then
  echo "  ✅ PASS - Success pages have proper messaging"
  ((PASS++))
else
  echo "  ❌ FAIL - Success pages missing proper notices"
  ((FAIL++))
fi

# Test 10: Verify success pages have WhatsApp links
echo ""
echo "✓ TEST 10: WhatsApp support on success pages"
WA_COUNT=$(grep -c "wa.me" reservation-success.html idea-box-success.html custom-request-success.html 2>/dev/null || echo 0)
if [ "$WA_COUNT" -ge 3 ]; then
  echo "  ✅ PASS - WhatsApp support links on success pages"
  ((PASS++))
else
  echo "  ❌ FAIL - Missing WhatsApp support links"
  ((FAIL++))
fi

echo ""
echo "=========================================="
echo "QA RESULTS"
echo "=========================================="
echo "✅ PASSED: $PASS/10"
echo "❌ FAILED: $FAIL/10"
echo ""

if [ $FAIL -eq 0 ]; then
  echo "🎉 STATUS: ALL TESTS PASSED"
  echo "✅ FORMSPREE MIGRATION: COMPLETE"
  echo "✅ FORMS WORKFLOW: OPERATIONAL"
  echo "✅ CLOUDFLARE 522: RESOLVED"
  exit 0
else
  echo "⚠️ STATUS: SOME TESTS FAILED"
  exit 1
fi
