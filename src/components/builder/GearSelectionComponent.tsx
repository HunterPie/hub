'use client'
import { useEffect, useRef } from "react"
import Image from "next/image"
import React from "react"
import { Button } from "../primitive/buttons/Button"
import {Icon} from "@/components/image/icon";

interface GearSelectionComponentProps {
    label: string,
    icon: Icon
    onClick: () => void
}

export const GearSelectionComponent: React.FC<GearSelectionComponentProps> = ({
    label,
    icon,
    onClick
}) => {

    return (
        <Button className="bg-gray-100 border-white-700 border-dashed border-2 rounded-lg cursor-pointer p-5"
                onClick={onClick}>
            <Image src={icon}
                   alt={label}
                   className="mx-auto"/>
            <h1 className="text-white-600 text-center font-sans font-medium text-lg">{label}</h1>
        </Button>
    )
}