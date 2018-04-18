import React, { Component } from 'react';
import List from './../list/List';
import PropTypes from 'prop-types';
class Kanbanboard extends Component {
  render() {
    return (
      <div classame="app">
        <List
          id="todo"
          title="To Do"
          cards={this.props.cards.filter(card => card.status === 'todo')}
        />
        <List
          id="in-progress"
          title="In Progress"
          cards={this.props.cards.filter(card => card.status === 'in-progress')}
        />
        <List
          id="done"
          title="Done"
          cards={this.props.cards.filter(card => card.status === 'done')}
        />
      </div>
    );
  }
}

Kanbanboard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Kanbanboard;
