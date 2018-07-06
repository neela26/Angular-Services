import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  //Write method in service class which returns array 
  // of batch details

  GetBooksDetails()
{
  return [
    {"Name":"c Programming", "price":9000, "author":"abc"},
    {"Name":"Java", "price":7500, "author":"xyz"},
    {"Name":"Angular", "price":2500, "author":"pqr"},
    {"Name":"Php", "price":4000, "author":"aaaa"},
        ];
}
}
