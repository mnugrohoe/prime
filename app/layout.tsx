import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toast";
import { ThemeProvider } from "next-themes";

const instrumentSansHeading = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime - Home Management",
  description: "A home management app for tracking finances, tasks, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        instrumentSansHeading.variable,
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        jetBrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <main>{children}</main>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
