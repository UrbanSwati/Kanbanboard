import React, { Component } from 'react';
import Card from './../card/Card';
import Kanbanboard from '../kanbanboard/Kanbanboard';
import PropTypes from 'prop-types';
class List extends Component {
  render() {
    let cards = this.props.cards.map(card => {
      return (
        <Card
          id={card.id}
          title={card.title}
          description={card.description}
          tasks={card.tasks}
          color={card.color}
          key={card.id}
        />
      );
    });
    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
};
export default List;
