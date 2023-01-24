import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDemandesChartComponent } from './enseignant-demandes-chart.component';

describe('EnseignantDemandesChartComponent', () => {
  let component: EnseignantDemandesChartComponent;
  let fixture: ComponentFixture<EnseignantDemandesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantDemandesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantDemandesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
