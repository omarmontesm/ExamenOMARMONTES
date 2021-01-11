import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { BookDestacadosComponent } from './components/book-destacados/book-destacados.component';



@NgModule({
  declarations: [BookContainerComponent, BookDestacadosComponent],
  imports: [
    CommonModule
  ],
  exports: [
BookDestacadosComponent,
BookContainerComponent

  ]
})
export class SharedModule { }
