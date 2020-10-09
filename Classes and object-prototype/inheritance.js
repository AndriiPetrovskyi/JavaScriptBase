class Hero {
    constructor(name, xp) {
        this._name = name;
        this.xp = xp;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    gianXp(amount){
        this.xp += amount;
    }
};

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp)
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} attack with ${this.weapon}`)
    }
}

const robert = new Warrior('Robert', 1000, 'Alibard');
console.log(robert)

