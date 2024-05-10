import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkillData } from '../../../types/types';

const DEFAULT : SkillData = {
  id:'',
  name: '',
  type: 'language',
  logo: '',
  viewBox:{
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  colors: [],
  experience:{},
  usage: 0,
  description: ''
}

@Injectable({
  providedIn: 'root'
})
export class SkillModalService {

  private CurrentSkill: BehaviorSubject<SkillData> = new BehaviorSubject<SkillData>(DEFAULT);
  public CurrentSkill$ = this.CurrentSkill.asObservable();
  private ModalActive : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public ModalActive$ = this.ModalActive.asObservable();

  constructor() { }

  private openModal(): void{ this.ModalActive.next(true); }
  public closeModal(): void{ this.ModalActive.next(false); }

  public updateCurrentSkill(skill: SkillData): void{
    this.CurrentSkill.next(skill);
    this.openModal();
  }
}
