import {Jewel} from "@/core/entity/game/Jewel";
import {Icon} from "@/components/image/icon";
import JewelLv1Icon from "@/icons/JewelLv1Icon.svg";
import JewelLv2Icon from "@/icons/JewelLv2Icon.svg";
import JewelLv3Icon from "@/icons/JewelLv3Icon.svg";
import JewelLv4Icon from "@/icons/JewelLv4Icon.svg";
import LockIcon from "@/icons/LockIcon.svg";
import Image from "next/image";
import React from "react";

interface JewelIconProps {
    jewel: Jewel
    className?: string
}

const JewelIcons: Record<Jewel, Icon> = {
    [Jewel.None]: LockIcon,
    [Jewel.Small]: JewelLv1Icon,
    [Jewel.Medium]: JewelLv2Icon,
    [Jewel.Big]: JewelLv3Icon,
    [Jewel.Large]: JewelLv4Icon
}

export const JewelIcon: React.FC<JewelIconProps> = ({
    jewel,
    className
}) => {
    return (
        <Image src={JewelIcons[jewel]}
               alt={`jewel ${jewel} icon`}
               className={className}/>
    )
}