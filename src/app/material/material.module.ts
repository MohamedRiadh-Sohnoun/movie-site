import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  exports:
  [
   MatPaginatorModule,
   MatMenuModule,
   MatSlideToggleModule,
   MatTabsModule,
   MatPaginatorModule
]
})
export class MaterialModule { }
