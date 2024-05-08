import { Component, Input } from '@angular/core';
import { SkillData } from '../../../../types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skill-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-container.component.html',
  styleUrl: './skill-container.component.css'
})
export class SkillContainerComponent {
  @Input() Title: string = '';
  @Input() Data: SkillData[] = [];

}
