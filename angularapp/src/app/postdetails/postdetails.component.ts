import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  pDetails:any;

  constructor(private _postDetailsService:PostService, private route:ActivatedRoute ) { }

  ngOnInit() 
  {
    let id = this.route.snapshot.params['id'];
    this.pDetails = id;
    this._postDetailsService.getPostById(id).subscribe(res=>{
           console.log(`get post by id`, res);
           
    })
  }

}
