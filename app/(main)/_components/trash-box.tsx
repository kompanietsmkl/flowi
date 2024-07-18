"use client";

import { ConfirmModal } from "@/components/modals/delete-alert";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery,useMutation } from "convex/react";
import { CircleX, Search, Undo2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";



const TrashBox = () => {
    const isSmallScreen = useMediaQuery("(max-width: 768px)");
    const router = useRouter();
    const params = useParams();
    const documents = useQuery(api.documents.getTrash);
    const restore = useMutation(api.documents.restore);
    const remove = useMutation(api.documents.remove);

    const [search, setSearch] = useState("");

    const filteredDocuments = documents?.filter((doc) => {
        return document.title.toLowerCase().includes(search.toLowerCase());
    });

    const onClick = (documentId:string) => {
        router.push(`/documents/${documentId}`);
    };

    const onRestore = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        documentId:Id<"documents">) => {
            event.stopPropagation();
            const promise = restore({id: documentId});

            toast.promise(
                promise,
                {
                    loading: "Restoring...",
                    success: "Document restored",
                    error: "Could not restore document"
                }
            );
    };
    
    const onRemove = (
        documentId:Id<"documents">,
    ) => {
        const promise = remove({id: documentId});

        toast.promise(
            promise,
            {
                loading: "Deleting...",
                success: "Document deleted",
                error: "Could not delete document"
            }
        );

        if (params.documentId === documentId) {
            router.push("/documents");
        }
    };

    if (documents === undefined){return(<div className="h-full flex items-center justify-center p-4"><Spinner size="lg" /></div>)}

    return (
        <div className="text-sm">
            <div className="flex items-center gap-x-1 p-2">
                <Search className="h-4 w-4" />
                <Input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
                    placeholder="Filter by page title..."/>
            </div>
            <div className="mt-2 px-2 pb-1">
                <p className="hidden last:block text-xs text-center 
                    text-muted-foreground pb-2">
                    There is nothing here.
                </p>
                {filteredDocuments?.map((document) => (
                    <div
                        key={document._id}
                        role="button"
                        onClick={() => onClick(document._id)}
                        className="rounded-md w-full hover:bg-primary/5 
                        flex items-center text-primary justify-between">
                        <span className="text-lg truncate pl-2">
                            {document.title}
                        </span>
                        {isSmallScreen && 
                            <div className="flex items-center justify-end gap-x-1 text-muted-foreground">
                                <div role="button"
                                    className="p-1 rounded-sm hover:bg-primary/5 flex items-center gap-x-1"
                                    onClick={(e) => onRestore(e, document._id)}>
                                    <Undo2 className="h-3 w-3"/>
                                    <p className="text-sm">Restore</p>
                                </div>
                                <ConfirmModal onConfirm={() => onRemove(document._id)}>
                                    <div role="button"
                                        className="p-1 rounded-sm hover:bg-primary/5 flex items-center gap-x-1 " 
                                    >
                                        <CircleX className="h-3 w-3"/>
                                        <p className="text-sm">Remove</p>
                                    </div>
                                </ConfirmModal>
                            </div>
                        }
                        {!isSmallScreen &&
                            <div className="flex items-center justify-end gap-x-1">
                                <div role="button"
                                    className="p-1 rounded-sm hover:bg-primary/5"
                                    onClick={(e) => onRestore(e, document._id)}>
                                    <Undo2 className="h-4 w-4 text-muted-foreground"/>
                                </div>
                                <ConfirmModal onConfirm={() => onRemove(document._id)}>
                                    <div role="button"
                                        className="p-1 rounded-sm hover:bg-primary/5" 
                                    >
                                        <CircleX className="h-4 w-4 text-muted-foreground hover:text-red-500"/>
                                    </div>
                                </ConfirmModal>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TrashBox;