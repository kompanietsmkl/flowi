"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { SideMenu, SideMenuController, useCreateBlockNote, DragHandleButton } from "@blocknote/react";
import { RemoveBlockButton } from "./ui/removebutton";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { useEffect, useRef } from "react";

interface EditorProps {
  initialContent?: string
  onChange: (value: string) => void
}
const Editor = ({initialContent, onChange}: EditorProps) => {
  const {resolvedTheme} = useTheme();
  const {edgestore} = useEdgeStore();
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({file});

    return response.url;
  }


  const editor = useCreateBlockNote({
    initialContent: initialContent?JSON.parse(initialContent) as PartialBlock[]: undefined,
    /*onEditorContentChange: (editor: BlockNoteEditor) => {
      onChange (JSON.stringify(editor.document, null, 2));
    },*/
    uploadFile: handleUpload
  });

  useEffect(() => {
    const editorContainer = editorContainerRef.current;
    if (editorContainer && editor) {
      const observer = new MutationObserver(() => {
        onChange(JSON.stringify(editor.document, null, 2));
      });

      observer.observe(editorContainer, { childList: true, subtree: true, characterData: true });

      return () => {
        observer.disconnect();
      };
    }
  }, [editor, onChange]);

  return (
    <div ref={editorContainerRef}>
      <BlockNoteView editor={editor} theme={resolvedTheme === "dark" ? "dark" : "light"} sideMenu={false}>
        <SideMenuController
          sideMenu={(props) => (
            <SideMenu {...props}>
              <RemoveBlockButton {...props} />
              <DragHandleButton {...props} />
            </SideMenu>
          )}
        />
      </BlockNoteView>
    </div>
  );
}

export default Editor;