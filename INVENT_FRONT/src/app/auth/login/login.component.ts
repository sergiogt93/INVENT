import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private authService = inject(AuthService);
  fb = inject(FormBuilder)
  snackbar = inject(MatSnackBar)
  dialogRef = inject(MatDialogRef<LoginComponent>)

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  sendForm(): void {
    this.authService.login(this.form.value);
    this.dialogRef.close();
  }
}
