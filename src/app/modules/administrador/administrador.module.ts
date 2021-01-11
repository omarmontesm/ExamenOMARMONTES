import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AddBookpageComponent } from './pages/add-bookpage/add-bookpage.component';


@NgModule({
  declarations: [AddBookpageComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
