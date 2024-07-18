"use client";

import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";


export const Heading = () =>{
   const {isAuthenticated} = useConvexAuth();
   return(
      <section className="section relative pt-28 md:pt-36">
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
                Your ideas, documents and plans are unified.
            </h1>
            <h3 className="text-sm sm:text-lg md:text-xl font-normal text-muted-foreground dark:text-white">
               Flowi is a cloud workspace where <br />
               your ideas become action.
            </h3>
            {isAuthenticated &&(
               <Button asChild size="lg">
                  <Link href="/documents">
                     Enter Flowi
                  </Link>
               </Button>
            )}
            {!isAuthenticated &&(
               <SignUpButton mode="modal">
                  <Button size="lg">
                     Get Flowi free
                  </Button>
               </SignUpButton>
            )}
        </div>
      </section>
    )
}