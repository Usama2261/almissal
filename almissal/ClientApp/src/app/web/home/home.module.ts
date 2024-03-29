import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BrandLimelightComponent } from './brands/brand-limelight/brand-limelight.component';
import { BrandSanaSafinazComponent } from './brands/brand-sana-safinaz/brand-sana-safinaz.component';
import { BrandBreezeComponent } from './brands/brand-breeze/brand-breeze.component';
import { BrandBeachtreeComponent } from './brands/brand-beachtree/brand-beachtree.component';
import { BrandAlkaramStudioComponent } from './brands/brand-alkaram-studio/brand-alkaram-studio.component';
import { BrandSapphireComponent } from './brands/brand-sapphire/brand-sapphire.component';
import { SummerLawnComponent } from './summer/summer-lawn/summer-lawn.component';
import { SummerOrganzaComponent } from './summer/summer-organza/summer-organza.component';
import { SummerJacquardComponent } from './summer/summer-jacquard/summer-jacquard.component';
import { SummerPaperCottonComponent } from './summer/summer-paper-cotton/summer-paper-cotton.component';
import { WinterKhaddarComponent } from './winter/winter-khaddar/winter-khaddar.component';
import { WinterCottonComponent } from './winter/winter-cotton/winter-cotton.component';
import { WinterJacquardComponent } from './winter/winter-jacquard/winter-jacquard.component';
import { WinterVelvetComponent } from './winter/winter-velvet/winter-velvet.component';
import { BrandSayaComponent } from './brands/brand-saya/brand-saya.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { HomeComponent } from './home.component';
import { BrandSayaDetailComponent } from './brands/brand-saya/brand-saya-detail/brand-saya-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    BrandSayaComponent,
    BrandLimelightComponent,
    BrandSanaSafinazComponent,
    BrandBreezeComponent,
    BrandBeachtreeComponent,
    BrandAlkaramStudioComponent,
    BrandSapphireComponent,
    SummerLawnComponent,
    SummerOrganzaComponent,
    SummerJacquardComponent,
    SummerPaperCottonComponent,
    WinterKhaddarComponent,
    WinterCottonComponent,
    WinterJacquardComponent,
    WinterVelvetComponent,
    BrandSayaDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
