import protect1 from "../../assets/protect/protect1.webp"
import protect3 from "../../assets/protect/protect3.webp"
export const PROTECTION_SERVICES = [
  {
    id: "01",
    title: "Carbon Ceramic: New Car",
    tagline: "For Factory Fresh Vehicles",
    description: "Carbon Coat represents the latest in Surface Coatings. Silicon Carbide + Nano Technology provides superior bonding at a molecular level. It creates an unmatched gloss, 9H Hardness (4x stronger than SiO2), and extreme hydrophobic properties. Ideal for protecting your investment from day one.",
    features: [
      "Surface Decontamination (Remove factory transport sealants)",
      "Minor Paint Correction (Remove delivery scuffs/marks)",
      "Application of Carbon Coat (Silicon Carbide)",
      "9H Hardness Scratch Resistance",
      "Extreme Hydrophobic Water Beading",
      "Lifetime Gloss Retention (No more waxing)"
    ],
    prices: { sedan: 800, suv: 900, large: 1000 },
    addons: [],
    image: protect1
  },
  {
    id: "02",
    title: "Carbon Ceramic: Restoration",
    tagline: "For Used / Pre-Owned Vehicles",
    description: "When coating a used car, the existing paint finish is locked in permanently. Therefore, this package includes extensive Paint Correction to restore the paint to perfection BEFORE sealing. We remove swirls, oxidation, and imperfections so your 'New to You' car looks better than showroom new.",
    features: [
      "Heavy Decontamination (Clay Bar & Iron Removal)",
      "Multi-Stage Paint Correction (Swirl & scratch removal)",
      "Surface Prep & Oil Removal",
      "Application of Carbon Coat (Silicon Carbide)",
      "Locks in the restored finish for years",
      "consultation required for severe defects"
    ],
    prices: { sedan: 1050, suv: 1180, large: 1320 },
    addons: [],
    image:protect3
  }
];