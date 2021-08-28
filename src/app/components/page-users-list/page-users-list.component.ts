import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/GitHub/User';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-page-users-list',
  templateUrl: './page-users-list.component.html',
  styleUrls: ['./page-users-list.component.sass']
})
export class PageUsersListComponent implements OnInit {

  gitHubusers:Array<User> = [];

  constructor(private gitHubService:GitHubService) { }

  ngOnInit(): void {
    this.initUsers();
  }  

  initUsers(){
    this.gitHubService.getUsers().subscribe((users) => {
      if(users && Array.isArray(users)){
        this.gitHubusers.push(...Object.assign(users));
      }
    }, (error) => {

    }, () => {
      
    })
  }

}
