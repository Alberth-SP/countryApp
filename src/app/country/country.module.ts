import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByPaisPageComponent } from './page/by-pais-page/by-pais-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { CountryRoutingModule } from './country-routing.module';



@NgModule({
  declarations: [
    ByPaisPageComponent,
    ByRegionPageComponent,
    ByCapitalPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    
  ]
})
export class CountryModule { }
