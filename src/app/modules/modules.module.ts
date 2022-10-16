import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { PagesModule } from './pages/pages.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    PagesModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    PagesModule,
  ]
})
export class ModulesModule { }
