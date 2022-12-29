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
      techs: ['Javascript |', 'HTML |', 'CSS'],
      text: {'en': 'A task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
              'de': 'Ein Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen und weisen Sie ihnen Nutzer und Kategorien zu.'},
      github: 'https://github.com/Phischthecat/Join---Kanban-Board',
      link:'https://phil-schmucker.developerakademie.net/join',
      img: 'join-view.png',
      state: 'rest',
    },
    {
      name: 'Sharkie',
      techs: ['OOP |', 'JavaScript |', 'HTML |', 'CSS'],
      text: {'en': 'A simple Jump-n-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
              'de': 'Ein einfaches Jump-n-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.'},
      github: 'https://github.com/Phischthecat/Sharkie',
      link:'https://phil-schmucker.developerakademie.net/sharkie',
      img: 'sharkie-view.png',
      state: 'rest',
    },
    {
      name: 'Portfolio',
      techs: ['Angular |', 'TypeScript |', 'HTML |', 'CSS |', 'Material Design'],
      text: {'en': 'Do you like my portfolio website? Feel free to take a look behind the scenes on Github.',
              'de': 'Gefällt Ihnen meine Portfolio-Website? Werfen Sie auf Github gerne einen Blick hinter die Kulissen.'},
      github: 'https://github.com/Phischthecat/portfolio',
      link:'#',
      img: 'portfolio-view.png',
      state: 'rest',
    },
    {
      name: 'Pokédex',
      techs: ['JavaScript |', 'HTML |', 'CSS |', 'API'],
      text: {'en': 'Based on the PokéApi a simple libary that provides and catalogues pokemon information.',
              'de': 'Eine einfache Bibliothek basierend auf der PokéApi, die Pokemon-Informationen bereitstellt und katalogisiert.'},
      github: 'https://github.com/Phischthecat/pokedex',
      link:'https://phil-schmucker.developerakademie.net/pokedex/',
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
    if(state == 'rest' && window.innerWidth > 830) {
      this.projects[i].state = state;    
    } else {
      this.projects[i].state = 'hover';
    }
  }

}
