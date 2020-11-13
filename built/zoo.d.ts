import Enclos from './enclos';
import Animal from './animal';
export default class Zoo {
    private _nom;
    private _enclos;
    constructor(nom: string, enclos: Enclos[]);
    nourrir(): void;
    get animaux(): Animal[];
}
