import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  submitted:boolean= false;
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id : '2',
      value:'Female'
    },
  ]

  myReactiveForm:FormGroup;

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  
createForm(){
  this.myReactiveForm = new FormGroup({
    'username': new FormControl('', [Validators.required,]),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'course': new FormControl('Angular'),
    'gender': new FormControl(''),
  })
}
OnSubmit(){
  console.log(this.myReactiveForm);
  this.submitted= true;
}
}