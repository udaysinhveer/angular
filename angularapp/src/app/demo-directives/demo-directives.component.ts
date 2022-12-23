import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.css']
})
export class DemoDirectivesComponent implements OnInit {  
  isShow: boolean = true;
  title : string = "Top 3 Bollywood Movies";
  movies : Movie[] = [
    {title: '3 Idiots', director: 'Rajkumar', cast: 'Amir Khan', releaseDate: '2007'},
    {title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    {title: 'KGF', director: 'RockBhai', cast: 'Yash', releaseDate: '2019'},
  ]
  


  constructor() { }

  ngOnInit() {
 
  }
}
