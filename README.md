# Developer Spotlight Website Template

A modern, customizable developer profile spotlight landing page built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. Maintained by Praveen Thirumurugan (mail@praveent.com).

## Features

✨ **Modern Design**: Clean, professional layout with dark/light mode support
🔧 **Fully Customizable**: Single configuration file for all profile data
📱 **Fast & Responsive**: Optimized for all screens & built with Next.js app router

## Quick start

### 1. Installation

```bash
# Clone or download this template
npm install
```

### 2. Customize your profile & site data

Edit the `src/data/profile/index.ts` file with your information:

```typescript
export const profileData: ProfileData = {
  profile: {
    firstName: "Your",
    lastName: "Name",
    currentPosition: "Your Job Title",
    imageUrl: "/your-profile-photo.jpg",
    description: "Your professional description...",
    // ... more fields
  },
  // ... more fields
};
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your developer spotlight website.

### Environment variables

Create a `.env.local` file for local development (see `.env.example` for reference).

### Styling Customization

The template uses Tailwind CSS and shadcn/ui. To customize:

1. **Colors**: Modify `src/styles/globals.css` color variables
2. **Components**: Edit individual components in `src/components/`
3. **Layout**: Adjust the main layout in `src/app/page.tsx`

### Adding sections

To add new sections:

1. Create a new component in `src/components/`
2. Add the data structure to `src/types/profile.ts`
3. Update `src/data/profile/index.ts` with the new data
4. Import and use the component in `src/app/page.tsx`

## File Structure

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
├── data/
│   ├── profile/               # Your profile data (EDIT `index.ts`)
│   ├── articles/              # MDX articles
│   └── community/             # MDX community contributions
├── styles/
│   └── globals.css            # Global styles and theme
├── types/                     # TypeScript type definitions
└── lib/                       # Helper utilities
```

## Contributing

This is an open-source template. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Assets and trademarks

Logos and trademarks in `public/images/tech-icons` and elsewhere are the property of their respective owners and are used here for identification purposes only. If you are an owner and would like your asset removed or attributed differently, please open an issue.

---

Made with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
