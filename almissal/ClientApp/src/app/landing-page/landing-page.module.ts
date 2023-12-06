import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { ImageCrouselComponent } from './image-crousel/image-crousel.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LandingPageComponent } from './landing-page.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavMenuComponent,
    ImageCrouselComponent,
    FeaturedBrandsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
