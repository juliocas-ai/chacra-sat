import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LanguageProvider } from "@/context/language-context";
import { getSiteUrl, SHARED_OPEN_GRAPH, SITE_META } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: SITE_META.defaultTitle,
    template: `%s | ${SITE_META.name}`,
  },
  description: SITE_META.description,
  applicationName: SITE_META.name,
  keywords: [...SITE_META.keywords],
  authors: [...SITE_META.authors],
  creator: SITE_META.creator,
  publisher: SITE_META.publisher,
  category: "agriculture",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: SITE_META.shortTitle,
    description: SITE_META.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.shortTitle,
    description: SITE_META.description,
  },
  appleWebApp: {
    capable: true,
    title: SITE_META.name,
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1d3a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full antialiased",
        inter.variable,
        spaceGrotesk.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
