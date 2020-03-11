import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BannerComponent implements OnInit {

  private bookName : string = "Hello, Book Name";
  private bookMonth : string = "September";
  private bookYear : number = 2020;
  private navWidthMin : number = 760;
  private showHamburger : boolean = false;
  constructor() {
  }

  onResize(event) {
    this.showHamburger = (event.target.innerWidth < this.navWidthMin);
  }
  
  ngOnInit() {
  }

}
