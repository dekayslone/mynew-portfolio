export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  year: string;
  tags: string[];
  client: string;
  role: string;
}

export interface Flyer {
  id: string;
  name: string;
  imageUrl: string;
}

export const FEATURED_FLYERS: Flyer[] = [
  {
    id: '1',
    name: 'Reseco Africa Social Media Flyer',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773004993/Reseco_Africa_Ubuntu-Mandela_kte71x.png'
  },

  {
    id: '2',
    name: 'Event Flyer - Building Earning Power',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005247/BEP_3DTG_b5l2dt.png'
  },

  {
    id: '3',
    name: 'Webinar Flyer - Reseco Africa',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005228/Reseco_Africa_September_Webinar_xwrihq.png'
  },

  {
    id: '4',
    name: 'AD Flyer - Otega Oluwaseun Farm Estate',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005787/Farm_City_Estate_dllyta.png'
  },

    {
    id: '5',
    name: 'Reseco Africa - International Women Day Flyer',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005685/Reseco_IWD_eew7ne.png'
  },

      {
    id: '6',
    name: 'Reseco Africa - Magazine Page',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773006113/Reseco_Africa_LandLine_October_tp8orn.png'
  },

    {
    id: '7',
    name: 'Cave Camp - The Cave Adullam',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005906/PD_Cave_Camp_2025_scfubd.png'
  },

      {
    id: '8',
    name: 'AD Flyer - Otega Oluwaseun Farm Estate',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773006363/OTOS_Farmland_New_vwsxfg.png'
  },
];

export const ALL_FLYERS: Flyer[] = [
  ...FEATURED_FLYERS,
 {
   id: '9',
   name: 'IBTProg International - Hiring CRO',
  imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773010685/IBTProg_Hiring_CRO_jdttly.png'
 }
];

export const FLYERS: Flyer[] = [
  {
    id: '1',
    name: 'Reseco Africa Social Media Flyer',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773004993/Reseco_Africa_Ubuntu-Mandela_kte71x.png'
  },

  {
    id: '2',
    name: 'Event Flyer - Building Earning Power',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005247/BEP_3DTG_b5l2dt.png'
  },

  {
    id: '3',
    name: 'Webinar Flyer - Reseco Africa',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005228/Reseco_Africa_September_Webinar_xwrihq.png'
  },

  {
    id: '4',
    name: 'AD Flyer - Otega Oluwaseun Farm Estate',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005787/Farm_City_Estate_dllyta.png'
  },

    {
    id: '5',
    name: 'Reseco Africa - International Women Day Flyer',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005685/Reseco_IWD_eew7ne.png'
  },

      {
    id: '5',
    name: 'Reseco Africa - Magazine Page',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773006113/Reseco_Africa_LandLine_October_tp8orn.png'
  },

    {
    id: '6',
    name: 'Cave Camp - The Cave Adullam',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773005906/PD_Cave_Camp_2025_scfubd.png'
  },

      {
    id: '5',
    name: 'AD Flyer - Otega Oluwaseun Farm Estate',
    imageUrl: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773006363/OTOS_Farmland_New_vwsxfg.png'
  },
  
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bullion Incorporation Limited',
    category: 'Brand Identity',
    description: 'A comprehensive visual identity for a real estate company about to enter the market.',
    fullDescription: 'Bullion Incorporation Limited required a brand that felt both human and highly advanced. We developed a visual system based on the concept of "Elegance and Reality". The project included a full logo suite, typography system, and a library of assets for their launch.',
    image: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1772416279/PB_March_4th_Slide_2_xurxpy.png',
    year: '2024',
    tags: ['Strategy', 'Identity', 'Flyer'],
    client: 'Lumina AI Corp',
    role: 'Lead Brand Designer'
  },
  {
    id: '2',
    title: 'Willows & Co Wellness Center',
    category: 'Motion Design',
    description: 'An organic farm brand focused on fresh, pesticide-free produce and sustainable farming.',
    fullDescription: 'Willow & Co. Wellness Center required a calm and refined identity that reflects balance, mindfulness, and holistic healing. The visual system combines a geometric symbol inspired by meditation and inner harmony with a soothing color palette to create a sense of serenity and trust. The result is a modern, tranquil brand identity that positions Willow & Co. as a welcoming destination for individuals seeking wellness, relaxation, and a balanced lifestyle.',
    image: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773001093/Artboard_1_fcofx2.png',
    year: '2024',
    tags: ['Branding', 'Design'],
    client: 'Willows & Co Wellness Center',
    role: 'Creative Director'
  },
  {
    id: '3',
    title: 'Green Sprout Organic Farm',
    category: 'Visual Strategy',
    description: 'An organic farm brand focused on fresh, pesticide-free produce and sustainable farming.',
    fullDescription: 'Green Sprout Organic Farms is an organic farm dedicated to growing and supplying fresh, pesticide-free vegetables, fruits, and herbs to local markets and organic stores. The brand promotes healthy eating and sustainable farming while encouraging communities to reconnect with nature through fresh, responsibly grown produce.',
    image: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1773000506/Artboard_1_byrssf.png',
    year: '2025',
    tags: ['Branding', 'Flyer', 'Strategy'],
    client: 'Green Sprout Organic Farm',
    role: 'Visual Strategist'
  },
  {
    id: '4',
    title: 'Da Snacks',
    category: 'Baverage Store',
    description: 'A playful brand identity designed to capture the joy of snacking for children.',
    fullDescription: 'This branding project for Da-Snacks was designed to capture the joy, playfulness, and care behind a children-focused snack brand. The visual identity combines rounded typography, soft shapes, and a vibrant color palette to reflect fun, energy, and approachability. The deep teal background builds trust and freshness, while the light blue elements introduce a playful tone that appeals to young audiences. The overall design balances childlike excitement with a clean, modern aesthetic, creating a brand that feels both delightful to children and reliable to parent.',
    image: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1772418282/Artboard_1_atnu50.png',
    year: '2023',
    tags: ['Brand Design', 'Flyer'],
    client: 'Da Snack',
    role: 'Brand Designer'
  }
];

export const TESTIMONIALS = [
  {
    name: "Tosin Adebayo",
    role: "CEO, Green Sprout Organic Farm",
    content: "Professional, responsive, and very talented. DOF delivered exactly what we needed and even added ideas that improved the overall brand look. I would definitely recommend his services.",
    rating: 5,
    score: "4.7"
  },
  {
    name: "Chinedu Okafor",
    role: "Founder",
    content: "I was impressed by the level of creativity and attention to detail. DOF didn’t just design a logo, he helped shape the visual direction of our brand. The final result exceeded our expectations.",
    rating: 5,
    score: "4.9"
  },
  {
    name: "Adeola Ojo",
    role: "Marketing Director",
    content: "Working with DOF was a smooth experience from start to finish. He understood the vision for our brand and translated it into a clean and professional design that truly represents our business. We’ve received several compliments since launching the new identity. A true creative partner.",
    rating: 5,
    score: "5.0"
  }
];

export const PRICING = [
  {
    title: "Branding",
    price: "200K",
    features: ["Visual Identity", "Logo Suite", "Brand Guidelines", "Strategy Session"],
    accent: "brand-accent"
  },
  {
    title: "Motion Design",
    price: "120K",
    features: ["Motion Design AD Video", "Brand Storytelling", "Social Assets", "Script Writing"],
    accent: "blue-500"
  },
  {
    title: "Web Development",
    price: "350K",
    features: ["Custom React Sites", "E-commerce", "Performance Optimization", "SEO Strategy"],
    accent: "emerald-500"
  }
];

export const LOGOS = [
  { name: "Otega Oluwaseun Farm Estate", logo: "https://res.cloudinary.com/dajmxjgzq/image/upload/v1772416817/OOFarms_gi1seu.png" },
  { name: "Reseco Africa", logo: "https://res.cloudinary.com/dajmxjgzq/image/upload/v1772417464/Untitled-1_qc8ooa.png" },
  { name: "IBTProg International", logo: "https://res.cloudinary.com/dajmxjgzq/image/upload/v1772417552/ibtprog_foohu4.png" },
  { name: "Otega Oluwaseun Consulting", logo: "https://res.cloudinary.com/dajmxjgzq/image/upload/v1772416902/OOC_White_ye0pjp.png" },
  { name: "Ginormous Investment", logo: "https://res.cloudinary.com/dajmxjgzq/image/upload/v1772417150/H_Logo_copy_2_gcbkw4.png" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dive deep into your brand's DNA, goals, and market landscape to find your unique edge."
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Developing a robust visual and motion strategy that aligns with your business objectives."
  },
  {
    step: "03",
    title: "Design",
    desc: "Crafting the visual identity and motion systems with meticulous attention to detail."
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Handing over a complete brand toolkit and motion assets ready for global impact."
  }
];

export const FAQS = [
  {
    question: "How long does a typical branding project take?",
    answer: "A comprehensive branding project usually takes 2-4 weeks, depending on the complexity and scope of deliverables."
  },
  {
    question: "What files will I receive at the end of the project?",
    answer: "You will receive a full brand toolkit including logo suites (AI, EPS, PNG, SVG), typography files, brand guidelines (PDF), and motion source files if applicable."
  },
  {
    question: "Do you offer motion design as a standalone service?",
    answer: "Yes! While I love building full identities, I also offer specialized motion design services for existing brands looking to elevate their digital presence."
  },
  {
    question: "How do we get started?",
    answer: "Simply fill out the contact form below or reach out via WhatsApp. I'll get back to you within 24 hours to schedule a discovery call."
  }
];

export const TOOLS = [
  { name: "Figma", icon: "figma" },
  { name: "Illustrator", icon: "adobeillustrator" },
  { name: "After Effects", icon: "adobeaftereffects" },
  { name: "Lightroom", icon: "adobelightroom" },
  { name: "Photoshop", icon: "adobephotoshop" }
];
