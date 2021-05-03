import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreAddComponent } from './offre/offre-add/offre-add.component';
import { OffreUpdateComponent } from './offre/offre-update/offre-update.component';
import { OffreComponent } from './offre/Offre/Offre.component';


const routes: Routes = [
  { path: 'Add', component: OffreAddComponent },
  { path: 'Liste', component: OffreComponent },
  { path: 'update/:id', component: OffreUpdateComponent},
  { path: '',
    redirectTo: '/Add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
