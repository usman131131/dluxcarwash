import detail1 from "../../assets/detail/detail1.webp"
import detail2 from "../../../public/videos/reel3.mp4"
import detail3 from "../../assets/detail/detail3.webp"
export const DETAIL_SERVICES = [
  {
    id: "01",
    title: "Paint Correction",
    tagline: "Let your car look amazing",
    description: "Great detailing requires thorough preparation. We deep clean targeted areas (sills, jambs, panel joins) before beginning the multi-stage machine correction process to remove scratches and deliver a stunning, mirror-like finish.",
    features: [
      "Interior vacuum & interior clean",
      "Inside wheel and wheel arches deep cleaned",
      "Clay Bar treatment (removes pollution, smooths paint)",
      "Panel joins, badges, mouldings & chrome detailed",
      "Stage 1: Machine cut to remove light scratches",
      "Stage 2: Polish to remove hazing & swirl marks",
      "Stage 3: High gloss sealant to protect paint"
    ],
    prices: { sedan: 360, suv: 390, large: 430 },
    addons: [], // No addons listed in your text
    image: detail1,
  },
  {
    id: "02",
    title: "Interior Detail",
    tagline: "Refresh & Rejuvenate Your Interior",
    description: "A complete interior restoration. After a thorough wash and seal degreasing, we treat cloth seats for stains, steam clean fabrics, and hand-clean leather with nourishing conditioners. Every crevice, compartment, and instrument is hand-detailed.",
    features: [
      "Thorough exterior wash included",
      "Door & Boot seals degreased & pressure cleaned",
      "Cloth seats treated & steam cleaned (stain removal)",
      "Leather seats hand cleaned & conditioned",
      "Roof lining, plastics & compartments detailed",
      "Plastics dressed with protectant (on request)"
    ],
    prices: { sedan: 360, suv: 390, large: 430 },
    addons: [],
   video: detail2
  },
  {
    id: "03",
    title: "Full Detail",
    tagline: "The Best Of Both Treatments",
    description: "The ultimate makeover for your pride & joy. This package combines our Paint Correction and Interior Detail services, plus a full engine bay clean. Perfect for pre-sale preparation or restoring a newly purchased vehicle.",
    features: [
      "Complete Exterior Paint Correction (3-Stage)",
      "Complete Interior Restoration (Steam & Leather)",
      "Engine Bay degreased and dressed",
      "Undercarriage wash",
      "Ideal for Pre-Sale or Restoration"
    ],
    prices: { sedan: 520, suv: 580, large: 655 },
    addons: [],
    image: detail3
  }
];