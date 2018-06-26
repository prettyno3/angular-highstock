import { StockDetailModule } from './stock-detail.module';

describe('StockDetailModule', () => {
  let stockDetailModule: StockDetailModule;

  beforeEach(() => {
    stockDetailModule = new StockDetailModule();
  });

  it('should create an instance', () => {
    expect(stockDetailModule).toBeTruthy();
  });
});
