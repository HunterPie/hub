import {ElementalResistances} from "@/core/game/gear/Resistances";
import {Equipment} from "@/core/game/gear/Equipment";

export interface BaseGear extends Equipment {
    defense: number
    elementalResistances: ElementalResistances
    slots: number[]
}