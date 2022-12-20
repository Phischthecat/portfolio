import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isOpen: boolean;
  socials = [{
    link: 'https://github.com/Phischthecat',
    logo: 'github.svg',
    name: 'github'
   },{
    link: 'p.schmuck.er@web.de',
    logo: 'email.svg',
    name: 'email'
   },{
    link: 'https://www.linkedin.com/in/phil-schmucker-421b17181/',
    logo: 'linkedin.svg',
    name: 'linkedin'
   }];

 
}
