import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';
import { ChooseLangService } from '../choose-lang.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('colorUp', [
      state('rest', style({
        color: '#2d2d2d12',
      })),
      state('hover', style({
        color: '#ff990044',
      })),      
      transition('* => *', animate('225ms ease-in')),
    ]),
    trigger('grayscale', [
      state('rest', style({
        filter: 'grayscale(1)',
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
      transition('* => *', animate('225ms ease-in-out')),
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
      transition('rest => *', animate('225ms 150ms ease-in')),
      transition('hover => *', animate('225ms ease-in')),
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
      transition('rest => *', animate('225ms 300ms ease-in')),
      transition('hover => *', animate('225ms ease-in')),
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
      transition('rest => *', animate('225ms 300ms ease-in')),
      transition('hover => *', animate('225ms ease-in')),
    ]),    
  ],
})
export class PortfolioComponent implements OnInit {

  constructor(public lang: ChooseLangService) {}
  
  public projects = [
    {
      name: 'Join',
      techs: ['Javascript', 'HTML', 'CSS'],
      text: {'en': 'A task manager modeled on the Kanban system. Create tasks and organize them using drag-and-drop functionality. Assign them subtasks, users and categories.',
              'de': 'Ein Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen Sie Aufgaben und organisieren Sie diese mit Hilfe von Drag-and-Drop-Funktionen. Weisen Sie ihnen Teilaufgaben, Nutzer und Kategorien zu.'},
      github: 'https://github.com/Phischthecat/Join---Kanban-Board',
      link:'https://join.philschmucker.de',
      img: 'join-view.png',
      state: 'rest',
    },
    {
      name: 'Sharkie',
      techs: ['OOP', 'JavaScript', 'HTML', 'CSS'],
      text: {'en': 'A simple jump-n-run game based on an object-oriented approach. Can you find a way into the cave and defeat the evil killer whale?',
              'de': 'Ein einfaches Jump-n-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Findest du einen Weg in die Höhle und besiegst den bösen Killerwal?'},
      github: 'https://github.com/Phischthecat/Sharkie',
      link:'https://sharkie.philschmucker.de',
      img: 'sharkie-view.png',
      state: 'rest',
    },
    {
      name: 'Portfolio',
      techs: ['Angular', 'TypeScript', 'HTML', 'SCSS' ],
      text: {'en': 'Do you like my portfolio website? Feel free to take a look behind the scenes on Github.',
              'de': 'Gefällt Ihnen meine Portfolio-Website? Werfen Sie auf Github gerne einen Blick hinter die Kulissen.'},
      github: 'https://github.com/Phischthecat/portfolio',
      link:'#',
      img: 'portfolio-view.png',
      state: 'rest',
    },
    {
      name: 'Pokédex',
      techs: ['JavaScript', 'HTML', 'CSS', 'API'],
      text: {'en': 'A simple library based on PokéApi that provides and catalogs Pokémon information. Which is your favorite Pokémon?',
              'de': 'Eine einfache Bibliothek basierend auf der PokéApi, die Pokémon-Informationen bereitstellt und katalogisiert. Welches ist Ihr Lieblingspokémon?'},
      github: 'https://github.com/Phischthecat/pokedex',
      link:'https://pokedex.philschmucker.de',
      img: 'pokedex-view.png',
      state: 'rest',
    },
  ];
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
    onResize() {
    this.innerWidth = window.innerWidth;
  }

  positionArrowRight() {
    if(this.innerWidth > 1100) {
        return 'right: -45px';
    } else {
      return 'right: -35px';
      }
  }
  positionArrowLeft() {
    if(this.innerWidth > 1100) {
      return 'left: -45px';
    } else {
      return 'left: -35px';
      }
  }
  
  ngOnInit(): void {
    
  }

  changeMouseState(state:string, i: number):void {
    if(state == 'rest' && this.innerWidth > 830) {
      this.projects[i].state = state;    
    } else {
      this.projects[i].state = 'hover';
    }
  }

}
