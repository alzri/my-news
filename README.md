# My News App

A responsive news application built with **Next.js (App Router)**, **React**, and **TypeScript**. The app aggregates news from multiple categories and organizes them into three feeds: featured stories, latest news with infinite scroll, and a breaking news highlight. Users can also save articles to a favorites page with a hover-to-save interaction.

## Features

- Fetches news from multiple categories (General, Technology, Sports, Health, Science, Business)
- Removes duplicate articles using URL checks
- Different feed types:
  - **Featured** – curated layout-based articles
  - **Latest** – infinite scroll for newest articles
  - **Breaking News** – manually highlighted priority article
- Infinite scroll implemented with `IntersectionObserver`
- Mobile **NewsToggle** for switching between feeds
- Responsive layout (desktop + mobile, tablet uses mobile layout)
- Favorites system with hover-to-save interaction

## Data Flow

1. Fetch articles from multiple categories in parallel
2. Merge all results into one array
3. Remove duplicates by URL
4. Sort by publish date (newest first)
5. Split into:
   - Featured feed
   - Latest feed
6. Render based on device and layout

## Design Decisions

### Breaking News

The API does not provide a breaking news indicator. To match the design requirements, a single article is selected and promoted on the frontend as “Breaking News”.

### Paid content flag

The API doesn’t include a premium content flag (`isPaid`), so it’s added manually where needed to support the UI. This keeps the API data unchanged and avoids mocking extra datasets.

### Favorites interaction

A hover-based interaction was implemented to allow users to quickly save articles. On hover, a heart icon overlay appears, enabling fast bookmarking.

This mirrors common UX patterns in modern content platforms where saving content is expected to be instant and frictionless. Saved articles are stored and displayed on a Favorites page that reuses the same layout as category pages for consistency.

### Responsive strategy (tablet handling)

Tablet layout reuses the mobile design. No separate tablet design was provided, so mobile was used as the base to reduce layout complexity and keep UI consistent across breakpoints.

### API selection

Uses **newsapi.org** for multi-category news aggregation due to its simple integration and broad category support.

## Trade-offs & Limitations

- Infinite scroll is client-side due to API limitations (no native pagination support)
- Breaking news and premium flags are handled on the frontend due to missing API support
- Tablet layout reuses mobile design due to lack of dedicated design system

These decisions were made to prioritize frontend architecture and user experience over backend complexity.

## Environment Variables

Create a `.env.local` file in the root directory:

NEWS_API_KEY=your_api_key_here

## Tech Stack

### Core

- Next.js 16 (App Router)
- React 19
- TypeScript

### Styling

- SCSS Modules
- `clsx`

### Tooling

- ESLint
- Stylelint
- Prettier (`npx prettier --write .`)
- Husky + lint-staged

### Extras

- `idb` – local storage (favorites)
- `@svgr/webpack` – SVG components

## Setup and Installation

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm run dev`.

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Run production build
npm run lint       # Run lint checks
npm run lint -- --fix   # Auto-fix lint issues
npm run typecheck  # TypeScript validation
npm run test       # Full project checks
```
