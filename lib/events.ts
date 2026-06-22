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
    date: "2025",
    location: "Udupi, Karnataka",
    description:
      "We opened the doors to our own studio space in Udupi — a milestone for the team after years of designing other people's spaces. The inauguration brought together clients, vendors, and well-wishers who have been part of the journey so far.",
    cover: "/images/events/studio-inauguration-cover.jpg",
    gallery: [
      "/images/events/studio-inauguration-1.jpg",
      "/images/events/studio-inauguration-2.jpg",
      "/images/events/studio-inauguration-3.jpg",
      "/images/events/studio-inauguration-4.jpg",
    ],
  },
];
