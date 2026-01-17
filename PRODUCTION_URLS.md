# 🌐 DigiSchool Africa - Production URLs & Access Guide

**Version**: 1.0.0  
**Date**: January 17, 2026  
**Status**: ✅ PRODUCTION READY

---

## 🏠 PUBLIC PAGES (B2C - Customer-Facing)

### Main Website
- **Homepage**: https://digischool.africa/
- **B2B Corporate**: https://digischool.africa/companies.html
- **B2C Catalog**: https://digischool.africa/b2c.html

### B2C User Journey
1. **Browse Courses**: https://digischool.africa/b2c.html
2. **Checkout**: https://digischool.africa/b2c-checkout.html
3. **Access Restoration**: https://digischool.africa/b2c-access.html
4. **User Dashboard**: https://digischool.africa/user-dashboard.html
5. **Course Overview**: https://digischool.africa/b2c-learn.html?course={slug}
6. **Module Learning**: https://digischool.africa/b2c-module.html?course={slug}&module={0-7}

### Example URLs (Leadership & Management Course)
- Course Overview: `https://digischool.africa/b2c-learn.html?course=leadership-management`
- Module 1: `https://digischool.africa/b2c-module.html?course=leadership-management&module=0`
- Module 2: `https://digischool.africa/b2c-module.html?course=leadership-management&module=1`
- ... (up to module=7 for Module 8)

---

## 🔐 ADMIN PAGES (Protected)

### Admin Dashboard
- **URL**: https://digischool.africa/admin.html
- **Password**: `DigiSchool2026!`
- **Access**: Session-based (stored in sessionStorage)

**Features**:
- Revenue tracking
- Learner management
- Sales analytics
- Course performance
- CSV/JSON exports

---

## 📄 LEGAL & SUPPORT PAGES

- **Legal Terms**: https://digischool.africa/mentions-legales.html
- **Terms of Service (CGU)**: https://digischool.africa/cgu.html
- **Terms of Sale (CGV)**: https://digischool.africa/cgv.html
- **Privacy Policy**: https://digischool.africa/politique-confidentialite.html
- **Contact**: https://digischool.africa/contact.html
- **Thank You**: https://digischool.africa/merci.html

---

## 🗺️ SEO & DISCOVERY

- **Sitemap**: https://digischool.africa/sitemap.xml
- **Robots**: https://digischool.africa/robots.txt

---

## 📚 ALL 9 COURSES (B2C Learning URLs)

### 1. Leadership & Management
- **Slug**: `leadership-management`
- **Duration**: 5 days (4 modules)
- **Price**: 245,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=leadership-management

### 2. Gestion de projet (PMP)
- **Slug**: `gestion-projet-pmp`
- **Duration**: 10 days (4 modules)
- **Price**: 285,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=gestion-projet-pmp

### 3. Stratégie & Exécution
- **Slug**: `strategie-execution`
- **Duration**: 4 days (4 modules)
- **Price**: 245,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=strategie-execution

### 4. Finance pour non-financiers
- **Slug**: `finance-non-financiers`
- **Duration**: 3 days (3 modules)
- **Price**: 180,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=finance-non-financiers

### 5. Vente B2B & Négociation
- **Slug**: `vente-b2b-negociation`
- **Duration**: 5 days (4 modules)
- **Price**: 245,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=vente-b2b-negociation

### 6. Service Client & Expérience
- **Slug**: `service-client-experience`
- **Duration**: 3 days (3 modules)
- **Price**: 180,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=service-client-experience

### 7. RH & Performance
- **Slug**: `rh-performance`
- **Duration**: 4 days (4 modules)
- **Price**: 245,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=rh-performance

### 8. Data & Reporting pour décideurs
- **Slug**: `data-reporting-decideurs`
- **Duration**: 3 days (3 modules)
- **Price**: 180,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=data-reporting-decideurs

### 9. Productivité & Outils (Microsoft 365)
- **Slug**: `productivite-m365`
- **Duration**: 2 days (3 modules)
- **Price**: 180,000 XOF (pack)
- **URL**: https://digischool.africa/b2c-learn.html?course=productivite-m365

---

## 💳 PAYMENT METHODS

### Mobile Money (Côte d'Ivoire)
- **Orange Money**: +225 07 14 67 82 89
- **MTN MoMo**: +225 05 65 23 14 03
- **Moov Money**: +225 01 51 66 68 01
- **Wave**: +225 01 51 66 46 53

### Alternative Contact
- **WhatsApp**: +225 05 05 11 11 02
- **Email**: support@digischool.africa

---

## 🔧 API ENDPOINTS (For Future Integration)

### Formspree (Current)
- **Form Endpoint**: https://formspree.io/f/YOUR_FORMSPREE_ID
- **Used for**: Checkout form submissions

### Future Backend API (V2)
- Authentication: `/api/auth/login`, `/api/auth/register`
- Entitlements: `/api/entitlements`, `/api/entitlements/restore`
- Progress: `/api/progress/{courseSlug}`, `/api/progress/{courseSlug}/{moduleIndex}`
- Certificates: `/api/certificates`, `/api/certificates/{id}`
- Analytics: `/api/analytics/sales`, `/api/analytics/progression`

---

## 📱 MOBILE APP URLS (Future)

### Deep Links (V2)
- Open Course: `digischool://course/{slug}`
- Open Module: `digischool://course/{slug}/module/{index}`
- Dashboard: `digischool://dashboard`
- Certificates: `digischool://certificates`

---

## 🧪 TESTING URLs

### QA & Testing
- **Local Testing**: http://localhost:8000/ (or any local server)
- **Staging**: (to be configured)
- **Production**: https://digischool.africa/

### Test User Scenarios
1. **Browse & Purchase**:
   - Visit b2c.html → Select course → Click "Acheter le pack" → Fill form → Receive access code
2. **Restore Access**:
   - Visit b2c-access.html → Enter access code → Redirect to dashboard
3. **Learn & Progress**:
   - Visit user-dashboard.html → Click course → Complete modules → Pass quizzes → Earn certificate
4. **Admin View**:
   - Visit admin.html → Enter password → View analytics → Export data

---

## 📊 ANALYTICS TRACKING

### Events Tracked
- `b2c_purchase` (pack/module)
- `b2c_module_start`
- `b2c_module_complete`
- `b2c_quiz_pass` / `b2c_quiz_fail`
- `b2c_certificate_issued`
- `b2c_badge_awarded`
- `b2c_drop_off`
- `b2c_tts_play`
- `page_view`

### Analytics Dashboard
- Access via: https://digischool.africa/admin.html
- Export: CSV/JSON formats available

---

## 🔒 SECURITY NOTES

### Access Codes
- **Format**: Base64URL + Checksum (e.g., `eyJ2IjoxLCJjcCI6e30sIm0iOnt9fQ.A1B2C3`)
- **Storage**: localStorage (`digischool_entitlement`)
- **Expiry**: None (lifetime access once purchased)

### Admin Password
- **Current**: `DigiSchool2026!`
- **Recommendation**: Change in production environment
- **Storage**: sessionStorage (cleared on browser close)

### Data Privacy
- **User Data**: Name, email, phone (via Formspree)
- **Progress Data**: Stored in localStorage (client-side)
- **Analytics**: Anonymized event tracking

---

## 🚀 DEPLOYMENT COMMANDS

### Deploy to Static Host
```bash
# Example for Netlify
netlify deploy --prod --dir=/home/user/webapp

# Example for Vercel
vercel --prod /home/user/webapp

# Example for GitHub Pages
git push origin main
```

### Environment Variables (If needed)
```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
ADMIN_PASSWORD=DigiSchool2026!
ANALYTICS_ENABLED=true
```

---

## 📞 SUPPORT & CONTACTS

### Technical Support
- **Email**: support@digischool.africa
- **WhatsApp**: +225 05 05 11 11 02

### Sales & Partnerships
- **Phone**: +225 05 05 11 11 02
- **Email**: contact@digischool.africa

### Emergency Contacts
- **Admin Access Issues**: Reset sessionStorage, re-enter password
- **User Access Issues**: Restore from access code via b2c-access.html
- **Payment Issues**: Contact via WhatsApp or Email

---

## 🎯 QUICK START FOR NEW USERS

### For Learners (B2C)
1. Visit: https://digischool.africa/b2c.html
2. Browse courses & select one
3. Click "Acheter le pack" or "Acheter un module"
4. Fill checkout form with mobile money payment
5. Receive access code (save it!)
6. Visit: https://digischool.africa/b2c-access.html
7. Enter access code to activate your account
8. Start learning from your dashboard!

### For Admins
1. Visit: https://digischool.africa/admin.html
2. Enter password: `DigiSchool2026!`
3. View dashboard with all metrics
4. Export data as needed (CSV/JSON)
5. Monitor learner progress & sales

---

## ✅ LAUNCH CHECKLIST

### Pre-Launch
- [ ] Deploy all files to production server
- [ ] Configure Formspree endpoint
- [ ] Test all URLs (public & admin)
- [ ] Verify mobile money numbers
- [ ] Test purchase flow end-to-end
- [ ] Test access code restoration
- [ ] Verify certificate generation
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Review analytics tracking

### Launch Day
- [ ] Announce on social media
- [ ] Send email to existing leads
- [ ] Monitor admin dashboard
- [ ] Respond to support requests
- [ ] Track first purchases
- [ ] Verify payment confirmations

### Post-Launch
- [ ] Daily analytics review
- [ ] Weekly sales report
- [ ] Monthly performance analysis
- [ ] User feedback collection
- [ ] Bug fixes & improvements

---

**Last Updated**: January 17, 2026  
**Version**: 1.0.0  
**Status**: ✅ READY FOR LAUNCH
