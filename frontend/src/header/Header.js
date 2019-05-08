import React from 'react';
import PropTypes from 'prop-types';

const Header = React.memo((props) => (
    <header className="App-header">
        {props.children}
        <img src={props.image} className="App-monty" alt="logo" />
        <h1 className="App-title">{props.header}</h1>
    </header>
    )
);

Header.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired
};

export default Header;