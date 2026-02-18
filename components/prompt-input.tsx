"use client"

import { cn } from "@/lib/utils";
import { 
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea 
} from "./ui/input-group";
import { CornerDownLeftIcon } from "lucide-react";
import { Spinner } from "./ui/spinner";

interface PropsType {
    promptText: string;
    setPromptText: (text: string) => void;
    isLoading?: boolean;
    className?: string;
    hideSubmitbtn?: boolean
    onSubmit: () => void;
}
const PromptInput = ({
    promptText,
    setPromptText,
    isLoading,
    className,
    hideSubmitbtn = false,
    onSubmit
}: PropsType) => {
    return <div className="bg-background">
        <InputGroup
        className={cn("min-h-[172px] rounded-3xl bg-background",
            className && className
        )}
        >
            <InputGroupTextarea
             className="text-base! py-2.5!"
             placeholder="I want to design an app that..."
             value={promptText}
             onChange={(e) => {
                setPromptText(e.target.value)
             }}
            />

            <InputGroupAddon align="block-end"
             className="flex items-center justify-end"
            >

               {!hideSubmitbtn && (
                  <InputGroupButton
                    variant="default"
                    className=""
                    size="sm"
                    disabled={!promptText ?.trim() || isLoading}
                    onClick={() =>  onSubmit ?. ()}
                  >
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <>
                          Design
                          <CornerDownLeftIcon className="size-4" />
                        </>  
                    )}
                  </InputGroupButton>
               )} 
            </InputGroupAddon>
        </InputGroup>

    </div>;
};

export default PromptInput;