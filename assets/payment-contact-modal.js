/**
 * DigiSchool Africa - Payment & Contact Modal V1.0
 * Multi-operator payment system (Orange, MTN, Moov, Wave/WhatsApp)
 */

(function() {
  'use strict';

  // Official numbers
  const CONTACT_NUMBERS = {
    ORANGE: '+2250714678289',
    MTN: '+2250665231403',
    MOOV: '+2250151666801',
    WAVE_WHATSAPP: '+2250151664653'
  };

  // Create modal HTML
  function createModal() {
    const modalHTML = `
      <div id="ds-payment-modal" class="ds-payment-modal" style="display: none;">
        <div class="ds-payment-overlay" onclick="closePaymentModal()"></div>
        <div class="ds-payment-content">
          <button class="ds-modal-close" onclick="closePaymentModal()" aria-label="Fermer">×</button>
          
          <h2 style="text-align: center; font-size: 28px; font-weight: 700; color: #0B1B3A; margin-bottom: 12px;">
            Nous contacter
          </h2>
          <p style="text-align: center; color: #546E7A; margin-bottom: 32px;">
            Choisissez votre moyen de contact
          </p>
          
          <div class="ds-operators-grid">
            <a href="tel:${CONTACT_NUMBERS.ORANGE}" class="ds-operator-card" data-operator="orange">
              <div class="ds-operator-icon" style="background: linear-gradient(135deg, #FF7900, #FF9E42);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <strong>Orange</strong>
              <span>Appeler</span>
            </a>
            
            <a href="tel:${CONTACT_NUMBERS.MTN}" class="ds-operator-card" data-operator="mtn">
              <div class="ds-operator-icon" style="background: linear-gradient(135deg, #FFCC00, #FFD633);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0B1B3A" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <strong>MTN</strong>
              <span>Appeler</span>
            </a>
            
            <a href="tel:${CONTACT_NUMBERS.MOOV}" class="ds-operator-card" data-operator="moov">
              <div class="ds-operator-icon" style="background: linear-gradient(135deg, #0066CC, #0080FF);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF7900" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <strong>Moov</strong>
              <span>Appeler</span>
            </a>
            
            <a href="https://wa.me/${CONTACT_NUMBERS.WAVE_WHATSAPP.replace('+', '')}" target="_blank" class="ds-operator-card" data-operator="whatsapp">
              <div class="ds-operator-icon" style="background: linear-gradient(135deg, #25D366, #128C7E);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <strong>WhatsApp</strong>
              <span>Chat Business</span>
            </a>
          </div>
          
          <p style="text-align: center; color: #7E57C2; font-size: 14px; margin-top: 24px; font-weight: 600;">
            Support 7j/7
          </p>
        </div>
      </div>
    `;

    const modalStyles = `
      <style>
        .ds-payment-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ds-modal-fade-in 0.3s ease;
        }
        
        @keyframes ds-modal-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .ds-payment-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
        }
        
        .ds-payment-content {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 48px 32px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: ds-modal-slide-up 0.3s ease;
        }
        
        @keyframes ds-modal-slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .ds-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
          transition: all 0.2s;
          color: #546E7A;
        }
        
        .ds-modal-close:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }
        
        .ds-operators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }
        
        .ds-operator-card {
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        
        .ds-operator-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          border-color: rgba(30, 136, 229, 0.3);
        }
        
        .ds-operator-icon {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
        
        .ds-operator-card strong {
          font-size: 16px;
          font-weight: 700;
          color: #0B1B3A;
        }
        
        .ds-operator-card span {
          font-size: 13px;
          color: #546E7A;
        }
        
        @media (max-width: 640px) {
          .ds-payment-content {
            padding: 32px 20px;
          }
          
          .ds-operators-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      </style>
    `;

    // Inject modal into DOM
    if (!document.getElementById('ds-payment-modal')) {
      document.body.insertAdjacentHTML('beforeend', modalStyles + modalHTML);
    }
  }

  // Open modal
  window.openPaymentModal = function() {
    createModal();
    const modal = document.getElementById('ds-payment-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  };

  // Close modal
  window.closePaymentModal = function() {
    const modal = document.getElementById('ds-payment-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  // Create modal on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createModal);
  } else {
    createModal();
  }

})();
