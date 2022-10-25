function repete(array = []) {
    maiorRepeticao = {
        numero: array[0],
        repeticoes: 0
    }

    for (let indexArray = 0; indexArray < array.length; indexArray++) {
        contadorRepeticoes = 0
        for (let indexComparativo = 0; indexComparativo < array.length; indexComparativo++) {
            if (array[indexArray] == array[indexComparativo]) {
                contadorRepeticoes++
            }
        }
        if (contadorRepeticoes > maiorRepeticao.repeticoes) {
            maiorRepeticao.numero = array[indexArray]
            maiorRepeticao.repeticoes = contadorRepeticoes
        }
    }

    return maiorRepeticao.numero
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]))