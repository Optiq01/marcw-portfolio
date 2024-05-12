import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearCounterComponent } from './year-counter.component';

describe('YearCounterComponent', () => {
  let component: YearCounterComponent;
  let fixture: ComponentFixture<YearCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
