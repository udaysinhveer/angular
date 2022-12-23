import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-my-pictures',
  templateUrl: './select-my-pictures.component.html',
  styleUrls: ['./select-my-pictures.component.css']
})
export class SelectMyPicturesComponent implements OnInit {
  selectedPicture:string;

  constructor() {}

  ngOnInit() {
  }

  getPicture(value){
    this.selectedPicture = value.target.value;
  }

}
