"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "passport-ui/avatar";
import { Button } from "passport-ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "passport-ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "passport-ui/navigation-menu";
import { ThemeButton } from "passport-ui/theme-button";

import { getNavigationItems } from "@/components/helpers/config";
import { profileData } from "@/data/profile";

import { URLS } from "../helpers/urls";

export function Header() {
  return (
    <div className="flex items-center justify-between -mx-2 md:mx-0">
      <div className="flex items-center gap-2">
        <Drawer direction="left" modal onOpenChange={() => {}}>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="medium" className="md:hidden">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm list-container">
              <div className="flex items-center justify-between">
                <h3>
                  {profileData.profile.firstName} {profileData.profile.lastName}
                </h3>
                <DrawerClose asChild>
                  <Button variant="ghost" size="medium">
                    <XIcon />
                  </Button>
                </DrawerClose>
              </div>
              <div className="list-container">
                {getNavigationItems().map((link, index) => {
                  return (
                    <Link key={`mobile-menu-item-${index}`} href={link.href}>
                      <Button size="medium" className="w-full">
                        {link.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
        <Link href={URLS.HOME()}>
          <div className="flex items-center gap-2">
            <Avatar className="hidden md:block" monochrome>
              <AvatarImage src={profileData.profile.image} />
              <AvatarFallback>
                {profileData.profile.firstName.charAt(0)}
                {profileData.profile.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3>
              {profileData.profile.firstName} {profileData.profile.lastName}
            </h3>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-2">
            {getNavigationItems().map((link, index) => {
              return (
                <NavigationMenuItem key={`desktop-menu-item-${index}`}>
                  <NavigationMenuLink href={link.href}> 
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="w-8">
          <ThemeButton minimal variant="ghost" align="end" size="medium" />
        </div>
      </div>
    </div>
  );
}
