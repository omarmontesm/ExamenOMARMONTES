import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-destacados',
  templateUrl: './book-destacados.component.html',
  styleUrls: ['./book-destacados.component.scss']
})
export class BookDestacadosComponent implements OnInit {


  @Input() book;

  constructor() { }

  ngOnInit(): void {
  }

}
