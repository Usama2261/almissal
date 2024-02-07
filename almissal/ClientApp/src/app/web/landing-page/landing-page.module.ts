import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { ImageCrouselComponent } from './image-crousel/image-crousel.component';
import { LandingPageComponent } from './landing-page.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { NewInComponent } from './new-in/new-in.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    ImageCrouselComponent,
    FeaturedBrandsComponent,
    NewInComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgbCarouselModule,
    SharedModule
  ]
})
export class LandingPageModule { }
