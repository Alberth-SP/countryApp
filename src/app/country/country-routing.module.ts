import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { ByPaisPageComponent } from './page/by-pais-page/by-pais-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-pais',
    component: ByPaisPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }