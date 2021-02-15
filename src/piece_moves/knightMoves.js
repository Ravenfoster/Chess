
const knightMoves = (currentPositionX, currentPositionY, parentDiv) => {

  let arrmoves = []
  let position1 = parentDiv.current.find(el => +el.dataset.x === currentPositionX - 1 && +el.dataset.y === currentPositionY - 2)
  let position2 = parentDiv.current.find(el => +el.dataset.x === currentPositionX + 1 && +el.dataset.y === currentPositionY - 2)
  let position3 = parentDiv.current.find(el => +el.dataset.x === currentPositionX - 2 && +el.dataset.y === currentPositionY - 1)
  let position4 = parentDiv.current.find(el => +el.dataset.x === currentPositionX - 2 && +el.dataset.y === currentPositionY + 1)
  let position5 = parentDiv.current.find(el => +el.dataset.x === currentPositionX - 1 && +el.dataset.y === currentPositionY + 2)
  let position6 = parentDiv.current.find(el => +el.dataset.x === currentPositionX + 1 && +el.dataset.y === currentPositionY + 2)
  let position7 = parentDiv.current.find(el => +el.dataset.x === currentPositionX + 2 && +el.dataset.y === currentPositionY + 1)
  let position8 = parentDiv.current.find(el => +el.dataset.x === currentPositionX + 2 && +el.dataset.y === currentPositionY - 1)
  arrmoves.push(position1, position2, position3, position4, position5, position6, position7, position8)
  let result = arrmoves.filter(el => el !== undefined)
  return result

}

export default knightMoves