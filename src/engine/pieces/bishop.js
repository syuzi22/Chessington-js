import Piece from './piece';
import Player from '../player'
import {checkIfRowWithinBoard,checkIfColWithinBoard} from '../utils.js';
import Square from '../square.js';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let currRow = location.row;
        let currCol = location.col;
        let move;
        for (let i = 1; i < 8; i++) {
            if (currRow + i < 8 && currCol + i < 8) {
                move = Square.at(currRow + i, currCol + i);//Bottom -right
                moves.push(move); 
            }
            if (currRow + i < 8 && currCol - i >= 0){
                move =  Square.at (currRow + i, currCol - i); // Bottom-left
                moves.push(move); 
            } 
            if (currRow - i >= 0 && currCol + i < 8){
                 move = Square.at (currRow - i, currCol + i); // Top-right
                 moves.push(move);
            }     
            if (currRow - i >= 0 && currCol - i >= 0){
                move = Square.at (currRow - i, currCol - i); // Top-left
                moves.push(move);
            }    
        }
        return moves;
    }
}
