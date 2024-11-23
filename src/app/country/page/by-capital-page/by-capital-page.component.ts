import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from 'src/app/interface/Country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  public listCountries: Country[] = [];

  searchByCapital = (text: string) => {
    this.countryService.searchByCapital(text).subscribe(
      countries => { this.listCountries = countries; }
    );
  }

  ngOnInit(): void {}

}
