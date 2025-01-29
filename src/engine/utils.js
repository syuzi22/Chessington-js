import King from "./pieces/king";
export const checkIfKing = (board,move) => {
    return board.getPiece(move) instanceof King;
}