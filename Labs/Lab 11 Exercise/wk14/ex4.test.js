const multiply = require('./ex4');

describe("Multiply each of the odd numbers by the previous even number", () => {
    test("Return a new array", () => {
        const input = [ 2, 33, 4, 41, 6, 9, 77, 11, 13, 27 ];
        const output = [ 66, 164, 54, 462, 66, 78, 162 ];
        expect(multiply(input)).toEqual(output);
    });
});