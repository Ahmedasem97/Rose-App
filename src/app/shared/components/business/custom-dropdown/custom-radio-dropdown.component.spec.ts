import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioDropdownComponent } from './custom-radio-dropdown.component';

describe('CustomDropdownComponent', () => {
  let component: CustomRadioDropdownComponent;
  let fixture: ComponentFixture<CustomRadioDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRadioDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomRadioDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
