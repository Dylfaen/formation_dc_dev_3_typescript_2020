"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canide_1 = require("./canide");
class Loup extends canide_1.default {
    aboie() {
        console.log("Aouuu !!!");
    }
    chasser(proie) {
        console.log(`${this.nom} chasse en meute ${proie.nom}`);
    }
}
exports.default = Loup;
//# sourceMappingURL=loup.js.map