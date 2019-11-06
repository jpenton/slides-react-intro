// @ts-check
import React from 'react'

import '../styles/tictactoe.css'

class TicTacToe extends React.Component {
  state = {
    cells: Array.from({ length: 9 }),
    player: 'X',
  }

  markCell = cellIndex => () => {
    if (this.state.cells[cellIndex] !== undefined) {
      return
    }

    this.setState(state => {
      const cells = state.cells.map((cell, index) => {
        if (index === cellIndex) {
          return this.state.player
        }

        return cell
      })
      const winner = this.calcWinner(cells)

      return {
        cells,
        player: this.state.player === 'X' ? 'O' : 'X',
        winner,
      }
    })
  }

  calcWinner = allCells => {
    const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]

    for (const row of winningLines) {
      const cells = row.map(index => allCells[index])

      if (cells.every(cell => cell === cells[0])) {
        return cells[0]
      }
    }
  }

  render() {
    const rows = [
      this.state.cells.slice(0, 3),
      this.state.cells.slice(3, 6),
      this.state.cells.slice(6, 9),
    ]

    return (
      <>
        <div className="board">
          {rows.map((row, rowIndex) => (
            <div className="row">
              {row.map((cell, cellIndex) => (
                <Cell
                  onClick={this.markCell(rowIndex * 3 + cellIndex)}
                  value={cell}
                />
              ))}
            </div>
          ))}
        </div>
        {this.state.winner ? (
          <h1>Winner is {this.state.winner}</h1>
        ) : this.state.cells.filter(cell => cell !== undefined).length === 9 ? (
          <h1>There's a tie</h1>
        ) : null}
      </>
    )
  }
}

class Cell extends React.Component {
  render() {
    const { value, ...rest } = this.props

    return (
      <div className="cell" {...rest}>
        {value}
      </div>
    )
  }
}

export default TicTacToe
