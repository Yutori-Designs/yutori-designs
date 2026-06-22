export type ProjectCategory =
  | "Office Space"
  | "Hotel / Resort"
  | "Commercial"
  | "Institution"
  | "Religious"
  | "Villa"
  | "Flat";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  cover: string;
  gallery: string[];
}

// Real project list pulled from yutoridesigns.in/our-projects.
// Cover images point to /images/projects/<id>-cover.jpg — drop the
// downloaded WordPress images in there with these exact filenames,
// or update the paths below to match what you actually save.
export const projects: Project[] = [
  {
    id: "niveus-mangalore",
    title: "Office Design & Interiors for Niveus Solutions",
    location: "Falnir, Mangalore",
    category: "Office Space",
    cover: "/images/projects/niveus-mangalore-cover.jpg",
    gallery: [
      "/images/projects/niveus-mangalore-1.jpg",
      "/images/projects/niveus-mangalore-2.jpg",
      "/images/projects/niveus-mangalore-3.jpg",
    ],
  },
  {
    id: "novigo-mangalore",
    title: "Office Design & Interiors for Novigo IT Development Center",
    location: "Mangalore",
    category: "Office Space",
    cover: "/images/projects/novigo-mangalore-cover.jpg",
    gallery: [
      "/images/projects/novigo-mangalore-1.jpg",
      "/images/projects/novigo-mangalore-2.jpg",
    ],
  },
  {
    id: "niveus-udupi",
    title: "Office Design & Interiors for Niveus Solutions",
    location: "Udupi",
    category: "Office Space",
    cover: "/images/projects/niveus-udupi-cover.jpg",
    gallery: ["/images/projects/niveus-udupi-1.jpg"],
  },
  {
    id: "panaji-office",
    title: "Design of Real Estate Office",
    location: "Goa",
    category: "Office Space",
    cover: "/images/projects/panaji-office-cover.jpg",
    gallery: ["/images/projects/panaji-office-1.jpg"],
  },
  {
    id: "xpheno-manipal",
    title: "Office Design & Interiors for Xpheno",
    location: "Manipal, Udupi",
    category: "Office Space",
    cover: "/images/projects/xpheno-manipal-cover.jpg",
    gallery: ["/images/projects/xpheno-manipal-1.jpg"],
  },
  {
    id: "yutori-office-udupi",
    title: "Office Interior Design for Yutori Designs",
    location: "Udupi",
    category: "Office Space",
    cover: "/images/projects/yutori-office-udupi-cover.jpg",
    gallery: ["/images/projects/yutori-office-udupi-1.jpg"],
  },
  {
    id: "kundapura-hotel",
    title: "Execution of Commercial Complex and Hotel",
    location: "Kundapura",
    category: "Hotel / Resort",
    cover: "/images/projects/kundapura-hotel-cover.jpg",
    gallery: ["/images/projects/kundapura-hotel-1.jpg"],
  },
  {
    id: "thallur-wedding-hall",
    title: "Execution of Wedding Hall",
    location: "Thallur, Kundapura",
    category: "Commercial",
    cover: "/images/projects/thallur-wedding-hall-cover.jpg",
    gallery: ["/images/projects/thallur-wedding-hall-1.jpg"],
  },
  {
    id: "st-joseph-iti-jeppu",
    title: "College Building",
    location: "Jeppu, Mangalore",
    category: "Institution",
    cover: "/images/projects/st-joseph-iti-jeppu-cover.jpg",
    gallery: ["/images/projects/st-joseph-iti-jeppu-1.jpg"],
  },
  {
    id: "philip-neri-school-basroor",
    title: "Design of School",
    location: "Basroor, Kundapura",
    category: "Institution",
    cover: "/images/projects/philip-neri-school-basroor-cover.jpg",
    gallery: ["/images/projects/philip-neri-school-basroor-1.jpg"],
  },
  {
    id: "rosary-church-santhakatte",
    title: "Church",
    location: "Santhakatte, Udupi",
    category: "Religious",
    cover: "/images/projects/rosary-church-santhakatte-cover.jpg",
    gallery: ["/images/projects/rosary-church-santhakatte-1.jpg"],
  },
  {
    id: "thallur-church",
    title: "Execution of Church",
    location: "Thallur, Kundapura",
    category: "Religious",
    cover: "/images/projects/thallur-church-cover.jpg",
    gallery: ["/images/projects/thallur-church-1.jpg"],
  },
  {
    id: "hollywood-town-garden-roof",
    title: "Design of Garden Roof House",
    location: "Hollywood Town, Bangalore",
    category: "Villa",
    cover: "/images/projects/hollywood-town-garden-roof-cover.jpg",
    gallery: ["/images/projects/hollywood-town-garden-roof-1.jpg"],
  },
  {
    id: "high-street-gabion-villa",
    title: "Design of House with Gabion Facade",
    location: "High Street, Bangalore",
    category: "Villa",
    cover: "/images/projects/high-street-gabion-villa-cover.jpg",
    gallery: ["/images/projects/high-street-gabion-villa-1.jpg"],
  },
  {
    id: "nandi-hills-villa",
    title: "Design of House Facing Nandi Hills",
    location: "Bangalore",
    category: "Villa",
    cover: "/images/projects/nandi-hills-villa-cover.jpg",
    gallery: ["/images/projects/nandi-hills-villa-1.jpg"],
  },
  {
    id: "sangolda-villa",
    title: "Design of House Around Trees",
    location: "Sangolda, Goa",
    category: "Villa",
    cover: "/images/projects/sangolda-villa-cover.jpg",
    gallery: ["/images/projects/sangolda-villa-1.jpg"],
  },
  {
    id: "kadri-enclave-flat",
    title: "Flat Interiors",
    location: "Kadri Enclave, Mangalore",
    category: "Flat",
    cover: "/images/projects/kadri-enclave-flat-cover.jpg",
    gallery: ["/images/projects/kadri-enclave-flat-1.jpg"],
  },
  {
    id: "park-avenue-udupi-flat",
    title: "Interiors for Flat at Park Avenue",
    location: "Ajjarkad, Udupi",
    category: "Flat",
    cover: "/images/projects/park-avenue-udupi-flat-cover.jpg",
    gallery: ["/images/projects/park-avenue-udupi-flat-1.jpg"],
  },
  {
    id: "tc-palya-apartment",
    title: "Apartment Complex",
    location: "TC Palya, Bengaluru",
    category: "Flat",
    cover: "/images/projects/tc-palya-apartment-cover.jpg",
    gallery: ["/images/projects/tc-palya-apartment-1.jpg"],
  },
];

export const categories: ProjectCategory[] = [
  "Office Space",
  "Hotel / Resort",
  "Commercial",
  "Institution",
  "Religious",
  "Villa",
  "Flat",
];
