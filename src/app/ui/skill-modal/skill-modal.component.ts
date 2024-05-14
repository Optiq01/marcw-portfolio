import { Component, OnInit } from '@angular/core';
import { LogoStyle, SkillData } from '../../../types/types';
import { SkillModalService } from './skill-modal.service';
import { CommonModule } from '@angular/common';
import { YearCounterComponent } from './year-counter/year-counter.component';
import { SkillDescriptionComponent } from './skill-description/skill-description.component';

@Component({
  selector: 'skill-modal',
  standalone: true,
  imports: [CommonModule, YearCounterComponent, SkillDescriptionComponent],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.css'
})
export class SkillModalComponent implements OnInit {

  Data!: SkillData;

  Styles: LogoStyle = {};

  constructor(private modalService: SkillModalService){}

  ngOnInit(): void {
      this.modalService.CurrentSkill$.subscribe(a=>{
        this.Data = a;
      });
      this.setColors();
  }

  public createViewBox():string{
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

  public closeModal():void{ this.modalService.closeModal(); }

}
