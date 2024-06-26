import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
// import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could_not_authenticate_user");
    }

    return redirect("/dashboard");
    // return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log("error : ", new Date().toLocaleTimeString(), error);
      return redirect("/login?message=Could_not_authenticate_user");
    }
    // alert("check your email and verify authentication code")
    return redirect("/login?message=Check_email_to_continue_sign_in_process");
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            {/* contents */}
            <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
              <label className="text-md" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
              />
              <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••"
                required
              />
              <SubmitButton
                formAction={signIn}
                className="bg-violet-500 rounded-md px-4 py-2 text-foreground mb-2"
                pendingText="Signing In..."
              >
                Sign In
              </SubmitButton>
              <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                Don't you have an account yet?{" "}
                <Link href={"/signup"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign Up here
                </Link>
                {/* <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign Up
                </a> */}
              </p>
              {/* <SubmitButton
                formAction={signUp}
                className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
                pendingText="Signing Up..."
              >
                Sign Up
              </SubmitButton> */}
              {searchParams?.message && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                  {searchParams.message}
                </p>
              )}
            </form>
            {/* /contents */}
          </div>
        </div>
      </div>

      {/* footer 밑에 빈공간 제거용 */}
      <div style={{ marginBottom: 25 }}></div>
    </section>
  );
}
