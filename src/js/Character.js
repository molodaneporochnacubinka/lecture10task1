export default class Character {
  constructor(attack) {
    this._attack = attack;
    this._stoned = false;
  }

  set attack(x) {
    this._x = x;
  }

  get attack() {
    let attack = this._attack;
    if (this._x > 0) {
      attack *= (1.1 - 0.1 * this._x);
      if (this.stoned) {
        attack -= Math.log2(this._x) * 5;
      }
    }
    return attack;
  }

  set stoned(flag) {
    this._stoned = flag;
  }

  get stoned() {
    return this._stoned;
  }
}
