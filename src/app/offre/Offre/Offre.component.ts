import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../offre.actions';
import * as fromOffer from '../offre.reducer';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  offres: Observable<any>;
  constructor(private store: Store<fromOffer.State>,private router:Router) { }

  ngOnInit(): void {
    this.offres = this.store.select(fromOffer.selectAll)
  }

 /* createOffre(name){
    const offer: fromOffer.Offre = {
      id : new Date().getUTCMilliseconds().toString(),
      name : name
    }
    this.store.dispatch(new actions.Create(offer))
  }
*/
 
  updateOffre(id, name){
    this.store.dispatch(new actions.Update(id, {Employee: name}))
  }

  deleteOffre(id){
    this.store.dispatch(new actions.Delete(id))
  }
  update(id){
    this.router.navigate(['update',id]);
  }
}
