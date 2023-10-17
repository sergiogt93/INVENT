import { Component, inject, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IUser, UsersService } from '../users.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent {
  @Input() users: IUser[] = [];

  displayedColumns: string[] = ['id', 'username'];
  dataSource = new MatTableDataSource<Partial<IUser>>(this.users)

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Partial<IUser>>(this.users);
  }
}
