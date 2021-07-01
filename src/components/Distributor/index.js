import React from 'react';
import { connect } from 'react-redux';

import './distributor.scss';

import DistributorChipElement from './DistributorChipElement';
import DistributorResultElement from './DistributorResultElement';
import { 
    addChip, 
    launchDistributor, 
    changeTournamentInfo ,
    importChips
} from 'src/actions/distributor';

const Distributor = ({
    handleAddChip,
    chips,
    handleLaunchDistributor,
    isResult,
    handleTournamentInfo,
    startingStack,
    nbPlayer,
    result,
    handleImportChips
}) => {

    let children = [];

    for (let i = 0; i < chips.length; i++) {
        children.push(<DistributorChipElement key={i} index={i} />)
    }

    return (

        <main className="distributor">

            <h2 className="distributor__form__subtitle">Répartiteur de jetons</h2>

            <form className="distributor__form" onSubmit={handleLaunchDistributor}>
                <div className="distributor__form__chips">
                    <button onClick={handleImportChips} type="button" className="distributor__form__importChips">Importer mes jetons</button>

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
                            <input onChange={handleTournamentInfo} value={nbPlayer} type="number" name="nbPlayer" className="distributor__form__tournament__inputs__container__input" min="2"   onWheel={(e) => e.target.blur()}/>
                        </div>
                        <div className="distributor__form__tournament__inputs__container">
                            <label className="distributor__form__tournament__inputs__container__label">Tapis de départ</label>
                            <input onChange={handleTournamentInfo} value={startingStack} type="number" name="startingStack" className="distributor__form__tournament__inputs__container__input" min="1" onWheel={(e) => e.target.blur()}/>
                        </div>
                    </div >
                    <button className="distributor__form__calculate">Lancer le répartiteur</button>
                </div>
                {
                isResult &&
                <div className="distributor__form__tournament">

                    <div className="distributor__form__tournament__result">
                        <h2 className="distributor__form__tournament__result__title">Résultat</h2>
                        {!result.error && <p className="distributor__form__tournament__result__text">Jetons à distribuer à chaque joueur:</p>}

                        {/* Ne doit être affiché qu'après le calcul du résultat */}
                        <div className="distributor__form__tournament__result__chips">
                            { !result.error 
                            ? 
                            result.map((chip, i) => <DistributorResultElement key={i} chipColor={chip.color} quantity={chip.quantity} />)
                            :
                            <>
                                <h3 className="distributor__form__tournament__result__chips__errorTitle">CALCUL IMPOSSIBLE</h3>
                                <p className="distributor__form__tournament__result__chips__error">{result.error}</p>
                            </>
                        }
                        </div>
                    </div>
                </div>}

            </form>
        </main>
    )
}

// Distributor.propTypes = {
//     nbChips: PropTypes.number.isRequired,
//     handleAddChip: PropTypes.func.isRequired,
//     chips: PropTypes.arrayOf(PropTypes.shape({
//         color: PropTypes.string.isRequired,
//         value: PropTypes.number.isRequired,
//         number: PropTypes.number.isRequired
//     }).isRequired).isRequired,
// }

const mapStateToProps = (state) => ({
    nbChips: state.distributor.nbChips,
    chips: state.distributor.chips,
    isResult: state.distributor.isResult,
    startingStack: state.distributor.startingStack,
    nbPlayer: state.distributor.nbPlayer,
    result: state.distributor.result,
})

const mapDispatchToProps = (dispatch) => ({
    handleAddChip: (event) => {
        event.preventDefault()
        dispatch(addChip())
    },
    handleLaunchDistributor: (event) => {
        event.preventDefault()
        dispatch(launchDistributor())
    },
    handleTournamentInfo: (event) => {
        dispatch(changeTournamentInfo(event.target.value, event.target.name))
    },
    handleImportChips: (event) => {
        event.preventDefault();
        dispatch(importChips());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Distributor);

