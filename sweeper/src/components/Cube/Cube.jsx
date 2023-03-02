import React from 'react'
import style from './Cube.module.css'

export default function Cube({ cell }) {
  return (
    <div className={style.container} onClick={() => console.log(cell)}>
      {cell}
    </div>
  )
}
