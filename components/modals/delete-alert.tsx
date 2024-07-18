"use client";

import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMediaQuery } from "usehooks-ts";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
};

export const ConfirmModal = ({
    children,
    onConfirm
}: ConfirmModalProps) => {
    const handleConfirm = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        onConfirm();
    };
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {!isSmallScreen &&(
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={e => e.stopPropagation()}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                )}
                {isSmallScreen &&(
                    <div className="flex flex-col items-center w-full">
                       <AlertDialogFooter>
                        <AlertDialogCancel onClick={e => e.stopPropagation()}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
                    </AlertDialogFooter> 
                    </div>
                    
                )}
            </AlertDialogContent>
        </AlertDialog>
    )
}
