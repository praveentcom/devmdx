## ✨ DevCard: Developer Spotlight Template

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

Server will start running on `http://localhost:3000` by default.

**Custom Port Configuration:**

```bash
# .env.local
PORT=4000
```

Then run `npm run dev` and the server will start on `http://localhost:4000`.

Feel free to modify the components to suit your use-case. Note that we keep the `/data` folder backwards-compatible for future versions, but you will see conflicts if `/src` is modified.

#### File Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main page component
│   ├── articles/              # Articles (MDX-backed)
│   ├── community/             # Community contributions (MDX-backed)
│   ├── projects/              # Projects and stacks
│   ├── work/                  # Work experience pages
│   └── education/             # Education pages
├── components/                # UI and section components
├── styles/                    # Global styles and theme
├── types/                     # TypeScript type definitions
└── lib/                       # Helper utilities
```

---

##### Contributing & License

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on open-source contributions. This project is licensed under the MIT License.

##### Assets and trademarks

Logos and trademarks in `public/images/tech-icons` and elsewhere are the property of their respective owners and are used here for identification purposes only. If you are an owner and would like your asset removed or attributed differently, please open an issue.

---

Made with love, for the community ❤️
