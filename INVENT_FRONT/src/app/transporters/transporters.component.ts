import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ITransporter } from './transporter.model';
import { TransporterService } from './transporter.service';

import { AddTransporterComponent } from './add-transporter/add-transporter.component';


@Component({
  selector: 'app-transporters',
  templateUrl: './transporters.component.html',
  styleUrls: ['./transporters.component.scss']
})
export class TransportersComponent implements OnDestroy {
  private transporterService = inject(TransporterService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  subscription: Subscription;
  transporters: ITransporter[] = [];

  constructor() {
    this.subscription = this.transporterService.transporters$.subscribe(
      res => this.transporters = res
    );
    this.transporterService.getAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openAddForm() {
    const dialogRef = this.dialog.open(AddTransporterComponent, {
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/transporters']);
      this.transporterService.getAll()
    });
  }
}
