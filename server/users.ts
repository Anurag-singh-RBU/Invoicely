"use server"

import { auth } from "@/lib/auth";

export const signIn = async (email: string , password: string) => {
    try{
        
        await auth.api.signInEmail({
            body: {
                email: email,
                password: password
            }
        })

        return{

            success: true,
            message: "Login successful !!"

        }

    } catch(error){

        const err = error as Error;

        return{

            success: false,
            message: err.message || "Login failed !!"

        }

    }
}

export const signUp = async (username: string , email: string , password: string) => {
    try{
        
        await auth.api.signUpEmail({
            body: {
                name: username,
                email: email,
                password: password,
            }
        })

        return{

            success: true,
            message: "Signup successful !!"

        }
        
    } catch(error){

        const err = error as Error;

        return{

            success: false,
            message: err.message || "Signup failed !!"

        }

    }
}