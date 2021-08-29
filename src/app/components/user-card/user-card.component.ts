import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/GitHub/User';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  @Input('user') gitHubUser:User = new User();
  @Input('page-full') pageFull:boolean = false;

  constructor(private gitHubService:GitHubService) { }  

  ngOnInit(): void {
    if(!this.gitHubUser.name){
      this.setUser();
    }
  } 

  setUser(){
    this.gitHubService.getUser(this.gitHubUser.login).subscribe(user => Object.assign(this.gitHubUser, user));
  }
  
  

}
