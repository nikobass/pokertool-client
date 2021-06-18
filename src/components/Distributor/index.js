import React from 'react';

import './distributor.scss';
import DistributorChipElement from './DistributorChipElement';

const Distributor = () => (

    <main className="distributor">
        <form className="distributor__form">
            <h2 className="distributor__form__subtitle">Répartiteur de jetons</h2>
            <button className="distributor__form__importChips">Importer mes jetons</button>
            <div className="distributor__form__container">
                <DistributorChipElement />
                <DistributorChipElement />
                <DistributorChipElement />
                <button className="distributor__form__container__addChip">Ajouter un jeton</button>
            </div>
        </form>
    </main>
)

export default Distributor;