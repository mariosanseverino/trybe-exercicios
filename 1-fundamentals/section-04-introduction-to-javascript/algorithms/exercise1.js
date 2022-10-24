const fatorialNumber = 10
let fatorialSumm = 1    

for (let i = 1; i < fatorialNumber; i ++) {
    fatorialSumm += fatorialSumm * i
}

console.log(fatorialSumm)