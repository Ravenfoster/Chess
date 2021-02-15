import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { Cell } from './index'
import { LOAD_BOARD } from '../../store/actions/actionTypes'

export const Board = () => {
  const dispatch = useDispatch()
  const allRefs = []

  useEffect(() => {
    dispatch({
      type: LOAD_BOARD,
      payload: allRefs
    })

  }, []);


  const refs = (value) => {
    allRefs.push(value)
  }

  function renderSquare(i) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const black = (x + y) % 2 === 1
    return (
      <Cell key={i} x={x} y={y} color={black} giveRef={refs} />
    )
  }

  const Board = styled.div`
  margin: 0 auto;
  width: 584px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`
  const allCells = []
  for (let i = 0; i < 64; i++) {
    allCells.push(renderSquare(i))
  }


  return (
    <Board>
      {allCells}
    </Board>
  )
}