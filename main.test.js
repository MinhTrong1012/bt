const main = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(main.add(1, 2)).toBe(3);
});
test('minus 10 - 2 to equal 8', () => {
    expect(main.minus(10, 2)).toBe(8);
});
test('times 3 + 2 to equal 6', () => {
    expect(main.time(3, 2)).toBe(6);
});
test('divides 8 + 4 to equal 2', () => {
    expect(main.devide(8, 4)).toBe(2);
});