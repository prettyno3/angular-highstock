import { Component, OnInit } from '@angular/core';

import { StockModule } from '../../model/stock/stock.module';
import { StockService } from '../../services/stock.service';

import * as Highcharts from 'highcharts/highstock';
import * as HC_map from 'highcharts/modules/map';
import * as HC_exporting from 'highcharts/modules/exporting';
import * as HC_ce from 'highcharts-custom-events';


HC_exporting(Highcharts);
HC_ce(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'orange'
    }
  }
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedStock: StockModule;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStock();
  }

  getStock(): void {
    //alway get aapl for now
    this.stockService.getStock('aapl')
      .subscribe(stock => this.selectedStock = stock);
    this.initCharta();
  }

  Highcharts = Highcharts;

  //----------------------------------------------------------------------
  // Demo #2

  // starting values
  updateStockChart = false;
  usedIndex = 0;
  chartTitle = 'Stock chart'; // for init - change through titleChange
  charts = [];

  // change in all places
  titleChange = function(event) {
    var v = event;
    this.chartTitle = v;
    this.charts.forEach((el) => {
      el.hcOptions.title.text = v;
    });
    // trigger ngOnChanges
    this.updateStockChart = true;
  };

  initCharta(): void{
    this.charts = [{
      hcOptions: {
        title: { text: this.chartTitle },
        subtitle: { text: '1st data set' },
        //need to get max min value from data series
        yAxis: {
          floor: 80,
          ceiling: 200,
          title: {
              text: 'price'
          }
        },
        plotOptions: {
          series: {
            pointStart: new Date(this.selectedStock.stockDetails[0].date).getTime(),
            pointInterval: 86400000 // 1 day
          }
        },
        series: [{
          type: 'line',
          data: this.selectedStock.stockDetails.map(x => x['close']),
          threshold: 10,
          negativeColor: 'red'
        }, {
          type: 'candlestick',
          data: this.selectedStock.stockDetails.map(x => [x['open'],x['high'],x['low'],x['close']])
        }]
      },
      hcCallback: (chart) => { console.log('some variables: ', Highcharts, chart, this.charts); },
      
    }];
  }
}
