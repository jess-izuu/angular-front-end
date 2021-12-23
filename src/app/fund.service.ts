import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  readonly URL;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8082/api/funds';
  }

  getFunds(): Observable<any> {
    return this.http.get(`${this.URL}`);
  }

  getFund(id: number): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  updateFund(fund: Fund): Observable<any> {
    return this.http.patch(`${this.URL}/${fund.id}`, fund);
  }

  deleteFund(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  addFund(fund: any): Observable<any> {
    return this.http.post(`${this.URL}`, fund);
  }
}
