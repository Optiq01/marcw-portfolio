import { Component, OnInit } from '@angular/core';
import { SkillData } from '../../../types/types';
import { SkillModalService } from './skill-modal.service';

@Component({
  selector: 'app-skill-modal',
  standalone: true,
  imports: [],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.css'
})
export class SkillModalComponent implements OnInit {

  Data!: SkillData;

  constructor(private modalService: SkillModalService){}

  ngOnInit(): void {
      this.modalService.CurrentSkill$.subscribe(a=>{ this.Data = a});
  }

  public closeModal():void{ this.modalService.closeModal(); }

}
