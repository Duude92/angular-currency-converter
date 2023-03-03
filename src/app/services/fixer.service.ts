import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConvertResult, Currencies, LatestResult } from 'src/api/fixerApi';

const FIXER_API_STRING = '9tTgwQoZUinRhwyLavzSLa1Lzeq8X2u1';
const fixerApiBasePath = 'https://api.apilayer.com/fixer/';

const requestHeaders = new HttpHeaders({
  apikey: FIXER_API_STRING,
});

@Injectable({
  providedIn: 'root',
})
export class FixerService {
  constructor(private http: HttpClient) { }

  getUAHCurrent(): Observable<LatestResult> {
    return this.get<LatestResult>('latest?base=UAH&symbols=USD,EUR');
  }

  convertCurrencies(
    currecyFrom: string,
    currencyTo: string,
    amount: number
  ): Observable<ConvertResult> {
    return this.get<ConvertResult>(
      `convert?from=${currecyFrom}&to=${currencyTo}&amount=${amount}`
    );
  }
  getCurrencies(): Observable<Currencies> { //TODO: get a list of currencies
    return this.get<Currencies>('symbols');
  }

  private get<T>(route: string) {
    return this.http.get<T>(fixerApiBasePath + route, {
      headers: requestHeaders,
    });
  }
}
