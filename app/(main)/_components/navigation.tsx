"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon, Plus, PlusCircle, Search, Trash2 } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ElementRef, useRef, useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import UserItem from "./user-item";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Item } from "./item";
import { toast } from "sonner";
import { DocumentList } from "./documents-list";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TrashBox from "./trash-box";
import { useSearch } from "@/hooks/search";
import { Navbar } from "./navbar";

export const Navigation = () => {
    const router = useRouter();
    const search = useSearch();
    const pathname = usePathname();
    const params = useParams();
    const isSmallScreen = useMediaQuery("(max-width: 768px)");
    const create = useMutation(api.documents.create);
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isSmallScreen);

    const {user} = useUser();

    useEffect(() => {
        if (isSmallScreen) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isSmallScreen]);

    useEffect(() => {
        if (isSmallScreen) {
            collapse();
        }
    }, [pathname, isSmallScreen]);

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = event.clientX;

        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;

        if (sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.left = `${newWidth}px`;
            navbarRef.current.style.width = `calc(100% - ${newWidth}px)`;
        }
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sidebarRef.current.style.width = isSmallScreen ? "100%" : "240px";
            navbarRef.current.style.setProperty("width", isSmallScreen ? "0" : "calc(100% - 240px)");
            navbarRef.current.style.setProperty("left", isSmallScreen ? "100%" : "240px");

            setTimeout(() => {
                setIsResetting(false);
            }, 300);
        }
    };

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {

            setIsCollapsed(true);
            setIsResetting(true);
            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");

            setTimeout(() => {
                setIsResetting(false);
            }, 300);
        }
    }

    const handleCreate = () => {
        const promise = create({
            title: "Untitled",
        })
            .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Creating a page...",
            success: "Page created!",
            error: "Failed to create page",
        })
    };

    return (
        <>
            <aside
                ref={sidebarRef}
                className={cn(
                    "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isSmallScreen && "w-0"
                )}
            >
                <div className="flex justify-left pl-4 pt-4">
                    <Image
                        src="/fav.svg"
                        alt="logo"
                        layout="fixed"
                        width="24"
                        height="24"
                    />
                </div>
                <div
                    onClick={collapse}
                    role="button"
                    className={cn(
                        "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
                        isSmallScreen && "opacity-100"
                    )}
                >
                    <ChevronsLeft />
                </div>
                <div className="p-2 pb-2">
                    <UserItem />
                    <Item
                        label="Search"
                        icon={Search}
                        isSearch
                        onClick={search.onOpen}
                    />
                    <Item
                    onClick={handleCreate}
                    label="New page"
                    icon={PlusCircle}
                    />
                </div>
                <div className="p-4 pt-2">
                    <DocumentList />
                    <Item 
                    label="Add a page" 
                    icon={Plus} 
                    onClick={handleCreate} />
                </div>
                <div className="p-2 pb-2">
                    <Popover>
                        <PopoverTrigger className="w-full">
                            <Item label="Trash" icon={Trash2}/>
                        </PopoverTrigger>
                        <PopoverContent side={isSmallScreen ? 'bottom' : 'right'} className="ml-2 p-0 w-72">
                            <TrashBox />
                        </PopoverContent>
                    </Popover>
                </div>
                <div
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
                    className="opacity-0 group-hover/sidebar:opacity-100
                    transition cursor-ew-resize absolute h-full w-1 bg-primary/10
                    right-0 top-0"
                />
            </aside>
            <div
                ref={navbarRef}
                className={cn(
                    "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isSmallScreen && "left-0 w-full"
                )}
            >
                {!!params.documentId ? ( 
                    <Navbar
                        isCollapsed={isCollapsed}
                        onResetWidth={resetWidth}
                    />
                ): (
                    <nav className="bg-transparent px-3 py-2 w-full">
                        {isCollapsed && <MenuIcon onClick={resetWidth} role="button"
                        className="h-6 w-6 text-muted-foreground" />}
                    </nav>
                )}
            </div>
        </>
    );
};
