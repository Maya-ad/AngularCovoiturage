import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { offreReducer } from './offre.reducer';
import { OffreComponent } from './Offre/Offre.component';
import { OffreAddComponent } from './offre-add/offre-add.component';
import { OffreUpdateComponent } from './offre-update/offre-update.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    OffreComponent,
    OffreAddComponent,
    OffreUpdateComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Offre', offreReducer ),
    AppRoutingModule
  ],
  exports: [
    OffreComponent,
    OffreAddComponent
      ]
})
export class OffreModule { }
