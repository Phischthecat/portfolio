import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';
import { ChooseLangService } from '../choose-lang.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('colorUp', [
      state(
        'rest',
        style({
          color: '#2d2d2d12',
        })
      ),
      state(
        'hover',
        style({
          color: '#ff990044',
        })
      ),
      transition('* => *', animate('225ms ease-in')),
    ]),
    trigger('grayscale', [
      state(
        'rest',
        style({
          filter: 'grayscale(1)',
        })
      ),
      state(
        'hover',
        style({
          filter: 'grayscale(0)',
        })
      ),
      transition('* => *', animate('225ms ease-in')),
    ]),
    trigger('frame', [
      state(
        'rest',
        style({
          filter: 'opacity(0)',
        })
      ),
      state(
        'hover',
        style({
          filter: 'opacity(1)',
        })
      ),
      transition('* => *', animate('225ms ease-in-out')),
    ]),
    trigger('circle', [
      state(
        'rest',
        style({
          rotate: '135deg',
          transform: 'scale(0)',
        })
      ),
      state(
        'hover',
        style({
          rotate: '0deg',
          transform: 'scale(1)',
        })
      ),
      transition('rest => *', animate('225ms 150ms ease-in')),
      transition('hover => *', animate('225ms ease-in')),
    ]),
    trigger('text-left', [
      state(
        'rest',
        style({
          filter: 'opacity(0)',
          transform: 'translateX(-200px)',
        })
      ),
      state(
        'hover',
        style({
          filter: 'opacity(1)',
          transform: 'translateX(0px)',
        })
      ),
      transition('rest => *', animate('225ms 300ms ease-in')),
      transition('hover => *', animate('225ms ease-in')),
    ]),
    trigger('text-right', [
      state(
        'rest',
        style({
          filter: 'opacity(0)',
          transform: 'translateX(200px)',
        })
      ),
      state(
        'hover',
        style({
          filter: 'opacity(1)',
          transform: 'translateX(0px)',
        })
      ),
      transition('rest => *', animate('225ms 300ms ease-in')),
      transition('hover => *', animate('225ms ease-in')),
    ]),
  ],
  standalone: false,
})
export class PortfolioComponent implements OnInit {
  constructor(public lang: ChooseLangService) {}

  public projects = [
    {
      name: 'Join',
      techs: ['Javascript', 'HTML', 'CSS'],
      text: {
        en: 'This project implements a modern task manager based on the proven Kanban system. The application enables highly efficient organisation of work processes: users can manage tasks agilely using drag-and-drop and structure them in depth by assigning subtasks, team members and categories. The aim is to make complex projects manageable through maximum clarity and intuitive operation.',
        de: 'Dieses Projekt realisiert einen modernen Aufgabenmanager auf Basis des bewährten Kanban-Systems. Die Anwendung ermöglicht eine hocheffiziente Organisation von Arbeitsprozessen: Nutzer können Aufgaben agil per Drag-and-Drop verwalten und durch die Zuweisung von Teilaufgaben, Teammitgliedern und Kategorien tiefgreifend strukturieren. Ziel ist es, komplexe Projekte durch maximale Übersichtlichkeit und intuitive Bedienung beherrschbar zu machen.',
      },
      github: 'https://github.com/Phischthecat/Join---Kanban-Board',
      link: 'https://join.philschmucker.de',
      img: 'join-view.png',
      state: 'rest',
    },
    {
      name: 'Sharkie',
      techs: ['OOP', 'JavaScript', 'HTML', 'CSS'],
      text: {
        en: 'This project demonstrates the consistent implementation of object-oriented software design in a gaming context. Behind the charming jump ’n’ run mechanics lies a modular architecture that neatly separates logic and graphics. Accompany the hero on his mission: find the hidden path into the cave and face the final showdown against the notorious killer whale. A prime example of scalable game development and intuitive level design.',
        de: 'Dieses Projekt demonstriert die konsequente Umsetzung eines objektorientierten Software-Designs im Gaming-Kontext. Hinter der charmanten Jump-’n’-Run-Mechanik verbirgt sich eine modulare Architektur, die Logik und Grafik sauber trennt. Begleiten Sie den Helden auf seiner Mission: Finden Sie den verborgenen Pfad in die Höhle und stellen Sie sich dem finalen Showdown gegen den berüchtigten Killerwal. Ein Paradebeispiel für skalierbare Spieleentwicklung und intuitives Leveldesign.',
      },
      github: 'https://github.com/Phischthecat/Sharkie',
      link: 'https://sharkie.philschmucker.de',
      img: 'sharkie-view.png',
      state: 'rest',
    },
    {
      name: 'Portfolio',
      techs: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'AI', 'API'],
      text: {
        en: 'Did the user interface win you over? Then I invite you to learn more about the technical foundation of this website. You can find the complete source code directly in my GitHub repository.',
        de: 'Hat Sie das User Interface überzeugt? Dann lade ich Sie ein, das technische Fundament dieser Website kennenzulernen. Den vollständigen Quellcode finden Sie direkt in meinem GitHub-Repository.',
      },
      github: 'https://github.com/Phischthecat/portfolio',
      link: '#',
      img: 'portfolio-view.png',
      state: 'rest',
    },
    {
      name: 'Pokédex',
      techs: ['JavaScript', 'HTML', 'CSS', 'API'],
      text: {
        en: 'This project uses the powerful PokéAPI to create a comprehensive digital encyclopaedia. By implementing efficient API calls, real-time data on attributes, types and abilities is catalogued and clearly presented. A project that shows how complex external data sources can be seamlessly integrated into a user-friendly interface. Browse through the catalogues and find your favourite Pokémon!',
        de: 'Dieses Projekt nutzt die leistungsstarke PokéAPI, um eine umfassende, digitale Enzyklopädie zu erstellen. Durch die Implementierung effizienter API-Abrufe werden Echtzeit-Daten zu Attributen, Typen und Fähigkeiten katalogisiert und übersichtlich aufbereitet. Ein Projekt, das zeigt, wie komplexe externe Datenquellen nahtlos in eine benutzerfreundliche Oberfläche integriert werden. Stöbern Sie durch die Kataloge und finden Sie Ihr Lieblings-Pokémon!',
      },
      github: 'https://github.com/Phischthecat/pokedex',
      link: 'https://pokedex.philschmucker.de',
      img: 'pokedex-view.png',
      state: 'rest',
    },
  ];
  public innerWidth: any;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  positionArrowRight() {
    if (this.innerWidth > 1100) {
      return 'right: -45px';
    } else {
      return 'right: -35px';
    }
  }
  positionArrowLeft() {
    if (this.innerWidth > 1100) {
      return 'left: -45px';
    } else {
      return 'left: -35px';
    }
  }

  ngOnInit(): void {}

  changeMouseState(state: string, i: number): void {
    if (state == 'rest' && this.innerWidth > 830) {
      this.projects[i].state = state;
    } else {
      this.projects[i].state = 'hover';
    }
  }
}
