import { createClient } from "@/utils/supabase/server";
import { colors } from "@/utils/theme/colors";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  // 로그인 성공시 user info의 데이터를 가져오고 객체로 할당함
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hello, {user.email} !
      <Link
        className="py-2 px-4 rounded-md no-underline text-violet-50 bg-violet-500 hover:bg-violet-600 font-medium focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md"
        href={"/dashboard"}
      >
        Dashboard
      </Link>
      <form action={signOut}>
        <button className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <Link
        href="/login"
        className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="inline-block py-2 px-4 text-sm leading-5 text-violet-50 bg-violet-500 hover:bg-violet-600 font-medium focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md"
      >
        Sign Up
      </Link>
    </div>
  );
}
