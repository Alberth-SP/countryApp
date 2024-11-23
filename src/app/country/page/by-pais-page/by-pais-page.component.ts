import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from 'src/app/interface/Country';

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  styleUrls: ['./by-pais-page.component.css']
})
export class ByPaisPageComponent implements OnInit {

  public listCountries: Country[] = [];

  constructor(private serviceCountry: CountryService) { }

  searchByPais = (text: string) => {
    this.serviceCountry.searchByPais(text).subscribe(
      countries => { this.listCountries = countries; }
    );
  } 

  ngOnInit(): void {
    
  }

}
