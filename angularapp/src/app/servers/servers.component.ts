import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name : string =  "Udaysinh Veer";
  ServerId: number = 27;
  ServerStatus : string = 'Online';
  serverCurrentStatus : string = 'Offline';
  allowNewFeature = true;  // used this variable/property -  for Property Binding
  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';

  serverCreationStatus : string = "Server Not Created"
  serverName : string = 'Udaysinhveer.com';

  constructor() {
    setTimeout(()=> {                // we set this is time to enable button
      this.allowNewFeature = false    // after 4 second button will be enable. 
    }, 4000)
   }

  getServerStatus(){
    return this.serverCurrentStatus;  // we create method for string interpolation
  };

  onCreateServer(){
    return this.serverCreationStatus = "Server Created"   // this method is for Event Binding
  }

  ngOnInit() {
  }

}
