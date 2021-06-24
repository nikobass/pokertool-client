import axios from 'axios';

import { structureCreator } from 'src/utils/structureCreator'

import {
  GET_TOURNAMENTS_ALL_USER,
  getTournamentUserSuccess,
  DELETE_TOURNAMENT_USER,
  deleteTournamentSucces,
  getOneTournamentUserSuccess,
  GET_ONE_TOURNAMENT_USER ,
  tournamentSubmitSuccess,
  TOURNAMENT_SUBMIT,
  modifyTournamentSuccess,
  MODIFY_TOURNAMENT_VALIDATE,
  GET_STRUCTURE_TOURNAMENT,
  getStructureTournamentSuccess,
  CREATE_STRUCTURE,
  addStructureToState,
  tournamentSubmit,
  clearTournament

} from 'src/actions/tournament';


const tournamentsMiddleware = (store) => (next) => (action) => {

    switch (action.type) {
      case GET_TOURNAMENTS_ALL_USER :
        const tournamentUserId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');  
        
        axios({
          method: 'get',
          url: `http://localhost:3000/tournaments/${tournamentUserId}`,
          headers: {"Authorization" : `Bearer ${token}`}
        })
        .then((response) =>{
          store.dispatch(getTournamentUserSuccess(response.data))
          
        })
        .catch((err) => console.log(err),
        store.dispatch(clearTournament())
        );
       
      break;

      case GET_ONE_TOURNAMENT_USER : {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');

        axios({
          method:'get',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` }
        })
        .then((response) => {
          store.dispatch(getOneTournamentUserSuccess(response.data));
         
        })
        .catch((error) => console.log(error));
      break;
    }

      case DELETE_TOURNAMENT_USER: {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');
  
        axios({
          method: 'delete',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` }
        })
          .then((response) => {
            store.dispatch(deleteTournamentSucces(tournamentId));
          })
          .catch((error) => console.log(error));
        break;
      }

      case TOURNAMENT_SUBMIT: {
        const state = store.getState();
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        console.log(state.tournament.structureTournament)
  

        axios ({
          method: 'post',
          url: `http://localhost:3000/tournament/${userId}`,
          headers: { "Authorization": `Bearer ${token}` },
          data:  [    {
            name: state.tournament.creatTournament.name,
            date: state.tournament.creatTournament.date,
            location: state.tournament.creatTournament.location,
            speed:state.tournament.creatTournament.speed,
            nb_players:state.tournament.creatTournament.nb_players,
            comments:state.tournament.creatTournament.comments,
            cash_price:state.tournament.creatTournament.cash_price,
            buy_in:state.tournament.creatTournament.buy_in,
            starting_stack: state.tournament.creatTournament.starting_stack,
            small_blind: state.tournament.creatTournament.small_blind,
            chips_user: false,
          },
          
            state.tournament.structureTournament

          
        ]

        })
          .then(response => {
            console.log(response.data);
            console.log('test')
            // Créer une autre action qui modifie le state (donc la dispatch)
            // le return de la fonction structureCreator remplacera structureTournament dans le state
            store.dispatch(tournamentSubmitSuccess(dataEnvoyer));
            
          })
          .catch((err) => {          
            console.log(err.response.data);
            console.log(dataEnvoyer)
          });
        break;
      }
      case MODIFY_TOURNAMENT_VALIDATE : {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');
        console.log(state.tournament.structureTournament)

        const dataEnvoyer = [    {
          name: state.tournament.oneTournament.name,
          date: state.tournament.oneTournament.date,
          location: state.tournament.oneTournament.location,
          speed:state.tournament.oneTournament.speed,
          nb_players:state.tournament.oneTournament.nb_players,
          comments:state.tournament.oneTournament.comments,
          cash_price:state.tournament.oneTournament.cash_price,
          buy_in:state.tournament.oneTournament.buy_in,
          starting_stack: state.tournament.oneTournament.starting_stack,
          small_blind: state.tournament.oneTournament.small_blind,
          status: state.tournament.oneTournament.status,
          chips_user: false,
        },
        
          state.tournament.structureTournament

        
      ]

        axios({
          method:'patch',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` },
          data: [    {
            name: state.tournament.oneTournament.name,
            date: state.tournament.oneTournament.date,
            location: state.tournament.oneTournament.location,
            speed:state.tournament.oneTournament.speed,
            nb_players:state.tournament.oneTournament.nb_players,
            comments:state.tournament.oneTournament.comments,
            cash_price:state.tournament.oneTournament.cash_price,
            buy_in:state.tournament.oneTournament.buy_in,
            starting_stack: state.tournament.oneTournament.starting_stack,
            small_blind: state.tournament.oneTournament.small_blind,
            status: state.tournament.oneTournament.status,
            chips_user: false,
          },
          
            state.tournament.structureTournament

          
        ]
        })
        .then((response) => {

          console.log(response.data)
          store.dispatch(modifyTournamentSuccess(response.data));
        })
        .catch((err) => console.log(err.response.data.message));
        console.log(dataEnvoyer)
        ;
      break;
    }

    case GET_STRUCTURE_TOURNAMENT :{ 
      const state = store.getState();
      const tournamentId = state.tournament.currentId;
      const token = localStorage.getItem('token');  
      
      axios({
        method: 'get',
        url: `http://localhost:3000/structure/${tournamentId}`,
        headers: {"Authorization" : `Bearer ${token}`},
        data:{
          structure : state.tournament.structureTournament

        }
      })
      .then((response) =>{
        console.log(response.data)
        store.dispatch(getStructureTournamentSuccess(response.data))
        
      })
      .catch((err) => console.log(err));
      break;
    }

    case CREATE_STRUCTURE :{
      const state = store.getState()
     // const token = localStorage.getItem('token');  
      
      store.dispatch(addStructureToState(
        structureCreator(
          state.tournament.creatTournament.small_blind,
          state.tournament.creatTournament.nb_players,
          state.tournament.creatTournament.starting_stack,
          state.tournament.creatTournament.speed
          )));
      store.dispatch(tournamentSubmit())
      
      break;

    }
    
    //Ici tu vas gérer le case pour ton action qui créer la structure
    // Dans cette action tu vas appeler la fonction structureCreator(small_blind, nb_players, starting_stack, speed)
    // Tu vas lancer une action qui prend en paramètre la fonction qui retourne la structure
    // tu peux récupérer toutes les données du state grâce a store.getState();
    // store.dispatch(addStructureToState(structureCreator(small_blind, nb_players, starting_stack, speed)))
    // DAns cette action, tu vas éxécuter l'action qui créer le tournoi
    // Donc store.dispatch(tournamentSubmit())

     
    

      default:
        next(action);
        break;
    }
};

export default tournamentsMiddleware;
