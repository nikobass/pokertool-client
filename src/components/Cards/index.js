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
      description: 'Créez vos propres tournois en les paramétrant entièrement: Nom, Date, Lieu, Cash-Price, Tapis de départ, Blinds etc... !!!',
    },
    {
      image:chip,
      title:'Gérer vos Jetons',
      description:'Virtualisez les jetons de votre propre mallette de poker ! Choisissez leur couleur, leur valeur et le nombre.',
    },
    {
      image:timer,
      title:'Gérer votre Timer',
      description:'Le timer est un outil qui permet aux joueurs de connaître les diverses informations indispensables au bon déroulement d’une partie.',
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
