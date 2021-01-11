import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopageComponent } from './iniciopage.component';

describe('IniciopageComponent', () => {
  let component: IniciopageComponent;
  let fixture: ComponentFixture<IniciopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
