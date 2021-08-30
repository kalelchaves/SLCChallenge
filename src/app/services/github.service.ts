import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../environments/environment';

@Injectable()
export class GitHubService{

    url:string = 'https://api.github.com';    
    token:string= environment.gitHubToken;

    constructor(private httpClient:HttpClient){

    }

    getUser(login:string){
        return this.httpClient.get(`${this.url}/users/${login}`,{
            headers:{
                Authorization: `token ${this.token}`
            }
        });
    }    

    getRepositories(login:string){
        return this.httpClient.get(`${this.url}/users/${login}/repos`,{
            headers:{
                Authorization: `token ${this.token}`
            }
        });
    }

    getUsers(){
        return this.httpClient.get(`${this.url}/users`, {
            headers:{
                Authorization: `token ${this.token}`
            }
        });
    }

}