"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
const zoo_1 = require("./zoo");
exports.Zoo = zoo_1.default;
const animal_1 = require("./animal");
const enclos_1 = require("./enclos");
const lion_1 = require("./lion");
const giraffe_1 = require("./giraffe");
const chat_1 = require("./chat");
const loup_1 = require("./loup");
const ours_1 = require("./ours");
const winnie = new ours_1.default("Winnie the pooh", animal_1.Regime.OMNIVOR);
const melmann = new giraffe_1.default("Melmann", animal_1.Regime.HERBIVOR);
const simba = new lion_1.default("Simba", "Feu");
const chatPotte = new chat_1.default("Chat Potté");
const moro = new loup_1.default("Moro", animal_1.Regime.CARNIVOR);
const felins = [simba, chatPotte];
chatPotte.rugir();
felins[1].rugir();
simba.rugir();
const enclos = [
    new enclos_1.default("Enclos 1", [winnie, melmann]),
    new enclos_1.default("Enclos 2", [simba]),
];
const chasseurs = [
    chatPotte,
    simba,
    moro,
];
const zoo = new zoo_1.default("Zoo de Beauval", enclos);
console.log("faire rugir tous les naimaux qui le peuvent");
//# sourceMappingURL=index.js.map