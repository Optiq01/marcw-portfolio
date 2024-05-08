import { TestBed } from '@angular/core/testing';

import { SkillModalService } from './skill-modal.service';

describe('SkillModalService', () => {
  let service: SkillModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
