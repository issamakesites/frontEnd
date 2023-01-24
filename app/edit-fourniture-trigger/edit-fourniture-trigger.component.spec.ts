import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFournitureTriggerComponent } from './edit-fourniture-trigger.component';

describe('EditFournitureTriggerComponent', () => {
  let component: EditFournitureTriggerComponent;
  let fixture: ComponentFixture<EditFournitureTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFournitureTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFournitureTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
