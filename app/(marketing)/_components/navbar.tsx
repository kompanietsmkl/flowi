"use client";

import { useScrollTop } from "@/hooks/scroll";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/modetoggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    return(
        <div className={cn(
            "z-[9999] bg-[#F9F6F2] dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4",
            scrolled && "border-b shadow-sm "
        )}>
            <div className="px-4">
                <Link href="/"><Logo/></Link>
            </div>
            <div className="md:ml-auto md:justify-end justify-between w-full
            flex items-center gap-x-4">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading &&(
                    <>
                        <SignUpButton mode="modal">
                            <Button variant="default" className="bg-green-600 dark:bg-white
                                transition-all ease-in-out hover:-translate-y-1 duration-300">
                                Register
                            </Button>
                        </SignUpButton>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm" className=" bg-transparent border-black dark:border-white
                                transition-all ease-in-out hover:-translate-y-1 duration-300">
                                Log in
                            </Button>
                        </SignInButton>
                    </>
                )}

                {isAuthenticated && !isLoading &&(
                    <>
                        <Button variant="ghost" asChild>
                            <Link href="/documents">
                                Enter Flowi
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                    
                )}
                <ModeToggle />
            </div>
        </div>
    )
}