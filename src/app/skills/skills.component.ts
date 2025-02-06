import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false,
})
export class SkillsComponent {
  skills = [
    'Angular',
    'Typescript',
    'Javascript',
    'HTML',
    'CSS',
    'Firebase',
    'Git',
    'Scrum',
    'Rest-API',
    'Figma',
    'Docker',
  ];
  skills_img = [
    'angular.svg',
    'typescript.svg',
    'javascript.svg',
    'html.svg',
    'css.svg',
    'firebase.svg',
    'git.svg',
    'scrum.svg',
    'rest-api.svg',
    'figma.svg',
    'docker.png',
  ];
}
