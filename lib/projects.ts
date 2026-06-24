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
    location: "Mangaluru, ",
    category: "Office Space",
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
    id: "novigo-mangalore",
    title: "Office Design & Interiors for Novigo IT Development Center",
    location: "Mangalore",
    category: "Office Space",
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
    id: "niveus-udupi",
    title: "Office Design & Interiors for Niveus Solutions",
    location: "Udupi",
    category: "Office Space",
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
    id: "panaji-office",
    title: "Design of Real Estate Office",
    location: "Goa",
    category: "Office Space",
    cover:  "/images/projects/Real-Estate-Goa/Real-Estate-Goa-1.jpg",
    gallery: [
      "/images/projects/Real-Estate-Goa/Real-Estate-Goa-2.jpg",
      "/images/projects/Real-Estate-Goa/Real-Estate-Goa-3.jpg",
    ],
  },
  {
    id: "xpheno-manipal",
    title: "Office Design & Interiors for Xpheno",
    location: "Manipal, Udupi",
    category: "Office Space",
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
    id: "yutori-office-udupi",
    title: "Office Interior Design for Yutori Designs",
    location: "Udupi",
    category: "Office Space",
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
    id: "kundapura-hotel",
    title: "Execution of Commercial Complex and Hotel",
    location: "Kundapura",
    category: "Hotel / Resort",
    cover: "/images/projects/Execution of Commercial/Execution of Commercial.jpg",
    gallery: ["/images/projects/Execution of Commercial/Execution of Commercial.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-1.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-2.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-3.jpg",
      "/images/projects/Execution of Commercial/Execution of Commercial-4.jpg",
      ],
  },
  {
    id: "thallur-wedding-hall",
    title: "Execution of Wedding Hall",
    location: "Thallur, Kundapura",
    category: "Commercial",
    cover: "/images/projects/Execution of Wedding Hall/wedding-hall.jpg",
    gallery: [
      "/images/projects/Execution of Wedding Hall/wedding-hall-1.jpg",
    "/images/projects/Execution of Wedding Hall/wedding-hall-2.jpg",
  ],
  },
  {
    id: "st-joseph-iti-jeppu",
    title: "College Building",
    location: "Jeppu, Mangalore",
    category: "Institution",
    cover: "/images/projects/st-joseph-iti-jeppu/St-josep-ITI.jpg",
    gallery: [
      "/images/projects/st-joseph-iti-jeppu/St-josep-ITI-1.jpg",
    ],
  },
  {
    id: "philip-neri-school-basroor",
    title: "Design of St. Philip Neri Central School",
    location: "Basroor, Kundapura",
    category: "Institution",
    cover: "/images/projects/St. Philip Neri Central School/St. Philip Neri Central School.jpg",
    gallery: ["/images/projects/St. Philip Neri Central School/St. Philip Neri Central School-1.jpg",],
  },
  {
    id: "rosary-church-santhakatte",
    title: "Mount Rosary Church, Santhekatte",
    location: "Santhakatte, Udupi",
    category: "Religious",
    cover: "/images/projects/Mount Rosary Church, Santhekatte/Mount Rosary Church, Santhekatte.jpg",
    gallery: ["/images/projects/Mount Rosary Church, Santhekatte/Mount Rosary Church, Santhekatte_1.jpg"],
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
