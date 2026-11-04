"use client";

import * as React from "react";

import { Navigation } from "./navigation";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import AppSidebarHeader from "./app-sidebar-header";
import { Separator } from "../ui/separator";

const data = {
  user: {
    name: "Eko Saputro",
    role: "Suami",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="group-data-[state=collapsed]:overflow-y-auto">
        <Navigation />
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
