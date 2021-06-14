import React from 'react';

import './aboutteammate.scss';
import img_niko from 'src/assets/images/niko.png';
import img_juan from 'src/assets/images/juan.jpeg';
import img_kevin from 'src/assets/images/kevin.png';
import img_alexandre from 'src/assets/images/alexandre.jpeg';
import img_pascal from 'src/assets/images/pascal.png';


const AboutTeamMate = () => (
  <div className="about__team">
    <h1 className="about__team__mainTitle">À propos de nous</h1>
    <div className="about__team__cards">
      <div className="about__team__cards__card">
        <img className="about__team__cards__card__img" src={img_juan} alt="photo Juan"/>
        <p className="about__team__cards__card__role">
          Product Owner
        </p>
        <p className="about__team__cards__card__name">
          Juan Machado
        </p>
      </div>
      <div className="about__team__cards__card">
        <img className="about__team__cards__card__img" src={img_niko} alt="photo Niko"/>
        <p className="about__team__cards__card__role">
          Scrum Master
        </p>
        <p className="about__team__cards__card__name">
          Nicolas Vivat
        </p>
      </div>
      <div className="about__team__cards__card">
        <img className="about__team__cards__card__img" src={img_kevin} alt="photo Kevin"/>
        <p className="about__team__cards__card__role">
          Lead Developer Front
        </p>
        <p className="about__team__cards__card__name">
          Kévin Degregory
        </p>
      </div>
      <div className="about__team__cards__card">
        <img className="about__team__cards__card__img" src={img_alexandre} alt="photo Alexandre"/>
        <p className="about__team__cards__card__role">
          Git Master
        </p>
        <p className="about__team__cards__card__name">
          Alexandre Kelifa
        </p>
      </div>
      <div className="about__team__cards__card">
        <img className="about__team__cards__card__img" src={img_pascal} alt="photo Pascal"/>
        <p className="about__team__cards__card__role">
          Lead Developer Back
        </p>
        <p className="about__team__cards__card__name">
          Pascal Vallade
        </p>
      </div>
    </div>
  </div>
);

export default AboutTeamMate;
