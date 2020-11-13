import Animal, { Regime } from "./animal";
import Chasseur from "./chasseur";

export default abstract class Felin extends Animal implements Chasseur {

    chasser(proie: Animal) {
        console.log(`${this.nom} chasse silencieusement ${proie.nom}`);
    }

    constructor(nom: string) {
        super(nom, Regime.CARNIVOR);
    }

    rugir(): void {
        console.log("Rooar !!")
    }
}