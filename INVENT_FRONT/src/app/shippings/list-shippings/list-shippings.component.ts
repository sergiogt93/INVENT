import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { IShipping, ShippingService } from '../shipping.service';

@Component({
  selector: 'app-list-shippings',
  templateUrl: './list-shippings.component.html',
  styleUrls: ['./list-shippings.component.scss']
})
export class ListShippingsComponent {
  private shipppingService = inject(ShippingService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private fb = inject(FormBuilder)
  private snackbar = inject(MatSnackBar)

  form: FormGroup;
  @Input() shippings: IShipping[] = [];

  displayedColumns: string[] = ['id', 'senderName', 'destinationName', 'postalCode', 'destinationAddress', 'weight'];
  dataSource = new MatTableDataSource<Partial<IShipping>>(this.shippings)

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Partial<IShipping>>(this.shippings);
  }

  deleteEmployee(id: number) {
    this.shipppingService.remove(id);
  }
}
