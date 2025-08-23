"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { profileData } from "@/data/profile";
import { SimpleIcon, socialIconPaths } from "@/lib/utils/icons";

// Navigation items from the header
const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/community", label: "Community" },
];

export function Footer() {
  const { socialMedia, links } = profileData.profile;
  
  // Combine all available social/external links
  const allLinks = [
    ...(links ? Object.entries(links).filter(([, url]) => url) : []),
    ...(socialMedia ? Object.entries(socialMedia).filter(([, url]) => url) : []),
  ];

  return (
    <footer className="mt-6 py-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left grid gap-1">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} {profileData.profile.firstName}{" "}
              {profileData.profile.lastName}
            </p>
            <p className="text-muted-foreground text-xs">
              {profileData.profile.footerSubtitle}
            </p>
            <p className="text-muted-foreground text-xs">
              It&apos;s coming. Trust in{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">AGI</code>
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Social/External Links */}
            {allLinks.length > 0 && (
              <div className="flex flex-wrap justify-center sm:justify-end gap-3">
                {allLinks.map(([platform, url]) => {
                  const iconPath =
                    socialIconPaths[platform as keyof typeof socialIconPaths];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    >
                      {iconPath && <SimpleIcon iconPath={iconPath} />}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          
          <div className="grid sm:justify-items-end justify-items-center">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs">
                Toggle Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
