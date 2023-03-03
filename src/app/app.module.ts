import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/Converter/converter.component';
import { CurrencySelectorComponent } from './components/CurrencySelector/currency-selector/currency-selector.component';
import { HeaderComponent } from './components/header/header.component';
import { NoCommaPipe } from './no-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencySelectorComponent,
    ConverterComponent,
    NoCommaPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
