import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbr";
import Footer from "@/components/layout/Footer";
import AppProviders from "@/components/layout/AppProviders";
import { BRAND_TAGLINE } from "@/lib/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataTitle = `Pennar Feeds | ${BRAND_TAGLINE}`;
const metadataDescription = `Pennar Feeds manufactures premium floating fish feed for aquaculture. ${BRAND_TAGLINE} with quality nutrition for healthy fish growth.`;

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
