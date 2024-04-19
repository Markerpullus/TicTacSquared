import React from 'react';
import X from './X.png';
import O from './O.png';

class Square extends React.Component {
    handleClick = (subIndex) => {
        this.props.onClick(this.props.index, subIndex)
    }

    render() {
        return (
            <div class={"relative" + (this.props.isAvailable ? " bg-yellow-200" : "")
            + (this.props.isX ? " bg-pink-200" : "")
            + (this.props.isO ? " bg-cyan-200" : "")}>
                <div class={"absolute h-full w-full opacity-50 " + (this.props.isX ? "" : " hidden")}>
                    <img src={X} alt="x"/>
                </div>
                <div class={"absolute h-full w-full opacity-50 " + (this.props.isO ? "" : " hidden")}>
                    <img src={O} alt="o"/>
                </div>
                <div class="w-32 h-32 border-gray-400 border-2 grid grid-cols-3 grid-rows-3" id="0">
                    {[...Array(9)].map((x, i) => 
                        <SubSquare value={this.props.board[this.props.index][i]} subIndex={i} handleClick={
                            () => {
                            this.props.onClick(this.props.index, i)
                            }
                        }/>
                    )}
                </div>
            </div>
            
        )
    }
}

function SubSquare ({value, subIndex, handleClick})
{
    return (
        <div
        class={"h-10 w-10 border-gray-200 border-2 font-bold" + ((value === 'x') ? " text-pink-500" : " text-cyan-500")}
        onClick={() => handleClick(subIndex)}>
            {value}
        </div>
    )
}

export default Square;