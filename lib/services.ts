export interface ServiceStep {
  title: string;
  points: string[];
}

export interface ServiceContent {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  heroImage: string;
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
    shortName: "Interior Design",
    metaTitle: "Interior Designers in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/interior-design.jpg",
    intro:
      "From cosy apartments to spacious coastal villas, boutique offices to retail environments, our interior design service shapes every layout, material, and fixture around how a space will actually be used. Each project blends sophistication, efficiency, and the textures of coastal Karnataka into something that feels both grounded and contemporary.",
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
    shortName: "Space Planning",
    metaTitle: "Space Planning Services in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/space-planning.jpg",
    intro:
      "Before any finish or furniture is chosen, the space itself has to work — how people move through it, where light falls, what the structure allows. Our space planning service maps that out first, so every later design decision builds on a layout that's already efficient, compliant, and comfortable.",
    whyUs:
      "Years of executing institutional, commercial, and residential builds across coastal Karnataka means we plan around real-world constraints from day one — structural columns, local building norms, monsoon drainage, and how a space actually gets used once people move in.",
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
    relatedCategory: "Institution",
  },
  "turn-key-project-execution": {
    slug: "turn-key-project-execution",
    name: "Turnkey Project Execution",
    shortName: "Turnkey Execution",
    metaTitle: "Turnkey Interior Project Execution | Yutori Designs",
    heroImage: "/images/services/turnkey.jpg",
    intro:
      "Design and execution under one roof, managed by a single accountable team — from concept sign-off through vendor coordination, material procurement, and on-site work, to final handover. No gaps between the people who designed the space and the people who built it.",
    whyUs:
      "Turnkey only works if one team owns the whole timeline. We've run that model across offices, hotels, institutions, and homes throughout Mangalore and Udupi, which means fewer handoffs, fewer surprises, and a single point of contact for the client throughout.",
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
    relatedCategory: "Hotel / Resort",
  },

  // The three entries below power the Hero section's "View Details"
  // buttons only -- they are intentionally NOT listed in the navbar's
  // Services dropdown, which stays limited to the three above.
  commercial: {
    slug: "commercial",
    name: "Commercial Interior Design",
    shortName: "Commercial",
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
