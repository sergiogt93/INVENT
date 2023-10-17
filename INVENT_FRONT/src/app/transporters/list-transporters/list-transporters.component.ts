import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ITransporter, IEditTransporter, TransporterService } from '../transporter.service';

import { MatTableDataSource } from '@angular/material/table';
import { EditTransporterComponent } from '../edit-transporter/edit-transporter.component';

@Component({
  selector: 'app-list-transporters',
  templateUrl: './list-transporters.component.html',
  styleUrls: ['./list-transporters.component.scss']
})
export class ListTransportersComponent implements OnInit {
  private transporterService = inject(TransporterService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private fb = inject(FormBuilder)
  private snackbar = inject(MatSnackBar)

  form: FormGroup;
  @Input() transporters: ITransporter[] = [];

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<Partial<ITransporter>>(this.transporters)

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Partial<ITransporter>>(this.transporters);
  }

  openEditForm(row: IEditTransporter) {
    const dialogRef = this.dialog.open(EditTransporterComponent, {
      data: row,
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/transporters']);
      this.transporterService.getAll()
    });
  }

  deleteEmployee(id: number) {
    this.transporterService.remove(id);
  }
}
