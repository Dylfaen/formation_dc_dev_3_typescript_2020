import Zoo from "./zoo";
import Animal, { Regime } from "./animal";
import Enclos from "./enclos";
import Lion from "./lion";
import Giraffe from "./giraffe";
import Felin from "./felin";
import Chat from "./chat";
import Chasseur from "./chasseur";
import Loup from "./loup";
import Ours from "./ours";

const winnie = new Ours("Winnie the pooh", Regime.OMNIVOR);
const melmann = new Giraffe("Melmann", Regime.HERBIVOR);
const simba = new Lion("Simba", "Feu");
const chatPotte: Chat = new Chat("Chat Potté");
const moro: Loup = new Loup("Moro", Regime.CARNIVOR);

const felins: Felin[] = [simba, chatPotte];
chatPotte.rugir();

felins[1].rugir();

simba.rugir();

const enclos = [
  new Enclos("Enclos 1", [winnie, melmann]),
  new Enclos("Enclos 2", [simba]),
];

const chasseurs: Chasseur[] = [
    chatPotte,
    simba,
    moro,
]


const zoo = new Zoo("Zoo de Beauval", enclos);

console.log("faire rugir tous les naimaux qui le peuvent");


export { Zoo };
