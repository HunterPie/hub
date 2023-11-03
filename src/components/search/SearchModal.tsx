import { BackdropOverlay } from "../overlay/BackdropOverlay"
import SearchIcon from "@/icons/SearchIcon.svg"
import Image from "next/image"
import { Kbd } from "../primitive/chip/Kbd"
import { KeyboardEvent, useEffect, useRef } from "react"

interface SearchModalProps {
    isOpen: boolean,
    onClose: () => void,
    onSubmit: (text: string) => void
}

export const SearchModal: React.FC<SearchModalProps> = ({
    isOpen,
    onClose,
    onSubmit
}) => {
    const didMount = useRef<boolean>(false)
    const searchModalRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const modalRef = searchModalRef.current!

        if (!didMount.current) {
            didMount.current = true
        }

        modalRef.addEventListener("animationend", () => {
            if (modalRef.classList.contains("animate-slideDown")) {                
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
    }, [searchInputRef])

    const handleClickOut = () => {
        searchInputRef.current!.value = ""
        onClose()
    }

    

    return (
        <div className="absolute">
            <BackdropOverlay onClick={handleClickOut}
                             isVisible={isOpen}/>

            <div className={`relative flex z-50 bg-gray-50 border-thin p-1 border-gray-0 rounded-t-md mx-auto my-[20vh] justify-center w-auto h-auto transition-opacity ${isOpen ? "animate-slideUp" : `animate-slideDown ${didMount.current ? "" : "hidden"}`}`}
                ref={searchModalRef}>
                <Image src={SearchIcon}
                       alt="search"
                       className="w-[40px]"/>
                <input className="bg-transparent w-[50dvh] outline-none p-1 font-sans text-white-100 font-medium placeholder:text-white-600" 
                       placeholder="Search"
                       ref={searchInputRef}/>
                <Kbd text="ESC"/>
            </div>
            
        </div>
    )
}