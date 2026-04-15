const {
    generateStrongPassword,
    isStrongPassword
} = require("../src/index.js");

test("generateStrongPassword returns correct length", () => {
    const password = generateStrongPassword(12);
    expect(password.length).toBe(12);
});

test("isStrongPassword rejects weak passwords", () => {
    expect(isStrongPassword("Hello World")).toBe(false);
});

test("isStrongPassword accepts strong passwords", () => {
    expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
});