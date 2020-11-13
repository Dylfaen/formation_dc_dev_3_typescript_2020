"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Ours extends animal_1.default {
    chasser(proie) {
        console.log(`${this.nom} pèche ${proie.nom}`);
    }
}
exports.default = Ours;
//# sourceMappingURL=ours.js.map