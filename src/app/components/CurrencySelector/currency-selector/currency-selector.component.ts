import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css'],
})
export class CurrencySelectorComponent {
  @Input() public currencyValue: number = 1;
  @Input() public currencySymbol = 'UAH'; //should be taken from computer regional settings
  @Input() public currencies: string[] = ['UAH', 'EUR', 'USD'];
  @Output() public valueChanged = new Subject<boolean>();
  OnInputChanged($event) {
    console.log($event)
    if ($event !== null)
      this.currencyValue = $event.target.value;
    this.valueChanged.next(true);
  }
}
