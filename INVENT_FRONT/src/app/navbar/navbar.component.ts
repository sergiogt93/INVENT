import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '#app/auth/login/login.component';
import { RegisterComponent } from '#app/auth/register/register.component';
import { TokenService } from '#app/auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private matDialog = inject(MatDialog)
  private tokenService = inject(TokenService)

  openDialogSignIn(){
    this.matDialog.open(LoginComponent);
  }

  openDialogSignUp(){
    this.matDialog.open(RegisterComponent);
  }

  isAuth() {
    return this.tokenService.isLogged()
  }
}
