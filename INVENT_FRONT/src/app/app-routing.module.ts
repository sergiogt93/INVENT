import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loginGuard } from './auth/login.guard';

import { HomeComponent } from './home/home.component';
import { TransportersComponent } from './transporters/transporters.component';
import { AddTransporterComponent } from './transporters/add-transporter/add-transporter.component';
import { UsersComponent } from './users/users.component';
import { EditTransporterComponent } from './transporters/edit-transporter/edit-transporter.component';
import { ShippingsComponent } from './shippings/shippings.component';
import { AddShippingComponent } from './shippings/add-shipping/add-shipping.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', canActivate: [loginGuard], component: UsersComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'transporters',
    component: TransportersComponent,
    canActivate: [loginGuard],
    children: [
      {
        path: 'new',
        component: AddTransporterComponent
      },
      {
        path: 'edit/:id',
        component: EditTransporterComponent
      }
    ]
  },
  {
    path: 'shippings',
    canActivate: [loginGuard],
    component: ShippingsComponent,
    children: [
      {
        path: 'new',
        component: AddShippingComponent
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
