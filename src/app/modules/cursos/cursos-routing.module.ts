import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookpageComponent } from './pages/bookpage/bookpage.component';

const routes: Routes = [

  {
    path: 'cursos/:id',
    component: BookpageComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
