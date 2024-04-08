import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ContentComponent } from './content.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
