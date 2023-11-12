import {IGameDataRepository} from "@/core/repository/game-data/IGameDataRepository";
import {Equipment} from "@/core/entity/game/Equipment";
import {IHttpService} from "@/core/http/IHttpService";
import {Ailment} from "@/core/entity/game/Ailment";
import {Resistance} from "@/core/entity/game/Resistance";
import {Skill} from "@/core/entity/game/Skill";
import {GearType} from "@/core/entity/game/GearType";

const DEFAULT_TIMEOUT = 10_000

export default class MHWGameDataRepository implements IGameDataRepository {
    private readonly _httpService: IHttpService
    private readonly _baseUrl: string

    constructor(httpService: IHttpService, baseUrl: string) {
        this._httpService = httpService
        this._baseUrl = baseUrl
    }

    async findAllArmors(): Promise<Equipment[]> {
        const response = await this._httpService.get({
            url: this._baseUrl + "/chests.json",
            timeout: DEFAULT_TIMEOUT
        })

        if (!response.isSuccessful)
            return []

        const mhwArmors: MHWBaseGear[] = JSON.parse(response.data!)
        return mhwArmors.map(armor => {
            return {
                type: GearType.Armor,
                id: armor.id.toString(),
                rarity: armor.rarity,
                skills: this._convertSkills(armor.skills),
                resistances: this._convertResistances(armor.elementalResistances),
                defense: armor.defense,
                jewels: armor.slots
            }
        })
    }

    async findAllBelts(): Promise<Equipment[]> {
        const response = await this._httpService.get({
            url: this._baseUrl + "/belts.json",
            timeout: DEFAULT_TIMEOUT
        })
        if (!response.isSuccessful)
            return []

        const mhwBelts: MHWBaseGear[] = JSON.parse(response.data!)
        return mhwBelts.map(belt => {
            return {
                type: GearType.Belt,
                id: belt.id.toString(),
                rarity: belt.rarity,
                skills: this._convertSkills(belt.skills),
                resistances: this._convertResistances(belt.elementalResistances),
                defense: belt.defense,
                jewels: belt.slots
            }
        })
    }

    async findAllCharms(): Promise<Equipment[]> {
        throw new Error("not implemented")
    }

    async findAllGloves(): Promise<Equipment[]> {
        throw new Error("not implemented")
    }

    async findAllHelms(): Promise<Equipment[]> {
        throw new Error("not implemented")
    }

    async findAllLegs(): Promise<Equipment[]> {
        throw new Error("not implemented")
    }

    private _convertSkills(skills: MHWSkill[]): Skill[] {
        return skills.map(({skillId, level}) => {
            return {
                id: `${skillId}-${level}`
            }
        })
    }

    private _convertResistances(resistances: MHWElementalResistances): Resistance[] {
        return [
            { ailment: Ailment.Fire, value: resistances.fire },
            { ailment: Ailment.Water, value: resistances.water },
            { ailment: Ailment.Thunder, value: resistances.thunder },
            { ailment: Ailment.Ice, value: resistances.ice },
            { ailment: Ailment.Dragon, value: resistances.dragon },
        ]
    }
}
