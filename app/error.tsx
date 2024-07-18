"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const Error = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/error.png"
                alt="Error"
                width={300}
                height={300}
            />
            <h2 className="text-xl font-medium">Something went wrong!</h2>
            <Button asChild variant="default" className="h-10">
                
                <Link href="/documents">
                    <HomeIcon className="w-5 h-5 mr-2"/>
                    Go Home
                </Link>
            </Button>
        </div>  
     );
}
 
export default Error;