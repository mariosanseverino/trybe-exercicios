let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], top = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > top) {
        top = numbers[i]
    }
}

console.log(top)