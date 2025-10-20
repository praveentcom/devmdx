## ✨ DevMDX: Developer Spotlight Template

A modern, customizable developer profile spotlight landing page built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

**Modern Design**: Clean, professional layout with dark/light mode support.  
**Fully Customizable**: Single configuration file for all profile data.  
**Fast & Responsive**: Optimized for all screens & built with Next.js app router.

Maintained by Praveen Thirumurugan (mail@praveent.com) and the community.

---

### Quick start

#### Installation

```bash
npm install
npm run init
```

This will install the required package dependencies and load the dynamic data into your workspace. The `/data` directory contains the basic information for your profile, such as your name, social networks, work experience, etc.

#### Start developing

```bash
npm run dev
```

#### File Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main page component
│   ├── articles/              # Articles (MDX-backed)
│   ├── community/             # Community (MDX-backed)
│   ├── projects/              # Projects and stacks
│   ├── work/                  # Work experience pages
│   └── education/             # Education pages
├── components/                # UI and section components
├── styles/                    # Global styles and theme
├── types/                     # TypeScript type definitions
└── lib/                       # Helper utilities
```

#### Deployment

When deploying DevMDX to production, make sure to:

1. **Set environment variables** in your hosting platform (Vercel, Netlify, etc.)
2. **Configure allowed hostnames** for any external image sources or CDNs
3. **Enable strict CSP** for enhanced security in production
4. **Set the correct base URL** for proper SEO and sitemap generation

---

##### Contributing & License

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on open-source contributions. This project is licensed under the MIT License.

##### Assets and trademarks

Logos and trademarks in `public/images/tech-icons` and elsewhere are the property of their respective owners and are used here for identification purposes only. If you are an owner and would like your asset removed or attributed differently, please open an issue.

---

Made with love, for the community ❤️
