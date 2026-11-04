"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigations } from "./navigation-items";
import { Fragment } from "react";

export function Navigation() {
  const pathname = usePathname();
  return navigations.map((nav, i) => {
    return (
      <Fragment key={nav.title}>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">
            {nav.title}
          </SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {nav.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn(
                      "data-[active=true]:bg-sidebar-active data-[active=true]:text-sidebar-active-foreground relative overflow-hidden",
                      pathname === item.url &&
                        "bg-sidebar-primary/20 text-sidebar-primary before:absolute before:inset-0 before:rounded-lg before:bg-sidebar-primary before:content-[''] before:h-[50%] before:w-1 before:left-0 before:my-auto hover:bg-sidebar-primary/20 hover:text-sidebar-primary",
                    )}
                    render={<Link href={item.url} />}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {i !== navigations.length - 1 && (
          <Separator className="hidden group-data-[state=collapsed]:block bg-sidebar-border" />
        )}
      </Fragment>
    );
  });
}
