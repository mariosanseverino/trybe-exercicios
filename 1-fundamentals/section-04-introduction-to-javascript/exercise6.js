const chessPiece = 'pawn'
let pieceMovement = ''

switch(chessPiece) {
    case 'pawn':
        pieceMovement = `Moves one square straight ahead, attacks one square diagonal ahead.`
        break

    case 'bishop':
        pieceMovement = `Moves and attacks unlimited diagonals squares.`
        break

    case 'knight':
        pieceMovement = `Moves in an "L" shape, can move over other pieces. Attacks on the tip of the L.`
        break
    
    case 'rook':
        pieceMovement = `Moves and attacks unlimited straight squares.`
        break

    case 'queen':
        pieceMovement = `Moves and attacks unlimited squares any directions.`
        break
    
    case 'king':
        pieceMovement = `Moves and attacks one square any direction. Can't walk towards checkmate.`
        break

    default:
        pieceMovement = `Piece invalid.`
        break
}

console.log(pieceMovement)