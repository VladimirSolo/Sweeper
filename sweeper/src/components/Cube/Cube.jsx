import React from 'react'
import style from './Cube.module.css'

export default function Cube({ cell, updateFlag }) {
  const { x, y } = cell;
  return (
    <div 
    className={style.container}
     onClick={() => console.log(cell)}
     onContextMenu={(e) => updateFlag(e, x, y)}
     >
      {cell.value}
    </div>
  )
}
