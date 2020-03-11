import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainstageComponent } from './mainstage/mainstage.component';
import { BannerComponent } from './banner/banner.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { SummarysheetComponent } from './summarysheet/summarysheet.component';
import { OverviewsheetComponent } from './overviewsheet/overviewsheet.component';
import { TabbedsheetsComponent } from './tabbedsheets/tabbedsheets.component';
import { ExpensessheetComponent } from './expensessheet/expensessheet.component';
import { TransactionssheetComponent } from './transactionssheet/transactionssheet.component';
import { ExpensetableComponent } from './expensetable/expensetable.component';

@NgModule({
  declarations: [
    AppComponent,
    MainstageComponent,
    BannerComponent,
    MainmenuComponent,
    ProfileComponent,
    SummarysheetComponent,
    OverviewsheetComponent,
    TabbedsheetsComponent,
    ExpensessheetComponent,
    TransactionssheetComponent,
    ExpensetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
