import { Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
  animations: [ 
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms', style({ opacity: 1,transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms', style({ opacity: 1,transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('slideInBottom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(200%) rotate(-90deg) translateX(-20px)' }),
        animate('500ms 500ms', style({ opacity: 1,transform: 'translateY(0%) rotate(-90deg) translateX(-20px)' })),
      ]),
    ]),
    trigger('popUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('500ms 700ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-350%)' }),
        animate('.85s 2s ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' })),
      ]),
    ]),
    
  ]
})
export class StartScreenComponent implements OnInit {

  ngOnInit(): void {
    
  }  

}
