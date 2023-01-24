import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournitureChartComponent } from './fourniture-chart.component';

describe('FournitureChartComponent', () => {
  let component: FournitureChartComponent;
  let fixture: ComponentFixture<FournitureChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournitureChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournitureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
