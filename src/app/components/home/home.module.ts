import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { OrderSideNavComponent } from './order-side-nav/order-side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    OrderSideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
