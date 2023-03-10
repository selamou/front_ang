import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CaddyComponent } from './caddy/caddy.component';
import { ClientComponent } from './client/client.component';
import { PaymentComponent } from './payment/payment.component';
import { UsersComponent } from './users/users.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { CatagoryformComponent } from './catagoryform/catagoryform.component';


@NgModule({
  declarations: [AppComponent, ProductsComponent, LoginComponent, ProductComponent, CaddyComponent, ClientComponent, PaymentComponent, UsersComponent, CatagoryComponent, CatagoryformComponent],
  imports: [ ReactiveFormsModule,BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
