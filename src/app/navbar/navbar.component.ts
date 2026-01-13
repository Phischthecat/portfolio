import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChooseLangService } from '../choose-lang.service';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'void',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [animate('400ms 100ms ease-in-out')]),
      transition(':leave', [animate('225ms ease-in')]),
    ]),
  ],
  standalone: false,
})
export class NavbarComponent implements OnInit {
  constructor(
    public menu: IsOpenService,
    public lang: ChooseLangService,
    public translate: TranslateService
  ) {}
  ngOnInit(): void {}

  @ViewChild('hamBtn') hamBtn: any;

  openNavbar() {
    this.menu.isOpen = !this.menu.isOpen;
    setTimeout(() => {
      document
        .querySelector('.' + this.lang.choosenLang)
        .classList.add('checked');
    }, 100);
  }

  changeLang(language) {
    let langaugeSets = document.querySelectorAll('.lang');
    langaugeSets.forEach((langaugeSet) => {
      langaugeSet.classList.remove('checked');
    });
    document.querySelector('.' + language).classList.add('checked');
    this.translate.use(language);
    if (language == 'en') {
      this.lang.choosenLang = 'en';
    } else {
      this.lang.choosenLang = 'de';
    }
  }
}
