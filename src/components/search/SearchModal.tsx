import { BackdropOverlay } from "../overlay/BackdropOverlay"
import SearchIcon from "@/icons/SearchIcon.svg"
import Image from "next/image"
import { Kbd } from "../primitive/chip/Kbd"
import React, {ChangeEvent, ReactNode, useEffect, useRef} from "react"
import {Virtuoso} from "react-virtuoso";

interface SearchModalProps {
    placeholder: string,
    childrenCount: number,
    isOpen: boolean,
    onClose: () => void,
    onSubmit: (text: string) => void
    buildChild: (index: number) => ReactNode
}


const List = React.forwardRef<any, any>((props, ref) => {
    return (
        <div className="mr-1"
             {...props}
             ref={ref}>
        </div>
    )
})
List.displayName = "List"

export const SearchModal: React.FC<SearchModalProps> = ({
    placeholder,
    isOpen,
    onClose,
    onSubmit,
    childrenCount,
    buildChild
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

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSubmit(event.target.value)
    }

    return (
        <div className="absolute">
            <BackdropOverlay onClick={handleClickOut}
                             isVisible={isOpen}/>

            <div className={`relative z-50 bg-gray-50 border-thin border-gray-0 rounded-md mx-auto my-[20vh] justify-center w-screen md:w-[750px]  h-auto transition-opacity ${isOpen ? "animate-scaleDown" : `animate-scaleUp ${didMount.current ? "" : "hidden"}`}`}
                ref={searchModalRef}>
                <div className="flex border-b-thin border-gray-0 p-1">
                    <Image src={SearchIcon}
                           alt="search"
                           className="w-[40px]"/>
                    <input className="bg-transparent w-full outline-none p-1 font-sans text-white-100 font-medium placeholder:text-white-600"
                           placeholder={placeholder}
                           ref={searchInputRef}
                           onChange={handleTextChange}/>
                    <Kbd text="ESC"
                         className="mr-1"/>
                </div>

                <div className="p-1 pr-0 max-h-[35dvh] min-h-[250px] bg-gray-200 overflow-x-hidden overflow-y-hidden">
                    <Virtuoso totalCount={childrenCount}
                              itemContent={buildChild}
                              components={{ List }}
                              style={{ minHeight: "250px", height: "35dvh" }}/>
                </div>
                <div className="flex h-[30px] w-full border-t-thin border-gray-0 items-center justify-center text-sm font-sans text-white-500">
                    Showing {childrenCount} result{childrenCount > 1 ? "s" : ""}
                </div>
            </div>
            
        </div>
    )
}