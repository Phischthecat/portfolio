import { Component, Input } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  standalone: false,
})
export class SocialsComponent {
  constructor(public menu: IsOpenService) {}
  socials = [
    {
      link: 'https://github.com/Phischthecat',
      target: '_blank',
      logo: 'github.svg',
      name: 'github',
    },
    {
      link: '#contact',
      target: '',
      logo: 'email.svg',
      name: 'email',
    },
    {
      link: 'https://www.linkedin.com/in/phil-schmucker/',
      target: '_blank',
      logo: 'linkedin.svg',
      name: 'linkedin',
    },
  ];

  moveTo(section: string) {
    document.location = '#' + section;
    document.documentElement.style.scrollBehavior = 'auto';
    this.menu.isOpen = false;
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
  }
}
