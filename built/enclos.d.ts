import Animal from './animal';
export default class Enclos {
    private _nom;
    private _animaux;
    constructor(nom: string, animaux: Animal[]);
    get animaux(): Animal[];
    nourrir(): void;
}
