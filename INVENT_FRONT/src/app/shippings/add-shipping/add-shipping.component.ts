import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { IShipping, ShippingService } from '../shipping.service';

@Component({
  selector: 'app-add-shipping',
  templateUrl: './add-shipping.component.html',
  styleUrls: ['./add-shipping.component.scss']
})
export class AddShippingComponent {
  private shippingService = inject(ShippingService);

  fb = inject(FormBuilder);
  snackbar = inject(MatSnackBar);
  dialogRef = inject(MatDialogRef<AddShippingComponent>);

  @Input() transporters: IShipping[] = [];
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      postalCode: ['', Validators.required],
      destinationAddress: ['', Validators.required],
      destinationName: ['', Validators.required],
      senderName: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  sendForm(): void {
    this.shippingService.add(this.form.value);
    this.dialogRef.close();
  }
}
