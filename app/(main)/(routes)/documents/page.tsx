"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
const DocumentsPage = () => {
    const {user} = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({
            title: "Untitled",
        })

        toast.promise(promise, {
            loading: "Creating...",
            success: "Page created!",
            error: "Failed to create page",
        })
    }

    return ( 
        <div className="h-full flex flex-col items-center justify-center
            space-y-4">
            <Image
                src="/empty.png"
                alt="empty"
                width="300"
                height="300"
            />
            <h2 className="text-lg font-bold">Shoot... {user?.firstName }, it&apos;s empty here.</h2>
            <p className="text-sm">Create a document to get started.</p>
            <Button onClick={onCreate} size="default" className="w-28 h-9">
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create
            </Button>
        </div>
     );
}
 
export default DocumentsPage;