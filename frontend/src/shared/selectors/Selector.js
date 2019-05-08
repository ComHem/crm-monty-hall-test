import React from 'react';
import PropTypes from 'prop-types';

const Selector = React.memo((props) => (
        <label>
            {props.label}
            <select value={props.value} onChange={props.onHandleChange}>
                {props.optionList.map((item, index) => <option key={index} value={item.key}>{item.value}</option>)}
            </select>
        </label>)
);

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired
};

export default Selector;