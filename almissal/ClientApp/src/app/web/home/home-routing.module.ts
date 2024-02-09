import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrandSayaComponent } from './brands/brand-saya/brand-saya.component';
import { BrandSapphireComponent } from './brands/brand-sapphire/brand-sapphire.component';
import { BrandAlkaramStudioComponent } from './brands/brand-alkaram-studio/brand-alkaram-studio.component';
import { BrandBeachtreeComponent } from './brands/brand-beachtree/brand-beachtree.component';
import { BrandBreezeComponent } from './brands/brand-breeze/brand-breeze.component';
import { BrandSanaSafinazComponent } from './brands/brand-sana-safinaz/brand-sana-safinaz.component';
import { BrandLimelightComponent } from './brands/brand-limelight/brand-limelight.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'brand-saya', component: BrandSayaComponent },
      { path: 'brand-limelight', component: BrandLimelightComponent },
      { path: 'brand-sana-safinaz', component: BrandSanaSafinazComponent },
      { path: 'brand-breeze', component: BrandBreezeComponent },
      { path: 'brand-beachtree', component: BrandBeachtreeComponent },
      { path: 'brand-alkaram-studio', component: BrandAlkaramStudioComponent },
      { path: 'brand-sapphire', component: BrandSapphireComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
