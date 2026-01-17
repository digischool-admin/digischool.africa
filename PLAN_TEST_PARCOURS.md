# Plan de Test Production — Parcours DigiSchool Africa

## Date de déploiement : 17 janvier 2026
## Commit : 9a6adcc
## Environnement : https://digischool.africa

---

## ✅ TESTS OBLIGATOIRES (10 points)

### 1. Page Catalogue (/parcours.html)
- [ ] La page se charge correctement
- [ ] Les 13 cartes parcours s'affichent
- [ ] Le hero est visible avec CTA "Voir les parcours" et "Générer une proforma"
- [ ] Les CTAs "Voir le programme" pointent vers /parcours/*.html
- [ ] Les CTAs "Générer une proforma" pointent vers /proforma.html?from=*
- [ ] Le footer contient le lien "Parcours"
- [ ] La page est responsive (mobile/tablet/desktop)

### 2. Pages Parcours Détaillées (13 pages)
- [ ] Toutes les 13 pages se chargent sans erreur 404
- [ ] Chaque page affiche le hero avec badge et métadonnées (durée, cible)
- [ ] Les 8 modules sont présents et lisibles
- [ ] Les livrables professionnels sont listés
- [ ] Les formats (Intra/Inter/Bootcamp/Blended) sont affichés
- [ ] Les débouchés professionnels sont listés
- [ ] Le CTA "Générer une proforma" fonctionne (lien vers /proforma.html?from=*)
- [ ] Le CTA WhatsApp fonctionne (ouvre WhatsApp avec message pré-rempli)
- [ ] Le bouton "Voir tous les parcours" renvoie vers /parcours.html
- [ ] Le footer est cohérent avec le reste du site

### 3. Navigation & Footer
- [ ] Le lien "Parcours" apparaît dans le footer de index.html
- [ ] Le lien "Parcours" apparaît dans le footer de companies.html
- [ ] Le lien "Parcours" apparaît dans le footer de brochure-b2b.html
- [ ] Tous les liens footer fonctionnent correctement

### 4. Tracking Lead Events
- [ ] Ouvrir /parcours.html?admin=1 : Admin panel visible
- [ ] Event "page_view_parcours" tracké sur /parcours.html
- [ ] Event "page_view_parcours_detail" tracké sur /parcours/*.html
- [ ] Event "click_view_parcours" tracké lors du clic catalogue → détail
- [ ] Event "click_proforma_from_parcours" tracké lors du clic proforma
- [ ] Export JSON des events fonctionne
- [ ] Les events contiennent les bons champs (event, page, ts, parcours_slug, source)

### 5. Formspree Integration
- [ ] Les CTA "Générer une proforma" redirigent vers /proforma.html avec paramètre from=*
- [ ] Le formulaire proforma fonctionne normalement (pas de régression)
- [ ] Le champ "from" est correctement pré-rempli
- [ ] La soumission Formspree AJAX fonctionne (timeout 12s, redirect ./merci.html)

### 6. SEO & Métadonnées
- [ ] /sitemap.xml accessible et contient les 14 nouvelles pages (1 catalogue + 13 détails)
- [ ] /robots.txt accessible et contient le sitemap
- [ ] Les meta tags title/description sont uniques par page
- [ ] Les meta Open Graph sont présents (og:title, og:description, og:url)
- [ ] Les canonical links sont corrects

### 7. Responsive & Accessibilité
- [ ] Mobile (< 768px) : layout 1 colonne, texte lisible, CTAs accessibles
- [ ] Tablet (768-1024px) : grille adaptée, images proportionnelles
- [ ] Desktop (> 1024px) : grille 2-3 colonnes, design premium intact
- [ ] Accessibilité WCAG AA : contrastes suffisants, navigation au clavier

### 8. Performance & Chargement
- [ ] Toutes les pages se chargent en moins de 3 secondes (3G rapide)
- [ ] Aucune erreur console JavaScript
- [ ] Les animations sont fluides (fade-in, hover effects)
- [ ] Les images (si présentes) sont optimisées

### 9. Liens Internes
- [ ] Tous les liens internes fonctionnent (pas de 404)
- [ ] Les liens vers proforma.html avec paramètre "from" fonctionnent
- [ ] Les liens WhatsApp s'ouvrent correctement (mobile + desktop)
- [ ] Les liens vers le footer (mentions légales, CGU, CGV, etc.) fonctionnent

### 10. Cohérence Design
- [ ] Les couleurs respectent la charte (bleu nuit, vert, gradient)
- [ ] Les boutons ont le même style que le reste du site
- [ ] Les cartes ont le même look & feel premium
- [ ] Les footers sont identiques sur toutes les pages
- [ ] Aucun élément visuel cassé ou mal aligné

---

## ✅ TESTS COMPLÉMENTAIRES (optionnels mais recommandés)

### 11. Test Cross-Browser
- [ ] Chrome/Edge (moteur Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)

### 12. Test Multi-Device
- [ ] iPhone/Android (mobile)
- [ ] iPad/Galaxy Tab (tablet)
- [ ] Desktop (Windows/Mac/Linux)

### 13. Test de Charge Simulée
- [ ] 10 utilisateurs simultanés : toutes les pages se chargent
- [ ] Les events lead-events.js se trackent correctement en charge

---

## 🐛 BUGS CONNUS & RÉGRESSIONS À SURVEILLER

1. **Formspree AJAX** : Vérifier que le timeout de 12s et la redirection ./merci.html fonctionnent toujours.
2. **Lead Events** : Vérifier que les anciens events (click_whatsapp, form_submit_contact, etc.) fonctionnent toujours.
3. **Footer** : Vérifier que l'ajout du lien "Parcours" n'a pas cassé la mise en page sur mobile.

---

## 📊 RÉSULTATS ATTENDUS

- **14 nouvelles pages** déployées et fonctionnelles
- **4 nouveaux events** trackés correctement
- **Sitemap mis à jour** avec 27 pages au total
- **Navigation cohérente** sur tout le site
- **0 régression** sur les fonctionnalités existantes
- **Design premium** préservé à 100%

---

## 🚀 ROLLBACK PLAN (en cas de problème critique)

1. Identifier le problème (page cassée, Formspree KO, events non trackés)
2. Revenir au commit précédent : `git revert 9a6adcc`
3. Push immédiat : `git push origin main`
4. GitHub Pages redéploie en ~2 minutes
5. Vérifier que le site fonctionne normalement
6. Investiguer le problème en local
7. Corriger et redéployer

---

## 📝 NOTES DE DÉPLOIEMENT

- Commit hash : `9a6adcc`
- Branche : `main`
- Repository : https://github.com/digischool-admin/digischool.africa
- URL live : https://digischool.africa
- Déploiement automatique via GitHub Pages
- Délai de propagation : 2-5 minutes après push

---

## ✅ VALIDATION FINALE

Tous les tests ci-dessus doivent être cochés ✅ avant de considérer le déploiement comme réussi.

**Responsable Validation** : Équipe DigiSchool Africa  
**Date Validation Prévue** : 17 janvier 2026  
**Statut** : 🟢 DÉPLOYÉ — En attente de validation production

---

**FIN DU PLAN DE TEST**
