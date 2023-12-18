import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NewInBlockComponent } from './new-in-block/new-in-block.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    NewInBlockComponent
  ],
  exports: [
    BreadcrumbComponent,
    NewInBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
