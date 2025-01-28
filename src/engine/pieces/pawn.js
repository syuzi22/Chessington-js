import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    checkIfSquareIsEmpty(move, board) {
        return board.getPiece(move) === undefined;
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = [];

        if (this.player === Player.WHITE) {
            const isFirstMove = location.row === 1;
            const move = Square.at(location.row + 1, location.col);
            const isSquareEmpty = this.checkIfSquareIsEmpty(move, board);

            if (isSquareEmpty) {
                moves.push(move);
            }

            if (isFirstMove && isSquareEmpty) {
                const nextMove = Square.at(location.row + 2, location.col);

                if (this.checkIfSquareIsEmpty(nextMove, board)) {
                    moves.push(nextMove);
                }
               
            }
        } else {
            const isFirstMove = location.row === 6;
            const move = Square.at(location.row - 1, location.col);
            const isSquareEmpty = this.checkIfSquareIsEmpty(move, board);

            if (isSquareEmpty) {
                moves.push(move);
            }

            if (isFirstMove && isSquareEmpty) {
                const nextMove = Square.at(location.row - 2, location.col);
                
                if (this.checkIfSquareIsEmpty(nextMove, board)) {
                    moves.push(nextMove);
                }  
            }
        }

        return moves;
    }
}
