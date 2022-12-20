import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  scrollToTop() {
    // Scroll to top logic
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
}
