import React from 'react';
import Faquestion from 'src/components/Faquestion'

import './faq.scss';

const Faq = () => (

    <main className="faq">
        <h1>
            Questions fréquement posées (FAQ):
        </h1>  
        <ul> 
            <Faquestion 
                question="Comment avoir accès aux fonctionnalités ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor."
            />
            <Faquestion 
                question="L’application est-elle gratuite ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor."
            />
            <Faquestion 
                question="Quelles sont précisément les fonctionnalités du site ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor."
            />
            <Faquestion 
                question="Puis-je utiliser l’application à titre professionnel ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor."
            />
            <Faquestion 
                question="Qu’en  est-il de la version mobile ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor."
            />
            <Faquestion 
                question="Comment me désinscrire du site ?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor."
            />
        </ul>
    </main>

)

export default Faq;