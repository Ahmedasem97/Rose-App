import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstgramComponent } from './instgram.component';

describe('InstgramComponent', () => {
  let component: InstgramComponent;
  let fixture: ComponentFixture<InstgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
