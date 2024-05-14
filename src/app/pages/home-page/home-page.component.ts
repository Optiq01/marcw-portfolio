import { Component, OnInit } from '@angular/core';
import { SkillContainerComponent } from './skill-container/skill-container.component';
import { SkillData } from '../../../types/types';
import { HomePageService } from './home-page.service';
import { UsageMeterComponent } from '../../ui/skill-modal/usage-meter/usage-meter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SkillContainerComponent, UsageMeterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  Languages: SkillData[] = [];
  Frameworks: SkillData[] = [];
  Data: SkillData[] = [];
  Testing: SkillData[] = [];

  constructor(private dataService: HomePageService){}

  ngOnInit(): void {

      this.dataService.getSkills().forEach(a=>{
        switch(a.type){
          case 'language':
            this.Languages.push(a);
            break;
          case 'framework':
            this.Frameworks.push(a);
            break;
          case 'data':
            this.Data.push(a);
            break;
          case 'testing':
            this.Testing.push(a);
            break;
        }
      });
  }

}
