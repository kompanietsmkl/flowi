"use client";

import { useEffect, useState } from "react";
import { SettingModal } from "../modals/settings-modal";
import { CoverImgModal } from "../modals/coverimg-modal";

export const ModalProvider = () =>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null;

    return(
        <>
            <SettingModal />
            <CoverImgModal />
        </>
    );
};