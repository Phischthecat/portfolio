import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('hamBtn') hamBtn: any;
  @Output() openNav = new EventEmitter<string>();
  
  openNavbar() {
    let isOpened = this.hamBtn.nativeElement.getAttribute('aria-expanded');
    if(isOpened === 'false') {
      this.hamBtn.nativeElement.setAttribute('aria-expanded', 'true');
    } else {
      this.hamBtn.nativeElement.setAttribute('aria-expanded', 'false');
    }    
    this.openNav.emit(isOpened);
  }
  }
