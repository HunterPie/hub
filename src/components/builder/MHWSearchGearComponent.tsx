import React from "react";
import {Button} from "@/components/primitive/buttons/Button";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {JewelLevel} from "@/core/game/gear/jewel";

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
                className="h-[50px] bg-gray-50 mb-1 items-center justify-center cursor-pointer">
            {name}
        </Button>
    )
}