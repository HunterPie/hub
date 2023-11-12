import {Icon} from "@/components/image/icon";
import {Equipment} from "@/core/entity/game/Equipment";

export default interface EquipmentCategoryModel {
    name: string
    searchPlaceholder: string
    icon: Icon
    maxJewels: number
    equipments: Equipment[]
}