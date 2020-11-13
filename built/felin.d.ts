import Animal from "./animal";
import Chasseur from "./chasseur";
export default abstract class Felin extends Animal implements Chasseur {
    chasser(proie: Animal): void;
    constructor(nom: string);
    rugir(): void;
}
