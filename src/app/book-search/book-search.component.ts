import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.sass']
})
export class BookSearchComponent implements OnInit {
searchId;
  constructor() { }

  ngOnInit() {
    this.searchId=localStorage.getItem('isbn');
    console.log(this.searchId)
    
  }



}
