import './App.css'
import { CellGrid, SingleCellStyle, AppCentered, ButtonBox } from './style'

function isValid(board: Array<Array<number>>, i: number, j: number, num: number): boolean {
  for (let p = 0; p < 9; p++) {
    if (board[i][p] === num) return false
    if (board[p][j] === num) return false

    let gridVal = board[3 * Math.floor(i / 3) + Math.floor(p / 3)][3 * Math.floor(j / 3) + p % 3]
    if (gridVal === num) return false
  }
  return true
}

var solveSudoku: any = function(board: Array<Array<number>>) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, i, j, num)) {
            board[i][j] = num
            let solved = solveSudoku(board)
            if (solved !== false) return solved
            board[i][j] = 0
          }
        }
        return false
      }
    }
  }
  return board
}

function App() {
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <AppCentered>
        <p>Sudoku solver</p>
        <CellGrid>
          {index.map((r) => index.map((c) => {
            return (
              <SingleCellStyle
              key={`${r}-${c}`}
              id={`${r}-${c}`}
              className='cell'
              type='number'
              min='0'
              max='9'
              />
            )
          }))}
        </CellGrid>
        <ButtonBox>
          <button
            onClick={() => {
              var temp = new Array(9).fill(0).map(() => new Array(9).fill(0))
              for (let i=0; i < 9; i++) {
                for (let j=0; j < 9; j++) {
                  let x = parseInt((document.getElementById(`${i}-${j}`) as HTMLInputElement).value)
                  if (!isNaN(x)) {
                    temp[i][j] = x
                  }
                }
              }
              temp = solveSudoku(temp)
              for (let i=0; i < 9; i++) {
                for (let j=0; j < 9; j++) {
                  (document.getElementById(`${i}-${j}`) as HTMLInputElement).value = temp[i][j].toString()
                }
              }     
            }}
          >
            Solve
          </button>
          <button
            onClick={() => {
              for (let i=0; i < 9; i++) {
                for (let j=0; j < 9; j++) {
                  (document.getElementById(`${i}-${j}`) as HTMLInputElement).value = ''
                }
              }
            }}
          >
            Reset
          </button>
        </ButtonBox>
    </AppCentered>
  );
}

export default App
