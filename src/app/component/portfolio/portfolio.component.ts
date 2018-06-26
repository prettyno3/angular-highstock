import { Component, OnInit } from '@angular/core';
import { StockModule } from '../../model/stock/stock.module';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  portfolio: StockModule[];

  selectedStock: StockModule;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getPortforlio();
  }

  onSelect(stock: StockModule): void {
    this.selectedStock = stock;
  }

  getPortforlio(): void {
    this.stockService.getPortforlio()
        .subscribe(portfolio => this.portfolio = portfolio);
  }
}
