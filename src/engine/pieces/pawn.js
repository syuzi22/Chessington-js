import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    checkIfSquareIsEmpty(move, board,nextRow,player) {
        return board.getPiece(move) === undefined;
    }

    checkIfRowWithinBoard(row,player){
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

    checkIfKing(board,move){
        return board.getPiece(move) instanceof King;
    }

    checkAllConditionsforDiagonalMove(move,board,row,player){
        if (this.checkIfRowWithinBoard(row,player) 
            && !this.checkIfSquareIsEmpty(move,board,row,player) 
         && board.getPiece(move).player !== player
        && !this.checkIfKing(board,move) ) {
            return true;
        }

        return false;
    }

    getDiagonalSquareMoves(move,board,nextRow,player){
        let location = board.findPiece(this);
        const moves=[];
        let leftMove;
        let rightMove; 
        if(player=== Player.WHITE){
            leftMove = Square.at(location.row + 1, location.col + 1);
            rightMove = Square.at(location.row + 1, location.col - 1);
            
        }
       else {
            leftMove = Square.at(location.row - 1, location.col - 1);
            rightMove = Square.at(location.row - 1, location.col + 1);
        }
        if(this.checkAllConditionsforDiagonalMove(leftMove,board,nextRow,player)){
            moves.push(leftMove);
        }
        if(this.checkAllConditionsforDiagonalMove(rightMove,board,nextRow,player)){
            moves.push(rightMove);
        }
      return moves;  
        //move = Square.at(location.row + 1, location.col);
       
        //diagonal square is empty - cannot move
        // if diagonal square not empty - whether it is opposing piece - allow diagonal move
        // if diagonal square not empty - it is same colour piece - cannot move

        //To check diagonal
        // Black - (row-1 , col-1 ), (row-1, col+1)-- not outside board
        //White - (row+1, col-1),(row+1,col+1) -- not outside board

    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = [];
        if (this.player === Player.WHITE) {
            const isFirstMove = location.row === 1;
            const move = Square.at(location.row + 1, location.col);
            const isSquareEmpty = this.checkIfRowWithinBoard(location.row + 1,this.player) && this.checkIfSquareIsEmpty(move, board,location.row + 1,this.player);
            if (isSquareEmpty) {
                moves.push(move);
            }

            if (isFirstMove && isSquareEmpty) {
                const nextMove = Square.at(location.row + 2, location.col);
                if (this.checkIfRowWithinBoard(location.row + 2,this.player) && this.checkIfSquareIsEmpty(nextMove, board,location.row + 2,this.player)) {
                    moves.push(nextMove);
                }
            }
            let diagonalMoves = this.getDiagonalSquareMoves(move,board,location.row + 1,this.player);
            if (!!diagonalMoves.length){   
                moves =  moves.concat(diagonalMoves);
            }    

        } else {
            const isFirstMove = location.row === 6;
            const move = Square.at(location.row - 1, location.col);
            const isSquareEmpty = this.checkIfRowWithinBoard(location.row - 1,this.player) && this.checkIfSquareIsEmpty(move, board,location.row - 1,this.player);
            let nextRow = location.row - 1;

            if (isSquareEmpty) {
                moves.push(move);
            }

            if (isFirstMove && isSquareEmpty) {
                const nextMove = Square.at(location.row - 2, location.col);
                
                if (this.checkIfRowWithinBoard(location.row -2,this.player) && this.checkIfSquareIsEmpty(nextMove, board,location.row -2 , this.player)) {
                    moves.push(nextMove);
                }  
            }
            let diagonalMoves = this.getDiagonalSquareMoves(move,board,location.row - 1,this.player);
            if (!!diagonalMoves.length){   
                moves =  moves.concat(diagonalMoves);
            }   
        }

        return moves;
    }
}
