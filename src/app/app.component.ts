import { animateChild, query, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { IsOpenService } from './is-open.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    trigger('childAnimation', [
      transition('* => void', [
        query("@*", [animateChild()], {optional: true})
      ]),
    ])
  ]
})
export class AppComponent  {

  constructor(public menu : IsOpenService, public translate: TranslateService){
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
}

  navbarIsOpen() {
    if(this.menu.isOpen) {
        this.menu.isOpen = false;
        document.body.style.overflow = 'auto';
    } else {
        this.menu.isOpen = true;
        document.body.style.overflow = 'hidden';
    }
  } 
}
