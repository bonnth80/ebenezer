import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbedsheets',
  templateUrl: './tabbedsheets.component.html',
  styleUrls: ['./tabbedsheets.component.css']
})
export class TabbedsheetsComponent implements OnInit {

  private readonly EXPENSES_TAB : number = 0;
  private readonly TRANSACTIONS_TAB : number = 1;

  private activeTab : number = 0;

  constructor() { }

  ngOnInit() {
  }

  getActiveTab() : number {
    return this.activeTab;
  }

  changeActiveTab(activeTab: number) {
    this.activeTab = activeTab;
  } 

}
