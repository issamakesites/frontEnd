import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFournitureComponent } from './admin-fourniture.component';

describe('AdminFournitureComponent', () => {
  let component: AdminFournitureComponent;
  let fixture: ComponentFixture<AdminFournitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFournitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
