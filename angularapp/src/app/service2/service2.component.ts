import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {
product={};
  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this.product= this._demoService.products;
  }
  OnSubscribe(){
     this._demoService.display();
  }
}
