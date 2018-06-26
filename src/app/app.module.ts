import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { StockDetailComponent } from './component/stock-detail/stock-detail.component';
import { AppRoutingModule } from './route/app-routing.module';
import { HighchartsChartComponent } from './component/highcharts-chart/highcharts-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PortfolioComponent,
    StockDetailComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
