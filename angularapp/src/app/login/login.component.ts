import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  checkuser(userid, pass){
if (userid =='admin' && pass == 'admin' ) {
  this._route.navigate(['product'])
}
  }

}
