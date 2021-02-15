import React from 'react'
import img from '../img/white_knight.png'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Knight = (props) => {

  return (
    <>
      <img
        onClick={props.func}
        css={props.className}
        src={img}
        alt='chessmen'
        draggable='true'
      />
    </>
  )
}