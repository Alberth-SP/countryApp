import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  get listCountries(){
    return this.countryService.listCountries;
  }

  searchByCapital = (text: string) => {
    this.countryService.searchByCapital(text);
  }

  ngOnInit(): void {
    console.log("INGRESANDO X CAPITAL ");
    this.countryService.uploadDataCountries();
  }

}
