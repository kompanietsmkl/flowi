"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import Title from "./title";
import { Banner } from "./banner";

interface NavbarProps {
    isCollapsed: boolean;
    onResetWidth: () => void;
};

export const Navbar = ({
    isCollapsed,
    onResetWidth,
}: NavbarProps) => {
    const params = useParams();
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId as Id<"documents">,
    });

    
    return (
        <>
            <nav className="bg-background dark:bg-[#1F1F1F]
                px-3 py-2 w-full flex items-center gap-x-2">
                {isCollapsed && (
                    <MenuIcon
                        role="button"
                        onClick={onResetWidth}
                        className="w-6 h-6 text-muted-foreground"
                    />
                )}
                <div>
                    {document === undefined && <nav className="bg-background dark:bg-[#1F1F1F]
                    px-3 py-2 w-full flex items-center gap-x-4"><Title.Skeleton/></nav>}
                    {document !== undefined && document !== null && <Title initialData={document}/>}
                </div>
                
            </nav>
            {document?.isArchived &&(
                <Banner/>
            )}
        </>
    )  
}