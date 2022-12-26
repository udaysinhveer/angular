import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-template-form01',
  templateUrl: './template-form01.component.html',
  styleUrls: ['./template-form01.component.css']
})
export class TemplateForm01Component implements OnInit {
    // employee: Employee;
    submitted:boolean= false;
    employee = new Employee();
  defaultValue = 'Angular';
  defaultGender:string = 'female'

  genders = [
    {id:'1', value:'male'},
    {id:'2', value:'female'}
  ]

  constructor() { }
  ngOnInit() {
  };

 // OnSubmit(form:NgForm){
    // console.log(form.value.course);
    // console.log(form.value.userDetails.username);
    // console.log(form.value.userDetails.email);

    // we are going to use another method using class

  //   var emp = new Employee();
  //   emp.course = form.value.course;
  //   emp.username = form.value.userDetails.username;
  //   emp.email = form.value.userDetails.email;
  
  //    this.saveEmployeeData(emp)
  // }
  // saveEmployeeData(emp:Employee){
  //    console.log(emp.course);
  //    console.log(emp.username);
  //     console.log(emp.email);
    

  // }

  OnSubmit(form:NgForm){
this.employee.course = form.value.course;
this.employee.username = form.value.userDetails.username;
this.employee.email = form.value.userDetails.email;
this.employee.gender = form.value.gender;
form.reset() // this method we add because after click on submit it will send value to server and reset the form
form.controls['course'].setValue('Angular')
form.controls['gender'].setValue('female') 
this.saveEmployeeData(this.employee)
this.submitted = true;
  }
  saveEmployeeData(emp:Employee){
    console.log(emp.course);
    console.log(emp.username);
    console.log(emp.email);
    console.log(emp.gender);
  }

  }

 
