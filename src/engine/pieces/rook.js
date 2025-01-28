import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
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
                  moves.push(Square.at(location.row , column));
                }  
              } 
            
            //Vertical  
            for(let row = 0; row < 8; row++ ){
                if(row !== currRow){ 
                  moves.push(Square.at(row , location.col));
                }  
              }
        }
        else {

        }     
        return moves;
    }
}
