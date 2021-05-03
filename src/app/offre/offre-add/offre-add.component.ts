import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from '../offre.actions';
import * as fromOffer from '../offre.reducer';

@Component({
  selector: 'app-offre-add',
  templateUrl: './offre-add.component.html',
  styleUrls: ['./offre-add.component.css']
})
export class OffreAddComponent implements OnInit {
    
  constructor(private store: Store<fromOffer.State>,private router:Router) { }

  ngOnInit(): void {
  }

  createOffre(name,vd,va){
    const offer: fromOffer.Offre = {
      id : new Date().getUTCMilliseconds().toString(),
      Employee : name,
      vDepart : vd,
      vArrivee : va,
      date : new Date(),
      jour : new Date().getDate(),
      mois : new Date().getMonth(),
      an : new Date().getFullYear()
    }
    this.store.dispatch(new actions.Create(offer));
    this.gotolist();
  }
  gotolist(){
    this.router.navigate(['/Liste'])
  }

}
