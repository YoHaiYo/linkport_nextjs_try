import { GeistSans } from "geist/font/sans";
import "./globals_tailwind.css";
import "./globals_my.css";
// import "./globals_bootstrap.css";
import HomeButton from "@/components/HomeButton";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { HomeNavbar } from "./(home)/HomeNavbar";
import { HomeFooter } from "./(home)/HomeFooter";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "LinkPort",
  description: "LinkPort description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-foregroundxxx overflow-x-hidden">
        <HomeNavbar />
        <main>{children}</main>
        <HomeFooter />
      </body>
    </html>
  );
}
