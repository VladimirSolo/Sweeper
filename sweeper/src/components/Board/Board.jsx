import React, { useEffect, useState } from 'react'
import createBoard from '../../lib/createBoard';
import Cube from '../Cube/Cube';
import style from './Board.module.css';

export default function Board() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const newBoard = () => {
      const boardLoad =  createBoard(16, 16, 32);
      setGrid(boardLoad)
    }
    newBoard()
  }, [])

  return (
    <div>
      {grid.board ? 
        grid.board.map((el) => (
        <div className={style.container}>
          {el.map((item) => (

            <Cube cell={item.value} />
          ) )}
          </div>
      ))
      : 
      <div>Loading</div>
    }
    </div>
    
  )
}
