import React, { useEffect, useState } from 'react'
import createBoard from '../lib/createBoard';

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
        <div style={{display: 'flex'}}>
          {el.map((item) => (
            <div style={{width: 30, height: 30, border: '1px solid gray'}}>{item.value}</div>
          ) )}
          </div>
      ))
      : 
      <div>Loading</div>
    }
    </div>
    
  )
}
