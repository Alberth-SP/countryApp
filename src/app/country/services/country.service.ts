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

  uploadDataCountries() {
    this._listCountries = LIST_COUNTRIES;
  }

  searchByPais(country: string){
    console.log(">>> SEARCH2: " +  country.toUpperCase());
    
    this._listCountries =  LIST_COUNTRIES.filter(c => c.nombre.toUpperCase().includes(country.toUpperCase()));
  }

  searchByRegion(region: string){
    console.log(">>> SEARCH2: " +  region.toUpperCase());
    
    this._listCountries =  LIST_COUNTRIES.filter(c => c.region.toUpperCase().includes(region.toUpperCase()));
  }

  searchByCapital(capital: string){
    console.log(">>> SEARCH2: " +  capital.toUpperCase());
    
    this._listCountries =  LIST_COUNTRIES.filter(c => c.capital.toUpperCase().includes(capital.toUpperCase()));
  }

  findCountryByCode(code: string): Country | null {
    console.log(">>> findCountryByCode: " +  code.toUpperCase());
    
    let countries =  LIST_COUNTRIES.filter(c => c.code.toUpperCase() === code.toUpperCase());
    console.log(countries);
    return (countries && countries.length > 0)  ? countries[0] : null;
  }



}
