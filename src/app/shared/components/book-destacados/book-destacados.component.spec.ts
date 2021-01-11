import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDestacadosComponent } from './book-destacados.component';

describe('BookDestacadosComponent', () => {
  let component: BookDestacadosComponent;
  let fixture: ComponentFixture<BookDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDestacadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
