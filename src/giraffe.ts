import Animal, { Regime } from "./animal";

export default class Giraffe extends Animal {
    private _longueurCou: number;

    constructor(nom: string, longueurCou: number) {
        super(nom, Regime.HERBIVOR);

        this._longueurCou = longueurCou;
    }

    
}