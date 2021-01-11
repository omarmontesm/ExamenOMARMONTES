import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionpageComponent } from './pages/subscriptionpage/subscriptionpage.component';

const routes: Routes = [
  {
    path: 'subscription/:id',
    component: SubscriptionpageComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
