import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Notes from "./Notes"

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("userdata : ", user.id)

  if (!user) {
    return redirect("/login");
  }


  return (
    <div className="">
      {/* <div className="w-full">
        <div className="py-6 font-bold bg-green-300 text-center">
          This is a DashboardPage that you can only see as an authenticated
          user
        </div>
      </div> */}
      <Notes userid={user.id} useremail={user.email} />

    </div>
  );
}
