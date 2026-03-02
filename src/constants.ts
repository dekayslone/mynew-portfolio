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

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bullion Incorporation Limited',
    category: 'Brand Identity',
    description: 'A comprehensive visual identity for a next-gen AI startup, focusing on transparency and fluid motion.',
    fullDescription: 'Lumina Tech required a brand that felt both human and highly advanced. We developed a visual system based on the concept of "Refracted Intelligence," using glass-like textures and fluid gradients. The project included a full logo suite, typography system, and a library of motion assets for their product launch.',
    image: 'https://res.cloudinary.com/dajmxjgzq/image/upload/v1772415887/Bullion-Word-Mapping-_-Moodboarding_013016_gr5u2s.jpg',
    year: '2024',
    tags: ['Strategy', 'Identity', 'Flyer'],
    client: 'Lumina AI Corp',
    role: 'Lead Brand Designer'
  },
  {
    id: '2',
    title: 'Aetheria',
    category: 'Motion Design',
    description: 'Dynamic brand storytelling through abstract 3D motion sequences for a luxury fragrance house.',
    fullDescription: 'For Aetheria, the goal was to visualize scent. We created a series of high-end 3D motion pieces that used particle simulations to represent different fragrance notes. These assets were used across social media and in-store digital displays to create an immersive brand experience.',
    image: 'https://picsum.photos/seed/aether/1200/800',
    year: '2023',
    tags: ['3D Motion', 'Storytelling'],
    client: 'Aetheria Parfums',
    role: 'Motion Director'
  },
  {
    id: '3',
    title: 'Nexus Capital',
    category: 'Visual Strategy',
    description: 'Redefining the visual language of venture capital with a bold, minimalist approach.',
    fullDescription: 'Nexus Capital wanted to move away from the traditional "stuffy" finance look. We implemented a brutalist-inspired visual strategy using heavy typography and a high-contrast color palette. This repositioned them as a modern, aggressive partner for tech founders.',
    image: 'https://picsum.photos/seed/nexus/1200/800',
    year: '2024',
    tags: ['Typography', 'Strategy'],
    client: 'Nexus VC',
    role: 'Visual Strategist'
  },
  {
    id: '4',
    title: 'Vanguard Systems',
    category: 'Digital Experience',
    description: 'Interactive brand platform for a global logistics leader, blending utility with high-end aesthetics.',
    fullDescription: 'Vanguard Systems needed a digital presence that matched their global scale. We designed a modular brand system that could scale across multiple sub-brands while maintaining a cohesive look. The project focused on data visualization and interactive motion elements.',
    image: 'https://picsum.photos/seed/vanguard/1200/800',
    year: '2023',
    tags: ['UI/UX', 'Motion'],
    client: 'Vanguard Global',
    role: 'Creative Lead'
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Lumina Tech",
    content: "Okiki transformed our brand from a concept into a visionary leader. The motion work is simply world-class.",
    rating: 5,
    score: "5.0"
  },
  {
    name: "Marcus Chen",
    role: "Founder, Nexus Capital",
    content: "Strategic, bold, and incredibly professional. The new visual identity has completely changed how founders perceive us.",
    rating: 5,
    score: "4.9"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Aetheria",
    content: "The 3D motion sequences captured our brand essence perfectly. A true creative partner.",
    rating: 5,
    score: "5.0"
  }
];

export const PRICING = [
  {
    title: "Branding",
    price: "50K",
    features: ["Visual Identity", "Logo Suite", "Brand Guidelines", "Strategy Session"],
    accent: "brand-accent"
  },
  {
    title: "Motion Design",
    price: "35K",
    features: ["3D/2D Animation", "Brand Storytelling", "Social Assets", "Sound Design"],
    accent: "blue-500"
  },
  {
    title: "Web Development",
    price: "100K",
    features: ["Custom React Sites", "E-commerce", "Performance Optimization", "SEO Strategy"],
    accent: "emerald-500"
  }
];

export const LOGOS = [
  { name: "Footstool Estates", logo: "https://picsum.photos/seed/footstool/200/100" },
  { name: "Reseco Africa", logo: "https://picsum.photos/seed/reseco/200/100" },
  { name: "IBTProg International", logo: "https://picsum.photos/seed/ibtprog/200/100" },
  { name: "Otega Oluwaseun Consulting", logo: "https://picsum.photos/seed/otega/200/100" },
  { name: "Ginormous Investment", logo: "https://picsum.photos/seed/ginormous/200/100" },
  { name: "Oluwaferanmi Famawode", logo: "https://picsum.photos/seed/oluwa/200/100" },
  { name: "Bethel Citizens", logo: "https://picsum.photos/seed/bethel/200/100" }
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
    answer: "A comprehensive branding project usually takes 4-6 weeks, depending on the complexity and scope of deliverables."
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
