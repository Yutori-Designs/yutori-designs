export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  content: string[]; // array of paragraphs
}

// Content here is written fresh for the new site -- not copied from any
// source -- using the real facts about the studio (49 projects, 36
// turnkey, founders' backgrounds) confirmed from press coverage.
export const blogPosts: BlogPost[] = [
  {
    slug: "why-space-planning-comes-first",
    title: "Why Space Planning Comes Before Any Design Decision",
    excerpt:
      "Most costly interior mistakes trace back to one thing: design treated as decoration instead of planning. Here's why we start every project with space, not style.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Design Process",
    cover: "/images/blog/space-planning-cover.jpg",
    content: [
      "It's tempting to start an interior project with the fun part — finishes, colours, furniture. But almost every regret we've heard from clients who worked with other firms traces back to the same root cause: the layout was decided after the look, not before it.",
      "Space planning means understanding how people will actually move through a room before a single material is chosen. Where does morning light fall? Which door gets used the most? Where does a family actually gather, versus where the floor plan assumes they will?",
      "Skipping this step doesn't show up immediately. It shows up six months later, when a kitchen island blocks the one good traffic path, or an office's quiet zone sits right next to the loudest corridor in the building.",
      "At Yutori, every project — residential, commercial, or industrial — starts with a space plan reviewed and signed off before design development even begins. It's slower up front. It saves months of rework later.",
    ],
  },
  {
    slug: "designing-for-coastal-karnataka-climate",
    title: "Designing for Coastal Karnataka's Climate, Not Against It",
    excerpt:
      "Humidity, monsoon rain, and salt air shape every material decision we make in Mangalore and Udupi. Here's how we design with the coast instead of fighting it.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Materials",
    cover: "/images/blog/coastal-climate-cover.jpg",
    content: [
      "A material that looks beautiful in a showroom in Bangalore can fail within two monsoons on the coast. Humidity, salt-laden air, and heavy seasonal rain are constants here — and they're not obstacles to design around, they're a starting brief.",
      "We favour finishes that handle moisture without warping or staining: certain natural stones over untreated wood in high-exposure areas, breathable paints over fully sealed finishes that trap moisture behind them, and ventilation planned into the layout itself rather than patched in afterward with extra fans.",
      "Traditional coastal Karnataka homes already solved a lot of this — deep verandas, sloped roofs, courtyards that pull air through a house. We borrow from that logic constantly, even in fully modern interiors.",
      "The result is a home or office that doesn't fight the climate every monsoon. It's one less thing for a client to think about once they've moved in.",
    ],
  },
  {
    slug: "what-turnkey-execution-actually-means",
    title: "What 'Turnkey Execution' Actually Means (And Why It Matters)",
    excerpt:
      "It's one of the most-used phrases in interior design — and one of the most loosely defined. Here's what we mean by it, in practice.",
    date: "November 2025",
    readTime: "3 min read",
    category: "Project Management",
    cover: "/images/blog/turnkey-execution-cover.jpg",
    content: [
      "Turnkey execution should mean one thing: the client deals with one team, from concept to handover. In practice, a lot of firms use the term while quietly subcontracting the actual build to a separate, unrelated agency.",
      "That handoff is where design intent usually gets lost. The team that drew the plan isn't the team holding the tools, and small decisions — a missed socket, a finish swapped for a cheaper one, a tolerance ignored — pile up without anyone clearly accountable.",
      "Of the projects we've completed, the majority have been full turnkey deliveries, meaning our own team carries the design through civil work, carpentry, electrical, plumbing, and décor without handing it to a third party in between.",
      "It's not the only way to run a project well. But it's the reason a client can ask us a question about year-one maintenance and get an answer from someone who was actually on site, not someone reading a file.",
    ],
  },
];
