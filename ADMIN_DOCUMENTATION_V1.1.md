# DigiSchool Africa V1.1 PREMIUM - Admin Documentation

**Version**: 1.1.0  
**Date**: 2026-01-18  
**Status**: PRODUCTION READY

---

## 📋 Table of Contents

1. [Admin Superpowers Overview](#admin-superpowers-overview)
2. [Fast-Track Learning (Test Mode)](#fast-track-learning-test-mode)
3. [User & Access Management](#user-access-management)
4. [Pricing & Business Control](#pricing-business-control)
5. [Content & Platform Governance](#content-platform-governance)
6. [Technical Autonomy](#technical-autonomy)
7. [Admin Panel Access](#admin-panel-access)

---

## 🚀 Admin Superpowers Overview

DigiSchool Africa V1.1 PREMIUM introduces **TRUE ADMIN ROLE** with FULL PLATFORM CONTROL. The admin has complete autonomy to manage the platform without GenSpark dependency.

### Key Capabilities:
- ✅ **Fast-Track Learning**: Test courses and modules instantly
- ✅ **User Management**: Full control over learner access and progression
- ✅ **Pricing Control**: Modify prices and promotions in real-time
- ✅ **Content Governance**: Enable/disable courses, edit metadata
- ✅ **Technical Autonomy**: Configuration-driven platform (no code changes needed)

---

## ⚡ Fast-Track Learning (Test Mode)

### Purpose
Allow admin to **instantly access any B2C course/module** to test learner experience without completing progression requirements.

### How to Use
1. **Access Admin Premium Panel**: [https://digischool.africa/admin-premium.html](https://digischool.africa/admin-premium.html)
2. **Navigate to "Fast-Track Testing"** section
3. **Select Course**: Choose from 9 available courses
4. **Select Module**: Choose any module within the course
5. **Click "Enter Course"**: Instantly bypass progression rules and enter the module

### Features
- ✅ **Instant Access**: No prerequisites required
- ✅ **Mark Complete**: Manually mark modules as completed
- ✅ **Certificate Generation**: Trigger certificate manually for testing
- ✅ **Simulate Learner**: Experience the platform as a learner would

### Technical Implementation
```javascript
// admin-superpowers.js
AdminFastTrack.enterCourse(courseId, moduleId);
// Bypasses progression rules and grants immediate access
```

---

## 👥 User & Access Management

### View All Users
- **Location**: Admin Premium Panel > User Management
- **Data Displayed**: Name, Email, Purchased Courses, Progress %, Certificates

### Grant/Revoke Access
**Grant Course Access**:
```javascript
AdminUser.grantCourseAccess(userId, courseId);
```

**Revoke Course Access**:
```javascript
AdminUser.revokeCourseAccess(userId, courseId);
```

### Reset User Progression
```javascript
AdminUser.resetProgress(userId, courseId);
// Clears all progress and starts fresh
```

### Impersonate Learner (Read-Only)
```javascript
AdminUser.impersonate(userId);
// View the platform as this user (read-only, no modifications)
```

---

## 💰 Pricing & Business Control

### Modify Pack Prices
**Location**: Admin Config (`admin-config.js`)

```javascript
const PRICING_CONFIG = {
  pack_prices: {
    short: 180000,    // 2-3 days courses (XOF)
    medium: 245000,   // 4-5 days courses
    long: 285000      // 6-10 days courses
  }
};
```

**Change prices instantly**:
1. Edit `admin-config.js`
2. Save file
3. Refresh platform — prices update immediately

### Module Pricing Rule
Module price = `(Pack Price × 1.25) / Number of Modules`

**Example**:
- Pack price: 245,000 XOF
- Modules: 4
- Module price: `Math.ceil((245000 × 1.25) / 4)` = **76,563 XOF**

### Promotions & Discounts
```javascript
const PROMOTIONS = {
  black_friday: {
    discount: 0.20,  // 20% off
    valid_until: '2026-12-01',
    courses: ['all']  // Apply to all courses
  }
};
```

---

## 🎯 Content & Platform Governance

### Enable/Disable Courses
```javascript
AdminContent.disableCourse(courseId);
// Hides course from B2C catalog and B2B portal
```

### Edit Course Metadata
```javascript
AdminContent.updateCourse(courseId, {
  title: 'New Title',
  subtitle: 'New Subtitle',
  short_description: 'New Description'
});
```

### Toggle Features ON/OFF
```javascript
const FEATURE_FLAGS = {
  referral_program: true,
  whatsapp_assistant: true,
  assessment: true,
  certificates: true
};
```

### Override Business Rules
```javascript
// Example: Allow pack purchase without assessment
AdminBusiness.bypassAssessment(userId, courseId);
```

---

## 🛠️ Technical Autonomy (NO GENSPARK DEPENDENCY)

### Configuration Files
| File | Purpose | Editable by Admin |
|------|---------|-------------------|
| `admin-config.js` | Pricing, promotions, feature flags | ✅ YES |
| `courses-data.js` | Course catalog (titles, descriptions, modules) | ✅ YES |
| `course-icon-mapping.js` | Icon assignments for courses | ✅ YES |
| `security-monitor.js` | Security settings | ⚠️ ADVANCED USERS ONLY |

### Safe Editing Guidelines
✅ **SAFE TO EDIT**:
- Pricing values
- Course titles, subtitles, descriptions
- Feature flags (true/false)
- Promotion rules

⚠️ **CAUTION REQUIRED**:
- JavaScript logic (if/else statements)
- Function definitions
- API endpoints

🚫 **DO NOT EDIT** (without technical support):
- Core platform files (HTML structure)
- Security-critical code
- Database connection strings

### Documentation Separation
| Category | Files | Admin Editable |
|----------|-------|----------------|
| **Content** | courses-data.js | ✅ YES |
| **Pricing** | admin-config.js (PRICING_CONFIG) | ✅ YES |
| **Rules** | admin-config.js (FEATURE_FLAGS) | ✅ YES |
| **UI** | HTML files | ⚠️ ADVANCED ONLY |

---

## 🔐 Admin Panel Access

### URLs
- **Standard Admin**: [https://digischool.africa/admin.html](https://digischool.africa/admin.html)
- **Premium Admin**: [https://digischool.africa/admin-premium.html](https://digischool.africa/admin-premium.html)

### Login Credentials
**Username**: `admin`  
**Password**: `DigiSchool2026!`

⚠️ **Security Note**: Change the password in production by editing `admin.html` line 45:
```javascript
const ADMIN_PASSWORD = 'YOUR_NEW_SECURE_PASSWORD_HERE';
```

### Admin Capabilities Matrix

| Capability | Standard Admin | Premium Admin |
|------------|----------------|---------------|
| View Dashboard | ✅ | ✅ |
| View Users | ✅ | ✅ |
| Fast-Track Testing | ❌ | ✅ |
| Grant/Revoke Access | ❌ | ✅ |
| Edit Pricing | ❌ | ✅ |
| Content Governance | ❌ | ✅ |
| Security Monitoring | ❌ | ✅ |

---

## 📞 Support & Escalation

### Self-Service (Admin Autonomous)
✅ Change prices → Edit `admin-config.js`  
✅ Add/remove courses → Edit `courses-data.js`  
✅ Enable/disable features → Edit feature flags

### Technical Support Needed
⚠️ Platform bugs or errors  
⚠️ Advanced customizations (CSS, JS logic)  
⚠️ Security incidents

**Contact**: support@digischool.africa  
**WhatsApp**: +225 05 05 11 11 02

---

## ✅ Admin Checklist

### Weekly Tasks
- [ ] Review user progression
- [ ] Check certificate requests
- [ ] Monitor payment status
- [ ] Test new course modules (fast-track)

### Monthly Tasks
- [ ] Review pricing strategy
- [ ] Analyze engagement metrics
- [ ] Update course content if needed
- [ ] Run security scan

### Quarterly Tasks
- [ ] Review business rules
- [ ] Update promotions
- [ ] Conduct platform audit
- [ ] Train new admin users

---

**END OF ADMIN DOCUMENTATION V1.1**
