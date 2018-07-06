import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {
  public books = [];

  constructor(private _booksservice: BooksService) { }

  ngOnInit() {
    this.books = this._booksservice.GetBooksDetails();
  }

}
