import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ContentModule } from './components/content/content.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    PagesRoutingModule,
    ContentModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
