import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
const Navbar = async () => {
  const { userId } = await auth();
  // const user = await currentUser();
  // console.log(user);
  return (
    <div className="bg-cyan-950 rounded-b-xl">
      <div className="flex justify-between py-4 px-6">
        <div>
          <Link href="/">
            <li>Home Page</li>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/client">
            <li>Client Page</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {!userId? (
            <>
              <Link href="/sign-in">
                <li>Sign In</li>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/admin"}>
                <li>Profile</li>
              </Link>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
