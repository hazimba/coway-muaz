import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Muaz Coway | Your Trusted Home Wellness Partner",
  description:
    "Muaz Coway provides Coway water purifiers, air purifiers, and wellness solutions with trusted service in Malaysia.",
  keywords: [
    "Muaz Coway",
    "Coway Malaysia",
    "Coway water filter",
    "Coway service",
  ],
  openGraph: {
    title: "Muaz Coway",
    description: "Your Trusted Home Wellness Partner",
    url: "https://muaz-coway.vercel.app",
    siteName: "Muaz Coway",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html>
  );
}
