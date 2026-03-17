export type NavItem = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export type TrendingTile = {
  label?: string;
  href: string;
  image: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  price: string;
  summary: string;
  image: string;
  altImage: string;
  detailImage: string;
  color: string;
  fit: string;
  details: string[];
};

export const PLACEHOLDER_IMAGE =
  "https://a.storyblok.com/f/126880/820x1080/761a6737a9/hp_cblock_11a6031352_shopbyfeature_w2.jpg/m/640x0/filters:no_upscale(),format(webp)";

export const PLACEHOLDER_VIDEO =
  "https://cloudflarestream.com/c123267bf9212f9de507634e3894d09b/manifest/video.m3u8";

export const tickerOffers = [
  "10% off your first order with code MANIFEST10",
  "Free gift with a minimum spend of $150",
  "Free shipping on selected new-in styles",
];

export const homeCategories = [
  "New In",
  "Dresses",
  "Tops",
  "Pants",
  "Skirts",
  "Outerwear",
  "Knitwear",
  "Occasion",
];

export const navItems: NavItem[] = [
  { label: "New In", href: "/collection" },
  { label: "Signatures", href: "/collection" },
  { label: "Shop All", href: "/collection" },
  { label: "Bestsellers", href: "/collection" },
  { label: "Tops", href: "/collection" },
  { label: "Dresses", href: "/collection" },
  { label: "Pants", href: "/collection" },
  { label: "Curated For You", href: "/collection" },
  { label: "Get Inspired", href: "/collection" },
];

export const editorialCards: CardItem[] = [
  {
    title: "Tailored For Transit",
    description: "Crisp layers and softened structure for long workdays.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "After Hours, Before Midnight",
    description: "Easy silhouette shifts for dinner, events, and last-minute plans.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Minimal Drama",
    description: "Warm neutrals, narrow lines, and pieces that photograph cleanly.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
];

export const featureCards: CardItem[] = [
  {
    title: "Column dressing",
    description: "Long lines, clean seams, zero noise.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Desk to evening",
    description: "Pieces that hold shape through a full schedule.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Soft tailoring",
    description: "Relaxed precision in maroon, cream, and ink.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Statement layers",
    description: "Outer pieces that carry the whole look.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
];

export const trendingTiles: TrendingTile[] = [
  {
    href: "/product/marrow-wrap-top",
    image: PLACEHOLDER_IMAGE,
    alt: "Trending editorial feature",
  },
  {
    label: "The clubroom",
    href: "/product/tailored-column-dress",
    image: PLACEHOLDER_IMAGE,
    alt: "The clubroom",
  },
  {
    label: "New signatures",
    href: "/product/creased-satin-shirt",
    image: PLACEHOLDER_IMAGE,
    alt: "New signatures",
  },
  {
    label: "Pants",
    href: "/product/architect-wide-leg-pant",
    image: PLACEHOLDER_IMAGE,
    alt: "Pants",
  },
];

export const products: Product[] = [
  {
    slug: "tailored-column-dress",
    name: "Tailored Column Dress",
    price: "$168",
    summary: "A clean ankle-length line with subtle shoulder structure and a softened waist.",
    image: PLACEHOLDER_IMAGE,
    altImage: PLACEHOLDER_IMAGE,
    detailImage: PLACEHOLDER_IMAGE,
    color: "Deep Maroon",
    fit: "Slim column fit",
    details: [
      "Invisible back zip for a seamless front.",
      "Fully lined bodice with soft stretch through the skirt.",
      "Designed to sit close without feeling restrictive.",
    ],
  },
  {
    slug: "creased-satin-shirt",
    name: "Creased Satin Shirt",
    price: "$94",
    summary: "A slightly oversized shirt with a fluid drape and a sharper collar stance.",
    image: PLACEHOLDER_IMAGE,
    altImage: PLACEHOLDER_IMAGE,
    detailImage: PLACEHOLDER_IMAGE,
    color: "Warm Cream",
    fit: "Relaxed tailored fit",
    details: [
      "Dropped shoulder with elongated cuffs.",
      "Cut to tuck smoothly into trousers and skirts.",
      "Soft sheen that reads polished in daylight and evening light.",
    ],
  },
  {
    slug: "architect-wide-leg-pant",
    name: "Architect Wide-Leg Pant",
    price: "$112",
    summary: "High-rise trousers with a deliberate sweep and a structured waistband.",
    image: PLACEHOLDER_IMAGE,
    altImage: PLACEHOLDER_IMAGE,
    detailImage: PLACEHOLDER_IMAGE,
    color: "Ink Black",
    fit: "Long wide-leg fit",
    details: [
      "Extended tab closure keeps the waistband clean.",
      "Pressed crease for a lengthening visual line.",
      "Made to pair back with matching soft suiting pieces.",
    ],
  },
  {
    slug: "marrow-wrap-top",
    name: "Marrow Wrap Top",
    price: "$86",
    summary: "A close wrap silhouette that layers comfortably under outerwear.",
    image: PLACEHOLDER_IMAGE,
    altImage: PLACEHOLDER_IMAGE,
    detailImage: PLACEHOLDER_IMAGE,
    color: "Deep Teal",
    fit: "Adjustable wrap fit",
    details: [
      "Internal tie support for cleaner drape.",
      "Sleeve line designed to stack with bracelets and watches.",
      "A useful statement color within an otherwise neutral edit.",
    ],
  },
];

export const communityPosts: CardItem[] = [
  {
    title: "Style notes from the studio",
    description: "How the collection is layered for early calls and late reservations.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Color built around restraint",
    description: "Why maroon and cream carry the shell without needing louder accents.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Wardrobe architecture",
    description: "Pieces chosen to repeat well instead of performing once.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "The soft tailoring chapter",
    description: "Where ease is built into the line, not added after the fact.",
    href: "/collection",
    image: PLACEHOLDER_IMAGE,
  },
];

export const valuePillars = [
  {
    title: "Editorial clarity",
    description: "Layout hierarchy shaped around campaign moments, not generic product dumping.",
  },
  {
    title: "Merchandising rhythm",
    description: "Section pacing modeled after premium fashion storefronts with more breathing room.",
  },
  {
    title: "Brand-first palette",
    description: "Maroon and cream replace the reference tone while keeping the same calm structure.",
  },
  {
    title: "Template-ready shell",
    description: "Homepage, collection, and product page are ready to scale into a fuller storefront.",
  },
];

export const footerColumns = {
  shop: ["New In", "Dresses", "Tops", "Trousers"],
  about: ["Our Story", "Journal", "Storefront Notes", "Careers"],
  support: ["Shipping", "Returns", "Contact", "Size Guide"],
};

export const collectionChips = [
  "All",
  "Dresses",
  "Tailoring",
  "Shirting",
  "Occasion",
  "Travel Ready",
];