import type { Metadata } from "next";
// import { Suspense } from "react";
import "./globals.css";
import { NavHome } from "../components/NavHome";

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
        <div className="relative flex min-h-screen flex-col">
          <NavHome/>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
