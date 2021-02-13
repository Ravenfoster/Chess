import React from 'react'
import styled from '@emotion/styled'
import { Cell } from './index'

export const Board = () => {

  const Board = styled.div`
  margin: 0 auto;
  width: 584px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(<Cell number={i} color={'black'} />)
  }

  return (
    <Board>
      {squares}
    </Board>
  )
}