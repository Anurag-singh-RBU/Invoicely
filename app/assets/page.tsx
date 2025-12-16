import { authClient } from "@/lib/auth-client";
import AssetsPage from "./assets";
import React from "react";
import LoginDialog from "@/components/login-dialog";

const Page = async () => {

  const { data: session } = await authClient.getSession();

  if (!session?.user) {
    return (
      <div className="relative h-full w-full">
        <LoginDialog/>
      </div>
    );
  }

  return <AssetsPage/>;

};

export default Page;