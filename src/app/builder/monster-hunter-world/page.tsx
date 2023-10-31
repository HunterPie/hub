'use client'
import { GearSelectionComponent } from "@/components/builder/GearSelectionComponent";
import WeaponIcon from "@/icons/SwordAndShieldIcon.svg"
import HelmIcon from "@/icons/HelmIcon.svg"
import ArmsIcon from "@/icons/ArmsIcon.svg"
import WaistIcon from "@/icons/WaistIcon.svg"
import LegsIcon from "@/icons/LegsIcon.svg"
import CharmIcon from "@/icons/CharmIcon.svg"
import { SearchModal } from "@/components/search/SearchModal";
import { useState } from "react";
import { JewelSelectionComponent } from "@/components/builder/JewelSelectionComponent";
import { JewelLevel } from "@/core/game/gear/jewel";
import { EditInput } from "@/components/primitive/input/EditInput";
import { Button } from "@/components/primitive/buttons/Button";

interface GearProperties {
    label: string
    icon: string
    onClick: () => void
}

export default function Builder() {
    const [isSearching, setSearching] = useState(false)
    const gearProperties: GearProperties[] = [
        {   
            label: "Weapon",
            icon: WeaponIcon,
            onClick: () => {

            }
        },
        {
            label: "Helm",
            icon: HelmIcon,
            onClick: () => {

            }
        },
        {
            label: "Arms",
            icon: ArmsIcon,
            onClick: () => {

            }
        },
        {
            label: "Waist",
            icon: WaistIcon,
            onClick: () => {

            }
        },
        {
            label: "Legs",
            icon: LegsIcon,
            onClick: () => {

            }
        },
        {
            label: "Charm",
            icon: CharmIcon,
            onClick: () => {

            }
        }
    ]


    const onWeaponClick = () => {
        setSearching(true)
    }

    return (
        <div className="flex justify-center w-full h-screen bg-gray-600">
            <div className="grid grid-cols-6 bg-gray-500 rounded-md my-10 mx-auto grid-rows-container gap-3 p-3 border-gray-0 border-solid border-thin">
                <EditInput onSave={() => false}
                            className="col-span-2 h-[40px]"/>
                <div className="grid grid-cols-2 col-start-6">
                    <Button className="flex col-start-2 items-center justify-center rounded-md cursor-pointer bg-gray-100"
                            onClick={() => {}}>Export</Button>    
                </div>            

                {gearProperties.map((prop, idx) => {
                    return (
                        <div className="w-[230px] select-none row-start-2"
                             key={`gear-component-${idx}`}>
                            <GearSelectionComponent {...prop}
                                                    onClick={onWeaponClick}
                                                    key={`gear_${idx}`} />
                            {[0, 1, 2].map(id => <JewelSelectionComponent id={id}
                                                                          isAvailable={false}
                                                                          onClick={() => {}}
                                                                          key={`jewel_${id}`}/>)}
                        </div>
                    )
                })}
            </div>

            <SearchModal isOpen={isSearching}
                         onClose={() => setSearching(false)}/>
        </div>
    )
}