'use client'
import { useEffect, useRef } from "react"
import Image from "next/image"
import React from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { Button } from "../primitive/buttons/Button"

interface GearSelectionComponentProps {
    label: string,
    icon: string | StaticImport
    onClick: () => void
}

export const GearSelectionComponent: React.FC<GearSelectionComponentProps> = ({
    label,
    icon,
    onClick
}) => {

    return (
        <Button className="bg-gray-400 border-gray-0 border-dashed border-2 rounded-lg cursor-pointer p-5"
                onClick={onClick}>
            <Image src={icon}
                   alt={label}
                   className="mx-auto"/>
            <h1 className="text-white-700 text-center font-sans font-semibold text-lg">{label}</h1>
        </Button>
    )
}