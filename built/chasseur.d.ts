import Animal from "./animal";
export default interface Chasseur extends Animal {
    chasser: (proie: Animal) => void;
}
