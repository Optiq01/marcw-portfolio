import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'year-counter',
  standalone: true,
  imports: [],
  templateUrl: './year-counter.component.html',
  styleUrl: './year-counter.component.css'
})
export class YearCounterComponent implements OnInit, AfterViewInit {
  @Input() Data!: number | undefined;
  Experience: number = 0;

  ngOnInit(): void {
      //this.count();
  }
  
  ngAfterViewInit(): void {
      this.count();
  }

  private count():void{
    const currentYear : number = new Date().getFullYear();
    const exp : number = this.Data ? currentYear - this.Data : 0;
    let i: number = 0;

    const counter = setInterval(()=>{
      this.Experience++;
      if(this.Experience === exp){ clearInterval(counter); }
    }, 30);
  }
}
