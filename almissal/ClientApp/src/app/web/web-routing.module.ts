import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
