import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interface/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-detail-pais-page',
  templateUrl: './detail-pais-page.component.html',
  styleUrls: ['./detail-pais-page.component.css']
})
export class DetailPaisPageComponent implements OnInit {

  
  country: Country | null = null;

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    this.country = this.countryService.findCountryByCode(code!);
    console.log(code);

  }

}
