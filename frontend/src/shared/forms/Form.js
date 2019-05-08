import React from 'react';
import PropTypes from 'prop-types';

const Form = React.memo((props) => (
    <form onSubmit={props.onSubmit}>
        {props.children}
    </form>
    )
);

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Form;