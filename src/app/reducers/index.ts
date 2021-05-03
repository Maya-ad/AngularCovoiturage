import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { offreReducer } from '../offre/offre.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  offre: offreReducer  

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
