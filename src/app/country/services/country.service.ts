import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  static readonly urlApi = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }
  

  searchByPais(name: string): Observable<any[]>{    
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
        catchError( () => of([]) )


      );
  }

  

  searchByRegion(region: string): Observable<any[]>{    
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
        catchError( () => of([]) )

      );
  } 


  findCountryByCode(code: string): Observable<any>{    
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
        map( objs => objs.length > 0 ? objs[0] : null),
        catchError( () => of(null) )

      );
  }


  searchByCapital(capital: string): Observable<any[]>{    
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
        catchError( () => of([]) )

      );
  }



}
