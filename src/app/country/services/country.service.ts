import { Injectable } from '@angular/core';
import { Country } from 'src/app/interface/Country';
import { LIST_COUNTRIES } from 'src/app/country/data/data';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _listCountries: Country[] = LIST_COUNTRIES;

  constructor() { }

  get listCountries() {
    return [...this._listCountries];
  }

  searchByPais(country: string){
    console.log(">>> SEARCH2: " +  country.toUpperCase());
    
    this._listCountries =  LIST_COUNTRIES.filter(c => c.nombre.toUpperCase().includes(country.toUpperCase()));
  }



}
