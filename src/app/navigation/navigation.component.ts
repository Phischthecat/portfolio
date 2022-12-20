import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input} from '@angular/core';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [
      state('false', style({
        transform: 'translateY(-100%)',
        filter: 'opacity(0)',
      })),
      state('true', style({
        transform: 'translateY(0%)',
        filter: 'opacity(1)',
      })),      
      transition('false => true', animate('225ms ease-in')),
      transition('true => false', animate('225ms 100ms ease-in')),
    ]),
    trigger('openCloseFooter', [
      state('false', style({
        transform: 'translateY(-100%)',
        filter: 'opacity(0)',
      })),
      state('true', style({
        transform: 'translateY(0%)',
        filter: 'opacity(1)',
      })),      
      transition('false => true', animate('225ms 100ms ease-in')),
      transition('true => false', animate('225ms ease-in')),
    ]),
  ],
})
export class NavigationComponent {
  @Input() isOpen: boolean;

  

 
  
  

 
  
  
  

 
}
