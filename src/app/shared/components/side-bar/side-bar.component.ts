import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  private _categories: Category[] = [
    {
      code: "001",
      name: "Por Capital"
    },
    {
      code: "002",
      name: "Por Pais"
    },
    {
      code: "002",
      name: "Por Región"
    }
  ];


  get categories(){
    return [...this._categories];
  }

  



  constructor() { }

  ngOnInit(): void {
  }

}
