function maiorNumero(array = []) {
    let maiorIndice = {
        valor: 0,
        indice: 0
    }

    for (let index = 0; index < array.length; index++) {
        if (array[index] > maiorIndice.valor) {
            maiorIndice.valor = array[index]
            maiorIndice.indice = index
        }
    }

    return maiorIndice.indice
}

console.log(maiorNumero([2, 4, 6, 7, 10, 1]))