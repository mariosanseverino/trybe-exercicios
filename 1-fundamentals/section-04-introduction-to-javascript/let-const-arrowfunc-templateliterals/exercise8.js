const biggestWord = (string = ``) => {
    string = string.split(` `)
    const theBiggest = {
        word: ``,
        wordLenght: 0
    }

    for (const word in string) {
        if (string[word].length > theBiggest.word.length) {
            theBiggest.word = string[word]
            theBiggest.wordLenght = string[word].length
        }
    }

    return theBiggest.word
}

console.log(biggestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`))