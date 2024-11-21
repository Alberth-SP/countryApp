import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByPaisPageComponent } from './page/by-pais-page/by-pais-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ByPaisPageComponent,
    ByRegionPageComponent,
    ByCapitalPageComponent,
    SearchBoxComponent,
    ResultsTableComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
    
  ]
})
export class CountryModule { }
