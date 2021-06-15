import React from 'react';

//components
import Card from 'src/components/Card';

import './cards.scss'
import chip from 'src/images/chips.jpg';
import tournament from 'src/images/tournoi.jpg';
import timer from 'src/images/timer.jpg';


const Cards = () => {
  const cards = [
    {
      image: tournament,
      title:'Gérer vos Tournois',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat pariatur perferendis quisquam doloribus. Dolores cupiditate delectus assumenda, dicta nesciunt fuga iusto odio maiores eaque quisquam! Excepturi, libero.',
    },
    {
      image:chip,
      title:'Gérer vos Jetons',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat pariatur perferendis quisquam doloribus. Dolores cupiditate delectus assumenda, dicta nesciunt fuga iusto odio maiores eaque quisquam! Excepturi, libero.',
    },
    {
      image:timer,
      title:'Gérer votre Timer',
      description:'oh le jolie timer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat pariatur perferendis quisquam doloribus. Dolores cupiditate delectus assumenda, dicta nesciunt fuga iusto odio maiores eaque quisquam! Excepturi, libero.',
    }
  ]
  
  return (
    <div className='card-container-main'>
      {
        cards.map((card)=>(
          < Card 
          key={card.title}
          image={card.image}
          title={card.title}
          description={card.description}
          />

        ))
      }
    </div>
  );
};

export default Cards;
