import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SkillModalComponent } from './ui/skill-modal/skill-modal.component';
import { SkillModalService } from './ui/skill-modal/skill-modal.service';
import { animation, animate, transition, state, style, trigger } from '@angular/animations';

export const ModalAnimation = trigger('modalAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      zIndex: -4,
      transform: 'scale(0)'
    }),
    animate('.07s',
      style({
        opacity: 1,
        zIndex: 44,
        transform: 'scale(1)'
      })
    )
  ]),
  transition(':leave', [
    animate('.1s',
      style({
        opacity: 0,
        scale: 0,
        zIndex: -4
      })
    )
  ])
  /*state(':leave', style({ transform: 'scale(0)', opacity: 0, zIndex: -4 }) ),
  state(':enter', style({ transform: 'scale(1)', opacity: 1, zIndex: 44 }) ),
  transition(':enter <=> :leave', [animate('.3s')])*/
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
