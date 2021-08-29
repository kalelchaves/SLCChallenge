import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/GitHub/User';
import { GitHubService } from '../../services/github.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.sass']
})
export class SearchUserComponent implements OnInit {  

  @Output()
  resultSearch: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild('searchField') searchField: ElementRef = new ElementRef(undefined);
  
  gitHubUser:User = new User();
  hideContainerControl:boolean = true;

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private gitHubService:GitHubService) { }

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

  hideContainer(){
    this.hideContainerControl = !this.hideContainerControl;    
    setTimeout(() => {      
      this.searchField.nativeElement.focus()
    }, 0);
    
    return this.hideContainerControl;
  }

}

