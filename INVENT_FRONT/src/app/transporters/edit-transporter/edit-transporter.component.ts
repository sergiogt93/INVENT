import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITransporter, TransporterService } from '../transporter.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-transporter',
  templateUrl: './edit-transporter.component.html',
  styleUrls: ['./edit-transporter.component.scss']
})
export class EditTransporterComponent {
  private transporterService = inject(TransporterService);
  private activatedRoute = inject(ActivatedRoute);
  private route = inject(Router);

  fb = inject(FormBuilder)
  snackbar = inject(MatSnackBar)
  dialogRef = inject(MatDialogRef<EditTransporterComponent>);
  dialogData = inject(MAT_DIALOG_DATA);

  @Input() transporters: ITransporter[] = [];
  form: FormGroup;
  id: string = '';

  constructor() {
    this.form = this.fb.group({
      name: [this.dialogData.name, Validators.required],
    });
  }

  sendForm(): void {
    this.transporterService.edit(this.dialogData.id, this.form.value);
    this.dialogRef.close();
  }
}
