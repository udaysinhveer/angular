import {Component} from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  title = 'angularapp';
  myName = 'I am from app component';
  public uid: number;
  name:string;
  price:number;
  product:Product = new Product();

  employeeRecords:any =[
    {
      eName:'Udaysinh', eCity:'Pune', eSalary:50000
    },
    {
      eName: 'Vishvajeet', eCity:'Mumbai', eSalary:85000
    }
  ]

  foods:string[] = [];
  parentComponent: string = "I am from parent Component" 

  getDataFromChild(value){
    this.foods.push(value)
  }
  handleData(value){
    this.data = value.target.value;
  };
  
  updateProduct(){
    this.product = new Product();

    this.product.name = this.name;
    this.product.price = this.price;
    
  }

  }

 export class myInfo {
    name:string;
    age:number;
    education: string;
    constructor(name, age, education){
      this.name = name;
      this.age = age;
      this.education = education
    };
    
  }

  let udayInfo = new myInfo("udaysinh", 23, "Arts");
  let sabaleInfo = new myInfo("Nikhil Sabale", 26, "BCS")

 