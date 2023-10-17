import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from '#app/auth/token.service';

export interface IShipping {
  id: number;
  destinationAddress: string;
  codePostal: string;
  destinationName: string;
  senderName: string;
  weight: number;
  transporter: {
    id: number;
    name: string;
    deleteAt: Date | null;
  }
}

export interface IAddShipping {
  name: string;
}

const initShipping: [] =  [];

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private httpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  private baseUrl: string;
  private httpHeaders: HttpHeaders;

  private _store$ = new BehaviorSubject<IShipping[]>(initShipping);
  public readonly shipping$: Observable<IShipping[]> = this._store$.asObservable();

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/shipping';
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenService.getToken()!
    });
  }

  add(value: IAddShipping) {
    this.httpClient.post(`${this.baseUrl}`, value, {
      headers: this.httpHeaders
    }).subscribe(
      (response: any) => {
        this._store$.getValue().push(response);
        this._store$.next(this._store$.getValue());
      },
      (error) => { console.log(error) }
    );
  }

  getAll() {
    this.httpClient.get(`${this.baseUrl}`,{
      headers: this.httpHeaders
    }).subscribe(
      (response: any) => {
        this._store$.next(response);
      },
      (error) => { console.log(error) }
    );
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`,{
      headers: this.httpHeaders
    }).subscribe(
      (response: any) => {
        this._store$.getValue().filter(
          response => response.id !== id
        );
        this._store$.next(this._store$.getValue());
      },
      (error) => { console.log(error) }
    );
  }
}
