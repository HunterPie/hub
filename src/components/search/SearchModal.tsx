import { BackdropOverlay } from "../overlay/BackdropOverlay"
import SearchIcon from "@/icons/SearchIcon.svg"
import Image from "next/image"
import { Kbd } from "../primitive/chip/Kbd"
import React, { useEffect, useRef } from "react"

interface SearchModalProps {
    children?: any,
    isOpen: boolean,
    onClose: () => void,
    onSubmit: (text: string) => void
}

export const SearchModal: React.FC<SearchModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    children
}) => {
    const didMount = useRef<boolean>(false)
    const searchModalRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    const handleClickOut = () => {
        searchInputRef.current!.value = ""
        onClose()
    }

    useEffect(() => {
        const modalRef = searchModalRef.current!

        if (!didMount.current) {
            didMount.current = true
        }

        modalRef.addEventListener("animationend", () => {
            if (modalRef.classList.contains("animate-scaleUp")) {
                modalRef.classList.add("hidden")
            }
        })
    }, [searchModalRef])

    useEffect(() => {
        const inputRef = searchInputRef.current!

        function handleKeypress(ev: KeyboardEvent) {
            if (ev.key == "Enter") {
                onSubmit(inputRef.value)
            }
        }

        inputRef.addEventListener("keyup", handleKeypress)

        return () => {
            inputRef.removeEventListener("keyup", handleKeypress)
        }
    }, [searchInputRef, onSubmit])

    useEffect(() => {
        function handleEscPress(event: KeyboardEvent) {
            if (event.key == "Escape") {
                handleClickOut()
            }
        }

        document.addEventListener("keyup", handleEscPress)

        return () => {
            document.removeEventListener("keyup", handleEscPress)
        }
    })

    return (
        <div className="absolute">
            <BackdropOverlay onClick={handleClickOut}
                             isVisible={isOpen}/>

            <div className={`relative z-50 bg-gray-50 border-thin border-gray-0 rounded-md mx-auto my-[20vh] justify-center w-auto h-auto transition-opacity ${isOpen ? "animate-scaleDown" : `animate-scaleUp ${didMount.current ? "" : "hidden"}`}`}
                ref={searchModalRef}>
                <div className="flex border-b-thin border-gray-0 p-1">
                    <Image src={SearchIcon}
                           alt="search"
                           className="w-[40px]"/>
                    <input className="bg-transparent w-[30dvw] outline-none p-1 font-sans text-white-100 font-medium placeholder:text-white-600"
                           placeholder="Search"
                           ref={searchInputRef}/>
                    <Kbd text="ESC"/>
                </div>

                <div className="p-2 max-h-[35dvh] min-h-[250px] bg-gray-200 min-h overflow-x-hidden overflow-scroll">
                    {children}
                </div>
                <div className="flex h-[30px] w-full border-t-thin border-gray-0 items-center justify-center text-sm font-sans text-white-500">
                    Showing {children.length} result{children.length > 1 ? "s" : ""}
                </div>
            </div>
            
        </div>
    )
}