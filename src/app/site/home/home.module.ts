import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatGridListModule} from '@angular/material';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ]
})
export class HomeModule { }
