import React from 'react';

class SubSquare extends React.Component {
    handleClick = (subIndex) => {
        this.props.onClick(this.props.index, subIndex)
    }

    render() {
        return (
            <div class={"h-32 w-32  border-gray-400 border-2 grid grid-cols-3 " + (this.props.isAvailable ? "bg-yellow-200" : "")} id="0">
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(0)}>{this.props.board[this.props.index][0]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(1)}>{this.props.board[this.props.index][1]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(2)}>{this.props.board[this.props.index][2]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(3)}>{this.props.board[this.props.index][3]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(4)}>{this.props.board[this.props.index][4]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(5)}>{this.props.board[this.props.index][5]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(6)}>{this.props.board[this.props.index][6]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(7)}>{this.props.board[this.props.index][7]}</div>
                <div class="h-10 w-10 border-gray-200 border-2" onClick={() => this.handleClick(8)}>{this.props.board[this.props.index][8]}</div>
            </div>
        )
    }
}

export default SubSquare;