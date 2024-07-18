"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { ImageIcon, X } from "lucide-react";
import { useCoverImage } from "@/hooks/use-coverimage";
import { removeCoverImage } from "@/convex/documents";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

interface CoverImageProps {
    url?: string;
    preview?: boolean;
}
export const Cover = ({
    url,
    preview
}: CoverImageProps) => {
    const {edgestore} = useEdgeStore();
    const params = useParams();
    const coverImage = useCoverImage();
    const removeCoverImage = useMutation(api.documents.removeCoverImage);

    const onRemove = async() => {
        if(url){
            await edgestore.publicFiles.delete({
                url: url
            })
        }
        removeCoverImage({
            id: params.documentId as Id<"documents">
        });
    }

    return ( 
        <div className={cn("relative w-full h-[35vh] group",
            !url && "h-[6vh]"
        )}>
            {!!url &&(
                <Image
                    fill
                    src={url}
                    className="object-cover"
                    alt="Cover"
                />
            )}
            {url && !preview &&(
                <div className="opacity-0 group-hover:opacity-100 
                flex items-end justify-end absolute inset-0 bottom-5 
                right-5 gap-x-2">
                    <Button
                        onClick={() => coverImage.onReplace(url)}
                        className="text-muted-foreground text-xs p-0"
                        variant="outline"
                        size="default"
                    >
                        <ImageIcon className="w-4 h-4 mr-2"/>
                        Change cover
                    </Button>
                    <Button
                        onClick={onRemove}
                        className="text-muted-foreground text-xs p-0"
                        variant="outline"
                        size="default"
                    >
                        <X className="w-4 h-4 mr-2"/>
                        Remove
                    </Button>
                </div>
            )}
        </div>
     )
}
 
