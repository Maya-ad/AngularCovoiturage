import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreUpdateComponent } from './offre-update/offre-update.component';

const routes: Routes = [
 
  { path: 'update/:id', component: OffreUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
