import Canide from "./canide";
import Chasseur from "./chasseur";
import Animal from "./animal";

export default class Loup extends Canide implements Chasseur {
    aboie(): void {
       console.log("Aouuu !!!")
    }

    chasser(proie: Animal) {
        console.log(`${this.nom} chasse en meute ${proie.nom}`);
    }
}