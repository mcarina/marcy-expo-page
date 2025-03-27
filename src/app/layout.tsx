import type { Metadata } from "next";
// import { Suspense } from "react";
import "./globals.css";
import { NavHome } from "../components/NavHome";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/NavMobile";

export const metadata: Metadata = {
  title: "Marcy Page Expo",
  description: "Create next app",
};

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
 
  return (
    <html lang="pt-br">
      <body>
        <div className={cn("min-h-screen bg-background font-sans antialiased")}>
          <NavHome/>
          <MobileNav/>
          {children}
        </div>
      </body>
    </html>
  );
}
