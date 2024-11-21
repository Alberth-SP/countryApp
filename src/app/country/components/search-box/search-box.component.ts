import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchText: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

  }

  search(): void {
    
    this.countryService.searchByPais(this.searchText);

  }

}
