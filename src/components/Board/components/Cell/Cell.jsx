import React, { useEffect, useRef } from 'react'
import { Chessman } from './components/Сhessman'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { drop, dragOver, dragEnd } from '../../../../core/core'


export const Cell = (props) => {
  // console.log(props)

  const { color, giveRef, x, y, } = props
  const ref = useRef(null)

  useEffect(() => {
    giveRef(ref.current)

  }, [])


  const Cell = css`
  width: 73px;
  height: 73px;
  background:${color ? 'rgb(87, 70, 70)' : 'white'};
  text-align: center;
`
  return (
    <div
      css={Cell}
      ref={ref}
      data-x={x}
      data-y={y}
      onDrop={(e) => drop(e)}
      onDragOver={(e) => dragOver(e)}
      onDragEnd={(e) => dragEnd(e)}
    >
      {/* {`${x}: ${y}`} */}
      <Chessman x={x} y={y} />
    </div >
  )
}