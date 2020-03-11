import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  private title : string = 'ebenezer';
  private navWidthMin : number = 760;
  private showMainMenu : boolean = true;
  constructor() {
  }

  onResize(event) {
    this.showMainMenu = (event.target.innerWidth > this.navWidthMin);
    // console.log(
    //   "menu resized. show menu?: " + this.showMainMenu
    // + "\nevent.target.innerWidth: " + event.target.innerWidth
    // + "\nwindow.screen.width: " + window.screen.width
    // + "\nthis.navWidthMin: " + this.navWidthMin
    // );
  }
  
}
