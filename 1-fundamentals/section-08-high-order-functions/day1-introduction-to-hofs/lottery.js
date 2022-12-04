const lotteryCheck = (betNumbers = []) => {
    betNumbers.some((currentValue, index) => {
        if (betNumbers.indexOf(currentValue[index]) === true) {
            throw new Error `Bet slips can not have the same number twice`
        }
    })

    let result = []
    const lotterySort = (max) => Math.floor(Math.random() * max + 1);

    let lotteryNumbers = [];
    for (let indexSort = 0; indexSort < 6; indexSort += 1) {
        lotteryNumbers.push(lotterySort(60));
    }

    for (let indexResult = 0; indexResult < lotteryNumbers.length; indexResult += 1) {
        if (betNumbers.some((number) => number === lotteryNumbers[indexResult])) {
            result.push(lotteryNumbers[indexResult]);
        };
    }

    return { betNumbers, lotteryNumbers, result };
}

console.log(lotteryCheck([52, 33, 27, 12, 25, 47]));

module.exports = { lotteryCheck }