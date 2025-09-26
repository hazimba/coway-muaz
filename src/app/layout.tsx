import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Muaz Coway | Trusted Coway Service in Malaysia",
  description:
    "Muaz Maarof, a dedicated Coway Service professional, helping Malaysian families enjoy cleaner air and healthier water with trusted Coway products.",
  keywords: [
    "Coway Malaysia",
    "Coway service",
    "water purifier",
    "air purifier",
    "Muaz Coway",
    "Coway agent",
    "Coway Malaysia promotion",
  ],
  authors: [{ name: "Muaz Maarof" }],
  openGraph: {
    title: "Muaz Coway | Trusted Coway Service in Malaysia",
    description:
      "Helping Malaysian families with Coway water purifiers and air purifiers. Contact Muaz for the best Coway service and promotions.",
    url: "https://muaz-coway.vercel.app",
    siteName: "Muaz Coway",
    images: [
      {
        url: "https://muaz-coway.vercel.app/profile-muaz.jpeg",
        width: 1200,
        height: 630,
        alt: "Muaz Coway - Trusted Coway Service",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muaz Coway | Trusted Coway Service in Malaysia",
    description:
      "Cleaner air, healthier water. Contact Muaz Coway for the best Coway service in Malaysia.",
    images: ["https://muaz-coway.vercel.app/profile-muaz.jpeg"],
  },
  metadataBase: new URL("https://muaz-coway.vercel.app"),
  alternates: {
    canonical: "https://muaz-coway.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Muaz Coway" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html>
  );
}
