import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { ImageCrouselComponent } from './image-crousel/image-crousel.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LandingPageComponent } from './landing-page.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { NewInComponent } from './new-in/new-in.component';
import { ClientServicesComponent } from './client-services/client-services.component';
import { FooterComponent } from './footer/footer.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavMenuComponent,
    ImageCrouselComponent,
    FeaturedBrandsComponent,
    NewInComponent,
    ClientServicesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgbCarouselModule
  ]
})
export class LandingPageModule { }
