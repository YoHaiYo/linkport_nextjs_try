import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCheckCircle,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { HomeNavbar } from "./(home)/HomeNavbar";
import { HomeHeader } from "./(home)/HomeHeader";
import { HomeFeatures } from "./(home)/HomeFeatures";
import { HomeHowWorks } from "./(home)/HomeHowWorks";
import { HomePricing } from "./(home)/HomePricing";

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
    <>
      {/* 헤더 */}
      <HomeHeader />

      {/* features */}
      <HomeFeatures />

      {/* How it works */}
      <HomeHowWorks />

      {/* Pricing */}
      <HomePricing />
    </>
  );
}
