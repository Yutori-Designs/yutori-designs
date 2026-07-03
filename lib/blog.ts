export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "image"; src: string; alt: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  content: ContentBlock[];
  source?: string;      // optional URL
  sourceLabel?: string; // optional display text
}

// Content here is written fresh for the new site -- not copied from any
// source -- using the real facts about the studio (49 projects, 36
// turnkey, founders' backgrounds) confirmed from press coverage.
export const blogPosts: BlogPost[] = [
  {
    slug: "interior-design-firms-house-design-philosophy",
    title: "Interior Design Firms in Mangalore: Design Philosophy Over House Style",
    excerpt:
      "Most interior design firms in Mangalore apply the same signature style to every project, ignoring how you actually live. When a design starts with your needs instead of the designer’s aesthetic, spaces age better and cost less to maintain. The best firms listen first and decide their approach based on what you’re trying to solve.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Design Philosophy",
    cover: "/images/blog/design-philosophy-over-house.jpg",
    content: [
      {
        type: "paragraph",
        text: "Most interior design firms in Mangalore apply the same signature style to every project, ignoring how you actually live. When a design starts with your needs instead of the designer’s aesthetic, spaces age better and cost less to maintain. The best firms listen first and decide their approach based on what you’re trying to solve.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "bullets",
        items: [
          "Most interior design firms in Mangalore use a one-size-fits-all approach, applying their signature aesthetic to every project regardless of how clients actually live.",
          "Spaces designed around your real needs and lifestyle age better and require fewer costly updates than generic interiors built to impress rather than function.",
          "The best design starts with listening to your family’s habits, work style, and preferences, then develops a concept specifically for your project, not a pre-formed one.",
          "When evaluating a firm, ask whether they study your space and needs first or if their approach is already decided; the answer reveals whether they’ll design for you or for you.",
        ],
      },
      {
        type: "paragraph",
        text: "Walk into a home designed by the wrong approach in Mangalore, and you’ll recognise the problem immediately. The same colour palette. The same furniture arrangement. The same feeling that the space was plucked from a magazine and dropped into your rooms without asking who you are. It’s not a bad design; it’s someone else’s design, forced onto your life. This happens when a designer imposes a pre-formed vision onto your space. The problem isn’t the aesthetic itself, but that it was never meant for you. A good interior design firm should start with understanding you, not selling you a style.",
      },
      {
        type: "heading",
        text: "The Signature Style Trap",
      },
      {
        type: "paragraph",
        text: "This happens more often than you’d think. Many interior design firms in Mangalore operate from a simple model: they develop a signature style and apply it everywhere. A coastal villa gets the same aesthetic as a corporate office. A young family’s apartment echoes a retiree’s aesthetic. The client becomes secondary to the look",
      },
      {
        type: "heading",
        text: "Why Spaces Fail When Design Ignores How You Live",
      },
      {
        type: "paragraph",
        text: "The problem is that spaces aren’t products. They’re extensions of how you live. A kitchen that looks beautiful but doesn’t accommodate the way you cook is a failure. An office that impresses clients but drains employees is expensive window dressing. A bedroom that follows every design trend but doesn’t feel like rest is just another room.",
      },
      {
        type: "heading",
        text: "Why Design Firms Choose The Formula Approach",
      },
      {
        type: "paragraph",
        text: "So why do so many design firms stick to a house style approach? It’s efficient. Repeatable. Profitable. Once you’ve built a recognisable aesthetic, you can execute it faster, cut costs, and market yourself as having a “signature look.” Clients sometimes want this. They want to hire a known brand and trust they’ll get that brand’s formula.",
      },
      //heading 5
      {
        type: "heading",
        text: "The Real Cost Of A One-Size-Fits-All Philosophy",
      },
      {
        type: "paragraph",
        text: "Here is why that logic breaks down. Your home isn’t a brand extension. Your office isn’t a portfolio piece. They’re spaces where you spend your time, make decisions, raise families, and work toward goals. A design philosophy that respects this starts differently.",
      },
      //6 heading
      {
        type: "heading",
        text: "Start With Listening, Not Aesthetics",
      },
      {
        type: "paragraph",
        text: "A design philosophy begins with listening. What does your family actually do in this living room? How does your team work best? What materials feel right to you? What problem are you really trying to solve? The answers shape everything that follows. The furniture layout. The colour story. The lighting approach. The textures underfoot.",
      },
      //7 heading
      {
        type: "heading",
        text: "Local Context Matters Only When It Serves You",
      },
      {
        type: "paragraph",
        text: "Coastal Karnataka offers unique design opportunities. Natural light through monsoon seasons. Breezes that cool without air-conditioning. Local materials and traditional craftsmanship that ground a space in place. But these elements only matter if they’re chosen because they solve your problem, not because they’re on trend. A sustainable material is only valuable if it aligns with how you live. Minimalism is only meaningful if it reduces clutter that actually bothers you.",
      },
      //8 heading
      {
        type: "heading",
        text: "How To Spot A Firm Worth Your Time",
      },
      {
        type: "paragraph",
        text: "When you’re evaluating design firms, ask about their process. Do they start by studying your space and understanding your needs? Do they develop a concept specifically for your project, or is their approach already decided? Do they explain why they’re recommending something, or do they expect you to trust their taste?  Your space should feel like yours. Everything else is just decoration.",
      },
      {
        type: "paragraph",
        text: "The firms worth your time will put this philosophy first. Regional context second. Their own aesthetic is somewhere much further down the list.",
      },
      {
        type: "paragraph",
        text: "Your space should feel like yours. Everything else is just decoration.",
      },
    ],
    source: "https://media.istockphoto.com/id/2159415995/photo/hand-of-interior-designer-and-architect-placing-wood-sample-on-material-board.jpg?b=1&s=612%C3%97612&w=0&k=20&c=spzDWDhdWnxP55aiq8YRu5NxEF1tPMqed_gqAC_S9jQ=",
    sourceLabel: "Featured image: iStock",
  },


  // 2- blog 
  {
    slug: "interior-design-mangalore-luxury-villas-premium-homes",
    title: "Why Interior Design Mangalore Is Becoming Essential for Luxury Villas and Premium Homes",
    excerpt:
      "Premium homeowners want more than expensive finishes. Interior design Mangalore professionals are building spaces around calm, coastal materials, and personal lifestyle, not trend boards or decorative excess.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Luxury Residential Design",
    cover: "/images/blog/Interior-Designers-in-Mangalore_-Yutori-Transforming-Coastal-Spaces.jpg",
    content: [
      {
        type: "paragraph",
        text: "Premium homeowners want more than expensive finishes. Interior design Mangalore professionals are building spaces around calm, coastal materials, and personal lifestyle, not trend boards or decorative excess.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "bullets",
        items: [
          "Interior design Mangalore now blends architecture, coastal materials, and lifestyle planning into one process.",
          "Luxury today means calm and curated, not opulence and flashy.",
          "Coastal textures age better and cost less to maintain long term.",
          "Design and execution handled together protects the original intent.",
          "Space planning comes before aesthetics in genuinely premium homes.",
        ],
      },
      {
        type: "paragraph",
        text: "The questions premium homeowners ask when they need to change their decor have changed. It is less about how the home will photograph and more about what it actually feels like to come home to on a regular evening. Interior design Mangalore is responding to exactly that. People want spaces that are calm, thought through, and built around how they actually live.",
      },
      {
        type: "paragraph",
        text: "That is where interior design Mangalore has genuinely moved forward as the brief is not about filling rooms with impressive pieces or picking finishes from the top of a price list rather it is about understanding how light works in a specific room, how materials hold up in coastal humidity, and how a household moves through its home at different hours. Interior design is understanding the life and lifestyle of people who will live in that home and design accordingly.",
      },
      {
        type: "heading",
        text: "When Luxury Stopped Being About Showing Off",
      },
      {
        type: "bullets",
        items: [
          "Interiors Built on Ornamentation Date Quickly: A home packed with decorative detail rarely stays impressive. It tends to feel heavy within a few years and dated not long after. Homeowners who have lived through that kind of project usually come to the next one with a simple ask — do less, but do it properly. That is pushing design professionals toward more restrained and deliberate work on luxury briefs.",
          "Space Before Finishes: The most important design decisions are not about tiles or paint. They are about proportion, ceiling height, and how rooms connect to each other. Get the spatial logic wrong and no finish will fix it. Get it right and the home feels good even before the furniture arrives.",
          "Rooms That Earn Their Calm: The better benchmark for premium design now is not how much a room contains but how well everything in it belongs there and gels perfectly. Furniture fits the room, not the brand catalogue. Colours come from available light, not trend palettes. That is what produces a home that actually improves with time.",
        ],
      },

      //next point
      {
        type: "heading",
        text: "The Coastal Advantage That Shapes Every Room",
      },
      {
        type: "bullets",
        items: [
          "Materials Honest to the Region: Laterite stone, local timber, handwoven cane, polished concrete — the coastal Karnataka palette is genuinely distinctive. These materials carry warmth that imported alternatives try to replicate and cannot. Used with intention, they produce interiors that feel rooted. Used poorly, they just look rustic. The difference is entirely in how they are selected and detailed.",
          "Light and Air Are Part of the Design: A villa planned without understanding site orientation is already behind its expectations. The movement of wind across this coastline, how humidity behaves inside a space, where direct afternoon sun lands — these are not afterthoughts. They determine where openings go, how volumes are sized, and what surfaces make sense. That kind of knowledge does not come from a design software subscription.",

        ],
      },
      {
        type: "bullets",
        items: [
          "What Coastal Design Handles Well:",
          "Ventilation:Getting rooms oriented so natural breezes actually move through them cuts down on air conditioning far more than people expect.",
          "Materials that last:Stone, timber, and woven textures do not need much looking after. They hold up and they look better for it.",
          "Dealing with light:Overhangs and louvred openings do the work here. Glare comes down, brightness stays.",
          "Storage that disappears:Built-in solutions keep surfaces clear so the architecture is what the eye lands on.",
          "Furniture that fits the room:Chosen for actual scale, not price tag.",
        ],
      },


      {
        type: "heading",
        text: "Architecture, Interiors, and the Value of One Conversation",
      },
      {
        type: "bullets",
        items: [
          "Why Splitting the Brief Costs More Than It Saves: Architect first, then decorator — that is the traditional sequence, and it is where design intent quietly disappears. Every hand-off is an interpretation. By the time the villa reaches the finishing stage, the original spatial idea has softened into something assembled rather than designed. Keeping architecture, interiors, lighting, and material decisions inside one conversation changes the result significantly.",
          "Execution Is Where Design Either Survives or Doesn’t: Decisions made in drawings only hold if the craftsmanship on site matches them. Custom joinery, precision work on stone, furniture built to dimension — none of that happens consistently without someone who understands the design watching the execution closely. When the design team and the site team are the same team, the standard does not slip between the two.",

        ],
      },

      {
        type: "heading",
        text: "The Home Worth Building Once and Living In for Decades",
      },
      {
        type: "paragraph",
        text: "A serious home starts with knowing how the space should feel and function years from now, not just on the day of handover. That clarity does not come from a finished schedule. It comes from working with a team that holds the design and the execution together in one hand. For those planning a luxury villa or premium residence in this region, that is the conversation worth having first. Speak to an experienced interior design team and begin there.",
      },
    ],
  },
  {
    slug: "top-interior-designers-mangalore-services",
    title: "7 Services Offered by Top Interior Designers in Mangalore [Infographic]",
    excerpt:
      "It's one of the most-used phrases in interior design — and one of the most loosely defined. Here's what we mean by it, in practice.",
    date: "November 2025",
    readTime: "3 min read",
    category: "Interior Design Services",
    cover: "/images/blog/novigo_waiting_area.jpg",
    content: [
      {
        type: "paragraph",
        text: "Interior design plays a significant role in shaping how spaces function and feel. Whether it is a home, office, retail outlet, or hospitality space, thoughtful design enhances usability, aesthetics, and overall experience. Professional designers bring expertise in planning, materials, and execution to create spaces that align with client needs and preferences.",
      },
      {
        type: "paragraph",
        text: "The top interior designers in Mangalore offer a wide range of services that go beyond basic decoration. Their work involves understanding spatial requirements, optimising layouts, and integrating design elements that reflect both functionality and style.",
      },
      {
        type: "paragraph",
        text: "Working with the top interior designers in Mangalore ensures a structured approach to design and execution, resulting in well-planned and visually appealing spaces. Below is an infographic outlining seven key services commonly provided.",
      },
      {
        type: "image",
        src: "/images/blog/interior-designers-768x2861.jpg",
        alt: "7 Services Offered by Top Interior Designers in Mangalore",
      },

    ],
  },


  ///4 blog
  {
    slug: "how-commercial-interior-designers-work",
    title: "How a Commercial Interior Designer Thinks About Your Space that needs to be designed",
    excerpt:
      "It's one of the most-used phrases in interior design — and one of the most loosely defined. Here's what we mean by it, in practice.",
    date: "November 2025",
    readTime: "3 min read",
    category: "Design Process",
    cover: "/images/blog/commercial-interior-designer.jpg",
    content: [
      {
        type: "paragraph",
        text: "Most people assume that designers begin with addressing the colours or furniture. Or a mood board from a design site. That is not the process. If your designer starts here, pause before going further. The first thing a good designer looks at is how people move. Not how the space looks — how it functions when full of people trying to work, meet, or serve customers. Every corridor, every door placement, every desk cluster has a logic behind it. Or it should. A commercial interior designer thinks about this before touching a single swatch.",
      },
      {
        type: "heading",
        text: "The question that comes first",
      },
      {
        type: "paragraph",
        text: "Before any design decision is made, the first question is: what does this space need to do? A law office has very different demands from a software company. A boutique retail store works nothing like a warehouse showroom. Commercial space planning starts with that answer. Every choice that follows, including lighting, acoustics, and material finishes, flows from there. That clarity is what separates well-designed spaces from ones that just look the part. A commercial interior designer in Mangalore builds the entire brief around that single question before touching anything else.",
      },
      {
        type: "paragraph",
        text: "Sound is something most clients never think about until it becomes a problem. Open-plan offices are popular, but they are also loud. A designer who understands this will factor in acoustic panels, floor materials, and ceiling treatments before the layout is finalised. That kind of thinking happens early, or it does not happen at all.",
      },


       {
        type: "heading",
        text: "What a bad outcome actually looks like",
      },
      {
        type: "paragraph",
        text: "There is a version of this that goes wrong, and it goes wrong more often than people admit. A business owner puts a lot of money into a renovation. The space looks good in photos. Then, six months in, employees are distracted, clients feel uncomfortable, and the flow never quite works. No one can say exactly why. The designer delivered a beautiful space, but the thinking was surface-deep.",
      },
      {
        type: "paragraph",
        text: "That is the risk. A space that photographs well but does not work is an expensive mistake.",
      },

      {
        type: "heading",
        text: "Why the small decisions matter",
      },
      {
        type: "paragraph",
        text: "Most people remember the big things — a feature wall, a reception desk, a statement light fixture. What makes a space actually work are the things you stop noticing after a week. The way light falls in the afternoon. The meeting room does not feel cramped with eight people in it. The storage is placed exactly where you need it.",
      },
      {
        type: "paragraph",
        text: "A designer thinking at that level is doing something different from someone who is simply making things look nice. The difference shows up in how you feel in the space after six months, not in how it looked on the first day.",
      },

      {
        type: "heading",
        text: "One question worth asking",
      },
      {
        type: "paragraph",
        text: "Ask your designer how they approach acoustics in open-plan spaces. Or how they decide on ceiling heights. If the answer is vague or moves immediately to aesthetics, that tells you something. It does not mean they are bad at design. It may mean their process is more visual than spatial.",
      },
      {
        type: "paragraph",
        text: "Getting this right early saves time and money. Retrofitting a space that does not work costs far more than planning carefully before a single wall goes up. Book a consultation to talk through what your space actually needs.",
      },
    ],
  },
];
