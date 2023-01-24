import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationFieldsComponent } from './affectation-fields.component';

describe('AffectationFieldsComponent', () => {
  let component: AffectationFieldsComponent;
  let fixture: ComponentFixture<AffectationFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
