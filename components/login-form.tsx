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
  FieldSeparator,
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
import { signIn } from "@/server/users"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import BackBtn from "./ui/backbtn"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8 , "Password must be at least 8 characters long"),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter();
  const [isLoading , setIsLoading] =  useState(false);
  const [isLoading2 , setIsLoading2] =  useState(false);

  const signInWithGoogle = async () => {
    try {

      setIsLoading2(true);
      await authClient.signIn.social({

        provider: "google",
        callbackURL: "/create/invoice"

      });

    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (error) {

      toast.error("Failed to sign in with Google.");

    }
    finally {

      setIsLoading2(false);

    }
  }
      
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    setIsLoading(true);
    const { success , message} = await signIn(values.email , values.password);

    if(success){

      toast.success(message as string);
      router.push("/create/invoice");

    }

    else{

      toast.error(message as string);

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
          <CardTitle className="text-2xl instrument-serif tracking-wider" style={{wordSpacing: "4px"}}>Welcome back</CardTitle>
          <CardDescription className="jetbrains-mono tracking-tight dark:text-white">
            Login with your Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FieldGroup>
              <Field>
                <Button variant="outline" type="button" 
                  style={{wordSpacing: "2px", letterSpacing: "0.5px"}} 
                  className="geist-sans text-black dark:text-white" 
                  onClick={signInWithGoogle}
                  disabled={isLoading2}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={isLoading2 ? "hidden" : ""}>
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"/>
                  </svg>
                  {isLoading2 ? <Loader2 className="animate-spin size-4"></Loader2> : "Login with Google"}
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm geist-sans text-gray-400" style={{wordSpacing: "2px", letterSpacing: "0.5px"}}>
                Or continue with
              </FieldSeparator>
              <Field className="urbanist tracking-wider"> 
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-2 font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field}/>
                      </FormControl>
                      <FormMessage className="text-xs ml-1"/>
                    </FormItem>
                  )}
                />
              </Field>
              <Field>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="ml-2 font-bold urbanist tracking-wider">Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your password" {...field} className="urbanist tracking-wider"/>
                        </FormControl>
                        <FormMessage className="text-xs ml-1"/>
                      </FormItem>
                    )}
                  />
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline geist-sans">
                    Forgot your password ?
                  </a>
                </div>
              </Field>
              <Field>
                <Button type="submit" disabled = {isLoading}>
                  {isLoading ? <Loader2 className="animate-spin size-4"/> : "Login"}
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
