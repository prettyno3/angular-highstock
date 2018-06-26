import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StockDetailModule {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  changed: number;
  changep: string;
  adjclose: number;
  tradeval: number;
  tradevol: number;
}
