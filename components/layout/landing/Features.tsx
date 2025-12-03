import { ModernCardDescription, ModernCardTitle } from "@/components/ui/modern-card";
import React from "react";

const Features = () => {
  return (
    <div className="grid grid-flow-row sm:h-[150px] sm:grid-cols-3">
      <div className="flex h-40 flex-col gap-3 border-b border-dashed p-4 sm:h-auto">
        <ModernCardTitle>Beautiful</ModernCardTitle>
        <ModernCardDescription>
          Professionally designed and visually appealing invoices can increase the chances of clients paying promptly.
        </ModernCardDescription>
      </div>
      <div className="flex h-40 flex-col gap-3 border-b border-dashed p-4 sm:h-auto sm:border-l">
        <ModernCardTitle>Free & Unlimited</ModernCardTitle>
        <ModernCardDescription>
          Create and send as many invoices as you need — no limits, no hidden costs, just seamless billing freedom.
        </ModernCardDescription>
      </div>
      <div className="flex h-40 flex-col gap-3 border-b border-dashed p-4 sm:h-auto sm:border-l">
        <ModernCardTitle>Safe & Open Source</ModernCardTitle>
        <ModernCardDescription>
          Your data stays yours — we never track, sell, or share it. Store everything locally or securely on our server
          — the choice is yours.
        </ModernCardDescription>
      </div>
    </div>
  );
};

export default Features;