import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialModule } from './social/social.module';
import { PaymentsModule } from './payments/payments.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SocialModule,
    PaymentsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
