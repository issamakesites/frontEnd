import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonMaterielComponent } from './mon-materiel.component';

describe('MonMaterielComponent', () => {
  let component: MonMaterielComponent;
  let fixture: ComponentFixture<MonMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
