import { Suspense } from "react"
import { ResetPwdForm } from "@/components/resetpwd-form"

export default function ForgotPwdPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Suspense fallback={<div>Loading</div>}>
          <ResetPwdForm/>
        </Suspense>
      </div>
    </div>
  )
}
