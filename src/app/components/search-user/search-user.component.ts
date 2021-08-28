import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/GitHub/User';
import { GitHubService } from '../../services/github.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {  

  @Output()
  resultSearch: EventEmitter<User> = new EventEmitter<User>();
  
  gitHubUser:User = new User();

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(
    private http:HttpClient,
    private gitHubService:GitHubService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.gitHubService.getUser(this.searchForm.value.search).subscribe((result) => {
      Object.assign(this.gitHubUser, result);
      this.resultSearch.emit(this.gitHubUser);
    }, (error) => {
      this.resultSearch.emit(undefined);
    })

  }

}

