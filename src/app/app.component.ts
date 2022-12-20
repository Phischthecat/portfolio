import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  isOpen: boolean = false;

  navbarIsOpen(isNavOpen: string) {
    if(isNavOpen === 'true') {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    } else {
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    }
  } 
}
