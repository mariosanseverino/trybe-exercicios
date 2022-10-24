let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    for (let c = 0; c < numbers.length; c++) {
        if (numbers[i] > numbers[c]) {
            let pos = numbers[i]
            numbers[i] = numbers[c]
            numbers[c] = pos
        }
    }
}

console.log(numbers)