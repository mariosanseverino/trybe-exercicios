function maiorPalavra(array = []) {
    let maiorNumero = {
        caracteres: 0,
        nome: ''
    }

    for (let index = 0; index < array.length; index++) {
        if (array[index].length > maiorNumero.caracteres) {
            maiorNumero.caracteres = array[index].length
            maiorNumero.nome = array[index]
        }
    }

    return maiorNumero.nome
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))