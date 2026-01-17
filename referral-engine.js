/**
 * DigiSchool Africa - Referral Engine (No Backend)
 * V1: Client-side with admin validation workflow
 * Date: 2026-01-17
 */

class ReferralEngine {
  constructor() {
    this.storageKey = 'digischool_referrals';
    this.vouchersKey = 'digischool_vouchers';
    this.init();
  }

  init() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify({
        userCode: null,
        referrals: [],
        earnedVouchers: []
      }));
    }
    
    if (!localStorage.getItem(this.vouchersKey)) {
      localStorage.setItem(this.vouchersKey, JSON.stringify([]));
    }
  }

  // Generate user referral code
  generateReferralCode(userEmail) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const hash = this.simpleHash(userEmail + timestamp);
    return `DS-${hash.substring(0, 4)}${random}`;
  }

  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36).toUpperCase();
  }

  // Get or create user's referral code
  getUserReferralCode(userEmail) {
    const data = this.getReferralData();
    
    if (!data.userCode) {
      data.userCode = this.generateReferralCode(userEmail);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
    
    return data.userCode;
  }

  // Submit referral (used by referee during checkout)
  submitReferral(referrerCode, refereeEmail, refereeOrder) {
    if (!referrerCode) return { success: false, error: 'No referral code provided' };
    
    const referral = {
      id: 'ref_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      referrerCode,
      refereeEmail,
      orderDetails: refereeOrder,
      status: 'pending', // pending, approved, rejected
      submittedAt: new Date().toISOString(),
      approvedAt: null,
      voucherCode: null
    };

    // Store in pending referrals (admin will review)
    const data = this.getReferralData();
    data.referrals.push(referral);
    localStorage.setItem(this.storageKey, JSON.stringify(data));

    // Track event
    this.trackEvent('referral_code_used', {
      referrerCode,
      refereeEmail,
      orderId: referral.id
    });

    return { success: true, referralId: referral.id };
  }

  // Get all referrals (for user dashboard)
  getUserReferrals() {
    const data = this.getReferralData();
    return data.referrals.filter(r => r.status === 'approved');
  }

  // Get earned vouchers
  getEarnedVouchers() {
    const data = this.getReferralData();
    return data.earnedVouchers || [];
  }

  // Admin: Get all pending referrals
  getPendingReferrals() {
    const data = this.getReferralData();
    return data.referrals.filter(r => r.status === 'pending');
  }

  // Admin: Approve referral and issue voucher
  approveReferral(referralId, voucherAmount = 10000) {
    const data = this.getReferralData();
    const referral = data.referrals.find(r => r.id === referralId);
    
    if (!referral) {
      return { success: false, error: 'Referral not found' };
    }

    // Generate voucher
    const voucher = this.generateVoucher(referral.referrerCode, voucherAmount);
    
    // Update referral status
    referral.status = 'approved';
    referral.approvedAt = new Date().toISOString();
    referral.voucherCode = voucher.code;

    // Add voucher to earned vouchers
    if (!data.earnedVouchers) data.earnedVouchers = [];
    data.earnedVouchers.push(voucher);

    localStorage.setItem(this.storageKey, JSON.stringify(data));

    // Track event
    this.trackEvent('referral_approved', {
      referralId,
      voucherCode: voucher.code,
      amount: voucherAmount
    });

    return { success: true, voucher };
  }

  // Admin: Reject referral
  rejectReferral(referralId, reason = '') {
    const data = this.getReferralData();
    const referral = data.referrals.find(r => r.id === referralId);
    
    if (!referral) {
      return { success: false, error: 'Referral not found' };
    }

    referral.status = 'rejected';
    referral.rejectedAt = new Date().toISOString();
    referral.rejectionReason = reason;

    localStorage.setItem(this.storageKey, JSON.stringify(data));

    return { success: true };
  }

  // Generate voucher code
  generateVoucher(referrerCode, amount) {
    const code = 'VOUCHER-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const voucher = {
      code,
      amount, // in FCFA
      type: 'referral',
      referrerCode,
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days
      used: false,
      usedAt: null,
      usedBy: null
    };

    // Store voucher
    const vouchers = this.getAllVouchers();
    vouchers.push(voucher);
    localStorage.setItem(this.vouchersKey, JSON.stringify(vouchers));

    return voucher;
  }

  // Validate and apply voucher at checkout
  validateVoucher(voucherCode) {
    const vouchers = this.getAllVouchers();
    const voucher = vouchers.find(v => v.code === voucherCode);

    if (!voucher) {
      return { valid: false, error: 'Code promo invalide' };
    }

    if (voucher.used) {
      return { valid: false, error: 'Ce code a déjà été utilisé' };
    }

    const now = new Date();
    const expires = new Date(voucher.expiresAt);
    if (now > expires) {
      return { valid: false, error: 'Ce code a expiré' };
    }

    return { valid: true, voucher };
  }

  // Mark voucher as used
  useVoucher(voucherCode, userEmail) {
    const vouchers = this.getAllVouchers();
    const voucher = vouchers.find(v => v.code === voucherCode);

    if (!voucher || voucher.used) {
      return { success: false };
    }

    voucher.used = true;
    voucher.usedAt = new Date().toISOString();
    voucher.usedBy = userEmail;

    localStorage.setItem(this.vouchersKey, JSON.stringify(vouchers));

    // Track event
    this.trackEvent('voucher_applied', {
      voucherCode,
      amount: voucher.amount,
      userEmail
    });

    return { success: true, discount: voucher.amount };
  }

  // Get all vouchers (admin view)
  getAllVouchers() {
    try {
      return JSON.parse(localStorage.getItem(this.vouchersKey) || '[]');
    } catch (e) {
      return [];
    }
  }

  // Get referral data
  getReferralData() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '{"userCode":null,"referrals":[],"earnedVouchers":[]}');
    } catch (e) {
      return { userCode: null, referrals: [], earnedVouchers: [] };
    }
  }

  // Track event (fail-safe)
  trackEvent(eventName, data) {
    if (window.B2CAnalytics && window.B2CAnalytics.addEvent) {
      window.B2CAnalytics.addEvent(eventName, data);
    }
  }

  // Export referrals (admin)
  exportReferralsCSV() {
    const data = this.getReferralData();
    let csv = 'ID,Referrer Code,Referee Email,Status,Submitted At,Voucher Code,Order Details\n';
    
    data.referrals.forEach(r => {
      csv += `${r.id},${r.referrerCode},${r.refereeEmail},${r.status},${r.submittedAt},${r.voucherCode || ''},${JSON.stringify(r.orderDetails).replace(/"/g, '""')}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `referrals-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // Copy referral code to clipboard
  copyReferralCode(code) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        this.trackEvent('referral_code_copied', { code });
        return true;
      });
    } else {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.trackEvent('referral_code_copied', { code });
      return true;
    }
  }
}

// Global instance
window.ReferralEngine = new ReferralEngine();
