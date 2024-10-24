import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;

    if (!isAuth) {
        redirect("/");
    }
  return (
    <div className="flex flex-col items-center justify-center h-full mt-8">
      <UserProfile />
    </div>
  );
};

export default Page;
