import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {
  uname;
  textColor = 'red';
  people:any[]=[
    {
      "name": "jack",
      "country": "UK"
    },
    {
      "name" : "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "Uday",
      "country" : "UK"
    },
  {
    "name": "Surya",
    "country" : "USA"
  }
  ];
  constructor() { }

  ngOnInit() {
  }

  show(value)
  {
    this.uname = value;
  }

}