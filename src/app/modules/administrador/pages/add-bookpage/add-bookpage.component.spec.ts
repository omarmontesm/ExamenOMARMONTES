import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookpageComponent } from './add-bookpage.component';

describe('AddBookpageComponent', () => {
  let component: AddBookpageComponent;
  let fixture: ComponentFixture<AddBookpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
