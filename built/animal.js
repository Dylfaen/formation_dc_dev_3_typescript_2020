"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regime = void 0;
var Regime;
(function (Regime) {
    Regime[Regime["CARNIVOR"] = 0] = "CARNIVOR";
    Regime[Regime["HERBIVOR"] = 1] = "HERBIVOR";
    Regime[Regime["OMNIVOR"] = 2] = "OMNIVOR";
})(Regime = exports.Regime || (exports.Regime = {}));
class Animal {
    constructor(nom, regime) {
        this._nom = nom;
        this._regime = regime;
        this._satiete = Math.random() * 100;
    }
    manger() {
        this._satiete = 0;
    }
    get nom() {
        return this._nom;
    }
}
exports.default = Animal;
//# sourceMappingURL=animal.js.map