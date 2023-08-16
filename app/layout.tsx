// NextJS
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Components
import NavBar from "@/components/NavBar/NavBar";
// Providers
import ToasterProvider from "@/providers/ToastProvider";
import BG from "@/components/BG";
// Auth Provider
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "JJ Serene Therapy",
  description:
    "Manual Osteopathic Therapy profesional located in the Edmonton Area",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <NavBar />
          <BG>
            {children}
            {/* <HireMe/>
        <Footer/> */}
          </BG>
        </body>
      </html>
    </ClerkProvider>
  );
}

// toast.success('Look at my styles.', {
//   style: {
//     border: '1px solid #713200',
//     padding: '16px',
//     color: '#713200',
//   },
//   iconTheme: {
//     primary: '#713200',
//     secondary: '#FFFAEE',
//   },
// });
