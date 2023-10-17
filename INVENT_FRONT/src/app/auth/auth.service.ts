import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Response } from 'express'; 

import { TokenService } from './token.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ILogin {
  username: string;
  password: string;
}

interface IRegister {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private route = inject(Router);
  private httpClient = inject(HttpClient);
  private snackbar = inject(MatSnackBar);
  private tokenService = inject(TokenService);

  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/auth';
  }

  register(formValue: IRegister) {
    return this.httpClient.post(`${this.baseUrl}/register`, formValue)
      .subscribe(
        (response: any) => {
          this.tokenService.setToken(response.token);
          this.route.navigate(['transporters']);
        },
        (error) => { this.errorShow('Usuario incorrecto'); }
      );
  }

  login(formValue: ILogin) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValue)
    .subscribe(
      (response: any) => {
        this.tokenService.setToken(response.token);
        this.route.navigate(['transporters']);
      },
      (error) => { this.errorShow('Usuario incorrecto'); });
  }

  isVerifyToken(): boolean {
    let token = this.tokenService.getToken();
    let verifyToken = false;

    if(token === null) {
      this.tokenService.logOut();
      return false;
    }

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenService.getToken() || ''
    });

    this.httpClient.get(`${this.baseUrl}/verifyToken`,{
      headers: httpHeaders
    }).subscribe(
      (response: any) => verifyToken = true,
      (error: Response) => {
        this.tokenService.logOut();
        verifyToken = false
        this.errorShow('Usuario incorrecto');
      })

    return verifyToken;
  }

  errorShow(message: string) {
    this.snackbar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}
