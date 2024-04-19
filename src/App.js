import './App.css';
import React from "react";
import Square from './SubSquare';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            board: 
            [['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '']],
            turn: 'x',
            available:
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            won:
            ['', '', '', '', '', '', '', '', ''],
            msg: ''
        }
    }

    onClick = (index, subIndex) => {
        if (this.state.available[index] === 0) { return; }
        if (this.state.board[index][subIndex] !== '') { return; }

        var newBoard = this.state.board
        newBoard[index][subIndex] = this.state.turn

        this.setState({
            board: newBoard,
            turn: ((this.state.turn === 'x') ? 'o' : 'x'),
        })

        this.checkSubSquareWin()
        this.checkWin()

        var newAvailable;
        if (this.state.won[subIndex] !== '')
        {
            newAvailable = Array(9).fill(1)
            for (let i=0; i<9; i++)
            {
                if (this.state.won[i] !== '')
                {
                    newAvailable[i] = 0
                }
            }
        }
        else
        {
            newAvailable = Array(9).fill(0)
            newAvailable[subIndex] = 1
        }

        this.setState({ available: newAvailable })
    }

    checkTicTacToe = (board) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let j=0; j < winConditions.length; j++)
        {
            const condition = winConditions[j]
            const boardVals = condition.map(index => board[index])
            if (boardVals[0] === 'x' && boardVals[1] === 'x' && boardVals[2] === 'x')
            {
                return ('x')
            }
            if (boardVals[0] === 'o' && boardVals[1] === 'o' && boardVals[2] === 'o')
            {
                return ('o')
            }
        }
        return ('')
    }

    checkSubSquareWin = () =>  {
        const newWon = this.state.won
        for (let i=0; i < 9; i++){
            if (newWon[i] !== '') { continue; }
            newWon[i] = this.checkTicTacToe(this.state.board[i])
        }
        this.setState({won: newWon})
    }

    checkWin = () => {
        const winner = this.checkTicTacToe(this.state.won)
        if (winner === '') { return; }
        this.setState({msg: winner + " wins"})
    }

    render() {
        return (
            <div className="bg-pink-400 h-screen w-screen flex justify-center items-center p-0 m-0 text-center">
                <div class="bg-white px-1 py-8 sm:px-8 rounded-lg shadow-md max-w-md w-full">
                    <h1 class="text-3xl font-bold mb-3 text-center">
                        Tic Tac Squared
                    </h1>
                    <div class="grid grid-cols-3 grid-rows-3 text-center gap-0">
                        {[...Array(9)].map((x, i) =>
                        <Square
                            index={i}
                            onClick={this.onClick}
                            board={this.state.board}
                            isAvailable={!!this.state.available[i]}
                            isX={this.state.won[i] === 'x'}
                            isO={this.state.won[i] === 'o'}
                            />
                        )}
                    </div>
                    <div id="status" class="py-3 text-gray-900 
                        text-center text-lg font-bold">{this.state.msg}</div>
                    <button
                        class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded inline-block"
                        onClick={() => {
                            this.setState({
                                board: 
                                [['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', ''],
                                ['', '', '', '', '', '', '', '', '']],
                                turn: 'x',
                                available:
                                [1, 1, 1, 1, 1, 1, 1, 1, 1],
                                won:
                                ['', '', '', '', '', '', '', '', ''],
                                msg: ''
                            })
                        }}>
                        Reset
                    </button>
                </div>
                
            </div>
        );
    }
}

export default App;

