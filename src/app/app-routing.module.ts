import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: 'moats',
    loadChildren: './moats/moats.module#MoatsModule'
  },
  {
    path: '',
    redirectTo: 'moats',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
