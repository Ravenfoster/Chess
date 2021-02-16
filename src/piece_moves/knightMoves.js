
export const knightMoves = (currentPositionX, currentPositionY, state) => {

  let arrmoves = []
  let position1 = state.board.find(el => +el.dataset.x === currentPositionX - 1 && +el.dataset.y === currentPositionY - 2)
  let position2 = state.board.find(el => +el.dataset.x === currentPositionX + 1 && +el.dataset.y === currentPositionY - 2)
  let position3 = state.board.find(el => +el.dataset.x === currentPositionX - 2 && +el.dataset.y === currentPositionY - 1)
  let position4 = state.board.find(el => +el.dataset.x === currentPositionX - 2 && +el.dataset.y === currentPositionY + 1)
  let position5 = state.board.find(el => +el.dataset.x === currentPositionX - 1 && +el.dataset.y === currentPositionY + 2)
  let position6 = state.board.find(el => +el.dataset.x === currentPositionX + 1 && +el.dataset.y === currentPositionY + 2)
  let position7 = state.board.find(el => +el.dataset.x === currentPositionX + 2 && +el.dataset.y === currentPositionY + 1)
  let position8 = state.board.find(el => +el.dataset.x === currentPositionX + 2 && +el.dataset.y === currentPositionY - 1)
  arrmoves.push(position1, position2, position3, position4, position5, position6, position7, position8)
  let result = arrmoves.filter(el => el !== undefined)
  return result

}

