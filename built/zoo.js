"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Zoo {
    constructor(nom, enclos) {
        console.log("constructing..");
        this._nom = nom;
        this._enclos = enclos;
    }
    nourrir() {
        this._enclos.forEach((enclos) => enclos.nourrir());
    }
    get animaux() {
        let animaux = [];
        this._enclos.forEach((enclos) => {
            enclos.animaux.forEach((animal) => {
                animaux.push(animal);
            });
        });
        return animaux;
    }
}
exports.default = Zoo;
//# sourceMappingURL=zoo.js.map