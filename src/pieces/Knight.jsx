import React from 'react'
import img from '../img/white_knight.png'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useSelector } from 'react-redux'
import { dragStart, getCells, removeHighlighting } from '../core/core'


export const Knight = (props) => {
  // console.log(props)
  const state = useSelector(state => state.board)


  return (
    <>
      <img
        onMouseDown={(e) => getCells(e, state)}
        onMouseUp={() => removeHighlighting(state)}
        onDragStart={(e) => dragStart(e)}
        css={props.className}
        src={img}
        alt='chessmen'
        draggable='true'
        data-piece='knight'
        id='knight'
      />
    </>
  )
}