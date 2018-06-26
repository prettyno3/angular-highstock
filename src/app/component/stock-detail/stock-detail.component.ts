import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StockModule } from '../../model/stock/stock.module';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock: StockModule;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stockService: StockService
  ) { }

  ngOnInit() {
    this.getStock();
  }

  getStock(): void {
    const ticker = this.route.snapshot.paramMap.get('ticker');
    this.stockService.getStock(ticker)
      .subscribe(stock => this.stock = stock);
  }
 
  goBack(): void {
    this.location.back();
  }

}
