import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Roboto, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import config from "@/config";
import "./styles/main.css";

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

// Custom theme for Stack Auth
const stackTheme = {
  light: {
    background: '#FFFFFF',
    foreground: '#222222',
    card: '#FFFFFF',
    cardForeground: '#222222',
    primary: '#3A5A40',
    primaryForeground: '#FFFFFF',
    secondary: '#A3B18A',
    secondaryForeground: '#FFFFFF',
    accent: '#B5C1A3',
    accentForeground: '#222222',
    border: 'rgba(0, 0, 0, 0.1)',
    input: 'rgba(0, 0, 0, 0.15)',
    ring: '#3A5A40',
  },
  dark: {
    background: '#121820',
    foreground: '#E2E8F0',
    card: '#1E293B',
    cardForeground: '#E2E8F0',
    primary: '#4A6D5D',
    primaryForeground: '#FFFFFF',
    secondary: '#5E8A70',
    secondaryForeground: '#FFFFFF',
    accent: '#4E6A5C',
    accentForeground: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.1)',
    input: 'rgba(255, 255, 255, 0.15)',
    ring: '#5E8A70',
  },
  radius: '8px',
};

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

// Script to prevent theme flickering on page load
function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Get theme from localStorage or system preference
            const theme = localStorage.getItem('theme') || 
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            
            // Apply theme immediately to prevent flash
            document.documentElement.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
            document.documentElement.classList.remove(theme === 'dark' ? 'light-theme' : 'dark-theme');
            
            // Update theme meta tag for browser UI
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (metaThemeColor) {
              metaThemeColor.setAttribute('content', theme === 'dark' ? '#0B1120' : '#F0EFE9');
            }
            
            // Enable transitions after initial load
            window.addEventListener('DOMContentLoaded', () => {
              setTimeout(() => document.documentElement.classList.add('theme-transition-ready'), 100);
            });
          })();
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${roboto.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F0EFE9" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        <ThemeScript />
      </head>
      <body>
        <StackProvider app={stackServerApp}>
          <StackTheme theme={stackTheme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
