import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDescriptionComponent } from './skill-description.component';

describe('SkillDescriptionComponent', () => {
  let component: SkillDescriptionComponent;
  let fixture: ComponentFixture<SkillDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
