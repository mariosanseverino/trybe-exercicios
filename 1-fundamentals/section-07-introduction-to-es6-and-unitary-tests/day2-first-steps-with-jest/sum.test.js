const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(3, 3)).toEqual(6);
});