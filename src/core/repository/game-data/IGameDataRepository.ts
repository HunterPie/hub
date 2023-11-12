import {Equipment} from "@/core/entity/game/Equipment";

export interface IGameDataRepository {
    findAllHelms(): Promise<Equipment[]>
    findAllArmors(): Promise<Equipment[]>
    findAllGloves(): Promise<Equipment[]>
    findAllBelts(): Promise<Equipment[]>
    findAllLegs(): Promise<Equipment[]>
    findAllCharms(): Promise<Equipment[]>
}