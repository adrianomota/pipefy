import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';
import avatar from '../../assets/new_avatar.jpeg';

export default function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      <img src={data.user || avatar} alt="Adriano Mota" />
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf({
    label: PropTypes.string,
  }).isRequired,
};
