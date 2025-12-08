"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        flex items-center gap-2 
        px-3 py-2 
        rounded-full 
        bg-white/40 backdrop-blur dark:bg-neutral-900
        shadow-sm border border-white/20
        hover:bg-white/60 transition cursor-pointer
      ">
      <div
        className="
          w-7 h-7 rounded-full 
          bg-black/30 flex items-center justify-center dark:bg-white
        ">
        <ChevronLeft size={18} className="text-white dark:text-black"/>
      </div>

      <span className="text-gray-700 font-semibold tracking-wide dark:text-white">
        BACK
      </span>
    </button>
  );
}
