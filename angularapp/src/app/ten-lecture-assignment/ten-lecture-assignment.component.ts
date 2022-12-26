import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ten-lecture-assignment',
  templateUrl: './ten-lecture-assignment.component.html',
  styleUrls: ['./ten-lecture-assignment.component.css']
})
export class TenLectureAssignmentComponent implements OnInit {
  names:string
  emptyArray = [];
  constructor() { }

  ngOnInit() {
  }
  addData(value){
  this.emptyArray.push({names:value})
  }

  removeData(value1){
     this.emptyArray.splice(value1,2)
  }

}
