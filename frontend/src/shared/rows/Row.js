import React from 'react';
import './Row.css';

const Row = React.memo((props) => (<div className="row">{props.children}</div>));

export default Row;
