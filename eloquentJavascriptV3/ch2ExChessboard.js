const boardSize = Number(prompt());
let boardStringWhiteBlack = '';
let boardStringBlackWhite = '';
for ( i = 1; i <= boardSize; i++) {
    if ( i % 2 == 0 ) {
        boardStringWhiteBlack += "#";
        boardStringBlackWhite += " ";
    } else {
        boardStringWhiteBlack += " ";
        boardStringBlackWhite += "#";
    }
}

for ( i = 1; i <= boardSize; i += 2 ) {
    console.log(boardStringBlackWhite);
    console.log(boardStringWhiteBlack);
}
