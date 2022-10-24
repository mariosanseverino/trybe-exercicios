let maior = 0

for (let index = 2; index <= 50; index++) {
    let primo = 0
    for (let divisor = 2; divisor <= 50; divisor++) {
        if (index % divisor == 0) {
            primo++
        }
    }

    if (primo == 2) {
        if (index > maior) {
            maior = index
        }
    }
}

console.log(`O maior número primo é: ${maior}`)