import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  items = {};

  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this.items = this._demoService.products;
  }
  OnSubscribe(){
    this._demoService.display();
  }

}
