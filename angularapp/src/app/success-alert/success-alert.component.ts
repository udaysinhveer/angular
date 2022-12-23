import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-success-alert',
   templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  movies : Movie[] = [
    {title: '3 Idiots', director: 'Rajkumar', cast: 'Amir Khan', releaseDate: '2007'},
    {title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    {title: 'KGF', director: 'RockBhai', cast: 'Yash', releaseDate: '2019'},
  ]


  constructor() { }

  ngOnInit() {
  }

}
