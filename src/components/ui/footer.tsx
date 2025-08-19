"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-6 py-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
