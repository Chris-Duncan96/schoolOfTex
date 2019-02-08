const lesson2 = require('./lesson2');

describe('This test requires you to implement something',() => {
    it('This is a test. It does stuff, then runs a "expect", which needs to pass', () => {
        const whatIsReturnedByLesson2 = lesson2();
        expect(whatIsReturnedByLesson2).toEqual(true);
    })
});
