# Procédure de Traitement des Paiements — DigiSchool Africa

**Version:** 1.0  
**Objectif:** Traiter les preuves de paiement des clients B2C de manière professionnelle et efficace  
**Délai cible:** < 30 minutes durant les heures ouvrables

---

## Étape 1 : Réception & Vérification Initiale

- **Email reçu à :** support@digischool.africa
- **Objet type :** "Preuve de paiement — Commande DS-YYYYMMDD-HHMM-XXXX"
- **Vérifier la présence de :**
  - Numéro de commande (format: DS-YYYYMMDD-HHMM-XXXX)
  - Email client
  - Téléphone WhatsApp (facultatif)
  - Opérateur de paiement (Orange/MTN/Moov/Wave)
  - Numéro de paiement
  - Détail de la commande (formations, types, prix)
  - Montant TOTAL en FCFA
  - Capture d'écran/preuve de paiement en pièce jointe

**Action :** Si informations incomplètes → répondre immédiatement pour demander les éléments manquants

---

## Étape 2 : Validation du Paiement

- **Vérifier la capture d'écran :**
  - Opérateur correspond
  - Montant correspond au TOTAL de la commande
  - Transaction récente (date/heure cohérente)
  - Transaction réussie/confirmée

- **Vérifier la correspondance :**
  - Numéro de destination = numéro DigiSchool officiel pour cet opérateur
  - Montant = TOTAL exact de la proforma

**Action :** Si doute → escalader au Directeur des Programmes

---

## Étape 3 : Réponse de Confirmation

**Template email à envoyer :**

```
Objet : ✓ Paiement validé — Commande [Numéro de commande]

Bonjour [Prénom si disponible],

Nous avons bien reçu votre preuve de paiement.

Votre commande [Numéro de commande] est confirmée pour un montant de [TOTAL] FCFA.

Formation(s) :
[Liste des formations]

Nous procédons à l'activation de votre accès e-learning.

Cordialement,
L'équipe DigiSchool Africa
support@digischool.africa
```

---

## Étape 4 : Marquer Commande « Validée »

- **Créer une entrée dans le registre des commandes** (Excel ou Google Sheets temporaire V1)
  - Date/heure de validation
  - Numéro de commande
  - Email client
  - WhatsApp (si fourni)
  - Formations achetées
  - Montant TOTAL
  - Opérateur de paiement
  - Statut : VALIDÉ

---

## Étape 5 : Génération des Accès E-Learning

**Pour V1 (manuel) :**
- Créer compte utilisateur sur la plateforme e-learning
- Générer identifiants temporaires : email + mot de passe initial
- Assigner les formations achetées au compte

**Pour V2 (automatisé — futur) :**
- L'activation sera automatique après validation paiement

---

## Étape 6 : Envoi des Accès & Reçu

**Template email final :**

```
Objet : 🎓 Vos accès DigiSchool Africa — Commande [Numéro]

Bonjour [Prénom],

Félicitations ! Votre inscription est activée.

📌 VOS ACCÈS E-LEARNING :
Plateforme : https://learn.digischool.africa (ou URL réelle)
Identifiant : [email]
Mot de passe temporaire : [mot de passe]

🎓 VOS FORMATIONS :
[Liste des formations avec liens directs]

📄 REÇU DE PAIEMENT :
Commande : [Numéro]
Montant payé : [TOTAL] FCFA (Hors TVA)
Date : [Date de validation]
Méthode : [Opérateur] Mobile Money

Nous vous recommandons de changer votre mot de passe dès votre première connexion.

Pour toute question : support@digischool.africa ou Allo DigiSchool.

Excellente formation !

L'équipe DigiSchool Africa
Jean Pierre SAJORI, Directeur des Programmes
```

---

## Étape 7 : Suivi & Support

- **Attendre confirmation de première connexion** (24-48h)
- Si aucune connexion après 48h → email de relance courtois
- Rester disponible pour support technique/pédagogique

---

## Notes Importantes

- **Ne jamais révéler les processus internes** dans les communications client
- **Toujours utiliser un ton professionnel, rassurant et premium**
- **Délai cible < 30 min** pendant heures ouvrables (9h-17h UTC)
- **Pour paiements hors heures :** traiter le lendemain matin, email automatique "Nous avons bien reçu votre demande et la traiterons dans les meilleurs délais"

---

**Responsable SOP :** Jean Pierre SAJORI, Directeur des Programmes  
**Dernière mise à jour :** 2026-01-26  
**Révision prévue :** Trimestrielle
