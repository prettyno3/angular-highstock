import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockDetailModule } from '../stock-detail/stock-detail.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class StockModule {
  ticker: string;
  boughtPrice: number;
  stockDetails: any[];
}