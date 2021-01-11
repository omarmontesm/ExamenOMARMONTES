import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciopageComponent } from './pages/iniciopage/iniciopage.component';
import { DestacadospageComponent } from './pages/destacadospage/destacadospage.component';
import { InstructorespageComponent } from './pages/instructorespage/instructorespage.component';


const routes: Routes = [
{
path: '',
component: IniciopageComponent
},
{
  path: 'destacados/:id',
  component: DestacadospageComponent
  },
  {
    path: 'instructores/:id',
    component: InstructorespageComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
