import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myInfo } from '../app.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
@Input() myInputMsg:any;
// @Input()udayInfo;
@Input() employee:any; // in this employeeNames we call names of Array of Object from app.component.ts
@Output() foodevent: EventEmitter <string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.myInputMsg);
    console.log(this.employee)
  }

  addtofood(value){
    this.foodevent.emit(`i am from child component : "${value}"`);
  }
}
