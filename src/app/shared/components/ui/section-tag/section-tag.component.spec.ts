import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTagComponent } from './section-tag.component';

describe('SectionTagComponent', () => {
  let component: SectionTagComponent;
  let fixture: ComponentFixture<SectionTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
