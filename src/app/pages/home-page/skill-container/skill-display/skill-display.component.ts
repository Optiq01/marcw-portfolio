import { Component, Input, OnInit } from '@angular/core';
import { SkillData, SkillExperience } from '../../../../../types/types';
import { CommonModule } from '@angular/common';
import { SkillModalService } from '../../../../ui/skill-modal/skill-modal.service';

export interface LogoStyle{
  [prop: string]: string;
}

@Component({
  selector: 'skill-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-display.component.html',
  styleUrl: './skill-display.component.css'
})
export class SkillDisplayComponent implements OnInit {
  @Input() Data!: SkillData;

  Styles : LogoStyle = {};

  constructor(private modalService: SkillModalService){}

  ngOnInit(): void {
      this.setColors();
  }

  public getViewBoxSettings(): string{
    return `${this.Data.viewBox.x} ${this.Data.viewBox.y} ${this.Data.viewBox.width} ${this.Data.viewBox.height}`;
  }

  private setColors(){

    this.Data.colors.forEach(a=>{
      let prop: string = '';
      if(a.order < 10){ prop = `--color0${a.order}`; }
      else{ prop = `--color${a.order}`; }

      this.Styles[prop] = `hsl(var(--${a.color}), 1)`;
    });
  }

  public calcExperience(): string{
    const date: Date = new Date();
    const currentYear: number = date.getFullYear();
    
    return `${currentYear - this.Data.experience.startYear!} yrs`;
  }

  public openModal():void{
    this.modalService.updateCurrentSkill(this.Data);
  }
}
