import { Component, Input } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public menu : IsOpenService){}

  scrollToStart() {   
    window.scrollTo(0, 0);    
  }

 
}
