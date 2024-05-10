import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SkillModalComponent } from './ui/skill-modal/skill-modal.component';
import { SkillModalService } from './ui/skill-modal/skill-modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SkillModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'marcw-portfolio';
  ModalToggle!: boolean;

  constructor(private modalService: SkillModalService){}

  ngOnInit(){
    this.modalService.ModalActive$.subscribe(a=> this.ModalToggle = a);
  }
}
