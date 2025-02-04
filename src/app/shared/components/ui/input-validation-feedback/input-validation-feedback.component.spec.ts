import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationFeedbackComponent } from './input-validation-feedback.component';

describe('InputValidationFeedbackComponent', () => {
  let component: InputValidationFeedbackComponent;
  let fixture: ComponentFixture<InputValidationFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputValidationFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValidationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
