"use client";

import Image from "next/image";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarTrigger,
} from "../ui/sidebar";

export default function AppSidebarHeader() {
  const { toggleSidebar } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          className="data-[slot=sidebar-menu-button]:p-1.5!"
          onClick={toggleSidebar}
        >
          {/* <CommandIcon className="size-5!" />
          <span className="text-base font-semibold">Acme Inc.</span> */}
          <Image
            src="/img/prime-logo.avif"
            alt="Prime Logo"
            width={32}
            height={32}
          />

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Prime</span>
            <span className="truncate text-xs text-muted-foreground">
              Home Management
            </span>
          </div>
          <SidebarTrigger />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
