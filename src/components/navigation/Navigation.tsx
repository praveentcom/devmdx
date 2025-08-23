"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";
import { profileData } from "@/data/profile";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/community", label: "Community" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const personName = `${profileData.profile.firstName} ${profileData.profile.lastName}`;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isArticle =
    pathname?.startsWith("/articles/") && pathname?.split("/").length === 3;

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-40 w-full backdrop-blur-sm transition-[background-color,border-color,backdrop-filter] duration-300 ease-out will-change-[background-color,border-color]",
          // Background with proper opacity
          "bg-background/95 supports-[backdrop-filter]:bg-background/80",
          // Mobile border always visible, desktop border on scroll only
          "border-b border-border sm:border-transparent",
          isScrolled && "sm:border-border",
        )}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="hidden sm:flex items-center justify-start py-4 gap-4">
            <h1 className="text-md font-semibold hover:scale-105 transition-all duration-200">
              <Link href="/" aria-label="Go to home">
                {personName}
              </Link>
            </h1>
            <div className="h-6 w-px bg-border hidden sm:block rounded-full" />
            <div className="flex items-center bg-background rounded-xl p-1 border border-transparent hover:border-border/75 gap-1 transition-all duration-200">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1 text-sm font-medium transition-[color,background-color,box-shadow] duration-200 ease-out hover:text-foreground rounded-lg will-change-[color,background-color]",
                      isActive
                        ? "bg-card text-foreground shadow-sm z-10"
                        : "text-muted-foreground hover:bg-card hover:shadow-sm",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between py-2.5 sm:hidden">
            <h1 className="text-md font-semibold hover:scale-105 transition-all duration-200">
              <Link href="/" aria-label="Go to home">
                {personName}
              </Link>
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        {isArticle && <ScrollProgressBar />}
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-50 sm:hidden transition-[visibility,opacity] duration-250 ease-out",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-250 ease-out",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={toggleMobileMenu}
        />

        <div
          className={cn(
            "fixed inset-x-0 top-0 z-50 bg-background shadow-lg border-b border-border transition-transform duration-250 ease-out will-change-transform",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between py-2.5 border-b border-border">
              <h1 className="text-md font-semibold">Menu</h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="py-6">
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className={cn(
                        "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg transition-[color,background-color] duration-200 ease-out",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground bg-muted border border-border",
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
