import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SkillModalComponent } from './ui/skill-modal/skill-modal.component';
import { SkillModalService } from './ui/skill-modal/skill-modal.service';
import { animation, animate, transition, state, style, trigger } from '@angular/animations';

export const ModalAnimation = trigger('modalAnimation', [
  state('closed', style({ transform: 'scale(0)', opacity: 0, display: 'none' }) ),
  state('open', style({ transform: 'scale(1)', opacity: 1, display: 'grid' }) ),
  transition('closed <=> open', [animate('.3s')])
])

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SkillModalComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [ModalAnimation]
})
export class AppComponent implements OnInit {
  title = 'marcw-portfolio';
  ModalToggle!: boolean;

  constructor(private modalService: SkillModalService){}

  ngOnInit(){
    this.modalService.ModalActive$.subscribe(a=> this.ModalToggle = a);
  }
}
