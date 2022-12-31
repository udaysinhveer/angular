import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  price : number = 20000000; // used to convert in currency through currency pipe
  num1 : number = 7.999  // used to convert in number using decimal pipe
  obj = {id:'01', name :'Uday'}
  todayDate = new Date()
  myNumber:number = 78882509;


  ServiceValue;
  constructor(private _utilityService: UtilityService) { 
    this.ServiceValue = this._utilityService.userName;
  }

  ngOnInit() {
  }

}
