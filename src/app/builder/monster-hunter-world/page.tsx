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
import { MHWSearchGearComponent } from "@/components/builder/MHWSearchGearComponent";
import {id} from "postcss-selector-parser";

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

    const handleSearch = (text: string) => {
        if (text.length <= 0)
        {
            setSearching(false)
            return
        }
    }

    const handleSearchClick = (id: number) => {

    }

    return (
        <div className="flex justify-center w-full h-screen bg-gray-300">
            <div className="bg-gray-100 rounded-md my-10 mx-auto gap-3 border-gray-0 border-solid border-thin">
                <div className="grid grid-cols-6 col-span-6 bg-gray-200 p-3 rounded-t-md border-b-thin border-gray-50">
                    <EditInput onSave={() => false}
                                className="col-span-2 h-[40px] font-medium"/>
                    <div className="grid grid-cols-2 col-start-6">
                        <Button className="flex col-start-2 items-center justify-center rounded-md cursor-pointer bg-gray-100 border-gray-0 border-solid border-thin h-[40px] text-white-200"
                                onClick={() => {}}>Export</Button>
                    </div>
                </div>
                
                <div className="grid grid-cols-6 p-3 gap-1">
                    {gearProperties.map((prop, idx) => {
                        return (
                            <div className="min-w-[230px] select-none row-start-2"
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
            </div>

            <SearchModal isOpen={isSearching}
                         onClose={() => setSearching(false)}
                         onSubmit={handleSearch}>
                {
                    [0, 1, 2, 3, 4].map(id => {
                        return (
                            <MHWSearchGearComponent icon={""}
                                                    name={"test"}
                                                    rarity={12}
                                                    jewels={[]}
                                                    onClick={() => handleSearchClick(id)}
                                                    key={`gear_${id}`}/>
                        )
                    })
                }
            </SearchModal>
        </div>
    )
}