// layout-client, as use client was conflicting with exporting metadata in layout.tsx

"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import SideNav from "@/components/side-nav";
import PageWrapper from "@/components/page-wrapper";
import MarginWidthWrapper from "@/components/margin-width-wrapper";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <div className="flex">
      {!isHomepage && <SideNav />}
      <main className="flex-1">
        {!isHomepage ? (
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        ) : (
          children
        )}
      </main>
    </div>
  );
}