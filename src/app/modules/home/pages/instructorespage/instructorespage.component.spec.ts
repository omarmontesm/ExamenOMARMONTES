import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorespageComponent } from './instructorespage.component';

describe('InstructorespageComponent', () => {
  let component: InstructorespageComponent;
  let fixture: ComponentFixture<InstructorespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
