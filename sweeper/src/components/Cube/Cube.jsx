import React from 'react'
import style from './Cube.module.css'

export default function Cube({ cell, updateFlag, checkCube }) {
  const { x, y } = cell;
  return (
    <div 
    className={style.container}
     onClick={() => checkCube(x, y)}
     onContextMenu={(e) => updateFlag(e, x, y)}
     >
      {cell.revealed ? cell.value : ''}
    </div>
  )
}
