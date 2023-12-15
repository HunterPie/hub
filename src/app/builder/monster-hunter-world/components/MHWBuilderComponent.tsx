'use client'
import {BuildMakerComponent} from "@/components/builder/view/BuildMakerComponent";
import React, {useEffect, useMemo, useState} from "react";
import {Equipment} from "@/core/entity/game/Equipment";
import {Localization} from "@/core/entity/localization/Localization";
import EquipmentCategoryModel from "@/components/builder/model/EquipmentCategoryModel";
import ArmorIcon from "@/icons/ArmorIcon.svg"
import {GearType} from "@/core/entity/game/GearType";
import {Ailment} from "@/core/entity/game/Ailment";
import {EquipmentAdapter} from "@/components/builder/adapter/EquipmentAdapter";
import {GetStaticProps} from "next";
import {container} from "tsyringe";
import {MHW_EQUIPMENT_ADAPTER} from "@/app/builder/monster-hunter-world/di/Config";

export default function MHWBuilderComponent() {
    const equipmentAdapter = container.resolve<EquipmentAdapter>(MHW_EQUIPMENT_ADAPTER)

    const [armors, setArmors] = useState<Equipment[]>([])
    const [localization, setLocalization] = useState<Localization>({})

    useEffect(() => {
        setArmors([
            {
                type: GearType.Armor,
                id: "armor.mock",
                rarity: 12,
                skills: [
                    { id: "skill.mock.1" },
                    { id: "skill.mock.2" },
                    { id: "skill.mock.3" },
                ],
                resistances: [
                    { ailment: Ailment.Fire, value: 3 },
                    { ailment: Ailment.Ice, value: -4 },
                    { ailment: Ailment.Thunder, value: 5 }
                ],
                jewels: [3, 2]
            }
        ])

        setLocalization({
            "category.armor": "Armor",
            "search.armor.placeholder": "Search for armors",
            "armor.mock": "Mock Armor",
            "skill.mock.1": "Mock Lv. 1",
            "skill.mock.2": "Mock Lv. 2",
            "skill.mock.3": "Mock Lv. 3",
        })
    }, []);

    const categories = useMemo<EquipmentCategoryModel[]>(() => {
        return [
            {
                name: localization["category.armor"],
                searchPlaceholder: localization["search.armor.placeholder"],
                icon: ArmorIcon,
                maxJewels: 3,
                equipments: armors
            }
        ]
    }, [armors, localization])
    
    return (
        <>
            <BuildMakerComponent categories={categories}
                                 localization={localization}
                                 equipmentAdapter={equipmentAdapter}/>
        </>
    )
}