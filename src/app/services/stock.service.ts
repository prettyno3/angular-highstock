import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { StockModule } from '../model/stock/stock.module';
import { PORTFOLIO } from '../mock/mock-portfolio';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getPortforlio(): Observable<StockModule[]> {
    return of(PORTFOLIO);
  }

  getStock(ticker: string): Observable<StockModule> {
    return of(PORTFOLIO.find(stock => stock.ticker === ticker));
  }
}
