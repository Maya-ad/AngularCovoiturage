import * as actions from './offre.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

//main data interface

export interface Offre {
  id : string;
  Employee : string;
  vDepart : string;
  vArrivee : string;
  date : Date;
  jour : number;
  mois : number;
  an : number
}

export const offreAdapter = createEntityAdapter<Offre>();

export interface State extends EntityState<Offre>{}
//default data / initial state
 
/*const defaultOffre = {
  ids: ['123'],
  entities : {
    '123': {
        id: '123',
        name : 'maya'
    }
  }
}*/
export const initialState: State = offreAdapter.getInitialState();

//reducer
export function offreReducer(
  state: State = initialState,
  action: actions.OffreActions){
  
    switch(action.type){
      case actions.CREATE:
        return offreAdapter.addOne(action.offre, state);
      case actions.UPDATE:
        return offreAdapter.updateOne({
          id : action.id,
          changes: action.changes,
        }, state);  
      case actions.DELATE:
        return offreAdapter.removeOne(action.id, state);
      default:
        return state;
    }
  
}
//create default selectors
 export const getOffreState = createFeatureSelector<State>('offre');
export const{
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = offreAdapter.getSelectors(getOffreState);
//export const reducer = createReducer(  initialState,



