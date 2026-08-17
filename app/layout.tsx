import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed K B - Software Engineer",
  description: "Portfolio of Muhammed K B, Software Engineer and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-inter antialiased bg-dark text-white"
      >
        {children}
      </body>
    </html>
  );
}
