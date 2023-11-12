interface MHWSkill {
    skillId: number
    level: number
}

interface MHWElementalResistances {
    fire: number
    water: number
    thunder: number
    ice: number
    dragon: number
}

interface MHWBaseGear {
    id: number
    rarity: number
    skills: MHWSkill[]
    defense: number
    elementalResistances: MHWElementalResistances
    slots: number[]
}