import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassLayoutComponent } from './forget-pass-layout.component';

describe('ForgetPassLayoutComponent', () => {
  let component: ForgetPassLayoutComponent;
  let fixture: ComponentFixture<ForgetPassLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPassLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPassLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
