import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielListComponentComponent } from './materiel-list-component.component';

describe('MaterielListComponentComponent', () => {
  let component: MaterielListComponentComponent;
  let fixture: ComponentFixture<MaterielListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
