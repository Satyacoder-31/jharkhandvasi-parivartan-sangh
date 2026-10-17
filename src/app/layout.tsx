import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingHelpline from "@/components/FloatingHelpline";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteContentProvider } from "@/context/SiteContentContext";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jpsngo.org"),
  title: "Jharkhandvasi Parivartan Sangh | सेवा से परिवर्तन की ओर",
  description:
    "Jharkhandvasi Parivartan Sangh (JPS, Regd. No. E-30004/MUMBAI, Estd. 2005) is a grassroots social welfare NGO serving migrant workers, children, elders, and cultural heritage across Mumbai and Jharkhand. Helpline: +91 78080 08058 / +91 90222 88222.",
  keywords: [
    "Jharkhandvasi Parivartan Sangh",
    "JPS NGO",
    "NGO in Borivali West",
    "NGO in Mumbai",
    "Migrant worker welfare Mumbai",
    "Senior citizen health checkups",
    "Child education NGO",
    "Arvind Arya",
    "Bhagwan Birsa Munda Smruti",
    "Giridih NGO",
    "80G Tax Exemption NGO",
  ],
  openGraph: {
    title: "Jharkhandvasi Parivartan Sangh | सेवा से परिवर्तन की ओर",
    description:
      "Grassroots social welfare organization serving migrant workers, children, senior citizens and vulnerable families across Mumbai and Jharkhand. Helpline: +91 78080 08058 / +91 90222 88222.",
    url: "https://jpsngo.org",
    siteName: "Jharkhandvasi Parivartan Sangh",
    images: [
      {
        url: "/images/hero-forest.jpg",
        width: 1200,
        height: 675,
        alt: "Jharkhandvasi Parivartan Sangh - Nature & Community Impact",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${dmSerif.variable} ${plusJakarta.variable}`} data-theme="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        {/* Instant Script: Guarantee scroll position starts at (0, 0) on refresh & sync dark theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                var t = localStorage.getItem('jps-theme');
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#071F14] text-[#F7F5EC] dark:bg-[#071F14] dark:text-[#F7F5EC] antialiased selection:bg-[#B8CBA5] selection:text-[#123B2A] transition-colors duration-300">
        <ThemeProvider>
          <SiteContentProvider>
            <Preloader />
            <CustomCursor />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingHelpline />
          </SiteContentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
