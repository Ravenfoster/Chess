import { knightMoves } from '../piece_moves/knightMoves'

let result = []

export const getCells = (e, state) => {
  let currentPositionX = +e.target.closest('div').dataset.x
  let currentPositionY = +e.target.closest('div').dataset.y

  if (e.target.dataset.piece === 'knight') {
    result = knightMoves(currentPositionX, currentPositionY, state)
    result.forEach(el => el.style.background = 'blue')
  }
}

export const removeHighlighting = (state) => {
  result.forEach(el => el.style.background = '')
}

export const drop = (e) => {
  e.preventDefault()
  let card_id = e.dataTransfer.getData('id')
  let card = document.getElementById(card_id)
  if (result.includes(e.target)) {
    e.target.appendChild(card)
    result.forEach(el => el.style.background = '')
  }

}

export const dragStart = (e) => {
  const target = e.target
  e.dataTransfer.setData('id', target.id)
  // setTimeout(() => {
  //   target.style.display = 'none'
  // }, 0)
}

export const dragOver = (e) => {
  e.preventDefault()
}

export const dragEnd = (e) => {
  e.preventDefault()
  result.forEach(el => el.style.background = '')
}