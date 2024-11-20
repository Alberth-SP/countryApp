import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  styleUrls: ['./by-pais-page.component.css']
})
export class ByPaisPageComponent implements OnInit {

  constructor(private serviceCountry: CountryService) { }


  get listCountries () {
    return this.serviceCountry.listCountries;
  }

  ngOnInit(): void {
  }

}
