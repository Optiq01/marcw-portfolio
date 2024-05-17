import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill-description',
  standalone: true,
  imports: [],
  templateUrl: './skill-description.component.html',
  styleUrl: './skill-description.component.css'
})
export class SkillDescriptionComponent implements OnInit {

  @Input() Data!: string;
  Description: string = '';
  CursorToggle: boolean = true;

  ngOnInit(): void {
      this.addText();
  }

  private addText():void{
    const text: string[] = this.Data.split('');
    const textTyper = setInterval(()=>{
      if(text.length === 0){
        this.CursorToggle = false;
        clearInterval(textTyper);
      }
      else{
        this.Description += text[0];
        text.shift();
      }
    }, 1);
  }

}
