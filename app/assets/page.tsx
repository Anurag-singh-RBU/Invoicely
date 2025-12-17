"use client";

import { authClient } from "@/lib/auth-client";
import AssetsPage from "./assets";
import LoginDialog from "@/components/login-dialog";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session , setSession] = useState<any>(null);

  useEffect(() => {

    authClient.getSession().then(({ data }) => {
      setSession(data);
      setLoading(false);
    });

  }, []);

  if(loading) return null;

  if(!session?.user){

    return (

      <div className="relative h-full w-full">
        <LoginDialog/>
      </div>

    );
  }

  return <AssetsPage/>;
  
};

export default Page;
