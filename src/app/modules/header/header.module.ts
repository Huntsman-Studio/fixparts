import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MobileNavModule } from './mobile-nav/mobile-nav.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MobileNavModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MobileNavModule
  ]
})
export class HeaderModule { }
