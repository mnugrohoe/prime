"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  EllipsisVerticalIcon,
  CircleUserRoundIcon,
  BellIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  Settings2Icon,
} from "lucide-react";
import { toast } from "../ui/toast";
import { useTheme } from "next-themes";
import { getColorByString, getInitials } from "@/lib/utils";
import Link from "next/link";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    role: string;
    avatar: string;
  };
}) {
  const { theme, setTheme } = useTheme();
  const { isMobile } = useSidebar();

  const isDark = theme === "dark";
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            <User
              user={user}
              right={<EllipsisVerticalIcon className="ml-auto size-4" />}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <User user={user} />
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CircleUserRoundIcon /> Account
              </DropdownMenuItem>
              <DropdownMenuItem
                render={<Link href="/settings" />}
                className="cursor-pointer"
              >
                <Settings2Icon /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon /> Notifications
              </DropdownMenuItem>
              <DropdownMenuCheckboxItem
                checked={isDark}
                onCheckedChange={(checked) => {
                  setTheme(checked ? "dark" : "light");
                  toast.add({
                    title: "Dark mode",
                    description: checked ? "Enabled" : "Disabled",
                  });
                }}
                className="cursor-pointer"
                hideIndicator
              >
                {!isDark ? (
                  <>
                    <MoonIcon />
                    Dark mode
                  </>
                ) : (
                  <>
                    <SunIcon />
                    Light mode
                  </>
                )}
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <LogOutIcon /> Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

const User = ({
  user,
  right,
}: {
  user: { name: string; role: string; avatar: string };
  right?: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="size-8 group-data-[state=collapsed]:size-6">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback
            style={{ ...getColorByString(user.name).style }}
            className="group-data-[state=collapsed]:text-xs"
          >
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">{user.name}</span>
          <span className="truncate text-xs text-muted-foreground">
            @{user.role}
          </span>
        </div>
      </div>
      {right}
    </>
  );
};
