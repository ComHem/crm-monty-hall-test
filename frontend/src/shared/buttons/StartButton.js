import React from 'react';
import PropTypes from 'prop-types';

const StartButton = React.memo((props) => (<input type="submit" value={props.label} />));

StartButton.propTypes = {
    label: PropTypes.string.isRequired
};

export default StartButton;
