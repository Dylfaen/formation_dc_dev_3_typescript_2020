import Canide from "./canide";
import Chasseur from "./chasseur";
import Animal from "./animal";
export default class Loup extends Canide implements Chasseur {
    aboie(): void;
    chasser(proie: Animal): void;
}
