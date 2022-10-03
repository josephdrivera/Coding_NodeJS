const { uppercase, lowercase } = require('./string');


describe('testing the string module', () => {

    test('uppercase String input', () => {
        expect(uppercase('hello')).toBe('HELLO');
    });
    test('should be lowercase string input', () => {
        expect(lowercase('FULL Sail')).toBe('full sail');

    });


});

