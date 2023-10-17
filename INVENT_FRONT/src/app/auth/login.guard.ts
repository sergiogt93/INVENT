import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const snackBar = inject(MatSnackBar);

  if (tokenService.isLogged() === false && authService.isVerifyToken() === false) {
    router.navigate(['home']);
    return false;
  }
  return true;
};
