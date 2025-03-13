import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Roboto, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import config from "@/config";
import "./globals.css";
import "./styles/auth.css";

// Define fonts with display: swap for better performance
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Metadata API
export const metadata: Metadata = {
  title: {
    default: config.siteName,
    template: `%s | ${config.siteName}`
  },
  description: config.siteDescription,
  keywords: ["AI", "French AI", "Renewable energy", "TrueFalse", "Phyllia"],
  authors: [{ name: "TrueFalse" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${roboto.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
