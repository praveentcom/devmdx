"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-6 py-8 border-t border-border">
      <div className="page-container">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="text-center sm:text-left grid gap-1 h-min">
            <p className="text-muted-foreground text-xs font-medium">
              © {new Date().getFullYear()} {profileData.profile.firstName}{" "}
              {profileData.profile.lastName}
            </p>
            <p className="text-muted-foreground text-xs">
              {profileData.profile.footerSubtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:justify-items-end h-min">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
