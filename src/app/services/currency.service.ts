import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableCurrencies, CurrencyConverter } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly baseUrl: string = environment.baseUrl;

  private readonly headers: HttpHeaders = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.apiKey)
    .set('X-RapidAPI-Host', environment.apiHost);

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<AvailableCurrencies> {
    return this.http.get<AvailableCurrencies>(`${this.baseUrl}/list`, { headers: this.headers });
  }

  getConversion(params: any): Observable<CurrencyConverter> {
    return this.http.get<CurrencyConverter>(`${this.baseUrl}/convert`, { headers: this.headers, params })
  }
}
