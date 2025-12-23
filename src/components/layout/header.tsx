"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { ThemeSwitcher } from "@workspace/ui/components/theme-switcher";
import { cn } from "@workspace/ui/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { profile } from "@/data/profile";

import { URLS } from "../helpers/urls";

const NAV_ITEMS = [
  { label: "Articles", href: URLS.ARTICLES_LIST() },
  { label: "Projects", href: URLS.PROJECTS_LIST() },
  { label: "Community", href: URLS.COMMUNITY_LIST() },
];

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  const themeSwitcher = (
    <ThemeSwitcher
      theme={theme}
      resolvedTheme={resolvedTheme}
      setTheme={setTheme}
    />
  );

  return (
    <div className="flex items-center justify-between">
      <PrefetchLink
        href={pathname === URLS.HOME() ? URLS.ABOUT() : URLS.HOME()}
      >
        <h4>
          {profile.firstName} {profile.lastName}
        </h4>
      </PrefetchLink>
      <div className="hidden md:flex md:items-center md:gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {themeSwitcher}
      </div>
      <div className="flex items-center gap-1 md:hidden">
        {themeSwitcher}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {NAV_ITEMS.map((item) => (
              <DropdownMenuItem
                key={item.href}
                asChild
                className={cn(
                  isActive(item.href) && "bg-accent text-accent-foreground",
                )}
              >
                <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
