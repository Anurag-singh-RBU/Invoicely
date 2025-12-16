"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginDialog() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="py-4 px-3">
          <DialogTitle className="text-xl text-red-600 tracking-wider" style={{wordSpacing: "3px"}}>Login Required</DialogTitle>
        </DialogHeader>

          <DialogDescription>
            Access to this page is restricted.
            Log in to securely manage and view your assets.
            Sign in to continue.
          </DialogDescription>
        <DialogFooter className="gap-1 sm:justify-end">
            <Link href="/create/invoice">
            <Button variant="outline" className="cursor-pointer bg-neutral-900 text-white tracking-wider">Back</Button>
            </Link>
            <Link href="/login">
                <Button className="cursor-pointer tracking-wider">Login</Button>
            </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
