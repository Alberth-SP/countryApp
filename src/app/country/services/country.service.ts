import { Injectable } from '@angular/core';
import { Country } from 'src/app/interface/Country';
import { LIST_COUNTRIES } from 'src/app/country/data/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  static readonly urlApi = "https://restcountries.com/v3.1";

  private _listCountries: Country[] = []; //LIST_COUNTRIES;

  constructor(private http: HttpClient) { }

  get listCountries() {
    return [...this._listCountries];
  }

  uploadDataCountries() {
    this._listCountries = []; //LIST_COUNTRIES;
  }

  searchByPais(country: string){
    console.log(">>> SEARCH2: " +  country.toUpperCase());
    this.searchByPaisv2(country).subscribe(
      countries =>  {this._listCountries = countries;}
    );
    //this._listCountries =  LIST_COUNTRIES.filter(c => c.nombre.toUpperCase().includes(country.toUpperCase()));
  }

  searchByPaisv2(name: string): Observable<any[]>{    
    return this.http.get<any[]>(`${CountryService.urlApi}/name/${name}`)
      .pipe(
        map( countries => countries.map( c => ({
          nombre: c.name.common,
          capital: c.capital,
          bandera: c.flags.svg,
          icon:  c.flags.svg,
          poblacion: c.population,
          code: c.cca3,
        }))),

      );
  }

  searchByRegion(region: string){
    console.log(">>> SEARCH2: " +  region.toUpperCase());
    
    //this._listCountries =  LIST_COUNTRIES.filter(c => c.region.toUpperCase().includes(region.toUpperCase()));
    this.searchByRegionv2(region).subscribe(
      countries =>  {this._listCountries = countries;}
    );
  }

  searchByRegionv2(region: string): Observable<any[]>{    
    return this.http.get<any[]>(`${CountryService.urlApi}/region/${region}`)
      .pipe(
        map( countries => countries.map( c => ({
          nombre: c.name.common,
          capital: c.capital,
          bandera: c.flags.svg,
          icon:  c.flags.svg,
          poblacion: c.population,
          code: c.cca3,
        }))),

      );
  }

  searchByCapital(capital: string){
    console.log(">>> searchByCapital: " +  capital.toUpperCase());
    
    //this._listCountries =  LIST_COUNTRIES.filter(c => c.capital.toUpperCase().includes(capital.toUpperCase()));
    this.searchByCapitalv2(capital).subscribe(
      countries =>  {this._listCountries = countries;}
    );
  }

  findCountryByCode(code: string): Country | null {
    console.log(">>> findCountryByCode: " +  code.toUpperCase());
    
    let countries =  LIST_COUNTRIES.filter(c => c.code.toUpperCase() === code.toUpperCase());
    console.log(countries);
    return (countries && countries.length > 0)  ? countries[0] : null;
  }


  findCountryByCodev2(code: string): Observable<any[]>{    
    return this.http.get<any[]>(`${CountryService.urlApi}/alpha/${code}`)
      .pipe(
        map( countries => countries.map( c => ({
          nombre: c.name.common,
          capital: c.capital,
          bandera: c.flags.svg,
          icon:  c.flags.svg,
          poblacion: c.population,
          code: c.cca3,
          traducciones: [
            c.translations['ara']?.common,
            c.translations['bre']?.common,
            c.translations['ces']?.common,
            c.translations['cym']?.common,
            c.translations['deu']?.common,
            c.translations['est']?.common,
            c.translations['fin']?.common,
            c.translations['ita']?.common,
            c.translations['kor']?.common,
            c.translations['per']?.common
          ]
        }))),

      );
  }


  searchByCapitalv2(capital: string): Observable<any[]>{    
    return this.http.get<any[]>(`${CountryService.urlApi}/capital/${capital}`)
      .pipe(
        map( countries => countries.map( c => ({
          nombre: c.name.common,
          capital: c.capital,
          bandera: c.flags.svg,
          icon:  c.flags.svg,
          poblacion: c.population,
          code: c.cca3,
        }))),

      );
  }



}
