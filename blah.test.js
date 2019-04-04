const blah = require('./blah');

test('subtracts 1 - 2 to equal -1', () => {
  expect(blah(1, 2)).toBe(-1);
});

test('blah', () => {
  expect(-1).toBe(-1);
});

test('blue', () => {
  expect(2).toBe(10);
});
