let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], odd = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        odd++
    }
}

if (odd == 0) {
    console.log(`There was no odd numbers in the array.`)
} else {
    console.log(`There was a total of ${odd} numbers in the array.`)
}