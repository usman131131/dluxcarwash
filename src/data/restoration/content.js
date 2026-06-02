import restoration from "../../assets/restoration/restoration.webp"

export const RESTORATION_DATA = {
  title: "Headlight Restoration",
  description: "Restore clarity and safety. We remove oxidation, yellowing, and hazing to bring your lenses back to factory transparency.",
  image:restoration,
  options: [
    {
      id: "A",
      title: "Dull / Lightly Faded",
      desc: "Perfect for headlights showing early signs of oxidation or hazing. We polish the surface to restore optical clarity.",
      time: "15 mins (Add-on)",
      price: "$40",
      unit: "per light"
    },
    {
      id: "B",
      title: "Damaged Clear / Heavily Faded",
      desc: "For headlights with peeling clear coat or severe yellowing. Includes wet sanding, compounding, and UV sealant application.",
      time: "30 mins (Add-on)",
      price: "$80",
      unit: "per light"
    }
  ]
};