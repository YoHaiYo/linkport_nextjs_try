import { GeistSans } from "geist/font/sans";
import "./globals.css";
import HomeButton from "@/components/HomeButton";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {/* nav */}
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              <HomeButton />
              <Link className="bg-blue-300 p-2 rounded" href={"/notes"}>Get Started</Link>
              {isSupabaseConnected && <AuthButton />}
            </div>
          </nav>
          {/* /nav */}
          {children}
        </main>
      </body>
    </html>
  );
}
