export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  cover: string;
  gallery: string[];
}

// First entry is the studio inauguration -- add future events
// (anniversaries, open houses, project handovers) above or below it.
export const events: EventItem[] = [
  {
    id: "studio-inauguration",
    title: "Yutori Designs Studio Inauguration",
    date: "2026",
    location: "Udupi, Karnataka",
    description:
      "Yutori Designs proudly commemorated the inauguration of its creative studio, marking an important milestone in our journey of excellence in interior design. The ceremony reflected our commitment to innovation, craftsmanship, and creating thoughtfully designed spaces. This studio stands as a symbol of our vision, dedication, and continued pursuit of delivering refined and inspiring interiors for our clients.",
    cover: "/images/events/Yutori Designs Studio-9.png",
    gallery: [
      "/images/events/Yutori Designs Studio-2.png",
      "/images/events/Yutori Designs Studio-3.png",
      "/images/events/Yutori Designs Studio-4.png",
      "/images/events/Yutori Designs Studio-5.png",
      "/images/events/Yutori Designs Studio-6.png",
      "/images/events/Yutori Designs Studio-7.png",
      "/images/events/Yutori Designs Studio-8.png",
    ],
  },
  // {
  //   id: "studio-inauguration1",
  //   title: "Yutori Designs Studio Inauguration",
  //   date: "2025",
  //   location: "Udupi, Karnataka",
  //   description:
  //     "We opened the doors to our own studio space in Udupi — a milestone for the team after years of designing other people's spaces. The inauguration brought together clients, vendors, and well-wishers who have been part of the journey so far.",
  //   cover: "/images/events/studio-inauguration-cover.jpg",
  //   gallery: [
  //     "/images/events/studio-inauguration-1.jpg",
  //     "/images/events/studio-inauguration-2.jpg",
  //     "/images/events/studio-inauguration-3.jpg",
  //     "/images/events/studio-inauguration-4.jpg",
  //   ],
  // },
];
