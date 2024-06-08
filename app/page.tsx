"use client"

import { HomeNavbar } from "./(home)/HomeNavbar";
import { HomeHeader } from "./(home)/HomeHeader";
import { HomeFeatures } from "./(home)/HomeFeatures";
import { HomeHowWorks } from "./(home)/HomeHowWorks";
import { HomePricing } from "./(home)/HomePricing";
import { ExampleComponent2 } from "@/components/templet/ExampleComponent2";
import AuthButton from "@/components/AuthButton";

export default function Index() {
  // const canInitSupabaseClient = () => {
  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();

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
