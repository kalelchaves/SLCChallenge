import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/GitHub/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title="SLC Agrícola";
  githubUser:User = new User();

  constructor(private router:Router){
    
  }

  ngOnInit(){
    
  }

  onGetGithubUser(user:User){
    if(user){
      Object.assign(this.githubUser, user);
      this.router.navigate(['user',this.githubUser.login]).then(() => window.top.location.reload())
    } else {
      console.log("erro");
      this.router.navigate(['404']);
    }    
  }

}
