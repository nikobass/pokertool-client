export const OPEN_MODAL_TOURNAMENT_DETAILS = 'OPEN_MODAL_TOURNAMENT_DETAILS'
export const CLOSE_TOURNAMENT_DETAILS_MODAL = 'CLOSE_TOURNAMENT_DETAILS_MODAL'

export const tournamentDetailsModal = () => ({
  type : OPEN_MODAL_TOURNAMENT_DETAILS
})

export const closeTournamentDetailsModal = () => ({
  type: CLOSE_TOURNAMENT_DETAILS_MODAL
})
