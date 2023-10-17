import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from '#app/auth/token.service';

export interface ITransporter {
  id: number;
  name: string;
}

export interface IAddTransporter {
  name: string;
}

export interface IEditTransporter {
  id: number;
  name: string;
}

const initTransporters: [] =  [];

@Injectable({
  providedIn: 'root'
})
export class TransporterService {
  private httpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  private baseUrl: string;
  private httpHeaders: HttpHeaders;

  private _store$ = new BehaviorSubject<ITransporter[]>(initTransporters);
  public readonly transporters$: Observable<ITransporter[]> = this._store$.asObservable();

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/transporters';
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenService.getToken()!
    });
  }

  add(value: IAddTransporter) {
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

  edit(id: string, body: IEditTransporter) {
    this.httpClient.patch(`${this.baseUrl}/${id}`, body, {
      headers: this.httpHeaders
    }).subscribe(
      (response: any) => {
        const index = this._store$.getValue().findIndex(
          (item) => item.id === +id
        );
        const newValues = this._store$.getValue()[index];
        this._store$.next(this._store$.getValue());
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
