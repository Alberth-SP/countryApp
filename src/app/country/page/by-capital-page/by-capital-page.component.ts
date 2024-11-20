import { Component, OnInit } from '@angular/core';
import { ContryServiceService } from '../../services/contry-service.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countryService: ContryServiceService) { }

  get listCountries(){
    return this.countryService.listCountries;
  }

  ngOnInit(): void {
  }

}
