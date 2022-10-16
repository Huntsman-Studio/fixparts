import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule
  ],
  exports: [
    MainModule
  ]
})
export class PagesModule { }
