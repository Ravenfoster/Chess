import React from 'react'
import styled from '@emotion/styled'

export const Cell = ({ number }) => {
  const x = number % 8
  const y = Math.floor(number / 8)
  const black = (x + y) % 2 === 1

  const Cell = styled.css`
  width: 73px;
  height: 73px;
  background:${black ? 'rgb(87, 70, 70)' : 'white'}
`

  return (
    <Cell />
  )
}