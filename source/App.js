import React, { Component } from 'react';
import {render} from 'react-dom';

// 부모 컴포넌트
class GroceryList extends Component {
    render(){
        return (
            <ui>
                <ListItem quantity="1">Bread</ListItem>
                <ListItem quantity="6">Eggs</ListItem>
                <ListItem quantity="2">Milk</ListItem>
            </ui>
        );
    }
}

//자식 컴포넌트
class ListItem extends Component {
    render(){
        return (
            <li>
                {this.props.quantity} x {this.props.children}
            </li>
        )    
    }
}

render(<GroceryList />, document.getElementById("root"));