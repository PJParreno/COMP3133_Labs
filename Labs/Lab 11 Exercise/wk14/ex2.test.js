const removeVowel = require('./ex2');

describe("Remove vowels", () => {
    test("vowel search and remove", () => {
        const input = "This is test of a test";

        const output = "Ths s tst f  tst";
        expect(removeVowel(input)).toEqual(output);
    });
});