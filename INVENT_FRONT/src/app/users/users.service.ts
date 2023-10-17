import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from '#app/auth/token.service';

export interface IUser {
  id: number,
  username: string,
}

const initUsers: [] =  [];

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  private baseUrl: string;
  private httpHeaders: HttpHeaders;

  private _store$ = new BehaviorSubject<IUser[]>(initUsers);
  public readonly transporters$: Observable<IUser[]> = this._store$.asObservable();

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users';
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenService.getToken()!
    });
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
}
