import King from "./pieces/king";
import Player from "./player";

export const checkIfKing = (board,move) => {
    return board.getPiece(move) instanceof King;
}

export const checkIfRowWithinBoard = (row, player) =>{
    let topRow = 7;
    let bottomRow = 0;
    if((player=== Player.WHITE) && (row <= topRow)){
        return true;
    }
    else if ((player=== Player.BLACK) && (row >= bottomRow)){
        return true;
    } 
    return false;   
}

export const checkIfColWithinBoard = (col) =>{
    if(col >=0 && col < 8){
        return true;
    }
    return false;   
}

export const checkIfSquareIsEmpty = (move, board,nextRow,player) => {
    return board.getPiece(move) === undefined;
}