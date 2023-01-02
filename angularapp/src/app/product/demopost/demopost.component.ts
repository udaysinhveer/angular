import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPosts: Post[] = [];

  constructor(private _postservice : PostService) { }
  ngOnInit() {
this._postservice.getPosts().subscribe(res=>{
  console.log(res);

  this.arrPosts = res;
  
})
  }

}