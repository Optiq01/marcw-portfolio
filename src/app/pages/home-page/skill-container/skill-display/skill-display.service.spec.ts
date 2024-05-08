import { TestBed } from '@angular/core/testing';

import { SkillDisplayService } from './skill-display.service';

describe('SkillDisplayService', () => {
  let service: SkillDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
