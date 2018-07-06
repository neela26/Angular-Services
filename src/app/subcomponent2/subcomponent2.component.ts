import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {
  public books = [];


  constructor(private _booksservice: BooksService) { }

  ngOnInit() {
    this.books = this._booksservice.GetBooksDetails();
  }
  

}
