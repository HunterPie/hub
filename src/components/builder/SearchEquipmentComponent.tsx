import React, {ReactNode, useMemo} from "react";
import {Button} from "@/components/primitive/buttons/Button";
import Image from "next/image";
import {Tag} from "@/components/primitive/chip/Tag";
import {Icon} from "@/components/image/icon";
import {Equipment} from "@/core/entity/game/Equipment";
import {Localization} from "@/core/entity/localization/Localization";
import {Ailment} from "@/core/entity/game/Ailment";
import FireIcon from "@/icons/FireIcon.svg"
import WaterIcon from "@/icons/WaterIcon.svg"
import ThunderIcon from "@/icons/ThunderIcon.svg"
import IceIcon from "@/icons/IceIcon.svg"
import DragonIcon from "@/icons/DragonIcon.svg"
import {Resistance} from "@/core/entity/game/Resistance";
import {JewelIcon} from "@/components/image/JewelIcon";

const AILMENT_ICONS: Record<Ailment, Icon> = {
    [Ailment.Fire]: FireIcon,
    [Ailment.Water]: WaterIcon,
    [Ailment.Thunder]: ThunderIcon,
    [Ailment.Ice]: IceIcon,
    [Ailment.Dragon]: DragonIcon,
}

interface SearchEquipmentComponentProps {
    icon: Icon
    equipment: Equipment
    localization: Localization
    onClick: () => void
}

export const SearchEquipmentComponent: React.FC<SearchEquipmentComponentProps> = ({
    icon,
    equipment,
    localization,
    onClick
}) => {
    const { id, rarity, skills, jewels } = equipment
    const resistances = useMemo(() => {
        const resistancesMap: Record<string, Resistance> = equipment.resistances.reduce((acc, resistance) => {
            return {...acc, [resistance.ailment]: resistance}
        }, {})

        return Object.keys(AILMENT_ICONS).reduce((acc, ailment) => {
            const resistanceMapped = resistancesMap[ailment]

            return [...acc,
                        resistanceMapped != undefined
                            ? resistanceMapped
                            : { ailment: Number(ailment), value: 0 }
            ]
        }, [] as Resistance[])
    }, [equipment])

    return (
        <Button onClick={onClick}
                className="flex bg-gray-50 mb-1 cursor-pointer rounded-md border-thin border-gray-0">
            <div className="flex bg-gray-100 p-5 border-r-gray-0 border-r-thin">
                <Image src={icon}
                       alt="icon"/>
            </div>

            <div className="flex flex-col ml-2 mt-2">
                <h2 className="font-sans font-medium text-white-100">{localization[equipment.id]}</h2>
                <h6 className="font-sans font-light text-white-400 text-sm">Rarity {rarity}</h6>
                <div className="flex gap-1 mt-auto mb-2">
                    {
                        skills?.map(skill => {
                            return (
                                <Tag key={skill.id}
                                     value={localization[skill.id]}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className="grid grid-rows-2 ml-auto">
                <div className="flex mt-2 mr-2">
                    {
                        resistances.map(resistance => {
                            return (
                                <div key={resistance.ailment}
                                     className="m-1 p-1 bg-gray-100 border-gray-0 border-thin rounded-3xl">
                                    <Image src={AILMENT_ICONS[resistance.ailment]}
                                           alt={`Resistance`}
                                           className="w-[20px] h-[20px]"/>
                                    <p className={`font-sans text-sm text-center ${resistance.value > 0 ? 'text-green-100': resistance.value < 0 ? 'text-red-50' : 'text-white-100'}`}>
                                        {resistance.value}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex m-auto my-2 mr-2">
                    {
                        jewels.map((jewel, idx) => {
                            return (
                                <div className="flex p-2 bg-gray-100 mx-1 border-thin border-gray-0 rounded-2xl"
                                     key={idx}>
                                    <JewelIcon jewel={jewel}
                                               className="w-[25px] h-[25px] self-center"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Button>
    )
}