// this is utility services used for all four components 

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // userName = new Subject<any>();
  userName = new BehaviorSubject('Angular UI Developer') // this is for default value 
  
  constructor() { }
}
