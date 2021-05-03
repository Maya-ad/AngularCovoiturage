import { Action } from '@ngrx/store';
import { Offre } from './offre.reducer';

export const CREATE = '[Offres] Create'
export const UPDATE = '[Offres] Update'
export const DELATE = '[Offres] Delete'

export class Create implements Action {
  readonly type = CREATE;
  constructor(public offre:Offre){}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id:string,public changes: Partial<Offre>){

  }
}
  export class Delete implements Action {
    readonly type = DELATE;
    constructor(public id:string){}
  }

export type OffreActions
 = Create 
 | Update 
 | Delete;

