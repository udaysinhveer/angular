import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  selectedProduct: string;
  switchExample: string = "ngSwitch Case Example"

  constructor() { }

  ngOnInit() {
  }
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }
}
