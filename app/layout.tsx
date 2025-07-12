import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';

const nevera = localFont({
  variable: '--font-nevera',
  src: './fonts/Nevera-Regular.otf',
});

const bronil = localFont({
  variable: '--font-bronil',
  src: './fonts/Bronill.otf',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Home Renovation',
  description: 'A Next.js app for home renovation services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nevera.variable} ${bronil.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
