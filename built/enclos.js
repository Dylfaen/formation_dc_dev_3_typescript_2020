"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Enclos {
    constructor(nom, animaux) {
        this._nom = nom;
        this._animaux = animaux;
    }
    get animaux() {
        return this._animaux;
    }
    nourrir() {
        this.animaux.forEach(animal => animal.manger());
    }
}
exports.default = Enclos;
//# sourceMappingURL=enclos.js.map