export enum Regime {
  CARNIVOR,
  HERBIVOR,
  OMNIVOR,
}

export default abstract class Animal {
  private _nom: string;
  private _regime: Regime;
  private _satiete: number;

  

  constructor(nom: string, regime: Regime) {
    this._nom = nom;
    this._regime = regime;
    this._satiete = Math.random() * 100;
  }

  manger(): void {
    this._satiete = 0;
  }

  public get nom() {
    return this._nom;
  }
}
