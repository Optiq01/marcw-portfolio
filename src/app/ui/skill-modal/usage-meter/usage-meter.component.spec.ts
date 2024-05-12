import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageMeterComponent } from './usage-meter.component';

describe('UsageMeterComponent', () => {
  let component: UsageMeterComponent;
  let fixture: ComponentFixture<UsageMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageMeterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsageMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
