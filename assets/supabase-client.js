/**
 * DigiSchool Africa — Supabase Client Configuration
 * V2.2.x-B Sellable Release
 * Date: 2026-01-18
 * 
 * IMPORTANT: Remplacer SUPABASE_URL et SUPABASE_ANON_KEY par vos vraies valeurs
 */

(function() {
  'use strict';
  
  // ========== CONFIGURATION ==========
  const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
  const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';
  
  // Vérification configuration
  const isConfigured = SUPABASE_URL.includes('supabase.co') && 
                       !SUPABASE_URL.includes('YOUR_PROJECT') &&
                       SUPABASE_ANON_KEY.length > 20;
  
  if (!isConfigured) {
    console.warn('⚠️ Supabase non configuré — Mode fallback activé');
    window.__SUPABASE_CONFIGURED__ = false;
  } else {
    window.__SUPABASE_CONFIGURED__ = true;
  }
  
  // ========== CLIENT SUPABASE ==========
  let supabaseClient = null;
  
  if (window.__SUPABASE_CONFIGURED__ && typeof supabase !== 'undefined') {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✅ Supabase client initialisé');
    } catch (error) {
      console.error('❌ Erreur init Supabase:', error);
      window.__SUPABASE_CONFIGURED__ = false;
    }
  }
  
  // ========== API WRAPPER ==========
  window.DigiSchoolDB = {
    
    // Check if Supabase is available
    isAvailable() {
      return window.__SUPABASE_CONFIGURED__ && supabaseClient !== null;
    },
    
    // ===== LEADS =====
    async saveLead(data) {
      if (!this.isAvailable()) {
        console.log('📧 Fallback: Lead sauvegardé localement', data);
        return { success: true, fallback: true, data };
      }
      
      const { data: result, error } = await supabaseClient
        .from('leads')
        .insert({
          email: data.email,
          source: data.source || 'unknown',
          metadata: data.metadata || {},
          consent: data.consent || true,
          created_at: new Date().toISOString()
        });
      
      if (error) {
        console.error('❌ Erreur save lead:', error);
        return { success: false, error };
      }
      
      console.log('✅ Lead enregistré:', result);
      return { success: true, data: result };
    },
    
    // ===== PAYMENT REQUESTS =====
    async createPaymentRequest(data) {
      if (!this.isAvailable()) {
        console.log('💳 Fallback: Payment request local', data);
        const localId = `DS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return { success: true, fallback: true, data: { id: localId, ...data } };
      }
      
      const { data: result, error } = await supabaseClient
        .from('payment_requests')
        .insert({
          email: data.email,
          invoice_id: data.invoice_id,
          amount: data.amount,
          items: data.items,
          status: 'pending',
          created_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) {
        console.error('❌ Erreur create payment:', error);
        return { success: false, error };
      }
      
      console.log('✅ Payment request créé:', result);
      return { success: true, data: result };
    },
    
    // ===== PAYMENT PROOFS =====
    async uploadPaymentProof(paymentRequestId, file) {
      if (!this.isAvailable()) {
        console.log('📎 Fallback: Proof upload simulé');
        return { success: true, fallback: true, path: 'local-simulation' };
      }
      
      const fileName = `${paymentRequestId}_${Date.now()}_${file.name}`;
      
      const { data, error } = await supabaseClient.storage
        .from('payment-proofs')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (error) {
        console.error('❌ Erreur upload proof:', error);
        return { success: false, error };
      }
      
      // Enregistrer dans table payment_proofs
      await supabaseClient
        .from('payment_proofs')
        .insert({
          payment_request_id: paymentRequestId,
          storage_path: data.path,
          created_at: new Date().toISOString()
        });
      
      console.log('✅ Proof uploaded:', data.path);
      return { success: true, path: data.path };
    },
    
    // ===== ENTITLEMENTS =====
    async createEntitlement(data) {
      if (!this.isAvailable()) {
        console.log('🔓 Fallback: Entitlement local', data);
        return { success: true, fallback: true };
      }
      
      const { data: result, error } = await supabaseClient
        .from('entitlements')
        .insert({
          email: data.email,
          user_id: data.user_id || null,
          course_id: data.course_id,
          modules_unlocked: data.modules_unlocked || [],
          active_until: data.active_until || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          created_at: new Date().toISOString()
        });
      
      if (error) {
        console.error('❌ Erreur create entitlement:', error);
        return { success: false, error };
      }
      
      console.log('✅ Entitlement créé:', result);
      return { success: true, data: result };
    },
    
    // ===== CUSTOM TRAINING REQUESTS (B2B) =====
    async submitCustomTraining(data) {
      if (!this.isAvailable()) {
        console.log('🏢 Fallback: Custom training email fallback', data);
        // Fallback: mailto
        const subject = encodeURIComponent('Demande Formation Sur-Mesure — DigiSchool');
        const body = encodeURIComponent(`
Entreprise: ${data.company}
Contact: ${data.contact}
Email: ${data.email}
Téléphone: ${data.phone || 'N/A'}
Secteur: ${data.sector || 'N/A'}
Effectif: ${data.headcount || 'N/A'}

Objectifs pédagogiques:
${data.needs_text}
        `);
        window.location.href = `mailto:contact@digischool.africa?subject=${subject}&body=${body}`;
        return { success: true, fallback: true };
      }
      
      const { data: result, error } = await supabaseClient
        .from('custom_training_requests')
        .insert({
          company: data.company,
          contact: data.contact,
          email: data.email,
          phone: data.phone || null,
          sector: data.sector || null,
          headcount: data.headcount || null,
          needs_text: data.needs_text,
          attachments: data.attachments || [],
          status: 'pending',
          created_at: new Date().toISOString()
        });
      
      if (error) {
        console.error('❌ Erreur submit custom training:', error);
        return { success: false, error };
      }
      
      console.log('✅ Custom training request soumis:', result);
      return { success: true, data: result };
    },
    
    // ===== IDEAS BOX (B2C) =====
    async submitIdea(data) {
      if (!this.isAvailable()) {
        console.log('💡 Fallback: Idea box email fallback', data);
        const subject = encodeURIComponent('Suggestion Formation — DigiSchool');
        const body = encodeURIComponent(`
URL Formation: ${data.url}
Description: ${data.description}
Email: ${data.email || 'Non fourni'}
        `);
        window.location.href = `mailto:contact@digischool.africa?subject=${subject}&body=${body}`;
        return { success: true, fallback: true };
      }
      
      const { data: result, error } = await supabaseClient
        .from('ideas_box')
        .insert({
          url: data.url,
          description: data.description,
          email: data.email || null,
          status: 'pending',
          created_at: new Date().toISOString()
        });
      
      if (error) {
        console.error('❌ Erreur submit idea:', error);
        return { success: false, error };
      }
      
      console.log('✅ Idea soumise:', result);
      return { success: true, data: result };
    },
    
    // ===== AUDIT LOG =====
    async logAction(action, details) {
      if (!this.isAvailable()) return { success: true, fallback: true };
      
      await supabaseClient
        .from('audit_log')
        .insert({
          action,
          details,
          created_at: new Date().toISOString()
        });
    }
  };
  
  console.log('✅ DigiSchoolDB initialized', { 
    configured: window.__SUPABASE_CONFIGURED__,
    fallbackMode: !window.__SUPABASE_CONFIGURED__
  });
  
})();
