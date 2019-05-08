/**
 * SimulatorResult.
 * @author andre@orefjard.com (André Orefjärd)
 */

import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../shared/rows/Row';

const SimulatorResult = React.memo((props) => (
    <div>
        <Row>Result for ({props.drawList.length}) simulations:</Row>
        <Row>{`Num of wins: ${props.numWins}`}<br/>
            {`Hit frequency: ${(props.hitFrequency * 100).toFixed(2)}% (${props.numWins}/${props.drawList.length})`}
        </Row>

        <div>
            { props.drawList.map((item, index) => <Row key={index}> {`Draw ${(index + 1)}: ${item.won ? 'Won' : 'Lost'}`}</Row>) }
        </div>
    </div>
));

SimulatorResult.propTypes = {
    drawList: PropTypes.array.isRequired,
    numWins: PropTypes.number.isRequired,
    hitFrequency: PropTypes.number.isRequired
};

export default SimulatorResult;
