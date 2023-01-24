import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielChartComponent } from './materiel-chart.component';

describe('MaterielChartComponent', () => {
  let component: MaterielChartComponent;
  let fixture: ComponentFixture<MaterielChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
