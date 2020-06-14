import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
//import { LeavesComponent } from './leaves/leaves.component';
//import { ApplyComponent } from './leaves/apply/apply.component';
//import { BalanceComponent } from './leaves/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent
    //LeavesComponent,
    //ApplyComponent,
    //BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
