import {EquipmentAdapter} from "@/components/builder/adapter/EquipmentAdapter";
import {Equipment} from "@/core/entity/game/Equipment";
import React from "react";
import {GearType} from "@/core/entity/game/GearType";
import {SearchEquipmentComponent} from "@/components/builder/SearchEquipmentComponent";
import {Localization} from "@/core/entity/localization/Localization";
import ArmorIcon from "@/icons/ArmorIcon.svg"
import {Icon} from "@/components/image/icon";

const EQUIPMENT_ICONS: Record<GearType, Icon> = {
    [GearType.Armor]: ArmorIcon
}

export class MHWEquipmentAdapter implements EquipmentAdapter {

    adapt(
        equipment: Equipment,
        localization: Localization,
        onClick: (equipment: Equipment) => void
    ): React.ReactNode {
        switch(equipment.type) {
            case GearType.Weapon:
                return <></>

            case GearType.Helm:
            case GearType.Armor:
            case GearType.Glove:
            case GearType.Belt:
            case GearType.Legs:
                return <SearchEquipmentComponent icon={EQUIPMENT_ICONS[equipment.type]}
                                                 equipment={equipment}
                                                 localization={localization}
                                                 onClick={() => onClick(equipment)} />

            case GearType.Charms:
                return <></>

            case GearType.SpecializedTool:
                return <></>

        }
    }

}