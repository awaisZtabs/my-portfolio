import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import site from "../data/site";
import { siteConfig } from "../lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.summary,
  metadataBase: new URL("https://your-portfolio.example.com"),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    url: "https://your-portfolio.example.com",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const attrs=["bis_skin_checked","data-locator-client-url"]; const clean=()=>{const all=document.getElementsByTagName('*');for(let i=0;i<all.length;i++){const el=all[i];for(const n of attrs){if(el.hasAttribute(n)) el.removeAttribute(n);}}}; clean(); new MutationObserver(clean).observe(document.documentElement,{subtree:true,childList:true,attributes:true}); } catch(e) {}`,
          }}
        />
        <div className="bg-canvas bg-grid" />
        {/* Fixed sidebar on desktop */}
        <Sidebar />
        {/* Content wrapper shifts right on desktop */}
        <div className="lg:pl-[320px] min-h-screen">
          <Navbar />
          <main
            id="home"
            suppressHydrationWarning
            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10"
          >
            {children}
          </main>
          <Footer />
        </div>
        {siteConfig.googleAnalyticsId
          ? <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
          : null}
      </body>
    </html>
  );
}
