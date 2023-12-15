import Image from "next/image"
import LockIcon from "@/icons/LockIcon.svg"
import { Button } from "../primitive/buttons/Button"
import {Jewel} from "@/core/entity/game/Jewel";
import React from "react";

interface JewelSelectionComponentProps {
    id: number,
    isAvailable: boolean
    level?: Jewel
    onClick: (targetId: number) => void
}

export const JewelSelectionComponent: React.FC<JewelSelectionComponentProps> = ({
    id,
    isAvailable,
    level,
    onClick
}) => {
    const renderLocked = () => {
        return (
            <span className="flex items-center">
                <Image src={LockIcon}
                       alt="lock icon"
                       className="w-[15px] h-[16px] mr-3"/>
                <h4 className="text-white-700 font-semibold">Locked</h4>
            </span>
        )
    }

    return (
        <Button className="bg-gray-100 border-white-700 border-dashed border-2 rounded-lg cursor-pointer px-2 py-1 my-1"
             isDisabled={!isAvailable}
             onClick={() => onClick(id)}>
            {renderLocked()}
        </Button>
    )
}