import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
