import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "About Me",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-1 overflow-hidden">{children}</main>;
}
