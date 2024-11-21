import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  searchByRegion = (text: string) => {
    this.countryService.searchByRegion(text);
  }


  get listCountries() {
    return this.countryService.listCountries;
  }

  ngOnInit(): void {
    console.log("INGRESANDO X REGION ");
    this.countryService.uploadDataCountries();
  }

}
