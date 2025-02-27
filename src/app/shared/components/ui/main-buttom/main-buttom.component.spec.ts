import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButtomComponent } from './main-buttom.component';

describe('MainButtomComponent', () => {
  let component: MainButtomComponent;
  let fixture: ComponentFixture<MainButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainButtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
