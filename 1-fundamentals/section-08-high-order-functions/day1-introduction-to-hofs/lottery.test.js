const { lotteryCheck } = require("./lottery.js");

describe('Test developed to review the lotteryCheck function', () => {
    it('is it a function?', () => {
        expect(typeof lotteryCheck).toEqual('function');
    })

    it('does it return an object if called lotteryCheck()?', () => {
        expect(typeof lotteryCheck()).toEqual('object');
    })

    it('is the key "betNumbers" containing the same value given as the parameter?', () => {
        expect(lotteryCheck([3, 4, 6, 10, 25, 59]).betNumbers).toEqual([3, 4, 6, 10, 25, 59]);
    })

    it('does the result contains 6 numbers in the array?', () => {
        expect(lotteryCheck([9, 41, 6, 1, 31, 20]).lotteryNumbers.length).toBe(6);
    })
})