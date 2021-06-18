import React from 'react';

import './distributor.scss';
import DistributorChipElement from './DistributorChipElement';

const Distributor = () => (

    <main className="distributor">
        <form className="distributor__form">
            <h2 className="distributor__form__subtitle">Répartiteur de jetons</h2>
            <div className="distributor__form__container">
                <DistributorChipElement />
            </div>
        </form>
    </main>
)

export default Distributor;