import React from 'react'
import { Knight } from '../../../../../pieces/Knight'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Chessman = (props) => {
  // console.log(props)

  const { x, y } = props

  const imgStyle = css`
  width: 50px;
  margin-top: 10px;
`

  function renderPiece(x, y) {
    if (x === 6 && y === 5) {
      return <Knight css={imgStyle} />
    }
  }

  return (
    <>
      {renderPiece(x, y)}
    </>
  )
}