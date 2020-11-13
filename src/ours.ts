import Animal from "./animal";
import Chasseur from "./chasseur";

export default class Ours extends Animal implements Chasseur {

    chasser(proie: Animal) {
        console.log(`${this.nom} pèche ${proie.nom}`);
    }

} 