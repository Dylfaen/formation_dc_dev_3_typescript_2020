
import Enclos from './enclos';
import Animal from './animal';

export default class Zoo {

    private _nom: string;
    private _enclos: Enclos[];

    constructor(nom: string, enclos: Enclos[]) {
        console.log("constructing..");
        this._nom = nom;
        this._enclos = enclos;
    }

    nourrir():void {
        this._enclos.forEach((enclos) => enclos.nourrir());
    }

    get animaux(): Animal[] {
        let animaux: Animal[] = [];
        this._enclos.forEach((enclos) => {
            enclos.animaux.forEach((animal) => {
                animaux.push(animal);
            })
        })

        return animaux;
    }
}