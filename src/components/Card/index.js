import React from 'react';
import PropTypes from 'prop-types';

import './card.scss'

const Card = ({image, description, title}) => {
  return (
    <div className='card-content'>
      <img className='card-content--image' src={image} alt={title}/>
      <h3 className='card-content--title'>{title}</h3>
      <p className='card-content--description'>{description}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description:  PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired
}

export default Card;
