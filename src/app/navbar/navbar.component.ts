import { Component, ViewChild } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(public menu : IsOpenService) {}

  @ViewChild('hamBtn') hamBtn: any;
  
  openNavbar() {  
    this.menu.isOpen = !this.menu.isOpen;  
    this.hamBtn.nativeElement.setAttribute.ariaExpanded = this.menu.isOpen;
  }
  }
