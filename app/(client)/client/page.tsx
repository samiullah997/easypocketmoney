"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full mt-8">
      <h1 className="text-2xl">Hello <b className="text-red-600">{user?.firstName}</b> you are welcome to <b className="text-green-600">easypocketmoney</b></h1>
    </div>
  );
};

export default ClientPage;
