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
  whyChooseLabel1: string;

  metaTitle: string;
  heroImage: string;
  heroImage2: string;
  intro: string;
  whyUs: string;
  whyUs1: string;
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
    whyChooseLabel1:"",
    metaTitle: "Interior Designers in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Interior-designs.png",
    heroImage2: "/images/services/office-Interior-designs.jpg",
    intro:
      "At Yutori Designs, residential spaces form the cornerstone of our creative portfolio. We specialize in crafting warm, inviting homes that reflect personal tastes, lifestyles, and everyday functionality. From modern apartments to expansive villas, our team seamlessly blends aesthetics and comfort to create timeless interiors. Our emphasis on spatial harmony, natural materials, and thoughtful details ensures every home we design is a true sanctuary.",
    whyUs:
      "A well-designed office interior inspires creativity, boosts productivity, and reflects your business identity. Modern interiors balance functionality and aesthetics, creating a positive and motivating atmosphere. From open workstations that encourage collaboration to private meeting rooms for focused discussions, thoughtful design supports different work styles. Incorporating natural light, ergonomic furniture, and greenery improves employee well-being and satisfaction. A refined color palette and contemporary decor add professionalism and sophistication. A smart office interior not only impresses clients and visitors but also fosters a dynamic, growth-oriented work culture. Let your office reflect your brand and inspire your team’s success.",
    whyUs1: "",
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
    whyChooseLabel1:"",
    metaTitle: "Space Planning Services in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Space Planing-new.jpg",
    heroImage2: "/images/services/Space Planing-yutori.jpg",
    intro:
      "At Yutori Designs, layout optimization for residential spaces is rooted in simplicity, functionality, and harmony. We thoughtfully plan every square foot to ensure seamless movement, natural light flow, and purposeful use of space. Whether it’s a compact apartment or a spacious home, our designs prioritize comfort, aesthetics, and practicality. Guided by minimalism and a deep understanding of how people live, we create layouts that reflect your lifestyle while enhancing efficiency and tranquility. From room zoning to furniture placement, every detail is considered. At Yutori, we believe that a well-optimized home layout is the foundation of peaceful, inspired everyday living.",
    whyUs:
      "At Yutori Design, we specialize in optimizing corporate office layouts to enhance productivity, collaboration, and employee well-being. Our design strategy focuses on intelligently planning space to support workflow efficiency while reflecting the brand’s identity. From open-plan zones and meeting areas to private cabins and breakout spaces, every element is placed with purpose. We ensure that circulation, lighting, and acoustics are carefully balanced to create a dynamic yet comfortable work environment. Whether designing for startups or large enterprises, Yutori Design delivers customized solutions that adapt to evolving business needs, promoting both innovation and functionality in the workplace.",
    whyUs1: "",
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
    whyChooseLabel: "Why Choose Yutori Designs for Turnkey Interior Projects in Mangalore?",
    whyChooseLabel1: "Key Benefits of Turnkey Interior Project Management in Mangalore",
    
    metaTitle: "Turnkey Interior Project Execution | Yutori Designs",
    heroImage: "/images/services/Trurn-key.jpg",
    heroImage2: "/images/services/Trurn-key-1.jpg",
    intro:
      "Yutori Designs offers end-to-end project management services to ensure that every interior design project is executed seamlessly from concept to completion. We meticulously manage each phase of the process—from initial planning and design development to procurement, construction, and final installation. Our experienced team coordinates closely with contractors, vendors, and consultants, ensuring clear communication and smooth collaboration at every step. We prioritize staying on schedule and within budget, without compromising quality or design integrity.",
    whyUs:
      "With a strong focus on transparency and efficiency, Yutori Designs handles resource allocation, timeline tracking, quality control, and on-site supervision, so you can stay informed and confident throughout the journey. Our method combines strategic oversight with creative vision, transforming ideas into beautifully realized spaces that meet both functional and aesthetic goals. Whether it’s a corporate office, residence, or hospitality project, we tailor our management approach to suit your unique needs. Every detail—from material selection to final walkthrough—is managed with precision and care. With Yutori Designs, you don’t just get stunning interiors—you get a reliable partner dedicated to delivering excellence at every stage of your turnkey interior project.",
    whyUs1: 
    "Yutori Designs simplifies complex projects by providing a single point of contact, reducing coordination efforts, and accelerating project timelines. This wholesome approach ensures superior quality control and cost predictability, eliminating unforeseen expenses. Enjoy a hassle-free interior designing experience as we manage everything, delivering a fully functional and aesthetically pleasing space tailored to your needs.",
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
    name: "Commercial & Office Interior Design",
    shortName: "Commercial",
    nameSubtitle: "Commercial & Office Interior Designers in Mangalore",
    headlineWord: "Commercial Spaces",
    whatWeDoLabel: "Yutori Designs: Transforming Commercial Spaces in Mangalore",
    whyChooseLabel: "Why Choose Us for Your Commercial Interior Project in Mangalore?",
    whyChooseLabel1:"",
    metaTitle: "Commercial Interior Design in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Commercial interior.jpg",
    heroImage2: "/images/services/Commercial interior-1.jpg",
    intro:
      "Our commercial interior designers specialize in designing spaces that are both visually striking and strategically designed to enhance functionality and brand identity. From upscale offices and retail showrooms to hospitality venues, our commercial interiors reflect a seamless blend of sophistication, efficiency, and modern aesthetics. Each project is tailored to support our clients’ business goals while offering an inviting and professional environment. With a focus on smart spatial planning and premium finishes, we ensure every detail speaks to quality and innovation. Whether full execution or design-only services, Yutori transforms commercial spaces into experiences that inspire, engage, and elevate your brand presence.",
    whyUs:
      "Partnering with Yutori Designs means choosing interior designers dedicated to transforming your commercial space in Mangalore into a strategic asset. We are experts in aligning design with business goals, coupled with our deep understanding of local market needs. We prioritize your vision, delivering innovative and sustainable solutions that enhance productivity & well-being, and brand perception. Discover the Yutori difference for your next office or retail interior project.",
     whyUs1: "",
      steps: [
      {
        title: "Initial Consultation: Understand client needs and vision.",
        points: [
          "Architect to have a detailed discussion with the customer and understand the expectations",
          "Understand the customer preferences – e.g. type of designs, material, colors etc",
          "Get initial details from the customer – e.g. site location, type, area, scope, budget etc",
        ],
      },
      {
        title: "Design Development: Create design concepts and plans.",
        points: [
          "First create a high level design",
          "Get the customer sign off on the high level design",
          "Engineering team to estimate the project cost based on the design",
          "Sales team to communicate the project cost to the customer based on the pricing model and project cost",
          "Once the customer signs off on the estimate, team to start with the execution",
          "Parallely, the architects to continue working with the customer on the detailed design",
        ],
      },
      {
        title: "Implementation: Manage the project and bring the design to life.",
        points: [
          "Prepare the project plan based on the design and estimates",
          "Prepare the site for start of work",
          "Finalize the vendors needed for the work",
          "FInalize the material required and place orders",
          "Begin the execution as per the project plan",
          "Implementation could include both Civil and Interiors work",
          "Implementation to include various aspects like tiling, painting, electrical & plumbing work, air conditioning, carpentry & furniture, decor items etc",
          "Project management of the entire project also to be part of Implementation",
          "Provide regular updates to the customer on the progress of the project",
        ],
      },
      {
        title: "Final Review: Ensure client satisfaction with the completed project.",
        points: [
          "Once the implementation is completed, the design team to review the work in detail and provide feedback",
          "Once the design team signs off on the work quality, the customer to be informed",
        ],
      },
    ],
    relatedCategory: "Office Space",
  },
  residential: {
    slug: "residential",
    name: "Home Interior Designers in Mangalore",
    shortName: "Residential",
    nameSubtitle: "Home Interior Designers in Mangalore",
    headlineWord: "Residential Spaces",
    whatWeDoLabel: "Bespoke Home Interiors",
    whyChooseLabel: "Best Home Interior Designers in Mangalore: Creating Spaces That Feel Like Home",
    whyChooseLabel1:"",
    metaTitle: "Residential Interior Design in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Home Interior Designers.jpg",
    heroImage2: "/images/services/Home Interior Designers-1.jpg",
    intro: `At Yutori, we believe a luxury home is more than just a space—it’s a sanctuary where every element reflects refinement, comfort, and individuality. Specializing in high-end residential interior design in Mangalore, we transform houses into timeless works of art, tailored to the unique tastes and lifestyles of our discerning clients.

            Our home interior designers blend elegance with functionality, ensuring that each space not only looks exquisite but also feels effortlessly livable. From opulent living rooms and serene bedrooms to state-of-the-art kitchens and indulgent spa-inspired bathrooms, every home interior is done with meticulous attention to detail.`,

    whyUs:
      "We curate the finest materials, textures, and finishes to evoke a sense of quiet luxury, while incorporating smart spatial planning to enhance flow and spaciousness. Sustainability is seamlessly woven into our process, ensuring that beauty and responsibility coexist in harmony.Yutori offers end-to-end design and execution services for luxury homes in Mangalore & Udupi. For design-only projects, we collaborate with clients across any location, bringing the Yutori touch to exclusive residences far and wide.With Yotori, your home becomes a reflection of art, elegance, and mindful living—crafted with care, elevated by design.",
    whyUs1: "",
      steps: [
      {
        title: "Initial Consultation: Understand client needs and vision.",
        points: [
          "Architect to have a detailed discussion with the customer and understand the expectations",
          "Understand the customer preferences – e.g. type of designs, material, colors etc",
          "Get initial details from the customer – e.g. site location, type, area, scope, budget etc",
        ],
      },
      {
        title: "Design Development: Create design concepts and plans.",
        points: [
          "First create a high level design",
          "Get the customer sign off on the high level design",
          "Engineering team to estimate the project cost based on the design",
          "Sales team to communicate the project cost to the customer based on the pricing model and project cost",
          "Once the customer signs off on the estimate, team to start with the execution",
          "Parallely, the architects to continue working with the customer on the detailed design",
        ],
      },
      {
        title: "Implementation: Manage the project and bring the design to life.",
        points: [
          "Prepare the project plan based on the design and estimates",
          "Prepare the site for start of work",
          "Finalize the vendors needed for the work",
          "FInalize the material required and place orders",
          "Begin the execution as per the project plan",
          "Implementation could include both Civil and Interiors work",
          "Implementation to include various aspects like tiling, painting, electrical & plumbing work, air conditioning, carpentry & furniture, decor items etc",
          "Project management of the entire project also to be part of Implementation",
          "Provide regular updates to the customer on the progress of the project",
        ],
      },
      {
        title: "Final Review: Ensure client satisfaction with the completed project.",
        points: [
          "Once the implementation is completed, the design team to review the work in detail and provide feedback",
          "Once the design team signs off on the work quality, the customer to be informed to review the work",
          "Once customer is satisfied with the work completion, the project to be considered as completed",
          "Organized to deliver the most specialized service possible and enriched.",

        ],
      },
    ],
    relatedCategory: "Villa",
  },
  "office-space": {
    slug: "office-space",
    name: "Commercial & Office Space Design",
    shortName: "Office Space",
    nameSubtitle: "Commercial & Office Interior Designers in Mangalore",
    headlineWord: "Commercial Spaces",
    whatWeDoLabel: "Yutori Designs: Transforming Commercial Spaces in Mangalore",
    whyChooseLabel: "Why Choose Us for Your Commercial Interior Project in Mangalore?",
    whyChooseLabel1:"",
    metaTitle: "Commercial Interior Design in Mangalore & Udupi | Yutori Designs",
    heroImage: "/images/services/Commercial interior-1.jpg",
    heroImage2: "/images/services/Commercial interior.jpg",
    intro:
      "Our commercial interior designers specialize in designing spaces that are both visually striking and strategically designed to enhance functionality and brand identity. From upscale offices and retail showrooms to hospitality venues, our commercial interiors reflect a seamless blend of sophistication, efficiency, and modern aesthetics. Each project is tailored to support our clients’ business goals while offering an inviting and professional environment. With a focus on smart spatial planning and premium finishes, we ensure every detail speaks to quality and innovation. Whether full execution or design-only services, Yutori transforms commercial spaces into experiences that inspire, engage, and elevate your brand presence.",
    whyUs:
      "Partnering with Yutori Designs means choosing interior designers dedicated to transforming your commercial space in Mangalore into a strategic asset. We are experts in aligning design with business goals, coupled with our deep understanding of local market needs. We prioritize your vision, delivering innovative and sustainable solutions that enhance productivity & well-being, and brand perception. Discover the Yutori difference for your next office or retail interior project.",
     whyUs1: "",
      steps: [
      {
        title: "Initial Consultation: Understand client needs and vision.",
        points: [
          "Architect to have a detailed discussion with the customer and understand the expectations",
          "Understand the customer preferences – e.g. type of designs, material, colors etc",
          "Get initial details from the customer – e.g. site location, type, area, scope, budget etc",
        ],
      },
      {
        title: "Design Development: Create design concepts and plans.",
        points: [
          "First create a high level design",
          "Get the customer sign off on the high level design",
          "Engineering team to estimate the project cost based on the design",
          "Sales team to communicate the project cost to the customer based on the pricing model and project cost",
          "Once the customer signs off on the estimate, team to start with the execution",
          "Parallely, the architects to continue working with the customer on the detailed design",
        ],
      },
      {
        title: "Implementation: Manage the project and bring the design to life.",
        points: [
          "Prepare the project plan based on the design and estimates",
          "Prepare the site for start of work",
          "Finalize the vendors needed for the work",
          "FInalize the material required and place orders",
          "Begin the execution as per the project plan",
          "Implementation could include both Civil and Interiors work",
          "Implementation to include various aspects like tiling, painting, electrical & plumbing work, air conditioning, carpentry & furniture, decor items etc",
          "Project management of the entire project also to be part of Implementation",
          "Provide regular updates to the customer on the progress of the project",
        ],
      },
      {
        title: "Final Review: Ensure client satisfaction with the completed project.",
        points: [
          "Once the implementation is completed, the design team to review the work in detail and provide feedback",
          "Once the design team signs off on the work quality, the customer to be informed",
        ],
      },
    ],
    relatedCategory: "Office Space",
  },
};
