import React from 'react';
import PropTypes from 'prop-types';

const InputField = React.memo((props) => (
        <label>
            {props.label}
            <input type="text" value={props.value} onChange={props.onHandleChange} />
        </label>
    )
);

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired
};

export default InputField;