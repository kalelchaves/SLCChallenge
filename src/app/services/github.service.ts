import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GitHubService{

    url:string = 'https://api.github.com';

    constructor(private httpClient:HttpClient){

    }

    getUser(login:string){
        return this.httpClient.get(`${this.url}/users/${login}`);
    }    

    getRepositories(login:string){
        return this.httpClient.get(`${this.url}/users/${login}/repos`);
    }

}