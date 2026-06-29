export interface ServiceStep {
  title: string;
  points: string[];
}

export interface ServiceContent {
  slug: string;
  name: string;
  nameSubtitle: string;  
  shortName: string;
  headlineWord: string; // used as "Transforming {headlineWord} in Mangalore"
  whatWeDoLabel: string; // heading above the intro paragraph, e.g. "Commercial interior design"

  whyChooseLabel: string;
  
  metaTitle: string;
  heroImage: string;
  heroImage2: string;
  intro: string;
  whyUs: string;
  steps: ServiceStep[];
  relatedCategory: string;
  
}

// Slugs and names match the real site's menu structure:
// Services -> Interior Design / Space Planning / Turnkey Project Execution
export const services: Record<string, ServiceContent> = {
  "interior-design": {
    slug: "interior-design",
    name: "Interior Design",
    nameSubtitle: "Bespoke Interior Design for Modern Living, Work, and Hospitality",
    shortName: "Interior Design",
    headlineWord: "Interior Spaces",
    whatWeDoLabel: "Crafting Homes with Heart & Harmony",
    whyChooseLabel: "Elegant Designs for Inspiring Workspaces",
    metaTitle: "Interior Designers in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Interior-designs.png",
    heroImage2: "/images/services/office-Interior-designs.jpg",
    intro:
      "At Yutori Designs, residential spaces form the cornerstone of our creative portfolio. We specialize in crafting warm, inviting homes that reflect personal tastes, lifestyles, and everyday functionality. From modern apartments to expansive villas, our team seamlessly blends aesthetics and comfort to create timeless interiors. Our emphasis on spatial harmony, natural materials, and thoughtful details ensures every home we design is a true sanctuary.",
    whyUs:
      "We pair an understanding of how people actually live and work with deep familiarity with the Mangalore and Udupi market — local vendors, local material lead times, and a design language drawn from the region itself rather than a generic template.",
    
    steps: [
      {
        title: "Initial consultation",
        points: [
          "A detailed sit-down with the client to understand expectations and vision",
          "Preferences captured early — design language, materials, colour direction",
          "Site details gathered: location, area, scope, and budget",
        ],
      },
      {
        title: "Design development",
        points: [
          "A high-level concept is created first and signed off by the client",
          "Engineering estimates the project cost against that concept",
          "Once the estimate is approved, execution begins while detailed design continues in parallel",
        ],
      },
      {
        title: "Implementation",
        points: [
          "A full project plan is prepared from the design and estimate",
          "Vendors are finalised and materials ordered",
          "Civil and interior work proceeds together — tiling, painting, electrical, plumbing, HVAC, carpentry, and decor",
          "The client receives regular progress updates throughout",
        ],
      },
      {
        title: "Final review",
        points: [
          "The design team reviews completed work in detail against the brief",
          "Once quality is signed off internally, the client is invited for final walkthrough",
        ],
      },
    ],
    relatedCategory: "Office Space", 
  },
  "space-planning": {
    slug: "space-planning",
    name: "Space Planning",
    nameSubtitle: "Layout Solutions That Maximize Space & Style",
    shortName: "Space Planning",
    headlineWord: "Spaces with Smart Planning",
    whatWeDoLabel: "Efficient Use of Space for Elegant Everyday Living",
    whyChooseLabel: "Shaping Workspaces That Inspire Innovation",
    metaTitle: "Space Planning Services in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Interior-designs.png",
    heroImage2: "/images/services/office-Interior-designs.jpg",
    intro:
      "At Yutori Designs, layout optimization for residential spaces is rooted in simplicity, functionality, and harmony. We thoughtfully plan every square foot to ensure seamless movement, natural light flow, and purposeful use of space. Whether it’s a compact apartment or a spacious home, our designs prioritize comfort, aesthetics, and practicality. Guided by minimalism and a deep understanding of how people live, we create layouts that reflect your lifestyle while enhancing efficiency and tranquility. From room zoning to furniture placement, every detail is considered. At Yutori, we believe that a well-optimized home layout is the foundation of peaceful, inspired everyday living.",
    whyUs:
      "At Yutori Design, we specialize in optimizing corporate office layouts to enhance productivity, collaboration, and employee well-being. Our design strategy focuses on intelligently planning space to support workflow efficiency while reflecting the brand’s identity. From open-plan zones and meeting areas to private cabins and breakout spaces, every element is placed with purpose. We ensure that circulation, lighting, and acoustics are carefully balanced to create a dynamic yet comfortable work environment. Whether designing for startups or large enterprises, Yutori Design delivers customized solutions that adapt to evolving business needs, promoting both innovation and functionality in the workplace.",
    steps: [
      {
        title: "Initial consultation",
        points: [
          "Understanding how the space needs to function day to day",
          "Capturing must-haves, traffic flow, and any structural constraints",
          "Site assessment covering area, structure, scope, and budget",
        ],
      },
      {
        title: "Design development",
        points: [
          "A high-level layout is proposed and reviewed with the client",
          "Costing is prepared against the proposed layout",
          "Detailed planning continues once the layout is approved",
        ],
      },
      {
        title: "Implementation",
        points: [
          "Project plan and vendor finalisation",
          "Layout translated into marked-out, buildable plans on site",
          "Civil and interior execution sequenced to the approved plan",
          "Regular progress reporting to the client",
        ],
      },
      {
        title: "Final review",
        points: [
          "Internal quality review against the approved layout",
          "Walkthrough and handover once sign-off is complete",
        ],
      },
    ],
     relatedCategory: "Villa",
  },
  "turn-key-project-execution": {
    slug: "turn-key-project-execution",
    name: "Turnkey Project Execution",
    nameSubtitle: "Seamless Turnkey Interior Projects in Mangalore",
    shortName: "Turnkey Execution",
    headlineWord: "Spaces, Start to Finish",
    whatWeDoLabel: "Full-Scope Turnkey Project Handling",
    whyChooseLabel: "Why Yutori for turnkey execution",
    metaTitle: "Turnkey Interior Project Execution | Yutori Designs",
     heroImage: "/images/services/Interior-designs.png",
    heroImage2: "/images/services/office-Interior-designs.jpg",
    intro:
      "Yutori Designs offers end-to-end project management services to ensure that every interior design project is executed seamlessly from concept to completion. We meticulously manage each phase of the process—from initial planning and design development to procurement, construction, and final installation. Our experienced team coordinates closely with contractors, vendors, and consultants, ensuring clear communication and smooth collaboration at every step. We prioritize staying on schedule and within budget, without compromising quality or design integrit",
    whyUs:
      "With a strong focus on transparency and efficiency, Yutori Designs handles resource allocation, timeline tracking, quality control, and on-site supervision, so you can stay informed and confident throughout the journey. Our method combines strategic oversight with creative vision, transforming ideas into beautifully realized spaces that meet both functional and aesthetic goals. Whether it’s a corporate office, residence, or hospitality project, we tailor our management approach to suit your unique needs. Every detail—from material selection to final walkthrough—is managed with precision and care. With Yutori Designs, you don’t just get stunning interiors—you get a reliable partner dedicated to delivering excellence at every stage of your turnkey interior project.",
    steps: [
      {
        title: "Initial consultation",
        points: [
          "Full project brief captured in one sitting — vision, budget, and timeline",
          "Site details: location, area, scope, and constraints",
        ],
      },
      {
        title: "Design & costing",
        points: [
          "A high-level concept is created and signed off by the client",
          "Engineering estimates the full project cost against that concept",
          "Detailed design continues in parallel once the estimate is approved",
        ],
      },
      {
        title: "Execution",
        points: [
          "Vendors finalised, materials ordered, project plan locked",
          "Civil and interior work carried out together under one project manager",
          "Regular site updates shared with the client throughout",
        ],
      },
      {
        title: "Final review & handover",
        points: [
          "Internal quality review against the approved design",
          "Final walkthrough and complete handover once sign-off is confirmed",
        ],
      },
    ],
    relatedCategory: "Flat",
  },

  // The three entries below power the Hero section's "View Details"
  // buttons only -- they are intentionally NOT listed in the navbar's
  // Services dropdown, which stays limited to the three above.
  commercial: {
    slug: "commercial",
    name: "Commercial Interior Design",
    shortName: "Commercial",
    headlineWord: "Commercial Spaces",
    whatWeDoLabel: "Commercial interior design",
    whyChooseLabel: "Why Yutori for commercial spaces",
    metaTitle: "Commercial Interior Design in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/commercial-space.jpg",
    intro:
      "Commercial spaces carry a brand's first impression. Our commercial interior work covers offices, retail showrooms, and hospitality spaces — designed to look sharp while genuinely working harder for the business inside, from layout efficiency to material durability under daily foot traffic.",
    whyUs:
      "We design commercial spaces around how a business actually operates day to day, not just how a render looks. Local vendor relationships across Mangalore and Udupi mean realistic timelines and materials that hold up.",
    steps: [
      {
        title: "Brand & brief",
        points: [
          "Understanding the brand identity the space needs to reflect",
          "Capturing operational needs — staff count, customer flow, storage",
          "Site assessment: location, area, scope, and budget",
        ],
      },
      {
        title: "Design development",
        points: [
          "Concept layout proposed and signed off by the client",
          "Cost estimate prepared against the approved concept",
          "Detailed design continues alongside execution planning",
        ],
      },
      {
        title: "Execution",
        points: [
          "Vendors finalised and materials ordered",
          "Civil and interior work sequenced to minimise business downtime",
          "Regular progress updates shared throughout",
        ],
      },
      {
        title: "Handover",
        points: [
          "Internal quality review against the approved design",
          "Final walkthrough once sign-off is complete",
        ],
      },
    ],
    relatedCategory: "Office Space",
  },
  residential: {
    slug: "residential",
    name: "Residential Interior Design",
    shortName: "Residential",
    headlineWord: "Residential Spaces",
    whatWeDoLabel: "Residential interior design",
    whyChooseLabel: "Why Yutori for your home",
    metaTitle: "Residential Interior Design in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/residential-space.jpg",
    intro:
      "A home should hold the people living in it, not just look good in photographs. Our residential projects — villas, flats, and individual homes across Mangalore, Udupi, and beyond — are shaped around natural light, local materials, and the daily rituals of the family who'll actually live there.",
    whyUs:
      "We've designed homes set against hillsides, wrapped around existing trees, and finished with locally-sourced materials — each one different because each site and family asked for something different. No template homes.",
    steps: [
      {
        title: "Initial consultation",
        points: [
          "Understanding how the family lives — routines, priorities, must-haves",
          "Capturing style preferences, material tastes, and colour direction",
          "Site details: plot, built area, scope, and budget",
        ],
      },
      {
        title: "Design development",
        points: [
          "A high-level concept and mood direction shared for sign-off",
          "Cost estimate prepared against the agreed concept",
          "Detailed room-by-room design continues alongside execution planning",
        ],
      },
      {
        title: "Implementation",
        points: [
          "Vendors and material orders finalised",
          "Civil and interior work sequenced — carpentry, electrical, plumbing, decor",
          "Regular site updates shared with the family throughout",
        ],
      },
      {
        title: "Final review",
        points: [
          "A detailed internal walkthrough against the design brief",
          "Handover to the family once quality is confirmed",
        ],
      },
    ],
    relatedCategory: "Villa",
  },
  "office-space": {
    slug: "office-space",
    name: "Office Space Design",
    shortName: "Office Space",
    headlineWord: "Office Spaces",
    whatWeDoLabel: "Office space design udupi",
    whyChooseLabel: "Why Yutori for office spaces",
    metaTitle: "Office Space Design in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/office-space.jpg",
    intro:
      "An office shapes how a team works together every single day. We design workspaces that balance focus and collaboration — smart space planning, premium finishes, and a layout that reflects company culture instead of fighting it.",
    whyUs:
      "We pair an understanding of how teams actually work with hands-on experience executing offices for IT and services companies across Mangalore and Udupi — from open floor plans to quiet focus zones.",
    steps: [
      {
        title: "Initial consultation",
        points: [
          "Understanding company culture, team size, and ways of working",
          "Capturing must-haves — meeting rooms, breakout zones, storage",
          "Site details gathered: location, area, scope, and budget",
        ],
      },
      {
        title: "Design development",
        points: [
          "A high-level layout proposed and signed off by the client",
          "Cost estimate prepared against the approved layout",
          "Detailed design continues in parallel with execution planning",
        ],
      },
      {
        title: "Implementation",
        points: [
          "Vendors finalised, materials ordered, project plan locked",
          "Civil and interior work carried out together — partitions, electrical, HVAC, furniture",
          "Regular progress updates shared with the client",
        ],
      },
      {
        title: "Final review",
        points: [
          "Internal quality review against the approved design",
          "Final walkthrough and handover once sign-off is complete",
        ],
      },
    ],
    relatedCategory: "Office Space",
  },
};
