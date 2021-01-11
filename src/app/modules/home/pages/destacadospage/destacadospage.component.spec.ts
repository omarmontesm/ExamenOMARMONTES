import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadospageComponent } from './destacadospage.component';

describe('DestacadospageComponent', () => {
  let component: DestacadospageComponent;
  let fixture: ComponentFixture<DestacadospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestacadospageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestacadospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
