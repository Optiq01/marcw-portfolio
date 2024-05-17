import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'usage-meter',
  standalone: true,
  imports: [],
  templateUrl: './usage-meter.component.html',
  styleUrl: './usage-meter.component.css'
})
export class UsageMeterComponent implements AfterViewInit{
  @Input() Data!: number;
  Experience: number = 0;
  UsePercentage: number = 0;

  ngAfterViewInit(): void {
      this.incramentExperience();
      this.incramentUsePercentage();
  }

  private calcExperience():number{
    const portion: number = 180/100;
    return this.Data * portion;

  }
  private incramentUsePercentage():void{
    const incrementer = setInterval(()=>{
      if(this.UsePercentage == this.Data){
        clearInterval(incrementer);
      }
      else{
        this.UsePercentage++;
      }
    },8);
  }

  private incramentExperience():void{
    const experience = this.calcExperience();
    const incrementer = setInterval(()=>{
      if(this.Experience + 1 > 180){
        this.Experience = 180;
        clearInterval(incrementer);
      }
      else{
        if(this.Experience >= experience){ clearInterval(incrementer); }
        else{ this.Experience++; }
      }
    }, .3);
  }
}
