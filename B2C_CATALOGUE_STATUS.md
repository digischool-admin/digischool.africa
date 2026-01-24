# B2C CATALOGUE STATUS

## Current State (Commit: Previous)

### ✅ COMPLETED
- **Module Pricing**: Uniform 69,672 FCFA across ALL formations (formula: pack × 1.3 / modules)
- **Pack Pricing**: Correct 30% discount structure
  - 4 modules: 214,376 FCFA
  - 5 modules: 267,970 FCFA
  - 6 modules: 321,564 FCFA
- **CTA Links**: All "Acheter" buttons functional

### ⚠️ PENDING
**Formations Alignment (B2C ← B2B)**
- Current B2C: 8 formations
- Target B2B: 9 formations
- **Missing**: M365/Productivité (needs proper title alignment)

**Programs (Accordions)**
- ✅ Complete: 3/9 (Leadership, PMP, Data Analytics)
- ⚠️ Missing: 6/9 formations need accordion programs:
  1. Excel Avancé & IA (4 modules)
  2. Power BI & Business Intelligence (4 modules)
  3. Marketing Digital & IA (5 modules)
  4. Transformation Digitale (4 modules)
  5. RH Moderne & People Analytics (4 modules)
  6. M365 & Productivité (4 modules)

## Database Reference
See `/tmp/b2c_formations_db.py` for complete formations database with all program details.

## Next Steps
1. Add 6 missing accordion programs to b2c.html
2. Verify 9 formations total (add M365 if missing)
3. QA: 100% formations with programs before final commit
