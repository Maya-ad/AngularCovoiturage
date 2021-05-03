import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from '../offre.actions';
import * as fromOffer from '../offre.reducer';

@Component({
  selector: 'app-offre-update',
  templateUrl: './offre-update.component.html',
  styleUrls: ['./offre-update.component.css']
})
export class OffreUpdateComponent implements OnInit {
  id : string;
  
  constructor(private store: Store<fromOffer.State>, private route: ActivatedRoute,private router:Router) { 
      this.id = this.route.snapshot.params['id'];
      
  }
  
  ngOnInit(): void {
  }

  updateEmploye(name){
    this.store.dispatch(new actions.Update(this.id, {Employee: name}))
    this.gotolist();
  }
  updateVD(name){
    this.store.dispatch(new actions.Update(this.id, {vDepart: name}))
    this.gotolist();
  }
  updateVM(name){
    this.store.dispatch(new actions.Update(this.id, {vArrivee: name}))
    this.gotolist();
  }
  gotolist(){
    this.router.navigate(['/Liste'])
  }

}
