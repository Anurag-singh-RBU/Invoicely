"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import BackBtn from "./ui/backbtn"
import { authClient } from "@/lib/auth-client"
import { useRouter, useSearchParams } from "next/navigation"

const formSchema = z.object({

  password: z.string().min(8 , "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8 , "Password must be at least 8 characters long"),
  
});

export function ResetPwdForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token") as string;

  const [isLoading , setIsLoading] =  useState(false);
      
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    setIsLoading(true);

    if(values.password !== values.confirmPassword){

      toast.error("Passwords do not match !!");
      setIsLoading(false);
      return;

    }
    const { error } = await authClient.resetPassword({

      newPassword: values.password,
      token: token

    });

    if(error){

      toast.error(error.message as string);

    }

    else{

      toast.success("Password reset successfully !!");
      router.push("/login");

    }

    setIsLoading(false);

  }

  return (
    <div className={cn("flex flex-col gap-6 jetbrains-mono", className)} {...props}>
      <div className="w-full justify-start items-start">
        <BackBtn></BackBtn>
      </div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl instrument-serif tracking-wider" style={{wordSpacing: "4px"}}>Reset Password</CardTitle>
          <CardDescription className="jetbrains-mono tracking-tight dark:text-white mb-3">
            Enter your new Password
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FieldGroup>
              <Field className="urbanist tracking-wider"> 
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-2 font-bold">New Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your new password" {...field}/>
                      </FormControl>
                      <FormMessage className="text-xs ml-1"/>
                    </FormItem>
                  )}
                />
              </Field>
              <Field className="urbanist tracking-wider"> 
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-2 font-bold">Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Confirm your new password" {...field}/>
                      </FormControl>
                      <FormMessage className="text-xs ml-1"/>
                    </FormItem>
                  )}
                />
              </Field>
              <Field>
                <Button type="submit" disabled = {isLoading}>
                  {isLoading ? <Loader2 className="animate-spin size-4"/> : "Confirm"}
                </Button>
                <FieldDescription className="text-center geist-sans text-sm text-gray-500 dark:text-gray-400" style={{wordSpacing: "2px", letterSpacing: "0.5px"}}>
                  Don&apos;t have an account ? <a href="/signup" className="text-purple-700 dark:text-purple-500 tracking-normal jetbrains-mono" 
                  style={{textDecoration: "none" , wordSpacing: "-2px"}}>Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </Form>
        </CardContent>
      </Card>
    </div>
  )
}
