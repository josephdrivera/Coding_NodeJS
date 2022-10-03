const { add, subtract, multiply, divide, sqrt, max } = require('./mathModule');

describe('testing the math module', () => {

    test('should add two numbers', () => {
        expect(add(2, 2)).toBe(4);
    });
    test('should subtract two numbers', () => {
        expect(subtract(4, 2)).toBe(2);
    });
    test('should multiply two numbers', () => {
        expect(multiply(2, 2)).toBe(4);
    });
    test('should divide two numbers', () => {
        expect(divide(4, 2)).toBe(2);
    });
    test('should return the square root of a number', () => {
        expect(sqrt(4)).toBe(2);
    });
    test('should return the max of two numbers', () => {
        expect(max(4, 2)).toBe(4);
    });

});


