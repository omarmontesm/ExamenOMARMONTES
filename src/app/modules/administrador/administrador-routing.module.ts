import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookpageComponent } from './pages/add-bookpage/add-bookpage.component';

const routes: Routes = [

  {
    path: 'administrador/:id',
    component: AddBookpageComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
