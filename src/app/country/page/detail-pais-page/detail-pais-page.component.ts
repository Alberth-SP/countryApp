import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interface/Country';

@Component({
  selector: 'app-detail-pais-page',
  templateUrl: './detail-pais-page.component.html',
  styleUrls: ['./detail-pais-page.component.css']
})
export class DetailPaisPageComponent implements OnInit {

  
  country: Country | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    var valor = this.route.snapshot.paramMap.get('code');
    console.log(valor);

  }

}
