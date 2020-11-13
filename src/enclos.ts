import Animal from './animal';

export default class Enclos {
    private _nom: string;
    private _animaux: Animal[];

    constructor(nom: string, animaux: Animal[]) {
        this._nom = nom; 
        this._animaux = animaux;
    }

    get animaux(): Animal[] {
        return this._animaux;
    }

    nourrir(): void {
        this.animaux.forEach(animal => animal.manger());
    }


}