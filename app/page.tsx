import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";

export default async function Index() {
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
    <div className="flex-1 w-full flex flex-col gap-20 items-center">

      <div className="animate-in flex-1 flex flex-col opacity-0 max-w-4xl px-3">
        {/* <Header /> */}
        <h3 className="font-bold text-xl my-3">링크보관소 프로젝트 제작중....</h3>

        <main className="flex-1 flex flex-col mt-3">

          <h3 className="font-bold text-3xl mb-1">Github</h3>
          <a href="https://github.com/YoHaiYo/linkport_nextjs_try" target="_blank" className="mb-5">https://github.com/YoHaiYo/linkport_nextjs_try</a>

          <h3 className="font-bold text-3xl mb-1">Deploy</h3>
          <a href="https://linkport-nextjs-try.vercel.app/" target="_blank" className="mb-5">https://linkport-nextjs-try.vercel.app/</a>

        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
