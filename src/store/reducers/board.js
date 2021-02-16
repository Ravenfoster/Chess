import {
  LOAD_BOARD
} from '../actions/actionTypes'

const initState = ({
  board: []
})

export const board = (state = initState, action) => {
  switch (action.type) {
    case LOAD_BOARD:
      return { ...state, board: action.board, }
    default: return state
  }
}

