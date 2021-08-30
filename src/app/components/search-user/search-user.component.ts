import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.sass']
})
export class SearchUserComponent implements OnInit {  

  @Output()
  resultSearch: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchField') searchField: ElementRef = new ElementRef(undefined);
    
  hideContainerControl:boolean = true;

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    this.resultSearch.emit(this.searchForm.value.search);    
  }

  hideContainer(){
    this.hideContainerControl = !this.hideContainerControl;    
    setTimeout(() => {      
      this.searchField.nativeElement.focus()
    }, 0);
    
    return this.hideContainerControl;
  }

}

