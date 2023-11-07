'use client'
import { GearSelectionComponent } from "@/components/builder/GearSelectionComponent";
import WeaponIcon from "@/icons/SwordAndShieldIcon.svg"
import HelmIcon from "@/icons/HelmIcon.svg"
import ArmsIcon from "@/icons/ArmsIcon.svg"
import WaistIcon from "@/icons/WaistIcon.svg"
import LegsIcon from "@/icons/LegsIcon.svg"
import CharmIcon from "@/icons/CharmIcon.svg"
import ArmorIcon from "@/icons/ArmorIcon.svg"
import { SearchModal } from "@/components/search/SearchModal";
import React, {ReactNode, useEffect, useState} from "react";
import { JewelSelectionComponent } from "@/components/builder/JewelSelectionComponent";
import { EditInput } from "@/components/primitive/input/EditInput";
import { Button } from "@/components/primitive/buttons/Button";
import { MHWSearchGearComponent } from "@/components/builder/MHWSearchGearComponent";
import {Equipment} from "@/core/game/gear/Equipment";
import {BaseGear} from "@/core/game/gear/BaseGear";

interface EquipmentProperties<T> {
    label: string
    icon: string
    jewels: number
    searchProperties: SearchProperties<T>
}

interface SearchProperties<T> {
    placeholder: string
    children: T[]
    filteredChildren: T[]
    buildChild: (index: number) => ReactNode
}

interface MHWBuilderProps {
    helms: BaseGear[]
    armors: BaseGear[]
    arms: BaseGear[]
    waist: BaseGear[]
    legs: BaseGear[]
    charms: Equipment[]
}

const DEFAULT_SEARCH_PROPERTIES = {
    placeholder: "",
    children: [],
    filteredChildren: [],
    buildChild: () => <></>
}

export const MHWBuilderComponent: React.FC<MHWBuilderProps> = ({
    helms,
    armors,
    arms,
    waist,
    legs,
    charms
}) => {
    const [isSearching, setSearching] = useState(false)
    const [currentEquipment, setCurrentEquipment] = useState<EquipmentProperties<Equipment> | undefined>(undefined)
    const [equipments, setEquipments] = useState<EquipmentProperties<Equipment>[]>([])
    const search = currentEquipment?.searchProperties ?? DEFAULT_SEARCH_PROPERTIES

    useEffect(() => {
        setEquipments([
            {
                label: "Weapon",
                icon: WeaponIcon,
                jewels: 3,
                searchProperties: {
                    placeholder: "Search for weapons...",
                    children: [],
                    filteredChildren: [],
                    buildChild: (index: number) => {
                        return <></>
                    }
                }
            },
            {
                label: "Helm",
                icon: HelmIcon,
                jewels: 3,
                searchProperties: {
                    placeholder: "Search for helms...",
                    children: helms,
                    filteredChildren: helms,
                    buildChild: (index: number) => {
                        const helm = helms[index]

                        return <MHWSearchGearComponent icon={HelmIcon}
                                                       name={helm.name.eng}
                                                       rarity={helm.rarity}
                                                       jewels={helm.slots}
                                                       onClick={() => {}}/>
                    }
                }
            },
            {
                label: "Armor",
                icon: ArmorIcon,
                jewels: 3,
                searchProperties: {
                    placeholder: "Search for armors...",
                    children: armors,
                    filteredChildren: armors,
                    buildChild: (index: number) => {
                        const armor = armors[index]

                        return <MHWSearchGearComponent icon={ArmorIcon}
                                                       name={armor.name.eng}
                                                       rarity={armor.rarity}
                                                       jewels={armor.slots}
                                                       onClick={() => {}}/>
                    }
                }
            },
            {
                label: "Arms",
                icon: ArmsIcon,
                jewels: 3,
                searchProperties: {
                    placeholder: "Search for gloves...",
                    children: arms,
                    filteredChildren: arms,
                    buildChild: (index: number) => {
                        const arm = arms[index]

                        return <MHWSearchGearComponent icon={ArmsIcon}
                                                       name={arm.name.eng}
                                                       rarity={arm.rarity}
                                                       jewels={arm.slots}
                                                       onClick={() => {}}/>
                    }
                }
            },
            {
                label: "Waist",
                icon: WaistIcon,
                jewels: 3,
                searchProperties: {
                    placeholder: "Search for belts...",
                    children: waist,
                    filteredChildren: waist,
                    buildChild: (index: number) => {
                        const belt = waist[index]

                        return <MHWSearchGearComponent icon={WaistIcon}
                                                       name={belt.name.eng}
                                                       rarity={belt.rarity}
                                                       jewels={belt.slots}
                                                       onClick={() => {}}/>
                    }
                }
            },
            {
                label: "Legs",
                icon: LegsIcon,
                jewels: 3,
                searchProperties: {
                    placeholder: "Search for legs...",
                    children: legs,
                    filteredChildren: legs,
                    buildChild: (index: number) => {
                        const leg = legs[index]

                        return <MHWSearchGearComponent icon={LegsIcon}
                                                       name={leg.name.eng}
                                                       rarity={leg.rarity}
                                                       jewels={leg.slots}
                                                       onClick={() => {}}/>
                    }
                }
            },
            {
                label: "Charm",
                icon: CharmIcon,
                jewels: 0,
                searchProperties: {
                    placeholder: "Search for charms...",
                    children: charms,
                    filteredChildren: charms,
                    buildChild: (index: number) => {
                        const charm = charms[index]

                        return <MHWSearchGearComponent icon={CharmIcon}
                                                       name={charm.name.eng}
                                                       rarity={charm.rarity}
                                                       jewels={[]}
                                                       onClick={() => {}}/>
                    }
                }
            }
        ])
    }, [armors, arms, charms, helms, legs, waist]);
    
    const handleSearch = (text: string) => {
        const currentOriginalEquipment = equipments.findIndex(equipment => equipment.label == currentEquipment?.label)

        const updatedEquipment = {...equipments[currentOriginalEquipment]}
        if (text.length <= 0) {
            updatedEquipment.searchProperties.filteredChildren = updatedEquipment.searchProperties.children
        } else {
            updatedEquipment.searchProperties.filteredChildren = updatedEquipment.searchProperties.children.filter((child) => {
                return child.name.eng.includes(text)
            })
        }

        setEquipments([
            ...equipments.slice(0, currentOriginalEquipment),
            {...updatedEquipment},
            ...equipments.slice(currentOriginalEquipment + 1)
        ])
        setCurrentEquipment(equipments[currentOriginalEquipment])
    }

    const handleEquipmentClick = (equipment: EquipmentProperties<any>) => {
        setSearching(true)
        setCurrentEquipment(equipment)
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
                    {equipments.map((prop, idx) => {
                        return (
                            <div className="min-w-[230px] select-none row-start-2"
                                 key={`gear-component-${idx}`}>
                                <GearSelectionComponent {...prop}
                                                        key={`gear_${idx}`}
                                                        onClick={() => handleEquipmentClick(prop)}/>
                                {
                                    Array.from({length: prop.jewels}, (_, key) => key)
                                        .map(id => <JewelSelectionComponent id={id}
                                                                            isAvailable={false}
                                                                            onClick={() => {}}
                                                                            key={`jewel_${id}`}/>)
                                }
                            </div>
                        )
                    })}
                </div>
            </div>

            <SearchModal isOpen={isSearching}
                         onClose={() => setSearching(false)}
                         onSubmit={handleSearch}
                         placeholder={search.placeholder}
                         buildChild={search.buildChild}
                         childrenCount={search.filteredChildren.length}/>
        </div>
    )
}