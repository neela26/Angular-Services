import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

  public books = [];


  constructor(private _booksservice:BooksService) { }

  ngOnInit() {
    this.books = this._booksservice.GetBooksDetails();
  }
  

}
