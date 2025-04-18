import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Projects",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar title="Projects" />
      <main className="flex-1 overflow-hidden">{children}</main>
    </>
  );
}
