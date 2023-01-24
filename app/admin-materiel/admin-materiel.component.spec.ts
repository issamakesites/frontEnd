import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaterielComponent } from './admin-materiel.component';

describe('AdminMaterielComponent', () => {
  let component: AdminMaterielComponent;
  let fixture: ComponentFixture<AdminMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
