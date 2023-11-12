import {Skill} from "@/core/entity/game/Skill";
import {Resistance} from "@/core/entity/game/Resistance";
import {GearType} from "@/core/entity/game/GearType";
import {Jewel} from "@/core/entity/game/Jewel";

export interface Equipment {
    type: GearType
    id: string
    rarity: number
    skills: Skill[]
    resistances: Resistance[]
    defense?: number
    jewels: Jewel[]
}