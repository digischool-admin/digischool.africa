/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — CHATBOT MANAGER V2.2.x-G                 ║
 * ║  PERFECT BEHAVIOR — Contexte + Non-Intrusif + Partout        ║
 * ║  Mode: B2C (formations) / B2B (entreprises) / Assessment      ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolChatbotPerfect = {
  // Configuration
  config: {
    minimizedSize: '60px',
    expandedSize: '400px',
    position: 'bottom-right',
    autoMinimizeDelay: 10000, // 10s inactivity
    zIndex: 9998 // Below modals (9999+)
  },

  // État
  state: {
    isOpen: false,
    isMinimized: true,
    context: null, // 'b2c' | 'b2b' | 'assessment' | 'default'
    lastActivity: Date.now()
  },

  // Init
  init() {
    this.detectContext();
    this.injectStyles();
    this.createChatbot();
    this.bindEvents();
    this.startActivityMonitor();
  },

  // Détecter contexte page
  detectContext() {
    const path = window.location.pathname;
    
    if (path.includes('/b2c') || path.includes('/formation')) {
      this.state.context = 'b2c';
    } else if (path.includes('/companies') || path.includes('/b2b')) {
      this.state.context = 'b2b';
    } else if (path.includes('/assessment')) {
      this.state.context = 'assessment';
    } else {
      this.state.context = 'default';
    }
    
    console.log('[Chatbot] Context detected:', this.state.context);
  },

  // Messages contextuels
  getContextMessage() {
    const messages = {
      'b2c': {
        greeting: '👋 Bonjour ! Je suis votre assistant formation.',
        placeholder: 'Comment puis-je vous aider à choisir une formation ?'
      },
      'b2b': {
        greeting: '👋 Bonjour ! Je suis votre assistant entreprise.',
        placeholder: 'Comment puis-je vous aider à cadrer votre projet B2B ?'
      },
      'assessment': {
        greeting: '🎯 Besoin d\'aide avec l\'auto-évaluation ?',
        placeholder: 'Posez-moi vos questions sur l\'évaluation...'
      },
      'default': {
        greeting: '👋 Bonjour ! Comment puis-je vous aider ?',
        placeholder: 'Posez-moi une question...'
      }
    };
    
    return messages[this.state.context] || messages.default;
  },

  // Inject styles
  injectStyles() {
    if (document.getElementById('ds-chatbot-perfect-styles')) return;
    
    const styles = `
      <style id="ds-chatbot-perfect-styles">
        /* Chatbot Container */
        #ds-chatbot-perfect {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: ${this.config.zIndex};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Minimized State */
        #ds-chatbot-perfect.minimized {
          width: ${this.config.minimizedSize};
          height: ${this.config.minimizedSize};
        }

        #ds-chatbot-perfect.minimized .chatbot-window {
          display: none;
        }

        /* Expanded State */
        #ds-chatbot-perfect.expanded {
          width: ${this.config.expandedSize};
          height: 600px;
        }

        #ds-chatbot-perfect.expanded .chatbot-trigger {
          display: none;
        }

        /* Trigger Button */
        .chatbot-trigger {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E88E5, #26A69A);
          color: white;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(30, 136, 229, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          transition: all 0.3s ease;
          position: relative;
        }

        .chatbot-trigger:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(30, 136, 229, 0.5);
        }

        .chatbot-trigger::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E88E5, #26A69A);
          animation: chatbotPulse 2s infinite;
          opacity: 0.4;
        }

        @keyframes chatbotPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 0; }
        }

        /* Context Badge */
        .chatbot-context-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #7E57C2;
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          animation: badgeBounce 1s ease infinite;
        }

        @keyframes badgeBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Chatbot Window */
        .chatbot-window {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Header */
        .chatbot-header {
          background: linear-gradient(135deg, #1E88E5, #26A69A);
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chatbot-header-title {
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .chatbot-header-actions {
          display: flex;
          gap: 8px;
        }

        .chatbot-header-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-size: 18px;
        }

        .chatbot-header-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        /* Messages Area */
        .chatbot-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background: #F5F5F5;
        }

        .chatbot-message {
          margin-bottom: 16px;
          display: flex;
          gap: 12px;
          animation: messageSlide 0.3s ease;
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chatbot-message.bot {
          flex-direction: row;
        }

        .chatbot-message.user {
          flex-direction: row-reverse;
        }

        .chatbot-message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .chatbot-message.bot .chatbot-message-avatar {
          background: linear-gradient(135deg, #1E88E5, #26A69A);
        }

        .chatbot-message.user .chatbot-message-avatar {
          background: #ECEFF1;
        }

        .chatbot-message-bubble {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 16px;
          line-height: 1.5;
          font-size: 14px;
        }

        .chatbot-message.bot .chatbot-message-bubble {
          background: white;
          color: #263238;
          border-bottom-left-radius: 4px;
        }

        .chatbot-message.user .chatbot-message-bubble {
          background: #1E88E5;
          color: white;
          border-bottom-right-radius: 4px;
        }

        /* Input Area */
        .chatbot-input-area {
          padding: 16px 20px;
          background: white;
          border-top: 1px solid #ECEFF1;
          display: flex;
          gap: 12px;
        }

        .chatbot-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #ECEFF1;
          border-radius: 24px;
          font-size: 14px;
          transition: all 0.2s ease;
          outline: none;
        }

        .chatbot-input:focus {
          border-color: #1E88E5;
          box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.1);
        }

        .chatbot-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E88E5, #26A69A);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .chatbot-send-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
        }

        /* Quick Actions */
        .chatbot-quick-actions {
          padding: 12px 20px;
          background: #FAFAFA;
          border-top: 1px solid #ECEFF1;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .chatbot-quick-action {
          padding: 8px 16px;
          background: white;
          border: 1px solid #ECEFF1;
          border-radius: 20px;
          font-size: 13px;
          color: #263238;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chatbot-quick-action:hover {
          border-color: #1E88E5;
          color: #1E88E5;
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          #ds-chatbot-perfect {
            bottom: 16px;
            right: 16px;
          }

          #ds-chatbot-perfect.expanded {
            width: calc(100vw - 32px);
            height: calc(100vh - 100px);
            max-height: 600px;
          }

          .chatbot-message-bubble {
            max-width: 80%;
          }
        }

        /* No Scroll Body when chatbot open on mobile */
        body.chatbot-open-mobile {
          overflow: hidden;
        }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
  },

  // Create chatbot HTML
  createChatbot() {
    const contextMsg = this.getContextMessage();
    const contextBadge = this.state.context === 'b2c' ? 'B2C' : (this.state.context === 'b2b' ? 'B2B' : '');
    
    const html = `
      <div id="ds-chatbot-perfect" class="minimized">
        <!-- Trigger Button -->
        <button class="chatbot-trigger" aria-label="Ouvrir le chat">
          💬
          ${contextBadge ? `<span class="chatbot-context-badge">${contextBadge}</span>` : ''}
        </button>

        <!-- Chatbot Window -->
        <div class="chatbot-window">
          <!-- Header -->
          <div class="chatbot-header">
            <div class="chatbot-header-title">
              💬 Assistant DigiSchool
            </div>
            <div class="chatbot-header-actions">
              <button class="chatbot-header-btn" id="chatbot-minimize" aria-label="Minimiser">−</button>
              <button class="chatbot-header-btn" id="chatbot-close" aria-label="Fermer">×</button>
            </div>
          </div>

          <!-- Messages Area -->
          <div class="chatbot-messages" id="chatbot-messages">
            <div class="chatbot-message bot">
              <div class="chatbot-message-avatar">🤖</div>
              <div class="chatbot-message-bubble">${contextMsg.greeting}</div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="chatbot-quick-actions" id="chatbot-quick-actions">
            ${this.getQuickActions()}
          </div>

          <!-- Input Area -->
          <div class="chatbot-input-area">
            <input 
              type="text" 
              class="chatbot-input" 
              id="chatbot-input" 
              placeholder="${contextMsg.placeholder}"
              aria-label="Tapez votre message"
            >
            <button class="chatbot-send-btn" id="chatbot-send" aria-label="Envoyer">
              ➤
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);
  },

  // Get quick actions based on context
  getQuickActions() {
    const actions = {
      'b2c': [
        'Quelle formation choisir ?',
        'Combien ça coûte ?',
        'Comment s\'inscrire ?'
      ],
      'b2b': [
        'Demande de devis',
        'Formation sur-mesure',
        'Contact entreprise'
      ],
      'assessment': [
        'Comment ça marche ?',
        'Combien de questions ?',
        'C\'est confidentiel ?'
      ],
      'default': [
        'Voir les formations',
        'Contacter un conseiller',
        'En savoir plus'
      ]
    };
    
    const contextActions = actions[this.state.context] || actions.default;
    
    return contextActions.map(action => 
      `<button class="chatbot-quick-action" data-action="${action}">${action}</button>`
    ).join('');
  },

  // Bind events
  bindEvents() {
    const chatbot = document.getElementById('ds-chatbot-perfect');
    const trigger = chatbot.querySelector('.chatbot-trigger');
    const minimize = document.getElementById('chatbot-minimize');
    const close = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const send = document.getElementById('chatbot-send');
    const quickActions = document.querySelectorAll('.chatbot-quick-action');
    
    // Open
    trigger.addEventListener('click', () => this.open());
    
    // Minimize
    minimize.addEventListener('click', () => this.minimize());
    
    // Close
    close.addEventListener('click', () => this.close());
    
    // Send message
    send.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    
    // Quick actions
    quickActions.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        this.handleQuickAction(action);
      });
    });
    
    // Track activity
    input.addEventListener('input', () => this.updateActivity());
    chatbot.addEventListener('click', () => this.updateActivity());
  },

  // Open chatbot
  open() {
    const chatbot = document.getElementById('ds-chatbot-perfect');
    chatbot.classList.remove('minimized');
    chatbot.classList.add('expanded');
    this.state.isOpen = true;
    this.state.isMinimized = false;
    this.updateActivity();
    
    // Focus input
    setTimeout(() => {
      document.getElementById('chatbot-input').focus();
    }, 300);
  },

  // Minimize chatbot
  minimize() {
    const chatbot = document.getElementById('ds-chatbot-perfect');
    chatbot.classList.remove('expanded');
    chatbot.classList.add('minimized');
    this.state.isMinimized = true;
  },

  // Close chatbot
  close() {
    this.minimize();
    this.state.isOpen = false;
  },

  // Send message
  sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    this.addMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      this.handleBotResponse(message);
    }, 800);
    
    this.updateActivity();
  },

  // Add message to chat
  addMessage(text, sender = 'bot') {
    const messagesContainer = document.getElementById('chatbot-messages');
    const avatar = sender === 'bot' ? '🤖' : '👤';
    
    const messageHTML = `
      <div class="chatbot-message ${sender}">
        <div class="chatbot-message-avatar">${avatar}</div>
        <div class="chatbot-message-bubble">${text}</div>
      </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },

  // Handle bot response
  handleBotResponse(userMessage) {
    const lower = userMessage.toLowerCase();
    
    let response = 'Merci pour votre message ! Un conseiller vous répondra sous peu. 📧 contact@digischool.africa';
    
    // Context-aware responses
    if (lower.includes('prix') || lower.includes('coût') || lower.includes('tarif')) {
      response = 'Nos formations B2C vont de 50 000 FCFA à 250 000 FCFA selon la durée. Consultez notre <a href="/b2c.html" style="color: #1E88E5; font-weight: 600;">catalogue</a> pour les détails.';
    } else if (lower.includes('inscription') || lower.includes('inscrire')) {
      response = 'Pour vous inscrire : 1) Choisissez votre formation, 2) Complétez le paiement, 3) Recevez vos accès immédiatement ! 🎓';
    } else if (lower.includes('devis') || lower.includes('b2b') || lower.includes('entreprise')) {
      response = 'Pour une demande B2B, visitez notre <a href="/b2b-custom-request.html" style="color: #1E88E5; font-weight: 600;">formulaire sur-mesure</a>. Réponse sous 72h ! 🏢';
    } else if (lower.includes('contact') || lower.includes('conseiller')) {
      response = '📞 +225 05 05 11 11 02 | 📧 contact@digischool.africa<br>Nous sommes disponibles du lundi au vendredi, 9h-18h.';
    }
    
    this.addMessage(response, 'bot');
  },

  // Handle quick action
  handleQuickAction(action) {
    this.addMessage(action, 'user');
    
    setTimeout(() => {
      this.handleBotResponse(action);
    }, 600);
    
    this.updateActivity();
  },

  // Update last activity
  updateActivity() {
    this.state.lastActivity = Date.now();
  },

  // Start activity monitor (auto-minimize after inactivity)
  startActivityMonitor() {
    setInterval(() => {
      if (this.state.isOpen && !this.state.isMinimized) {
        const inactiveTime = Date.now() - this.state.lastActivity;
        
        if (inactiveTime > this.config.autoMinimizeDelay) {
          console.log('[Chatbot] Auto-minimizing due to inactivity');
          this.minimize();
        }
      }
    }, 5000); // Check every 5s
  }
};

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DigiSchoolChatbotPerfect.init();
  });
} else {
  DigiSchoolChatbotPerfect.init();
}

// Export global
window.DigiSchoolChatbotPerfect = DigiSchoolChatbotPerfect;
