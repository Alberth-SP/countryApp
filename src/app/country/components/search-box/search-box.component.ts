import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchText: string = '';

  @Input()
  public accion!:(valor: string) => void;

  constructor() { }

  ngOnInit(): void {

  }

  search(): void {
    if(this.accion){
      this.accion(this.searchText);
    }
  }

}
