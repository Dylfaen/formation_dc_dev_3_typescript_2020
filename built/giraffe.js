"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Giraffe extends animal_1.default {
    constructor(nom, longueurCou) {
        super(nom, animal_1.Regime.HERBIVOR);
        this._longueurCou = longueurCou;
    }
}
exports.default = Giraffe;
//# sourceMappingURL=giraffe.js.map