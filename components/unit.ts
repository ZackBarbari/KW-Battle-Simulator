class Unit {
    name: string
    readonly id: number
    readonly owner: number
    size: number
    tier: number
    exp: number
    eqp: number
    atknum: number
    stats: [number]
    type: string
    traits: [number]


    constructor(name: string, id: number, owner: number, size: number, tier: number, exp: number, eqp: number, atknum: number, stats: [number], type: string, traits: [number]) {
        this.name = name
        this.id = id
        this.owner = owner
        this.size = size
        this.tier = tier
        this.exp = exp
        this.eqp = eqp
        this.atknum = atknum
        this.stats = stats
        this.type = type
        this.traits = traits
    }

    getId() {
        return this.id
    }

    getOwner() {
        return this.owner
    }

    setStats(stats: [number]) {
        this.stats = stats
    }

    getStats() {
        return this.stats
    }

    setSpace() {
        //set current location
        //this.space = space
    }

    getSpace() {
        //return current location
    }


    
}