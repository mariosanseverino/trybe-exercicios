function verificaPalindromo(string = '') {
    let novaString = ''

    for (let indexString = string.length - 1; indexString >= 0; indexString--) {
        novaString += string[indexString]
    }

    if (novaString == string) {
        return true
    } else {
        return false
    }
}

console.log(verificaPalindromo('arara'))