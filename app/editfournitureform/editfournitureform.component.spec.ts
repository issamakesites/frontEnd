import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfournitureformComponent } from './editfournitureform.component';

describe('EditfournitureformComponent', () => {
  let component: EditfournitureformComponent;
  let fixture: ComponentFixture<EditfournitureformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfournitureformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfournitureformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
