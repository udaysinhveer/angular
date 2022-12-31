import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl = `https://jsonplaceholder.typicode.com/`;

  products = [
    {id:'01', Name : 'Laptop'},
    {id:'02', Name : 'Mobile'},
    {id:'03', Name : 'Cycle'},
    {id:'04', Name : 'Charger'},
    
  ]
  
  constructor(private http:HttpClient) { }
  
display(){
  alert('Subscribed Successfully!')
}

getUserData(){
  let user = 'users'
  return this.http.get(this.apiUrl+user);
}

getDataPosts(){
  let post = 'posts'

  return this.http.get(this.apiUrl+post)
}

}
