import { Injectable } from '@angular/core';
import { Country } from 'src/app/interface/Country';

@Injectable({
  providedIn: 'root'
})
export class ContryServiceService {

  private _listCountries: Country[] = [
    {
      icon: "https://flagcdn.com/w40/ar.png",
      bandera: "https://flagcdn.com/ar.svg",
      capital: "Buenos Aires",
      poblacion: 45376763,
      code: "ARG",
    },
    {
        icon: "https://flagcdn.com/w40/br.png",
        bandera: "https://flagcdn.com/br.svg",
        capital: "Brasilia",
        poblacion: 213993437,
        code: "BRA",
    },
    {
        icon: "https://flagcdn.com/w40/ca.png",
        bandera: "https://flagcdn.com/ca.svg",
        capital: "Ottawa",
        poblacion: 38005238,
        code: "CAN",
    },
    {
        icon: "https://flagcdn.com/w40/us.png",
        bandera: "https://flagcdn.com/us.svg",
        capital: "Washington, D.C.",
        poblacion: 331002651,
        code: "USA",
    },
    {
        icon: "https://flagcdn.com/w40/fr.png",
        bandera: "https://flagcdn.com/fr.svg",
        capital: "Paris",
        poblacion: 67391582,
        code: "FRA",
    },
    {
        icon: "https://flagcdn.com/w40/de.png",
        bandera: "https://flagcdn.com/de.svg",
        capital: "Berlin",
        poblacion: 83166711,
        code: "DEU",
    },
    {
        icon: "https://flagcdn.com/w40/in.png",
        bandera: "https://flagcdn.com/in.svg",
        capital: "New Delhi",
        poblacion: 1393409038,
        code: "IND",
    },
    {
        icon: "https://flagcdn.com/w40/au.png",
        bandera: "https://flagcdn.com/au.svg",
        capital: "Canberra",
        poblacion: 25687041,
        code: "AUS",
    },
    {
        icon: "https://flagcdn.com/w40/gb.png",
        bandera: "https://flagcdn.com/gb.svg",
        capital: "London",
        poblacion: 68207114,
        code: "GBR",
    },
    {
        icon: "https://flagcdn.com/w40/jp.png",
        bandera: "https://flagcdn.com/jp.svg",
        capital: "Tokyo",
        poblacion: 125960000,
        code: "JPN",
    },
    {
        icon: "https://flagcdn.com/w40/ru.png",
        bandera: "https://flagcdn.com/ru.svg",
        capital: "Moscow",
        poblacion: 145912025,
        code: "RUS",
    },
    {
        icon: "https://flagcdn.com/w40/cn.png",
        bandera: "https://flagcdn.com/cn.svg",
        capital: "Beijing",
        poblacion: 1402112000,
        code: "CHN",
    },
    {
        icon: "https://flagcdn.com/w40/it.png",
        bandera: "https://flagcdn.com/it.svg",
        capital: "Rome",
        poblacion: 60317116,
        code: "ITA",
    },
    {
        icon: "https://flagcdn.com/w40/es.png",
        bandera: "https://flagcdn.com/es.svg",
        capital: "Madrid",
        poblacion: 47450795,
        code: "ESP",
    },
    {
        icon: "https://flagcdn.com/w40/mx.png",
        bandera: "https://flagcdn.com/mx.svg",
        capital: "Mexico City",
        poblacion: 126014024,
        code: "MEX",
    },
    {
        icon: "https://flagcdn.com/w40/za.png",
        bandera: "https://flagcdn.com/za.svg",
        capital: "Pretoria",
        poblacion: 59308690,
        code: "ZAF",
    },
    {
        icon: "https://flagcdn.com/w40/ng.png",
        bandera: "https://flagcdn.com/ng.svg",
        capital: "Abuja",
        poblacion: 206139589,
        code: "NGA",
    },
    {
        icon: "https://flagcdn.com/w40/kr.png",
        bandera: "https://flagcdn.com/kr.svg",
        capital: "Seoul",
        poblacion: 51780579,
        code: "KOR",
    },
    {
        icon: "https://flagcdn.com/w40/tr.png",
        bandera: "https://flagcdn.com/tr.svg",
        capital: "Ankara",
        poblacion: 85319200,
        code: "TUR",
    },
    {
        icon: "https://flagcdn.com/w40/eg.png",
        bandera: "https://flagcdn.com/eg.svg",
        capital: "Cairo",
        poblacion: 102334404,
        code: "EGY",
    },    
  ]

  constructor() { }

  get listCountries() {
    return [...this._listCountries];
  }



}
