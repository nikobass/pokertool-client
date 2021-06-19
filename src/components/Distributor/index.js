import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './distributor.scss';
import DistributorChipElement from './DistributorChipElement';

import { addChip } from 'src/actions/distributor';

const Distributor = ({
    nbChips,
    handleAddChip,
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

                    <button className="distributor__form__calculate">Lancer le répartiteur</button>
                </div>
                <div className="distributor__form__tournament">
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
                            <label className="distributor__form__tournament__inputs__container__label">Blinds étape 1</label>
                            <input type="number" className="distributor__form__tournament__inputs__container__input" />
                        </div>
                    </div>
                </div>

            </form>
        </main>
    )
}

Distributor.propTypes = {
    nbChips: PropTypes.number.isRequired,
    handleAddChip: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    nbChips: state.distributor.nbChips,
})

const mapDispatchToProps = (dispatch) => ({
    handleAddChip: (event) => {
        event.preventDefault()
        dispatch(addChip())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Distributor);