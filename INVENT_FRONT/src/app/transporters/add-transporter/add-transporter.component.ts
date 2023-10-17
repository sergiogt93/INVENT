import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ITransporter, TransporterService } from '../transporter.service';

@Component({
  selector: 'app-add-transporter',
  templateUrl: './add-transporter.component.html',
  styleUrls: ['./add-transporter.component.scss']
})
export class AddTransporterComponent {
  private transporterService = inject(TransporterService);

  fb = inject(FormBuilder)
  snackbar = inject(MatSnackBar)
  dialogRef = inject(MatDialogRef<AddTransporterComponent>);

  @Input() transporters: ITransporter[] = [];
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  sendForm(): void {
    this.transporterService.add(this.form.value);
    this.dialogRef.close();
  }
}
