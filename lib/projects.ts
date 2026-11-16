export type ProjectCategory =
  | "Workspaces"
  | "Commercial spaces"
  | "Commercial spaces"
  | "Institutions"
  | "Institutions"
  | "Residences"
  | "Residences";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  cover: string;
  gallery: string[];
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const projects: Project[] = [


  {
    id: "carpe-diem-coastal-villa-mattu",
    title: "Carpe Diem Luxury Coastal Villa, Mattu, Udupi",
    description:
      "Yutori Designs' architecture and civil team designed and executed Carpe Diem, a private luxury coastal villa in Mattu, Udupi, set between the Arabian Sea and serene backwaters. Built for amã Stays & Trails, the villa has three bedrooms with private decks, a rooftop pool and large openings that let in natural light and ocean breeze, so the sea and backwaters become part of every stay.",
    seoTitle: "Interior Designers in Udupi | Carpe Diem Coastal Villa",
    seoDescription:
      "Coastal villas that ignore the sea and backwaters waste their best views. Explore Yutori Designs' luxury villa design and construction in Mattu, Udupi.",
    location: "Mattu, Udupi",
    category: "Residences",
    cover: "/images/projects/Carpediem-mattu/carpediem-mattu.jpg",
    gallery: [
      "/images/projects/Carpediem-mattu/carpediem-mattu-1.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-2.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-4.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-3.jpg",
      
      "/images/projects/Carpediem-mattu/carpediem-mattu-5.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-6.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-7.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-8.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-9.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-10.jpg",
      "/images/projects/Carpediem-mattu/carpediem-mattu-11.jpg"
    ],
  },

  {
    id: "hotel-Jewel-Park-hemmady",
    title: "Project Execution-Hotel Jewel Park, Hemmady",
    description:
      "Yutori Designs executed Hotel Jewel Park in Hemmady, Udupi, managing the project from site coordination and civil and interior works to finishing and handover. The result is a functional, welcoming commercial hospitality space built for daily guest use.",
    seoTitle: "Interior Designers in Udupi | Hotel Jewel Park by Yutori ",
    seoDescription:
      "Explore Hotel Jewel Park in Hemmady, Udupi, a commercial hotel project executed end to end by Yutori Designs, from site planning to final handover.",
    location: "Hemmady, Udupi",
    category: "Commercial spaces",
    cover: "/images/projects/Jewel-Park/jewel-park-1.jpg",
    gallery: [
      "/images/projects/Jewel-Park/jewel-park-1.jpg",
      "/images/projects/Jewel-Park/jewel-park-2.jpg",
      "/images/projects/Jewel-Park/jewel-park-3.jpg",
      "/images/projects/Jewel-Park/jewel-park-4.jpg",
      "/images/projects/Jewel-Park/jewel-park-5.jpg",
    ],
  },


  {
    id: "xpheno-manipal-office",
    title: "Office Design & Interiors for Xpheno",
    description:
      "Yutori Designs designed and delivered the Xpheno office in Manipal, Udupi, from space planning and workstation layout to interior finishing and handover. The result is a clean, functional workspace that supports focused work, easy collaboration and a professional first impression for clients and visitors.",
    seoTitle: "Interior Designers in Udupi | Xpheno Office by Yutori",
    seoDescription:
      "Cramped, uninspiring offices drain your team's focus and energy every day. Discover Yutori Designs' office interior design for Xpheno in Manipal, Udupi.",
    location: "Manipal, Udupi",
    category: "Workspaces",
    cover: "/images/projects/Xpheno-Udupi/xpheno.jpg",
    gallery: [
      "/images/projects/Xpheno-Udupi/xpheno-2.jpg",
      "/images/projects/Xpheno-Udupi/xpheno-3.jpg",
      "/images/projects/Xpheno-Udupi/xpheno-4.jpg",
      "/images/projects/Xpheno-Udupi/xpheno-5.jpg",
      "/images/projects/Xpheno-Udupi/xpheno-6.jpg",
      "/images/projects/Xpheno-Udupi/xpheno-7.jpg",
    ],
  },
  {
    id: "yutori-designs-udupi-office",
    title: "Office Interior Design for Yutori Designs",
    description:
      "Our own studio in Udupi, designed and executed by the Yutori Designs team. We planned the layout, workstations, lighting and finishes ourselves, so the space works as a daily workplace and as a live example of the quality we deliver to clients.",
    seoTitle: "Interior Designers in Udupi | Yutori Designs Studio Office",
    seoDescription:
      "Dull, cluttered offices drain your team's energy and creativity. Step inside the office interior design Yutori Designs created for its own Udupi team.",
    location: "Udupi",
    category: "Workspaces",
    cover: "/images/projects/Yutori-Designs/Yutori-Designs-1.jpg",
    gallery: [
      "/images/projects/Yutori-Designs/Yutori-Designs-2.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-3.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-4.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-5.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-6.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-7.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-8.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-9.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-10.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-11.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-12.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-13.jpg",
      "/images/projects/Yutori-Designs/Yutori-Designs-14.jpg",
    ],
  },

  {
    id: "vruddhi-properties-office-udupi",
    title: "Office Interior Design for Vruddhi Properties",
    description:
      "Yutori Designs designed and executed the Vruddhi Properties office in Udupi, a workspace built for a real estate and property dealing business. The layout includes a welcoming client reception, comfortable discussion areas and organised work zones, finished with a clean, professional look that builds trust with every visitor.",
    seoTitle: "Interior Designers in Udupi | Vruddhi Office by Yutori",
    seoDescription:
      "A dull, cluttered office weakens client trust before the first meeting. Discover Yutori Designs' office interior design for Vruddhi Properties in Udupi.",
    location: "Udupi",
    category: "Workspaces",
    cover: "/images/projects/Vruddhi Properties/Vruddhi Properties.jpg",
    gallery: [
      "/images/projects/Vruddhi Properties/Vruddhi Properties-1.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-2.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-3.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-4.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-5.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-6.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-7.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-8.jpg",
      "/images/projects/Vruddhi Properties/Vruddhi Properties-9.jpg",


    ],
  },

  {
    id: "timeless-collections-commercial-spaces-udupi",
    title: "Showroom Design – Timeless Collections, Udupi",
    description:
      "Yutori Designs designed and executed the Timeless Collections showroom in Udupi, a space built to display heritage and antique pieces. Warm lighting, display layouts that give each item room to stand out, and a rich, traditional finish let visitors browse comfortably and appreciate the craftsmanship.",
    seoTitle: "Interior Designers Udupi | Timeless Collections Showroom ",
    seoDescription:
      "Heritage pieces lose their charm in a crowded, poorly lit showroom. Explore Yutori Designs' showroom interior design for Timeless Collections, Udupi.",
    location: "Udupi",
    category: "Commercial spaces",
    cover: "/images/projects/Timeless Collections/Timeless-Collections.jpg",
    gallery: [
      "/images/projects/Timeless Collections/Timeless-Collections-1.jpg",
      "/images/projects/Timeless Collections/Timeless-Collections-2.jpg",
      "/images/projects/Timeless Collections/Timeless-Collections-4.jpg",
      "/images/projects/Timeless Collections/Timeless-Collections-5.jpg",
      "/images/projects/Timeless Collections/Timeless-Collections-6.jpg",
      "/images/projects/Timeless Collections/Timeless-Collections-7.jpg",
      "/images/projects/Timeless Collections/Timeless-Collections-8.jpg",


    ],
  },

  {
    id: "niveus-part-of-NTT-Data-mangalore",
    title: "Office Design & Interiors for Niveus Solutions (Part of NTT DATA)",
    description:
      "Yutori Designs designed and executed the Niveus Solutions office in Mangalore, a workspace for a global technology company (part of NTT DATA) rooted in Tulunad culture. Traditional Tulu motifs, warm wood textures and heritage-inspired details sit alongside modern workstations and collaboration areas, giving the team a contemporary workplace with a strong sense of place.",
    seoTitle: "Interior Designers in Mangalore | Niveus Solutions (NTT DATA)",
    seoDescription:
      "Generic offices feel cut off from the culture around them. Explore Yutori Designs' Tulunad-themed office interior design for Niveus Solutions, Mangalore.",
    location: "Mangalore",
    category: "Workspaces",

    cover: "/images/projects/Niveus-Mangalore/niveus-mangalore-1.jpg",
    gallery: [
      "/images/projects/Niveus-Mangalore/niveus-mangalore-2.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-3.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-4.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-5.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-6.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-7.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-8.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-9.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-10.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-11.jpg",
      "/images/projects/Niveus-Mangalore/niveus-mangalore-12.jpg",


    ],
  },
  {
    id: "novigo-solutions-mangalore-office",
    title: "Office Design & Interiors for Novigo IT Development Center",
    description:
      "Yutori Designs designed and executed the Novigo Solutions IT Development Center in Mangalore, a workspace for a global IT services and automation company. The layout combines focused workstations, collaboration zones and meeting areas, finished with a clean, modern look that supports a software team's daily work.",
    seoTitle: "Interior Designers in Mangalore | Novigo Solutions",
    seoDescription:
      "Tech teams lose focus in dull, uninspiring offices. Explore Yutori Designs' office interior design for Novigo's IT Development Center in Mangalore.",
    location: "Mangalore",
    category: "Workspaces",
    cover: "/images/projects/Novigo-Mangalore/novigo-1.jpg",
    gallery: [
      "/images/projects/Novigo-Mangalore/novigo-2.jpg",
      "/images/projects/Novigo-Mangalore/novigo-3.jpg",
      "/images/projects/Novigo-Mangalore/novigo-4.jpg",
      "/images/projects/Novigo-Mangalore/novigo-5.jpg",
      "/images/projects/Novigo-Mangalore/novigo-6.jpg",
      "/images/projects/Novigo-Mangalore/novigo-7.jpg",
      "/images/projects/Novigo-Mangalore/novigo-8.jpg",
      "/images/projects/Novigo-Mangalore/novigo-9.jpg",
      "/images/projects/Novigo-Mangalore/novigo-10.jpg",
      "/images/projects/Novigo-Mangalore/novigo-11.jpg",

    ],
  },



  {
    id: "park-avenue-udupi-Residences",
    title: "Interiors for Residences at Park Avenue",
    description: "Yutori Designs designed and executed the interiors for residences at Park Avenue in Ajjarkad, Udupi. From space planning and modular storage to lighting, finishes and handover, each home is planned to feel comfortable, practical and easy to live in every day.",
    seoTitle: "Interior Designers inUdupi | Park Avenue Residences, Ajjarkad",
    seoDescription: "Cramped, poorly planned homes make everyday living stressful. Explore Yutori Designs' residential interior design for Park Avenue, Ajjarkad, Udupi.",
    location: "Ajjarkad, Udupi",
    category: "Residences",
    cover: "/images/projects/Park evenue/Park evenue.jpg",
    gallery: ["/images/projects/Park evenue/Park evenue-1.jpg",
      "/images/projects/Park evenue/Park evenue-2.jpg",
      "/images/projects/Park evenue/Park evenue-3.jpg",
      "/images/projects/Park evenue/Park evenue-4.jpg",
      "/images/projects/Park evenue/Park evenue-5.jpg",
      "/images/projects/Park evenue/Park evenue-6.jpg",
      "/images/projects/Park evenue/Park evenue-7.jpg",
      "/images/projects/Park evenue/Park evenue-8.jpg",
      "/images/projects/Park evenue/Park evenue-9.jpg",
      "/images/projects/Park evenue/Park evenue-10.jpg",
      "/images/projects/Park evenue/Park evenue-11.jpg",
      "/images/projects/Park evenue/Park evenue-12.jpg",
      "/images/projects/Park evenue/Park evenue-13.jpg",
      "/images/projects/Park evenue/Park evenue-14.jpg",

    ],
  },

  {
    id: "niveus-part-of-NTT-Data-udupi-office",
    title: "Office Design & Interiors for Niveus Solutions (Part of NTT DATA)",
    description:
      "Yutori Designs designed and executed the Niveus Solutions office in Udupi, a workspace for a technology company that is part of NTT DATA. The layout brings together comfortable workstations, collaboration areas and meeting spaces, finished with a clean, modern look that gives the team a professional place to work every day.",
    seoTitle: "Interior Designers in Udupi | Niveus Solutions (NTT DATA)",
    seoDescription:
      "Offices without identity leave teams feeling uninspired. Discover Yutori Designs' office interior design for Niveus Solutions (Part of NTT DATA), Udupi.",
    location: "Udupi",
    category: "Workspaces",
    cover: "/images/projects/Niveus-Udupi/niveus-udupi-1.jpg",
    gallery: [
      "/images/projects/Niveus-Udupi/niveus-udupi-2.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-3.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-4.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-5.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-6.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-7.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-8.jpg",
      "/images/projects/Niveus-Udupi/niveus-udupi-9.jpg",

    ],
  },

  {
    id: "Goan Paradise-office-Panaji",
    title: "Goan Paradise Real Estate Office Design, Panaji, Goa",
    description:
      "Yutori Designs designed and executed the Goan Paradise real estate office in Panaji, Goa, planned around how property clients are received and advised. The layout brings together a welcoming reception, comfortable client discussion areas and organised work zones, finished with a clean, professional look that builds confidence from the first visit.",
    seoTitle: "Interior Designers in Goa | Goan Paradise Real Estate Office",
    seoDescription:
      "Ordinary offices make property buyers doubt your credibility. Explore Yutori Designs' real estate office interior design for Goan Paradise, Panaji.",
    location: "Panaji, Goa",
    category: "Workspaces",
    cover: "/images/projects/Real-Estate-Goa/Real-Estate-Goa-1.jpg",
    gallery: [
      "/images/projects/Real-Estate-Goa/Real-Estate-Goa-2.jpg",
      "/images/projects/Real-Estate-Goa/Real-Estate-Goa-3.jpg",
    ],
  },


  {
    id: "hotel-shivaprasad-grand-kundapura",
    title: "Execution of Commercial spaces Complex and Hotel",
    description:
      "Yutori Designs executed Hotel Shivaprasad Grand and its commercial complex in Kundapura, managing the work from site coordination and civil works to interior finishing and handover. The result is a hotel and commercial space planned for guests, tenants and daily footfall.",
    seoTitle: "Interior Designers in Udupi | Hotel Shivaprasad Grand",
    seoDescription:
      "Delays and poor finishing turn a hotel complex into a costly headache. Explore Yutori Designs' hotel interior design for Shivaprasad Grand, Kundapura.",
    location: "Kundapura",
    category: "Commercial spaces",
    cover: "/images/projects/Execution of Commercial/Execution of Commercial.jpg",
    gallery: ["/images/projects/Execution of Commercial/Execution of Commercial-1.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-2.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-3.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-4.jpg",

    ],
  },
  {
    id: "shesha-krishna-convention-hall-thallur",
    title: "Shesha Krishna Convention Hall, Thallur, Kundapura",
    description:
      "Yutori Designs executed the Shesha Krishna Convention Hall in Thallur, Kundapura, from site coordination and civil works to interior finishing and handover. The result is a spacious, well-planned hall built for weddings, receptions and community events.",
    seoTitle: "Interior Designers in Udupi| Shesha Krishna Convention Hall",
    seoDescription:
      "Poorly planned event halls disappoint guests. Explore Yutori Designs' convention hall interior design for Shesha Krishna Convention Hall, Kundapura.",
    location: "Thallur, Kundapura",
    category: "Commercial spaces",
    cover: "/images/projects/Execution of Wedding Hall/wedding-hall.jpg",
    gallery: [
      "/images/projects/Execution of Wedding Hall/wedding-hall-1.jpg",
      "/images/projects/Execution of Wedding Hall/wedding-hall-2.jpg",
    ],
  },
  {
    id: "st-joseph-iti-jeppu",
    title: "St Joseph ITI College Building, Jeppu, Mangalore",
    description:
      "Yutori Designs designed and executed the college building for St Joseph ITI in Jeppu, Mangalore, from space planning and civil works to interior finishing and handover. The result is a functional, durable campus with bright classrooms and practical workshop spaces built for students and staff.",
    seoTitle: "Interior Designers in Mangalore | St Joseph ITI College, Jeppu",
    seoDescription:
      "Cramped, uninspiring classrooms make learning harder for students. Explore Yutori Designs' institutional interior design for St Joseph ITI, Mangalore.",
    location: "Jeppu, Mangalore",
    category: "Institutions",
    cover: "/images/projects/st-joseph-iti-jeppu/St-josep-ITI.jpg",
    gallery: [
      "/images/projects/st-joseph-iti-jeppu/St-josep-ITI-1.jpg",
    ],
  },
  {
    id: "philip-neri-school-basroor",
    title: "St. Philip Neri Central School, Basroor, Kundapura",
    description:
      "Yutori Designs designed St. Philip Neri Central School in Basroor, Kundapura, from space planning and classroom layouts to circulation, lighting and finishing details. The result is a bright, safe and practical campus built for students, teachers and daily school life.",
    seoTitle: "Interior Designers in Udupi | St. Philip Neri Central School",
    seoDescription:
      "Dull, crowded classrooms make it harder for young students to learn. Explore Yutori Designs' school interior design for St. Philip Neri School, Basroor.",
    location: "Basroor, Kundapura",
    category: "Institutions",
    cover: "/images/projects/St. Philip Neri Central School/St. Philip Neri Central School.jpg",
    gallery: ["/images/projects/St. Philip Neri Central School/St. Philip Neri Central School-1.jpg",],
  },

  {
    id: "rosary-church-santhakatte",
    title: "Mount Rosary Church, Santhekatte, Udupi",
    description:
      "Yutori Designs designed and executed Mount Rosary Church in Santhekatte, Udupi, from space planning and construction to altar layout, lighting and finishing details. The result is a calm, sacred and welcoming church built for worship and community gatherings.",
    seoTitle: "Interior Designers in Udupi | Mount Rosary Church, Santhekatte",
    seoDescription:
      "Poorly planned churches feel cold and cramped for worshippers. Explore Yutori Designs' church design and construction for Mount Rosary, Santhekatte.",
    location: "Santhekatte, Udupi",
    category: "Institutions",
    cover: "/images/projects/Mount-Rosary-Church-Santhekatte/mount-rosary-church-1.jpg",
    gallery: ["/images/projects/Mount-Rosary-Church-Santhekatte/mount-rosary-church-1.jpg"],
  },
  {
    id: "st-francis-assisi-church-tallur",
    title: "Saint Francis Assisi Church, Thallur, Kundapura",
    description:
      "Yutori Designs designed and executed Saint Francis Assisi Church in Thallur, Kundapura, from space planning and construction to seating layout, altar area, lighting and finishing details. The result is a peaceful, welcoming church built for worship, festivals and parish gatherings.",
    seoTitle: "Interior Designers in Udupi | Saint Francis Assisi Church",
    seoDescription:
      "Dark, crowded churches take away from the peace of worship. Explore Yutori Designs' church design and construction for St Francis Assisi, Thallur.",
    location: "Thallur, Kundapura",
    category: "Institutions",
    cover: "/images/projects/Saint-Francis-Assisi/Tallur.jpg",
    gallery: ["/images/projects/Saint-Francis-Assisi/Tallur-1.jpg"],
  },
  {
    id: "hollywood-town-garden-roof",
    title: "Garden Roof House, Hollywood Town, Bangalore",
    description:
      "Yutori Designs designed the Garden Roof House in Hollywood Town, Bangalore, from space planning and living areas to a landscaped roof garden, lighting and finishing details. The result is a bright, comfortable home that brings greenery and open sky into everyday city living.",
    seoTitle: "Interior Designers in Bangalore | Hollywood Town Garden Roof",
    seoDescription:
      "Concrete homes with no green space leave city living feeling closed in. Explore Yutori Designs' home interior design for the Garden Roof House, Bangalore.",
    location: "Hollywood Town, Bangalore",
    category: "Residences",
    cover: "/images/projects/Garden Roof House/Garden Roof House.jpg",
    gallery: ["/images/projects/Garden Roof House/Garden Roof House-1.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-2.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-3.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-4.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-5.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-6.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-7.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-8.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-9.jpg",
      "/images/projects/Garden Roof House/Garden Roof House-10.jpg",

    ],
  },

  {
    id: "high-street-gabion-Residences",
    title: "House with Gabion Facade, High Street, Bangalore",
    description:
      "Yutori Designs designed this house in High Street, Bangalore, around a gabion facade of stone-filled wire cages that gives the exterior a natural, textured look. Inside, the planning brings together bright living areas, practical layouts and warm finishing details for comfortable everyday living.",
    seoTitle: "Interior Designers in Bangalore | Gabion Facade House Design",
    seoDescription:
      "Plain, boxy house exteriors look lifeless and blend into the street. Explore Yutori Designs' home interior design for the Gabion Facade House, Bangalore.",
    location: "High Street, Bangalore",
    category: "Residences",
    cover: "/images/projects/House with gabion facade/House with gabion facade.jpg",
    gallery: ["/images/projects/House with gabion facade/House with gabion facade-1.jpg",
      "/images/projects/House with gabion facade/House with gabion facade-2.jpg",
      "/images/projects/House with gabion facade/House with gabion facade-3.jpg",
      "/images/projects/House with gabion facade/House with gabion facade-4.jpg",
      "/images/projects/House with gabion facade/House with gabion facade-5.jpg",
      "/images/projects/House with gabion facade/House with gabion facade-6.jpg",
    ],
  },

  {
    id: "nandi-hills-Residences",
    title: "House Facing Nandi Hills, Bangalore",
    description:
      "Yutori Designs designed this house facing Nandi Hills near Bangalore, from space planning and living areas to lighting and finishing details. The layout is planned to open up to the hill views, giving the family a bright, calm and comfortable home with a strong connection to the landscape.",
    seoTitle: "Interior Designers in Bangalore | Nandi Hills View House",
    seoDescription:
      "Homes with a great view often waste it behind poorly placed windows. Explore Yutori Designs' home interior design for the Nandi Hills house, Bangalore.",
    location: "Bangalore",
    category: "Residences",
    cover: "/images/projects/House facing Nandi Hills/House facing Nandi Hills-.jpg",
    gallery: ["/images/projects/House facing Nandi Hills/House facing Nandi Hills-1.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-2.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-3.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-4.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-5.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-6.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-7.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-8.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-9.jpg",
      "/images/projects/House facing Nandi Hills/House facing Nandi Hills-10.jpg",
    ],
  },
  {
    id: "sangolda-Residences",
    title: "House Around Trees, Sangolda, Goa",
    description:
      "Yutori Designs designed this house in Sangolda, Goa, around the existing trees on the plot, from space planning and living areas to lighting and finishing details. The layout keeps the trees as part of the home, giving the family natural shade, green views and a calm, comfortable place to live.",
    seoTitle: "Interior Designers in Goa | House Around Trees, Sangolda",
    seoDescription:
      "Houses that ignore the trees around them lose shade and natural character. Explore Yutori Designs' home interior design for the Sangolda house in Goa.",
    location: "Sangolda, Goa",
    category: "Residences",
    cover: "/images/projects/Design of House Around Trees/Design of House Around Trees.jpg",
    gallery: ["/images/projects/Design of House Around Trees/Design of House Around Trees_1.jpg",],
  },

  {
    id: "kadri-enclave-Residences",
    title: "Residence Interiors at Kadri Enclave, Mangalore",
    description:
      "Yutori Designs designed the interiors for residences at Kadri Enclave in Mangalore, from space planning and storage to lighting, finishes and handover. Each home is planned to feel bright, comfortable and practical for everyday family living.",
    seoTitle: "Interior Designers in Mangalore | Kadri Enclave Residences",
    seoDescription:
      "Homes with awkward layouts and little storage feel crowded every day. Explore Yutori Designs' residential interior design for Kadri Enclave, Mangalore.",
    location: "Kadri Enclave, Mangalore",
    category: "Residences",
    cover: "/images/projects/kadri-enclave/kadri-enclave.jpg",
    gallery: ["/images/projects/kadri-enclave/kadri-enclave-1.jpg",
      "/images/projects/kadri-enclave/kadri-enclave-2.jpg",
      "/images/projects/kadri-enclave/kadri-enclave-3.jpg",
      "/images/projects/kadri-enclave/kadri-enclave-4.jpg",
      "/images/projects/kadri-enclave/kadri-enclave-5.jpg",
      "/images/projects/kadri-enclave/kadri-enclave-6.jpg",
    ],
  },

  {
    id: "tc-palya-apartment",
    title: "Apartment Complex, TC Palya, Bangalore",
    description:
      "Yutori Designs' architecture and civil team designed and built this apartment complex in TC Palya, Bangalore, from architectural planning and structural design to construction and handover. The result is a well-planned residential building with practical layouts, good light and ventilation, and durable construction for everyday living.",
    seoTitle: "Interior Designers in Bangalore | TC Palya Apartment Complex",
    seoDescription:
      "Poorly planned apartment blocks waste space and cause costly rework. Explore Yutori Designs' apartment design and construction in TC Palya, Bangalore.",
    location: "TC Palya, Bangalore",
    category: "Residences",
    cover: "/images/projects/tc-palya-apartment/tc-palya-apartment.jpg",
    gallery: ["/images/projects/tc-palya-apartment/tc-palya-apartment-1.jpg",
      "/images/projects/tc-palya-apartment/tc-palya-apartment-2.jpg",
      "/images/projects/tc-palya-apartment/tc-palya-apartment-3.jpg",
    ],
  },

];

export const categories: ProjectCategory[] = [
  "Workspaces",
  "Commercial spaces",
  "Institutions",
  "Residences",


];
