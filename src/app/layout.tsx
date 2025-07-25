import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
}) as any;

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
}) as any;

export const metadata: Metadata = {
  title: "Poliform - Contemporary Interior Design & Architecture",
  description: "Poliform crafts modern, minimalist interior designs blending timeless elegance and innovative living. Explore our portfolio of architectural and furniture projects.",
  keywords: [
    "Interior design",
    "Contemporary interiors",
    "Minimalist design",
    "Architecture",
    "Modern furniture",
    "Poliform projects",
    "Interior architecture",
    "Home design",
    "Living space design",
  ],
  authors: [{ name: "Nicolás Alvarado", url: "https://nico-freelance.vercel.app" }],
  creator: "Nicolás Alvarado",
 
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
