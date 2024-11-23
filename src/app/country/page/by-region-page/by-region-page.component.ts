import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from 'src/app/interface/Country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  public listCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  searchByRegion = (text: string) => {
    this.countryService.searchByRegion(text).subscribe(
      countries => { this.listCountries = countries; }
    )
  }

  ngOnInit(): void {}

}
