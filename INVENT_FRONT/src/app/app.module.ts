import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

//Components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListTransportersComponent } from './transporters/list-transporters/list-transporters.component';
import { HomeComponent } from './home/home.component';
import { AddTransporterComponent } from './transporters/add-transporter/add-transporter.component';
import { TransportersComponent } from './transporters/transporters.component';
import { EditTransporterComponent } from './transporters/edit-transporter/edit-transporter.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ShippingsComponent } from './shippings/shippings.component';
import { ListShippingsComponent } from './shippings/list-shippings/list-shippings.component';
import { AddShippingComponent } from './shippings/add-shipping/add-shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AddTransporterComponent,
    ListTransportersComponent,
    TransportersComponent,
    EditTransporterComponent,
    UsersComponent,
    ListUsersComponent,
    ShippingsComponent,
    ListShippingsComponent,
    AddShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
