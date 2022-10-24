let count = 0

for (let i = 2; i <= 150; i++) {
    if (i % 3 == 0) {
        count++
    }   
}

if (count == 50) {
    console.log(`Mensagem secreta`)
}