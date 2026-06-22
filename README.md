# Yutori Designs — Website Rebuild (Next.js)

A from-scratch rebuild of yutoridesigns.in in Next.js 16 (App Router) +
Tailwind v4 + Framer Motion, with all real content (project names,
locations, contact details, service process steps, about copy) carried
over from the original WordPress site.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's real vs. placeholder

**Real content** (pulled directly from yutoridesigns.in):
- All 19 projects in `lib/projects.ts` -- names, locations, categories
- Service process steps in `lib/services.ts` (paraphrased from the
  original site's 4-stage process)
- Overview page copy, including the "Yutori" name origin story
- Our Values copy
- Contact details, office addresses, social links (footer + contact page)

**Placeholder content you must replace:**
- All images under `public/images/` are solid-color JPGs with text
  labels -- see "Replacing images" below
- Team member names/bios in `app/our-team/page.tsx` are generic -- the
  old site didn't list real names publicly, so ask the client for these
- Terms & Conditions / Privacy Policy pages are starter templates --
  **have a lawyer review before launch**
- The Niveus testimonial video -- see "Video testimonial" below

## Replacing images

Image paths are already wired up everywhere they're needed. Download
the originals from the old site and save them with these exact names:

```
public/images/
├── hero/
│   ├── hero-commercial.jpg      (homepage hero slide 1)
│   ├── hero-workspace.jpg       (homepage hero slide 2)
│   └── hero-residential.jpg     (homepage hero slide 3)
├── services/
│   ├── commercial.jpg
│   ├── industrial.jpg
│   └── residential.jpg
├── testimonials/
│   └── niveus-poster.jpg        (video thumbnail)
└── projects/
    └── <project-id>-cover.jpg   (one cover image per project)
    └── <project-id>-1.jpg       (gallery images -- add more as needed)
    └── <project-id>-2.jpg
    └── <project-id>-3.jpg
```

Project IDs are listed in `lib/projects.ts`. To add more gallery photos
for a project, just add more entries to that project's `gallery` array
and matching files.

Old site images live at URLs like:
`https://yutoridesigns.in/wp-content/uploads/2025/06/Niveus_manglore-scaled.jpg`
-- download these before the old site/WordPress hosting is taken down.

## Video testimonial

The Niveus Solutions testimonial is wired up in
`components/Testimonials.tsx` as a YouTube embed. Steps:

1. Get the original MP4 from the client (or download it from
   `yutoridesigns.in/wp-content/uploads/2025/10/NTT_Testimonial.mp4`
   before the old site disappears)
2. Upload it to YouTube as **Unlisted**
3. Replace `REPLACE_WITH_VIDEO_ID` in `components/Testimonials.tsx`
   with the real YouTube video ID

## Contact form

`app/api/contact/route.ts` posts form submissions via
[Resend](https://resend.com) (free tier). Until you add a key, it logs
submissions to the server console instead of failing -- useful for
testing the form before email is wired up.

1. Sign up at resend.com, verify a sending domain
2. Create `.env.local` in the project root:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
3. Update the `from` and `to` addresses in `route.ts` to match your
   verified domain

## Fonts

`app/layout.tsx` loads Fraunces (display) and Inter (body) from Google
Fonts via a `<link>` tag. This requires internet access at request
time -- works automatically once deployed to Vercel or any host with
normal internet access.

## Deploying

Recommended: [Vercel](https://vercel.com) (made by the Next.js team,
free tier, one-click deploy from GitHub).

```bash
npm run build   # confirm it builds cleanly first
```

Then push to GitHub and import the repo on vercel.com.

### SEO -- don't lose existing rankings

The old site ranks for terms like "interior designers Mangalore." Page
URLs in this rebuild match the old site's URL structure
(`/our-projects`, `/service/commercial`, `/overview`, etc.) so there's
minimal redirect work. Where slugs differ (e.g. the old site used
`/service/interior-design/`, this uses `/service/commercial`), add a
redirect in `next.config.ts`:

```ts
async redirects() {
  return [
    {
      source: "/service/interior-design",
      destination: "/service/commercial",
      permanent: true,
    },
  ];
}
```

## Project structure

```
app/                    Routes (Next.js App Router)
components/              Shared UI components
lib/projects.ts          Project data (19 real projects)
lib/services.ts          Service page content
public/images/           All site images
```
