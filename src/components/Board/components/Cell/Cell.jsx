import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Chessman } from './components/Сhessman'


export const Cell = (props) => {

  const { color, giveRef, x, y, } = props

  const ref = useRef(null)
  useEffect(() => {
    giveRef(ref.current)

  }, [])

  const Cell = styled.div`
  width: 73px;
  height: 73px;
  background:${color ? 'rgb(87, 70, 70)' : 'white'};
  text-align: center;
`

  return (
    <Cell ref={ref} data-x={x} data-y={y} >
      <Chessman x={x} y={y} />
    </Cell >
  )
}