import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/interface/Country';

@Component({
  selector: 'country-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  @Input()
  public countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
