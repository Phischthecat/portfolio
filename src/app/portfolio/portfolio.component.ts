import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      techs: ['Angular |', 'Typescript |', 'HTML |', 'CSS |', 'Firebase'],
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius fugiat cupiditate odio nam vero esse omnis, debitis.',
      github: '#',
      link:'#',
      img: 'photo.jpg',
    },
    {
      name: 'Sharkie',
      techs: ['OOP |', 'Javascript |', 'HTML |', 'CSS'],
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius fugiat cupiditate odio nam vero esse omnis, debitis.',
      github: '#',
      link:'https://www.google.com',
      img: 'photo.jpg',
    },
  ];

}
