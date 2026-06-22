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
};
