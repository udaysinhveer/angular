import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  
display(){
  alert('Subscribed Successfully!')
}

}
