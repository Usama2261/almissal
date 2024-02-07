import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', loadChildren: () => import('./web/web.module').then(m => m.WebModule) },
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
