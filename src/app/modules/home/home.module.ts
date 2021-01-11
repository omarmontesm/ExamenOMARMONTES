import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IniciopageComponent } from './pages/iniciopage/iniciopage.component';
import { DestacadospageComponent } from './pages/destacadospage/destacadospage.component';
import { InstructorespageComponent } from './pages/instructorespage/instructorespage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [IniciopageComponent, DestacadospageComponent, InstructorespageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
