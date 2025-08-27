"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";
import { getAuthorName } from "@/lib/helpers/config";
import { AnimatedBackground } from "@/components/motion-primitives";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/community", label: "Community" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const personName = getAuthorName();
  const isHomePage = pathname === "/";
  const nameHref = isHomePage ? "/about" : "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstFocusableElement = document.querySelector(
        '[role="dialog"] button, [role="dialog"] a',
      );
      if (firstFocusableElement instanceof HTMLElement) {
        firstFocusableElement.focus();
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isArticle =
    pathname?.startsWith("/articles/") && pathname?.split("/").length === 3;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isMobileMenuOpen
          ? "Mobile navigation menu opened"
          : "Mobile navigation menu closed"}
      </div>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "sticky top-0 z-40 w-full backdrop-blur-sm transition-[background-color,border-color,backdrop-filter] duration-200 ease-out will-change-[background-color,border-color]",
          "bg-background/95 supports-[backdrop-filter]:bg-background/80",
          "border-b border-border md:border-transparent",
          isScrolled && "md:border-border",
        )}
      >
        <div className="page-container py-0">
          <div className="hidden md:flex items-center justify-start py-4 gap-4">
            <h1 className="text-md font-medium">
              <Link
                href={nameHref}
                aria-label={isHomePage ? "Go to about" : "Go to home"}
              >
                {personName}
              </Link>
            </h1>
            <div className="h-6 w-px bg-border hidden md:block rounded-full" />
            <div className="flex items-center bg-background rounded-xl p-1 border border-transparent hover:border-border/75 transition-all duration-200">
              <AnimatedBackground
                defaultValue={pathname}
                className="rounded-lg bg-card shadow-sm"
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.15,
                }}
                enableHover={true}
              >
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      data-id={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-1 rounded-lg text-sm font-medium",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </AnimatedBackground>
            </div>
          </div>

          <div className="flex items-center justify-between py-2.5 md:hidden">
            <h1 className="text-md font-medium">
              <Link
                href={nameHref}
                aria-label={isHomePage ? "Go to about" : "Go to home"}
              >
                {personName}
              </Link>
            </h1>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
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
          "fixed inset-0 z-50 md:hidden transition-[visibility,opacity] duration-250 ease-out",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <button
          type="button"
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-250 ease-out",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              toggleMobileMenu();
            }
          }}
          aria-label="Close mobile menu"
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={cn(
            "fixed inset-x-0 top-0 z-50 bg-background shadow-lg border-b border-border transition-transform duration-250 ease-out will-change-transform",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="page-container py-0">
            <div className="flex items-center justify-between py-2.5 border-b border-border">
              <h1 className="text-md font-medium">Menu</h1>
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
              <div className="grid gap-4 grid-cols-2">
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
