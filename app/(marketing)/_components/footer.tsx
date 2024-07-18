import { Button } from "@/components/ui/button"
import Link from "next/link"


export const Footer = () =>{
    return (
        <div className="flex items-center w-full p-6 pg-background bg-[#F9F6F2] dark:bg-[#1F1F1F]">
            <div className="md:ml-auto w-full justify-between
            md:justify-end flex items-center gap-x-6 text-muted-foreground">
                <Button variant="link">
                    <Link href="/privacy">Privacy Policy</Link>
                </Button>
                <Button variant="link">
                    <Link href="/terms">Terms & Conditions</Link>
                </Button>
            </div>
        </div>
    )
}