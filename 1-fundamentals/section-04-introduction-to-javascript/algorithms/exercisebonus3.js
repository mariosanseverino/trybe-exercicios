function pinheiroDireita(quantidade = 0) {
    for (let index = 1; index <= quantidade; index++) {
        if (index != quantidade) {
            console.log(` `.repeat(quantidade-index) + `*`.repeat(index))
        } else {
            console.log(`*`.repeat(quantidade))
        }
    }
}

pinheiroDireita(6)