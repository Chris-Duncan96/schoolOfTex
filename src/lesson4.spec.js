const lesson4 = require('./lesson4');

describe('This test requires the function to parse',() => {
    it('should take the value out of an array, and return it', () => {
        const value = 123;
        const inputArray = [value];

        const whatIsReturnedByLesson3 = lesson4(inputArray);
        expect(whatIsReturnedByLesson3).toEqual(value);
    });

    it('should take the LAST value out of an array, and return it', () => {
        const firstValue = 456;
        const lastValue = 789
        const inputArray = [firstValue, lastValue];

        const whatIsReturnedByLesson3 = lesson4(inputArray);
        expect(whatIsReturnedByLesson3).toEqual(lastValue);
    });
});
