"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function ThemeIcon({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      aria-label="Toggle theme"
      className={cn(
        "relative flex items-center justify-center rounded-full w-9 h-9 border border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer overflow-hidden transition-all duration-300 select-none",
        className,
      )}
      {...props}
    >
      {/* Icon Sun (Muncul saat Light Mode) */}
      <Sun
        className={`h-4 w-4 transition-all duration-300 absolute ${
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />

      {/* Icon Moon (Muncul saat Dark Mode) */}
      <Moon
        className={`h-4 w-4 transition-all duration-300 absolute ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </div>
  );
}
