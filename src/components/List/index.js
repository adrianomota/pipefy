import React from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Card from '../Card';

export default function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf({
    title: PropTypes.string,
    done: PropTypes.bool,
    creatable: PropTypes.string,
    cards: PropTypes.arrayOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};
