import React from 'react'
import { Knight } from '../../../../../pieces/Knight'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useSelector } from 'react-redux'

export const Chessman = (props) => {

  const { x, y } = props
  const state = useSelector(state => state)

  const imgStyle = css`
  width: 50px;
  margin-top: 10px;
`

  function getAll(state) {
    console.log('вызов')
    console.log(state)
  }

  function renderPiece(x, y) {
    if (x === 5 && y === 5) {
      return <Knight func={getAll.bind(null, state)} css={imgStyle} />
    }
  }

  return (
    <>
      {renderPiece(x, y)}
    </>
  )
}