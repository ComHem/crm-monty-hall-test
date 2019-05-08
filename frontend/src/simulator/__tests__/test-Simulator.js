import React from 'react';
import ReactDOM from 'react-dom';
import Simulator from '../Simulator';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Simulator />, div);
    ReactDOM.unmountComponentAtNode(div);
});

