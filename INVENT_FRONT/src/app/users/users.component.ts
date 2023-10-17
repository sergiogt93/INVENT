import { Component, inject, OnDestroy } from '@angular/core';

import { IUser } from './users.service';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private userService = inject(UsersService);

  subscription: Subscription;
  users: IUser[] = [];

  constructor() {
    this.subscription = this.userService.transporters$.subscribe(
      res => this.users = res
    );
    this.userService.getAll();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
