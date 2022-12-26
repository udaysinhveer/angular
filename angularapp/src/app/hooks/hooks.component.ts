import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,OnDestroy,OnInit,SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() userId: number;
  @Input() product:Product;
  @Input()parentData:string;
  @ContentChild("child", {static:false}) ContentChild:ElementRef;
  counter;
  num:number= 1;
  constructor() { 
    console.log("HooksComponent constructor called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    clearInterval(this.counter)
  }
  ngAfterContentChecked(): void {
    this.ContentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)
  }
  ngAfterContentInit(): void {
console.log(`ngAfterContentInit called`, this.ContentChild );

//this.ContentChild.nativeElement.setAttribute('style', 'color:red')

  }
  ngOnInit(): void {
    console.log("HooksComponent ngOnInit called");
    this.counter = setInterval(()=>{
      this.num= this.num + 1;
      console.log(this.num);
      
    }, 2000)
  }
  ngDoCheck(): void {
    console.log("HooksComponent ngDoCheck called ");
    
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

