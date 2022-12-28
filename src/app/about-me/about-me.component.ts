import { Component, ViewChild, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() {   
    
  }
  ngOnInit(){
    
  }

  moveTo(section) {
    document.location = '#' + section;
  }

}
