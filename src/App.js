import './App.css';
import React from "react";
import SubSquare from './SubSquare';

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
            msg: ''
        }
    }
        /*
        */

    onClick = (index, subIndex) => {
        if (this.state.available[index] === 0) { return; }

        var newBoard = this.state.board
        newBoard[index][subIndex] = this.state.turn

        var newAvailable = Array(9).fill(0)
        newAvailable[subIndex] = 1

        this.setState({
            board: newBoard,
            turn: ((this.state.turn === 'x') ? 'o' : 'x'),
            available: newAvailable
        })

        this.checkWin()
    }

    checkWin = () =>  {
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

        for (let i=0; i < 9; i++){
            for (let j=0; j < winConditions.length; j++) {
                const condition = winConditions[j]
                const boardVals = condition.map(subIndex => this.state.board[i][subIndex])
                if (boardVals[0] === 'x' && boardVals[1] === 'x' && boardVals[2] === 'x')
                {
                    this.setState({msg: 'x wins'})
                }
                if (boardVals[0] === 'o' && boardVals[1] === 'o' && boardVals[2] === 'o')
                {
                    this.setState({msg: 'o wins'})
                }
            }
        }
    }

    render() {
        return (
            <div className="bg-pink-400 h-screen w-screen flex justify-center items-center p-0 m-0 text-center">
                <div class="bg-white p-8 rounded-lg 
                shadow-md max-w-md w-full">
                    <h1 class="text-3xl font-bold mb-3 text-center">
                        Tic Tac Squared
                    </h1>
                    <div class="grid grid-cols-3 text-center">
                        {[...Array(9)].map((x, i) =>
                        <SubSquare
                            index={i}
                            onClick={this.onClick}
                            board={this.state.board}
                            isAvailable={!!this.state.available[i]}
                            />
                        )}
                    </div>
                    <div id="status" class="mt-6 text-gray-900 
                        text-center">{this.state.msg}</div>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
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

