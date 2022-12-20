import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('grayscale', [
      state('rest', style({
        filter: 'grayscale(1)'
      })),
      state('hover', style({
        filter: 'grayscale(0)'
      })),      
      transition('* => *', animate('225ms ease-in')),
    ]),
    trigger('frame', [
      state('rest', style({
        filter: 'opacity(0)'
      })),
      state('hover', style({
        filter: 'opacity(1)'
      })),      
      transition('* => *', animate('225ms ease-in')),
    ]),
    trigger('circle', [
      state('rest', style({
        rotate: '135deg',
        transform: 'scale(0)',
      })),
      state('hover', style({
        rotate: '0deg',
        transform: 'scale(1)',
      })),      
      transition('rest => hover', animate('225ms 150ms ease-in')),
      transition('hover => rest', animate('225ms ease-in')),
    ]),
    trigger('text-left', [
      state('rest', style({
        filter: 'opacity(0)',
        transform: 'translateX(-200px)',
      })),
      state('hover', style({
        filter: 'opacity(1)',
        transform: 'translateX(0px)',
      })),      
      transition('rest => hover', animate('225ms 300ms ease-in')),
      transition('hover => rest', animate('225ms ease-in')),
    ]),    
    trigger('text-right', [
      state('rest', style({
        filter: 'opacity(0)',
        transform: 'translateX(200px)',
      })),
      state('hover', style({
        filter: 'opacity(1)',
        transform: 'translateX(0px)',
      })),      
      transition('rest => hover', animate('225ms 300ms ease-in')),
      transition('hover => rest', animate('225ms ease-in')),
    ]),    
  ],
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Sharkie',
      techs: ['OOP |', 'Javascript |', 'HTML |', 'CSS'],
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius fugiat cupiditate odio nam vero esse omnis, debitis.',
      github: 'https://github.com/Phischthecat/Sharkie',
      link:'https://www.google.com',
      img: 'B22219_0017.jpg',
      state: 'rest',
    },
    {
      name: 'Join',
      techs: ['Javascript |', 'HTML |', 'CSS'],
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius fugiat cupiditate odio nam vero esse omnis, debitis.',
      github: 'https://github.com/Phischthecat/Join---Kanban-Board',
      link:'https://www.google.com',
      img: 'B22219_0017.jpg',
      state: 'rest',
    },
    {
      name: 'Portfolio',
      techs: ['Angular |', 'Typescript |', 'HTML |', 'CSS |', 'Material Design'],
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius fugiat cupiditate odio nam vero esse omnis, debitis.',
      github: 'https://github.com/Phischthecat/portfolio',
      link:'https://www.google.com',
      img: 'B22219_0017.jpg',
      state: 'rest',
    },
    {
      name: 'Pokédex',
      techs: ['Javascript |', 'HTML |', 'CSS |', 'API'],
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius fugiat cupiditate odio nam vero esse omnis, debitis.',
      github: 'https://github.com/Phischthecat/portfolio',
      link:'https://www.google.com',
      img: 'B22219_0017.jpg',
      state: 'rest',
    },
  ];

  changeMouseState(state:string, i: number):void {
    this.projects[i].state = state;    
  }
}
