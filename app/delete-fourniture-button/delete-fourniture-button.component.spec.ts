import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFournitureButtonComponent } from './delete-fourniture-button.component';

describe('DeleteFournitureButtonComponent', () => {
  let component: DeleteFournitureButtonComponent;
  let fixture: ComponentFixture<DeleteFournitureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFournitureButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFournitureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
