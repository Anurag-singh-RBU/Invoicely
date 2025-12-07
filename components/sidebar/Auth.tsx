"use client";

import { SidebarMenu, SidebarMenuItem } from '../ui/sidebar';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const Auth = () => {

  const { data : session } = authClient.useSession();

  if(!session){

    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="bg-muted-foreground/5 flex flex-col gap-1 rounded-lg p-4 shadow-xs">
            <div className="instrument-serif font-semibold tracking-wider">Login</div>
            <p className="text-muted-foreground text-xs">
              Login to your account to save your data and access your data anywhere
            </p>
            <div className='w-2 h-auto mt-3'>
              <Link href="/login">
                <Button variant="default">Login</Button>
              </Link>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    );

  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="bg-muted-foreground/5 flex flex-col gap-1 rounded-lg p-4 shadow-xs">
          <div className="flex gap-3 items-center">
            <Image src={session?.user?.image || "/auth-default.png"} alt="logo" width={38} height={38} className='rounded-md'/>
            <div className='flex flex-col'>
              <span className='instrument-sans truncate font-semibold capitalize'>{(session.user.name).split("_").slice(-1)[0]}</span>
              <span className='text-xs geist-sans text-gray-600 tracking-wider max-w-[150px] truncate block'>{session.user.email}</span>
            </div>
          </div>
          <div className='w-auto h-auto mt-3'>
            <Button variant="destructive" className='flex justify-between shadow-md' onClick={() => authClient.signOut()}>
              Logout <LogOut/>
            </Button>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default Auth