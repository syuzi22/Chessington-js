import Piece from './piece';
import Player from '../player';
import Square from '../square';
import {checkIfKing} from '../utils';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    checkIfCanMoveOnPiece(piece, board, move) {
      if (piece.player === this.player || checkIfKing(board, move)) {
        return false;
      }

      return true;
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let currRow = location.row;
        let currCol = location.col;
        if (this.player === Player.WHITE) {

             //Horizontal
             for(let column = 0; column < 8; column++ ){
                if(column !== currCol){ 
                  const move = Square.at(location.row , column);
                  const piece = board.getPiece(move)

                  if (!piece) {
                    moves.push(move);
                  } else {
                    this.checkIfCanMoveOnPiece(piece, board, move) && moves.push(move);
                    break;
                  }
                
                }  
              } 
            
            //Vertical  
            for(let row = 0; row < 8; row++ ){
                if(row !== currRow){ 
                  const move = Square.at(row , location.col);
                  const piece = board.getPiece(move);

                  if (!piece) {
                    moves.push(move);
                  } else {
                    this.checkIfCanMoveOnPiece(piece, board, move) && moves.push(move);
                    break;
                  }

                }  
              }
        }
        else {

        }     
        return moves;
    }
}
