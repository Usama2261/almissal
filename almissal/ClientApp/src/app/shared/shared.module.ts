import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NewInBlockComponent } from './new-in-block/new-in-block.component';
import { BrandCategoryComponent } from './brand-category/brand-category.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    NewInBlockComponent,
    BrandCategoryComponent,
  ],
  exports: [BreadcrumbComponent, NewInBlockComponent, BrandCategoryComponent],
  imports: [CommonModule],
})
export class SharedModule {}
