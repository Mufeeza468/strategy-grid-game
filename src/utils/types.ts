import { PLAYER1, PLAYER2 } from "../constants/gameConstants";

export type Player = typeof PLAYER1 | typeof PLAYER2 | null;
export type Board = Player[][];
