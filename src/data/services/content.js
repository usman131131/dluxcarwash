import driveway1 from "../../assets/drive/driveway1.webp";
import driveway2 from "../../assets/drive/driveway2.webp";
import driveway3 from "../../assets/drive/driveway3.webp";
import driveway4 from "../../assets/drive/driveway4.webp";
import driveway5 from "../../assets/drive/driveway5.webp";

export const SERVICES = [
  {
    id: "01",
    title: "Valet",
    tagline: "A Fantastic In & Out Service",
    description: "The essential maintenance wash for daily drivers.",
    features: [
      "Interior Vac Including Boot",
      "Hand Wash & Wheels",
      "Chamois Dry With Door & Boot Sills Dried",
      "Wheels Cleaned & Tyres Glossed",
      "Interior Dusted With Damp Chamois",
      "Crevice Brush Used For Hard To Reach Areas",
      "Interior & Exterior Glass Cleaned",
      "Final Hand Check To Ensure Body Is Clean",
    ],
    prices: { sedan: 54, suv: 62, large: 72 },
    addons: [
      { name: "Interior Clean Upgrade", price: 16 },
      { name: "Spray Wax", price: 6 },
      { name: "Rubber Mat Set (4)", price: 6 },
      { name: "Boot Mat Wash", price: 5 },
    ],
    image: driveway1,
  },
  {
    id: "02",
    title: "Valet & Hand Polish",
    tagline: "Clean, Shine, Protect",
    description: "Includes Valet Wash plus Hand Wax application.",
    features: [
      "Hand Wax Applied & Buffed Off Painted Surfaces",
      "Seals & Protects Paintwork",
      "Leaves Your Car With A Lasting Shine",
      "Water Beads Off (Reduces Wear & Tear)",
      "Dirt Runs Right Off During Cleaning",
    ],
    prices: { sedan: 83, suv: 93, large: 99 },
    addons: [
      { name: "Interior Clean Upgrade", price: 16 },
      { name: "Rubber Mat Set (4)", price: 6 },
      { name: "Boot Mat Wash", price: 5 },
    ],
    image:
      driveway2,
  },
  {
    id: "03",
    title: "Valet Superior",
    tagline: "Perfect For Beach Sand & Pet Hair",
    description: "Includes Valet Wash Plus Interior Clean Upgrade.",
    features: [
      "Interior Clean Upgrade (Detailing solution & damp microfibre)",
      "Removes built up grime and dirt",
      "Additional time spent on Pet Hair removal",
      "Additional time spent on Hard to remove Beach Sand",
    ],
    prices: { sedan: 135, suv: 155, large: 175 },
    addons: [
      { name: "Hand Polish", price: 32 },
      { name: "Rubber Mat Set (4)", price: 6 },
      { name: "Boot Mat Wash", price: 5 },
      { name: "Spray Wax", price: 6 },
    ],
    image:
      driveway3,
  },
  {
    id: "04",
    title: "Valet & Exterior Works",
    tagline: "Comprehensive Exterior Restoration",
    description: "Includes Valet Wash Plus Enhanced Exterior Care.",
    features: [
      "Includes full Valet Wash",
      "Exterior Paint Decontamination",
      "Clay Bar Treatment",
      "Machine Polish to remove light swirls",
      "Premium Wax Sealant Application",
    ],
    prices: { sedan: 260, suv: 275, large: 285 },
    addons: [
      { name: "Interior Clean Upgrade", price: 16 },
      { name: "Rubber Mat Set (4)", price: 6 },
    ],
    image:
      driveway4,
  },
  {
    id: "05",
    title: "Valet & Interior Works",
    tagline: "Express Interior Detail (Seats OR Floors)",
    description: "Includes Valet Wash Plus & Interior Clean Upgrade.",
    features: [
      "Door & Boot Seals Degreased & Pressure Cleaned",
      "Interior Clean Upgrade included",
      "CHOICE: Seats Steam Cleaned (High Pressure Extraction)",
      "OR",
      "CHOICE: Leather Cleaned & Nourished (Protective Cream)",
    ],
    prices: { sedan: 260, suv: 275, large: 285 },
    addons: [],
    image:
     driveway5,
  },
];
