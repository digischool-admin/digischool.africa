# DigiSchool Africa — FINAL HOTFIX IMPLEMENTATION PLAN

## Issues Identified & Fixes

### WORKSTREAM 1: Layout Fix (Centered Containers)
**Status**: Will verify containers on all pages
**Action**: Add/ensure `.ds-container { max-width: 1240px; margin: 0 auto; padding: 0 24px; }` applied to main content sections

### WORKSTREAM 2: Footer Partner Duplication
**Status**: Partner section appears only once per page (in footer via partner-logos injection)
**Action**: Verify no duplicate partner sections exist

### WORKSTREAM 3: Icon System Final
**Status**: Already using SVG icons from V2.2.x-K
**Action**: Final emoji scan shows 0 emojis

### WORKSTREAM 4: Auto-Evaluation Fixes
**Issue A**: Score visible on line 616 of assessment-v2-strict.js
**Fix**: Remove `<div class="formation-score-debug">Score: ${formation.score}</div>`

**Issue B**: Q6 multi-select - need to check max selection logic
**Fix**: Implement proper 3-selection limit with counter

### WORKSTREAM 5: Companies Coherence
**Issue**: Prompts exposed
**Fix**: Remove prompt examples, keep high-level "outils IA embarqués"

### WORKSTREAM 6: Legal Pages Premium UX
**Issue**: Missing accordions on 4 legal pages
**Fix**: Already have 30s summaries, need to add accordion structure

### WORKSTREAM 7: About Page Factual Fix
**Status**: SAGORY not found (already corrected to SAJORI)
**Action**: Verify and soften "200 entreprises" claim

---

## Implementation Priority
1. Remove score display from assessment (CRITICAL)
2. Fix Q6 multi-select bug (CRITICAL)
3. Remove prompts from companies.html (CRITICAL)
4. Add accordions to legal pages (HIGH)
5. Verify layout centering (HIGH)
6. Verify about page claims (MEDIUM)
