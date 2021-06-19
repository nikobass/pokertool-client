import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './distributor.scss';
import DistributorChipElement from './DistributorChipElement';
import DistributorResultElement from './DistributorResultElement';

import { addChip, launchDistributor } from 'src/actions/distributor';

const Distributor = ({
    nbChips,
    handleAddChip,
    chips,
    handleLaunchDistributor,
    isResult,
}) => {

    const children = [];

    for (let i = 0; i < nbChips; i++) {
        children.push(<DistributorChipElement key={i} index={i} />)
    }


    return (

        <main className="distributor">

            <h2 className="distributor__form__subtitle">Répartiteur de jetons</h2>

            <form className="distributor__form">
                <div className="distributor__form__chips">
                    <button className="distributor__form__importChips">Importer mes jetons</button>

                    <div className="distributor__form__container">
                        {
                            children.map(chip => chip)
                        }

                        <div className="distributor__form__container__buttons">
                            <button onClick={handleAddChip} className="distributor__form__container__buttons__button distributor__form__container__buttons__addChip">Ajouter un jeton</button>
                        </div>

                    </div>
                    <div className="distributor__form__tournament__inputs">

                        <div className="distributor__form__tournament__inputs__container">
                            <label className="distributor__form__tournament__inputs__container__label">Joueurs</label>
                            <input type="number" className="distributor__form__tournament__inputs__container__input" />
                        </div>
                        <div className="distributor__form__tournament__inputs__container">
                            <label className="distributor__form__tournament__inputs__container__label">Tapis</label>
                            <input type="number" className="distributor__form__tournament__inputs__container__input" />
                        </div>
                        <div className="distributor__form__tournament__inputs__container">
                            <label className="distributor__form__tournament__inputs__container__label">Petite blind min</label>
                            <input type="number" className="distributor__form__tournament__inputs__container__input" />
                        </div>
                    </div >
                    <button onClick={handleLaunchDistributor} className="distributor__form__calculate">Lancer le répartiteur</button>
                </div>
                {
                isResult &&
                <div className="distributor__form__tournament">

                    <div className="distributor__form__tournament__result">
                        <h2 className="distributor__form__tournament__result__title">Résultat</h2>
                        <p className="distributor__form__tournament__result__text">Quantité à distribuer par joueur:</p>

                        {/* Ne doit être affiché qu'après le calcul du résultat */}
                        <div className="distributor__form__tournament__result__chips">
                            {chips.map((chip, i) => <DistributorResultElement key={i} chipColor={chip.color} value={10} />)}
                        </div>
                    </div>
                </div>}

            </form>
        </main>
    )
}

Distributor.propTypes = {
    nbChips: PropTypes.number.isRequired,
    handleAddChip: PropTypes.func.isRequired,
    chips: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired).isRequired,
}

const mapStateToProps = (state) => ({
    nbChips: state.distributor.nbChips,
    chips: state.distributor.chips,
    isResult: state.distributor.isResult,
})

const mapDispatchToProps = (dispatch) => ({
    handleAddChip: (event) => {
        event.preventDefault()
        dispatch(addChip())
    },
    handleLaunchDistributor: (event) => {
        event.preventDefault()
        dispatch(launchDistributor())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Distributor);