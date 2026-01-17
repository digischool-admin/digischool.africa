/**
 * WhatsApp Assistant - DigiSchool Africa
 * Message generator for leads and order follow-up
 */

(function() {
  'use strict';

  const WHATSAPP_NUMBER = '+2250505111102';

  const templates = {
    welcome: {
      title: '👋 Message de Bienvenue',
      fields: ['name'],
      generate: (data) => `Bonjour ${data.name} ! 👋

Bienvenue chez DigiSchool Africa ! 🎓✨

Nous sommes ravis de vous accompagner dans votre montée en compétences.

📚 Découvrez nos 9 formations professionnelles 100% en ligne avec IA embarquée :
• Leadership & Management
• Gestion de projet (PMP)
• Stratégie & Exécution
• Finance pour non-financiers
• Vente B2B & Négociation
• Service Client & Expérience
• RH & Performance
• Data & Reporting
• Productivité & Outils M365

🌐 Visitez notre catalogue : https://digischool.africa/b2c.html

💬 Questions ? Répondez à ce message !

L'équipe DigiSchool Africa 🚀`
    },

    'order-confirm': {
      title: '✅ Confirmation de Commande',
      fields: ['name', 'course', 'type', 'price'],
      generate: (data) => `Bonjour ${data.name} ! ✅

Nous avons bien reçu votre commande :

📚 Formation : ${data.course}
📦 Type : ${data.type === 'pack' ? 'Pack Complet (8 modules)' : 'Module Individuel'}
💰 Montant : ${data.price} FCFA

🔹 Prochaines étapes :
1️⃣ Effectuez le paiement via :
   • Orange Money : +225 07 14 67 82 89
   • MTN MoMo : +225 05 65 23 14 03
   • Moov Money : +225 01 51 66 68 01
   • Wave : +225 01 51 66 46 53

2️⃣ Envoyez-nous la capture d'écran du paiement

3️⃣ Recevez votre code d'accès immédiatement ! 🔐

Besoin d'aide ? Répondez à ce message.

L'équipe DigiSchool Africa 💚`
    },

    'payment-reminder': {
      title: '💳 Rappel de Paiement',
      fields: ['name', 'course', 'price'],
      generate: (data) => `Bonjour ${data.name} ! 👋

Petit rappel concernant votre commande :

📚 Formation : ${data.course}
💰 Montant : ${data.price} FCFA

Nous attendons votre paiement pour activer votre accès. 🚀

💳 Moyens de paiement disponibles :
• Orange Money : +225 07 14 67 82 89
• MTN MoMo : +225 05 65 23 14 03
• Moov Money : +225 01 51 66 68 01
• Wave : +225 01 51 66 46 53

Après paiement, envoyez-nous la capture pour recevoir votre code d'accès immédiatement ! ⚡

Des questions ? Nous sommes là pour vous aider.

L'équipe DigiSchool Africa 💚`
    },

    'access-code': {
      title: '🔐 Envoi du Code d\'Accès',
      fields: ['name', 'course', 'code'],
      generate: (data) => `Félicitations ${data.name} ! 🎉

Votre paiement est confirmé. Voici votre code d'accès :

🔐 CODE : ${data.code}

📚 Formation : ${data.course}

🌐 Pour activer votre accès :
1️⃣ Rendez-vous sur : https://digischool.africa/b2c-access.html
2️⃣ Entrez votre code d'accès
3️⃣ Commencez votre formation immédiatement !

✨ Fonctionnalités incluses :
• Progression suivie par quiz (seuil 70%)
• Lecteur vocal intégré (TTS)
• Certificat DigiSchool à la fin
• Accès 100% en ligne (aucun téléchargement)

📌 Sauvegardez ce code en sécurité.

💬 Besoin d'aide ? Contactez-nous !

Bonne formation ! 🚀

L'équipe DigiSchool Africa 💚`
    },

    support: {
      title: '🆘 Message de Support',
      fields: ['name', 'issue'],
      generate: (data) => `Bonjour ${data.name} ! 👋

Merci de nous avoir contactés concernant : ${data.issue}

🔍 Nous analysons votre demande et vous répondrons dans les plus brefs délais (généralement sous 2h pendant les heures ouvrables).

📌 En attendant, vous pouvez :
• Consulter notre FAQ : https://digischool.africa/faq.html
• Accéder à votre dashboard : https://digischool.africa/user-dashboard.html
• Voir le catalogue : https://digischool.africa/b2c.html

💬 Vous recevrez une réponse personnalisée très bientôt.

Merci pour votre patience ! 🙏

L'équipe DigiSchool Africa 💚`
    },

    referral: {
      title: '🎁 Invitation au Parrainage',
      fields: ['name', 'referral_code'],
      generate: (data) => `Bonjour ${data.name} ! 🎉

Vous aimez DigiSchool Africa ? Faites-en profiter vos amis et gagnez des récompenses ! 🎁

🔗 Votre code de parrainage personnel :
${data.referral_code}

💰 Comment ça marche ?
1️⃣ Partagez votre code avec vos amis
2️⃣ Ils reçoivent une réduction sur leur première commande
3️⃣ Vous recevez un bon d'achat dès leur premier achat validé !

🌐 Partagez ce lien :
https://digischool.africa/b2c.html?ref=${data.referral_code}

Plus vous parrainez, plus vous gagnez ! 🚀

Des questions sur le parrainage ? Répondez à ce message.

L'équipe DigiSchool Africa 💚`
    }
  };

  let currentTemplate = null;
  let formData = {};

  // Template selection
  document.querySelectorAll('.template-card').forEach(card => {
    card.addEventListener('click', function() {
      const templateId = this.dataset.template;
      selectTemplate(templateId);
    });
  });

  function selectTemplate(templateId) {
    currentTemplate = templateId;
    const template = templates[templateId];

    // Update active state
    document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
    document.querySelector(`[data-template="${templateId}"]`).classList.add('active');

    // Show builder
    document.getElementById('message-builder').style.display = 'block';
    document.getElementById('builder-title').textContent = template.title;

    // Render fields
    const fieldsContainer = document.getElementById('builder-fields');
    fieldsContainer.innerHTML = template.fields.map(field => {
      const label = getFieldLabel(field);
      return `
        <div class="form-group">
          <label for="field-${field}">${label}</label>
          <input type="text" id="field-${field}" data-field="${field}" placeholder="Entrez ${label.toLowerCase()}" />
        </div>
      `;
    }).join('');

    // Add event listeners
    fieldsContainer.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    // Reset form data
    formData = {};
    updatePreview();

    // Scroll to builder
    document.getElementById('message-builder').scrollIntoView({ behavior: 'smooth' });
  }

  function getFieldLabel(field) {
    const labels = {
      name: 'Nom du client',
      course: 'Nom de la formation',
      type: 'Type (pack/module)',
      price: 'Prix (FCFA)',
      code: 'Code d\'accès',
      issue: 'Problème rencontré',
      referral_code: 'Code de parrainage'
    };
    return labels[field] || field;
  }

  function updatePreview() {
    if (!currentTemplate) return;

    // Collect form data
    document.querySelectorAll('#builder-fields input').forEach(input => {
      formData[input.dataset.field] = input.value;
    });

    // Generate message
    const template = templates[currentTemplate];
    const message = template.generate(formData);

    // Update preview
    document.getElementById('message-preview').textContent = message;

    // Update WhatsApp link
    const encodedMessage = encodeURIComponent(message);
    document.getElementById('whatsapp-btn').href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodedMessage}`;
  }

  // Copy to clipboard
  document.getElementById('copy-btn').addEventListener('click', function() {
    const message = document.getElementById('message-preview').textContent;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(() => {
        showCopyNotification();
      }).catch(err => {
        fallbackCopy(message);
      });
    } else {
      fallbackCopy(message);
    }
  });

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopyNotification();
    } catch (err) {
      alert('Copie échouée. Veuillez copier manuellement.');
    }
    document.body.removeChild(textarea);
  }

  function showCopyNotification() {
    const notification = document.getElementById('copy-notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);

    // Track event
    if (window.DigiSchoolEvents && typeof window.DigiSchoolEvents.trackEvent === 'function') {
      window.DigiSchoolEvents.trackEvent('whatsapp_message_copied', {
        template: currentTemplate,
        timestamp: Date.now()
      });
    }
  }

  // Reset
  document.getElementById('reset-btn').addEventListener('click', function() {
    currentTemplate = null;
    formData = {};
    document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
    document.getElementById('message-builder').style.display = 'none';
  });

})();
