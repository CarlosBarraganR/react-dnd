import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Knight from '../Knight/Knight';

export default class Board extends Component {

    renderSquare(squarePosition) {

        const x = squarePosition % 8;
        const y = Math.floor(squarePosition / 8);
        const isBlack = (x + y) % 2 === 1;
        const [knightX, knightY] =  this.props.knightPosition;
        const hasPiece = (x === knightX && y === knightY) ? <Knight/> : null;
    
        return(
            <div key={squarePosition} style={{width: '12.5%', height: '12.5%'}}>
                <Square black={isBlack}>
                    {hasPiece}
                </Square>
            </div>
        );
    }

    render(){
        const squares = [];

        for (let i = 0; i < 64; i++){
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap'}}>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};