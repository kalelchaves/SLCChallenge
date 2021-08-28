import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../models/GitHub/Repository';
import { User } from '../models/GitHub/User';
import { GitHubService } from '../services/github.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  constructor(
    private gitHubService:GitHubService,
    private route:ActivatedRoute
    ) { }

  gitHubUser:User = new User();

  ngOnInit(): void {
    const login:string|null = this.route.snapshot.paramMap.get('login');
      console.log(login);
      this.getGitHubUser(login?.toString());
    
    
  }

  getGitHubUser(login:string=''){
    this.gitHubService.getUser(login).subscribe((result) => {
      Object.assign(this.gitHubUser, result);
      this.gitHubService.getRepositories(login).subscribe((result) => {
        if(result && Array.isArray(result)){          
          this.gitHubUser.repositories.push(...Object.assign(result));
          this.gitHubUser.repositories.sort((rep1,rep2) => {
            if(rep1.stargazers_count < rep2.stargazers_count){ 
              return 1;
            } else return -1;
          })
        }
      },(error) => {

      }, () => {
        console.log(this.gitHubUser.repositories)
      })
    }, (error) => {

    },() => {
      console.log(this.gitHubUser);
    })
  }

}
