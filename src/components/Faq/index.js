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
                answer="Pour avoir accès à toutes les fonctionnalités, il suffit de s'inscrire avec un email valide."
            />
            <Faquestion 
                question="L’application est-elle gratuite ?"
                answer="Oui. Ce site est entièrement gratuit."
            />
            <Faquestion 
                question="Quelles sont précisément les fonctionnalités du site ?"
                answer="Création, modification et suppression de tournois.
                Création d’un timer personnalisable.
                Création d’un répartiteur de jetons.
                "
            />
            <Faquestion 
                question="Puis-je utiliser l’application à titre professionnel ?"
                answer="Oui."
            />
            <Faquestion 
                question="Qu’en  est-il de la version mobile ?"
                answer="La version mobile est prévue, la version desktop est développée en priorité."
            />
            <Faquestion 
                question="Comment me désinscrire du site ?"
                answer="Pour se désinscrire, il suffit de cliquer sur 'supprimer mon profil'."
            />
        </ul>
    </main>

)

export default Faq;