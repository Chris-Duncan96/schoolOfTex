const lesson1 = require('./lesson1');

describe('This is a describe block. It groups tests',() => {
    it('This is a test. It does stuff, then runs a "expect", which needs to pass', () => {
        const whatIsReturnedByLesson1 = lesson1();
        expect(whatIsReturnedByLesson1).toEqual(365);
    })
});
