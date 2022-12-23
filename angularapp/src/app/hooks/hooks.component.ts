import { Component, Input, OnChanges,OnInit,SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
  @Input() userId: number;
  @Input() product:Product;
  constructor() { 
    console.log("HooksComponent constructor called");
  }
  ngOnInit(): void {
    console.log("HooksComponent ngOnInit called");
  }
  
  ngOnChanges(changes: SimpleChanges): void {

    console.log("HooksComponent ngOnChanges called");
    for (const propname in changes) {
        const prop = changes[propname]

        const{previousValue,currentValue,firstChange} = prop
        console.log(`Prop Name ${propname}`);
        console.log(`Previous Value ${previousValue}`);
        console.log(`current value ${currentValue}`);
        console.log(`first change ${firstChange}`);
        console.log(`--------------------------`);
        
      };

    }
    
  }

