import reel1 from "../../../public/videos/reel1.mp4";
import reel2 from "../../../public/videos/reel2.mp4";
import reel3 from "../../../public/videos/reel3.mp4";
import homeDetail from "../../assets/home/homeDetail.webp";
import driveway from "../../assets/drive/drivewayimage.webp";
import ceramic from "../../assets/protect/ceramic.webp";
import reelimg1 from "../../../public/videos/reel1.png";
import reelimg2 from "../../../public/videos/reel2.png";
import reelimg3 from "../../../public/videos/reel3.png";
export const SERVICES_DATA = [
  {
    icon: "fa-hand-sparkles",
    title: "Hand Wash",
    desc: "Our foundational service. Multi-bucket method with pH neutral shampoos to cleanse without scratching.",
  },
  {
    icon: "fa-gem",
    title: "Ceramic Coating",
    desc: "Long-term protection. Liquid polymer bonds to paint for years of gloss, hydrophobic effects, and ease of cleaning.",
  },
  {
    icon: "fa-couch",
    title: "Interior Detail",
    desc: "Steam cleaning, leather conditioning, and carpet extraction to restore the cabin to factory freshness.",
  },
  {
    icon: "fa-spray-can-sparkles",
    title: "Paint Correction",
    desc: "The removal of imperfections. We cut and polish the clear coat to remove swirls and scratches.",
  },
  {
    icon: "fa-home",
    title: "Driveway Services",
    desc: "Professional mobile detailing done at your home driveway—convenient and hassle-free.",
  },
  {
    icon: "fa-lightbulb",
    title: "Headlight Restoration",
    desc: "Crystal-clear headlights restored for better night visibility and style.",
  },
];
export const SHOWCASE_DATA = [
  {
    id: "01",
    subtitle: "Car Detailing",
    title: "DLUX Premier Car Detailing Service",
    desc1:
      "Our expert technicians employ state-of-the-art techniques and premium products to meticulously clean, polish, and protect every inch of your car.",
    desc2:
      "From a thorough exterior wash and wax to deep interior cleaning and conditioning, we ensure your vehicle looks and feels as good as new.",
    buttonText: "Explore Car Detailing",
    link: "detail", // Link to your Detail page
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop",
    image: homeDetail, // ADD THIS
  },

  {
    id: "02",
    subtitle: "Paint Protection",
    title: "Ceramic Coating & Paint Correction",
    desc1:
      "Lock in that showroom shine for years, not weeks. Our ceramic coatings provide a sacrificial layer of protection against UV rays, bird droppings, and road grime.",
    desc2:
      "Before coating, we perform multi-stage paint correction to remove swirls and scratches, ensuring the bond is permanent and the reflection is flawless.",
    buttonText: "Explore Ceramatic Coating",
    link: "/protect", // Link to your Protection page
    image: ceramic,
  },
  {
    id: "03",
    title: "Dlux Hand Car Wash",
    subtitle: "Driveway Service",
    desc1:
      "We believe your vehicle deserves the highest level of care that’s why everything we do is 100% by hand. No harsh machines, no rotating brushes, and no shortcuts. Just meticulous, paint-safe washing that protects your vehicle’s finish while delivering a deep, flawless clean.",
    desc2:
      "Our hand wash process is designed to prevent scratches, swirl marks, and paint damage, using only premium products, soft microfiber tools, and proven techniques trusted by professionals. From daily drivers to luxury cars, we treat every vehicle with the same attention to detail and respect it deserves",
    buttonText: "Explore Driveway Services",
    link: "/driveway-services", // Link to your Driveway page
    image: driveway,
  },
];
export const REVIEWS = [
  {
    id: 1,
    name: "Poli Summers",
    date: "2 weeks ago",
    rating: 5,
    text: "The ceramic coating came out perfect—super shiny and smooth, like a brand-new car. The detailer AJ did an excellent job with great attention to detail. Highly recommend Dlux for quality work.",
  },
  {
    id: 2,
    name: "Adam Smith",
    date: "1 week ago",
    rating: 5,
    text: "One of the best car wash services I’ve had. The exterior shine looked amazing, and the interior felt fresh and spotless. The price was fair, and I didn’t feel rushed.",
  },
  {
    id: 3,
    name: "Nathan M",
    date: "2 weeks ago",
    rating: 5,
    text: "Overjoyed with the service. Super friendly staff gave my car a pristine clean, perfectly ready for summer. Peter especially clearly loves cars. Will definitely be coming back.",
  },
  {
    id: 4,
    name: "Dewan Rashad",
    date: "1 week ago",
    rating: 5,
    text: "My car looked fresh and spotless afterward. The staff worked carefully and didn’t miss any details. Quick, professional, and totally worth the price.",
  },
  {
    id: 5,
    name: "Robert Fox",
    date: "1 week ago",
    rating: 5,
    text: "Best paint correction in the city. Swirl marks are completely gone. These guys are magicians.",
  },
  {
    id: 6,
    name: "Brad Sanderson",
    date: "1 month ago",
    rating: 5,
    text: "I arrived late, but Jerrod and the team jumped into action and got my CRV cleaned inside and out in 30 mins. The job was perfect and the price really decent. First class.",
  },
];
export const Pricing_DATA = [
  {
    title: "The Maintenance",
    price: "$45",
    desc: "Exterior hand wash, wheel face cleaning, tire dressing, and plush towel dry.",
    isSignature: false,
  },
  {
    title: "DLUX Refresh",
    price: "$90",
    desc: "Full interior vacuum, dashboard wipe down, window cleaning, and exterior spray wax.",
    isSignature: true,
  },
  {
    title: "The Restoration",
    price: "$250+",
    desc: "Clay bar treatment, machine polish (1-step), leather conditioning, and carpet extraction.",
    isSignature: false,
  },
];

export const SOCIAL_REELS = [
  {
    title: "Porsche Coating",
    video: reel1,
    rotate: "rotate-1",
    img: reelimg1,
  },
  {
    title: "Paint Correction",
    video: reel2,
    rotate: "-rotate-1",
    img: reelimg2,
  },
  {
    title: "Interior Deep Clean",
    video: reel3,
    rotate: "rotate-1",
    img: reelimg3,
  },
];

export const PORTFOLIO_DATA = [
  {
    id: "01",
    title: "Ceramic Coating",
    img: "https://images.pexels.com/photos/6873123/pexels-photo-6873123.jpeg",
  },
  {
    id: "02",
    title: "Paint Correction",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Interior Restoration",
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
  },
];
