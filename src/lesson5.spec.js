const lesson5 = require('./lesson5');
const Chance = require('Chance');
const chance = new Chance();

describe('This test requires the function to parse two arrays',() => {
    it('should take two arrays, and return the common value from them ', () => {
        const valueFromArray1 = chance.string()
        const valueFromArray2 = chance.string()
        const commonValue = chance.string();

        const inputArray1 = [valueFromArray1, commonValue];
        const inputArray2 = [valueFromArray2, commonValue];

        const whatIsReturnedByLesson5 = lesson5(inputArray1, inputArray2);
        expect(whatIsReturnedByLesson5).toEqual(commonValue);
    });
});
