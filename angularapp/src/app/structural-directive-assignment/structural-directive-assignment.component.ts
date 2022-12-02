import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/movie';

@Component({
  selector: 'app-structural-directive-assignment',
  templateUrl: './structural-directive-assignment.component.html',
  styleUrls: ['./structural-directive-assignment.component.css']
})
export class StructuralDirectiveAssignmentComponent implements OnInit {
isShowThis : boolean = true;

course : Courses [] = [
  {courseName: 'Angular Developer', frontEndBackend: 'FrontEnd', courseDuration : '3 Months', courseFees : '50000', },
  {courseName: 'React Developer', frontEndBackend: 'FrontEnd', courseDuration : '5 Months', courseFees : '90000', },
  {courseName: 'Java Developer', frontEndBackend: 'BackEnd', courseDuration : '6 Months', courseFees : '100000', }
]

  constructor() { }

  ngOnInit() {
  
  }

}
