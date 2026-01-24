/**
 * DigiSchool Africa - Chatbot Visiteur Premium
 * Role: Orientation, Recommandation, Questions
 * Ton: Humain, Professionnel, Africain
 */

(function() {
  'use strict';
  
  const ChatBot = {
    messages: [
      {
        role: 'bot',
        text: '👋 Bienvenue sur DigiSchool Africa ! Je suis ici pour vous guider. Que recherchez-vous ?',
        options: ['Formation B2C', 'Formation B2B', 'En savoir plus', 'Contact']
      }
    ],
    
    responses: {
      'Formation B2C': {
        text: '🎓 Excellent choix ! Nos formations B2C sont conçues pour les professionnels qui souhaitent développer leurs compétences. Quel domaine vous intéresse ?',
        options: ['Leadership', 'Excel & Data', 'Marketing Digital', 'IA Pratique', 'Voir tous les cours']
      },
      'Formation B2B': {
        text: '🏢 Parfait ! Nous accompagnons les entreprises dans la montée en compétences de leurs équipes. Quel est votre besoin ?',
        options: ['Formation interne', 'Certification', 'Demander un devis', 'Contact commercial']
      },
      'En savoir plus': {
        text: 'DigiSchool Africa est une plateforme de formation professionnelle augmentée par l\'IA, dédiée aux talents africains. Que voulez-vous savoir ?',
        options: ['Nos formations', 'Nos méthodes', 'Nos résultats', 'Contact']
      },
      'Contact': {
        text: '📞 Nous sommes à votre écoute !\n\n📧 Email: support@digischool.africa\n📱 WhatsApp: +225 \n\nOu laissez-nous votre question ici 👇'
      }
    },
    
    init() {
      this.createChatWidget();
      this.attachEventListeners();
    },
    
    createChatWidget() {
      const widget = document.createElement('div');
      widget.id = 'digischool-chatbot';
      widget.innerHTML = `
        <div class="chatbot-button" id="chatbot-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="chatbot-badge">1</span>
        </div>
        <div class="chatbot-window" id="chatbot-window" style="display: none;">
          <div class="chatbot-header">
            <div class="chatbot-avatar">
              <img src="/assets/logo-digischool-final.svg" alt="DigiSchool" />
            </div>
            <div class="chatbot-title">
              <strong>Assistant DigiSchool</strong>
              <span>En ligne</span>
            </div>
            <button class="chatbot-close" id="chatbot-close">×</button>
          </div>
          <div class="chatbot-messages" id="chatbot-messages"></div>
          <div class="chatbot-input">
            <input type="text" placeholder="Tapez votre message..." id="chatbot-input-field" />
            <button id="chatbot-send">Envoyer</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(widget);
      this.injectStyles();
      this.displayWelcomeMessage();
    },
    
    displayWelcomeMessage() {
      const messagesContainer = document.getElementById('chatbot-messages');
      const welcomeMsg = this.messages[0];
      
      const msgHTML = `
        <div class="chatbot-msg bot-msg">
          <div class="msg-text">${welcomeMsg.text}</div>
          ${welcomeMsg.options ? `
            <div class="msg-options">
              ${welcomeMsg.options.map(opt => `<button class="msg-option" data-option="${opt}">${opt}</button>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
      
      messagesContainer.innerHTML = msgHTML;
    },
    
    attachEventListeners() {
      document.getElementById('chatbot-toggle').addEventListener('click', () => this.toggleChat());
      document.getElementById('chatbot-close').addEventListener('click', () => this.toggleChat());
      
      document.getElementById('chatbot-messages').addEventListener('click', (e) => {
        if (e.target.classList.contains('msg-option')) {
          this.handleOptionClick(e.target.dataset.option);
        }
      });
      
      document.getElementById('chatbot-send').addEventListener('click', () => this.sendMessage());
      document.getElementById('chatbot-input-field').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    },
    
    toggleChat() {
      const window = document.getElementById('chatbot-window');
      const badge = document.querySelector('.chatbot-badge');
      
      if (window.style.display === 'none') {
        window.style.display = 'flex';
        badge.style.display = 'none';
      } else {
        window.style.display = 'none';
      }
    },
    
    handleOptionClick(option) {
      this.addUserMessage(option);
      
      if (this.responses[option]) {
        setTimeout(() => {
          this.addBotMessage(this.responses[option]);
        }, 800);
      } else {
        // Redirection
        if (option === 'Voir tous les cours') window.location.href = '/b2c.html';
        if (option === 'Demander un devis') window.location.href = '/companies.html';
        if (option === 'Contact commercial') window.open('https://wa.me/225', '_blank');
      }
    },
    
    sendMessage() {
      const input = document.getElementById('chatbot-input-field');
      const text = input.value.trim();
      
      if (!text) return;
      
      this.addUserMessage(text);
      input.value = '';
      
      setTimeout(() => {
        this.addBotMessage({
          text: 'Merci pour votre message ! Notre équipe vous répondra rapidement par email ou WhatsApp. En attendant, explorez nos formations :'
,
          options: ['Formation B2C', 'Formation B2B']
        });
      }, 1000);
    },
    
    addUserMessage(text) {
      const messagesContainer = document.getElementById('chatbot-messages');
      const msgHTML = `<div class="chatbot-msg user-msg"><div class="msg-text">${text}</div></div>`;
      messagesContainer.insertAdjacentHTML('beforeend', msgHTML);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },
    
    addBotMessage(response) {
      const messagesContainer = document.getElementById('chatbot-messages');
      const msgHTML = `
        <div class="chatbot-msg bot-msg">
          <div class="msg-text">${response.text}</div>
          ${response.options ? `
            <div class="msg-options">
              ${response.options.map(opt => `<button class="msg-option" data-option="${opt}">${opt}</button>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
      messagesContainer.insertAdjacentHTML('beforeend', msgHTML);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },
    
    injectStyles() {
      const styles = `
        <style>
          #digischool-chatbot {
            position: fixed; z-index: 9999; pointer-events: auto;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            font-family: 'Inter', sans-serif;
          }
          
          .chatbot-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1E88E5, #26A69A);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(30, 136, 229, 0.3);
            transition: transform 0.3s ease;
            position: relative;
          }
          
          .chatbot-button:hover {
            transform: scale(1.1);
          }
          
          .chatbot-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: #F44336;
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 600;
          }
          
          .chatbot-window { z-index: 10000;
            position: fixed; z-index: 9999; pointer-events: auto;
            bottom: 100px;
            right: 24px;
            width: 380px;
            height: 600px;
            max-height: calc(100vh - 140px);
            background: white;
            border-radius: 16px;
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          
          .chatbot-header {
            background: linear-gradient(135deg, #1E88E5, #26A69A);
            color: white;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .chatbot-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          
          .chatbot-avatar img {
            width: 30px;
            height: auto;
          }
          
          .chatbot-title {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .chatbot-title strong {
            font-size: 14px;
          }
          
          .chatbot-title span {
            font-size: 12px;
            opacity: 0.9;
          }
          
          .chatbot-close {
            background: none;
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .chatbot-messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          
          .chatbot-msg {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          
          .bot-msg {
            align-items: flex-start;
          }
          
          .user-msg {
            align-items: flex-end;
          }
          
          .msg-text {
            max-width: 80%;
            padding: 12px 16px;
            border-radius: 12px;
            line-height: 1.5;
            font-size: 14px;
          }
          
          .bot-msg .msg-text {
            background: #F5F7FA;
            color: #37474F;
          }
          
          .user-msg .msg-text {
            background: linear-gradient(135deg, #1E88E5, #26A69A);
            color: white;
          }
          
          .msg-options {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .msg-option {
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid #26A69A;
            background: white;
            color: #26A69A;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .msg-option:hover {
            background: #26A69A;
            color: white;
          }
          
          .chatbot-input {
            border-top: 1px solid #ECEFF1;
            padding: 16px;
            display: flex;
            gap: 8px;
          }
          
          .chatbot-input input {
            flex: 1;
            padding: 10px 14px;
            border: 1px solid #ECEFF1;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
          }
          
          .chatbot-input input:focus {
            border-color: #26A69A;
          }
          
          .chatbot-input button {
            padding: 10px 20px;
            background: linear-gradient(135deg, #1E88E5, #26A69A);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
          }
          
          @media (max-width: 480px) {
            .chatbot-window { z-index: 10000;
              width: calc(100vw - 32px);
              right: 16px;
              left: 16px;
            }
          }
        </style>
      `;
      
      document.head.insertAdjacentHTML('beforeend', styles);
    }
  };
  
  // Init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ChatBot.init());
  } else {
    ChatBot.init();
  }
  
})();
