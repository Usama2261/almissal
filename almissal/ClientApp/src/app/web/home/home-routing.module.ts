import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrandSayaComponent } from './brands/brand-saya/brand-saya.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'brand-saya', component: BrandSayaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
