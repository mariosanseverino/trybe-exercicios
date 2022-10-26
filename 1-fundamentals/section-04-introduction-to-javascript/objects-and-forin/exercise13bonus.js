function pinheiroEsquerda(quantidade = 0) {
    for (let index = 1; index <= quantidade; index++) {
        if (index == 1) {
            console.log(`*`)
        } else if (index < quantidade && index > 1) {
            console.log(`*`.repeat(index))
        } else if (index == quantidade) {
            console.log(`*`.repeat(quantidade))
        }
    }
}

pinheiroEsquerda(6)