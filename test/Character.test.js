import Character from '../src/js/Character';

test('test attack 5 cell', () => {
  const magician = new Character(100);
  magician.attack = 5;
  expect(magician.attack).toBeCloseTo(60);
});

test('test stoned 2 cell', () => {
  const daemon = new Character(100);
  daemon.stoned = true;
  daemon.attack = 2;
  expect(daemon.attack).toBeCloseTo(85);
});

test('test attack 0 cell', () => {
  const daemon = new Character(100);
  daemon.stoned = true;
  daemon.attack = 0;
  expect(daemon.attack).toBeCloseTo(100);
});
