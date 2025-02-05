import { Component } from '@angular/core';

@Component({
    selector: 'app-socials',
    templateUrl: './socials.component.html',
    styleUrls: ['./socials.component.scss'],
    standalone: false
})
export class SocialsComponent {
  socials = [{
    link: 'https://github.com/Phischthecat',
    target: '_blank',
    logo: 'github.svg',
    name: 'github'
   },{
    link: '#contact',
    target: '',
    logo: 'email.svg',
    name: 'email'
   },{
    link: 'https://www.linkedin.com/in/phil-schmucker-421b17181/',
    target: '_blank',
    logo: 'linkedin.svg',
    name: 'linkedin'
   }];

}
