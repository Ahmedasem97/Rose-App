import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLayoutComponent } from './all-layout.component';

describe('AllLayoutComponent', () => {
  let component: AllLayoutComponent;
  let fixture: ComponentFixture<AllLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
