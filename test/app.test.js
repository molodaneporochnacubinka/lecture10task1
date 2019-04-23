import { Magician, Daemon } from '../src/js/app';

test('test attack 5 cell', () => {
  const magician = new Magician();
  magician.attack = 5;
  expect(magician.attack).toBeCloseTo(60);
});

test('test stoned 2 cell', () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.attack = 2;
  expect(daemon.attack).toBeCloseTo(85);
});

test('test attack 0 cell', () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.attack = 0;
  expect(daemon.attack).toBeCloseTo(100);
});
