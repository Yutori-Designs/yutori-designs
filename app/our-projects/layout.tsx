import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects – Mangalore & Udupi Interiors",
  description:
    "Interior projects by Yutori Designs in Mangalore, Udupi and Manipal: offices for Niveus Solutions, Novigo and Xpheno, a hotel, a showroom and homes.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}