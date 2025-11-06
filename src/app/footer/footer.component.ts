import { Component, Input } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {
  year = 2025;
  constructor(public menu: IsOpenService) {
    this.year = this.actualYear();
  }

  scrollToStart() {
    window.scrollTo(0, 0);
  }

  actualYear() {
    const year = new Date();
    return year.getFullYear();
  }
}
