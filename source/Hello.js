import React, { Component } from 'react';
import {render} from 'react-dom';

class Hello extends Component {
    render() {
        let place = "World";
        return (
            <h1>Hello {place}!</h1>
        );
    }
}

render(<Hello />, document.getElementById('root'));
