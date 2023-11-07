import React from "react";
import {Button} from "@/components/primitive/buttons/Button";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {JewelLevel} from "@/core/game/gear/Jewel";
import Image from "next/image";

interface MHWSearchGearComponentProps {
    icon: string | StaticImport
    name: string
    rarity: number
    jewels: JewelLevel[]
    onClick: () => void
}

export const MHWSearchGearComponent: React.FC<MHWSearchGearComponentProps> = ({
    icon,
    name,
    rarity,
    jewels,
    onClick
}) => {

    return (
        <Button onClick={onClick}
                className="flex bg-gray-50 mb-1 cursor-pointer rounded-md border-thin border-gray-0">
            <div className="bg-gray-100 p-5 border-r-gray-0 border-r-thin">
                <Image src={icon}
                       alt="icon"/>
            </div>

            <div className="ml-2 mt-2">
                <h2 className="font-sans font-medium text-white-100">{name}</h2>
                <h6 className="font-sans font-light text-white-400 text-sm">Rarity {rarity}</h6>
            </div>

            <div className="grid grid-rows-2 ml-auto">
                <div className="bg-gray-100">
                    Elements
                </div>
                <div className="bg-gray-100">
                    Jewels
                </div>
            </div>
        </Button>
    )
}