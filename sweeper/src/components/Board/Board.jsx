import React, { useEffect, useState } from 'react'
import createBoard from '../../lib/createBoard';
import Cube from '../Cube/Cube';
import style from './Board.module.css';

export default function Board() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const newBoard = () => {
      const boardLoad =  createBoard(16, 16, 32);
      setGrid(boardLoad.board)
    }
    newBoard()
  }, [])

  const updateFlag = (event, x, y) => {
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid)
  }

  const checkCube = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    if(newGrid[x][y].value === 'X') {
      alert('mine')
    }
    newGrid[x][y].revealed = true;
    setGrid(newGrid);
  }

  return (
    <div>
      {grid ? 
        grid.map((el) => (
        <div className={style.container} key={Math.random() * 9999}>
          {el.map((item) => (

            <Cube cell={item} checkCube={checkCube} updateFlag={updateFlag} key={Math.random() * 9999} />
          ) )}
          </div>
      ))
      : 
      <div>Loading</div>
    }
    </div>
    
  )
}
