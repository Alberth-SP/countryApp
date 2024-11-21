import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  styleUrls: ['./by-pais-page.component.css']
})
export class ByPaisPageComponent implements OnInit {

  constructor(private serviceCountry: CountryService) { }

  searchByPais = (text: string) => {
    this.serviceCountry.searchByPais(text);
  }


  get listCountries () {
    return this.serviceCountry.listCountries;
  }

  ngOnInit(): void {
    console.log("INGRESANDO X PAIS ");
    this.serviceCountry.uploadDataCountries();
  }

}
