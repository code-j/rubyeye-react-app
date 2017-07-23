import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
    render(){
        return (
            <div className="app">
                
                <List id='todo' title="To Do" card={
                    this.props.cards.filter((card) => card.status === "todo")
                } />

                <List id='in-progress' title="In Progress" card={
                    this.props.cards.filter((card) => card.status === "in-progress")
                } />

                <List id='done' title="Done" card={
                    this.props.cards.filter((card) => card.status === "done")
                } />

            </div>
        );
    }
}
export default KanbanBoard;