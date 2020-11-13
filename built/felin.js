"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Felin extends animal_1.default {
    chasser(proie) {
        console.log(`${this.nom} chasse silencieusement ${proie.nom}`);
    }
    constructor(nom) {
        super(nom, animal_1.Regime.CARNIVOR);
    }
    rugir() {
        console.log("Rooar !!");
    }
}
exports.default = Felin;
//# sourceMappingURL=felin.js.map