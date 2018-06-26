import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../component/dashboard/dashboard.component';
import { PortfolioComponent }      from '../component/portfolio/portfolio.component';
import { StockDetailComponent }  from '../component/stock-detail/stock-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:ticker', component: StockDetailComponent },
  { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}