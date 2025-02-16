import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangButtomComponent } from './lang-buttom.component';

describe('LangButtomComponent', () => {
  let component: LangButtomComponent;
  let fixture: ComponentFixture<LangButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangButtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
