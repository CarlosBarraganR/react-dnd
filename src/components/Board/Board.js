import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Knight from '../Knight/Knight';

export default class Board extends Component {
    render(){
        return (
            <div>
                <Square black>
                    <Knight/>
                </Square>
            </div>
        );
    }
}

Board.propTypes = {
    knigthPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};