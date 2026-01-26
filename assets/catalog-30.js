/**
 * DigiSchool Africa - Catalogue 30 Parcours V1
 * 10 Piliers × 3 Niveaux (Fondation, Maîtrise, Leadership)
 * Source unique de vérité pour B2C et B2B
 */

const DIGISCHOOL_CATALOG = {
  version: "1.0",
  
  pillars: [
    { id: "p01", name: "Leadership & Management", icon: "👔" },
    { id: "p02", name: "Gestion de Projet & PMO", icon: "📊" },
    { id: "p03", name: "Data, BI & Performance", icon: "📈" },
    { id: "p04", name: "Finance, Contrôle de Gestion & Investissement", icon: "💰" },
    { id: "p05", name: "Gouvernance, Risques & Conformité", icon: "🛡️" },
    { id: "p06", name: "Transformation Digitale & Conduite du Changement", icon: "🚀" },
    { id: "p07", name: "Cybersécurité & Résilience", icon: "🔐" },
    { id: "p08", name: "IT Service Management (ITIL4) & Architecture SI", icon: "⚙️" },
    { id: "p09", name: "Supply Chain, Achats & Traçabilité", icon: "🔗" },
    { id: "p10", name: "Marketing, Commercial & Growth + Culture Entrepreneuriale", icon: "💡" }
  ],
  
  // Pricing base (FCFA)
  pricing: {
    fondation: { pack: 214376, modules_count: 4 },
    maitrise: { pack: 267970, modules_count: 5 },
    leadership: { pack: 321564, modules_count: 6 }
  },
  
  // Auto-generate module price
  calculateModulePrice(pack_fcfa, modules_count) {
    return Math.round((pack_fcfa * 1.3) / modules_count);
  },
  
  // Generate modules by level template
  generateModules(pillarName, level) {
    const pillarShort = pillarName.split(/[&,]/)[0].trim();
    
    if (level === "Fondation") {
      return [
        {
          id: "m1",
          title: `Fondamentaux ${pillarShort}`,
          bullets: [
            "Vocabulaire métier et cas d'usage opérationnels",
            "Rôles, responsabilités et écosystème professionnel",
            "IA pour automatiser la veille et la documentation"
          ]
        },
        {
          id: "m2",
          title: `Outils & Méthodes avec IA`,
          bullets: [
            "Outils standards du marché et bonnes pratiques",
            "IA embarquée pour optimiser les process",
            "Templates et frameworks prêts à l'emploi"
          ]
        },
        {
          id: "m3",
          title: `Process & Exécution (APC)`,
          bullets: [
            "Cycle de travail complet et livrables attendus",
            "KPIs de performance et tableaux de bord",
            "Preuves de compétence et portfolio Day-1"
          ]
        },
        {
          id: "m4",
          title: `Projet Fil Rouge`,
          bullets: [
            "Cas réel d'entreprise à résoudre en autonomie",
            "Présentation des résultats et feedback expert",
            "Certification des acquis opérationnels"
          ]
        }
      ];
    }
    
    if (level === "Maîtrise") {
      return [
        {
          id: "m1",
          title: `Diagnostic & Cadrage Avancé`,
          bullets: [
            "Analyse de maturité et identification des gaps",
            "Recommandations stratégiques et quick wins",
            "IA pour automatiser l'audit et le benchmark"
          ]
        },
        {
          id: "m2",
          title: `Méthodes Avancées + IA`,
          bullets: [
            "Frameworks experts et optimisation des workflows",
            "Automatisation IA des tâches répétitives",
            "Intégration d'outils avancés (API, dashboards)"
          ]
        },
        {
          id: "m3",
          title: `Gouvernance & KPI`,
          bullets: [
            "Définition des indicateurs clés de performance",
            "Tableaux de bord décisionnels et reporting",
            "Pilotage par la data et amélioration continue"
          ]
        },
        {
          id: "m4",
          title: `Risques, Qualité & Conformité`,
          bullets: [
            "Identification et mitigation des risques majeurs",
            "Standards de qualité et audits internes",
            "Conformité réglementaire et documentation"
          ]
        },
        {
          id: "m5",
          title: `Capstone Livrable Entreprise`,
          bullets: [
            "Projet complet avec cahier des charges réel",
            "Livrable professionnel présentable en entreprise",
            "Validation par jury d'experts métier"
          ]
        }
      ];
    }
    
    // Leadership
    return [
      {
        id: "m1",
        title: `Vision, Stratégie & Arbitrages`,
        bullets: [
          "Élaboration de la vision long terme et roadmap",
          "Arbitrages stratégiques et allocation des ressources",
          "IA pour la veille stratégique et la simulation"
        ]
      },
      {
        id: "m2",
        title: `Gouvernance & Operating Model`,
        bullets: [
          "Design organisationnel et modèle opérationnel",
          "Framework de gouvernance et comités décisionnels",
          "Alignement stratégie-exécution et accountability"
        ]
      },
      {
        id: "m3",
        title: `Pilotage Performance Multi-équipes`,
        bullets: [
          "KPIs consolidés et tableaux de bord exécutifs",
          "Management transverse et gestion des interdépendances",
          "Culture de performance et coaching des managers"
        ]
      },
      {
        id: "m4",
        title: `Risk, Compliance & Audit`,
        bullets: [
          "Cartographie des risques stratégiques",
          "Programme de conformité et contrôle interne",
          "Préparation aux audits externes et certifications"
        ]
      },
      {
        id: "m5",
        title: `Transformation & Change at Scale`,
        bullets: [
          "Conduite du changement stratégique",
          "Scaling des opérations et transformation digitale",
          "Gestion des résistances et engagement des équipes"
        ]
      },
      {
        id: "m6",
        title: `Board Pack & Simulation Décisionnelle`,
        bullets: [
          "Préparation de présentations exécutives (Board)",
          "Business cases et recommandations stratégiques",
          "Simulation de comités de direction et Q&A"
        ]
      }
    ];
  },
  
  // Generate all 30 courses
  courses: []
};

// Generate 30 courses programmatically
const levels = ["Fondation", "Maîtrise", "Leadership"];
const levelConfigs = {
  "Fondation": { pricing: DIGISCHOOL_CATALOG.pricing.fondation, duration: 5, audience: "Junior/Analyste" },
  "Maîtrise": { pricing: DIGISCHOOL_CATALOG.pricing.maitrise, duration: 8, audience: "Manager/Expert" },
  "Leadership": { pricing: DIGISCHOOL_CATALOG.pricing.leadership, duration: 10, audience: "DG/Directeur" }
};

// Define which 16 are OUVERT (10 Fondation + 6 Maîtrise)
const openMaitrise = ["p02", "p03", "p04", "p05", "p07", "p10"]; // Projet, Data, Finance, Gouvernance, Cyber, Marketing

DIGISCHOOL_CATALOG.pillars.forEach(pillar => {
  levels.forEach((level, levelIdx) => {
    const config = levelConfigs[level];
    const courseId = `${pillar.id}-${level.toLowerCase()}`;
    
    // Determine status
    let status = "V2";
    if (level === "Fondation") {
      status = "OUVERT"; // All 10 Fondation are OUVERT
    } else if (level === "Maîtrise" && openMaitrise.includes(pillar.id)) {
      status = "OUVERT"; // 6 selected Maîtrise are OUVERT
    } else if (level === "Maîtrise") {
      status = "PREINSCRIPTION"; // Other Maîtrise
    } else if (level === "Leadership" && ["p01", "p02", "p05"].includes(pillar.id)) {
      status = "PREINSCRIPTION"; // Some Leadership as teaser
    }
    
    const modules = DIGISCHOOL_CATALOG.generateModules(pillar.name, level);
    const modulePrice = DIGISCHOOL_CATALOG.calculateModulePrice(config.pricing.pack, config.pricing.modules_count);
    
    DIGISCHOOL_CATALOG.courses.push({
      id: courseId,
      pillarId: pillar.id,
      pillarName: pillar.name,
      pillarIcon: pillar.icon,
      level: level,
      title: `${pillar.name} — ${level}`,
      short: `Parcours ${level.toLowerCase()} en ${pillar.name.toLowerCase()}, avec IA embarquée et approche par compétences (APC)`,
      audience: config.audience,
      durationDays: config.duration,
      modules: modules,
      pricing: {
        pack_fcfa: config.pricing.pack,
        modules_count: config.pricing.modules_count,
        module_fcfa: modulePrice
      },
      status: status,
      tags: ["IA embarquée", "APC", "Day-1 Operational"]
    });
  });
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.DIGISCHOOL_CATALOG = DIGISCHOOL_CATALOG;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DIGISCHOOL_CATALOG;
}
