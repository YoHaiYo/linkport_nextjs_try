// "use client"

import AuthButton from "@/components/AuthButton";
import { HomeNavbar } from "./HomeNavbar";
import { Logo, NavMenu } from "./ClientGroup";
import { HamburgerBtn } from "./HamburgerBtn";

export default function Test() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* contents */}
      <hr />
      <section className="bg-white">
        <nav className="flex justify-between p-6 px-4">
          <div className="flex justify-between items-center w-full">
            <Logo />
            <NavMenu />
            <AuthButton />
            <HamburgerBtn />
          </div>
        </nav>
      </section>
      {/* /contents */}
    </section>
  );
}