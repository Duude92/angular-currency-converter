import { Component, ViewChild } from '@angular/core';
import { debounceTime, take } from 'rxjs';
import { Currencies } from 'src/api/fixerApi';
import { FixerService } from 'src/app/services/fixer.service';
import { CurrencySelectorComponent } from '../CurrencySelector/currency-selector/currency-selector.component';


let updateCallback: ReturnType<typeof setTimeout> | null = null;
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css', '../../app.component.css'],
})
export class ConverterComponent {
  @ViewChild('selector1') selector1: CurrencySelectorComponent;
  @ViewChild('selector2') selector2: CurrencySelectorComponent;
  private symbols: Currencies;
  constructor(private fixerService: FixerService) { }
  ngOnInit() {
    this.fixerService.getCurrencies().pipe(take(1)).subscribe(currencies => {
      this.symbols = currencies;
      const symbols: string[] = [];
      for (let key in currencies.symbols) {
        symbols.push(key);
      }
      this.selector1.currencies = symbols;
      this.selector2.currencies = symbols;
    });
    setTimeout(() => {
      this.selector1.valueChanged.pipe(debounceTime(50)).subscribe((val) => {
        this.UpdateCurrencyData(true);
      });
      this.selector2.valueChanged.pipe(debounceTime(50)).subscribe((val) => {
        this.UpdateCurrencyData(false);
      });
    }, 100);
  }

  private UpdateCurrencyData(isSelector1: boolean) {
    const [currency1, currency2, amount] = isSelector1 ?
      [this.selector1.currencySymbol, this.selector2.currencySymbol, this.selector1.currencyValue] :
      [this.selector2.currencySymbol, this.selector1.currencySymbol, this.selector2.currencyValue]
    this.fixerService
      .convertCurrencies(currency1, currency2, amount)
      .pipe(take(1))
      .subscribe(
        (data) => ((isSelector1 ? this.selector2 : this.selector1).currencyValue = data.result)
      );
  }
}
