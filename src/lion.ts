import Felin from "./felin";
import { Regime } from "./animal";

export default class Lion extends Felin {
    private _couleurFourrure: string;

    constructor(nom: string, couleurFourrure: string) {
        super(nom);

        this._couleurFourrure = couleurFourrure;
    }


}