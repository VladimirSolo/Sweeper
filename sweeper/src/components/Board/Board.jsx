import React, { useEffect, useState } from 'react'
import checked from '../../lib/checked';
import createBoard from '../../lib/createBoard';
import Cube from '../Cube/Cube';
import style from './Board.module.css';

export default function Board() {
  const [grid, setGrid] = useState([]);
  const [bombsCount, setBombsCount] = useState(0);
  const [bombsPosition, setBombsPosition] = useState([]);

  useEffect(() => {
    const newBoard = () => {
      const boardLoad =  createBoard(16, 16, 32);
      setBombsCount(16 * 16 - 32);
      setBombsPosition(boardLoad.bombsPosition);
      setGrid(boardLoad.board);
    }
    newBoard();
  }, []);

  const updateFlag = (event, x, y) => {
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  }

  const checkCube = (x, y) => {
    if (grid[x][y].revealed) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if(newGrid[x][y].value === 'X') {
      alert('bomb')
      for(let i = 0; i < bombsPosition.length; i++) {
        newGrid[bombsPosition[i][0]][bombsPosition[i][1]].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let checkedBoard = checked(newGrid, x, y, bombsCount);
      setGrid(checkedBoard.arr);
      setBombsCount(checkedBoard.bombs);
    }
  }

  return (
    <div>
      <p>{bombsCount}</p>
      <div className={style.container}>
      {grid ? 
        grid.map((el) => (
        <div className={style.box} key={Math.random() * 9999}>
          {el.map((item) => (
            <Cube cell={item} checkCube={checkCube} updateFlag={updateFlag} key={Math.random() * 9999} />
          ) )}
          </div>
      ))
      : 
      <div>Loading</div>
    }
      </div>
    </div>
    
  )
}
