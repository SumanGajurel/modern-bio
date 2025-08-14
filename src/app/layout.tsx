import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ChatWidget from "@/components/chat-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suman Gajurel — Research Scientist",
  description: "Modern bio & portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
