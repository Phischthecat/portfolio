import { animate, state, style, transition, trigger } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, Input} from '@angular/core';
import { IsOpenService } from '../is-open.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [
      state('void', 
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        })
      ),
       transition(':enter',[
          animate('400ms 100ms ease-in-out')
        ]),
       transition(':leave',[
          animate('225ms ease-in')
        ]),
    ]),
    trigger('openCloseFooter', [
      state('void', 
        style({
          transform: 'translateY(100%)',          
        })
      ),
       transition(':enter',[
          animate('500ms ease-in-out')
        ]),
       transition(':leave',[
          animate('300ms ease-in')
        ]),
    ]),
  ],
})
export class NavigationComponent {
  constructor(public menu: IsOpenService){}

  moveTo(section) {
    document.location = '#' + section;
    document.documentElement.style.scrollBehavior = "auto";
    this.menu.isOpen = false;
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";      
    }, 100);
  }
  
}
