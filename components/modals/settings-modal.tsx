"use client";

import { 
    Dialog,
    DialogContent,
    DialogHeader,
} from "../ui/dialog";
import { useSettings } from "@/hooks/settings";
import { Label } from "../ui/label";
import { ModeToggle } from "../modetoggle";

export const SettingModal = () => {
    const settings = useSettings();
    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-semibold">Settings</h2>
                </DialogHeader>
                <div className="flex tems-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Customize your workspace
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    );
};
            

