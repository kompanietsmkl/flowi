"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { IconPicker } from "./icon-picker";
import { Button } from "./ui/button";
import { ImageIcon, Smile, X } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import TextareaAutosize from "react-textarea-autosize";
import { useCoverImage } from "@/hooks/use-coverimage";

interface ToolbarProps {
    initialData: Doc<"documents">;
    preview?: boolean;
};
export const Toolbar = ({
    initialData,
    preview
}: ToolbarProps) => {
    const inputRef = useRef<ElementRef<"textarea">>(null);
    const [isEdititng, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialData.title);

    const updateTitle = useMutation(api.documents.update);
    const removeIcon = useMutation(api.documents.removeIcon);

    const coverImage = useCoverImage();

    const enableInput = () => {
        if(preview) return;

        setIsEditing(true);
        setTimeout(() => {
            setValue(initialData.title);
            inputRef.current?.focus();
        }, 0);
    };

    const disableInput = () => {
        setIsEditing(false);
    };
 
    const onInput = (value: string) => {
        setValue(value);
        updateTitle({
            id: initialData._id,
            title: value || "Untitled"
        });
    };

    const onKeyDown = (
        event: React.KeyboardEvent<HTMLTextAreaElement>
    )=> {
        if (event.key ==="Enter") {
            event.preventDefault();
            disableInput();
        }
    };

    const onIconSelect = (icon: string) => {
        updateTitle({
          id: initialData._id,
          icon,
        });
    };

    const onRemoveIcon = () => {
        removeIcon({
            id: initialData._id
        });
    };

    return (
        <div className="group relative pl-[54px]">
            {!!initialData.icon && !preview && (
                <div className="flex items-center gap-x-2 group/icon pt-6">
                    <IconPicker asChild onChange={onIconSelect}>
                        <p className="text-6xl hover:opacity-75 transition">
                            {initialData.icon}
                        </p>
                    </IconPicker>
                    <Button
                        onClick={onRemoveIcon}
                        className="rounded-full opacity-0 group-hover/icon:opacity-100
                        transition text-muted-foreground text-xs"
                        variant="outline"
                        size="icon"
                    >
                        <X className="w-4 h-4"/>
                    </Button>
                </div>
            )}
            {!!initialData.icon && preview && (
                <p className="text-6xl pt-6">
                    {initialData.icon}
                </p>                
            )}
            <div className="opacity-0 group-hover:opacity-100 flex items-center
                gap-x-1 py-2">
                    {!initialData.icon && !preview && (
                        <IconPicker asChild onChange={onIconSelect}>
                            <Button className="text-muted-foreground text-sm w-28"
                                variant="ghost"
                                size="sm"    
                            >
                                <Smile className="w-4 h-4 mr-2"/>
                                Add icon
                            </Button>
                        </IconPicker>
                    )}
                    {!initialData.coverImage && !preview && (
                        <Button
                            onClick={coverImage.onOpen}
                            className="text-muted-foreground text-sm w-28"
                            variant="ghost"
                            size="sm"
                        >
                            <ImageIcon className="w-4 h-4 mr-2"/>
                            Add cover
                        </Button>
                    )}
            </div>
            
            {isEdititng && !preview ? (
                <TextareaAutosize
                ref={inputRef}
                onBlur={disableInput}
                className="text-5xl bg-transparent outline-none font-bold break-words
                text-[#3f3f3f] dark:text-[#cfcfcf] resize-none"
                value={value}
                onChange={(e) => onInput(e.target.value)}
                onKeyDown={onKeyDown}
            />
            ) : (
                <div
                    onClick={enableInput}
                    className="pb-[11.5px] text-5xl font-bold break-words
                    outline-none text-[#3f3f3f] dark:text-[#cfcfcf]"
                >
                    {initialData.title}
                </div>
            )}
        </div>
    )
}