import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderMaterielFormComponent } from './demander-materiel-form.component';

describe('DemanderMaterielFormComponent', () => {
  let component: DemanderMaterielFormComponent;
  let fixture: ComponentFixture<DemanderMaterielFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderMaterielFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanderMaterielFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
