import React, { useEffect, useRef, useState } from "react"
import { Button } from "../buttons/Button"
import Image from "next/image"
import EditIcon from "@/icons/EditIcon.svg"

interface EditInputProps {
    placeholder?: string
    className?: string
    onSave: (text: string) => boolean
}

export const EditInput: React.FC<EditInputProps> = ({
    placeholder,
    className,
    onSave
}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleEnter = (event: KeyboardEvent) => {
        if (event.key == 'Enter') {
            inputRef.current?.blur()
        }
    }

    const focusInput = () => {
        inputRef.current?.focus()
    }

    useEffect(() => {
        const handleSave = () => {
            const input = inputRef.current?.value

            onSave(input != undefined ? input : "")
        }
        
        const reference = inputRef.current
        reference?.addEventListener("keyup", handleEnter)
        reference?.addEventListener("focusout", handleSave)

        return () => {
            reference?.removeEventListener("keyup", handleEnter)
        }
    }, [inputRef, onSave])

    return (
        <Button onClick={focusInput}
                className={`flex p-1 rounded-md cursor-pointer bg-gray-50 border-gray-0 ${className}`}>
            <input className="bg-gray-50 px-1 focus:outline-none text-white-400 cursor-pointer focus:text-white-200 placeholder-white-500 w-full"
                ref={inputRef}
                placeholder="Test"/>
            <Image src={EditIcon}
                    alt="edit"/>
        </Button>
    )
}