import { LOAD_BOARD } from './actionTypes'

export const setBoard = (board) => {
  return {
    type: LOAD_BOARD,
    board
  }
}
