// TODO: write code here

console.log('app.js bundled');

class Character {
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

  set stoned(timeStamp) {
    this._stoned = timeStamp;
  }

  get stoned() {
    return this._stoned;
  }
}

export class Magician extends Character {
  constructor() {
    super(100);
  }
}

export class Daemon extends Character {
  constructor() {
    super(100);
  }
}
