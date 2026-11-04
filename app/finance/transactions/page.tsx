"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function FinanceTransactionsPage() {
  const SidebarState = useSidebar();
  const pathname = usePathname();
  return (
    <div>
      <div>
        page for table of transactions{" "}
        {SidebarState.isMobile ? "mobile" : "desktop"}
      </div>
      <div>
        <pre>
          <code>{JSON.stringify({ SidebarState, pathname }, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
