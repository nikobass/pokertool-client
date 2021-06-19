import React from 'react';
import { connect } from 'react-redux';

import './distributor.scss';
import DistributorChipElement from './DistributorChipElement';

import {addChip} from 'src/actions/distributor';

const Distributor = ({
    nbChips,
    handleAddChip,
}) => {

    const children = [];

    for(let i = 0; i < nbChips; i++) {
        children.push(<DistributorChipElement key={i} index={i}/>)
    }


    return (

    <main className="distributor">
        <form className="distributor__form">
            <h2 className="distributor__form__subtitle">Répartiteur de jetons</h2>
            <button className="distributor__form__importChips">Importer mes jetons</button>
            <div className="distributor__form__container">
                {
                    children.map(chip => chip)
                }
                <div className="distributor__form__container__buttons">
                <button onClick={handleAddChip} className="distributor__form__container__buttons__button distributor__form__container__buttons__addChip">Ajouter un jeton</button>
                </div>
            </div>
        </form>
    </main>
)}

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