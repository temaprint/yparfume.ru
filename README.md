# Perfume Blog Project

A modern blog built with Astro and Tailwind CSS, focused on helping users identify authentic perfumes and spot counterfeits.

Git: https://github.com/temaprint/yparfume.ru.git
Link: https://yparfume.ru/

![pic](/public/yparfume.png)

## 🚀 Features

- Fast and SEO-friendly with Astro
- Beautiful responsive design with Tailwind CSS
- Blog posts written in Markdown
- Tag-based navigation
- Business section for perfume resellers
- About page with social links
- Image optimization
- Typography optimized for Russian content

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)

## 📦 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Logo.astro
│   │   └── PostCard.astro
│   ├── content/
│   │   └── blog/
│   │       └── *.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── blog.astro
│       ├── business.astro
│       ├── blog/[slug].astro
│       └── tag/[tag].astro
└── package.json
```

## 🧞 Commands

| Command           | Action                                       |
|:-----------------|:---------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally                  |

## 📝 Adding Content

### Blog Posts

Create new `.md` files in `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Post Title"
description: "Post description for SEO"
pubDate: "YYYY-MM-DD"
heroImage: "URL to hero image"
tags: ["Tag1", "Tag2"]
---

# Post content here
```

## 🎨 Customization

### Tailwind Configuration

The project includes a custom Tailwind configuration with:
- Extended color palette
- Typography plugin configuration
- Custom container styles

### Components

- `PostCard.astro`: Reusable card component for blog posts
- `Logo.astro`: Site logo component
- `Layout.astro`: Base layout with header and footer

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-first approach
- Responsive navigation
- Grid layouts that adapt to screen size
- Optimized typography for all devices

## 🔍 SEO

- Meta tags for all pages
- Proper heading hierarchy
- Descriptive alt texts for images
- Semantic HTML structure