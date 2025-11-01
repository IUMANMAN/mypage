"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Little Manman
        </Link>
        <div className="flex items-center gap-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-3 py-2">
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-3 py-2">
                  <Link href="/">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}