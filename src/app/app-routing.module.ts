import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
path: '',
loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)

},
{
  path: 'books',
  loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule)
},
{
  path: 'addbooks',
  loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
},
{
  path: 'contact',
  loadChildren: () => import('./modules/contactenos/contactenos.module').then(m => m.ContactenosModule)
},
{
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
},
{
  path: 'subscription',
  loadChildren: () => import('./modules/subscription/subscription.module').then(m => m.SubscriptionModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
