import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/GitHub/User';
import { GitHubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  title="SLC Agrícola";
  githubUser:User = new User();  

  constructor(private router:Router){
    
  }

  ngOnInit(){
    
  }

  onGetGithubUser(user:string){
    if(user){      
      this.router.navigate(['user',user]).then(() => window.top.location.reload())
    } else {
      console.log("erro");
      this.router.navigate(['404']);
    }    
  }  

}
