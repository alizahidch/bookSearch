import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  Isbn: string;

  constructor(private router:Router) { }

  ngOnInit() {
  
  }


  searchBook(){
    if(this.Isbn==null){
      alert('kindly enter isbn')
    }
    else{
    this.router.navigateByUrl('search')
    localStorage.setItem('isbn',this.Isbn);
  }
}

}
