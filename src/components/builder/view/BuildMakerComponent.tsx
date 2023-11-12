import EquipmentCategoryModel from "@/components/builder/model/EquipmentCategoryModel";
import React, {useMemo, useState} from "react";
import {EditInput} from "@/components/primitive/input/EditInput";
import {Button} from "@/components/primitive/buttons/Button";
import {GearSelectionComponent} from "@/components/builder/GearSelectionComponent";
import {JewelSelectionComponent} from "@/components/builder/JewelSelectionComponent";
import {SearchModal} from "@/components/search/SearchModal";
import {Equipment} from "@/core/entity/game/Equipment";
import {Localization} from "@/core/entity/localization/Localization";
import {EquipmentAdapter} from "@/components/builder/adapter/EquipmentAdapter";

interface BuildMakerProps {
    categories: EquipmentCategoryModel[]
    localization: Localization
    equipmentAdapter: EquipmentAdapter
}

export const BuildMakerComponent: React.FC<BuildMakerProps> = ({
    categories,
    localization,
    equipmentAdapter
}) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(-1)
    const currentCategory = useMemo<EquipmentCategoryModel | undefined>(() => {
        return categories[selectedCategory]
    }, [categories, selectedCategory])
    const filteredResults = useMemo<Equipment[]>(() => {
        if (currentCategory == undefined)
            return []
        
        const categoryList = currentCategory.equipments
        
        if (searchQuery == "")
            return categoryList
        
        return categoryList.filter(equipment => {
            const equipmentName = localization[equipment.id]

            return equipmentName.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }, [currentCategory, localization, searchQuery])
    const onSearchItemClick = (equipment: Equipment) => {

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
                    {categories.map((model, idx) => {
                        return (
                            <div className="min-w-[230px] select-none row-start-2"
                                 key={`gear-component-${idx}`}>
                                <GearSelectionComponent key={`gear_${idx}`}
                                                        onClick={() => setSelectedCategory(idx)}
                                                        icon={model.icon}
                                                        label={model.name}/>
                                {
                                    Array.from({length: model.maxJewels}, (_, key) => key)
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

            <SearchModal isOpen={currentCategory != undefined}
                         onClose={() => setSelectedCategory(-1)}
                         onSubmit={(query) => setSearchQuery(query)}
                         placeholder={currentCategory?.searchPlaceholder ?? ""}
                         buildChild={(index: number) => equipmentAdapter.adapt(filteredResults[index], localization, onSearchItemClick)}
                         childrenCount={filteredResults.length}/>
        </div>
    )
}