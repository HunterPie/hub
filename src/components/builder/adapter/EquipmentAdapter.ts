import {Equipment} from "@/core/entity/game/Equipment";
import {ReactNode} from "react";
import {Localization} from "@/core/entity/localization/Localization";

export interface EquipmentAdapter {
    adapt(equipment: Equipment, localization: Localization, onClick: (equipment: Equipment) => void): ReactNode
}