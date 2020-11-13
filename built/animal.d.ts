export declare enum Regime {
    CARNIVOR = 0,
    HERBIVOR = 1,
    OMNIVOR = 2
}
export default abstract class Animal {
    private _nom;
    private _regime;
    private _satiete;
    constructor(nom: string, regime: Regime);
    manger(): void;
    get nom(): string;
}
