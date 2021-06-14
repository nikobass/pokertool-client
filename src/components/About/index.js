import React from 'react';

import AboutTeamMate from '../AboutTeamMate';

import './about.scss';

const About = () => (
  <main className="about">  
    <AboutTeamMate />
    <div className="about__project">
      <h1 className="about__project__title">
        Idée du projet
      </h1>
      <p className="about__project__description">
        Organiser un tournoi de poker n’est pas chose aisée et demande beaucoup de préparation : structure de tournoi, gestion des jetons, timer, gestion des blinds, du buy-in etc.
      </p>
      <p className="about__project__description">
        Aujourd’hui, il existe de nombreuses ressources sur le web qui facilitent l’organisation de tournois de poker via un timer préconfiguré, un générateur de structure de tournoi ou un calculateur de jetons.
      </p>
      <p className="about__project__description">
        Il est cependant plus rare de trouver une application web gratuite qui regroupe toutes ces fonctionnalités gratuitement et qui permettent à ses utilisateurs de paramétrer ces outils comme ils le souhaitent.
      </p>
    </div>
  </main>
);

export default About;
