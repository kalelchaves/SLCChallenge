import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GitHubService{

    url:string = 'https://api.github.com';    
    token:string='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'    

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