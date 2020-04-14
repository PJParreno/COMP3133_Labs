const filterFalse = require('./ex3');

describe("Show only authenticated users", () => {
    test("Search false authentication and show only the ones with true value", () => {
        const input = [
            {authenticated: false, user_id: "100100100"},
            {authenticated: true, user_id: "200200200"},
            {authenticated: true, user_id: "300300300"},
            {authenticated: false, user_id: "400400400"},
            {authenticated: true, user_id: "500500500"}
        ];

        const output = [
            {authenticated: true, user_id: "200200200"},
            {authenticated: true, user_id: "300300300"},
            {authenticated: true, user_id: "500500500"}
        ];

        expect(filterFalse(input)).toEqual(output);
    });
});