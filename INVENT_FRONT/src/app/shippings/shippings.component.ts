import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { IShipping, ShippingService } from './shipping.service';
import { AddShippingComponent } from './add-shipping/add-shipping.component';

@Component({
  selector: 'app-shippings',
  templateUrl: './shippings.component.html',
  styleUrls: ['./shippings.component.scss']
})
export class ShippingsComponent {
  private shippingService = inject(ShippingService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  subscription: Subscription;
  shippings: IShipping[] = [];

  constructor() {
    this.subscription = this.shippingService.shipping$.subscribe(
      res => this.shippings = res
    );
    this.shippingService.getAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openAddForm() {
    const dialogRef = this.dialog.open(AddShippingComponent, {
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/shippings']);
      this.shippingService.getAll();
    });
  }
}
