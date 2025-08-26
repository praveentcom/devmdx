"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { profileData } from "@/data/profile";
import { IconLinks } from "@/components/ui/icon-links";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/community", label: "Community" },
];

export function Footer() {
  return (
    <footer className="mt-6 py-8 border-t border-border">
      <div className="page-container">
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

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-4">
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

            <IconLinks />
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
